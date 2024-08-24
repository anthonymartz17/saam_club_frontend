export function formatDate(dateString) {
	const date = new Date(dateString);
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString(undefined, options);
}
export function timeAgo(dateString) {
	const now = new Date();
	const pastDate = new Date(dateString);
	const seconds = Math.floor((now - pastDate) / 1000);

	const intervals = [
		{ label: "year", seconds: 31536000 },
		{ label: "month", seconds: 2592000 },
		{ label: "day", seconds: 86400 },
		{ label: "hour", seconds: 3600 },
		{ label: "minute", seconds: 60 },
		{ label: "second", seconds: 1 },
	];

	for (const interval of intervals) {
		const count = Math.floor(seconds / interval.seconds);
		if (count > 0) {
			return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
		}
	}

	return "just now";
}


export function capitalizeWord(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}