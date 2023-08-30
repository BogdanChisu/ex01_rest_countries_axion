/*
Obiecte initializate by default in JS

document
- selectam si cream obiecte pe pagina

window
- selectam proprietatile intregii fereste de browser
   - URL
   - width
   - height

console
- singurul mod de a face debugging in JS
- printre singurele moduri

let - variabila block scoped
var - variabila function scoped
const - variabila block scoped constanta

*/

// document.getElementByID -> selecteaza un element din pagina pe baza 
// ID-ului

console.log(document.getElementById('div'));

// document.createElement({tag})

const button = document.createElement("button");

console.log(button);

// htmlElem.appendChild() -> adauga un element de HTML existent 
// inauntrul altui element existent de HTML

document.getElementById('div').appendChild(button);
// selecteaza elementul cu id-ul "div" si adauga-i elementul copil: 
// "button".

// createTextNode -> creaza un element de tip text
// care poate fi adaugat la un alt obiect HTML

const lorem = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Lorem Ipsum');
    p.appendChild(text);
    document.getElementById('div').appendChild(p);
}

const btnText = document.createTextNode('Click');
button.appendChild(btnText);

button.addEventListener('click', () => lorem());

console.log(btnText);

const niceSum = (a, b) => {
    if(a > b) {
        var c = 10;
        return a + c;
    }
    else return b + c;
}

console.log(niceSum(5, 10))

/* 
undefined - tip de data specific JS si reprezinta nimic
null      -> tip de data care reprezinta nimic, nu are valoare variabila
NaN       -> variabila nu e numar sau string, provine dintr-o operatiune pe
             care JS nu o intelege
*/

// EVENT LISTENER
/*
- onclick / click  - butoane
- onfocus   / focus
- onchange  / change - inputuri
- onhover
- onkeypress
- onkeydown
- onkeyup

1. Adaugare de eventuri - direct in HTML
2. Din JS folosind:
    elemHTML.addEventListener('numeEvent', () => functieName());
*/

/*
JS Example in development
*/
const addTable = (data) => {
    const table = document.createElement('table');
    const thead = document.createElement('tr');
    const thName = document.createElement('th');
    const thPop = document.createElement('th');
    const thFlag = document.createElement('th');
    const steag = document.createTextNode('Steag');
    const name = document.createTextNode('Nume');
    const populatie = document.createTextNode('Populatie');

    thFlag.appendChild(steag);
    thName.appendChild(name);
    thPop.appendChild(populatie);
    thead.appendChild(thFlag);
    thead.appendChild(thName);
    thead.appendChild(thPop);
    table.appendChild(thead);

    for(let i = 0; i < data.length; i++) {
        const tr = document.createElement('tr');
        const tdFlag = document.createElement('td');
        const tdName = document.createElement('td');
        const tdPop = document.createElement('td');
        const flagImg = document.createElement('img');
        const name = document.createTextNode(data[i].name.common)
        const population = document.createTextNode(data[i].population)
        flagImg.src = data[i].flags.png;
        flagImg.style.height = 'auto';
        flagImg.style.width = '60px';
        tdFlag.appendChild(flagImg);
        tdName.appendChild(name);
        tdPop.appendChild(population);
        tr.appendChild(tdFlag);
        tr.appendChild(tdName);
        tr.appendChild(tdPop)

        table.appendChild(tr);
    }

    document.body.appendChild(table)
}



/*axios.get('https://restcountries.com/v3.1/all')
.then((response) => {
    console.log(response);
    addTable(response.data);
})*/

const loadData = () => {
    axios.get('https://restcountries.com/v3.1/all')
    .then((response) => {
    addTable(response.data);
})
}

document.getElementById('load').addEventListener('click', () => loadData());

console.log('after');