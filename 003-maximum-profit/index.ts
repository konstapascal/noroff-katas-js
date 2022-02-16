export function maximumProfit(arr) {
	let highestProfit = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			const curr = arr[i];
			const next = arr[j];

			let profit = next - curr;

			if (profit > highestProfit) {
				highestProfit = profit;
			}
		}
	}

	return highestProfit;
}
