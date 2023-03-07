import renderer from 'react-test-renderer';
import SearchBox from './search-box.component';

test('testing snapshot', () => {
    const cardcontSnap = renderer.create(<SearchBox />).toJSON;
    expect(cardcontSnap).toMatchSnapshot();
})