import React, { useContext, useEffect } from "react";
import "./displayArea.css";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import { ApiManagement, apiManagement } from "../../../services/ApiManagement";
import axios from "axios";

const fn = async () => {
  return await axios.get("https://picsum.photos/v2/list");
};

const DisplayArea = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: apiManagement.getUserData,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="display-container">
      {/* {
        myContext?.allUsers?.map((user)=>{
          return <Card user={user}/>
        })
      } */}
    </section>
  );
};

export default DisplayArea;
