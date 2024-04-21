const http = require('http');
const cars = require('./cars');
const htmlGenerator = require('./htmlGenerator');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const allCars = cars.getCars();
    console.log(allCars);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(htmlGenerator.getHTMLDocumentStart());
    res.write('<body>');
    res.write('<p>');
    res.write(cars.getCarInformation(1)); 
    res.write('</p>');
    res.write('<p>');
    res.write(cars.getCarAge(1));
    res.write('</p>');
    res.write('</body>');
    res.write(htmlGenerator.getHTMLDocumentEnd());
    res.end();
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
