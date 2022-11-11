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

  syncActivities(userId, onUpdate) {
    const query = ref(this.db, `Activities`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }

  saveAvtivity(userId, card) {
    set(ref(this.db, `Activities/${card.id}`), card);
  }

  removeActivity(card) {
    const activityRef = ref(this.db, `activities/${card.id}`);
    remove(activityRef);
  }

  updateActivity(cardId, card) {
    update(ref(this.db, `Activities/${card.id}`), card);
  }
}
export default Repository;
