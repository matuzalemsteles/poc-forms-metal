import 'clay-icon';
import {Config} from 'metal-state';
import Component from 'metal-component';
import FieldBase from 'ddm-poc-field-type-base';
import Soy from 'metal-soy';

import templates from './Date.soy.js';
import DateRegister from './DateRegister.soy.js';

class Date extends Component {
    static STATE = {
        /**
         * @default __/__/____
         * @instance
         * @memberof Date
         * @type {?string}
         */
        placeholder: Config.string().value('__/__/____'),

        /**
         * @default undefined
         * @instance
         * @memberof Date
         * @type {?(string|undefined)}
         */
        value: Config.string(),
    }

    created() {
        console.log('FieldType: Date')
    }
}

Soy.register(Date, templates);

export default Date;