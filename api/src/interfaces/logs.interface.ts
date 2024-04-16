export interface Log {
    level: string,
    metodo: string,
    url: string,
    ip: string | undefined,
    userAgent: string | undefined,
    date: string
}