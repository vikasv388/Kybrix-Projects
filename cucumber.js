module.exports = {
  default: {
    require: [
      "tests/step_definitions/*.js",
      "tests/hooks/hooks.js"
    ],
 
    format: ["progress",
        "allure-cucumberjs/reporter"
    ],
    publishQuiet: true
  }
};