const config = require('config');

const getConfigValue = (envName, configName, fallback = '') => {
  if (process.env[envName]) {
    return process.env[envName];
  }

  if (config.has(configName)) {
    return config.get(configName);
  }

  return fallback;
};

module.exports = {
  getMongoUri: () => getConfigValue('MONGO_URI', 'mongoURI'),
  getJwtSecret: () => getConfigValue('JWT_SECRET', 'jwtSecret'),
  getGithubToken: () => getConfigValue('GITHUB_TOKEN', 'githubToken')
};
