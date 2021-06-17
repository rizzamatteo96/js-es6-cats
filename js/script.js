//TODO Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso. Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

//* Define array objects
const cats = [
    {name : 'Billo', age : 3, color : 'black',gender : 'male'},
    {name : 'Lilly', age : 5, color : 'grey',gender : 'female'},
    {name : 'Pippo', age : 1, color : 'black',gender : 'male'},
    {name : 'Mimi', age : 6, color : 'orange',gender : 'female'},
    {name : 'Rambo', age : 2, color : 'brown',gender : 'male'},
    {name : 'Spin', age : 4, color : 'black',gender : 'male'},
    {name : 'Cassia', age : 5, color : 'grey',gender : 'female'},
    {name : 'Nogara', age : 8, color : 'orange',gender : 'female'}
];
// console.log(cats);

//* Print the list using forEach
cats.forEach((element,index) => {
    const {name,color} = element;
    document.getElementById('list1').innerHTML += 
    `<i class="fas fa-cat" style="color:${color};"></i> The name of the cat number ${index} is ${name} and the color is ${color} <br>`;
});



//TODO Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

//* Add ribbon color for gender
const blue = '#0000ff';
const pink = '#eea7b3';

const newCats = cats.map((element) => {
    const {name,age,color,gender} = element;
    let ribbonColor = (gender == 'female') ? pink : blue;

    return {name,                                                                  
        age,
        color,
        gender,
        ribbon : {
            color : ribbonColor, 
            opacity : age / 8
        }
    };
});


const printCatsRibbon = (array,pos) => {
    array.forEach((element) => {
        const {name,color,ribbon} = element;
        document.getElementById(pos).innerHTML += 
        `<i class="fas fa-cat" style="color:${color};"></i> The name of the cat is ${name} and the color is ${color} <i class="fas fa-ribbon" style="color:${ribbon.color}; opacity:${ribbon.opacity};"></i><br>`;
    });
}


//* Filter the main cats array to divide it in two: male and female
// MALE
const maleCats = newCats.filter((element) => element.gender === 'male');
printCatsRibbon(maleCats,'list2');

// FEMALE
const femaleCats = newCats.filter((element) => element.gender === 'female');
printCatsRibbon(femaleCats,'list2');



//TODO Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

let catsFemaleMale = [...femaleCats,...maleCats];

const catsFemaleMaleZip = catsFemaleMale.map((element) => {
    const {name, color, ribbon} = element;

    return {
        name,
        color,
        ribbon
    }
});

printCatsRibbon(catsFemaleMaleZip,'list3');