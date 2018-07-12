import 'clay-icon';
import {Config} from 'metal-state';
import Component from 'metal-component';
import FieldBase from 'ddm-poc-field-type-base';
import Soy from 'metal-soy';

import templates from './Select.soy.js';
import SelectRegister from './SelectRegister.soy.js';

class Select extends Component {
    created() {
        console.log('FieldType: Select')
    }

    static STATE = {
        placeholder: Config.string().value('Choose an Option'),

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
         * @default true
         * @instance
         * @memberof Select
         * @type {?bool}
         */
        filter: Config.bool().value(true),
    }

    _handleOnInput(event) {
        console.log(event.target.value);
    }
}

Soy.register(Select, templates);

export default Select;