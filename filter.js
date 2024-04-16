  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
    //iterate through  array and  create a new array of only those  at least 21
     //call the filter method on the people 
     //array and pass it a callback function
     //use an arrow function that takes the person as a parameter
     //and returns person.age >=21
const oldEnough = people.filter(person => person.age >=21);
     //store result in a variable called oldEnough
     //log to the console
console.log(oldEnough); 
  //returns [ { name: 'Michael', age: 23} ]

     //find objects in an array of objects that contain a specific property
     // eg just pluck out Paul form the array of people
  /**
   * create new constant (paul)
   * set it to equal people.filter(person => person.name === 'Paul')
   */
  const paul = people.filter(person => person.name === 'Paul');
  console.log(paul); //returns array of Paul's info

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];
   //goal- to create a list of interview 
   //candidates by filtering out students who don't
   //have at least 5 years experience in at least
   //one of the skills

     //filter the students array
     //pass an arrow func taking the student as parameter
     //curly braces to contain logic
     //filter inner skills array to those with at least 5yrs experience
     //call those strongSkills
     //for each skill, check if skill.yrsExperience is greater than or equal to 5
const candidates = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsexperience >= 5);
  return strongSkills.length > 0;
});
console.log(candidates); //returns micheal and paul
//above code very complex

    //better idea
    /**
     * extract whole filter function into
     * its own function
     */
const hasStrongSkills2 = student => {
  let strongSkills2 = student.skills.filter(skill => skill.yrsexperience >= 5);
  return strongSkills.length > 0;
};
const candidates2 = students.filter(hasStrongSkills);
//just taken what was inside the parenteses and assigned a variable
//this isolates the callback and makes it easier to read
console.log(candidates2);

//better idea
    /**
     *could even extract inner filter
     *to another external function
     called has5YearsExperience
     */
const has5YearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills3 = student => student.skills.filter(has5YearsExp).length > 0;
const candidates3 = students.filter(hasStrongSkills3);
console.log(candidates3);
     
