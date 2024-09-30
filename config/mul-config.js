const multer=require('multer');
const path =require('path');
const crypto=require('crypto');

//create the disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images');
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12,(err,name)=>{
        const fn = name.toString("hex")+ path.extname(file.originalname);
        cb(null,fn);
      })
    }
  })
  
  const profileUpload = multer({ storage: storage })

// export the uploads
module.exports= profileUpload;