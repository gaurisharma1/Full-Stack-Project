import express from "express"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import {verifyAdmin} from "../utils/verifytoken.js"
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel.js";
const router = express.Router();

// create
router.post("/", verifyAdmin, createHotel);

// update
router.put("/:id", verifyAdmin, updateHotel)

// delete
router.delete("/:id", verifyAdmin, deleteHotel)

// get
// to get specific hotel
router.get("/find/:id", getHotel);

// get all
// to get all the hotels
router.get("/", getAllHotel)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)

export default router