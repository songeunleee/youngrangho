import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

class FileUpload {
  constructor() {
    this.storage = getStorage();
  }

  async upload(file) {
    this.storageRef = ref(this.storage, `spot/${file.name}`);
    const img = await uploadBytes(this.storageRef, file);
    return getDownloadURL(ref(this.storage, img.ref.fullPath));
  }
}

export default FileUpload;
