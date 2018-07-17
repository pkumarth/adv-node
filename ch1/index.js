require('./global');
var config=require('./config');

console.log(answer);
//console.log(config.port);
config.port=9090;
console.log(config.port);

process.on('exit',(code)=>{
console.log("exit");
});
process.on('uncaughtException',(err)=>{
    console.error(err);
    process.exit(1);

})
process.stdin.resume();
console.dog();
