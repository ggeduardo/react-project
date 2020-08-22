import CImg1 from '../plantilla/img/product/feature-product/f-p-5.jpg'
import CImg2 from '../plantilla/img/product/feature-product/f-p-6.jpg'
import CImg3 from '../plantilla/img/product/feature-product/f-p-7.jpg'
import CImg4 from '../plantilla/img/product/feature-product/f-p-8.jpg'
import CImg5 from '../plantilla/img/product/feature-product/f-p-9.jpg'
import CImg6 from '../plantilla/img/product/feature-product/f-p-10.jpg'
import CImg7 from '../plantilla/img/product/feature-product/f-p-11.jpg'
import CImg8 from '../plantilla/img/product/feature-product/f-p-12.jpg'

/*------------------------------ SLIDER IMAGES -------------------------------------- */

/*import Imagen1 from '../plantilla/img/product/hot-product/hot-p-11.jpg'
import Imagen2 from '../plantilla/img/product/hot-product/hot-p-2.jpg'*/
import Imagen3 from '../plantilla/img/product/feature-product/f-p-1.jpg'
import Imagen4 from '../plantilla/img/product/feature-product/f-p-2.jpg'
import Imagen5 from '../plantilla/img/product/feature-product/f-p-3.jpg'
import Imagen6 from '../plantilla/img/product/feature-product/f-p-4.jpg'

/*------------------------------- LATEST PRODUCTS------------------------------------ */

import ImgLP1 from '../plantilla/img/product/feature-product/f-p-5.jpg'
import ImgLP2 from '../plantilla/img/product/feature-product/f-p-6.jpg'
import ImgLP3 from '../plantilla/img/product/feature-product/f-p-7.jpg'
import ImgLP4 from '../plantilla/img/product/feature-product/f-p-8.jpg'
import ImgLP5 from '../plantilla/img/product/feature-product/f-p-9.jpg'
import ImgLP6 from '../plantilla/img/product/feature-product/f-p-10.jpg'
import ImgLP7 from '../plantilla/img/product/feature-product/f-p-11.jpg'
import ImgLP8 from '../plantilla/img/product/feature-product/f-p-12.jpg'

/*------------------------------ CLIENT LOGO ---------------------------------------- */

import CLImg1 from '../plantilla/img/clients-logo/c-logo-1.png'
import CLImg2 from '../plantilla/img/clients-logo/c-logo-2.png'
import CLImg3 from '../plantilla/img/clients-logo/c-logo-3.png'
import CLImg4 from '../plantilla/img/clients-logo/c-logo-4.png'
import CLImg5 from '../plantilla/img/clients-logo/c-logo-5.png'

/*------------------------------ LASTEST SEARCHED ------------------------------------  */

import LSImg1 from '../plantilla/img/product/most-product/m-product-1.jpg'
import LSImg2 from '../plantilla/img/product/most-product/m-product-2.jpg'
import LSImg3 from '../plantilla/img/product/most-product/m-product-3.jpg'
import LSImg4 from '../plantilla/img/product/most-product/m-product-4.jpg'
import LSImg5 from '../plantilla/img/product/most-product/m-product-5.jpg'
import LSImg6 from '../plantilla/img/product/most-product/m-product-6.jpg'
import LSImg7 from '../plantilla/img/product/most-product/m-product-7.jpg'
import LSImg8 from '../plantilla/img/product/most-product/m-product-8.jpg'
import LSImg9 from '../plantilla/img/product/most-product/m-product-9.jpg'
import LSImg10 from '../plantilla/img/product/most-product/m-product-10.jpg'
import LSImg11 from '../plantilla/img/product/most-product/m-product-11.jpg'
import LSImg12 from '../plantilla/img/product/most-product/m-product-12.jpg'

/*---------------------------------------------------------------------------------------------*/

/* ----------------------------------------PRODUCT AREA----------------------------------------*/

