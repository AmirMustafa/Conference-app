/* eslint-disable max-len */
const express = require('express');

const router = express.Router();

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

module.exports = (param) => {
  const { speakers } = param;

  // Image router
  router.get('/images/:imagedirectory/:filename', async (req, res, next) => {
    try {
      const image = await speakers.getImage(`${req.params.imagedirectory}/${req.params.filename}`);
      return image.pipe(res); // piping because axios sent request is streams - check getImage method
    } catch (err) {
      return next(err);
    }
  });
  router.get('/', async (req, res, next) => {
    try {
      const promises = [];
      promises.push(speakers.getListShort());
      promises.push(speakers.getAllArtwork());

      const results = await Promise.all(promises);

      return res.render('index', {
        page: 'Home',
        speakerslist: results[0],
        artwork: results[1],
      });
    } catch (err) {
      return next(err);
    }
  });

  router.use('/speakers', speakersRoute(param));
  router.use('/feedback', feedbackRoute(param));

  return router;
};
