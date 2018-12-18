function binary_search(list, item) {
	let result = null;
	let low = 0, high = list.length - 1;
	
	while (low <= high) {
    let mid = Math.round((low + high) / 2);

	  if (list[mid] === item) {
			result = mid;
		  break;
		}

		if (item < list[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	
	return result;
}

module.exports = binary_search;
