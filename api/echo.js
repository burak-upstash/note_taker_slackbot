// export default function handler(request, response) {
//     let query = request.query;
//     response.status(200).send(`Hello ${query}!`);
// }

module.exports = (req, res) => {
    const { name = 'World' } = req.query;
    res.send(`Hello ${name}!`);
  };