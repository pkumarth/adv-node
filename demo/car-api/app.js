const app=require('express')();
const routes=require('./routes');
//connect all routes to our application
app.use('/',routes);


//server start
app.listen(8000,()=>{
    console.log('App is listening on port 8000');
});