import mongoose from "mongoose";



export const Connection  =async (port:number| string) => {
    try {
        await mongoose.connect(process.env.DB_URL!)
        console.log(`server runnig in port ${port}`);
        
    } catch (error) {
        console.log("connetion is not valid");
    }
    
}