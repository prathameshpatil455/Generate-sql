import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openaiApikey = process.env.OPENAI_API_key;

if (!openaiApikey){
    console.error('OPENAI_API_key is not set')
    process.exit(1)
}

const configuration = new Configuration({
    apiKey: openaiApikey
})
const openai = new OpenAIApi(configuration)

export default openai