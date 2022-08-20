const path = require('path');

module.exports = {
  development: {
    sitename: 'Roux Meetups [Development]',
    data: {
      serviceRegistryUrl: 'http://localhost:3000',
      serviceVersionIdentifier: '1.x.x',
      feedback: path.join(__dirname, '../data/feedback.json'),
    },
  },
  production: {
    sitename: 'Roux Meetups',
    data: {
      serviceRegistryUrl: 'http://localhost:3000',
      serviceVersionIdentifier: '1.x.x',
      feedback: path.join(__dirname, '../data/feedback.json'),
    },
  },
};
