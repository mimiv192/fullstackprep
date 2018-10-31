import { Router } from 'express';
import chirpStore from '../chirpstore';



let router = Router();

router.get('/:id?',(req,res) => {
    let id  = req.params.id;
    if (id) {
        res.send(chirpStore.GetChirp(id)); //res.send

    } else {
        res.send(chirpStore.GetChirps());
    }

});

router.post('/',(req,res) => {
    let chirp = req.body;
    chirpStore.CreateChirp(chirp);
    res.send('Chirp added!');
});

router.put('/:id',(req,res) => {
    let id = req.params.id;
    let editedChirp = req.body;
    chirpStore.UpdateChirp(id,editedChirp);
    res.send(`Chirp id: ${id} has been changed!`);
});

router.delete('/:id',(req,res) => {
    let id = req.params.id;
    chirpStore.DeleteChirp(id);
    res.send (`Chirp id: ${id} has been deleted!`);

});

export default router;





