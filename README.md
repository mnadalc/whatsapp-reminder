# WhatsApp Message Reminder

Integrating AWS Lambda with Serverless, Node.js, Twilio and WhatsApp, to send automatic messages every certain time.

The configuration of the cron is done inside the Lambda configuration, at the CloudWatch Events' trigger.
Personal rule for the cron is `cron(00 20 \* _ ? _)` (21:00 GMT+2)

Inspired by [Kartik Nighania post](https://medium.com/better-programming/i-wrote-a-script-to-whatsapp-my-parents-every-morning-in-just-20-lines-of-python-code-5d203c3b36c1)

# More about

[Serverless](https://serverless.com/) <br/>
[AWS Lambda](https://aws.amazon.com/lambda/) <br/>
[Twilio](https://www.twilio.com/) <br/>
[WhatsApp](https://www.whatsapp.com/)
