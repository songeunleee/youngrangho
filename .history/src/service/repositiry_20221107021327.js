import {
  getDatabase,
  ref,
  set,
  remove,
  onValue,
  off,
  update,
} from "firebase/database";

class Repository {
  constructor() {
    this.db = getDatabase();
  }

  syncSpots(userId, onUpdate) {
    const query = ref(this.db, `spots`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      let obj = Object.keys(value).map((key) => value[key].userUid);
      // let obj = { ...arr };
      console.log(obj);
      value && onUpdate(obj);
    });
    return () => off(query);
  }

  saveSpot(userId, spot) {
    set(ref(this.db, `spots/${spot.id}`), spot);
  }
  removeSpot(userId, spot) {
    const spotRef = ref(this.db, `spots/${spot.id}`);
    remove(spotRef);
  }
}
export default Repository;
