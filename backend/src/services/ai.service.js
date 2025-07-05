const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

console.log("Gemini Key:", process.env.GOOGLE_GEMINI_KEY);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" ,
    systemInstruction: `
      You are a code reviewer, who has an expertise in development. You look for the code and find the problems and suggest the solution
      to the developer.

      You always try to find the best solution for the developer and also try to make the code more efficient and clean.
    `
});

async function getContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = getContent;
