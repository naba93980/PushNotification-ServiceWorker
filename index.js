const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json())

const publicKey = 'BPwxqfo5cYRXXPxC7o_Ti3_Z2f_JoSbEUJdnt_WoMPMIpuDYFbsk_9fLEBxw8Lp1yiHzq2cp1NvhJ7RaOOcfLsI'
const privateKey = 'esebzU2gNog9pWB4PGS51wP5Dt3M7hI1OqIy0JJaZWQ'

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    publicKey,
    privateKey
);


app.post('/subscribe', (req, res) => {
    
    // Getting the PushSubscription object 
    const subscription = req.body;

    // create payload 
    const payload = JSON.stringify({ title: "Push Text" });

    // pass object into sendNotification
    webpush.sendNotification(subscription, payload);

})

const PORT = 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
