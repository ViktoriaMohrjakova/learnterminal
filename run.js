  function write(string){
process.stdout.write(string);
}
write("hello world\n");
//bold                                   //reset
write('\x1B[1m');write("hello world\n");write('\x1B[0m');  write('\n')
//dim/faint                             //reset
write('\x1B[2m');write("hello world\n");write('\x1B[0m');  write('\n')
//italic                                //reset
write('\x1B[3m');write("hello world\n");write('\x1B[0m');  write('\n')
//underline                             //reset
write('\x1B[4m');write("hello world\n");write('\x1B[0m');  write('\n')
//blinking                              //reset
write('\x1B[5m');write("hello world\n");write('\x1B[0m');  write('\n')
//                             //reset
write('\x1B[6m');write("hello world\n");write('\x1B[0m');  write('\n')
//inverse                               //reset
write('\x1B[7m');write("hello world\n");write('\x1B[0m');  write('\n')
//hidden invisible                      //reset
write('\x1B[8m');write("hello world\n");write('\x1B[0m');  write('\n')
//strikethrough                         //reset
write('\x1B[9m');write("hello world\n");write('\x1B[0m');  write('\n')



for(let i=30; i<40; i++){
    if(i==38) continue;
//colors
write('\x1B[1;'+i+'m'); write('color code number' + i);write('\x1B[0m');  write('\n')
}
//\x1B[2;30m
for(let i=30; i<40; i++){
    if(i==38) continue;
//colors
write('\x1B[2;'+i+'m'); write('color code number' + i);write('\x1B[0m');  write('\n')
}

//for(let i=30; i<40; i++){
// for(let j=0; j=16; j++){
//     let color= i*j;
//        //colors
//        write('\x1B[38;5;'+color+'m'); write(color);write('\x1B[0m');  write('\n')
//        }
//    }

//\x1B[1;30m
for(let i=40; i<50; i++){
    if(i==48) continue;
//background colors
write('\x1B[1;'+i+'m'); write('color code number' + i);write('\x1B[0m');  write('\n')
}

//\x1B[2;30m
for(let i=40; i<50; i++){
    if(i==48) continue;
//background colors
write('\x1B[2;'+i+'m'); write('color code number' + i);write('\x1B[0m');  write('\n')
}


console.clear();
let date = new Date().toString();
write(date);
setInterval(()=> {
    write('\x1B['+ date.length + 'D');
    date = new Date().toString();
    write(date);
},1000);



