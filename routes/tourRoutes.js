const express = require('express');
const tourController = require('../controllers/tourController');
///{After importing the tourController we can also distructure here and then we can use it following manner}
// const { getAllTours, createNewTour, getTour, updateOneTour, removeTour } =
//   tourController;

// const router = express.Router();
// router.route('/').get(getAllTours).post(createNewTour);
// router.route('/:id').get(getTour).patch(updateOneTour).delete(removeTour);
//module.exports = router;

const router = express.Router();

// param middlewear to take a id That is used in tourController file and imported here
// router.param('id', (req, res, next, val) => {
//     console.log(`Tour id is :${val}`);
//   next();
// });

router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createNewTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateOneTour)
  .delete(tourController.removeTour);

module.exports = router;
