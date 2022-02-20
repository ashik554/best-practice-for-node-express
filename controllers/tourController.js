const fs = require('fs');
const { nextTick } = require('process');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
///{For checking the id we have used same code different times that is actually a  code repetition , that is not good for better code writing here we should use param middlewear for avoiding the code repetition. VII:AFTER CHECKING WE MUST USE return statement before res }
exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is :${val}`);
  if (req.params.id > tours.length) {
    return res.status(404).json({
      staus: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};
// check body using middlewear
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or pricce',
    });
  }
  next();
};

// To get all tours

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    createdAt: req.requestTime,
    result: tours.length,
    data: {
      tours,
    },
  });
};

// to find a single tour based on id
exports.getTour = (req, res) => {
  //   console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  //   if (id > tours.length)
  ///NOT NEED THIS BECAUSE WE HAVE USED PARAM MIDDLEWEAR BEFORE
  //   if (!tour) {
  //     res.status(404).json({
  //       status: 'fail',
  //       message: 'Invalid ID',
  //     });
  //   }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

// To create a new tour
exports.createNewTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

// update using patch
exports.updateOneTour = (req, res) => {
  // console.log(req.params.id);
  ///NOT NEED THIS BECAUSE WE HAVE USED PARAM MIDDLEWEAR BEFORE
  //   if (req.params.id > tours.length) {
  //     res.status(404).json({
  //       staus: 'fail',
  //       message: 'Invalid ID',
  //     });
  //   }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<updated tour>',
    },
  });
};

// delete
exports.removeTour = (req, res) => {
  // console.log(req.params.id);
  ///NOT NEED THIS BECAUSE WE HAVE USED PARAM MIDDLEWEAR BEFORE
  //   if (req.params.id > tours.length) {
  //      res.status(404).json({
  //       staus: 'fail',
  //       message: 'Invalid ID',
  //     });
  //   }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
