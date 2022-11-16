const Pizzas = [
    {
    id: 1,
    nombre: "Muzzarella",
    ingredientes:["Salsa", " Queso Muzzarella", " Aceitunas Verdes", " Oregano."],
    precio: 900,
    },

    {
    id: 2,
    nombre: "Meat Lover",
    ingredientes: ["Salsa", " Queso Muzzarella", " Pepperoni", " Chorizo", " Carne Picada."],
    precio: 1500,
    },

    {
    id: 3,
    nombre: "Vegetariana",
    ingredientes: ["Salsa", " Queso Muzzarella", " Champiñones", " Morrón Verde", " Cebolla Morada", " Aceitunas Negras."],
    precio: 1350,
    },

    {
    id: 4,
    nombre: "Hawaiana",
    ingredientes: ["Salsa Honey BBQ Especial", " Queso Muzzarella", " Jamón Cocido", " Anana."],
    precio: 1680,
    },

    {
    id: 5,
    nombre: "Frutto Di Mare",
    ingredientes: ["Salsa al ajillo", " Queso Muzzarella", " Camarones", " Pulpo", " Calamar", " Ostiones."],
    precio: 1800,
    },

    {
    id: 6,
    nombre: "Faina Especial",
    ingredientes: ["Masa hecha de Garbazo", " Oregano", " Aceite Extra Virgen de Oliva."],
    precio: 600,
    }
]

//Pizzas con ID impar//

let pizzasImpares = Pizzas.filter(Pizzas => {
    if (Pizzas.id % 2 != 0) {
        return console.log(`${Pizzas.nombre} es de ID impar`)
    }
});

//Pizza menor a 600 pesos//

const precioBajo = Pizzas.some(Pizzas => Pizzas.precio > 600)
    console.log("No hay pizzas menores a 600 pesos, pero tenemos Faina y te saca del apuro!");



// Precios de la pizza //

let precioYNombre = Pizzas.forEach (Pizzas => console.log(`Nuestra ${Pizzas.nombre} es la mejor, probala a tan solo $${Pizzas.precio} pesos!`)
);

// Ingredientes de cada pizza //

const ingredientesEnLaPizza = Pizzas.filter((pizza) =>{
    return pizza.ingredientes
});

ingredientesEnLaPizza.forEach((pizza) => {
    console.log(`La pizza de ${pizza.nombre} tiene ${pizza.ingredientes}`);
});