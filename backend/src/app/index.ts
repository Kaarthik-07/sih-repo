import { loginUtil } from "../utills/login";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

// Express App instance
const app = express();

app.listen(process.env.PORT || 3000);
