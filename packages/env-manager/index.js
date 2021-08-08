const getEnvironment = () => {
  return `ENV_${process.env.NODE_ENV}`;
};

module.exports = {
  getEnvironment,
};
