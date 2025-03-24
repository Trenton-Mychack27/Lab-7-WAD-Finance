document.addEventListener("DOMContentLoaded", function () {
    const amountInput = document.getElementById("Amount");
    const form = document.getElementById("incomeForm");

    amountInput.addEventListener("blur", () => {
        let val = parseFloat(amountInput.value);
        if (!isNaN(val) && val > 0) {
            amountInput.value = val.toFixed(2);
        } else {
            amountInput.value = "";
            alert("Amount must be a number greater than 0.");
                }
        });

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const sourceName = document.getElementById("ISN").value.trim();
        const amountVal = parseFloat(amountInput.value);
        const frequency = document.getElementById("Frequency").value;

        if (sourceName.length < 3) {
            alert("Source Name must be at least 3 characters long.");
            return;
        }

        if (isNaN(amountVal) || amountVal <= 0) {
            alert("Amount must be a valid number greater than 0.");
            return;
        }

        if (!["one-time", "monthly", "bi-weekly", "yearly"].includes(frequency)) {
            alert("Please select a valid frequency.");
            return;
        }

    });
});