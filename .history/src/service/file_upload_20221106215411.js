import { getStorage, ref, uploadBytes } from "firebase/storage";

class FileUpload {
  constructor() {
    this.storage = getStorage();
  }

  upload(file) {
    this.storageRef = ref(this.storage, "spot");
    uploadBytes(this.storageRef, file).then(console.log);
  }
}

export default FileUpload;
