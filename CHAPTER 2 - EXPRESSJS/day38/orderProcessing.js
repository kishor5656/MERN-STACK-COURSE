const { checkAvailability } = require("./inventory");

function processOrder(item) {
  if (checkAvailability(item)) {
    console.log("Processing order for", item);
  } else {
    console.log(item, "is not available");
  }
}

module.exports = {
  processOrder,
};
