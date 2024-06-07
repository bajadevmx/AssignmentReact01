import express from 'express';
   const app = express();
   const port = 5000;
  //  app.get('/public/index.html', (req, res) => {
  //    res.send('Hello World!');
  //  });
   app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });