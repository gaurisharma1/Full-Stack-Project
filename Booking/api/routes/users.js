import express from "express"
import { updateUser, deleteUser, getUser, getAllUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifytoken.js";
import {verifyUser} from "../utils/verifytoken.js";
import {verifyAdmin} from "../utils/verifytoken.js";

const router = express.Router();

// // for login/register password verification
// router.get("/checkauthentication", verifyToken,(req,res,next) => {
//     res.send("hello user, you are logged in")
// })

// // for deleting or updating by user or admin verification
// router.get("/checkUser/:id", verifyUser,(req,res,next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })

// // for deleting all accounts by admin verification
// router.get("/checkAdmin/:id", verifyAdmin,(req,res,next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

// update
router.put("/:id", verifyUser, updateUser)

// delete
router.delete("/:id", verifyUser, deleteUser)

// get
// to get specific User
router.get("/:id", verifyUser, getUser)

// get all
// to get all the Users
router.get("/", verifyAdmin, getAllUser)

export default router