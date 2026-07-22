// --- 1. モーダルの開閉処理 ---
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openSearch");
    const closeBtn = document.getElementById("closeSearch");
    const modal = document.getElementById("searchModal");

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            modal.classList.add("open");
            document.getElementById("chatInput").focus();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("open");
        });
    }

    // 背景クリックで閉じる
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
        }
    });
});

// --- 2. 会話＆検索ロジック ---
function handleKeyPress(e) {
    if (e.key === "Enter") {
        submitSearch();
    }
}

function sendSuggested(text) {
    document.getElementById("chatInput").value = text;
    submitSearch();
}

function submitSearch() {
    const input = document.getElementById("chatInput");
    const query = input.value.trim();
    if (!query) return;

    // ユーザーの吹き出しを追加
    addBubble(query, "user");
    input.value = "";

    // AIの返答をシミュレート（タイピング風の遅延）
    setTimeout(() => {
        const response = generateAIResponse(query);
        addBubble(response, "ai");
    }, 500);
}

function addBubble(text, type) {
    const history = document.getElementById("chatHistory");
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${type}`;
    bubble.innerHTML = text;
    history.appendChild(bubble);
    history.scrollTop = history.scrollHeight;
}

// --- 3. 疑似AI応答エンジン（キーワード・意図解析） ---
function generateAIResponse(input) {
    const text = input.toLowerCase();

    // 階層ズレを自動調整するためのベースパス取得
    const depth = (window.location.pathname.match(/\//g) || []).length;
    // 簡易的なパス解決（現在の階層に応じて調整）
    let rootPath = "";
    if (window.location.pathname.includes("/materials/first-year/") || 
        window.location.pathname.includes("/materials/second-year/") || 
        window.location.pathname.includes("/materials/others/")) {
        rootPath = "../../";
    } else if (window.location.pathname.includes("/materials/") || 
               window.location.pathname.includes("/videos/") || 
               window.location.pathname.includes("/quiz/")) {
        rootPath = "../";
    }

    if (text.includes("情報1") || text.includes("情報i") || text.includes("1年") || text.includes("単元1")) {
        return `1年生向けの「情報Ⅰ」ですね！<br>以下のページに授業スライドやPDF資料がまとまっていますよ✨<br><br>👉 <a href="${rootPath}materials/first-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅰ（1年）授業資料ページへ</a>`;
    } 
    else if (text.includes("情報2") || text.includes("情報ii") || text.includes("2年") || text.includes("python") || text.includes("データ")) {
        return `2年生向けの「情報Ⅱ」やプログラミング・データ分析の資料ですね！<br>こちらから確認できます👇<br><br>👉 <a href="${rootPath}materials/second-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅱ（2年）授業資料ページへ</a>`;
    } 
    else if (text.includes("動画") || text.includes("youtube") || text.includes("解説")) {
        return `授業動画をお探しですね！<br>YouTubeで公開中の動画一覧ページはこちらです📺<br><br>👉 <a href="${rootPath}videos/index.html" style="color:#e88ca7; font-weight:bold;">授業動画一覧ページへ</a>`;
    } 
    else if (text.includes("テスト") || text.includes("問題") || text.includes("クイズ") || text.includes("一問一答")) {
        return `復習やテスト対策には「一問一答」がおすすめです！隙間時間にチャレンジしてみてね💪<br><br>👉 <a href="${rootPath}quiz/index.html" style="color:#e88ca7; font-weight:bold;">一問一答ページへ</a>`;
    }
    else if (text.includes("補足") || text.includes("手引き") || text.includes("ガイド")) {
        return `共通・補足資料のページにご案内します！学習の手引きや用語集がありますよ📖<br><br>👉 <a href="${rootPath}materials/others/index.html" style="color:#e88ca7; font-weight:bold;">共通・補足資料ページへ</a>`;
    }
    else {
        return `「${input}」についての質問ですね！<br>お探しの内容に合わせて、以下のリンクから各ページを探してみてください🌸<br><br>
        • <a href="${rootPath}materials/index.html" style="color:#e88ca7;">授業資料トップ</a><br>
        • <a href="${rootPath}videos/index.html" style="color:#e88ca7;">授業動画コーナー</a><br>
        • <a href="${rootPath}quiz/index.html" style="color:#e88ca7;">一問一答クイズ</a>`;
    }
}
