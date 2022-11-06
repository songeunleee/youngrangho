import { getStorage, ref } from "firebase/storage";

class FileUPload {
  constructor() {
    this.storage = getStorage();
  }

  upload() {
    storageRef = ref(this.storage, image);
  }
}
