const productos = [
    {
        id: 1,
        nombre: 'Kolsh',
        precio: 1600,
        categoria: 'Rubias',
        descripcion: 'Cerveza sabor intenso',
        image: './src/assets/kolsh.jpg',
    },
    {
        id: 2,
        nombre: 'Golden',
        precio: 1500,
        categoria: 'Rubias',
        descripcion: 'Cerveza sabor suave',
        image: './src/assets/Golden.jpg',

    },
    {
        id: 3,
        nombre: 'Irish Red',
        precio: 1700,
        categoria: 'Rojas',
        descripcion: 'Cerveza sabor intenso',
        image: './src/assets/irish-red.jpg',

    },
    {
        id: 4,
        nombre: 'Dorada pampeana',
        precio: 1450,
        categoria: 'Rubias',
        descripcion: 'Cerveza sabor suave',
        image: './src/assets/dorada-pampeana.jpg',

    }
]

export const getProducts = () => {
    return new Promise((response) => {
        setTimeout(() => {
        response(productos);
        }, 2000);
    });
};

// FILTRAR POR CATEGORIA
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const productosfiltrados = productos.filter(
            (el) => el.categoria === category
            );
        setTimeout (() =>{
            resolve(productosfiltrados);
        }, 2000)
    })

}