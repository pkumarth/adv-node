const print=(stars,header)=>{
    console.log('*'.repeat(stars));
    console.log(header);
    console.log('*'.repeat(stars));
};

if(require.main==module){
    //Running as script
    print(process.argv[2],process.argv[3]);
}
else{
    //Being required by other file
    module.exports=print;
}