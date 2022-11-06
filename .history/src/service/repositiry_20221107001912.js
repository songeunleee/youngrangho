import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class Repository {
  saveSpot(userId, spot) {
    const db = GetDatabase();
    set(ref(db, `${userId}/spots/${spot.id}`));
  }
}
export default Repository;
