import mongoose from 'mongoose'

const connectDB = () => {
    try {
        mongoose.connect(process.env.MDB_URI)
        console.log("Conectado al servidor")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB