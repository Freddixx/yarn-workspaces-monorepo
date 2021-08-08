const env = require("env-manager");

const checkDevelopmentStatus = () => {
  console.log(`Running on ${env.getEnvironment()}.`);
  console.log('🛠️ Running some fake updates.');
  console.log('✅ Done with fake updates.');
};

console.log("Launching devtools...");
checkDevelopmentStatus();

module.exports = {
  checkDevelopmentStatus,
};
