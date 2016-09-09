var router = require('express').Router();
var itemRouter = require('express').Router({mergeParams: true});
var api = require('./controller.js');
router.route('/api/puzzles') 
  .get(api.retrievePuzzles)
  .post(api.createPuzzles)
  .delete(api.deletePuzzles);
router.route('/api/puzzles/:treasureHuntTitle')
  .get(api.retrievePuzzleSet)
  .delete(api.deletePuzzleSet);
router.route('/api/puzzles/:treasureHuntTitle/:riddleTitle')
  .get(api.retrievePuzzle)
  .delete(api.deletePuzzle);

module.exports = router;