function rowSumOddNumbers(n) {
    /* The rows' start numbers are Hogben's centered polygonal numbers:
       1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
       <https://oeis.org/A002061>
       
       The sum of one row is given by:
       s[n] = n^2 + n(b[n] - 1).
       <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
       
       Inline b[n]:
       s[n] = n^2 + n(n^2 - n + 1 - 1)
            = n^2 + n(n^2 - n)
            = n^2 + n^3 - n^2
            = n^3
       ... oh. */
    return n * n * n;
}

function rowSumOddNumbers2(num) {
    return Math.pow(num, 3);
}