import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())




app.use("/api/auth", authRoutes)

app.listen(PORT, async () => {
    console.log(`Server is running on Port: ${PORT}`)
    await connectDB();
})