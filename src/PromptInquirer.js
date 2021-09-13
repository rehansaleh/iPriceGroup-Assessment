const inquirer = require("inquirer");

const PromptInquirer = class {
  promptUserOnConsole = (inputMessage, onStringInputComplete) => {
    inquirer
      .prompt([
        {
          type: "input",
          message: inputMessage,
          name: "stringInput",
        },
      ])
      .then((answers) => onStringInputComplete(answers.stringInput));
  };
};

module.exports = {
  PromptInquirer,
};
