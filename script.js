let ratingButton = document.querySelectorAll(".wrapper .buttons button");
let submit = document.querySelector("#submit");
ratingButton.forEach((item, index) => {
    item.addEventListener("click", () => {
        ratingButton.forEach((btn) => {
            btn.classList.remove("active");
        });
        item.classList.add('active');
        let selected = item.textContent;
        localStorage.setItem("selectedRating", selected);
        redirectToPage("Thankyou.html");
    });
});

function redirectToPage(Url) {
    window.location.href = Url;
}

document.addEventListener("DOMContentLoaded", function() {
    let selected = localStorage.getItem('selectedRating');
    if (selected) {
        document.getElementById("selection").textContent = `You selected ${selected} out of 5`;
    }
});