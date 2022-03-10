# Slackbot Implementation with Vercel

## Important Notes
### Before starting the implementation, please make sure that you are using the same node version as in Vercel instance.
#### (For this case, we will be using node v14)

### Required Items
* Vercel Account
> We will use Vercel to host our serverless functions.

* Access to slack workspace
> We need a Slack workspace to install our bot.

### Optional Items
#### Vercel CLI
We want to abstract as much server management details as possible, which is the sole reason for using serverless.

So, when in development mode, this CLI helps us create a serverless environment in the comfort of our own localhost.


#### Ngrok
Vercel is pretty fast when it comes to deploying your source code.
However, still local development is faster for various reasons. To make our development and debugging faster, we will create our bot in local environment.

So, we can host a serverless API -thanks to Vercel Cli- but our endpoint is tied to our localhost. If your IP is not static, meaning it changes constantly by your ISP, you cannot give your localhost as request endpoint for Slack bot. 

In that case, you need to tunnel your localhost to some static public domain.

This is why we use Ngrok. It enables us to map a static public IP to our localhost.





.....




#### When all is done, all you need to do is:
- `vercel deploy`

>   This will deploy your project as a preview. You can test functionalities of your bot by giving this address, last step before production.

> It is so crucial that your node version matches since some functionalities are not provided and/or others are deprecated. If you got your bot to run on local environment using `vercel dev`; it should be working on Vercel platform, error free.

After you tested your project in preview mode, you can:
- `vercel --prod`
> Deploy your project in production environment.





#### What happens when bot is inactive?
When it is active again, it will work after some wait time.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fburak-upstash%2Fslackbot-management-api&env=SLACK_BOT_TOKEN,SLACK_SIGNING_SECRET&project-name=vercel-slackbot)