import { Router } from 'express';
import { deleteOrder, getOrders, postOrders, updateOrder } from '../controller/orderController.js';


const orderRouter = Router();

orderRouter
    .get("/orders", getOrders)
    .post("/orders", postOrders)
    .patch("/orders/:id", updateOrder)
    .delete("/orders/:id", deleteOrder)

export default orderRouter;    