import renderer from 'react-test-renderer';
import CardList from './card-list.component';

test('testing snapshot', () => {
    const cardcontSnap = renderer.create(<CardList monsters={[{id: 2, name: 'Ervin Howell', username: 'Bretin', email: 'Shanna@melissa.tv'}]} />).toJSON;
    expect(cardcontSnap).toMatchSnapshot();
})