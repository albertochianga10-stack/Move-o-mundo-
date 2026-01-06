
import { GoogleGenAI, Type } from "@google/genai";
import { BookSummary } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateDeepSummary(title: string, author: string, recommendedBy: string[]): Promise<BookSummary> {
  const prompt = `Crie um resumo PROFUNDO, EXAUSTIVO e DETALHADO em PORTUGUÊS (mínimo 2000 palavras) para o livro "${title}" de ${author}.
  Este livro é recomendado por: ${recommendedBy.join(', ')}.
  
  Siga RIGOROSAMENTE a seguinte estrutura e forneça o máximo de detalhes possível para cada seção:
  
  1. Introdução ao livro: Apresentação do autor, contexto histórico e por que bilionários o recomendam.
  2. Resumo detalhado do conteúdo principal: Explicação completa de conceitos-chave, ideias centrais e teorias organizadas logicamente.
  3. Principais lições e insights aplicáveis: Estratégias de negócios, investimentos e conselhos práticos.
  4. Exemplos e casos práticos: Histórias marcantes, estudos de caso ou analogias do livro.
  5. Análise crítica: Pontos fortes, limitações e relevância atual no mercado.
  6. Conexão com bilionários: Como e por que os bilionários citados usam esses conceitos.
  7. Resumo final e aplicação prática: Síntese e passos concretos imediatos.
  8. Recomendações complementares: Livros ou conceitos que expandem este aprendizado.

  IMPORTANTE: Não economize palavras. Quero profundidade acadêmica mesclada com aplicabilidade prática.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: prompt,
    config: {
      temperature: 0.7,
      thinkingConfig: { thinkingBudget: 4000 },
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
  if (!text) throw new Error("Falha ao gerar o resumo.");
  return JSON.parse(text) as BookSummary;
}
