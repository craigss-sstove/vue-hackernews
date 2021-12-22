import Firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// import { initializeApp } from 'firebase/compat/app'
// import { getFireStore, collection, getDocs } from 'firebase/compat/firestore/lite'

export function createAPI ({ config, version }) {
  let api
  // this piece of code may run multiple times in development mode,
  // so we attach the instantiated API to `process` to avoid duplications
  if (process.__API__) {
    api = process.__API__
  } else {
    Firebase.initializeApp(config)
    api = process.__API__ = Firebase.database().ref(version)
  }
  return api
}

// export function createAPI ({ config, version }) {
//   let api
//   // this piece of code may run multiple times in development mode,
//   // so we attach the instantiated API to `process` to avoid duplications
//   if (process.__API__) {
//     api = process.__API__
//   } else {
//     config.databaseURL += version;
//     const app = initializeApp(config)
//     api = process.__API__ = getFireStore(app)
//   }
//   return api
// }
