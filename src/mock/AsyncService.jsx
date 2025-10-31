const productos = [
/*     {
        id: '',
        name: '',
        description: '',
        stock: 13,
        price: 25000,
        img: '',
        category:'',
    } */
        {
        id: '01',
        name: 'Cristales Internos',
        description: 'El verdadero tesoro esta en uno.',
        stock: 15,
        price: 26000,
        img: '../img/tapiz0b.png',
        imgDetail: '../img/tapiz0c.png',
        category:'Nuevos',
    },
        {
        id: '02',
        name: 'Observacion',
        description: 'Mirar hacia el inverior es el primer paso para comenzar a ver.',
        stock: 17,
        price: 25000,
        img: '../img/tapiz1b.png',//este es un ejemplo de postimagenes.org desde el enlace directo
        imgDetail: '../img/tapiz1c.png',
        category:'En Oferta',
    },
        {
        id: '03',
        name: 'Esfera',
        description: 'Las formas son solo la perspectiva de donde uno mira.',
        stock: 19,
        price: 28000,
        img: '../img/tapiz2b.png',//deberia estar en public
        imgDetail: '../img/tapiz2c.png',
        category:'En Oferta',
    },
        {
        id: '04',
        name: 'Frecuencia',
        description: 'Las frecuencias son solo la perspectiva de donde uno es.',
        stock: 20,
        price: 28000,
        img: '../img/tapiz3b.png',//deberia estar en public
        imgDetail: '../img/tapiz3c.png',
        category:'En Oferta',
    },
            {
        id: '05',
        name: 'Ser intermundo',
        description: 'Entre el cielo y el infierno habitan seres extraordinarios.',
        stock: 18,
        price: 29500,
        img: '../img/tapiz4b.png',//deberia estar en public
        imgDetail: '../img/tapiz4c.png',
        category:'Nuevos',
    },
            {
        id: '06',
        name: 'Iluminacion',
        description: 'La iluminacion es solo un estado de claridad.',
        stock: 15,
        price: 33300,
        img: '../img/tapiz5b.png',//deberia estar en public
        imgDetail: '../img/tapiz5c.png',
        category:'Nuevos',
    },
            {
        id: '07',
        name: 'Forma',
        description: 'Las formas son solo la perspectiva de donde uno mira.',
        stock: 3,
        price: 41000,
        img: '../img/tapiz6b.png',//deberia estar en public
        imgDetail: '../img/tapiz6c.png',
        category:'Mas vendidos',
    },
    
       
]
//se puede usar hosting de imagen para colocar las imagens de la pagina, postimagenes.org : usar enlace directo.

export const getProductos = () =>{
    let error = false
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
          let prod = productos.find((producto)=>producto.id === id)
          resolve (prod)
        },2000)
    })
}