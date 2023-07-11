import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    tableNummer: {
        type: Number,
        required: true
    },
    foodItems: {
        type: [
            {
                name: String,
                price: Number
            }
        ],
        required: true
    },
    orderTime: {
        type: Date,
        default: Date.now()
    }
})

const orderModel = new mongoose.model("Order", orderSchema)

export default orderModel;