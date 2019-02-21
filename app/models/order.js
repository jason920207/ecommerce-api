const mongoose = require('mongoose')
const oldCartSchema = new mongoose.Schema({
  products: [
    {
      product: {
        imagePath: {
          type: String,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true,
          min: 0
        }
      },
      quantity: {
        type: Number,
        required: true,
        min: 0
      }
    }
  ]
})

const orderSchema = new mongoose.Schema({
  orderData: {
    type: oldCartSchema
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
