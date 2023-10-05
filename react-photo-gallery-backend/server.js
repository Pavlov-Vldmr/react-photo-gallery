const express   = require('express');
const app       = express();
const port      = 8000;

app.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });


require('./routes')(app);

app.listen(port, ()=>{
    console.log('server work on ' +port);
})