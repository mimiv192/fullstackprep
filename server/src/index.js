import '@babel/polyfill';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import apiRoutes from './routes';
import stateRouting from './middleware/routing.mw';
import { ADDRGETNETWORKPARAMS } from 'dns';
const CLIENT_PATH = join(__dirname, '../../client');
const cors = require('cors');
let app = express();
app.use(cors());










app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());

app.use('/api', apiRoutes);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req,res)=>{
res.json({
    message: 'chirper'
    });
});

function isValidChirp(chirp) {
    return chirp.name && chirp.name.toString().trim() !== '' &&
    chirp.name && chirp.name.toString().trim() !== '';
}

app.post('/chirps',(req,res)=>{
    if(isValidChirp(req.body)){
const chirp = {
    name:req.body.name.toString(),
    content: req.body.content.toString()
};
console.log(chirp);
    } else {
        res.status(422);
        res.json({
            message: 'Name and Content are required'
        });
    }
    });