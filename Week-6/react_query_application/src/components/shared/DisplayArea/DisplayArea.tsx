import React, { FormEvent, useContext, useEffect, useRef } from "react";
import "./displayArea.css";
import Card from "../Card/Card";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiManagement } from "../../../services/ApiManagement";
import { Response } from "../../../dataTypes/Response";
import { useMutation } from "@tanstack/react-query";

const DisplayArea = () => {
  const title = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLInputElement>(null);
  const views = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const {
    data,
    isLoading: isDataLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: ApiManagement.getData,
  });

  const { mutate } = useMutation({
    mutationFn: ApiManagement.postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postfgh9s"] }); //enum
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    const postTitle = title.current?.value;
    const postDesc = desc.current?.value;
    const postViews = desc.current?.value;
    console.log({ postTitle, postDesc, postViews });
    if (postDesc && postTitle && postViews)
      mutate({
        id: data?.length + 1,
        title: postTitle,
        desc: postDesc,
        views: postViews,
      });
    e.preventDefault();
  };
  if (isDataLoading) return <h1>Loading....</h1>;
  if (error) return <p>{error.message}</p>;
  return (
    <section className="display-container">
      <form onSubmit={submitHandler}>
        <input type="text" name="title" placeholder="Title" ref={title} />
        <input type="text" name="desc" placeholder="Description" ref={desc} />
        <input type="views" name="views" placeholder="Views" ref={views} />
        <button type="submit">Add Post</button>
      </form>
      {data?.map((post: Response) => {
        return <Card post={post} />;
      })}
    </section>
  );
};

export default DisplayArea;
