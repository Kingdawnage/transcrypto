import OpenAI from "openai";
// const {Configuration, openAIApi} = require("openai")

// const configuration = new Configuration({apiKey: process.env.OPEN_API_KEY,});

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export default openai;
