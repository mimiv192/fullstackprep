import { Router } from 'express';
import {getChirps, getChirp, addChirp, editChirp} from '../db/db';


let router = Router();

router.get('/:id?',(req,res) => {
    let id  = req.params.id;
    if (id) {
        getChirp(id)
        .then (results => res.send(results))
        .catch (e => console.log(e));
    } else {
      getChirps()
        .then(results => res.send(results))
        .catch(e => console.log(e));
    }

});

router.post('/',(req,res) => {
   addChirp(req.body)
   .then(results => res.send(results))
   .catch(e => console.log(e));
    
});

router.put('/:id',(req,res) => {
    editChirp(req.params.id, req.body.text)
    .then(results => res.send(results))
    .catch(e => console.log(e));
});

router.delete('/:id',(req,res) => {
    deleteChirp(req.params.id, req.body.text)
    .then(results => res.send(results))
    .catch(e => console.log(e));
});

export default router;





