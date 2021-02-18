const mongoose = require('mongoose');
const app = require('./app');
const port = 9999;



// Connect to DB
const url ='mongodb://localhost:27017/logichive'
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
 .then(() => console.log("MongoDB connected…"))
 .catch(err => console.log("error ", err))


 app.listen(process.env.PORT || port);
