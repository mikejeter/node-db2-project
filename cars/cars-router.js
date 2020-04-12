const express = require('express');
const db = require('../data/db-config.js');


const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
  .then(cars => {
    res.json(cars); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
});


router.post('/', (req, res) => {
  const fruitData = req.body;
  db('fruits').insert(fruitData)
  .then(ids => {
    db('fruits').where({ id: ids[0] })
    .then(newFruitEntry => {
      res.status(201).json(newFruitEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    db('fruits')
    .where({id})
    .update(changes)
    .then(count => {
        if (count) {
            res.json({ updated: count});
        } else {
            res.status(404).json({ message: "invalid id"});
        }
    })
    .catch(err => res.status(500).json({ message: "error updating", err}));
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    db('fruits')
    .where({id})
    .del()
    .then(count => {
        if (count) {
            res.json({ updated: count});
        } else {
            res.status(404).json({ message: "invalid id"});
        }
    })
    .catch(err => res.status(500).json({ message: "error deleting", err}));
});

module.exports = router;