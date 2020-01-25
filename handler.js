"use strict";

const accountSid = "{{twilio sid}}";
const authToken = "{{twilio auth token}}";

module.exports.message = async event => {
  const client = require("twilio")(accountSid, authToken);
  await client.messages.create({
    from: "whatsapp:+{{twilio number}}",
    body: "{{message}}",
    to: "whatsapp:+{{phone}}"
  });
};
