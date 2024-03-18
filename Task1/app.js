const student = require("./students");
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const htmlContent = `
    <html>
      <head>
        <title>About student</title>
      </head>
      <body>
        <p>My name is ${student.getStudentFullName(1)}. My student ID is ${student.getStudentId(1)}</p>
      </body>
    </html>
  `;

    res.end(htmlContent);
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${student.getStudentFullName(0)}. Mystudent ID is ${student.getStudentId(0)}”.`)
});

