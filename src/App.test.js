import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import CardContainer from './components/card-container/card-container.component';
test('renders learn react link', () => {
  render(<App />);
  expect.assertions(2)
  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent('Monsters Rolodex');
  
});

test('check serchbox', () => {
  render(<App />);
  render(<SearchBox />)

  expect(screen.getByPlaceholderText('Search Monsters')).toBeInTheDocument();
})


test('testing monster card component', () => {
  render(<App />);
  render(<SearchBox />)
  render(<CardList monsters={[{id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz'}]} />);
  render(<CardContainer monster={{id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz'}} />);
  expect.assertions(3);
  expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Leanne Graham')
  expect(screen.getByPlaceholderText('Search Monsters')).toBeInTheDocument();
  userEvent.type(screen.getByPlaceholderText('Search Monsters'), 'conan')
  expect(screen.getByPlaceholderText('Search Monsters')).toHaveValue('conan')
})