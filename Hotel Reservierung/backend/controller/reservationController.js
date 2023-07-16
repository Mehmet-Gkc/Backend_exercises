import RoomModel from '../models/Room.js';
import ReservationModel from '../models/Reservation.js';

export const getReservations = async (req,res) => {
    try {
        const reservations = await ReservationModel.find();
        res.send(reservations)
    } catch (error) {
        res.send(`Reservations können nicht geladen werden: ${error.message}`)
    }
}

export const getReservation = async (req,res) => {
    const id = req.params.id;
    const reservation = await ReservationModel.findById(id);

    if(reservation) {
        res.send(reservation)
    } else {
        res.status(404).send(`Es gibt keine Reservation mit dieser ID: ${id}`)
    }    
}

export const addReservation = async (req,res) => {
    const reservation = req.body;
    try {
        const newReservation = await ReservationModel(reservation)
        await newReservation.save()
        res.status(200).send(`Reservation erfolgreich hinzugefügt: ${newReservation}`);
    } catch (error) {
        res.status(500).send(`Fehler beim Hinzufügen der Reservation: ${error.message}`)
    }
}

export const updateReservation = async (req,res) => {
    const id = req.params.id;
    const updateReservation = req.body;

    try {
        const reservation = await ReservationModel.findByIdAndUpdate(id,updateReservation, {new: true});

        if(!reservation) {
            return res.status(404).send(`reservation nicht gefunden.`)
        }
        res.send(`Resrvation erfolgreich aktualisiert.`)
    } catch (error) {
        res.send(`Fehler beim Aktualisieren der Reservation: ${error.message}`);
    }
}

export const deleteReservation = async (req,res) => {
    const id = req.params.id;    

    try {
        const reservation = await ReservationModel.findByIdAndDelete(id)
        if(!reservation) {
            return res.send(`Reservation wurde nicht gefunden`)
        }
        res.send(`Reservation ist erfolgreich gelöscht.`)
    } catch (error) {
        res.send(`Reservation wurde nicht gelöscht: ${error.message}`);
    }
}