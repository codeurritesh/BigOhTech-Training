import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { apiType } from "./datatypes/api-type";
import { ApiManagement, productApi } from "./services/ApiManagement";

const apiManagement = new ApiManagement();

type Args<TData> = {
  queryFn: () => Promise<TData>;
  onSuccess?: () => void;
  onError?: () => void;
};

type GenericDataType = Record<string, string | number | boolean>;

const useQuery = <TData extends GenericDataType | GenericDataType[]>({
  queryFn,
  onSuccess,
  onError,
}: Args<TData>) => {
  const [data, setData] = useState<TData>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [isError, setIsError] = useState(false);

  const fetchApiData = useCallback(async () => {
    try {
      setIsError(false);
      setLoading(true);
      const apidata = await queryFn();
      setData(apidata);
      onSuccess && onSuccess();
    } catch (err) {
      setError(err);
      setIsError(true);
      onError && onError();
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApiData();
  }, []);

  const refetch = () => {
    fetchApiData();
  };

  return {
    data,
    isLoading: loading,
    refetch,
    error,
    isError,
  };
};

const useToggle = (intialValue = false) => {
  const [state, setState] = useState(intialValue);

  const toggle = () => {
    // setState((prev)=>{
    //   return !prev
    // })

    setState((prev) => !prev);
  };

  return [state, toggle] as const;
};

const App = () => {
  // console.log(allCards);

  const {
    data: cardData,
    error,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: apiManagement.fetchApi,
  });

  const { data } = useQuery({
    queryFn: apiManagement.fetchApiWithQueries,
  });

  const [show, toggle] = useToggle(true);

  if (isLoading) {
    return <>Laoding...</>;
  }

  return (
    <div>
      {isError && (
        <div>
          {(error as any).message}
          <button onClick={refetch}>Refect</button>
        </div>
      )}
      <Header />
      <Section data={data} />
      <Footer />
    </div>
  );
};

export default App;

// Axios
// Props drilling - redux, contextAPI
// useCallback/useMemo - theory
// Key - index
// Nextjs
// routing route v6

// react query
// react hook form  - 3 step form
// User ->
// Family ->
// Addres
// Stepper
// requried fields , email, phone

// component
// common - input btn card
// feature -
// pages
