const express = require('express');
const app = express();  // firing express server
const port = 8000;


// use express router
app.use('/',require('./routes/index')); // or app.use('/',require('./routes')); because by default it will fetch index.js

// setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is running successfully on port: ${port}`);
})