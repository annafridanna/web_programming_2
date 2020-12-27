let students = [];
var xhr = new XMLHttpRequest();

xhr.open(
'GET',
'https://run.mocky.io/v3/cfacf572-b27a-4882-949d-a26418fe0b9a',
true)

xhr.send()

xhr.onreadystatechange = function () {
if(xhr.readyState !== 4){
return
}
console.log('end')
if (xhr.status === 200){
console.log( JSON.parse(xhr.responseText))
students = JSON.parse(xhr.responseText)
Student.fill(students);
} else{
console.log('err', xhr.responseText)
}
}

const Student = (function() {
const fill = (students) => {
let table = document.createElement('table');
let tr = document.createElement('tr');
table.appendChild(tr);
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
table.rows[0].cells[0].innerHTML = 'first_name';
table.rows[0].cells[1].innerHTML = 'last_name';
table.rows[0].cells[2].innerHTML = 'age';
table.rows[0].cells[3].innerHTML = 'grade';

document.body.appendChild(table);
let i = 1;

students.forEach(elem => {
let tr = document.createElement('tr');
table.appendChild(tr);
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
table.rows[i].cells[0].textContent = elem.first_name;
table.rows[i].cells[1].innerHTML = elem.last_name;
table.rows[i].cells[2].innerHTML = elem.age;
table.rows[i].cells[3].innerHTML = elem.grade;
i++;
});

sum_grade();

};

function refresh_table() {
let table = document.querySelector('table');
let i = 1;
let tr = document.createElement('tr');
table.appendChild(tr);
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
students.forEach(elem => {

table.rows[i].cells[0].textContent = elem.first_name;
table.rows[i].cells[1].innerHTML = elem.last_name;
table.rows[i].cells[2].innerHTML = elem.age;
table.rows[i].cells[3].innerHTML = elem.grade;
i++;
});

sum_grade();
}


function sum_grade() {
const el = document.querySelector('table');
const resultEl = document.querySelector('#result');
let sum = 0;
Array.from(el.children).forEach((child, index) => {
if (index !== 0) {
sum += +child.lastElementChild.textContent;
}
});

resultEl.textContent = +(sum / students.length).toFixed(2);
}



return {
fill,
refresh_table
}
})();
function push_students(){
students.push({ first_name: document.getElementById('first_name').value,
last_name: document.getElementById('last_name').value,
age: document.getElementById('age').value,
grade: document.getElementById('grade').value
}, );
Student.refresh_table(students);
}

function delete_students() {
let k=document.getElementById('del').value;
let table = document.querySelector('table');
let m=k-1;
table.children[k].remove();
let tr = document.querySelector('tr');
table.rows[k].remove();
students.splice(m, 1);
Student.refresh_table(students);

}
