import {Config} from 'metal-state';
import {DragDrop, Drag} from 'metal-drag-drop';
import {EventHandler} from 'metal-events';
import classnames from 'classnames';
import ClayButton from 'clay-button';
import Component, { Fragment } from 'metal-jsx';
import dom from 'metal-dom';
import LayoutRenderer, { LayoutSupport } from 'ddm-poc-form-js-components/Layout/index.js';

class Sidebar extends Component {
    static STATE = {
        show: Config.bool().value(false),
        tabActive: Config.number().value(0)
    }

    static PROPS = {
        fieldFocus: Config.object().value({
            mode: 'add'
        }),
        tabs: Config.object().value({
            'add': {
                items: ['Elements']
            },
            'edit': {
                items: ['Basic', 'Properties']
            }
        }),
        context: Config.array(),
    }

    _startDrag() {
        this._dragAndDrop = new DragDrop({
            dragPlaceholder: Drag.Placeholder.CLONE,
            sources: '.ddm-drag-item',
            targets: '.ddm-target',
        });

        this._dragAndDrop.on(DragDrop.Events.END, this._handleFieldMove.bind(this));
        this._dragAndDrop.on(DragDrop.Events.DRAG, this._handleDrag.bind(this));
    }

    attached() {
        this._startDrag();
    }

    created() {
        this._eventHandler = new EventHandler();
    }

    willReceiveProps(nextProps) {
        if (
            typeof nextProps.context !== 'undefined' && 
            nextProps.context.newVal.length
        ) {
            this._dragAndDrop.disposeInternal();
            this._startDrag();
        }

        if (
            typeof nextProps.fieldFocus !== 'undefined' && 
            nextProps.fieldFocus.newVal.mode === 'edit'
        ) {
            this.show();
        }
    }

    _handleOnClose() {
        this.close();
    }

    _handleFieldMove(data, event) {
        event.preventDefault();

        if (!data.target) {
            return;
        }

        const { listFields } = this.props;
        const indexTarget = LayoutSupport.getIndexes(data.target.parentElement);
        const fieldIndex = data.source.getAttribute('data-ddm-field-type-index');
        const fieldProperties = listFields[Number(fieldIndex)];

        this.emit('fieldAdd', {
            target: indexTarget,
            fieldProperties,
            data,
        });
    }

    _handleOnClickPreviusTab() {
        this.props.fieldFocus = {
            mode: 'add',
        };
    }

    _handleDrag(event) {
        const { show } = this.state;

        if (show) {
            this.close();
        }
    }

    _handleOnClickTab(index, event) {
        event.preventDefault();

        this.state.tabActive = index;
    }

    _handleDocClick(event) {
		if (this.element.contains(event.target)) {
			return;
        }
		this.close();
	}

    show() {
        this.state.show = true;

        this._eventHandler.add(
            dom.on(document, 'click', this._handleDocClick.bind(this), true)
        );
    }

    close() {
        this.state.show = false;
        this._eventHandler.removeAllListeners();
    }

    dispose() {
        this._eventHandler.removeAllListeners();
    }

