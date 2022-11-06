import { getStorage, ref } from "firebase/storage";

class FileUPload {
  constructor() {
    this.storage = getStorage();
  }

  upload() {
    this.storageRef = ref(this.storage, image);
  }
}
