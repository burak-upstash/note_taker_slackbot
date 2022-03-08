import {redis, kafka, team, tokenizeString} from './_utils'

module.exports = (req, res) => {
  console.log("req body:", req.body)
  console.log(11111111111111111111111111111);
  console.log("Text:", req.body.text)
  console.log(22222222222222222222222222222);
  console.log("res:", res)
  



  const commandArray = tokenizeString(req.body.text)
  const action = commandArray[0]


  switch (action) {
    case "redis":
      redis(res, commandArray)
      break
    case "kafka":
      kafka(res, commandArray)
      // code block
      break
    case "team":
      team(res, commandArray)
      break
    default:
      res.send({
        "response_type": "ephemeral",
        "text": "Wrong usage of the command!"
    })
  }
};
