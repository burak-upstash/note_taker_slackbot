import { redis, kafka, team, tokenizeString } from './_utils'

module.exports = (req, res) => {
  console.log("req body:", req.body)
  console.log("Text:", req.body.text)

  const commandArray = tokenizeString(req.body.text)
  const action = commandArray[0]

  switch (action) {
    case "redis":
      redis(res, commandArray)
      break
    case "kafka":
      kafka(res, commandArray)
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
}