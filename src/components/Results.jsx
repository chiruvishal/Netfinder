import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStateContext } from '../contexts/StateContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        if (location.pathname === '/search') {
          getResults(`search?query=${searchTerm}&gl=us&lr=en&num=10&start=0&sort=relevance`);
        } else if (location.pathname === '/images') {
          getResults(`imagesearch?query=${searchTerm}&gl=us&lr=en&num=10&start=0&sort=relevance`);
        }
      };
      fetchData();
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.items?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link} </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map(({ title, originalImageUrl }, index) => (
            <a href="" target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
              <div className="w-350 h-250">
                <img src={originalImageUrl} alt={title} loading="lazy" className="object-cover w-96 h-64" />
              </div>
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );

    default:
      return 'Error...';
  }
};

export default Results;
