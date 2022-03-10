import { postToChannel } from "../_utils"


export async function app_mention(req, res) {
    let event = req.body.event

    try {
        await postToChannel("random", res, "NABER")
    }
    catch (e) {
        console.log(e)
    }

}