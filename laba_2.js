let students = [
{
name: 'Marry',
last_name: 'Kim',
age: 18,
grade: 5.0,	
},
{
name: 'Dima',
last_name: 'Rudkevich',
age: 19,
grade: 6.2,
},
{
name: 'Lory',
last_name: 'Verd',
age: 18,
grade: 8.7,
},
{
name: 'Laura',
last_name: 'Jeckson',
age: 20,
grade: 5.5,	
},
];
const student = (function () {
const fill = (students) => {
let table = document.createElement('table');	
let tr = document.createElement('tr');
table.appendChild(tr);
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
let i = 0;
table.rows[0].cells[i++].innerHTML = 'Name';
table.rows[0].cells[i++].innerHTML = 'Last name';
table.rows[0].cells[i++].innerHTML = 'Age';
table.rows[0].cells[i++].innerHTML = 'Grade';
let j;
i = 1;
document.body.appendChild(table);
students.forEach(elem => {
j = 0;
let tr = document.createElement('tr');
table.appendChild(tr);
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
table.rows[i].cells[j++].innerHTML = elem.name;
table.rows[i].cells[j++].innerHTML = elem.last_name;
table.rows[i].cells[j++].innerHTML = elem.age;
table.rows[i++].cells[j++].innerHTML = elem.grade;
});
avarege_grade();
};
const avarege_grade = () => {
const table = document.querySelector('table');
const result = document.querySelector('#result');
let sum = 0;
Array.from(table.children).forEach((child, index) => {
if (index !== 0) {
sum += +child.lastElementChild.textContent;
}
});
result.textContent = +(sum / students.length).toFixed(2);
}
return {
fill
}
})();
student.fill(students);