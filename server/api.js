import { OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set.');
  process.exit(1);
}

let openai;

try{
    const configuration = {
    apiKey: process.env.OPENAI_API_KEY,
};
openai = new OpenAIApi(configuration);
} catch(error){
    console.log('Error initializing OpenAI: ', error);
    process.exit(1);
}

export default openai;



