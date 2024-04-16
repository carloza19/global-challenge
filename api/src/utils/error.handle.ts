/*Creamos este manejador de errores 
para unificar y simplificar su repeticiòn en los distinos endpoints*/

const handleHttp = (message: string, status: number, genericError: string) => {
    return {
        message:message,
        status:status,
        genericError:genericError
    }
};

export { handleHttp };