/* 
Inventory Update
https://www.freecodecamp.com/challenges/inventory-update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, 
add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

Code by Justin Clagg
https://github.com/justinclagg
*/

function updateInventory(oldInv, newInv) {
	const hash = hash2DArray(oldInv);
	for (let i = 0; i < newInv.length; i++) {
		const product = newInv[i][1];
		const inventory = newInv[i][0];
		if (hash[product]) {
			// Add to inventory count of existing products
			hash[product] += inventory;
		}
		else {
			// Add new product
			hash[product] = inventory;
		}
	}
	// Created alphabetically sorted array of keys from hash
	const updatedInv = [];
	const sortedProducts = Object.keys(hash).sort();
	for (let i = 0; i < sortedProducts.length; i++) {
		const product = sortedProducts[i];
		const inventory = hash[product];
		updatedInv.push([inventory, product]);
	}
	return updatedInv;
}

function hash2DArray(arr) {
	const hash = {};
	for (let i = 0; i < arr.length; i++) {
		hash[arr[i][1]] = arr[i][0];		
	}
	return hash;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);