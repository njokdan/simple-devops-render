const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Darey.io DevOps Demo! hello</h1>
    
    `);
});
//🚀</h1>
//<p>Current time: ${new Date().toISOString()}</p>
//<p>This app was deployed automatically using Docker + GitHub Actions + Render</p>

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});