const {request} = require('http');
const req = request('http://httpjoin.org/json', {
    method: 'GET'
});

req.on('response', async res => {
    const chunks = [];
    for await(const chunk of res) {
        chunks.push(chunk)
    }
    const  body = JSON.parse(Buffer.concat(chunks).toString());
    console.dir(body, {depth: null});
    req.end();
})