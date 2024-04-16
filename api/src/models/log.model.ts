import { Schema, model } from "mongoose";
import { Log } from "../interfaces/logs.interface";


const LogSchema = new Schema<Log>(
    {
        level: String ,
        metodo: String,
        url: String,
        ip: {type: String},
        userAgent: {type: String},
        date: String
    }
)


const LogModel = model('logs', LogSchema);

export default LogModel