const axios = require('axios');

export function redis(res, commandArray) {
    res.send({
        "response_type": "ephemeral",
        "text": "REDIS! Ephemeral"
    })
}

export function kafka(res, commandArray) {
    res.send({
        "response_type": "in_channel",
        "text": "KAFKA!"
    })
}

export function team(res, commandArray) {
    res.send({
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

export function tokenizeString(string) {
    const array = string.split("-")
    console.log("Tokenized version:", array)
    return array
}


export async function post(res, payload) {

    axios({
        method: 'post',
        url: 'https://hooks.slack.com/services/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',
        data: payload,
        timeout: 4000,
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            // console.log("response from axios:", response)

            console.log("data from axios:", response.data)

            res.json({ ok: true })
            // res.send()
        })
        .catch(err => {
            console.log("axios Error:", err)
        })

}