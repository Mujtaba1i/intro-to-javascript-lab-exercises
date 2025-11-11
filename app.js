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