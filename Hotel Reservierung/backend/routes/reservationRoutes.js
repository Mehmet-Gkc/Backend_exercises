import { Router } from "express";
import { addReservation, deleteReservation, getReservation, getReservations, updateReservation } from "../controller/reservationController.js";

const reservationRouter = Router();

reservationRouter
    .get("/reservations", getReservations)
    .get("/reservations/:id", getReservation)
    .post("/reservations", addReservation)
    .put("/reservations/:id", updateReservation)
    .delete("/reservations/:id", deleteReservation)

export default reservationRouter;