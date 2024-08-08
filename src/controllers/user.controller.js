import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (req,res) => {
    res.status(200).json({
        message : "Ok"
    });
})

const showInfo = asyncHandler(async (req,res) => {
    res.status(200).json({
        message: "ok!"
    })
})

export {registerUser,showInfo}