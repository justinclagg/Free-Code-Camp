/*
Exact Change
https://www.freecodecamp.com/challenges/exact-change

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer 
is equal to the change due. Otherwise, return change in coin and bills, sorted in highest to lowest order.

Code by Justin Clagg
https://github.com/justinclagg
*/

function checkCashRegister(price, payment, drawer) {
	// Check for valid payment
	const amountDue = payment - price;
	if (amountDue < 0) return 'Payment is Insufficient';
	if (amountDue == 0) return 'No Change Owed';

	// Get total in drawer
	const drawerTotal = getDrawerTotal(drawer);

	// Check if drawer total is sufficient
	if (drawerTotal < amountDue) return 'Insufficient Funds';
	if (drawerTotal == amountDue) return 'Closed';

	// Otherwise, return change
	return changeOwed(amountDue, drawer);
}

function getDrawerTotal(drawer) {
	var total = 0;
	drawer.forEach((array) => {
		total += array[1];
	});
	return total.toFixed(2); // Correct floating point errors
}

function changeOwed(amountDue, drawer) {
	const currencyValues = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
	var changeOwed = [];
	for (let i = drawer.length - 1; i >= 0; i--) {
		if (amountDue == 0) return changeOwed;

		let drawerSlot = drawer[i];
		let value = currencyValues[i];

		if (value > amountDue) continue;

		const possibleCurrency = Math.trunc(amountDue / value);
		const availableCurrency = drawerSlot[1] / value;
		if (availableCurrency >= possibleCurrency) {
			const valueGiven = possibleCurrency * value;
			amountDue = (amountDue - valueGiven).toFixed(2);
			changeOwed.push([drawerSlot[0], valueGiven]);
		}
		else {
			// Give all of given currency
			amountDue = (amountDue - drawerSlot[1]).toFixed(2);
			changeOwed.push([drawerSlot[0], drawerSlot[1]])
		}
	}
	if (amountDue != 0) {
		return 'Insufficient Funds'; // 
	}
	else {
		return changeOwed;
	}
}

checkCashRegister(19.50, 20.00, [
	["PENNY", 1.01], 
	["NICKEL", 2.05], 
	["DIME", 3.10], 
	["QUARTER", 4.25], 
	["ONE", 90.00], 
	["FIVE", 55.00], 
	["TEN", 20.00], 
	["TWENTY", 60.00], 
	["ONE HUNDRED", 100.00]
]);