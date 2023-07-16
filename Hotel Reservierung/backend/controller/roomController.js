import RoomModel from '../models/Room.js';
import ReservationModel from '../models/Reservation.js'

export const getRooms = async (req,res) => {
    try {
        const rooms = await RoomModel.find();
        res.send(rooms)
    } catch (error) {
        res.send(`Rooms können nicht geladen werden: ${error.message}`)
    }
}

export const getRoom = async (req,res) => {
    
        const id = req.params.id;
        const room = await RoomModel.findById(id);

        if(room) {
            res.send(room)
        } else {
            res.status(404).send("Es gibt kein Zimmer mit dieser ID")
        }   
}

export const addRoom = async (req,res) => {
    const room = req.body;

    try {
        const newRoom = await RoomModel.create(room);
        res.status(200).send(`Zimmer ist erfolgreich hizugefügt: ${newRoom}`)
    } catch (error) {
        res.send(`Fehler beim Hinzufügen des Zimmers: ${error.message}`)
    }
}

export const updateRoom = async (req,res) => {
    const id = req.params.id;
    const updateRoom = req.body;

    try {
        const room = await RoomModel.findByIdAndUpdate(id, updateRoom, {new:true})

        if(!room) {
            return res.status(404).send("Zimmer ist nicht gefunden!")
        }
    } catch (error) {
        res.send(`Fehler beim Aktualieren des Zimmers: ${error.message}`)
    }
}

export const deleteRoom = async (req,res) => {
    const id = req.params.id;

    try {
        const reservation = await ReservationModel.deleteOne({room:id})
        const room = await RoomModel.findByIdAndDelete(id)

        if(!room) {
            return res.status(404).send("Zimmer nicht gefunden")
        }

        res.send("Zimmer erfolgreich gelöscht")
    } catch (error) {
        res.send(`Fehler beim Löschen des Zimmers: ${error.message}`);
    }
}
