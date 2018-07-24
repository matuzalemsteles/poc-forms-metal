import 'clay-checkbox';
import {Config} from 'metal-state';
import Component from 'metal-component';
import FieldBase from 'ddm-poc-field-type-base';
import Soy from 'metal-soy';

import templates from './Checkbox.soy.js';
import CheckboxRegister from './CheckboxRegister.soy.js';

/**
 * Checkbox.
 * @extends Component
 */
class Checkbox extends Component {
    static STATE = {
        /**
         * @default false
         * @instance
         * @memberof Checkbox
         * @type {?bool}
         */
        editable: Config.bool().value(false),

        /**
         * @default undefined
         * @instance
         * @memberof FieldBase
         * @type {?(string|undefined)}
         */
        helpText: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Checkbox
         * @type {?(string|undefined)}
         */
        id: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Checkbox
         * @type {?(string|undefined)}
         */
        items: Config.arrayOf(Config.shapeOf({
            checked: Config.bool().value(false),
            disabled: Config.bool().value(false),
            id: Config.string(),
            inline: Config.bool().value(false),
            label: Config.string(),
            name: Config.string(),
            showLabel: Config.bool().value(true),
            value: Config.string()
        })).value([
            {
                label: 'Option'
            }
        ]),

        /**
         * @default undefined
         * @instance
         * @memberof Checkbox
         * @type {?(string|undefined)}
         */
        label: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Select
         * @type {?string}
         */
        predefinedValue: Config.string().value('Option 1'),

        /**
         * @default false
         * @instance
         * @memberof Checkbox
         * @type {?bool}
         */
        required: Config.bool().value(false),

        /**
         * @default true
         * @instance
         * @memberof Checkbox
         * @type {?bool}
         */
        showAsSwitcher: Config.bool().value(true),

         /**
         * @default true
         * @instance
         * @memberof Checkbox
         * @type {?bool}
         */
        showLabel: Config.bool().value(false),

        /**
         * @default undefined
         * @instance
         * @memberof Checkbox
         * @type {?(string|undefined)}
         */
        spritemap: Config.string(),

         /**
         * @default undefined
         * @instance
         * @memberof Checkbox
         * @type {?(string|undefined)}
         */
        key: Config.string(),
    }

    _handleToggleChange(event) {
        const { key } = this;

        this.emit('fieldEdit', {
            value: event.delegateTarget.checked,
            key,
            originalEvent: event
        });
    }
}

Soy.register(Checkbox, templates);

export default Checkbox;