Buffer.alloc(8);
Buffer.allocUnsafe(8);
Buffer.alloc(1024).fill();
const string = 'touche';
const buffer = Buffer.from('touche');
console.log(string, string.length);
console.log(buffer, buffer.length);
//Another example
const fs=require('fs');
const conversionMap={
    '88':'65',
    '89':'66',
    '90':'67'
};

fs.readFile(__filename,(err,buffer)=>{
  let tag=buffer.slice(-4,-1);
  console.log(tag);
  for(let i=0;i<tag.length;i++){
      tag[i]=conversionMap[tag[i]];
  }
  console.log(buffer.toString())

});

//TAG:XYX


