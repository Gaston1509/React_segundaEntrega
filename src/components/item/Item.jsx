import React from "react";
import "./item.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Button,
  ButtonGroup,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ nombre, precio, image, id }) => {
  return (
    <div className="card">
      <Card maxW="sm">
        <CardBody>
          <Image src={image} alt={nombre} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text color="blue.600" fontSize="2xl">
              ${precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              <Link to={`/product/${id}`}>Ver detalle</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
