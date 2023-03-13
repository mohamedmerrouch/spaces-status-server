const express = require('express');
const spaceModel = require('../models/spaceModel')
const router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const spaces = await spaceModel.find();
    res.send(spaces).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
});

router.get('/:responsible', async function(req, res, next) {
  try {
    const spaces = await spaceModel.find({responsible: req.params.responsible});
    res.send(spaces).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
});

router.post('/', async function(req, res, next) {
  try {
    const space = await spaceModel.create(req.body);
    res.send(space).status(201);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    const nModified = await spaceModel.updateOne({_id: req.params.id}, req.body);
    res.send(nModified).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    const deleted = await spaceModel.deleteOne({_id: req.params.id});
    res.send(deleted).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
});

module.exports = router;
