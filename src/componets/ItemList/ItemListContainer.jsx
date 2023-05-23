import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {db} from "../../firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore";



const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const itemCollection = collection(db , "products")
    getDocs(itemCollection) 
    .then((res)=>{
      const products = res.docs.map(products => {
        return {
          ...products.data(),
          id: products.id
        }
      })
      setItems(products)  
    })
    .catch((err)=> )


    
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;