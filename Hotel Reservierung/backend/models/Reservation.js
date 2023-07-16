import mongoose, { mongo } from "mongoose";

const reservationSchema = new mongoose.Schema({
    guestName: {
        type: String,
        required: true
    },

    roomNumber: { type: mongoose.Schema.Types.ObjectId, ref:"Room" },

    checkInDate: {
        type: Date,
        default: new Date()
    },
    checkOutDate: {
        type: Date,
        default: new Date()
    }
});

const reservationModel = new mongoose.model("Reservation", reservationSchema);

export default reservationModel;