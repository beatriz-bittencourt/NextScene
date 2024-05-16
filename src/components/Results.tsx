import React from 'react';
import Card from './Card';

interface Result {
  id: number;
  original_title: string;
}

interface ResultsProps {
  results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className='xsm:grid xsm:grid-cols-2 sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result: Result) => (
        <Card key={result.id} {...{ result }} />
      ))}
    </div>
  );
};

export default Results;