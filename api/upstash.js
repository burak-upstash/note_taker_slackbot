

module.exports = (req, res) => {
    console.log(req.body)
    console.log("Text:", req.body.text)

    const commandArray = tokenizeString(req.body.text)
    const action = commandArray[0]

    switch(action) {
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
        res.send("Wrong usage of the command!")
    }



    // const { name = 'World' } = req.query
    // res.send(`Hello ${name}!`)
};

function redis(res, commandArray) {
  res.send("REDIS!")
}

function kafka(res, commandArray) {
  res.send("KAFKA!")
}

function team(res, commandArray) {
  res.send("TEAM!")
}

function tokenizeString(string) {
  const array = string.replaceAll(' ','').split("-")
  console.log("Tokenized version:", array)
  return array
}

  // token=gIkuvaNzQIHg97ATvDxqgjtO
  // &team_id=T0001
  // &team_domain=example
  // &enterprise_id=E0001
  // &enterprise_name=Globular%20Construct%20Inc
  // &channel_id=C2147483705
  // &channel_name=test
  // &user_id=U2147483697
  // &user_name=Steve
  // &command=/weather
  // &text=94070
  // &response_url=https://hooks.slack.com/commands/1234/5678
  // &trigger_id=13345224609.738474920.8088930838d88f008e0
  // &api_app_id=A123456

