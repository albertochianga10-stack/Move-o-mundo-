
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
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={book.coverUrl} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div className="text-white">
            <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Recomendado por</p>
            <p className="text-sm font-medium">{book.recommendedBy.join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">{book.title}</h3>
        <p className="text-slate-500 text-sm mb-3">por {book.author}</p>
        <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
          {book.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
