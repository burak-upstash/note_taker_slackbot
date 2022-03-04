// export default function handler(request, response) {
//     console.log(request.query)
//     // const { name } = request.query;
//     response.status(200).send(`Hello Ali!`);
// }

module.exports = (req, res) => {
    const { name = 'World' } = req.query;
    res.send(`Hello ${name}!`);
  };