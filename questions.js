import inquirer from 'inquirer'

const requireLetterAndNumber = (value) => {
    if (/\w/.test(value) && /\d/.test(value)) {
      return true;
    }
    return 'Password need to have at least a letter and a number';
  };
  

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
        value: 'Go home',
    },
    {
        key: 'm',
        value: 'Study a bit more',
    },
    {
        key: 'e',
        value: 'Eat',
    },
    {
        key: 's',
        value: 'Sleep',
    },
    
        ] 
    },

    {type:'password', name: 'pass', message: 'Enter a password', 
            mask:'*', validate: requireLetterAndNumber, waitUserInput: true, },
        
        {type:'editor', name: 'secret', message: 'Tell me your secret',  validate(secret) {
            if (!secret){
                return 'Plese tell me your secret';
            }
            return true;
        },

        waitUserInput: true,
       
     },

    {type:'checkbox', name: 'menu', message: 'Choose your menu', choices:[
        new inquirer.Separator(' = Main = '),
        {
            name: 'Chiken noodle soup',
        },
        {
            name: 'Fried potatoes',
        },
        {
            name: 'Chiken nugets',
        },
        {
            name: 'Beef steak',
        },

        new inquirer.Separator(' = Side dish = '),
        {
            name: 'Greek salad',
        },
        {
            name: 'Corn dog',
        },
        {
            name: 'Meat gravy',
        },

        new inquirer.Separator(' = Desert = '),
        {
            name: 'Ice cream cake',
        },
        {
            name: 'Teramisu',
        },
        {
            name: 'Creme brulee',
        },

        

        
    ]},

  ])
  .then((answers) => {
    console.log(`I am ${answers.age} years old`);
    console.log(`My favorite color is ${answers.preferences} `);
    console.log(`I have ${answers.many} fingers`);
    console.log(`${answers.look}`);
    console.log(`I am ${answers.pupil}`);
    console.log(`I want to ${answers.Wish}`);
    console.log(`Password: ${answers.pass}`);
    console.log(`My secret: ${answers.secret}`); 
    console.log(`My menu: ${answers.menu}`);
    
    


  });

