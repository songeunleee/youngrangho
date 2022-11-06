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

  SyncSpots(userId, onUpdate) {
    const query = ref(this.db, `${userId}/spots`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }

  saveSpot(userId, spot) {
    set(ref(this.db, `${userId}/spots/${spot.id}`), spot);
  }
  removeSpot(userId, spot) {
    const spotRef = ref(this.db, `${userId}/spots/${spot.id}`);
    remove(spotRef);
  }
}
export default Repository;
