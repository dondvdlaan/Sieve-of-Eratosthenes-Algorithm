
'use strict';

// CountNonDivisible, by courtesy of Codility 

// https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/

/*
* This function returns the totals of none divisors of each element in Array A
*
* @param  A       : Array - Array of elements
* return  result  : Array - Totals of none divisors for each element 
*/
const CountNonDivisble = (A) =>{

  // Constants and variables
  let nonDivisitors = {};
  let result = [];

  // Recording of elements and their occurances
  const count = countOfElements(A);

  // Loop through all elements in Array A
  Object.keys(count).map(element => {
    
    // Find total of divisors of element in Array A
    let total = totalDivisors(element, count)

    // Substract number of Elements in Array A with total of divisors per element
    nonDivisitors[element] = A.length - total
  })
    
  // Convert object in array
  A.map(a => result.push(nonDivisitors[a]))

return result
}

// ***************** Functions ***************** 
/*
* This function records all the elements and their occurances(frequencies)
* from the input array A.
*
* @param  A     : array   - Array of elements
* return  count : object  - Object of Elements with occurances 
*/
const countOfElements = (A) => {
  let count = {};

  A.map(a => 
    {
      if (count[a] > 0) 
      {
        count[a] = count[a] + 1
      } else 
      {
        count[a] = 1
      }
    }
  )
return count;
}
/*
* This function sums how many of the other elements are a divisor of the input
* element eg element = 16, divisors are 1, 2, 4, 8, 16
*
* @param  element : element of array  - Element
* @param  count   : object            - Recordings and occurances elements of Array A
* return  total   : int               - Totals of divisors for element 
*/
const totalDivisors = (element, count) =>{

// Total of divisors in input Array A for element
let total = 0;
// Sieve starts looking for divisors as from 1
let j = 1;

// Sieve of Eratosthenes
// Check divisors up to √element for efficiency
while (j * j <= element) 
{
  // Finding divisors for current element eg 16/1
  if (element % j == 0)
  {
    // Check if element j is part of the array A
    if (count[j] > 0) 
    {
      // Add occurances of element j to total
      total += count[j];
    }

    // Start finding divisors from other end of range, > √element  eg 16/2
    let k = element / j

    // Avoid double counting eg j=k=4
    if (k != j) {

      // Check if element k is part of the array A
      if (count[k] > 0) {

        // Add occurances of element k to total
        total += count[k]
      }
    }
  }
  j++
}
return total;   
}

// *****************  Initialisation ***************** 
const init = () =>{
   const A =[3,1,2,3,6];

   console.log("Input A :", A);
   console.log("Result  :", CountNonDivisble(A));
}

init();

