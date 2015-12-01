//express server created here
var express = require('express')
,    app     = express()
,    logger  = require('morgan')

app.use(express.static('public'));
app.use(logger('dev'))

app.listen(3000)
