const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://katya:Qawsedrftg10@cluster0.1i6eu.mongodb.net/hillel?retryWrites=true&w=majority\n',
    {useNewUrlParser: true, useUnifiedTopology: true}
);