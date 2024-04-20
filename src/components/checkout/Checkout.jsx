import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  Heading,
  Flex,
  Image,
  Divider,
  AbsoluteCenter,
  Text,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import Context from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { inventario } from "../../data/asyncMock";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    reapetedEmail: "",
    phone: "",
  });
  const [emailMatch, setEmailMatch] = useState(true);

  const { cart, getTotal, clearCart } = useContext(Context);

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const validateEmails = () => {
    if (user.email === user.reapetedEmail) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
  };

  const validateForm = () => {
    // validaciones al form
  };

  const getOrder = async () => {
    validateEmails();
    if (emailMatch) {
      const queryRef = collection(db, "orders");
      try {
        const order = {
          buyer: user,
          cart: cart,
          total: getTotal(),
        };

        const orderDocRef = await addDoc(queryRef, order);
        const orderId = orderDocRef.id;
        Swal.fire({
          title: "Gracias por tu compra",
          text: `El número de orden de tu compra es: ${orderId}`,
          icon: "success",
          confirmButtonColor: "#243F4D",
        })
          .then(() => {
            clearCart();
            navigate("/");
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "Error",
        text: `Por favor, verifica que los datos ingresados sean correctos`,
        icon: "error",
      });
    }
  };

  return (
    <Flex w={"100%"} direction={"column"} justify={"center"} align={"center"}>
      <Flex
        minW={"30%"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        backgroundColor={"#fff"}
        mt={2}
        borderRadius={"5px"}
      >
        <Box m={2} w={"100%"}>
          <Heading textAlign={"center"} color={"#243F4D"}>
            Resumen:
          </Heading>
          <Flex w={"100%"} justify={"center"} align={"center"}>
            {cart.map((productos) => (
              <Image
                boxSize="15%"
                m={2}
                src={productos.image}
                alt={productos.nombre}
              />
            ))}
          </Flex>
          <Box position="relative" padding="10" w={"100%"}>
            <Divider />
            <AbsoluteCenter w={"100%"}>
              <Text fontSize={"2xl"} textAlign={"center"} color={"#243F4D"}>
                Total de la compra ${getTotal()}
              </Text>
            </AbsoluteCenter>
          </Box>
        </Box>
      </Flex>
      <Divider mt={10} w={"90%"} />
      <FormControl w={"40%"}>
        <FormLabel textAlign={"center"} fontSize={"2xl"} color={"#fff"} mt={4}>
          Datos de facturación
        </FormLabel>
        <Input
          type="text"
          name="name"
          onChange={updateUser}
          mb={2}
          placeholder="Nombre"
        />
        <Input
          type="email"
          name="email"
          onChange={updateUser}
          mb={2}
          placeholder="Email"
        />
        <Input
          type="email"
          name="reapetedEmail"
          onChange={updateUser}
          mb={2}
          placeholder="Repetir email"
        />
        <Input
          type="text"
          name="phone"
          onChange={updateUser}
          mb={2}
          placeholder="Teléfono"
        />
        <Flex w={"100%"} justify={"center"} align={"center"}>
          <Button
            onClick={getOrder}
            background={"#243F4D"}
            color={"#fff"}
            _hover={{
              backgroundColor: "#fff",
              color: "#243F4D",
            }}
          >
            Finalizar compra
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};

export default Checkout;
