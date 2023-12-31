import { Router } from "express"
import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"

export const createHotel = async(req,res,next) => {
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err);
    }
}


export const updateHotel = async(req,res,next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    }catch(err){
        res.status(500).json(err)
    }
}


export const deleteHotel = async(req,res,next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        res.status(500).json(err)
    }
}


export const getHotel = async(req,res,next) => {
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).json(err)
    }
}


export const getAllHotel = async(req,res,next) => {
    const {min,max,...others} = req.query;
    try{
        const allhotels = await Hotel.find({...others, cheapestPrice:{$gt:min | 0, $lt:max || 20000},});
        res.status(200).json(allhotels);
    }catch(err){
        next(err)
        // res.status(500).json(err)
    }
}
export const countByCity = async(req,res,next) => {
    const cities = req.query.cities.split(",");
    try{
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }catch(err){
        next(err)
    }
}

// there are fixed 5 types so we dont use queries here instead we will fetch the data
export const countByType = async(req,res,next) => {
    try{
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})

        res.status(200).json([
        {type:"hotel", count: hotelCount},
        {type:"apartments", count: apartmentCount},
        {type:"resorts", count: resortCount},
        {type:"villas", count: villaCount},
        {type:"cabins", count: cabinCount},
        ]);
    }catch(err){
        next(err)
    }
}

export const getHotelRooms = async(req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id )
        const list = await Promise.all(
            hotel.rooms.map((room) => {
            return Room.findById(room)
        })
        )
        res.status(200).json(list)
        
    }catch(err){
        next(err)
    }
}

export default Router