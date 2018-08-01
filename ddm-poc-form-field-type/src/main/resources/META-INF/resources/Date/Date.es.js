import 'clay-icon';
import {Config} from 'metal-state';
import Component from 'metal-component';
import FieldBase from 'ddm-poc-form-field-type/FieldBase/index.js';
import Soy from 'metal-soy';

import templates from './Date.soy.js';
import DateRegister from './DateRegister.soy.js';

/**
 * Date.
 * @extends Component
 */
class Date extends Component {
    static STATE = {
        /**
         * @default false
         * @instance
         * @memberof Date
         * @type {?bool}
         */
        editable: Config.bool().value(false),

        /**
         * @default undefined
         * @instance
         * @memberof Date
         * @type {?(string|undefined)}
         */
        helpText: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Date
         * @type {?(string|undefined)}
         */
        id: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Date
         * @type {?(string|undefined)}
         */
        label: Config.string(),

        /**
         * @default __/__/____
         * @instance
         * @memberof Date
         * @type {?string}
         */
        placeholder: Config.string().value('__/__/____'),

        /**
         * @default false
         * @instance
         * @memberof Date
         * @type {?bool}
         */
        required: Config.bool().value(false),

        /**
         * @default true
         * @instance
         * @memberof Date
         * @type {?bool}
         */
        showLabel: Config.bool().value(true),

        /**
         * @default undefined
         * @instance
         * @memberof Date
         * @type {?(string|undefined)}
         */
        spritemap: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Date
         * @type {?(string|undefined)}
         */
        value: Config.string(),
    }
}

Soy.register(Date, templates);

export default Date;