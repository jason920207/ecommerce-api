/**
 * @Author: xiaojiezhang
 * @Date:   2019-02-13T09:56:22-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-14T12:53:37-05:00
 */
// import entire SDK
const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const fs = require('fs')
const mime = require('mime-types')
const dotenv = require('dotenv')
dotenv.config()

const promiseS3Upload = function (req) {
  return new Promise((resolve, reject) => {
    const filepath = req.file.path
    // const patharray = file.split('/')
    // const keyName = patharray[patharray.length-1].split('.')[0]

    // const keyName = req.file.originalname.split('.')[0]
    const extension = mime.extension(req.file.mimetype)
    const fileStream = fs.createReadStream(filepath)

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${req.file.filename}.${extension}`,
      Body: fileStream,
      ContentType: req.file.mimetype,
      ACL: 'public-read'
    }

    s3.upload(params, function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

// //
// console.log(params)

module.exports = promiseS3Upload
