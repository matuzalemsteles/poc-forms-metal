import {Config} from 'metal-state';
import Component from 'metal-component';
import Soy from 'metal-soy';
import FieldBase from 'ddm-poc-form-field-type/FieldBase/index.js';

import templates from './Grid.soy.js';
import GridRegister from './GridRegister.soy.js';

class Grid extends Component {
    static STATE = {
         /**
         * @default undefined
         * @instance
         * @memberof Select
         * @type {?array<object>}
         */
        columns: Config.arrayOf(Config.shapeOf({
            label: Config.string(),
            value:  Config.string()
        })).value([{label: 'col1', value:'fieldId'}]),

        /**
         * @default false
         * @instance
         * @memberof Grid
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
         * @memberof Grid
         * @type {?(string|undefined)}
         */
        id: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Grid
         * @type {?(string|undefined)}
         */
        label: Config.string(),

        /**
         * @default false
         * @instance
         * @memberof Grid
         * @type {?(bool|undefined)}
         */
        required: Config.bool().value(false),

        /**
         * @default undefined
         * @instance
         * @memberof Select
         * @type {?array<object>}
         */
        rows: Config.arrayOf(Config.shapeOf({
            label: Config.string(),
            value:  Config.string()
        })).value([{label: 'row', value:'jehf'}]),

        /**
         * @default true
         * @instance
         * @memberof Grid
         * @type {?(bool|undefined)}
         */
        showLabel: Config.bool().value(true),

        /**
         * @default undefined
         * @instance
         * @memberof Grid
         * @type {?(string|undefined)}
         */
        spritemap: Config.string(),
    }
}

Soy.register(Grid, templates);

export default Grid;