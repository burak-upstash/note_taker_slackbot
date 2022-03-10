const axios = require('axios');

const token = process.env.SLACK_BOT_TOKEN

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

export async function postToChannel(channel, res, payload) {

    console.log("channel:", channel)
    var channelId = await channelNameToId(channel)

    console.log("ID:", channelId)

    const message = {
        channel: channelId,
        text: payload,
        blocks: payload
    }

    axios({
        method: 'post',
        url: 'https://slack.com/api/chat.postMessage',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': `Bearer ${token}` },
        data: message,
    })
        .then(response => {
            console.log("data from axios:", response.data)
            res.json({ ok: true })
        })
        .catch(err => {
            console.log("axios Error:", err)
        })

}

async function channelNameToId(channelName) {
    var id
    await axios({
        method: 'post',
        url: 'https://slack.com/api/conversations.list',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': `Bearer ${token}` },
    })
        .then(response => {
            response.data.channels.forEach(element => {
                console.log("NAME, ID", element.name, element.id )
                if (element.name === channelName) {
                    id = element.id
                    console.log("FOUND!:", element.id)
                    return element.id
                }
            });
        })
        .catch(err => {
            console.log("axios Error:", err)
        })

        return id

}