class ServiceRegistry {
  constructor(log) {
    this.log = log;
    this.services = {};
    this.timestamp = 30;
  }

  register(name, version, ip, port) {
    const key = name + version + ip + port;
    if (!this.services[key]) {
      this.services[key] = {};
      this.services[key].timestamp = Math.floor(Date.now() / 1000); // UNIX timestamp in seconds
      this.services[key].name = name;
      this.services[key].version = version;
      this.services[key].ip = ip;
      this.services[key].port = port;
      this.log.debug(`Added service ${name}, version ${version} at ${ip}`);
      return key;
    }

    this.services[key].timestamp = Math.floor(Date.now() / 1000);
    this.log.debug(`Updated service ${name}, version ${version} at ${ip}`);
    return key;
  }

  unregister(name, version, ip, port) {
    const key = name + version + ip + port;
    if (this.services[key]) {
      delete this.services[key];
      this.log.debug(
        `Unregistered service ${name}, version ${version} at ${ip}`
      );
      return key;
    }
  }
}

module.exports = ServiceRegistry;
