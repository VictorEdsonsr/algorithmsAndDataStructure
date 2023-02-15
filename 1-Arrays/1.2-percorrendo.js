// Percorrendo array (iterando) e exibindo valores
const arr = ["victor", "preto", "masculino"];

// usamos um loop para percorrer cada index 
// do array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // dessa forma a saida mostrara os dados
}


// Vamos descobrir os primeiros 20 valores
// da sequencia de fibonnaci
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i])
}
