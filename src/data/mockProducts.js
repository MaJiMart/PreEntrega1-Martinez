let products = [
    { id: '001' ,category: 'caramelos', name: 'Flynn Paf (5u.)', stock:10, price: 1.5, photo: './public/products/car_flynnPaf.png', description: 'Caramelos masticables con sabor Tutti Frutti, Manzana, Banana, Frutila y Uva. Importante: Se enviarán surtidos según stock, no se puede elegir sabores.'},
    { id: '002' ,category: 'caramelos', name: 'Gotitas de Amor', stock:50, price: 0.55, photo: './public/products/car_gotitasDeAmor.png', description: 'Caramelos masticables con sabor a frutilla y están aromatizadas artificialmente. El paquete contiene 35 gramos'},
    { id: '003' ,category: 'caramelos', name: 'Mogul', stock:20, price: 1, photo: './public/products/car_mogul.png', description: 'Las gomitas están hechas con jugo natural de frutas, son ricas y aptas para celíacos'},
    { id: '004' ,category: 'caramelos',  name: 'Palitos de la Selva (10u.)', stock:80, price: 1, photo: './public/products/car_palitosDeLaSelva.png', description: 'Caramelo que tiene una forma de tubo, son de sabor frutilla-vainilla, que determinan una combinación de colores rosa y blanco típicos del caramelo.'},
    { id: '005' ,category: 'caramelos',  name: 'Pico Dulce', stock:50, price: 1, photo: './public/products/car_picoDulce.png', description: 'Chupa chup multicolor típico de Argentina'},
    { id: '006' ,category: 'caramelos',  name: 'Sugus Confitados', stock:20, price: 2, photo: './public/products/car_sugusConfitados.png', description: 'Caramelo confitado de sabores y colores variados. Contiene 50 gramos.'},
    { id: '007' ,category: 'chocolates',  name: 'Block', stock:40, price: 2,  photo: './public/products/cho_block.png', description: 'Chocolate con maní (cacahuetes) marca Arcor'},
    { id: '008' ,category: 'chocolates',  name: 'Bon o Bon (por unidad)', stock:60, price: 1.5,  photo: './public/products/cho_bonObon.png', description: 'Bon o Bon argentino de chocolate y crema de Cacahuete'},
    { id: '009' ,category: 'chocolates',  name: 'Cadbury Yoghurt Frutilla', stock:20, price: 3.5,  photo: './public/products/cho_cadbury.png', description: 'Chocolate con yoghurt frutilla CADBURY'},
    { id: '010' ,category: 'chocolates',  name: 'Dos Corazones (por unidad)', stock:50, price: 1.5,  photo: './public/products/cho_dosCorazones.png', description: 'Exquisito bocadito relleno bañado en el más rico chocolate Felfort'},
    { id: '011' ,category: 'chocolates',  name: 'Marroc (por unidad)', stock:50, price: 1,  photo: './public/products/cho_marroc.png', description: 'Bocadito argentino de praliné blanco y leche. Marca Felfort. '},
    { id: '012' ,category: 'chocolates',  name: 'Tofi', stock:60, price: 2,  photo: './public/products/cho_tofi.png', description: 'Bombón de chocolate con leche relleno de dulce de leche'},
    { id: '013' ,category: 'galletas',  name: 'Chocolinas', stock:100, price: 2.5,  photo: './public/products/galle_chocolinas.png', description: 'Galletitas Chocolinas Bagley Argentinas 150 Gramos'},
    { id: '014' ,category: 'galletas',  name: 'Bizcocho Dulce Don Satur', stock:40, price: 1.5,  photo: './public/products/galle_donSatur.png', description: 'Bizcocho Dulces argentinos de grasa. Ideales para acompañar unos mates entre amigos'},
    { id: '015' ,category: 'galletas',  name: 'Merengadas', stock:20, price: 1.75,  photo: './public/products/galle_merengadas.png', description: 'Galleta con dos tapas sabor vainilla rellenas de un esponjoso merengue sabor frutilla y espolvoreadas con coco rallado.'},
    { id: '016' ,category: 'galletas',  name: 'Rhodesia (por unidad)', stock:50, price: 1.25,  photo: './public/products/galle_rhodesia.png', description: 'Oblea rellena de mouse de limón y bañada en chocolate'},
    { id: '017' ,category: 'galletas',  name: 'Tentaciones', stock:15, price: 2.5,  photo: './public/products/galle_tentaciones.png', description: 'Galletas dulces rellenas de mouse de frutilla'},
    { id: '018' ,category: 'galletas',  name: 'Tita (por unidad)', stock:50, price: 1,  photo: './public/products/galle_tita.png', description: 'Galleta rellena de mouse de limón y bañada en chocolate'},
    { id: '019' ,category: 'galletas',  name: 'Traviata', stock:10, price: 2,  photo: './public/products/galle_traviata.png', description: 'Galletitas de agua, sabor original. Las clásicas galletitas argentinas de Bagley'},
    { id: '020' ,category: 'galletas',  name: 'Turrón (por unidad)', stock:60, price: 1.5,  photo: './public/products/galle_turron.png', description: 'Turrón de Maní Argentino Arcor o simplemente "Turron Arcor" es una golosina típica de Argentina. Consiste en dos obleas y un relleno de turrón y pasta de maní (cacahuete)'},
] 

export const mockProducts = (id) =>{
    return new Promise((res, rej)=>{

        setTimeout(()=>{
            res(!id ? products : products.find(product=> product.id === id))
        }, 1000)
    }) 
}
