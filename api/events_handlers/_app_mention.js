
export function app_mention(req, res) {
    let event = req.body.event
    
    console.log("event is:", event)

    console.log("res:", res)

    res.send({
        "response_type": "in_channel",
        "text": `App mentioned by `
    })
}