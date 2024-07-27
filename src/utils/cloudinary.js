import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath){
            console.log("Local file - Not found!")
            return null;
        }
        const response = cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        });
        
        // File has been uploaded successfully

        console.log("File is uploaded on Cloudinary : ", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // Remove the local file as the upload operation on the cloudinary got failed
    }
}

export {uploadOnCloudinary};