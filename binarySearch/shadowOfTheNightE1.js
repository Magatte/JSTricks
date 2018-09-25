/**
* Auto-generated code below aims at helping you parse
* the standard input according to the problem statement.
**/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);

// game loop
while (true) {
   var bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
   
   switch (bombDir) {
       case "R":
           X0++;
           break;
       case "L":
           X0--;
           break;
       case "U":
           Y0--;
           break;
       case "D":
           Y0++;
           break;
       case "UR":
           X0++;
           Y0--;
           break;
       case "DR":
           X0++;
           Y0++;
           break;
       case "UL":
           X0--;
           Y0--;
           break;
       case "DL":
           X0--;
           Y0++;
           break;
       default:
           break;
   }
   // Write an action using print()
   // To debug: printErr('Debug messages...');


   // the location of the next window Batman should jump to.
   print(X0.toString() + ' ' + Y0.toString());
}