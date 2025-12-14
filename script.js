// Receipt တင်မှ Order ဖွင့်ပေး
document.querySelectorAll(".receipt").forEach(input => {
  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      input.parentElement.querySelector("button").disabled = false;
    }
  });
});
