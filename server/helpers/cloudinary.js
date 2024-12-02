const cloudinary = require('cloudinary').v2
const multer = require('multer')

cloudinary.config({ 
    cloud_name: 'dgsosqpa0', 
    api_key: '439747641958291', 
    api_secret: 'qxc-gizVSynr1SLCjKd4piN2png'
});

const storage = new multer.memoryStorage()

async function ImagUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file,{
        resource_type:"auto",
    });

    return result;
}

const upload = multer({storage})

module.exports = {upload,ImagUploadUtil}
