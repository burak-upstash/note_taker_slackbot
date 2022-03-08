import { post } from "../_utils"


export async function channel_created(req, res) {
    let event = req.body.event

    try {
        await post(res, {
            "response_type": "in_channel",
            "text": `A new channel created with name \`${event.channel.name}\`! Cool stuff...`
        })
    }
    catch (e) {
        console.log(e)
    }
}