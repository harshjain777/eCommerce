const { ImagUploadUtil } = require("../../helpers/cloudinary");


const handleImagUpload = async(req,res) => {

    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64')
        const url = "data:"+req.file.mimetype+";base64,"+b64
        const result = await ImagUploadUtil(url)

        res.json({
            success:true,
            result,
            message:'image got uploaded'
        })
        
    } catch (e) {
        console.log(e);
        res.json({
            success:false,
            message:'error while uploading in cloudinary'
        })
        
    }

}

module.exports = {handleImagUpload}