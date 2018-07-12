import {Config} from 'metal-state';
import Component from 'metal-component';
import Soy from 'metal-soy';
import FieldBase from 'ddm-poc-field-type-base';

import templates from './Text.soy.js';
import TextRegister from './TextRegister.soy.js';

class Text extends Component {
    created() {
        console.log('FieldType: Text')
    }

    static STATE = {}
}

Soy.register(Text, templates);

export default Text;