export default function handler(request, response) {
    let query = request.query;
    response.status(200).send(`Hello ${query}!`);
}