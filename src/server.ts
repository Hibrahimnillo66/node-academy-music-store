import * as express from 'express';
import * as db from './db';
import * as bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/artists', (req, res) => {
    res.json({
        data: db.artist.getBy()
    });
});

app.get('/artists/:id', (req, res) => {
    const { id } = req.params;
    const [artist] = db.artist.getBy('id', id);
    res.json({
        data: {
            artist
        }
    });
});

app.post('/artists/', (req, res) => {
    const payload = req.body;
    db.artist.post(payload);
    res.json(payload);
});
