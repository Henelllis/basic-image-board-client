import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import config from './firebaseConfig';


  firebase.initializeApp(config);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots : true});
  console.log('DATABASE : ' , db);

const test = db;
let results = null;
test.collection('Boards').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    })
});

ReactDOM.render(<App firestore={db}/>, document.getElementById('root'));
registerServiceWorker();
