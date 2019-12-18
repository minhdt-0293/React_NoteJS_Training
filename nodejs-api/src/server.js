import express from 'express';
import bodyParser from 'body-parser';
import db from './utils/db';
import routers from './routes/index'

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => console.log(`listening on $(PORT)`));
routers(app)
