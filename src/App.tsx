import { useState, useEffect, ChangeEvent } from 'react';
//import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';


export type Monsters = {
  name: string;
  email: string;
  id: string;
}

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //console.log('rendered')
  
  useEffect(() => {
   
    const fetchUsers = async () => {
      const users = await getData<Monsters[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }

    fetchUsers()
  }, []);
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monsters-search-box' 
        placeholder='Search Monsters' 
        onChangeHandler={onSearchChange}
      />
      <CardList monsters = { filteredMonsters }/>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters : [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then((response) => response.json())
//     //   .then((users) => this.setState(() => {
//     //       return {monsters: users}
//     //   })
//     //   )
    
//     return this.getData()
//   }

//   getData = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const response = await data.json();
//     return  this.setState(() => {
//         return {monsters : response}
//     })
//   }

//   onSearchChange =  (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box' 
//           placeholder='Search Monsters' 
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters = { filteredMonsters }/>
//       </div>
//     );
//   }
// }

export default App;
