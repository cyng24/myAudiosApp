import * as firebase from 'firebase';

// Initialize firebase
const config = {
  apiKey: "AIzaSyACnl4ym_mWF-T1Fr244Qb2yE_z_K3w5as",
  authDomain: "dps-batches-batch5.firebaseapp.com",
  databaseURL: "https://dps-batches-batch5-audios.firebaseio.com/",
  projectId: "dps-batches-batch5",
  storageBucket: "dps-batches-batch5.appspot.com"
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database()