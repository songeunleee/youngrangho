import { getStorage, ref } from "firebase/storage";

class FileUpload {
  constructor() {
    this.storage = getStorage();
    storageRef = ref(this.storage, image);
  }

  upload(file) {}
}
export default FileUpload;
