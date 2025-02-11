function donate(donateSubmit, donateInput, donateCurrentBal, mainBal) {
    document.getElementById(donateSubmit).addEventListener("click", function(event) {
        event.preventDefault();
        
        const donateInputValue = document.getElementById(donateInput).value;
        if (isNaN(donateInputValue) || donateInputValue === "") {
            alert("Please enter a valid number.");
            return;
        }
        
        const donateAmount = parseFloat(donateInputValue);
        if (donateAmount < 0) {
            alert("Please enter a positive number.");
            return;
        }
        
        let donateCurrentBalValue = parseFloat(document.getElementById(donateCurrentBal).innerText);
        let mainBalValue = parseFloat(document.getElementById(mainBal).innerText);
        
        const newDonateTotal = donateCurrentBalValue + donateAmount;
        const newMainTotal = mainBalValue - donateAmount;
        
        document.getElementById(donateCurrentBal).innerText = newDonateTotal;
        document.getElementById(mainBal).innerText = newMainTotal;
        
        console.log("Donation amount: " + donateAmount);

        document.getElementById("my_modal_1").showModal();
    });
}


donate("donate1_submit", "donate1_input", "donate1_current_bal", "main_bal");
donate("donate2_submit", "donate2_input", "donate2_current_bal", "main_bal");
donate("donate3_submit", "donate3_input", "donate3_current_bal", "main_bal");

// modal close

document.getElementById("my_modal_1").addEventListener("click", function() {
    document.getElementById("my_modal_1").close();
});