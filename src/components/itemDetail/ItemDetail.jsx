import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Text,
  Heading,
  Image,
  IconButton,
} from "@chakra-ui/react";
import "./itemDetail.css";
import ItemCount from "../itenCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({
  image,
  nombre,
  descripcion,
  precio,
  categoria,
  stock,
  id,
}) => {
  const [cantidad, setCantidad] = useState(0);

  const { addItem, cart } = useContext(CartContext);

  const onAdd = (quantity) => {
    const item = {
      id,
      stock,
      nombre,
      precio,
      image,
    };
    addItem(item, quantity);
    setCantidad(quantity);
  };

  return (
    <div className="CardHeader">
      <Card maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading
                  size="xl"
                  justifyContent="center"
                  className="tituloPrduct"
                  color="#b29a98"
                >
                  {nombre}
                </Heading>
                <Text className="Text">Categoría: {categoria}</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text paddingBottom={3}>{descripcion}</Text>
          <Text paddingBottom={3}>$ {precio}</Text>
          <Text>Stock disponible: {stock}</Text>
        </CardBody>
        <Image objectFit="cover" src={image} alt={nombre} />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        ></CardFooter>
        {cantidad > 0 ? (
          <Link to="/cart" className="carrito">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
        )}
      </Card>
    </div>
  );
};

export default ItemDetail;
