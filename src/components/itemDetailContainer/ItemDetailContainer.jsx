import React, { useEffect, useState } from "react";
import { getProductById } from "../../data/asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import { Center, Spinner } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const queryRef = doc(db, "inventario", productId);

      const response = await getDoc(queryRef);

      const newItem = {
        ...response.data(),
        id: response.id,
      };
      setProduct(newItem);
      setLoading(false);
    };

    getProduct();
  }, []);

  // console.log(product);

  return (
    <div className="Spinner">
      {loading ? (
        <Spinner
          className="Spinner"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
      ) : (
        <>
          <ItemDetail {...product} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
