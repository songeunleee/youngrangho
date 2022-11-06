import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class Repository {
  saveSpot(userId, spot) {
    const db = getDatabase();
    set(ref(db, `${userId}/spots/${spot.id}`), spot);
  }
}
export default Repository;
