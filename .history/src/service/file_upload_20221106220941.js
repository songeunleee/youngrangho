import { getStorage, ref, uploadBytes } from "firebase/storage";

class FileUpload {
  constructor() {
    this.storage = getStorage();
  }

  upload(file) {
    this.storageRef = ref(this.storage, `spot/${file.name}`);
    uploadBytes(this.storageRef, file).then((item) => console.log(item.ref));
  }
}

export default FileUpload;
