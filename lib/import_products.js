'use strict'

const fs = require('fs')
const productSeed = []

const importProducts = function (inFile, outFile) {
  // readFile to import tsv (tab-separated value) file containing products
  const importProductsReadFile = inFile => {
    return new Promise((resolve, reject) => {
      fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
        if (error) {
          reject(error)
        }
        resolve(content)
      })
    })
  }

  // writeFile to export object "products" to file used in POST route
  const importProductsWriteFile = (outFile, productSeed) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(outFile, productSeed, { flag: 'w' }, error => {
        if (error) {
          reject(error)
        }
        resolve()
      })
    })
  }

  importProductsReadFile(inFile)
    .then(productsData => {
      // Split productsData into array with each product's data tab delimited.
      const productsArray = productsData.split('\r\n')
      const productsNestedArray = []
      const productsDetailsArray = []
      // Split each product's data at tabs, yields an array of product arrays.
      for (let i = 0; i < productsArray.length; i++) {
        productsNestedArray[i] = productsArray[i].split('\t')
      }
      // Iterate through each nested array and push values into new empty array.
      for (var i = 1; i < productsNestedArray.length; i++) {
        for (var j = 0; j < productsNestedArray[i].length; j++) {
          productsDetailsArray.push(productsNestedArray[i][j])
        }
      }
      // Iterate through resultant array, create object with every 4 index
      // values, and push into empty array.
      for (let i = 0; i < productsDetailsArray.length; i += 4) {
        const productObject = {
          'imagePath': productsDetailsArray[i],
          'title': productsDetailsArray[i + 1],
          'description': productsDetailsArray[i + 2],
          'price': productsDetailsArray[i + 3]
        }
        productSeed.push(productObject)
      }
      // Insert array into products object
      const productObject = {products: productSeed}
      // Convert productObject to JSON and add additional text for `seed.js`.
      const productSeedData = '\'use strict\'\n\nconst products = ' + JSON.stringify(productObject, null, 2) + '\n\nmodule.exports = products.products\n'
      // Return data to be inserted in writeFile.
      return productSeedData
    })
    // Call writeFile.
    .then(productSeedData => { importProductsWriteFile(outFile, productSeedData) })
    .catch(console.error)
}

// Call `importProducts` with paths for `inFile``.tsv` from Excel and `outFile`.
importProducts('./data/product_data.tsv', './config/seed.js')
