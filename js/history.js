function addTransactionToHistory(amount, reason) {
    const historyContainer = document.getElementById("history");
    
    const transactionDiv = document.createElement("div");
    transactionDiv.classList.add("flex", "flex-col", "justify-center", "items-start", "mx-auto", "rounded", "space-y-5", "shadow-xl", "border-2", "border-[rgba(17,17,17,0.1)]", "p-5", "text-center", "w-5/6","mb-5");
    


    const title = document.createElement("h2");
    title.classList.add("text-2xl", "font-bold");
    title.innerText = `${amount} Taka is Donated for ${reason}`;
    

    const date = document.createElement("p");
    date.classList.add("text-sm");
    date.innerText = `Date: ${new Date().toLocaleString()}`;
 
    

    transactionDiv.appendChild(title);
    transactionDiv.appendChild(date);
    historyContainer.appendChild(transactionDiv);
}