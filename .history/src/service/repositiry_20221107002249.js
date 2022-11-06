import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class Repository {
  saveSpot(userId, spot) {
    const db = getDatabase();
    set(ref(db, `${userId}/spots/${spot.id}`), spot);
  }
  removeSpot(userId, spot) {
    const db = getDatabase();

    const spotRef = ref(db, `${userId}/spots/${spot.id}`);
    remove(spotRef);
  }
}
export default Repository;
