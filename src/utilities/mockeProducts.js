let products = [
    { id: '001' ,category: 'Caramelos', name: 'Flynn Paf (5u.)', stock:10, price: 1.5, photo: './public/car_flynnPaf.png'},
    { id: '002' ,category: 'Caramelos', name: 'Gotitas de Amor', stock:50, price: 0.55, photo: './public/car_gotitasDeAmor.png'},
    { id: '003' ,category: 'Caramelos', name: 'Mogul', stock:20, price: 1, photo: './public/car_mogul.png'},
    { id: '004' ,category: 'Caramelos',  name: 'Palitos de la Selva (5u.)', stock:80, price: 1, photo: './public/car_palitosDeLaSelva.png'},
    { id: '005' ,category: 'Caramelos',  name: 'Pico Dulce', stock:50, price: 1, photo: './public/car_picoDulce.png'},
    { id: '006' ,category: 'Caramelos',  name: 'Sugus Confitados', stock:20, price: 2, photo: './public/car_sugusConfitados.png'},
    { id: '007' ,category: 'Chocolates',  name: 'Block', stock:40, price: 2,  photo: './public/cho_block.png'},
    { id: '008' ,category: 'Chocolates',  name: 'Bon o Bon (por unidad)', stock:60, price: 1.5,  photo: './public/cho_bonObon.png'},
    { id: '009' ,category: 'Chocolates',  name: 'Cadbury Yoghurt Frutilla', stock:20, price: 3.5,  photo: './public/cho_cadbury.png'},
    { id: '010' ,category: 'Chocolates',  name: 'Dos Corazones (por unidad)', stock:50, price: 1.5,  photo: './public/cho_dosCorazones.png'},
    { id: '011' ,category: 'Chocolates',  name: 'Marroc (por unidad)', stock:50, price: 1,  photo: './public/cho_marroc.png'},
    { id: '012' ,category: 'Chocolates',  name: 'Tofi', stock:60, price: 2,  photo: './public/cho_tofi.png'},
    { id: '013' ,category: 'Galletas',  name: 'Chocolinas', stock:100, price: 2.5,  photo: './public/galle_chocolinas.png'},
    { id: '014' ,category: 'Galletas',  name: 'Bizcocho Dulce Don Satur', stock:40, price: 1.5,  photo: './public/galle_donSatur.png'},
    { id: '015' ,category: 'Galletas',  name: 'Merengadas', stock:20, price: 1.75,  photo: './public/galle_merengadas.png'},
    { id: '016' ,category: 'Galletas',  name: 'Rhodesia (por unidad)', stock:50, price: 1.25,  photo: './public/galle_rhodesia.png'},
    { id: '017' ,category: 'Galletas',  name: 'Tentaciones', stock:15, price: 2.5,  photo: './public/galle_tentaciones.png'},
    { id: '018' ,category: 'Galletas',  name: 'Tita (por unidad)', stock:50, price: 1,  photo: './public/galle_tita.png'},
    { id: '019' ,category: 'Galletas',  name: 'Traviata', stock:10, price: 2,  photo: './public/galle_traviata.png'},
    { id: '020' ,category: 'Galletas',  name: 'Turrón (por unidad)', stock:60, price: 1.5,  photo: './public/galle_turron.png'},
] 

export const mockeProducts = () =>{
    return new Promise((res, rej)=>{

        setTimeout(()=>{
            res(products)
        }, 1000)
    }) 
}
