// Styles
import '../styles/App.scss';
//Components
import getDataFromApi from '../services/Api.js';
import ls from '../services/LocalStorage'
import { useEffect, useState } from 'react';
import CharactersList from '../components/Characters/CharactersList';
import logo from '../images/logo.png';

function App() {

  const [userData, setUserData] = useState(ls.get('userData', []));
  
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
  }, [userData]);

  return (
    <div>
      <header className='header'>
        <img className='header_logo' src={logo} alt="Rick and Morty's logo" title="Rick and Morty's logo"/>
        {/* filter */}
      </header>
      <main>
        <CharactersList users={userData}/> {/*Data received from the API*/}
      </main>
    </div>
  );
}

export default App;