import { storage } from "../firebase";

export const fileChange = (file, png) => {
   const reader = new FileReader();
   const fileName = file.target.files[0];
   if (fileName) {
      reader.readAsDataURL(fileName);
      if (png) {
         if (fileName.type === "image/png" || fileName.type === "image/jpeg") {
            return {
               fileName,
               // error: { mag: "only recive png & jpg file", error: false },
            };
         } else {
            return {
               error: { msg: "only recive png & jpg file", error: true },
            };
         }
      } else {
         return fileName;
      }
   }
};

export const fileSave = (add, variable) => {
   storage
      .ref()
      .child(`/orders/${variable.icon.name}`)
      .put(variable.icon)
      .on("state_changed", async (snap) => {
         let d = await storage
            .ref(`/orders/${variable.icon.name}`)
            .getDownloadURL();
         var percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
         if (d && percentage >= 100) {
            variable.icon = d;
            add({ variables: variable });
         }
      });
};
