import 'clay-icon';
import {Config} from 'metal-state';
import Component from 'metal-component';
import FieldBase from 'ddm-poc-field-type-base';
import Soy from 'metal-soy';

import templates from './Select.soy.js';
import SelectRegister from './SelectRegister.soy.js';

class Select extends Component {
    static STATE = {
        /**
         * @default false
         * @instance
         * @memberof Select
         * @type {?bool}
         */
        editable: Config.bool().value(false),

        /**
         * @default undefined
         * @instance
         * @memberof Select
         * @type {?(string|undefined)}
         */        
        id: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Select
         * @type {?array<object>}
         */
        items: Config.arrayOf(Config.shapeOf({
            name: Config.string(),
        })),

        /**
         * @default undefined
         * @instance
         * @memberof Select
         * @type {?(string|undefined)}
         */
        label: Config.string(),

        /**
         * @default Choose an Option
         * @instance
         * @memberof Select
         * @type {?string}
         */
        placeholder: Config.string().value('Choose an Option'),

        /**
         * @default false
         * @instance
         * @memberof Select
         * @type {?bool}
         */
        required: Config.bool().value(false),

        /**
         * @default false
         * @instance
         * @memberof Select
         * @type {?bool}
         */
        showLabel: Config.bool().value(false),

        /**
         * @default undefined
         * @instance
         * @memberof Select
         * @type {?(string|undefined)}
         */
        spritemap: Config.string(),
    }
}

Soy.register(Select, templates);

export default Select;