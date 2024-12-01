

const handleImagUpload = async(req,res) => {

    try {
        
    } catch (e) {
        console.log(e);
        res.json({
            success:false,
            message:'error while uploading in cloudinary'
        })
        
    }

}