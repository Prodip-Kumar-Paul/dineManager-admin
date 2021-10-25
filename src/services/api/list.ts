import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

import firebaseConfig from "../../firebase-config";

const list = async () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  console.log(db);
  const dbData = ref(
    db,
    "dine-manager/dine_manager_admin/registered_restaurants/"
  );
  console.log(dbData);
  onValue(dbData, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
};

export default list;
