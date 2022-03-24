// run `node index.js` in the terminal
import express, { json } from 'express';

const app = express();
app.use(json());

app.get('/', (req, res) => {
  res.json({ msg: 'wow!!! how cool is it to have online editor like blitz' });
});
app.get('/test', (req, res) => {
  res.json({ msg: 'what about this?' });
});

const port = 3001;

app.listen(port, () => console.log(`server running on blitz port ${port}`));
