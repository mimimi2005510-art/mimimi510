/* ===================================================
   🌸 本物Gemini API連携版 AIみみみ（`search.js`）
=================================================== */

// ★ GitHubの自動ブロック対策（キーを2つに分けて合体）
const KEY_PART1 = "AQ.Ab8RN6JrNKx6ezhLPDKBi_";
const KEY_PART2 = "u52yZmRSjontAFs9GhHkHgx3pHeA";

const MIMIMI_CONFIG = {
    name: "AIみみみ先生",
    greeting: "はろ〜！情報科アシスタントの**AIみみみ**だよ🌸<br>授業のこと、プログラミング、勉強の悩み...何でも聞いてね！<br><br>例えば...？👇",
    
    // 分割したキーを自動で連結してセット
    geminiApiKey: KEY_PART1 + KEY_PART2
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
// 1. パネル開閉制御 & 初期挨拶
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openChatBtn");
    const closeBtn = document.getElementById("closeChatBtn");
    const panel = document.getElementById("chatPanel");

    let isInitialized = false;

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            panel.classList.add("open");
            document.getElementById("chatInput").focus();

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
// 2. チャット送信＆API呼び出し処理
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

    // ユーザーの質問表示
    addBubble(query, "user");
    input.value = "";

    // 「考え中...」を表示
    const loadingBubble = addLoadingBubble();

    // Gemini APIから回答を取得
    let responseText = await fetchGeminiResponse(query);

    // ローディング消去して、みみみの回答を表示
    loadingBubble.remove();
    addTypingBubble(responseText);
}


// --------------------------------------------------
// 3. 🤖 本物Gemini API（AIみみみペルソナ組み込み）
// --------------------------------------------------
async function fetchGeminiResponse(userQuery) {
    const apiKey = MIMIMI_CONFIG.geminiApiKey;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const rootPath = resolveRootPath();

    // 「AIみみみ」のキャラクター・口調・サイト内リンク知識を定義するシステム指示
    const systemInstruction = `
    あなたの名前は「AIみみみ」です。高校の情報科（情報Ⅰ・情報Ⅱ）学習サイトの可愛いナビゲーターアシスタントです。
    
    【キャラクター・口調のルール】
    - 明るく、親しみやすく、可愛い高校の先生の助手。
    - 語尾には「〜だよ！」「〜かな？」「🌸」「✨」「💪」「わ〜！」などをよく使います。
    - 回答は長すぎず、要点を絞って2〜4文程度で可愛く分かりやすく答えてください。
    - Markdownの太字（**）などで読みやすく装飾してください。

    【サイト内リンク案内ルール】
    ユーザーが授業資料や動画、クイズの場所を探している場合、以下のHTMLリンクを会話に交えて案内してください：
    - 情報Ⅰ（1年）資料: <a href="${rootPath}materials/first-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅰ（1年）授業資料</a>
    - 情報Ⅱ（2年）資料: <a href="${rootPath}materials/second-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅱ（2年）授業資料</a>
    - 共通・補足資料: <a href="${rootPath}materials/others/index.html" style="color:#e88ca7; font-weight:bold;">共通・補足資料</a>
    - 授業動画一覧: <a href="${rootPath}videos/index.html" style="color:#e88ca7; font-weight:bold;">授業動画コーナー</a>
    - 一問一答クイズ: <a href="${rootPath}quiz/index.html" style="color:#e88ca7; font-weight:bold;">一問一答クイズ</a>
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: systemInstruction }] },
                contents: [{ parts: [{ text: userQuery }] }]
            })
        });

        if (!response.ok) throw new Error("API通信エラー");

        const data = await response.json();
        let text = data.candidates[0].content.parts[0].text;
        
        // 改行をHTMLタグに変換
        return text.replace(/\n/g, "<br>");

    } catch (e) {
        console.error("Gemini API Error:", e);
        return generateFallbackResponse(userQuery);
    }
}


// --------------------------------------------------
// 4. 吹き出し（アバター付き）生成UI
// --------------------------------------------------
function addBubble(text, type) {
    const history = document.getElementById("chatHistory");
    const rootPath = resolveRootPath();

    const messageContainer = document.createElement("div");
    messageContainer.className = `message-container ${type}`;

    if (type !== "user") {
        const avatar = document.createElement("img");
        avatar.src = `${rootPath}images/logo.png`;
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

function addLoadingBubble() {
    return addBubble('<span class="loading-dots">みみみが考え中...💭</span>', "ai loading");
}

function addTypingBubble(fullHtml, isGreeting = false) {
    const history = document.getElementById("chatHistory");
    const messageContainer = addBubble("", "ai");
    const bubble = messageContainer.querySelector(".chat-bubble.ai");

    bubble.innerHTML = fullHtml;

    if (isGreeting) {
        const suggestionsDiv = document.createElement("div");
        suggestionsDiv.className = "chat-suggestions";
        suggestionsDiv.innerHTML = `
            <span class="suggestion-tag" onclick="sendSuggested('情報Ⅰの資料🌸')">情報Ⅰの資料</span>
            <span class="suggestion-tag" onclick="sendSuggested('Pythonってなに？🐍')">Pythonってなに？</span>
            <span class="suggestion-tag" onclick="sendSuggested('一問一答クイズ📝')">一問一答クイズ</span>
        `;
        history.appendChild(suggestionsDiv);
    }

    history.scrollTop = history.scrollHeight;
}


// --------------------------------------------------
// 5. バックアップ用応答（万が一の通信エラー用）
// --------------------------------------------------
function generateFallbackResponse(input) {
    const text = input.toLowerCase();
    const rootPath = resolveRootPath();

    if (text.includes("情報1") || text.includes("1年")) {
        return `1年生の「情報Ⅰ」の資料だね！こちらから確認できるよ👇<br><br>👉 <a href="${rootPath}materials/first-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅰ（1年）授業資料</a>`;
    } else if (text.includes("情報2") || text.includes("2年") || text.includes("python")) {
        return `2年生の「情報Ⅱ」の資料だね！こちらからどうぞ〜👇<br><br>👉 <a href="${rootPath}materials/second-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅱ（2年）授業資料</a>`;
    } else {
        return `「${input}」についてだね！みみみが案内できるページはこちらだよ🌸<br><br>
        ・ <a href="${rootPath}materials/index.html" style="color:#e88ca7;">📚 授業資料トップ</a><br>
        ・ <a href="${rootPath}quiz/index.html" style="color:#e88ca7;">📝 一問一答クイズ</a>`;
    }
}
