function showById(id) {
    document.getElementById("donate").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}

document.getElementById("donationBtn").addEventListener("click", function () {
    this.classList.add("bg-primary-color");
    this.classList.remove("bg-white");

    document.getElementById("historyBtn").classList.remove("bg-primary-color");
    document.getElementById("historyBtn").classList.add("bg-white");

    showById("donate");
});

document.getElementById("historyBtn").addEventListener("click", function () {

    this.classList.add("bg-primary-color");
    this.classList.remove("bg-white");

      document.getElementById("donationBtn").classList.remove("bg-primary-color");
    document.getElementById("donationBtn").classList.add("bg-white");

    showById("history");
});
