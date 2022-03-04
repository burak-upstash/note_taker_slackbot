// export default function handler(request, response) {
//     console.log(request.query)
//     // const { name } = request.query;
//     response.status(200).send(`Hello Ali!`);
// }

module.exports = (req, res) => {

    let who = 'anonymous';
  
    if (req.body && req.body.who) {
      who = req.body.who;
    } else if (req.query.who) {
      who = req.query.who;
    } else if (req.cookies.who) {
      who = req.cookies.who;
    }
  

    res.status(200).send(`Hello, echoing! ${who}!`);
};