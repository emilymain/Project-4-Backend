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

function update(req, res, next){
  var id = req.params.id;

  Concert.findById(id, function(err, concert) {
    if(err) next(err);

    concert.band = req.body.band;
    concert.venue = req.body.venue;
    concert.address = req.body.address;
    concert.genre = req.body.genre;
    concert.date = req.body.date;
    concert.time = req.body.time;
    concert.cover = req.body.cover;

    concert.save(function(err, updatedConcert) {
      if(err) next(err);

      res.json(updatedConcert);
    });
  });
}
function show(req, res, next){
  var id = req.params.id;

  Concert.findById(id, function(err, concert){
    if(err) next(err);
    res.json(concert);
  })
}


function destroy(req, res, next) {
  var id = req.params.id;

  Concert.remove({_id: id}, function(err) {
    if(err) next(err);

    res.json({message: 'Concert successfully deleted.'});
  });
}
