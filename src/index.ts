import express = require('express');
import fileUpload = require('express-fileupload');
import { UploadedFile } from 'express-fileupload';

interface MetadataResult {
  name: string;
  type: string;
  size: number;
}


function getMetadata(file: UploadedFile): MetadataResult {
  return {
    name: file.name,
    type: file.mimetype,
    size: file.data.length,
  }
}

const app = express();

app.use(fileUpload())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/fileanalyse/', (req, res) => {
  const result = getMetadata(req.files.fileUpload as UploadedFile);
  res.send(result);
});

app.listen(process.env.PORT, () =>
  console.log(`Running on http://localhost:${process.env.PORT}/`));

