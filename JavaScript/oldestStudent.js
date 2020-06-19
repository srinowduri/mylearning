const students = [
			{
				firstName: 'Seshu',
				lastName: 'Ravipudi',
				age: 20
			},
			{
				firstName: 'Bharathi',
				lastName: 'Adhikarala',
				age: 18
			},
			{
				firstName: 'Nandana',
				lastName: 'Kusumuri',
				age:17
			},
			{
				firstName: 'Ravi',
				lastName: 'rallapudi',
				age: 19
			},
			{
				firstName: 'Sravani',
				lastName: 'Kanchubhatla',
				age: 16
			}
		];
		
	/* Output: older student 
		{	firstName: 'Seshu',
			lastName: 'Ravipudi',
			age: 20
		}*/
		
		const ageArray = [];
		
		students.forEach(student =>{
			ageArray.push(student.age);
		});
	
		ageArray.sort();
		console.log(ageArray[ageArray.length-1]);
		
		const oldest = students.reduce((acc,student) => {
			if((ageArray[ageArray.length-1]) === student.age){
				acc = student;
			}
			return acc;
		}, {});
		console.log(oldest);