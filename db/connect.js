const mongoose = require('mongoose');


const connectDb = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true })
}
mongoose.set('useFindAndModify', false);
module.exports = connectDb