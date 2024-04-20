import app from "./app"
import mongoose from "mongoose";
import config from "./app/config";



async function main() {
 
    try{
        await mongoose.connect(process.env.DATABASE_URL as string );
        app.listen(config.port, () => {
          console.log(`PH University server is running on port ${config.port}`)
        })
    }catch(err){
        console.log(err)
    }
  
}

main()