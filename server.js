var express=require('express'),
	app=express(),
	http=require('http').Server(app);
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
	console.log('/ requested.  returning index.html');
	res.sendFile(__dirname+'/index.html');
})
var port=process.env.PORT||3000;
http.listen(port,()=>{
	console.log("port open on "+port);
});