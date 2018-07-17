console.log(module);
console.log(arguments);
console.log(require('module').wrapper);

require=function(){
    return {mocked:true};
}

const fs=require('fs');
console.log(fs);