import React, { useContext, useEffect, useState } from 'react'
import './FilterContainer.css'
import { apiManagement } from "../../services/ApiManagement";
import { MyContext } from '../../utils/MyContext';
import { Product } from '../../datatypes/Product';
const FilterContainer = () => {
    useEffect(()=>{
        getAllCategories();
      },[])
      const contextData = useContext(MyContext);

      const [allCategories,setAllCategories]=useState<string[]>([]);
      async function getAllCategories(){
        const categories:string[]= await apiManagement.getAllCategories();
        setAllCategories(categories);
      }
    async function chooseCategoryHandler(category:string){
        const categoryData=await apiManagement.getProductsOfCategories(category);
        contextData?.setAllProducts(categoryData);
    }
    console.log()
  return (
        <section id="filter-card">
                {
                    allCategories.map((category:string)=>{
                        return  <div className='filter' onClick={()=>chooseCategoryHandler(category)}> <h4>{category.at(0)?.toUpperCase()+category.substring(1)}</h4></div>;
                    })
                }
        </section>
    )
}

export default FilterContainer