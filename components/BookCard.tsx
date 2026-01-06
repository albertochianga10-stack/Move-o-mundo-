
import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div 
      onClick={() => onClick(book)}
      className="bg-white rounded-2xl book-card-shadow border border-slate-100 overflow-hidden cursor-pointer transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={book.coverUrl} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
          <div className="text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-1 block">Elite Pick</span>
            <p className="text-xs font-medium opacity-90 line-clamp-1">Rec: {book.recommendedBy.join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-tight h-12">
          {book.title}
        </h3>
        <p className="text-slate-400 text-xs mb-3">por {book.author}</p>
        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-4 flex-grow">
          {book.shortDescription}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-tighter">Resumo Profundo</span>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;