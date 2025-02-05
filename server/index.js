import express from 'express';
import dotenv from 'dotenv';
import authorize from './routes/authorize.js';
import notes from './routes/notes.js';
import { connect } from './database.js';
import cors from "cors";
dotenv.config();

(async () => {
    await connect(); // Connect Mongo DB

    const app = express();


    app.use(cors()); // Enable CORS

    // Available Routes

    app.use(express.json()); // Parse JSON Body
    app.use("/api/auth", authorize); // Manage All Authorization Routes
    app.use("/api/notes", notes); // Manage Notes Routes


    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on http://localhost:${process.env.PORT}`)
    })



})();