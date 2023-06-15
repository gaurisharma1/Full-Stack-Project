import express from "express"
import {
    createRoom, 
    deleteRoom, 
    getRoom,
    getAllRoom, 
    updateRoom,
    updateRoomAvailability
} from "../controllers/room.js";

import {verifyAdmin} from "../utils/verifytoken.js"

const router = express.Router();

// create
router.post("/:hotelid", verifyAdmin, createRoom);

// update
router.put("/:id", verifyAdmin, updateRoom)
router.put("/availability/:id", updateRoomAvailability)

// delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

// get
// to get specific Room
router.get("/:id", getRoom)

// get all
// to get all the Rooms
router.get("/", getAllRoom)


export default router