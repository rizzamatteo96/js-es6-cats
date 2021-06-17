//TODO Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso. Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

//* Define array objects
const cats = [
    {name : 'Billo', age : 3, color : 'black',sex : 'male'},
    {name : 'Lilly', age : 5, color : 'grey',sex : 'female'},
    {name : 'Pippo', age : 1, color : 'black',sex : 'male'},
    {name : 'Mimi', age : 0.5, color : 'orange',sex : 'female'},
    {name : 'Rambo', age : 2, color : 'brown',sex : 'male'},
    {name : 'Spin', age : 4, color : 'black',sex : 'male'},
    {name : 'Cassia', age : 5, color : 'grey',sex : 'female'},
    {name : 'Nogara', age : 8, color : 'orange',sex : 'female'}
];
// console.log(cats);

//* Print the list using forEach
cats.forEach((element,index) => {
    const {name,color} = element;
    document.getElementById('list').innerHTML += 
    `<i class="fas fa-cat" style="color:${color};"></i> The name of the cat number ${index} is ${name} and the color is ${color} <br>`;
});



//TODO Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.







//TODO Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.