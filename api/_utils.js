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
                    "text": "Teamwork is awesome!"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Team creation will be available shortly..."
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
        url: process.env.HOOK_URL,
        data: payload,
        timeout: 4000,
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            console.log("data from axios:", response.data)
            res.json({ ok: true })
        })
        .catch(err => {
            console.log("axios Error:", err)
        })
}