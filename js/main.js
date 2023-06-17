// 1. Store you first name, last name, age, country, and city in your browser localStorage.
localStorage.clear();
console.log(localStorage);
localStorage.setItem('FirstName','Alfonso');
localStorage.setItem('LastName','Cortés');
localStorage.setItem('Age', 53);
localStorage.setItem('Country', 'Spain');
localStorage.setItem('City', 'Benidorm');
console.log("1- My data have been stored in my browser´s localStorage: ");
console.log(localStorage);

/* 2. Create a student object. The student object must have firstName, lastName, age, and skills. 
Assign appropriate values to each property. The property skills must be a set of skills. 
Store the student object in your browser localStorage.*/

console.log("2 - Next, we create a student object");

const student= {
		firstName: 'Juan',
		lastName: 'Lloret',
		age: 20,
		skills: ['HTML','CSS'],
	};

const student_JSONied= JSON.stringify(student, undefined, 4);
console.log("And we proceed to put it in localStorage.");
localStorage.setItem('studentStored', student_JSONied); //localStorage.setItem('student', student);	// no funciona -> hay que hacer STRINGIFY


// 3. Retrieve the previous student object. Then, show every one of its attributes, and also the skills, in different lines.

console.log("3 - Next, we retrieve the object from localStorage:");
const studentRetrieved=JSON.parse(localStorage.getItem('studentStored'));
console.log(studentRetrieved);

console.log("Attributes for student retrieved from localStorage showed in different lines:");
for (attr in studentRetrieved){
	if (attr!='skills'){
		console.log(attr +": "+studentRetrieved[attr]);  //	console.log(attr +": "+studentRetrieved    .attr    ) NO FUNCIONA.
	} else {
		for (sk in studentRetrieved.skills){
			console.log("Skill "+(parseInt(sk)+1)+" :"+studentRetrieved.skills[sk]);
		/* otra forma para este bucle puede ser, por ejemplo:	
		for (sk=0; sk<studentRetrieved.skills.length; sk++){
			console.log("Skill "+(sk+1)+" :"+studentRetrieved.skills[sk]);
		*/
		}
	}
}
