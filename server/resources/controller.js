var Puzzle = require('./Puzzle.js');

//initialize from default.json
require('../data/default.json')
  .forEach(function(puzzleObj, index) {
      new Puzzle(puzzleObj).save(function (err, data) {
        err ? 
          console.log(err) 
          : console.log(data);
      });
    });

module.exports = {
  //retrieve all puzzles
  retrievePuzzles: function (req, res) {
    Puzzle.find({}, function (err, data) { 
      err ? 
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(data));
    });
  },
  //COMING SOON!
  // retrievePuzzleSet: function (req, res) {
  //   Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle}, function (err, data) { 
  //     err ? 
  //       res.status(404).send(err)
  //       : res.status(200).send(JSON.stringify(data));
  //   });
  // },
  //will create all puzzles from array and return the array of puzzles created
  createPuzzles: function (req, res) {
    console.log(req.body);
    var dataArr = [];
    req.body.forEach(function(puzzleObj, index) {
      new Puzzle(puzzleObj).save(function (err, data) {
        err ? 
          res.status(500).send(err) 
          : dataArr.push(data);
        index === req.body.length - 1 && res.status(201).send(JSON.stringify(dataArr));
      });
    });
  },
  //deletes all puzzles and returns object with status and number deleted
  deletePuzzles: function (req, res) {
    Puzzle.remove({}, function(err, data) {
      err ? 
        res.status(500).send(err)
        : res.status(200).send(data);
    });
  }
  // , //COMING SOON!
  // deletePuzzleSet: function(req, res) {
  //   Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle}, function (err, data) { 
  //     err ? 
  //       res.status(404).send(err)
  //       : res.status(200).send(JSON.stringify(data));
  //   });
  // }
};
  