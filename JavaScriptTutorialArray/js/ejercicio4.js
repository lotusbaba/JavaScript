/**
Create a function filterNumeric(arr) which takes an array and 
returns new array which contains only numeric values from arr.
*/

var arr = ["a", 1, "b", 2, 1.5];
function filterNumeric (arr) {
	for (i = 0; i<arr.length; i++) {
		if (isNaN(arr[i])) {
			arr.splice(i,1);
			i--;
		}
	}
}

window.addEventListener("load", function() {
	console.log("Array: "+arr);
	filterNumeric(arr);
	console.log("Array de valores numéricos: "+arr);
});
