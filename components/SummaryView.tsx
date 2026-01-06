
import React from 'react';
import { Book, BookSummary } from '../types';

interface SummaryViewProps {
  book: Book;
  summary: BookSummary;
  onBack: () => void;
}

const Section: React.FC<{ title: string; content: string; icon: string }> = ({ title, content, icon }) => (
  <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-3xl">{icon}</span>
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-indigo-100 pb-2 flex-grow">{title}</h2>
    </div>
    <div className="prose prose-slate max-w-none text-slate-700 leading-loose text-lg whitespace-pre-wrap">
      {content}
    </div>
  </section>
);

const SummaryView: React.FC<SummaryViewProps> = ({ book, summary, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Voltar para Biblioteca
      </button>

      <header className="mb-16 text-center">
        <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Resumo Masterclass
        </div>
        <h1 className="serif text-5xl md:text-6xl text-slate-900 mb-6 leading-tight">
          {book.title}
        </h1>
        <p className="text-xl text-slate-500 mb-8 font-light italic">
          de {book.author}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {book.recommendedBy.map(r => (
            <span key={r} className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              {r}
            </span>
          ))}
        </div>
      </header>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
        <Section icon="📖" title="1. Introdução e Contexto" content={summary.introduction} />
        <Section icon="🧠" title="2. Conteúdo Principal e Teorias" content={summary.mainContent} />
        <Section icon="💡" title="3. Lições e Insights Estratégicos" content={summary.lessons} />
        <Section icon="📊" title="4. Casos Práticos e Histórias" content={summary.caseStudies} />
        <Section icon="⚖️" title="5. Análise Crítica e Relevância" content={summary.criticalAnalysis} />
        <Section icon="💎" title="6. Por que Bilionários Estudam Isso?" content={summary.billionaireConnection} />
        <Section icon="🎯" title="7. Resumo e Aplicação Imediata" content={summary.finalSummary} />
        <Section icon="📚" title="8. Recomendações Complementares" content={summary.recommendations} />
      </div>

      <footer className="text-center py-12 border-t border-slate-200">
        <p className="text-slate-400 text-sm italic">
          Gerado com inteligência artificial avançada para a Elite Library.
        </p>
      </footer>
    </div>
  );
};

export default SummaryView;
