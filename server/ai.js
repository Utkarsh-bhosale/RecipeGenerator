import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());           // Allow frontend on other port
app.use(express.json());   // Parse JSON body

// Configure Gemini
const ai = new GoogleGenAI({
  apiKey: "AIzaSyBDqy7CDl6LebL72VVhmuI_woV7mGcK498"
});

// Route to generate recipe
app.post("/recipe", async (req, res) => {
  const ingredients = req.body.ingridients || [];

  if (!Array.isArray(ingredients)) {
    return res.status(400).json({ error: "Ingredients must be an array" });
  }

  try {
    const prompt = `
    Create a cooking recipe using the following ingredients: ${ingredients.join(", ")}.

    Return the result **ONLY in Markdown format**, following EXACTLY this structure:

    # 🍽️ *Recipe Title*

    ## Ingredients
    - list each ingredient as a bullet point

    ## Instructions
    1. step by step cooking steps
    2. written clearly and simply

    ## Notes
    - give 1–2 tips

    Do NOT include anything outside Markdown.
    `;


    // Call Gemini
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        thinking: { budgetTokens: 0 }
      }
    });

    const text = response.candidates[0].content.parts[0].text;

    return res.json({ recipe: text });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: "Failed to fetch recipe" });
  }
});

// Start backend server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  //console.log(process.env.GEMINI_API_KEY)
});







// import dotenv from "dotenv";
// dotenv.config();
// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// export async function getRecipe(ingredients) {
//   const prompt = `Give me a recipe using these ingredients: ${ingredients.join(", ")}`;

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//     config: {
//       thinking: { budgetTokens: 0 }
//     }
//   });

//   return response.candidates[0].content.parts[0].text;
// }

// let recipe = await getRecipe(['chicken', 'jalepenos', 'spices', 'vegetables'])
// console.log(recipe)
