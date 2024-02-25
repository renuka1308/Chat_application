// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from "firebase/auth"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBpxaabDCw6LGgFeZvj1RfgK9gY_o7hXhQ",
//   authDomain: "kiwi-5c72a.firebaseapp.com",
//   projectId: "kiwi-5c72a",
//   storageBucket: "kiwi-5c72a.appspot.com",
//   messagingSenderId: "852743212042",
//   appId: "1:852743212042:web:b60b5b4c05602d7fa763f3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth=getAuth(app);
// export const provider= new GoogleAuthProvider();



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from 'firebase/auth' 

// const firebaseConfig = {
//   apiKey: "AIzaSyAagQDU77iXpfeURvZ0TNaAdmB5zOEs8d0",
//   authDomain: "kiwi-eca09.firebaseapp.com",
//   projectId: "kiwi-eca09",
//   storageBucket: "kiwi-eca09.appspot.com",
//   messagingSenderId: "97134153202",
//   appId: "1:97134153202:web:547d2e28ec879bed2a2f6b"
// };



// const app = initializeApp(firebaseConfig);

// export const auth=getAuth(app);

// export const provider=new GoogleAuthProvider();


// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from 'firebase/auth'


// const firebaseConfig = {
//     apiKey: "AIzaSyBpxaabDCw6LGgFeZvj1RfgK9gY_o7hXhQ",
//     authDomain: "kiwi-5c72a.firebaseapp.com",
//     projectId: "kiwi-5c72a",
//     storageBucket: "kiwi-5c72a.appspot.com",
//     messagingSenderId: "852743212042",
//     appId: "1:852743212042:web:b60b5b4c05602d7fa763f3"
//   };


//   //Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth=getAuth(app);
// export const provider=new GoogleAuthProvider();


//after room and chat

import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBpxaabDCw6LGgFeZvj1RfgK9gY_o7hXhQ",
  authDomain: "kiwi-5c72a.firebaseapp.com",
  projectId: "kiwi-5c72a",
  storageBucket: "kiwi-5c72a.appspot.com",
  messagingSenderId: "852743212042",
  appId: "1:852743212042:web:b60b5b4c05602d7fa763f3"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const dataBase=getFirestore(app); 
