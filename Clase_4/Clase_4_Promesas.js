// Promesa que sume numeros , 1+1 = 2 , 2+2 = 4 , 4+3 = 7 

const numeros= [];
const anterior = 1;
const actual = 1;
const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('Los valores ingresados no son numeros');
        } else {
            resolve(a + b);
        }
    }, 1000);
    });
}

sumar(anterior, actual)
    .then((resultado) => {
        console.log(resultado);
        numeros.push(resultado);
        console.log(numeros);
        return sumar(resultado, 2);
    })
    .then((resultado) => {
        console.log(resultado);
        numeros.push(resultado);
        console.log(numeros);
        return sumar(resultado, 3);
    })
    .then((resultado) => { 
        console.log(resultado);
        numeros.push(resultado);   
        console.log(numeros);
        return sumar(resultado, 4);
    }) 
    .then((resultado) => { 
        console.log(resultado);
        numeros.push(resultado);   
        console.log(numeros);
        return sumar(resultado, 5);
    }) 
    .then((resultado) => { 
        console.log(resultado);
        numeros.push(resultado);   
        console.log(numeros);
        return sumar(resultado, 6);
    }) 
    .then((resultado) => { 
        console.log(resultado);
        numeros.push(resultado);   
        console.log(numeros);
        return sumar(resultado, 7);
    }) 
    .then((resultado) => { 
        console.log(resultado);
        numeros.push(resultado);   
        console.log(numeros);
        return sumar(resultado, 8);
    }) 
    .then((resultado) => { 
        console.log(resultado);
        numeros.push(resultado);   
        console.log(numeros);
        return sumar(resultado, 9);
    }) 
    .then((resultado) => { 
        console.log(resultado);
        numeros.push(resultado);   
        console.log(numeros);
        return sumar(resultado, 10);
    }) 

    .then((resultado) => {
        numeros.push(resultado);
        console.log(numeros);
    })
    .catch((error) => {
        console.log(error);
    });