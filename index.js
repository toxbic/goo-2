const request = require('request');
const fs = require('fs');

// Replace the webhook URL with your own
const webhookUrl = 'https://discord.com/api/webhooks/1077201057156972604/QkHUya84ceNqbbuPVfLw3lWvDOs4T0pLAl6tSvVcqANRqUdKwnkDdqG6eA9ezX_FhmQr';

// Read the content of the file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Send the file content to the Discord webhook
  request.post({
    url: webhookUrl,
    json: {
      content: data
    }
  }, (err, res, body) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Message sent to Discord');
  });
});
