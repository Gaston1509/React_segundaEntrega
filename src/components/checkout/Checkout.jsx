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

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });
  const [emailMatch, setEmailMatch] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  const { cart, getTotal, clearCart } = useContext(Context);

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const validateFields = () => {
    let valid = true;

    if (user.name.trim().length < 3) {
      setNameValid(false);
      valid = false;
    } else {
      setNameValid(true);
    }

    if (!isValidEmail(user.email)) {
      setEmailValid(false);
      valid = false;
    } else {
      setEmailValid(true);
    }

    if (
      !isValidEmail(user.repeatedEmail) ||
      user.email !== user.repeatedEmail
    ) {
      setEmailMatch(false);
      valid = false;
    } else {
      setEmailMatch(true);
    }

    if (!isValidPhone(user.phone)) {
      setPhoneValid(false);
      valid = false;
    } else {
      setPhoneValid(true);
    }

    return valid;
  };

  const isValidEmail = (email) => {
    // validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // validar telefono
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const getOrder = async () => {
    if (validateFields()) {
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
        text: `Por favor, verifica que los emails coincidan, nombre: mínimo tres letras, teléfono de 10 caracteres`,
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
                key={productos.id}
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
      <FormControl w={"40%"} isInvalid={!nameValid}>
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
          isInvalid={!emailValid}
        />
        <Input
          type="email"
          name="repeatedEmail"
          onChange={updateUser}
          mb={2}
          placeholder="Repetir email"
          isInvalid={!emailMatch}
        />
        <Input
          type="text"
          name="phone"
          onChange={updateUser}
          mb={2}
          placeholder="Teléfono"
          isInvalid={!phoneValid}
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
