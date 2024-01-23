/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
        const isPrime = new Array(n).fill(true);

    // 0 and 1 are not primes
    isPrime[0] = isPrime[1] = false;

    // Apply the Sieve of Eratosthenes
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Mark multiples of i as non-prime
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count the number of primes
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
    
    }