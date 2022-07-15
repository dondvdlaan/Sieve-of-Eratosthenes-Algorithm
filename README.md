Sieve of Eratosthenes Algorithm

In this example, Sieve of Eratosthenes(with courtesy of Codelity https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/), we will show the efficiency of an algorithm to find the divisors of elements in a sequence in O(n log log n) time complexity.

The algoritm is based on checking divisors up to √element(eg √16) for efficiency and at the same time finding the divisors from the other and of the range(> √16 ). For example for element 16, the divisors are 1, 2, 4, 8 and 16. The algorithm checks up and till √16 to find out divisors.

You can find out more details by reading the comments in the code.

Summary:
1. Vanilla Javascript
2. Node server at localhost:4000
