export function boomerangCount(arr: number[]) {
	let count = 0;

	for (let i = 0; i < arr.length - 2; i++) {
		const curr = arr[i];
		const next = arr[i + 1];
		const nextNext = arr[i + 2];

		if (curr !== next && curr === nextNext) count++;
	}

	return count;
}
