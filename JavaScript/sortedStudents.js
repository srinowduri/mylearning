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
		
		console.table(students);
		
		console.log(students.age);
		const ageArray = [];
		
		students.forEach((student) => {
			ageArray.push(student.age);
		});
		
		console.log(ageArray);
		 ageArray.sort();
		 
		 console.log(ageArray);
		 
		 
		 
		 const finalAges = ageArray.map(age => {
			let std;
			students.forEach(student => {
				if(student.age === age){
					std = student;
				}
			});
			return std;
		 });
		 console.log(finalAges);
		 
		