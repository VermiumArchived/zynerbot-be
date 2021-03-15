exports.metadata = {
  "name": "ping",
  "description": "Checks latency",
  "category": "Utility",
  "permissions": [],
};

exports.execute: () => {
  console.log("Executed command ping");
};
