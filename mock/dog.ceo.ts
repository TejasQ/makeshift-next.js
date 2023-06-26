import express from "express";

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next();
})

app.get('/api/breeds/list/all', (_, res) => {
    res.json({
        message: {
            affenpinscher: {},
            beagle: {},
            poodle: {},
            bloodhound: {},
            bulldog: {},
            crustacean: {},
            pommeranian: {},
            greatDane: {},
            jithin: {},
        }
    })
})

app.get('/api/breed/:breed/images/random', (_, res) => {
    res.json({
        message: 'https://picsum.photos/1024/768'
    })
})

app.listen(3001, () => console.log("Mock server running on :3001!"));