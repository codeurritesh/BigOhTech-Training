import React, { Suspense } from 'react';

// For localStorage
// useLocalState -> useState(intialValue) -> useLocalState('key',intialValue)
// local storage -  key -> set,get
// local -> state

const fetchData = (): Promise<string> => {
  return new Promise(resolve => setTimeout(() => resolve('Data loaded!'), 2000));
};

const MyComponentWithData: React.FC = () => {
  const [data, setData] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []); 

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>{data}</div>
    </Suspense>
  );
};

export default MyComponentWithData;
