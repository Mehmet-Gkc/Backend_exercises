export const notFound = (request, response) => {
    response.status(404).send(`Path ${request.originalUrl} not found`);
}