import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class Repository {
  constructor() {
    this.db = getDatabase();
  }

  SyncSpots(userId, onUpdate) {}

  saveSpot(userId, spot) {
    set(ref(this.db, `${userId}/spots/${spot.id}`), spot);
  }
  removeSpot(userId, spot) {
    const spotRef = ref(this.db, `${userId}/spots/${spot.id}`);
    remove(spotRef);
  }
}
export default Repository;
