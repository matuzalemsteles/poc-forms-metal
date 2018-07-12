import {ClayManagementToolbar} from 'clay-management-toolbar';
import ClayButton from 'clay-button';
import Component from 'metal-jsx';
import Sidebar from '../../components/Sidebar/index.js';

import LayoutRenderer from 'ddm-poc-form-js-components/Layout/index.js';

/**
 * Builder.
 * @extends Component
 */
class Builder extends Component {
    /**
     * Continues the propagation of event.
     * @param {!Object} indexAllocateField
     * @private
     */
    _handleFieldClicked(indexAllocateField) {
        const Sidebar = this.refs.sidebar;

        Sidebar.show();
        this.emit('fieldClicked', indexAllocateField);
    }

    /**
     * Continues the propagation of event.
     * @param {!Event} event
     * @private
     */
    _handleFieldAdd(event) {
        this.emit('fieldAdd', event);
    }

    /**
     * Continues the propagation of event.
     * @param {!Object} data
     * @private
     */
    _handleFieldMove(data) {
        this.emit('fieldMove', data);
    }

    /**
     * Continues the propagation of event.
     * @param {!Object} indexes
     * @private
     */
    _handleDeleteButtonClicked(indexes) {
        this.emit('fieldDelete', indexes);
    }

    /**
     * Continues the propagation of event.
     * @param {!Event} event
     * @private
     */
    _handleCreationButtonClicked(event) {
        const Sidebar = this.refs.sidebar;

        Sidebar.props.fieldFocus = {
            mode: 'add'
        };
        Sidebar.show();
    }

    /**
     * @inheritDoc
     */
    render() {
        const { 
            context, 
            fieldContext, 
            fieldFocus, 
            listFields, 
            showEditor,
            spritemap
        } = this.props;

        const layoutRendererEvents = {
            fieldClicked: this._handleFieldClicked.bind(this),
            fieldMove: this._handleFieldMove.bind(this),
            deleteButtonClicked: this._handleDeleteButtonClicked.bind(this)
        };

        const sidebarEvents = {
            fieldAdd: this._handleFieldAdd.bind(this)
        };

        const clayManagementToolbarEvents = {
            creationButtonClicked: this._handleCreationButtonClicked.bind(this),
        };

        return(
            <div>
                <ClayManagementToolbar
                    events={clayManagementToolbarEvents}
                    showSearch={false}
                    spritemap={spritemap}
                />
                <div class="container">
                    <div class="sheet">
                        <LayoutRenderer
                            editable={true}
                            events={layoutRendererEvents}
                            pages={context}
                            ref="layoutRenderer"
                            spritemap={spritemap}
                        />
                    </div>
                </div>
                <Sidebar
                    context={context}
                    events={sidebarEvents}
                    fieldContext={fieldContext}
                    fieldFocus={fieldFocus}
                    listFields={listFields}
                    ref="sidebar"
                    spritemap={spritemap}
                />
            </div>
        );
    }
}

export default Builder;
export { Builder };