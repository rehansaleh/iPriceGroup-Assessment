const { PROMPT_MESSAGE } = require("./src/common/constants");
const { Utils } = require("./src/common/Utilities");
const { PromptInquirer } = require("./src/PromptInquirer");
const { StringBuilder } = require("./src/StringBuilder");

/* Prompt user to enter a string and pass a callback function inside the 
promtUser function to be called as soon as the user is done with entering
the input string */
try {
  const inquirer = new PromptInquirer();
  inquirer.promptUserOnConsole(PROMPT_MESSAGE, async (responseString) => {
    // Tranform response after user presses enter
    const transformResponse = await StringBuilder.transformString(
      responseString
    );
    // Display object's values on console
    Utils.logObjectPropValues(transformResponse.Payload);
  });
} catch (err) {
  console.log(err);
}
