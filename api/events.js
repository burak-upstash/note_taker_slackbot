import { post } from './_utils'
import { challenge } from './events_handlers/_challenge'
import { app_mention } from './events_handlers/_app_mention'




module.exports = async (req, res) => {
    // console.log("req body is:", req.body)
    var type = req.body.type

    console.log("headers:", req.headers)

    // Super important


    try {
        await post(res, {
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*It's 80 degrees right now.*"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Partly cloudy today and tomorrow"
                    }
                }
            ]
        })
    }
    catch (e) {
        console.log(e)
    }


    // if(type === "url_verification"){
    //     return challenge(req, res)
    // }
    // else if (type === "event_callback"){
    //     res.send({
    //         "response_type": "ephemeral",
    //         "text": "REDIS! Ephemeral"
    //     })
    //     console.log(22222222222222)
    //     var event_type = req.body.event.type

    //     switch (event_type) {
    //         case "app_mention":
    //             console.log("mentionnnn")
    //             res.send({
    //                 "response_type": "in_channel",
    //                 "text": `App mentioned by `
    //             })
    //             console.log("ASDASDASD")
    //             // return app_mention(req, res)
    //             break;

    //         default:
    //             break;
    //     }

    // }
    // else{
    //     console.log(11111111111111)
    //     console.log("body:", req.body)
    // }


}

