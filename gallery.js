document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-image");

    document.querySelectorAll(".gallery-grid img").forEach(img => {

        img.addEventListener("click", () => {

            modal.style.display = "flex";
            modalImg.src = img.src;
            modalImg.alt = img.alt;

        });

    });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

    modal.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.style.display = "none";

        }

    });

});
