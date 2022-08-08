const express = require("express");

const service = express();
// const ServiceRegistry = require('./ServiceRegistry');

module.exports = (config) => {
  const log = config.log();
  // Add a request logging middleware in development mode
  if (service.get("env") === "development") {
    service.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  // Registering a service
  service.put(
    "/register/:servicename/:serviceversion/:serviceport",
    (req, res, next) => {
      return next("not implemented.");
    }
  );
  service.delete(
    "/register/:servicename/:serviceversion/:serviceport",
    (req, res, next) => {
      return next("not implemented.");
    }
  );
  service.get("/find/:servicename/:serviceversion", (req, res, next) => {
    return next("not implemented.");
  });

  // eslint-disable-next-line no-unused-vars
  service.use((error, req, res, next) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  return service;
};
