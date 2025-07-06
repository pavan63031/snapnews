import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWF8ZW58MHx8MHx8fDA%3D'}
        alt={article.title}
      />
      <div className="p-5">

        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {article.title?.length > 60 ? article.title.slice(0, 60) + '...' : article.title}
        </h2>

        <p className="text-sm text-gray-500 mb-1">
          By {article.author || "Unknown Author"} | Source: {article.source?.name || "Unknown Source"}
        </p>

      
        <p className="text-xs text-gray-400 mb-3">
          {new Date(article.publishedAt).toLocaleString()}
        </p>

        <p className="text-gray-600 text-sm mb-4">
          {article.description ? article.description.slice(0, 100) + '...' : 'No description available.'}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white-800 bg-blue-200 rounded-full hover:bg-blue-700 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
