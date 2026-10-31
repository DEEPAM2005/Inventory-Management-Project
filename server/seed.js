import bcrypt from 'bcrypt'
import User from './models/User.js'
import connectDB from './db/connection.js'

const register = async ()=>{
    try{
        await connectDB()
        const email = 'admin@gmail.com'

        // Check whether the admin already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log('Admin User already exists!');
        return;
    }
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name : "admin",
            email : email,
            password : hashPassword,
            address : "admin address",
            role : "admin"
        })
        await newUser.save()
        console.log("Admin User created succesfully")
    }
    catch(error){
        console.error('Error creating admin user:',error.message)
    // }finally {
    // await mongoose.disconnect();
  }
}
register()