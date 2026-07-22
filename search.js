/* ===================================================
   🌸 新UI用 AIみみみ（AI学習ナビゲント）ロジック
=================================================== */

// --------------------------------------------------
// 1. 設定 & 階層パス解決（これが最重要！）
// --------------------------------------------------
const MIMIMI_CONFIG = {
    name: "AIみみみ先生",
    greeting: "はろ〜！情報科アシスタントの**AIみみみ**だよ🌸<br>授業資料のことでも、勉強の悩みでも何でも聞いてね！<br><br>例えば...？👇",
    typingSpeed: 25,
    geminiApiKey: "" // 空欄なら疑似AIで動きます
};

// 階層ズレを自動調整するためのベースパス取得
const resolveRootPath = () => {
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
    return rootPath;
};


// --------------------------------------------------
// 2. パネル開閉制御 & 初期挨拶
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openChatBtn");
    const closeBtn = document.getElementById("closeChatBtn");
    const panel = document.getElementById("chatPanel");

    let isInitialized = false; // 初回だけ挨拶するため

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            panel.classList.add("open");
            document.getElementById("chatInput").focus();

            // 初回オープン時だけタイピング挨拶
            if (!isInitialized) {
                addTypingBubble(MIMIMI_CONFIG.greeting, true);
                isInitialized = true;
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            panel.classList.remove("open");
        });
    }
});


// --------------------------------------------------
// 3. チャット送信＆タイピング演出処理
// --------------------------------------------------
function handleKeyPress(e) {
    if (e.key === "Enter") submitSearch();
}

function sendSuggested(text) {
    document.getElementById("chatInput").value = text;
    submitSearch();
}

async function submitSearch() {
    const input = document.getElementById("chatInput");
    const query = input.value.trim();
    if (!query) return;

    // ユーザーの質問を右側に表示
    addBubble(query, "user");
    input.value = "";

    // 「考え中...」の演出
    const loadingBubble = addLoadingBubble();

    // レスポンスの取得
    let responseText = "";
    if (MIMIMI_CONFIG.geminiApiKey) {
        responseText = await fetchGeminiResponse(query);
    } else {
        responseText = generateMimimiResponse(query);
    }

    // ローディング消去して、みみみの回答をタイピング
    loadingBubble.remove();
    addTypingBubble(responseText);
}


// --------------------------------------------------
// 4. 吹き出し（アバター付き）生成ロジック
// --------------------------------------------------

// 普通の吹き出し（ユーザー用）
function addBubble(text, type) {
    const history = document.getElementById("chatHistory");
    const rootPath = resolveRootPath();

    // LINE風のコンテナ構造
    const messageContainer = document.createElement("div");
    messageContainer.className = `message-container ${type}`;

    // ユーザー以外はアバターを付ける
    if (type !== "user") {
        const avatar = document.createElement("img");
        avatar.src = `${rootPath}images/logo.png`; // みみみの画像
        avatar.className = "ai-avatar";
        messageContainer.appendChild(avatar);
    }

    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${type}`;
    bubble.innerHTML = text;
    
    messageContainer.appendChild(bubble);
    history.appendChild(messageContainer);
    history.scrollTop = history.scrollHeight;
    return messageContainer;
}

// 考え中（ローディング）の吹き出し
function addLoadingBubble() {
    return addBubble('<span class="loading-dots">...💭</span>', "ai loading");
}

// 🌸 みみみの回答タイピング＆サジェストタグ生成
function addTypingBubble(fullHtml, isGreeting = false) {
    const history = document.getElementById("chatHistory");
    const rootPath = resolveRootPath();

    const messageContainer = addBubble("", "ai");
    const bubble = messageContainer.querySelector(".chat-bubble.ai");

    // HTMLタグ（リンクなど）を考慮してタイピング演出
    // 本来は複雑だが、今回はリンク切れを防ぐため一括セットし、
    // アニメーション風に表示させる（実用性重視）
    bubble.innerHTML = fullHtml;

    // 最初の挨拶の時だけ、下にサジェストタグを追加
    if (isGreeting) {
        const suggestionsDiv = document.createElement("div");
        suggestionsDiv.className = "chat-suggestions";
        suggestionsDiv.innerHTML = `
            <span class="suggestion-tag" onclick="sendSuggested('情報Ⅰの資料🌸')">情報Ⅰの資料</span>
            <span class="suggestion-tag" onclick="sendSuggested('Pythonの演習 Python🐍')">Pythonの演習</span>
            <span class="suggestion-tag" onclick="sendSuggested('一問一答クイズ📝')">一問一答クイズ</span>
        `;
        history.appendChild(suggestionsDiv);
    }

    history.scrollTop = history.scrollHeight;
}


// --------------------------------------------------
// 5. 🌸 「AIみみみ」のカスタム回答エンジン（APIなし版）
// --------------------------------------------------
function generateMimimiResponse(input) {
    const text = input.toLowerCase();
    const rootPath = resolveRootPath();

    // --- AIみみみのペルソナ・回答パターン（語尾カスタム）---
    if (text.includes("こんにちは") || text.includes("はろー") || text.includes("みみみ")) {
        return `やっほー！呼んでくれてありがとう〜！🌸 今日は何の学習のお手伝いをしようか？何でも聞いてねっ✨`;
    } 
    else if (text.includes("情報1") || text.includes("情報i") || text.includes("1年")) {
        return `1年生の「情報Ⅰ」の資料だね！任せて〜！✨ ここのページにスライドやプリントがまとまってるよっ👇<br><br>👉 <a href="${rootPath}materials/first-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅰ（1年）授業資料ページへ</a>`;
    } 
    else if (text.includes("情報2") || text.includes("情報ii") || text.includes("2年") || text.includes("python")) {
        return `おっ、2年生の「情報Ⅱ」かな？Pythonとかデータ分析の高度なやつだね！かっこいい〜！🐍<br><br>👉 <a href="${rootPath}materials/second-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅱ（2年）授業資料ページへGo！</a>`;
    } 
    else if (text.includes("動画") || text.includes("youtube") || text.includes("授業動画")) {
        return `動画で復習したいんだね！みみみのおすすめ動画一覧はこちらだよ📺✨<br><br>👉 <a href="${rootPath}videos/index.html" style="color:#e88ca7; font-weight:bold;">授業動画一覧ページを開く</a>`;
    } 
    else if (text.includes("テスト") || text.includes("問題") || text.includes("クイズ") || text.includes("一問一答")) {
        return `テスト対策！？えらいっ！頑張る君を応援するよ〜！🔥 サクッと復習しちゃおう！<br><br>👉 <a href="${rootPath}quiz/index.html" style="color:#e88ca7; font-weight:bold;">一問一答クイズに挑戦する</a>`;
    }
    else {
        return `「${input}」についてだね！<br>みみみが案内できるページをリストアップしてみたよ〜🌸 気になるやつを押してみてね！<br><br>
        ・ <a href="${rootPath}materials/index.html" style="color:#e88ca7;">📚 授業資料トップ</a><br>
        ・ <a href="${rootPath}videos/index.html" style="color:#e88ca7;">📺 授業動画コーナー</a><br>
        ・ <a href="${rootPath}quiz/index.html" style="color:#e88ca7;">📝 一問一答クイズ</a>`;
    }
}
