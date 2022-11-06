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
      console.log(Object.keys(value).map((key) => value[key]));
      value && onUpdate(value);
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
