import { Log } from "../interfaces/logs.interface";
import LogModel from "../models/log.model";


const postLogsService = async (log: Log) => {
    const response = await LogModel.create(log)
    return response
}

export {postLogsService}