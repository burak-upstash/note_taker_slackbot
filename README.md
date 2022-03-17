# Note Taker Slack App/Bot
This is a Slack Bot, using Vercel for serverless deployment and Upstash Redis for database.

### What this Slackbot does?
* Events:
    * New channel created:
        * When a new channel created, posts a message to `general` channel stating that such an event happened.
    * Slackbot mentioned:
        * Whenever the bot is mentioned, posts a
        message to `general` channel stating
        that the bot was mentioned.

* Commands:
    * `/note set <key> <value>` :
        * Sets a key value pair.
    * `/note get <key>` :
        * Gets the value corresponding to the key
    * `/note list-set <list_name> <item_as_string>` :
        * Adds the `<item_as_string>` to `<list_name>` list as an item.
    * `/note list-all <list_name>` :
        * Lists all the items in the `<list_name>`
    * `/note list-remove <list_name> <item_as_string>` :
        * Removes `<item_as_string>` from the `<list_name>`

* P.S: 
    * All of the commands mentioned can be implemented as slackbot mentions rather than slash commands. For demonstration purposes, slash commands are also used. Use cases may differ. 

<br>
<br>

# Deploy This Project on Vercel!
<div style="text-align:center">
<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fburak-upstash%2Fnote_taker_slackbot&env=UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN,SLACK_SIGNING_SECRET,SLACK_BOT_TOKEN&project-name=note-taker-slackbot&repo-name=note_taker_slackbot"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
</div>


## Docs
- ### [Configuring Upstash](#configuring-upstash)
- ### [Configuring Slack Bot - 1](#configuring-slack-bot---1)
- ### [Deploying on Vercel](#deploying-on-vercel)
- ### [Configuring Slack Bot - 2](#configuring-slack-bot---2)
***
### Configuring Upstash
1. Go to the [Upstash Console](https://console.upstash.com/) and create a new database

    #### Upstash environment
    Find the variables in the database details page in Upstash Console:
    `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` 

    (These will be the env variables for vercel deployment) 

### Configuring Slack Bot - 1
1. Go to [Slack API Apps Page](https://api.slack.com/apps):
    * Create new App
        * From Scratch
        * Name your app & pick a workspace 
    * Go to Oauth & Permissions
        * Add the following scopes
            * app_mentions:read
            * channels:read
            * chat:write
            * chat:write.public
            * commands
        * Install App to workspace
            * Basic Information --> Install Your App --> Install To Workspace
2. Note the variables (These will be the env variables for vercel deployment) : 
    * `SLACK_SIGNING_SECRET`:
        * Go to Basic Information
            * App Credentials --> Signing Secret
    * `SLACK_BOT_TOKEN`:
        * Go to OAuth & Permissions
            * Bot User OAuth Token
    



### Deploying on Vercel

1. Click the deploy button: 

<div style="text-align:center">
<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fburak-upstash%2Fnote_taker_slackbot&env=UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN,SLACK_SIGNING_SECRET,SLACK_BOT_TOKEN&project-name=note-taker-slackbot&repo-name=note_taker_slackbot"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
</div>

2. Fill the environmental variables defined above.

### Configuring Slack Bot - 2

* After deployment, you can use the provided `vercel_domain`.

1. Go to [Slack API Apps Page](https://api.slack.com/apps) and choose relevant app:
    * Go to Slash Commands:
        * Create New Command:
            * Command : `note`
            * Request URL : `<vercel_domain>/api/note`
            * Configure the rest however you like.
    * Go to Event Subscribtions:
        * Enable Events:
            * Request URL: `<vercel_domain>/api/events`
        * Subscribe to bot events by adding:
            * app_mention
            * channel_created

2. After these changes, Slack may require reinstalling of the app.







<!-- 
Give the bot subscriptions as follows:

![](https://github.com/burak-upstash/slackbot-management-api/blob/main/public/bot_subscriptions.png)


Give the bot permissions as follows:

![](https://github.com/burak-upstash/slackbot-management-api/blob/main/public/bot_permissions.png) -->


