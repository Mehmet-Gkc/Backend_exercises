import { Router } from "express";
import { addRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controller/roomController.js"

const roomRouter = Router();

roomRouter
    .get("/rooms", getRooms)
    .get("/rooms/:id", getRoom)
    .post("rooms", addRoom)
    .put("/rooms/:id", updateRoom)
    .delete("/rooms/:id", deleteRoom)

export default roomRouter;
