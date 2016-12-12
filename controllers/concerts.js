var Concert = require('../models/Concert')

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy,
}

function index(req, res, next){
  Concert.find({}, function(err, concerts){
    if (err) next(err);

    res.json(concerts)
  }).select('-__v');
}

function create(req, res, next){
  var concert = new Concert(req.body);

  concert.save(function(err, savedConcert){
    if(err) next(err);

    res.json(savedConcert);
  });
}

function show(req, res, next){
  var id = req.params.id;

  Concert.findById(id, function(err, concert) {
    if(err) next(err);

    concert.title = req.body.title;
    concert.author = req.body.author;
    concert.genre = req.body.genre;

    concert.save(function(err, updatedConcert) {
      if(err) next(err);

      res.json(updatedConcert);
    });
  });
}

function destroy(req, res, next) {
  var id = req.params.id;

  Concert.remove({_id: id}, function(err) {
    if(err) next(err);

    res.json({message: 'Concert successfully deleted.'});
  });
}
