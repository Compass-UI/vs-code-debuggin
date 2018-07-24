for( var i = 0; i< 5; i++){
    console.log(i)
}
setInterval(function(){
    console.log('Current time: ' + new Date())
}, 1000)

setTimeout(() => {
    console.log('WILL EXECUTE ONLY ONCE: ' + new Date())
}, 2000);