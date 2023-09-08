// Import the express library
const express = require('express');

// Create an instance of the express application
const app = express();


//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './views')
app.set('view engine', 'ejs')

// Define a root route
app.get('/', (req, res) => {
    res.render('index');
});
// Start the server and listen on port 3000
app.listen(4000, () => {
console.log('Server is running on http://localhost:4000');
});
