import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import ItemList from "../itemList/ItemList";
import "./itemListContainer.css";

const ItemListContainer = ({ title }) => {
  const [inventario, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const queryRef = !categoryId
        ? collection(db, "inventario")
        : query(
            collection(db, "inventario"),
            where("categoria", "==", categoryId)
          );

      const response = await getDocs(queryRef);

      const products = response.docs.map((doc) => {
        const newObj = {
          ...doc.data(),
          id: doc.id,
        };
        return newObj;
      });

      setData(products);
      setLoading(false);
    };

    getData();
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <div className="Spinner">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
          />
        </div>
      ) : (
        <>
          <Heading className="titulo">{title}</Heading>
          <ItemList inventario={inventario} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
