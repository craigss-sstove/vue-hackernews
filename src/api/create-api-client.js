import Firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// import { initializeApp } from 'firebase/compat/app'
// import { getFireStore, collection, getDocs } from 'firebase/compat/firestore/lite'

export function createAPI ({ config, version }) {
  Firebase.initializeApp(config)
  return Firebase.database().ref(version)
}

// export function createAPI ({ config, version }) {
//   config.databaseURL += version;
//   const app = initializeApp(config);
//   return getFireStore(app);
// }
