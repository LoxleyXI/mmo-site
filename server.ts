import express, { RequestHandler } from "express";

const app: express.Application = express();
const port: number = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

const getGameList = async (platform: string) => {
  const path = `https://www.mmobomb.com/api1/games?platform=${platform}`;
  const response = await fetch(path);
  const json = await response.json();

  console.log(`GET: ${path}`);

  return json;
};

app.get('/api/mmo/:platform', async (req, res) => {
  const response = await getGameList(req.params.platform)
  res.send(response);
});

app.get('/api/info/:id', (req, res) => {
  fetch(`https://www.mmobomb.com/api1/game?id=${req.params.id}`)
    .then((data: Response) => res.send(data));
});
