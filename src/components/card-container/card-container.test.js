import React from 'react';
//import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import CardContainer from './card-container.component';

test('testing snapshot', () => {
    const cardcontSnap = renderer.create(<CardContainer monster={{id: 2, name: 'Ervin Howell', username: 'Bretin', email: 'Shanna@melissa.tv'}} />).toJSON;
    expect(cardcontSnap).toMatchSnapshot();
})