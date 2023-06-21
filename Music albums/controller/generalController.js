export const notFound = (request, response) => {

    console.log("request.headers", request.headers); 
    console.log("request.body", request.body);     
    
    response.status(404).send(`Path ${request.originalUrl} not found`);
}