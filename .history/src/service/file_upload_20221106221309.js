import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

class FileUpload {
  constructor() {
    this.storage = getStorage();
  }

  upload(file) {
    this.storageRef = ref(this.storage, `spot/${file.name}`);
    uploadBytes(this.storageRef, file).then((img) =>
      getDownloadURL(ref(storage, img.ref.fullPath)).then((url) => {
        return url;
      })
    );
  }
}

export default FileUpload;
