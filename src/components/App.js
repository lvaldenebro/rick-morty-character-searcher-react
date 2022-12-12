// Fichero src/components/App.js
import '../styles/App.css';
import getDataFromApi from '../services/Api.js';
import ls from '../services/LocalStorage'
import { useEffect, useState } from 'react';

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
      <h1>Hi Dayana!</h1>
    </div>
  );
}

export default App;