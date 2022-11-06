import { getStorage, ref } from "firebase/storage";

class FileUPload {
  constructor() {
    this.storage = getStorage();
  }

  upload(file) {
    storageRef = ref(this.storage, image);
  }
}
export default FileUPload;
