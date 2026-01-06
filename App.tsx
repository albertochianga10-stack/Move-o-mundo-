
import React, { useState, useCallback } from 'react';
import { AppState, Book, BookSummary } from './types';
import { BOOKS } from './constants';
import { generateDeepSummary } from './services/geminiService';
import BookCard from './components/BookCard';
import SummaryView from './components/SummaryView';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.HOME);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [summary, setSummary] = useState<BookSummary | null>(null);
  const [loadingStep, setLoadingStep] = useState<string>('');

  const handleBookClick = async (book: Book) => {
    setSelectedBook(book);
    setState(AppState.LOADING);
    setLoadingStep('Iniciando análise profunda...');
    
    try {
      const steps = [
        'Analisando ensinamentos do autor...',
        'Compilando estratégias de negócios...',
        'Verificando recomendações de bilionários...',
        'Formatando insights práticos para você...',
        'Finalizando o dossiê completo...'
      ];
      
      let stepIndex = 0;
      const stepInterval = setInterval(() => {
        if (stepIndex < steps.length) {
          setLoadingStep(steps[stepIndex]);
          stepIndex++;
        }
      }, 3000);

      const generatedSummary = await generateDeepSummary(book.title, book.author, book.recommendedBy);
      
      clearInterval(stepInterval);
      setSummary(generatedSummary);
      setState(AppState.VIEWING);
    } catch (error) {
      console.error(error);
      setState(AppState.ERROR);
    }
  };

  const reset = () => {
    setState(AppState.HOME);
    setSelectedBook(null);
    setSummary(null);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={reset}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
            <span className="serif text-xl font-bold text-slate-900">Elite Library</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Biblioteca</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Bilionários</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Estratégias</a>
          </div>
        </div>
      </nav>

      {state === AppState.HOME && (
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="serif text-4xl md:text-5xl text-slate-900 mb-6">
              Domine as Ideias que Movem o Mundo
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore resumos ultra-profundos dos livros que moldaram a mente dos bilionários mais bem-sucedidos da história.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOOKS.map(book => (
              <BookCard key={book.id} book={book} onClick={handleBookClick} />
            ))}
          </div>
        </main>
      )}

      {state === AppState.LOADING && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-indigo-600 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Preparando Conhecimento de Elite</h2>
          <p className="text-slate-500 animate-pulse">{loadingStep}</p>
          <p className="mt-8 text-xs text-slate-400 max-w-xs text-center">
            Nossa IA está lendo milhares de páginas para criar um resumo exaustivo de 2.000+ palavras especialmente para você.
          </p>
        </div>
      )}

      {state === AppState.VIEWING && selectedBook && summary && (
        <SummaryView 
          book={selectedBook} 
          summary={summary} 
          onBack={reset} 
        />
      )}

      {state === AppState.ERROR && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <div className="text-6xl mb-6">⚠️</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Ops! Falha na Transmissão de Sabedoria</h2>
          <p className="text-slate-500 mb-8">Não conseguimos gerar este resumo agora. Por favor, tente novamente.</p>
          <button 
            onClick={reset}
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Tentar Novamente
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
