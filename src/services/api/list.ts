import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

import firebaseConfig from "../../firebase-config";

const list = async () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // const response = await fetch(
  //   `http://localhost:4000/?ns=dine-manager/dine_manager_admin.json`
  // );

  // // const response = await fetch(
  // //   "https://food-order-app-80782-default-rtdb.firebaseio.com/meals.json"
  // // );

  // if (!response.ok) {
  //   throw new Error("Something went wrong!");
  // }

  // const responseData = await response.json();
  // // console.log(responseData);

  // const transformedQuotes = [];

  // for (const key in responseData) {
  //   const quoteObj = {
  //     id: key,
  //     ...responseData[key],
  //   };
  //   console.log(quoteObj.description);

  //   transformedQuotes.push(quoteObj);
  // }
  // console.log(transformedQuotes);

  const db = getDatabase(app);
  // const starCountRef = ref(db, "dine-manager/dine_manager_admin");
  // console.log(starCountRef);
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data);
  // });

  //   let starCountRef = ref('posts/' + postId + '/starCount');
  // starCountRef.on('value', (snapshot) => {
  //   const data = snapshot.val();
  //   // updateStarCount(postElement, data);
  // });
};

export default list;
