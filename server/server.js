import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json(), 
cors(), 
cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cafepm_schema"
})

app.listen(8081, () => {
    console.log("Running...");
})