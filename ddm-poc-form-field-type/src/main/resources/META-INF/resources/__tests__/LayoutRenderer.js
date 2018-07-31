import LayoutRenderer from './__fixtures__/LayoutRenderer';
import Checkbox from '../Checkbox';
import Date from '../Date';
import Grid from '../Grid';
import Radio from '../Radio';
import Select from '../Select';
import Text from '../Text';
import Options from '../Options';

let component;

describe('Layout Render', () => {
    
    it('should render fields', () => {
        component = new LayoutRenderer({
            items: [
                {type: 'checkbox'},
                {type: 'date'},
                {type: 'grid'},
                {type: 'radio'},
                {type: 'select'},
                {type: 'text'},
                {type: 'options'}
            ]
        });
        expect(component).toMatchSnapshot();
    });
});