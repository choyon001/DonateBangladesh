document.getElementById("donate1_submit").addEventListener("click", function(event) {
    event.preventDefault();
    const donate1_input = document.getElementById("donate1_input").value;
    if (isNaN(donate1_input)) {
        alert("Please enter a valid number.");
    }
    else if(donate1_input == "") {
        alert("Please enter a number.");
    }
    else if(donate1_input < 0) {
        alert("Please enter a positive number.");
    }
    else {
        let donate1_current_bal = document.getElementById("donate1_current_bal").innerText;

        let donate1_input = document.getElementById("donate1_input").value;

        let main_bal = document.getElementById("main_bal").innerText;
        const donate1_total = parseFloat(donate1_current_bal) + parseFloat(donate1_input);
        document.getElementById("donate1_current_bal").innerText = donate1_total;

        const main_total = parseFloat(main_bal) - parseFloat(donate1_input);
        document.getElementById("main_bal").innerText = main_total;

        

        console.log("Donation amount: " + donate1_current_bal);
    }
});