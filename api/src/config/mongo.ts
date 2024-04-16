import "dotenv/config";
import { connect } from "mongoose";

//Realizamos la coneccion a la base de datos

const { DB_URI, DB_URI_TEST, NODE_ENV } = process.env

async function dbConnect(): Promise<void> {
    const connectionString = NODE_ENV === 'test'
        ? DB_URI_TEST
        : DB_URI
    await connect(connectionString as string)
}

export default dbConnect;