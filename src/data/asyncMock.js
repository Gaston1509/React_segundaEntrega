export const inventario = [
  {
    id: 1,
    nombre: "Kolsh",
    precio: 1600,
    categoria: "Rubias",
    stock: 25,
    descripcion:
      'La Kölsch es una especialidad local de cerveza elaborada en Colonia (Alemania). Es una cerveza clara, su tonalidad es amarilla brillante y tiene un gusto prominente, pero no extremo de lúpulo. Comparada a la cerveza "estándar" alemana, Pils, es menos amarga. ',
    image:
      "https://gaston1509.github.io/Buho-Artesanal/aseets/img/galery/kolsh.jpeg",
  },
  {
    id: 2,
    nombre: "Golden",
    precio: 1500,
    categoria: "Rubias",
    stock: 15,
    descripcion:
      "Tiene un agradable color dorado, amargor liviano, carbonatación media-alta, un suave sabor a cereal hace el soporte dulce para la combinación de lúpulos alemanes y americanos que entregan frescas notas cítricas y florales, cuerpo medio y agradable espuma. ",
    image:
      "https://gaston1509.github.io/Buho-Artesanal/aseets/img/galery/Golden.jpeg",
  },
  {
    id: 3,
    nombre: "Irish Red",
    precio: 1700,
    categoria: "Rojas",
    stock: 30,
    descripcion:
      "De color cobre profundo, medianamente turbia, con espuma densa y cremosa. En nariz se aprecian aromas a caramelo con suaves notas a lúpulo. En boca se denota un leve dulzor y sabor a granos tostados. Equilibrada de cuerpo mediano y compleja. ",
    image:
      "https://gaston1509.github.io/Buho-Artesanal/aseets/img/galery/Irish-red.jpeg",
  },
  {
    id: 4,
    nombre: "Dorada pampeana",
    precio: 1450,
    categoria: "Rubias",
    stock: 42,
    descripcion:
      "En sabores predomina el dulzor maltoso inicialmente suave. Típicamente ausentes los sabores a caramelo. El sabor a lúpulo es ligero a moderado (usualmente Cascade), pero no debería ser agresivo. El amargor del lúpulo es de bajo a moderado. ",
    image:
      "https://gaston1509.github.io/Buho-Artesanal/aseets/img/galery/dorada-pampeana.jpeg",
  },
];

export const getProducts = () => {
  return new Promise((response) => {
    setTimeout(() => {
      response(inventario);
    }, 2000);
  });
};

// FILTRAR POR CATEGORIA
export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const productosfiltrados = inventario.filter(
      (el) => el.categoria === category
    );
    setTimeout(() => {
      resolve(productosfiltrados);
    }, 2000);
  });
};

// FILTRAR PRODUCTO DETALLE USANDO ParseInt
export const getProductById = (id) => {
  return new Promise((resolve) => {
    const productoFiltrado = inventario.find((el) => el.id === parseInt(id));
    setTimeout(() => {
      resolve(productoFiltrado);
    }, 2000);
  });
};
