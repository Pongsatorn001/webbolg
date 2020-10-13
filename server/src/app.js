let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./routes') (app)


app.get('/status', function (req, res){
    res.send('Hello NodeJs Server')
})

app.get('/hello/:person', function(req,res){
    console.log('hello -' + req.params.person)
    res.send('say hello with ' + req.params.name)
})

app.post('/hello', function(req, res){
    res.send('OK you post -' + req.body.name)
})

let port = 8081

app.listen(port, function(){
    console.log('server runing on ' + port)
})