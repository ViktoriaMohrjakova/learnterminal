function write(string){
    process.stdout.write(string);
}
import chalk, { backgroundColors } from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));


for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){        
        let color = (i*j).toString()    
        write(chalk.ansi256(color)(color.padEnd(4,' '))); 
    }
    write('\n');
}





write(boxen(chalk.blue.bgGreen('Hello chalk'), {
    padding: 1,
    margin:1
}));

write(boxen(chalk.blue.bgRed.bold('Hello chalk'), {
    padding: 1,
    borderStyle: 'double',
    borderColor: 'magenta',
}));

write('\n');

write(boxen(chalk.rgb(225,225,153)('Hello chalk'), {
    padding: 1,
    borderStyle: 'arrow',
    borderColor: '#00ff19',
}));


write('\n');

write(boxen(chalk.black.bgGreenBright('Hello chalk'), {
    padding: 3,
    borderStyle: 'bold',
    borderColor: '#9370db',
    title: 'learnTerminal',
    height: 3,
}));

write('\n');

write(boxen(chalk.black.bgCyanBright('!!!'), {
    padding: 0.5,
    borderStyle: 'classic',
    borderColor: 'blue',
    height: 15,
    width:  100,
    textAlignment: 'center',
    title: 'learnTerminal',
    titleAlignment: 'center'
    
}));

write('\n');

write(boxen(chalk.black.bgRedBright('Hi!'), {
    padding: 2,
    borderStyle: {
        topLeft: '*',
        topRight: '*',
        bottomLeft: '@',
        bottomRight: '@',
        top: '|',
        bottom: '|',
        left: '-',
        right: '-'
    }
    
}));

write('\n');

write(boxen(chalk.hex('#00ffff')('___'), {
    borderStyle: 'round',
    borderColor: '#00ffff',
    height: 10,
    width:  50,
    textAlignment: 'center',
    title: 'O.O',
    titleAlignment: 'center'
    
}));
