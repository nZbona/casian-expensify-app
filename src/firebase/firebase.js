import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
firebase.initializeApp(firebaseConfig);


const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => { 
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });




// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Node, Python'
// }); 


// const onValueChange = database.ref()
// .on('value', (snapshot) => {
//     console.log(snapshot.val().name, 'is a', snapshot.val().job.title, 'at', snapshot.val().job.company);

// }, (err) => {
//     console.log('Error while fetching the data: ', err);
// });

// database.ref('notes/-LlXBs-SNoKqAW98fEpF').remove();


// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);

// }).catch((err) => {
//     console.log('Error fetching data', err);
// });

// database.ref().set({ 
//     name: 'Casian Zbona',
//     age: 21,
//     stressLevel: 7,

//     job: {
//         title: 'Software Developer',
//         company: 'SRI'
//     },
//     location: {
//         city: 'Cluj',
//         country: 'Romania',
//         citizenships: 13
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((err) => {
//     console.log('THis failed', err);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'GOV.ro',
//     'location/city': 'Bucharest'
// }).then(() => {
//     console.log('Intell updated')
// }).catch((err) => {
//     console.log('Update failed', err);
// });

// database.ref()
// .remove()
// .then(() => {
//     console.log('Remove succeded.');
// }).catch((err) => {
//     console.log('Remove failed', err);
// });