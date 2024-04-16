import { NextFunction, Request, Response } from "express";
import { Log } from "../interfaces/logs.interface";
import { postLogsService } from "../services/logs.services";

const logMiddleareRegistry = (level: string) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const timestamp = new Date().toISOString();
        const { method, url, ip } = req;
        const data: Log = {
            level: level,
            metodo: method,
            url: url,
            ip: ip,
            userAgent: req.headers['user-agent'],
            date: timestamp
        }
        postLogsService(data)
        next();
    }
}
export { logMiddleareRegistry };