/*
Name a form 'while'.
Use a 'while' loop. 
Each time the loop runs, it must output a line of text to the console that shows the value of 'i' in the 
format shown below at that iteration of the loop.
     This is loop iteration 1.
     This is loop iteration 2.
     etc.     
*/


let stop = prompt("How many times should this loop iterate?")
i = 0
while (i < stop) {
  i = i + 1
  console.log( `This is loop iteration ${i}`)
}