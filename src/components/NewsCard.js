import React, { useEffect, useState } from 'react';
import './NewsCard.css';
function NewsCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f28a3287e09c436eb1a1bfbc6eb563aa');
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="news-card">
      {articles.map((article, index) => (
        <div key={index} className="news-item">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsCard;