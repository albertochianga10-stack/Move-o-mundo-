
import React, { useState } from 'react';
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
    
    // Se o livro já tem resumo pronto, abre na hora!
    if (book.predefinedSummary) {
      setSummary(book.predefinedSummary);
      setState(AppState.VIEWING);
      window.scrollTo(0, 0);
      return;
    }

    // Se não tem, tenta gerar via IA
    setState(AppState.LOADING);
    setLoadingStep('Iniciando análise profunda...');
    
    try {
      const steps = [
        'Analisando ensinamentos do autor...',
        'Compilando estratégias de negócios...',
        'Formatando insights práticos...',
        'Finalizando o dossiê completo...'
      ];
      
      let stepIndex = 0;
      const stepInterval = setInterval(() => {
        if (stepIndex < steps.length) {
          setLoadingStep(steps[stepIndex]);
          stepIndex++;
        }
      }, 2500);

      const generatedSummary = await generateDeepSummary(book.title, book.author, book.recommendedBy);
      
      clearInterval(stepInterval);
      setSummary(generatedSummary);
      setState(AppState.VIEWING);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
      setState(AppState.ERROR);
    }
  };

  const reset = () => {
    setState(AppState.HOME);
    setSelectedBook(null);
    setSummary(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={reset}
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">E</div>
            <span className="serif text-2xl font-bold text-slate-900 tracking-tight">Elite Library</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Biblioteca</a>
            <a href="#" className="hover:text-indigo-600 transition-colors border-l pl-8 border-slate-200">Elite Members</a>
          </div>
        </div>
      </nav>

      {state === AppState.HOME && (
        <main className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Acesso Premium Liberado
            </div>
            <h1 className="serif text-5xl md:text-7xl text-slate-900 mb-8 leading-[1.1]">
              Os Segredos que os Bilionários Não Contam.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              Analises exaustivas e profundas de cada obra, prontas para serem aplicadas no seu negócio hoje mesmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BOOKS.map(book => (
              <BookCard key={book.id} book={book} onClick={handleBookClick} />
            ))}
          </div>
        </main>
      )}

      {state === AppState.LOADING && (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <div className="relative w-28 h-28 mb-10">
            <div className="absolute inset-0 border-[3px] border-indigo-50 rounded-full"></div>
            <div className="absolute inset-0 border-[3px] border-t-indigo-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-indigo-600 font-bold text-lg">AI</div>
          </div>
          <h2 className="serif text-3xl font-bold text-slate-900 mb-3">Sintonizando Sabedoria</h2>
          <p className="text-slate-500 text-lg animate-pulse">{loadingStep}</p>
          <div className="mt-12 p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-sm">
            <p className="text-xs text-slate-400 leading-relaxed">
              Estamos gerando um dossiê de alta fidelidade. Para livros sem resumo prévio, a IA processa o contexto global em tempo real.
            </p>
          </div>
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
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-5xl mb-8">!</div>
          <h2 className="serif text-4xl font-bold text-slate-900 mb-4">Conexão Interrompida</h2>
          <p className="text-slate-500 mb-10 max-w-md text-lg">
            Houve um erro técnico ao tentar gerar este resumo específico. Tente novamente ou explore os livros com resumo instantâneo.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={reset}
              className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;