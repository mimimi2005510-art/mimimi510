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



//-------------------------------------------------
// 開発カードアコーディオン
//-------------------------------------------------

document.querySelectorAll(".accordion-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        const content=
            btn.nextElementSibling;

        if(content.style.display==="block"){

            content.style.display="none";

            btn.innerHTML="🌸 開発ストーリーを見る";

        }

        else{

            content.style.display="block";

            btn.innerHTML="🌸 閉じる";

        }

    });

});
