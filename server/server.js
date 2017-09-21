let express = require('express');
let app = express();
let path = require('path');
let PORT = process.env.PORT || 9001;


app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, function() {
  console.log('PERSONAL: connection established at: ', PORT);
});
