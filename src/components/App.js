// Styles
import '../styles/App.scss';
//Components
import CharactersList from './Characters/CharactersList';
import CharacterDetail from './Characters/CharacterDetail';
import Filters from './Filters';
//Services
import getDataFromApi from '../services/Api.js';
import ls from '../services/LocalStorage';
//Router
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath} from 'react-router';
//Other imports
import logo from '../images/logo.png';


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
  charactersFiltered.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); //sorts alphabetically the characters by the first name

  //DINAMIC ROUTES
  const {pathname} = useLocation();
  const dataURL = matchPath('/character-detail/:characterId', pathname);
  const characterId = dataURL !== null ? dataURL.params.characterId : '';
  const characterLocated = characterData.find((char) => char.id === parseInt(characterId)); //Carachterlocated is undefined, the characterId was not meeting the condition, as in the object we had an id, we need to convert the id into INTEGER

  return (
    <div>
      <header className='header'>
        <img className='header_logo' src={logo} alt="Rick and Morty's logo" title="Rick and Morty's logo"/>
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={
            <>
              <Filters filterName={filterName} handleFilterName={handleFilterName}/>
              <CharactersList characters={charactersFiltered} />
            </>
            }
          />
          {/*Data received from the API. Once we have filtered data, we change it*/}
          <Route path='/character-detail/:characterId' element={<CharacterDetail character={characterLocated}/>}/>
          {/* THIS COMPONENT IS FAILING */}
        </Routes>
      </main>
    </div>
  );
}

export default App;