function isPalindrome(str) {
  // Write your algorithm here
  if (str === str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('radar'));

/* 
  Add your pseudocode here

  declare a function called isPalindrome
  takes one parameter: word (a string)to lowercase()
    if string is a palindrome
        return true
    else 
        return false
*/

/*
  Add written explanation of your solution here

1. declared a function and named it isPalindrome
2. used ifelse statement to test if the passed argument is a string palindrome
3. in the condition used is to test if the argument is strictly a string and a palindrome using strict equal assignment
4. if yes, then split the string into an array of characters using split('') method
5. reversed the order of elements in this array by calling reverse() on it
6. joined the elements of the array back together without any spaces using join('') method
7. compared this new string with the original string
8. if they are identical, returned true because the string is a palindrome
9. otherwise returned false because the string is not a palindrome
10. lastly console log the function passing in the argument
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('racecar'));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', isPalindrome('robot'));
}

module.exports = isPalindrome;
