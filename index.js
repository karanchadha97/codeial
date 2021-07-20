const express = require('express');
const app = express();  // firing express server
const port = 8000;

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is running successfully on port: ${port}`);
})