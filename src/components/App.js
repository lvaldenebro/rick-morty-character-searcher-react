// Styles
import '../styles/App.scss';
//Components
import getDataFromApi from '../services/Api.js';
import ls from '../services/LocalStorage'
import { useEffect, useState } from 'react';
import CharactersList from '../components/Characters/CharactersList';
import logo from '../images/logo.png';
import Filters from './Filters';

function App() {

  const [userData, setUserData] = useState(ls.get('userData', []));
  const [filterName, setFilterName] = useState(ls.get('filterName',''));
  
  //FETCH AND API DATA
  useEffect(() => {
    if (userData.length === 0) {
      getDataFromApi().then((cleanData) => {
        setUserData(cleanData);
      });
    };
  }, []);

  //LocaleStorage
  useEffect(() => {
    ls.set('userData', userData);
    ls.set('filterName', filterName)
  }, [userData, filterName]);

  //HANDLES
  const handleFilterName = (value) => {
    setFilterName(value);
  }

  //FILTERS
  const charactersFiltered = userData.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(filterName.toLowerCase()) //(filterName.toLowerCase()) should all be into the () because all of it is being checked with the includes. BE CAREFUL
  });

  return (
    <div>
      <header className='header'>
        <img className='header_logo' src={logo} alt="Rick and Morty's logo" title="Rick and Morty's logo"/>
        <Filters filterByName={filterName} handleFilterName={handleFilterName}/>
      </header>
      <main>
        <CharactersList users={charactersFiltered}/> {/*Data received from the API. Once we have filtered data, we change it*/}
      </main>
    </div>
  );
}

export default App;