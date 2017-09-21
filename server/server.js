let express = require('express');
let app = express();
let path = require('path');
let PORT = process.env.PORT || 9001;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));


app.listen(PORT, function() {
  console.log('PERSONAL: connection established at: ', PORT);
});