    render() {
        const { show, tabActive } = this.state;
        const { spritemap, listFields, fieldFocus, context, fieldContext } = this.props;
        let currentField = null;

        if (fieldFocus.mode === 'edit') {
            const field = context[fieldFocus.indexPage].rows[fieldFocus.indexRow].columns[fieldFocus.indexColumn].fields[0];
            currentField = listFields.find(item => {
                return item.type == field.type;
            });
        }

        const styles = classnames('sidebar-container', {
            'show': show,
        });

        const angleLeftEvents = {
            click: this._handleOnClickPreviusTab.bind(this),
        };

        return(
            <div class={styles} ref="sidebar">
                <div class="sidebar sidebar-light">
                    <nav class="component-tbar tbar">
                        <div class="container-fluid">
                            <ul class="tbar-nav">
                                {fieldFocus.mode === 'add' && (
                                    <li class="tbar-item tbar-item-expand text-left">
                                        <div class="tbar-section">
                                            <span class="text-truncate-inline">
                                                <span class="text-truncate">Add Elements</span>
                                            </span>
                                        </div>
                                    </li>
                                )}
                                {fieldFocus.mode === 'edit' && (
                                    <Fragment>
                                        <li class="tbar-item">
                                            <ClayButton
                                                events={angleLeftEvents}
                                                icon="angle-left"
                                                spritemap={spritemap}
                                                style="secondary"
                                                size="sm"
                                            />
                                        </li>
                                        <li class="tbar-item tbar-item-expand text-left">
                                            <div>
                                                <ClayButton
                                                    icon={currentField.icon}
                                                    spritemap={spritemap}
                                                    style="secondary"
                                                    label={currentField.name}
                                                    size="sm"
                                                    disabled={true}
                                                />
                                            </div>
                                        </li>
                                    </Fragment>
                                )}
                                <li class="tbar-item">
                                    <a class="component-action" href="#1" role="button" data-onclick={this._handleOnClose.bind(this)}>
                                        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
                                            <use xlink:href={`${spritemap}#times`} />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav class="component-navigation-bar navbar navigation-bar navbar-collapse-absolute navbar-expand-md navbar-underline">
                        <a aria-controls="sidebarLightCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#sidebarLightCollapse00" role="button">
                            <span class="navbar-text-truncate">Details</span>
                            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
                                <use xlink:href={`${spritemap}#caret-bottom`} />
                            </svg>
                        </a>
                        <div class="collapse navbar-collapse" id="sidebarLightCollapse00">
                            <ul class="nav navbar-nav" role="tablist">
                                {this._renderNavItem()}
                            </ul>
                        </div>
                    </nav>
                    <div class="ddm-sidebar-body">
                        {fieldFocus.mode === 'add' && (
                            <ul class="list-group">
                                <li class="list-group-header">
                                    <h3 class="list-group-header-title">Basic Elements</h3>
                                </li>
                                {this._renderListElements()}
                            </ul>
                        )}
                        {fieldFocus.mode === 'edit' && (
                            <div class="sidebar-body">
                                <div class="tab-content">
                                    <LayoutRenderer
                                        activePage={tabActive}
                                        modeRenderer="list"
                                        pages={fieldContext}
                                        spritemap={spritemap}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    _renderNavItem() {
        const { tabActive } = this.state;
        const { fieldFocus, tabs } = this.props;

        return tabs[fieldFocus.mode].items.map((name, index) => {
            const style = classnames('nav-link', {
                'active': index === tabActive,
            });

            return (
                <li class="nav-item" data-onclick={this._handleOnClickTab.bind(this, index)}>
                    <a aria-controls="sidebarLightDetails" class={style} data-toggle="tab" href="#" role="tab">
                        <span class="navbar-text-truncate">{name}</span>
                    </a>
                </li>
            );
        });
    }

    _renderListElements() {
        const { listFields, spritemap } = this.props;

        return listFields.map((field, index) => {
            return(
                <div class="ddm-drag-item list-group-item list-group-item-flex" data-ddm-field-type-index={index}>
                    <div class="autofit-col">
                        <div class="sticker sticker-secondary">
                                <svg aria-hidden="true" class={`lexicon-icon lexicon-icon-${field.icon}`}>
                                    <use xlink:href={`${spritemap}#${field.icon}`} />
                                </svg>
                        </div>
                    </div>
                    <div class="autofit-col autofit-col-expand">
                        <h4 class="list-group-title text-truncate">
                            <span>{field.name}</span>
                        </h4>
                        {field.description && (
                            <p class="list-group-subtitle text-truncate">{field.description}</p>
                        )}
                    </div>
                </div>
            );
        });
    }
}

export default Sidebar;