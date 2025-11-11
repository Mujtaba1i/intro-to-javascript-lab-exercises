/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = charecter => {
    if (charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u' )
    {
        return true
    }
    else
    {
        return false
    }
    }

console.log('Exercise 3 Result:', isCharAVowel("a"));



/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/


const generateEmail = (name, Domain) => name+"@"+Domain


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));