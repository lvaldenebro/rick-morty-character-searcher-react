// Styles
import '../styles/App.scss';
//Components
import CharactersList from './characters/CharactersList';
import CharacterDetail from './characters/CharacterDetail';
import Filters from './filters/Filters';
import Error404 from './Error404';
import Header from './Header';
//Services
import getDataFromApi from '../services/Api.js';
import ls from '../services/LocalStorage';
//Hooks
import { useEffect, useState } from 'react';
//Router
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath} from 'react-router';
//Other imports



function App() {

  const [characterData, setCharacterData] = useState(ls.get('characterData', []));
  const [filterName, setFilterName] = useState(ls.get('filterName',''));
  const [filterSpecies, setFilterSpecies] = useState(ls.get('filterSpecies',''));
  
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
    ls.set('filterName', filterName);
    ls.set('filterSpecies', filterSpecies);
  }, [characterData, filterName, filterSpecies]);

  //HANDLES
  const handleFilterName = (value) => {
    setFilterName(value);
  };

  const handleFilterSpecies = (value) => {
    setFilterSpecies(value);
  };

  //FILTERS
  const charactersFiltered = characterData
  .filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(filterName.toLowerCase())
  })
  .filter((eachCharacter) => {
    return eachCharacter.species.toLowerCase().includes(filterSpecies.toLowerCase());
  });
  
  charactersFiltered.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); //sorts alphabetically the characters by first name

  //DINAMIC ROUTES
  const {pathname} = useLocation();
  const dataURL = matchPath('/character-detail/:characterId', pathname);
  const characterId = dataURL !== null ? dataURL.params.characterId : ''; //to check the route
  const characterLocated = characterData.find((char) => char.id === parseInt(characterId)); //Characterlocated is undefined, the characterId was not meeting the condition, as in the object we had an id, we need to convert the id into INTEGER

  //MANAGING ROUTES
  const CharacterDetailRoute = () => {
    if (characterLocated === undefined) {
      return <Error404/>
    } else {
      return <CharacterDetail character={characterLocated}/>
    }};

  return (
    <div>
      <Header/>
      <main className='main'>
        <Routes>
          <Route path='/' element={
            <>
              <Filters filterName={filterName} handleFilterName={handleFilterName} filterSpecies={filterSpecies} handleFilterSpecies={handleFilterSpecies}/>
              <CharactersList characters={charactersFiltered} />
            </>
            }
          />
          <Route path='/character-detail/:characterId' element={CharacterDetailRoute(characterLocated)}/>
          {/* other routes */}
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;