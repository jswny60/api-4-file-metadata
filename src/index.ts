import express = require('express');

interface MetadataResult {
  name: string;
  type: string;
  size: number;
}


function getMetadata(req: express.Request): MetadataResult {
  return {
    name: '',
    type: '',
    size: 0,
  }
}

const app = express();

app.get('/api/fileanalyse/', (req, res) => {
  const result = getMetadata(req);
  res.send(result);
});

app.listen(process.env.PORT, () =>
  console.log(`Running on http://localhost:${process.env.PORT}/`));

