import {Config} from 'metal-state';
import Component from 'metal-component';
import Soy from 'metal-soy';
import FieldBase from 'ddm-poc-field-type-base';
import 'clay-radio';

import templates from './Radio.soy.js';
import RadioRegister from './RadioRegister.soy.js';

class Radio extends Component {
    created() {
        console.log('FieldType: Radio')
    }

    static STATE = {
        /**
         * @default undefined
         * @instance
         * @memberof Radio
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
        ])
    }
}

Soy.register(Radio, templates);

export default Text;