import imgPA1 from '../plantilla/img/product/single-product/s-product-pc1.jpg'
import imgPA2 from '../plantilla/img/product/single-product/s-product-pc2.jpg'
import imgPA3 from '../plantilla/img/product/single-product/s-product-pc3.jpg'

/* --------------------------------------------------------------------------------------------- */

/* ----------------------------------------COMMENTS AREA---------------------------------------- */

import imgC1 from '../plantilla/img/product/single-product/jerson.png'
import imgC2 from '../plantilla/img/product/single-product/jerika.png'
import imgC3 from '../plantilla/img/product/single-product/aaron.png'


export const datos = {
    MenuDN : [
        ["Inicio",],["Categorias","Detalles del producto ","Revision ",  "Confirmacion "],
        ["Blog","Información "],
        ["Inicio de sesion",  "Registrarse "],["contact"],
        {url1: ["/categories","/detallesdelProducto","/revision","/confirmacion"], url2: ["/blog","/informacion"], url3: ["/login","/register"], url4: ["/"], }
    ],
    CPImages : [
        {url: CImg1, images:[CImg1,CImg2,CImg3], name: "camiseta 1", price : "$120", tag:"CAMISAS", etiqueta:"ROPA", availibility:"DISPONIBLE",  lugar:"EN LA ZONA",popularidad:"MEDIA", rango:"101 - 500 $", 
            Comments:{
                
                    Images:[imgC1,imgC2,imgC3],
                    Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                    Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                    comment:[
                        "Mrk que guapo eres",
                        "Bellisimo",
                        "Jerson se vería hermoso ahí"
                    ]              
            }},
        {url: CImg2, images:[CImg2,CImg2,CImg3], name: "camiseta 2", price : "$25",  tag:"CAMISAS", etiqueta:"ROPA", availibility:"DISPONIBLE",  lugar:"EN EL PAIS",popularidad:"MEDIA", rango:"0 - 100 $" ,
            Comments:{
                
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Este esta muy barato bro",
                    "Jerson tiene razon esta muy barato",
                    "Jerson se vería hermoso ahí"
                ]}
            },
        {url: CImg3, images:[CImg3,CImg1,CImg3], name: "camiseta 3", price : "$10",  tag:"CAMISAS", etiqueta:"ROPA", availibility:"DISPONIBLE",  lugar:"EN EL PAIS",popularidad:"ALTA", rango:"0 - 100 $",
            Comments:{
                    
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["15th Aug, 2020 at 05:00 pm","16th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Esta barato y el color no me gusta:(",
                    "Este no me gusta tanto",
                    "Jerson se vería hermoso ahí igual"
                ]}
        },
        {url: CImg4, images:[CImg4,CImg5,CImg5], name: "camiseta 4", price : "$160", tag:"CAMISAS", etiqueta:"ROPA", availibility:"DISPONIBLE",  lugar:"EN EL PAIS",popularidad:"ALTA", rango:"101 - 500 $",
            Comments:{
                    
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["15th Aug, 2020 at 08:56 am","01th Aug, 2020 at 02:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Buen producto, rapida entrega",
                    "Tiene otros colores?",
                    "Me gusta, pero esta un poco caro"
                ]}
        },
        {url: CImg5, images:[CImg4,CImg6,CImg5], name: "camiseta 5", price : "$180", tag:"CAMISAS", etiqueta:"ROPA", availibility:"DISPONIBLE",  lugar:"EN LA ZONA",popularidad:"ALTA" , rango:"101 - 500 $",
            Comments:{
                    
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Que guapo ",
                    "Es la misma que la pasada?",
                    "guapo eres tu jerson"
                ]}
        },
        {url: CImg6, images:[CImg6,CImg6,CImg6], name: "camiseta 6", price : "$170", tag:"CAMISAS", etiqueta:"ROPA", availibility:"DISPONIBLE",  lugar:"EN EL PAIS",popularidad:"MEDIA", rango:"101 - 500 $",
            Comments:{
                        
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["10th Aug, 2020 at 05:56 pm","10th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Tiene de otros colores?, el rosa me da amsiedad  ",
                    "Tiene descuento?",
                    "Yo te quito la amsiedad Jerson "
                ]}
        },
        {url: CImg7, images:[CImg7,CImg7,CImg7], name: "camiseta 7", price : "$1020",tag:"CAMISAS", etiqueta:"ROPA", availibility:"DISPONIBLE",  lugar:"EN EL PAIS",popularidad:"MEDIA", rango:"501 - 1000$",
            Comments:{
                        
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg8, images:[CImg8,CImg8,CImg8], name: "camiseta 8", price : "$1000", tag:"ACCESORIOS.", etiqueta:"ROPA", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"ALTA", rango:"501 - 1000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg1, images:[CImg1,CImg1,CImg1], name: "camiseta 9", price : "$120", tag:"ROBOTS", etiqueta:"TECNOLOGIA", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"MEDIA", rango:"101 - 500 $",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}    
        },
        {url: CImg2, images:[CImg2,CImg2,CImg2], name: "camiseta 10", price : "$1000", tag:"DOMESTICOS", etiqueta:"TECNOLOGIA", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"BAJA", rango:"501 - 1000$",
        Comments:{
                        
            Images:[imgC1,imgC2,imgC3],
            Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
            Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
            comment:[
                "Cuando vi el precio.. UY KIETO ",
                "PEROO SI ESTA CARISIMOOO",
                "Guapo jerson"
            ]}    
        },
        {url: CImg3, images:[CImg3,CImg3,CImg3], name: "camiseta 11", price : "$1000", tag:"ACCESORIOS", etiqueta:"JUEGOS", availibility:"DISPONIBLE",lugar:"EN EL PAIS",popularidad:"ALTA", rango:"501 - 1000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg4, images:[CImg4,CImg4,CImg4], name: "camiseta 12", price : "$1000", tag:"POSTER", etiqueta:"JUEGOS", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"BAJA", rango:"1001 - 5000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}       
        },
        {url: CImg5, images:[CImg5,CImg5,CImg5], name: "camiseta 13", price : "$1000", tag:"POSTER", etiqueta:"JUEGOS", availibility:"DISPONIBLE", lugar:"EN LA ZONA",popularidad:"ALTA",rango:"1001 - 5000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg5, images:[CImg6,CImg6,CImg6], name: "camiseta 14", price : "$1000", tag:"REPUESTOS", etiqueta:"CARROS", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"MEDIA", rango:"501 - 1000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg6, images:[CImg7,CImg7,CImg7], name: "camiseta 15", price : "$1000", tag:"REPUESTOS", etiqueta:"CARROS", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"MEDIA", rango:"501 - 1000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg7, images:[CImg8,CImg8,CImg8], name: "camiseta 16", price : "$1000", tag:"MOTOS", etiqueta:"CARROS", availibility:"DISPONIBLE",lugar:"EN LA ZONA",popularidad:"ALTA", rango:"1001 - 5000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Esto es un moto?",
                    "no se porque esta camisa dice que es un carro",
                    "jerson guapo"
                ]}
        },
        {url: CImg1, images:[CImg1,CImg2,CImg3], name: "camiseta 17", price : "$1000", tag:"COMPUTERS", etiqueta:"TECNOLOGIA", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"BAJA", rango:"501 - 1000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg2, images:[CImg2,CImg2,CImg2], name: "camiseta 18", price : "$1000", tag:"TELEFONOS", etiqueta:"TECNOLOGIA", availibility:"DISPONIBLE", lugar:"EN EL PAiS",popularidad:"ALTA", rango:"1001 - 5000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Este telefefono se ve un poco extraño ",
                    "La camara no me gusta",
                    "Esto no es un telefono, tonto."
                ]}
        },
        {url: CImg5, images:[CImg1,CImg2,CImg3], name: "camiseta 19", price : "$1000", tag:"", etiqueta:"COMIDA", availibility:"DISPONIBLE", lugar:"EN EL PAiS",popularidad:"MEDIA", rango:"501 - 1000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg4, images:[CImg3,CImg3,CImg3], name: "camiseta 20", price : "$1000", tag:"ZAPATOS", etiqueta:"ROPA", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"ALTA", rango:"1001 - 5000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "Cool ",
                    "Esta me gusta bastante",
                    "Aun no me llega el paquete:("
                ]}
        },
        {url: CImg6, images:[CImg1,CImg2,CImg3], name: "camiseta 21", price : "$6000", tag:"ZAPATOS", etiqueta:"ROPA", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"ALTA", rango: "MAYOR A 5000$",
            Comments:{
                            
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "UY KIETO ",
                    "6000??????????????",
                    "Sin comentarios"
                ]}
        },
        {url: CImg4, images:[CImg1,CImg2,CImg3], name: "camiseta 22", price : "$6000", tag:"ZAPATOS", etiqueta:"ROPA", availibility:"DISPONIBLE", lugar:"EN EL PAIS",popularidad:"BAJA", rango:"MAYOR A 5000$",
            Comments:{
                                
                Images:[imgC1,imgC2,imgC3],
                Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
                Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
                comment:[
                    "UY KIETO ",
                    "6000??????????????",
                    "Sin comentarios"
                ]}
        } 
    ],
    Slider : [Imagen3, Imagen4, Imagen5, Imagen6],
    latestProducts : [
        {url: ImgLP1, name: 'Sueter gris Tshirt', price: "$150.00"},
        {url: ImgLP2, name: "Camiseta Tshirt", price: "$50.00"},
        {url: ImgLP3, name: "Camiseta de Futbol  Tshirt", price: "$10.00"},
        {url: ImgLP4, name: "Camisa deportiva", price: "$110.00"},
        {url: ImgLP5, name: "Blusa Allow", price: "$120.00"},
        {url: ImgLP6, name: "Blusa Allow", price: "$130.00"},
        {url: ImgLP7, name: "Blusa Allow", price: "$50.00"},
        {url: ImgLP8, name: "Blusa Allow", price: "$15.00"},
    ],
    clientLogo : [CLImg1,CLImg2,CLImg3,CLImg4,CLImg5],
    latestSearched : [
        {url: LSImg1, name: "Black lace Heels", price:"$150.00"},
        {url: LSImg2, name: "White lace Heels", price:"$10.00"},
        {url: LSImg3, name: "Green lace Heels", price:"$50.00"},
        {url: LSImg4, name: "Pink lace Heels", price:"$60.00"},
        {url: LSImg5, name: "Girl shoes", price:"$15.00"},
        {url: LSImg6, name: "T-shirt", price:"$160.00"},
        {url: LSImg7, name: "Black lace ", price:"$170.00"},
        {url: LSImg8, name: "lace Heels", price:"$15.00"},
        {url: LSImg9, name: "shirt", price:"$10.00"},
        {url: LSImg10, name: "skirt", price:"$15.00"},
        {url: LSImg11, name: "white lace Heels", price:"$150.00"},
        {url: LSImg12, name: "Black lace Heels", price:"$150.00"}
    ],
    PA: {
        images: [imgPA1,imgPA2,imgPA3],
        name: "COMPUTADORA GAMER", 
        price : "$9000",
        etiqueta:"TECNOLOGIA",
        availibility:"DISPONIBLE",
        Comments:{
                                
            Images:[imgC1,imgC2,imgC3],
            Name:["Jerson Moreno","Jerika Selaya", "Aaron"],
            Fecha:["21th Aug, 2020 at 05:56 pm","20th Aug, 2020 at 01:00 pm","20th Aug, 2020 at 02:36 pm"],
            comment:[
                "esto es precioso ",
                "Yo quieroo unaaa",
                "increible bro"
            ]}
    },


}

