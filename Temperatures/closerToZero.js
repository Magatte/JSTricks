/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var count = readline(); // the number of temperatures to analyse
var temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526

var sortedTemps = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
printErr(sortedTemps);

var result = sortedTemps[0] || 0;

print(result);