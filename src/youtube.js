//const https = require('https')
import https from "https";
const options = {
    hostname: 'wpei.dev',
    port: 443,
    path: '/p-drum/',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
          process.stdout.write(d)
        })
})

req.on('error', error => {
    console.error(error)
})

req.end()
