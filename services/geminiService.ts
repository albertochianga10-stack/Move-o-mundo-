import { GoogleGenAI, Type } from "@google/genai";
import { BookSummary } from "../types";

export async function generateDeepSummary(title: string, author: string, recommendedBy: string[]): Promise<BookSummary> {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === "undefined") {
    throw new Error("API_KEY não configurada no ambiente.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `Crie um resumo PROFUNDO e DETALHADO em PORTUGUÊS para o livro "${title}" de ${author}.
  Este livro é recomendado por: ${recommendedBy.join(', ')}.
  
  Retorne um JSON com as seguintes chaves:
  - introduction: Contexto e importância.
  - mainContent: Explicação densa dos pilares centrais.
  - lessons: Lições estratégicas aplicáveis.
  - caseStudies: Exemplos ou histórias reais.
  - criticalAnalysis: Análise de impacto e relevância.
  - billionaireConnection: Por que líderes de sucesso o estudam.
  - finalSummary: Síntese e próximos passos.
  - recommendations: Materiais complementares.

  O texto deve ser rico, profissional e de alto nível.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", // Flash é ideal para resumos rápidos e estáveis
      contents: prompt,
      config: {
        temperature: 0.7,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            introduction: { type: Type.STRING },
            mainContent: { type: Type.STRING },
            lessons: { type: Type.STRING },
            caseStudies: { type: Type.STRING },
            criticalAnalysis: { type: Type.STRING },
            billionaireConnection: { type: Type.STRING },
            finalSummary: { type: Type.STRING },
            recommendations: { type: Type.STRING }
          },
          required: [
            "introduction", "mainContent", "lessons", "caseStudies", 
            "criticalAnalysis", "billionaireConnection", "finalSummary", "recommendations"
          ]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Resposta vazia da IA.");
    
    return JSON.parse(text) as BookSummary;
  } catch (error) {
    console.error("Erro no serviço Gemini:", error);
    throw error;
  }
}