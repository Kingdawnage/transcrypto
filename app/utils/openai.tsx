import OpenAI from 'openai';
const {Configuration, openAIApi} = require("openai")

const configuration = new Configuration({apiKey: process.env.OPEN_API_KEY,});

const openai = new openAIApi(configuration);
export default openai
