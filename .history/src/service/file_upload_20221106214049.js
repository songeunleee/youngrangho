import { getStorage, ref ,uploadBytes} from "firebase/storage";

class FileUpload {
  constructor() {
    this.storage = getStorage();
    this.storageRef = ref(this.storage, 'spot');
  }

  upload(file) {
uploadBytes(this.storageRef,file).then(console.log
)};
  }
}
export default FileUpload;
