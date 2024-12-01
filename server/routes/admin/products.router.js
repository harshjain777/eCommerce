const express = require('express')
const { upload } = require('../../helpers/cloudinary')
const { handleImagUpload } = require('../../controllers/admin/product.controller')

const router = express.Router()

router.post('/upload-img',upload.single("my_file"), handleImagUpload)

module.exports = router