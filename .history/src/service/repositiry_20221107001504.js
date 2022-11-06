import { GetDatabase, ref, set, remove, onValue, off } from "firebase/database";

class Repository {
  saveCard(userId, card) {
    const db = GetDatabase();
    set(ref(db, `${userId}/spots/${spot.id}`));
  }
}
