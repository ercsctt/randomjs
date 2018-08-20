/****

Simple palindrome function, checks whether the passed argument is the same in reverse order...

https://en.wikipedia.org/wiki/Palindrome

****/


function palindrome(str) {
	// Remove unwanted chars...
	var re = /[\W_]/g;
	
	// Make the string lowercase...
	var lowRegStr = str.toLowerCase().replace(re, '');

	// Reverse the string...
	var reverseStr = lowRegStr.split('').reverse().join(''); 

	// Return a boolean depending on whether the string is a palindrome or not...
	return reverseStr === lowRegStr;
}

palindrome("racecar"); // true
palindrome("i can haz code"); // returns false...
