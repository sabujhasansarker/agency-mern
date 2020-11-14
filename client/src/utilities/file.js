import { storage } from "../firebase";

export const fileChange = (file) => {
   const reader = new FileReader();
   const fileName = file.target.files[0];
   reader.readAsDataURL(fileName);
   if (fileName) {
      return fileName;
   }
};

export const fileSave = (file, add, variable) => {
   storage
      .ref()
      .child(`/orders/${file.name}`)
      .put(file)
      .on("state_changed", async (snap) => {
         let d = await storage.ref(`/orders/${file.name}`).getDownloadURL();
         var percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

         if (d && percentage >= 100) {
            add({ variable });
         }
      });
};
