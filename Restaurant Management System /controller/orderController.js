import orderModel from '../models/orderModels.js';

export const getOrders = async (req,res) => {
    try {
        const orders = await orderModel.find();
        res.send(orders);
    } catch (error) {
        res.send("Order could not be found: " + error.message)
    }
}

export const postOrders = async (req,res) => {
    try {
        const newOrder = new orderModel(req.body);
        await newOrder.save();
        res.send(newOrder)
    } catch (error) {
        res.send("Order could not be saved. " + error.message)
    }
}

export const updateOrder = async (req,res) => {
    const orderId = req.params.id;
    const newOrder = req.body;

    try {
        const updateOrder = await orderModel.findByIdAndUpdate(orderId,newOrder, {new:true})
        res.send(`Order updated: ${updateOrder}`)
    } catch (error) {
        res.send("Order could not be patched. " + error.message)        
    }
}

export const deleteOrder = async (req,res) => {
    const deleteId = req.params.id;
    try {
        const deleteOrder = await orderModel.findByIdAndDelete(deleteId)
        res.send("Order deleted")
    } catch (error) {
      res.send("Order could not be deleted. " + error.message);        
    }
}