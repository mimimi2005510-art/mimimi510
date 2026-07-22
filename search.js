/* ===================================================
   🌸 AIみみみ（AI学習ナビゲント）設定 & ロジック
=================================================== */

// --------------------------------------------------
// 1. 「AIみみみ」の性格・カスタマイズ設定エリア
// --------------------------------------------------
const MIMIMI_CONFIG = {
    name: "AIみみみ",
    // 挨拶メッセージ
    greeting: "こんにちわ～！情報科アシスタントの**AIみみみ**だよ🌸<br>授業資料のことでも、勉強の悩みでも何でも聞いてね！",
    
    // タイピング速度（ミリ秒 / 1文字）
    typingSpeed: 25,

    // ★ 本物のGemini APIを使う場合はここにAPIキーを入力（空欄なら疑似AIで動きます）
    geminiApiKey: "" 
};


// --------------------------------------------------
// 2. モーダル開閉制御
// --------------------------------------------------
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

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
    });
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

    // ユーザーの質問を表示
    addBubble(query, "user");
    input.value = "";

    // 「考え中...」の演出
    const loadingBubble = addBubble("みみみが考え中...💭", "ai loading");

    // レスポンスの取得（Gemini APIキーがあれば本物、なければカスタム疑似AI）
    let responseText = "";
    if (MIMIMI_CONFIG.geminiApiKey) {
        responseText = await fetchGeminiResponse(query);
    } else {
        responseText = generateMimimiResponse(query);
    }

    // ローディング消去してタイピング開始
    loadingBubble.remove();
    addTypingBubble(responseText);
}


// --------------------------------------------------
// 4. ChatGPT/Gemini風 タイピングアニメーション
// --------------------------------------------------
function addTypingBubble(fullHtml) {
    const history = document.getElementById("chatHistory");
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble ai";
    history.appendChild(bubble);

    // HTMLタグ（<a href="...">等）を壊さずにタイピング演出するための簡易描画
    let index = 0;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = fullHtml;
    const rawText = fullHtml; // タグ付きテキスト

    // 一気に全展開するか、少しずつ出すかの制御
    bubble.innerHTML = fullHtml; // リンク切れを防ぐため一括セットし、アニメーション風に見せる
    history.scrollTop = history.scrollHeight;
}

function addBubble(text, type) {
    const history = document.getElementById("chatHistory");
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${type}`;
    bubble.innerHTML = text;
    history.appendChild(bubble);
    history.scrollTop = history.scrollHeight;
    return bubble;
}


// --------------------------------------------------
// 5. 🌸 「AIみみみ」の会話・カスタム回答エンジン（APIなし版）
// --------------------------------------------------
function generateMimimiResponse(input) {
    const text = input.toLowerCase();

    // 現在のページ階層からルートパス（../ や ../../）を自動調整
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

    // --- AIみみみの口調・回答パターン（自由に追加・編集できます）---
    if (text.includes("こんにちは") || text.includes("はろー") || text.includes("みみみ")) {
        return `やっほー！呼んでくれてありがとう〜！🌸<br>今日は何の学習のお手伝いをしようか？`;
    } 
    else if (text.includes("情報1") || text.includes("情報i") || text.includes("1年")) {
        return `1年生の「情報Ⅰ」の資料だね！任せて〜！✨<br>ここからスライドやプリントが見られるよっ👇<br><br>👉 <a href="${rootPath}materials/first-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅰ（1年）授業資料ページへ行ってみる</a>`;
    } 
    else if (text.includes("情報2") || text.includes("情報ii") || text.includes("2年") || text.includes("python") || text.includes("プログラミング")) {
        return `おっ、2年生の「情報Ⅱ」かな？Pythonとかデータ分析の高度なやつだね！かっこいい〜！🐍<br><br>👉 <a href="${rootPath}materials/second-year/index.html" style="color:#e88ca7; font-weight:bold;">情報Ⅱ（2年）授業資料ページへGo！</a>`;
    } 
    else if (text.includes("動画") || text.includes("youtube") || text.includes("授業動画")) {
        return `動画で復習したいんだね！みみみのおすすめ動画一覧はこちらだよチャンネル登録してね〜📺✨<br><br>👉 <a href="${rootPath}videos/index.html" style="color:#e88ca7; font-weight:bold;">授業動画一覧ページを開く</a>`;
    } 
    else if (text.includes("テスト") || text.includes("問題") || text.includes("クイズ") || text.includes("一問一答")) {
        return `テスト対策！？えらいっ！頑張る君を応援するよ〜！🔥<br>一問一答クイズでサクッと復習しちゃおう！<br><br>👉 <a href="${rootPath}quiz/index.html" style="color:#e88ca7; font-weight:bold;">一問一答クイズに挑戦する</a>`;
    }
    else if (text.includes("補足") || text.includes("ガイド") || text.includes("手引き")) {
        return `共通のガイダンスや用語集だね！困ったときはここをチェックしておくと安心だよ📖<br><br>👉 <a href="${rootPath}materials/others/index.html" style="color:#e88ca7; font-weight:bold;">共通・補足資料ページへ</a>`;
    }
    else {
        return `う〜ん、「${input}」についてだね！<br>みみみが案内できるページをリストアップしてみたよ〜！気になるやつを押してみてね🌸<br><br>
        ・ <a href="${rootPath}materials/index.html" style="color:#e88ca7;">📚 授業資料トップ</a><br>
        ・ <a href="${rootPath}videos/index.html" style="color:#e88ca7;">📺 授業動画コーナー</a><br>
        ・ <a href="${rootPath}quiz/index.html" style="color:#e88ca7;">📝 一問一答クイズ</a>`;
    }
}


// --------------------------------------------------
// 6. 🌐 （任意）本物のGemini APIと連携する処理
// --------------------------------------------------
async function fetchGeminiResponse(userQuery) {
    const apiKey = MIMIMI_CONFIG.geminiApiKey;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    // AIみみみのペルソナ設定（System Instruction）
    const systemInstruction = `
    あなたの名前は「AIみみみ」です。高校の情報科サイトの学習ナビゲーターアシスタントです。
    性格：明るく、親しみやすく、可愛らしい高校の先生の助手。語尾には「〜だよ！」「〜かな？」「🌸」「✨」などを使います。
    ユーザーから質問されたら、みみみになりきって短く親切に回答してください。
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
        const data = await response.json();
        return data.candidates[0].content.parts[0].text.replace(/\n/g, "<br>");
    } catch (e) {
        return "ごめんなさい！ちょっと頭がウニになっちゃったみたい...💦 もう一度聞いてみてね！";
    }
}
