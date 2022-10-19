// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

const x = 36528;
const isPlaindrome = (x) => {
    let reversedX = Number(x.toString().split('').reverse().join(''));
    return reversedX == x
}

console.log(isPlaindrome(x))
