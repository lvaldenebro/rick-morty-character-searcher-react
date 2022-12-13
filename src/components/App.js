// Styles
import '../styles/App.scss';
//Components
import getDataFromApi from '../services/Api.js';
import ls from '../services/LocalStorage'
import { useEffect, useState } from 'react';
import CharactersList from '../components/Characters/CharactersList';
import CharacterDetail from '../components/Characters/CharacterDetail'; //ToREVIEW
import logo from '../images/logo.png';
import Filters from './Filters';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath} from 'react-router';

function App() {

  const [characterData, setCharacterData] = useState(ls.get('characterData', []));
  const [filterName, setFilterName] = useState(ls.get('filterName',''));
  
  //FETCH AND API DATA
  useEffect(() => {
    if (characterData.length === 0) {
      getDataFromApi().then((cleanData) => {
        setCharacterData(cleanData);
      });
    };
  }, []);

  //LocaleStorage
  useEffect(() => {
    ls.set('characterData', characterData);
    ls.set('filterName', filterName)
  }, [characterData, filterName]);

  //HANDLES
  const handleFilterName = (value) => {
    setFilterName(value);
  }

  //FILTERS
  const charactersFiltered = characterData.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(filterName.toLowerCase()) //(filterName.toLowerCase()) should all be into the () because all of it is being checked with the includes. BE CAREFUL
  });

  //DINAMIC ROUTES
  const {pathname} = useLocation();
  const routeData = matchPath('/character-detail/:characterId', pathname);
  const characterId = routeData !== null ? routeData.params.characterId : '';
  const character = characterData.find((char) => char.id === characterId);

  return (
    <div>
      <header className='header'>
        <img className='header_logo' src={logo} alt="Rick and Morty's logo" title="Rick and Morty's logo"/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <>
              <Filters filterByName={filterName} handleFilterName={handleFilterName}/>
              <CharactersList characters={charactersFiltered}/>
            </>}
           />
          {/*Data received from the API. Once we have filtered data, we change it*/}
          <Route path='/character-detail/:characterId' element={<CharacterDetail character={character}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;