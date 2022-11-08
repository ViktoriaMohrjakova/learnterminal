import inquirer from 'inquirer'

inquirer
  .prompt([
    {type:'input', name: 'age', message: 'How old are you?'},

    {type:'list', name: 'preferences', choices: ["yellow", "black", "white", "purple", "green", "red", "blue" ],
     message: 'What is your favourite color?'},

    {type:'number', name: 'many', message: 'How many fingers do you have?'},

    {type:'confirm', name: 'look', message: 'Am i good looking?'},

    {type:'rawlist', name: 'pupil', message: 'Where do you study?', choices:[
        "at University", "in School", "in College", "Working"
    ]},

    {type:'expand', name: 'Wish', message: 'What do you want to do right now?', choices:[ 
    {
        key: 'g',
        value: 'Go home'
    },
    {
        key: 's',
        value: 'Study a bit more'
    },
    {
        key: 'e',
        value: 'Eat'
    },
    {
        key: 's',
        value: 'Sleep'
    }
    
        ] 
    },


  ])
  .then((answers) => {
    console.log(`I am ${answers.age} years old`);
    console.log(`My favorite color is ${answers.preferences} `);
    console.log(`I have ${answers.many} fingers`);
    console.log(`${answers.look}`);
    console.log(`I am ${answers.pupil}`);
    console.log(`I want to ${answers.Wish}`);


  });

