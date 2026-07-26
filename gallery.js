document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-image");

    // ⭕ 取得対象に .developer-card img と .accordion-content img を追加
    const targetImages = document.querySelectorAll(
        ".gallery-grid img, .developer-card img, .accordion-content img"
    );

    targetImages.forEach(img => {
        img.addEventListener("click", () => {
            if (modal && modalImg) {
                modal.style.display = "flex";
                modalImg.src = img.src;
                modalImg.alt = img.alt || "拡大画像";
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    //-------------------------------------------------
    // 開発カードアコーディオン
    //-------------------------------------------------
    document.querySelectorAll(".accordion-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;

            if (content && content.style.display === "block") {
                content.style.display = "none";
                btn.innerHTML = "🌸 開発ストーリーを見る";
            } else if (content) {
                content.style.display = "block";
                btn.innerHTML = "🌸 閉じる";
            }
        });
    });

});
