// Auto-save functionality for localStorage (if needed for local testing)
document.addEventListener("input", function (e) {
	if (e.target.classList.contains("editable")) {
		// In a real application, you might want to save to a backend
		console.log("Content updated:", e.target.textContent);
	}
});

// Print functionality
function printCV() {
	window.print();
}

// Add print button when needed
document.addEventListener("keydown", function (e) {
	if (e.ctrlKey && e.key === "p") {
		e.preventDefault();
		printCV();
	}
});
