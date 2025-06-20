import React, { useState, useEffect, useRef } from 'react';
import NewsCard from './NewsCard';
import { useParams } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Spinner from './Spinner';

function Home(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const loadingbar = useRef(null);
  const { category } = useParams();
  const newsCategory = category || props.category || 'general';

  useEffect(() => {
    setLoading(true);
    if (loadingbar.current) loadingbar.current.continuousStart();

    fetch(`/api/news?category=${newsCategory}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
        if (loadingbar.current) loadingbar.current.complete();
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
        if (loadingbar.current) loadingbar.current.complete();
      });
  }, [newsCategory]);

  if (loading) return <Spinner />;

  return (
    <>
      <LoadingBar color="#f11946" ref={loadingbar} height={3} />
      <div className="p-6 bg-gray-100 min-h-screen w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {
            data.articles?.length > 0 ? (
              data.articles.map((article, index) => (
                <NewsCard key={article.url || index} article={article} />
              ))
            ) : (
              <h1>No articles found.</h1>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Home;
