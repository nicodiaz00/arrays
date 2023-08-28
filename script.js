/*
Realiza un script que dado un arreglo de caracteres imprima por pantalla la cantidad de veces que aparece cada carácter en el arreglo. Ej: arreglo ['a', 'b', 'a', 'c', 'c', 'm', 'b', 'a'] debe imprimir 
a -> 3
b -> 2
c -> 2
m -> 1


let numbers = [1,2,3,4];

//console.log(numbers);

let caracteres = ['a', 'b', 'a', 'c', 'c', 'm', 'b', 'a'];
*/
//console.log(caracteres);


/*
const productos =["sillon", "silla","Mesa", "ropero"];

for(let i = 0; i < productos.length; i ++){
    console.log(productos);
}

let producto = "futon";

productos.push(producto);

console.log(productos);

let verduras = [];
let productoUno ;

productoUno = prompt("Ingrese una verdura");

verduras.push(productoUno);

alert(verduras);
console.log(verduras);
*/

/*
let caracteres = ['a', 'b', 'a', 'c', 'c', 'm', 'b', 'a'];

console.log(caracteres);

for(let i = 0; i < caracteres.length; i ++){
    
    for( let x = 0; x < caracteres.length; x ++){
        let contador = 0;
        if(caracteres[0] == caracteres[x]){
            contador ++;
            
            console.log(contador);
        }
        
        
    }
    
    
}
*/
let caracter = ['a', 'b', 'c', 'a'];
let contador = 0;


for(let i = 0; i < caracter.length; i ++){
    let posicion = 0
    for(let x = posicion; x < caracter.length; x++){
        if(caracter[i] == caracter[x]){
            
            contador = contador + 1;

        }
        
        
    }
    console.log(caracter[i]  +"=>"+ contador);
    contador = 0;
}

