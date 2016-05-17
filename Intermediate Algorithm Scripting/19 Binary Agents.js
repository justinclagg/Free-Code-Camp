/* 
Binary Agents
https://www.freecodecamp.com/challenges/binary-agents

Return an English translated sentence of the passed binary string.
The binary string will be space separated.

Code by Justin Clagg
https://github.com/justinclagg
*/

function binaryAgent(str) {
	var textStr = "";
	// Split str into an array of binary strings, then iterate over each
	str.split(" ").forEach(function(binary) {
		// parseInt(str, 2) converts each binary string to ASCII decimal value
		textStr += String.fromCharCode(parseInt(binary, 2));
	});
	return textStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
