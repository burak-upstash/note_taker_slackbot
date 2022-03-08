import { post } from "../_utils"


export async function app_mention(req, res) {
    let event = req.body.event

    try {
        await post(res, {
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Someone called me!"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Who is that?"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `<@${event.user}> mentioned me!`
                    }
                }
            ]
        })
    }
    catch (e) {
        console.log(e)
    }

}