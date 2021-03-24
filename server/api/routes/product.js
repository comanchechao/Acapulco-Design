const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const DIR = 'public/uploads/'

// uploading the image to folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const fileName =
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    cb(null, fileName)
  },
})

// file validitation
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    }
  },
})

// const upload = multer({storage: storage})

const Product = require('../../database/models/product')

router.get('/', (req, res, next) => {
  Product.find()
    .select('title price inStock productImage _id')
    .exec()
    .then((result) => {
      const response = {
        count: result.length,
        products: result.map((result) => {
          return {
            title: result.title,
            price: result.price,
            inStock: result.inStock,
            productImage: result.productImage,
            _id: result._id,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/api/products' + result._id,
            },
          }
        }),
      }
      res.status(200).json(response)
    })
    .catch((err) => {
      console.log(err)
      res.status(404).json({ error: err })
    })
})

// only able to upload single file
router.post('/', upload.single('productImage'), (req, res, next) => {
  console.log(req.file)

  const file = req.file;

  if(!file) return res.status(400).send("fill Image field")

  fileName = req.file.filename;
  basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
  const product = new Product({
    title: req.body.title,
    inStock: req.body.inStock,
    price: req.body.price,
    productImage: `${basePath}${fileName}`,
  })
  product
    .save()
    .then((result) => {
      console.log(result)
      res.status(201).json({
        message: 'handing POST the request here and getting shiwfty',
        createdProduct: result,
      })
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Product.findById(id)
    .select('title _id price inStock productImage')
    .then((result) => {
      console.log(result)
      if (result) {
        res.status(200).json({ result })
      } else {
        res
          .status(404)
          .json({ message: 'no valid product found for the provided ID' })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: err })
    })
})

router.patch('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'we updated the shit the thing the pack',
  })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Product.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => console.log(err))
})
module.exports = router
