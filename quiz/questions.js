const quizQuestions = [
  {
    "id": "Q01-0001",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★",
    "question": "著作権法で保護されるものはどれか。",
    "options": [
      "アイデア",
      "表現",
      "事実",
      "数値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0002",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★★",
    "question": "他人の著作物を自分の著作物に「引用」する際の条件として不適切なものはどれか。",
    "options": [
      "引用部分と自分の部分が区別できること",
      "自分の部分が主で引用部分が従であること",
      "引用の目的が正当であること",
      "出所（出典）の明記は任意であること"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0003",
    "unit": "情報社会",
    "field": "肖像権",
    "difficulty": "★",
    "question": "自分の容姿を無断で撮影されたり、公表されたりしない権利を何というか。",
    "options": [
      "著作権",
      "肖像権",
      "知的所有権",
      "商標権"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0004",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★",
    "question": "個人情報保護法において「個人情報」に該当しないものはどれか。",
    "options": [
      "個人の氏名",
      "生年月日と氏名の組み合わせ",
      "完全に匿名化され復元不可能なデータ",
      "個人が識別できる防犯カメラの映像"
    ],
    "answer": 3,
    "correctCount": 2,
    "totalCount": 4,
    "explanation": ""
  },
  {
    "id": "Q01-0005",
    "unit": "情報社会",
    "field": "個人情報保護法",
    "difficulty": "★★",
    "question": "個人情報保護法に関する記述として正しいものはどれか。",
    "options": [
      "国や自治体だけに適用される",
      "営利・非営利を問わず、個人情報を取り扱うすべての事業者に適用される",
      "5000人分以上の個人情報を持つ事業者のみに適用される",
      "電子データ化された個人情報のみが対象である"
    ],
    "answer": 2,
    "correctCount": 2,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0006",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★",
    "question": "知的財産権のうち、特許権や著作権などのように、人間の知的創作活動によって生み出された成果に対する権利を総称して何というか。",
    "options": [
      "産業財産権",
      "著作権",
      "知的創作物権利",
      "知的財産権"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0007",
    "unit": "情報社会",
    "field": "産業財産権",
    "difficulty": "★★",
    "question": "発明を保護し、技術の発展を図るための権利はどれか。",
    "options": [
      "商標権",
      "意匠権",
      "実用新案権",
      "特許権"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0008",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★",
    "question": "インターネット上で一度拡散した情報や画像が完全に消去できなくなる現象を例えた言葉はどれか。",
    "options": [
      "デジタルタトゥー",
      "インターネットフットプリント",
      "サイバーログ",
      "ネットアンカー"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0009",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★",
    "question": "メディアから発信される情報を鵜呑みにせず、客観的に分析・評価し、主体的に活用する能力を何というか。",
    "options": [
      "情報リテラシー",
      "メディアリテラシー",
      "ネットリテラシー",
      "デジタルリテラシー"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0010",
    "unit": "情報社会",
    "field": "プライバシーの権利",
    "difficulty": "★",
    "question": "私生活上の事柄をみだりに公開されない権利を何というか。",
    "options": [
      "肖像権",
      "プライバシーの権利",
      "自己決定権",
      "パブリシティ権"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0011",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★",
    "question": "クリエイティブ・コモンズ・ライセンス（CCライセンス）において、「BY」が表す条件はどれか。",
    "options": [
      "非営利",
      "改変禁止",
      "表示（原作者のクレジット）",
      "継承"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0012",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "金融機関などを装った偽の電子メールを送り、偽のWebサイトに誘導して暗証番号などを盗み出す行為を何というか。",
    "options": [
      "フィッシング",
      "スニフィング",
      "スプーフィング",
      "ブルートフォース"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0013",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "人間の心理的な隙やミスに付け込んで、パスワードなどの機密情報を入手する手法を何というか。",
    "options": [
      "技術的攻撃",
      "ソーシャルエンジニアリング",
      "マルウェア攻撃",
      "クラッキング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0014",
    "unit": "情報社会",
    "field": "法律",
    "difficulty": "★★",
    "question": "他人のIDやパスワードを無断で使用して、ネットワークを通じてアクセス制限されたコンピュータにログインする行為を禁止する法律はどれか。",
    "options": [
      "個人情報保護法",
      "不現アクセス禁止法",
      "プロバイダ責任制限法",
      "サイバーセキュリティ基本法"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0015",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★",
    "question": "他人の著作物を、インターネットを通じて不特定多数の人に送信できるようにする権利を何というか。",
    "options": [
      "公衆送信権",
      "複製権",
      "譲渡権",
      "頒布権"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0016",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "インターネットやパソコンなどの情報通信技術を利用できる人と利用できない人の間に生じる、経済的・社会的な格差を何というか。",
    "options": [
      "情報格差（デジタルデバイド）",
      "メディアデバイド",
      "テクノロジーギャップ",
      "スキルギャップ"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0017",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★",
    "question": "著作権の保護期間について、日本において原則として著作者の死後何年までと定められているか。",
    "options": [
      "30年",
      "50年",
      "70年",
      "100年"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0018",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★",
    "question": "クリエイティブ・コモンズ・ライセンスの「NC」が表す条件はどれか。",
    "options": [
      "改変禁止",
      "非営利",
      "営利目的可",
      "共有禁止"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0019",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "コンピュータウイルスなどの悪意のあるソフトウェアの総称を何というか。",
    "options": [
      "スパイウェア",
      "ランサムウェア",
      "マルウェア",
      "アドウェア"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0020",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★",
    "question": "個人情報の特定の部分を削除したり別の文字列に置き換えたりして、特定の個人を識別できないように加工した情報を何というか。",
    "options": [
      "匿名加工情報",
      "仮名加工情報",
      "暗号化情報",
      "統計情報"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0021",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★",
    "question": "著作権法で保護される対象として、最も適切なものはどれか。",
    "options": [
      "アイデア",
      "表現",
      "事実",
      "数値"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0022",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★★",
    "question": "他人の著作物を自分の著作物に「引用」する際の条件として「不適切」なものはどれか。",
    "options": [
      "引用部分と自分の部分が明確に区別できること",
      "自分の部分が主で引用部分が従であること",
      "引用を行う目的が正当であること",
      "出所（出典）の明記は任意であること"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0023",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★",
    "question": "他人の著作物を、インターネットを通じて不特定多数の人に送信できるようにする権利を何というか。",
    "options": [
      "公衆送信権",
      "複製権",
      "譲渡権",
      "頒布権"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0024",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★★",
    "question": "著作権の保護期間について、日本において原則として著作者の死後何年までと定められているか。",
    "options": [
      "30年",
      "50年",
      "70年",
      "100年"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0025",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★",
    "question": "特許権や著作権などのように、人間の知的創作活動によって生み出された成果に対する権利を総称して何というか。",
    "options": [
      "産業財産権",
      "著作権",
      "知的創作物権利",
      "知的財産権"
    ],
    "answer": 4,
    "correctCount": 1,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0026",
    "unit": "情報社会",
    "field": "産業財産権",
    "difficulty": "★★",
    "question": "発明を保護し、技術の発展を図るための権利はどれか。",
    "options": [
      "商標権",
      "意匠権",
      "実用新案権",
      "特許権"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0027",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★",
    "question": "クリエイティブ・コモンズ・ライセンス（CCライセンス）において、「BY」が表す条件はどれか。",
    "options": [
      "非営利",
      "改変禁止",
      "表示（原作者のクレジット）",
      "継承"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0028",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★",
    "question": "クリエイティブ・コモンズ・ライセンス（CCライセンス）において、「NC」が表す条件はどれか。",
    "options": [
      "改変禁止",
      "非営利",
      "営利目的可",
      "共有禁止"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0029",
    "unit": "情報社会",
    "field": "肖像権",
    "difficulty": "★",
    "question": "自分の容姿を無断で撮影されたり、公表されたりしない権利を何というか。",
    "options": [
      "著作権",
      "肖像権",
      "知的所有権",
      "商標権"
    ],
    "answer": 2,
    "correctCount": 2,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0030",
    "unit": "情報社会",
    "field": "プライバシーの権利",
    "difficulty": "★",
    "question": "私生活上の事柄をみだりに公開されない権利を何というか。",
    "options": [
      "肖像権",
      "プライバシーの権利",
      "自己決定権",
      "パブリシティ権"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0031",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★",
    "question": "個人情報保護法において「個人情報」に該当しないものはどれか。",
    "options": [
      "個人の氏名",
      "生年月日と氏名の組み合わせ",
      "完全に匿名化され復元不可能なデータ",
      "個人が識別できる防犯カメラの映像"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0032",
    "unit": "情報社会",
    "field": "個人情報保護法",
    "difficulty": "★★",
    "question": "個人情報保護法に関する記述として、最も正しいものはどれか。",
    "options": [
      "国や自治体だけに適用される",
      "営利・非営利を問わず個人情報を取り扱うすべての事業者に適用される",
      "5000人分以上の個人情報を持つ事業者のみに適用される",
      "電子データ化された個人情報のみが対象である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0033",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★",
    "question": "個人情報の特定の部分を削除したり別の文字列に置き換えたりして、特定の個人を識別できないように加工した情報を何というか。",
    "options": [
      "匿名加工情報",
      "仮名加工情報",
      "暗号化情報",
      "統計情報"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0034",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★",
    "question": "インターネット上で一度拡散した情報や画像が完全に消去できなくなる現象を例えた言葉はどれか。",
    "options": [
      "デジタルタトゥー",
      "インターネットフットプリント",
      "サイバーログ",
      "ネットアンカー"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0035",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★",
    "question": "メディアから発信される情報を鵜呑みにせず、客観的に分析・評価し、主体的に活用する能力を何というか。",
    "options": [
      "情報リテラシー",
      "メディアリテラシー",
      "ネットリテラシー",
      "デジタルリテラシー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0036",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "金融機関などを装った偽の電子メールを送り、偽のWebサイトに誘導して暗証番号などを盗み出す行為を何というか。",
    "options": [
      "フィッシング",
      "スニフィング",
      "スプーフィング",
      "ブルートフォース"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0037",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "人間の心理的な隙やミスに付け込んで、パスワードなどの機密情報を入手する手法を何というか。",
    "options": [
      "技術的攻撃",
      "ソーシャルエンジニアリング",
      "マルウェア攻撃",
      "クラッキング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0038",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "コンピュータウイルスなどの悪意のあるソフトウェアの総称を何というか。",
    "options": [
      "スパイウェア",
      "ランサムウェア",
      "マルウェア",
      "アドウェア"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0039",
    "unit": "情報社会",
    "field": "法律",
    "difficulty": "★★",
    "question": "他人のIDやパスワードを無断で使用して、ネットワークを通じてアクセス制限されたコンピュータにログインする行為を禁止する法律はどれか。",
    "options": [
      "個人情報保護法",
      "不正アクセス禁止法",
      "プロバイダ責任制限法",
      "サイバーセキュリティ基本法"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0040",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "インターネットやパソコンなどの情報通信技術を利用できる人と利用できない人の間に生じる、経済的・社会的な格差を何というか。",
    "options": [
      "情報格差（デジタルデバイド）",
      "メディアデバイド",
      "テクノロジーギャップ",
      "スキルギャップ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0041",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★",
    "question": "SNSで他人を誹謗中傷する書き込みを行うことによって侵害される可能性が高い権利はどれか。",
    "options": [
      "著作権",
      "肖像権",
      "名誉権",
      "特許権"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0042",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★★",
    "question": "友人が撮影した写真を本人の許可なくSNSに投稿する行為に関する説明として最も適切なものはどれか。",
    "options": [
      "問題はない",
      "肖像権やプライバシーの権利を侵害する可能性がある",
      "著作権のみを侵害する",
      "学校内なら問題ない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0043",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★",
    "question": "情報セキュリティの三要素「機密性・完全性」ともう一つは何か。",
    "options": [
      "匿名性",
      "可用性",
      "公平性",
      "安全性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0044",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "許可された利用者だけが情報にアクセスできる性質を何というか。",
    "options": [
      "完全性",
      "可用性",
      "機密性",
      "公開性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0045",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "情報が改ざんされていない状態を保つ性質を何というか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "信頼性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0046",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "必要なときに情報システムを利用できる性質を何というか。",
    "options": [
      "安全性",
      "機密性",
      "可用性",
      "匿名性"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0047",
    "unit": "情報社会",
    "field": "認証",
    "difficulty": "★",
    "question": "本人確認のために用いられる「知識情報」の例として適切なものはどれか。",
    "options": [
      "指紋",
      "ICカード",
      "パスワード",
      "顔認証"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0048",
    "unit": "情報社会",
    "field": "認証",
    "difficulty": "★★",
    "question": "本人確認のために用いられる「生体情報」の例として適切なものはどれか。",
    "options": [
      "社員証",
      "暗証番号",
      "ワンタイムパスワード",
      "虹彩"
    ],
    "answer": 4,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0049",
    "unit": "情報社会",
    "field": "認証",
    "difficulty": "★★",
    "question": "一定時間ごとに変更される使い捨てパスワードを何というか。",
    "options": [
      "固定パスワード",
      "ワンタイムパスワード",
      "秘密鍵",
      "電子署名"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0050",
    "unit": "情報社会",
    "field": "暗号",
    "difficulty": "★★",
    "question": "暗号化と復号に異なる鍵を用いる方式を何というか。",
    "options": [
      "共通鍵暗号方式",
      "公開鍵暗号方式",
      "換字式暗号",
      "ハッシュ化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0051",
    "unit": "情報社会",
    "field": "暗号",
    "difficulty": "★★★",
    "question": "公開鍵暗号方式において暗号化に用いる鍵はどれか。",
    "options": [
      "秘密鍵",
      "復号鍵",
      "公開鍵",
      "共通鍵"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0052",
    "unit": "情報社会",
    "field": "暗号",
    "difficulty": "★★★",
    "question": "電子署名の目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させる",
      "データ容量を削減する",
      "送信者の確認と改ざん検知",
      "匿名性を高める"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0053",
    "unit": "情報社会",
    "field": "ネット依存",
    "difficulty": "★",
    "question": "インターネットやオンラインゲームの利用を自分で制御できなくなる状態を何というか。",
    "options": [
      "情報格差",
      "ネット依存",
      "デジタルタトゥー",
      "情報漏えい"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0054",
    "unit": "情報社会",
    "field": "フェイクニュース",
    "difficulty": "★★",
    "question": "意図的に作られた虚偽の情報を何というか。",
    "options": [
      "オープンデータ",
      "フェイクニュース",
      "ビッグデータ",
      "メタデータ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0055",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★",
    "question": "SNSで拡散されている情報の真偽を確かめる方法として最も適切なものはどれか。",
    "options": [
      "最初に見つけたサイトだけを確認する",
      "拡散数が多いので信用する",
      "複数の信頼できる情報源を確認する",
      "友人に聞く"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0056",
    "unit": "情報社会",
    "field": "情報共有",
    "difficulty": "★",
    "question": "誰でも自由に利用・再配布できるソフトウェアを何というか。",
    "options": [
      "シェアウェア",
      "オープンソースソフトウェア",
      "フリーウェア",
      "ミドルウェア"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0057",
    "unit": "情報社会",
    "field": "法律",
    "difficulty": "★★",
    "question": "プロバイダ責任制限法に関連する内容として適切なものはどれか。",
    "options": [
      "著作権登録の手続きを定める",
      "インターネット上の権利侵害への対応を定める",
      "暗号技術の使用を制限する",
      "電子契約を禁止する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0058",
    "unit": "情報社会",
    "field": "データ活用",
    "difficulty": "★★",
    "question": "インターネット上で公開され、自由に利用できる行政データなどを何というか。",
    "options": [
      "ビッグデータ",
      "オープンデータ",
      "個人情報",
      "暗号資産"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0059",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "AIの学習データに偏りがあることで生じる問題を何というか。",
    "options": [
      "バイアス",
      "ハッシュ化",
      "最適化",
      "抽象化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0060",
    "unit": "情報社会",
    "field": "情報倫理",
    "difficulty": "★★",
    "question": "生成AIが作成した文章や画像を利用する際に特に注意すべき点として最も適切なものはどれか。",
    "options": [
      "必ず正しい情報である",
      "著作権や誤情報に注意する必要がある",
      "利用は法律で禁止されている",
      "学校でのみ利用できる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0061",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★★★",
    "question": "学校の文化祭の様子を撮影した動画を編集し,BGMとして市販の楽曲を付けて動画共有サイトに公開した。この行為について最も適切な説明はどれか。",
    "options": [
      "教育目的であれば自由に公開できる",
      "学校行事であるため著作権法の対象外である",
      "著作権者の許諾が必要となる場合がある",
      "利益を得ていないため問題はない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0062",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★★★",
    "question": "インターネット上の記事の一部をレポートに引用する際,著作権法上の「引用」と認められる条件として最も適切なものはどれか。",
    "options": [
      "引用部分の方が本文より長いこと",
      "引用部分が明確に区別され,本文が主であること",
      "出典を省略しても本文を自分で作成していればよい",
      "非公開のレポートであれば条件は不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0063",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★",
    "question": "次のうち、単独では個人を特定できないが、他の情報と容易に照合することで個人を識別できる可能性があるものとして最も適切なものはどれか。",
    "options": [
      "郵便番号のみ",
      "クラスと出席番号",
      "天気予報の情報",
      "教科書のISBNコード"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0064",
    "unit": "情報社会",
    "field": "個人情報保護",
    "difficulty": "★★★",
    "question": "ある企業が利用目的を「商品の発送」として取得した顧客の個人情報を本人の同意を得ずに広告配信へ利用した。この行為について最も適切な説明はどれか。",
    "options": [
      "取得後であれば自由に利用目的を変更できる",
      "本人の同意がない限り原則として目的外利用は認められない",
      "広告目的であれば例外として認められる",
      "個人情報保護法は企業には適用されない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0065",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "情報セキュリティの三要素である「機密性」「完全性」「可用性」のうちシステム障害によってサービスが停止した場合に損なわれるものはどれか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "真正性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0066",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "パスワードを推測されにくくする方法として最も適切なものはどれか。",
    "options": [
      "生年月日や電話番号を利用する",
      "すべてのサービスで同じパスワードを使う",
      "英数字や記号を組み合わせ",
      "十分な長さを確保する"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0067",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "利用者が正規のWebサイトだと思い込んで偽サイトにアクセスしIDやパスワードを入力してしまう攻撃を何というか。",
    "options": [
      "DDoS攻撃",
      "フィッシング",
      "ゼロデイ攻撃",
      "ブルートフォース攻撃"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0068",
    "unit": "情報社会",
    "field": "認証",
    "difficulty": "★★★",
    "question": "「ICカードを所持していること」と「暗証番号を知っていること」を組み合わせて本人確認を行う方式を何というか。",
    "options": [
      "生体認証",
      "シングルサインオン",
      "多要素認証",
      "公開鍵認証"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0069",
    "unit": "情報社会",
    "field": "暗号",
    "difficulty": "★★★",
    "question": "公開鍵暗号方式において受信者だけが復号できるように送信者が暗号化に用いる鍵はどれか。",
    "options": [
      "送信者の秘密鍵",
      "送信者の公開鍵",
      "受信者の秘密鍵",
      "受信者の公開鍵"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0070",
    "unit": "情報社会",
    "field": "暗号",
    "difficulty": "★★★★",
    "question": "公開鍵暗号方式と比較した場合の共通鍵暗号方式の特徴として最も適切なものはどれか。",
    "options": [
      "暗号化と復号に異なる鍵を用いる",
      "鍵配送の問題が存在しない",
      "処理速度が比較的高速である",
      "電子署名に適している"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0071",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★",
    "question": "SNS上で「○○を食べると必ず病気が治る」という投稿を見つけた。情報の信頼性を判断する方法として最も適切なものはどれか。",
    "options": [
      "投稿者のフォロワー数だけを確認する",
      "複数の公的機関や専門家の情報を確認する",
      "拡散数が多ければ正しいと判断する",
      "最初に表示された検索結果を信用する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0072",
    "unit": "情報社会",
    "field": "情報倫理",
    "difficulty": "★★★",
    "question": "生成AIを利用してレポートを作成する際に最も注意すべき点はどれか。",
    "options": [
      "AIの出力は必ず正しいため確認は不要である",
      "AIが生成した内容をそのまま提出しても問題ない",
      "出力内容の正確性や著作権上の問題を確認する必要がある",
      "教育目的であればAIの出力は無条件で利用できる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0073",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★★★",
    "question": "AIによる自動判定システムが特定の属性を持つ人々に不利な結果を与える現象の主な原因として考えられるものはどれか。",
    "options": [
      "通信速度の低下",
      "学習データの偏り",
      "記憶装置の故障",
      "暗号技術の不足"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0074",
    "unit": "情報社会",
    "field": "データ活用",
    "difficulty": "★★★",
    "question": "オープンデータを行政が公開する目的として最も適切なものはどれか。",
    "options": [
      "個人情報を広く共有するため",
      "行政の透明性向上や新たなサービス創出を促進するため",
      "政府の業務量を増やすため",
      "民間企業の利用を制限するため"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0075",
    "unit": "情報社会",
    "field": "法律",
    "difficulty": "★★★★",
    "question": "匿名のSNSアカウントから誹謗中傷を受けた被害者が投稿者の情報開示を求める際に関連する法律として最も適切なものはどれか。",
    "options": [
      "不正アクセス禁止法",
      "個人情報保護法",
      "プロバイダ責任制限法",
      "特定電子メール法"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0076",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★★",
    "question": "特許権・実用新案権・意匠権・商標権の四つをまとめて何というか。",
    "options": [
      "著作隣接権",
      "産業財産権",
      "知的創作権",
      "無体財産権"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0077",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★★★",
    "question": "ある企業が自社製品のロゴマークを法的に保護したいと考えている。このとき取得すべき権利として最も適切なものはどれか。",
    "options": [
      "特許権",
      "意匠権",
      "著作権",
      "商標権"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0078",
    "unit": "情報社会",
    "field": "プライバシー",
    "difficulty": "★★★",
    "question": "位置情報を利用するスマートフォンアプリが利用者の行動履歴を継続的に収集している。このことによって生じる懸念として最も適切なものはどれか。",
    "options": [
      "CPUの性能低下",
      "通信速度の向上",
      "個人の行動パターンの推測",
      "暗号化の強化"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0079",
    "unit": "情報社会",
    "field": "情報格差",
    "difficulty": "★★★",
    "question": "デジタルデバイドが社会問題として注目される理由として最も適切なものはどれか。",
    "options": [
      "電子機器の価格が統一されるため",
      "ICTを利用できる人と利用できない人との間で格差が生じるため",
      "インターネット利用者が減少するため",
      "紙媒体が完全になくなるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0080",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★★★★",
    "question": "企業がランサムウェアによる被害を受け、重要なファイルが暗号化された。被害を最小限に抑える対策として最も有効なものはどれか。",
    "options": [
      "定期的にバックアップを取得する",
      "パスワードを単純化する",
      "すべてのファイルを共有設定にする",
      "OSの更新を停止する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0081",
    "unit": "情報社会",
    "field": "生成AIと著作権",
    "difficulty": "★★",
    "question": "生成AIがWeb上の著作物を無断で学習することについて、日本の著作権法（第30条の4）における原則的な扱いとして正しいものはどれか。",
    "options": [
      "著作権者の許諾がなければ、いかなる学習も違法である",
      "非営利目的の学習のみ、許諾なしで認められる",
      "著作権者の利益を不当に害しない限り、原則として許諾なしで学習できる",
      "AIによる学習はすべて著作権法の対象外である"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0082",
    "unit": "情報社会",
    "field": "生成AIと著作権",
    "difficulty": "★★★",
    "question": "生成AIを用いて出力した画像や文章に「著作権」が認められるための条件として、最も適切なものはどれか。",
    "options": [
      "AIに対して、非常に長文で詳細なプロンプト（指示文）を入力した",
      "出力されたものに、人間による「創作的意図」や「創作的寄与」が認められる",
      "有料プランの生成AIサービスを利用して出力した",
      "世界中でこれまでに誰も見たことがない完全なオリジナルデザインである"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0083",
    "unit": "情報社会",
    "field": "偽情報とディープフェイク",
    "difficulty": "★★",
    "question": "選挙や社会混乱を狙い、AI技術を用いて本物そっくりに作られた偽の動画や音声のことを何というか。",
    "options": [
      "ディープフェイク",
      "シャドー動画",
      "オルタナティブ・メディア",
      "バイラルメディア"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0084",
    "unit": "情報社会",
    "field": "プラットフォームと規制",
    "difficulty": "★★",
    "question": "SNSやECサイトなどの巨大IT企業が、市場を独占して不当に利益を得たり、利用者のデータを不透明に扱ったりすることを規制する日本の法律はどれか。",
    "options": [
      "プロバイダ責任制限法",
      "デジタルプラットフォーム取引透明化法",
      "不正競争防止法",
      "電子契約法"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0085",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "スマート家電や自動車がネットにつながる「IoT機器」が普及する中、これらの機器がサイバー攻撃の「踏み台」にされやすい主な理由はどれか。",
    "options": [
      "機器の本体サイズが小さいため、物理的に盗まれやすい",
      "初期パスワードのまま変更されず、セキュリティ対策が手薄になりがちだから",
      "常に人間が画面を見て操作しているわけではないから",
      "通信速度がパソコンやスマートフォンに比べて遅いから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0086",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "SNSのアルゴリズムによって、自分が関心のある情報ばかりが表示され、特定の考え方や偏った意見にのみ囲まれてしまう現象を何というか。",
    "options": [
      "エコーチェンバー現象",
      "フィルターバブル現象",
      "サイバーカスケード現象",
      "デジタルツイン現象"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0087",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "SNS上で、自分と似た意見や価値観を持つ人たちばかりと繋がることで、自分の意見が世論の多数派だと錯覚し、考えが過激化していく現象を何というか。",
    "options": [
      "インフォデミック",
      "フィルターバブル現象",
      "エコーチェンバー現象",
      "アテンション・エコノミー"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0088",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★★",
    "question": "インターネット上の注目や「いいね！」の数が経済的な価値を持ち、人々の関心を引くために過激な投稿がエスカレートしやすくなる現代の経済実態を何というか。",
    "options": [
      "シェアリングエコノミー",
      "トークンエコノミー",
      "アテンション・エコノミー（関心経済）",
      "プラットフォームエコノミー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0089",
    "unit": "情報社会",
    "field": "デジタル・シティズンシップ",
    "difficulty": "★★",
    "question": "ICTを単に禁止・制限するのではなく、社会の一員として機材やネットを善用し、主体的に社会に関わろうとする人間を育てる教育指針を何というか。",
    "options": [
      "情報モラル教育",
      "デジタル・シティズンシップ教育",
      "メディアリテラシー教育",
      "プログラミング教育"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0090",
    "unit": "情報社会",
    "field": "プライバシーの権利",
    "difficulty": "★★★",
    "question": "インターネット上の検索結果やSNSの過去の投稿について、プライバシー保護の観点から、検索サイト等に情報の削除を求めることができる権利を何というか。",
    "options": [
      "忘れられる権利（消去権）",
      "アクセス権",
      "知る権利",
      "自己決定権"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0091",
    "unit": "情報社会",
    "field": "個人情報保護法",
    "difficulty": "★★",
    "question": "スマートフォンの位置情報や、交通系ICカードの乗車履歴など、特定の個人の移動や行動の傾向が分かる情報のことを何というか。",
    "options": [
      "仮名加工情報",
      "個人識別符号",
      "ライフログ（行動履歴情報）",
      "統計情報"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0092",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "スマートフォンの過度な利用により、他人の視線や評判が常に気になり、ネットから離れることに強い不安やストレスを感じる依存状態を何というか。",
    "options": [
      "デジタルデトックス",
      "ネットいじめ",
      "FOMO（取り残されることへの恐怖）",
      "テクノストレス"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0093",
    "unit": "情報社会",
    "field": "新しい技術",
    "difficulty": "★★",
    "question": "現実世界にある建物や都市、製品などのデータをそっくりそのままデジタル空間に再現し、シミュレーションや予測に役立てる技術を何というか。",
    "options": [
      "バーチャルリアリティ",
      "デジタルツイン",
      "メタバース",
      "拡張現実（AR）"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0094",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "組織の内部ネットワークに侵入されることを前提とし、すべてのアクセスに対して常に認証や監視を行い、誰も「信頼しない」ことを基本とする最新のセキュリティ考え方はどれか。",
    "options": [
      "ゼロトラスト",
      "ファイアウォール型",
      "サンドボックス",
      "境界防御型"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0095",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "企業や公的機関に対し、データを暗号化して使えなくした上で、復旧と引き換えに金銭を要求する、近年被害が急増しているマルウェアはどれか。",
    "options": [
      "スパイウェア",
      "ワーム",
      "ランサムウェア",
      "トロイの木馬"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0096",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "偽情報や誤情報がインターネット上で爆発的に拡散し、社会的な混乱やパニックを引き起こす現象を、感染症の流行になぞらえて何というか。",
    "options": [
      "パンデミック",
      "インフォデミック",
      "バイラルマーケティング",
      "サイバーパンク"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0097",
    "unit": "情報社会",
    "field": "新しい技術",
    "difficulty": "★",
    "question": "現金を使わず、スマートフォン決済やクレジットカード、電子マネー等を用いて決済を行う社会の仕組みやトレンドを何というか。",
    "options": [
      "キャッシュレス社会",
      "フィンテック",
      "ブロックチェーン社会",
      "シェアリングエコノミー"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0098",
    "unit": "情報社会",
    "field": "法律",
    "difficulty": "★★",
    "question": "SNS上の誹謗中傷対策として法改正が行われ、被害者が投稿者を特定するための手続きが迅速化されたり、プラットフォーム側の削除対応が厳格化されたりした法律はどれか。",
    "options": [
      "電気通信事業法",
      "不正アクセス禁止法",
      "プロバイダ責任制限法（発信者情報開示請求関連）",
      "特定商取引法"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0099",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★",
    "question": "テレワーク（在宅勤務）やオンライン授業の急速な普及によって、浮き彫りになった課題として「最も不適切」なものはどれか。",
    "options": [
      "家庭の通信環境や端末の有無による教育・業務格差",
      "対面コミュニケーションの減少による孤独感や健康問題",
      "通勤・通学時間の削減による時間の有効活用",
      "情報漏洩のリスクが高まるなどのセキュリティ上の懸念"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0100",
    "unit": "情報社会",
    "field": "生成AIと社会",
    "difficulty": "★★★",
    "question": "生成AIの普及に伴い、人間が書いた文章かAIが書いた文章かを見分けることが困難になり、学校教育において生じている最も直接的な懸念はどれか。",
    "options": [
      "教科書のデジタル化が遅れること",
      "レポートや宿題の不正利用による評価の形骸化",
      "学校のインターネット回線がパンクすること",
      "タイピングスキルの低下"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0101",
    "unit": "情報社会",
    "field": "生成AI",
    "difficulty": "★★★",
    "question": "生徒Aは生成AIを用いてレポートの下書きを作成し、その内容を確認せずに提出した。後日、存在しない文献が参考文献として記載されていることが判明した。この事例から特に注意すべき生成AIの特性として最も適切なものはどれか。",
    "options": [
      "情報漏えい",
      "ハルシネーション",
      "暗号化",
      "匿名化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0102",
    "unit": "情報社会",
    "field": "生成AI",
    "difficulty": "★★★★",
    "question": "学校で生成AIを利用する際の方針として最も適切なものはどれか。",
    "options": [
      "生成AIの利用を全面的に禁止する",
      "生成AIが出力した内容を無条件に正しいものとして扱う",
      "生成AIの出力内容を検証しながら補助的に利用する",
      "生徒に生成AIへの依存を促す"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0103",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★★",
    "question": "SNS上で大規模災害に関する情報が拡散されている。情報の真偽を確認する方法として最も適切なものはどれか。",
    "options": [
      "拡散数が多い投稿を優先的に信用する",
      "最初に表示された投稿だけを確認する",
      "複数の報道機関や自治体の発表を確認する",
      "友人から送られてきた情報をそのまま共有する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0104",
    "unit": "情報社会",
    "field": "アルゴリズムと社会",
    "difficulty": "★★★★",
    "question": "動画配信サービスでは、利用者ごとにおすすめ動画が表示される。この仕組みによって生じる問題として最も適切なものはどれか。",
    "options": [
      "通信速度が低下する",
      "利用者が多様な情報に触れる機会が減少する可能性がある",
      "動画の画質が自動的に低下する",
      "著作権が消滅する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0105",
    "unit": "情報社会",
    "field": "情報格差",
    "difficulty": "★★★",
    "question": "自治体が行政手続きを原則オンライン化した結果、高齢者など一部の住民が手続きを行えなくなった。この問題として最も適切なものはどれか。",
    "options": [
      "知的財産権の侵害",
      "デジタルデバイドの拡大",
      "ネットワーク障害",
      "電子署名の普及"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0106",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★★",
    "question": "スマートフォンの位置情報サービスを常に有効にしている場合のリスクとして最も適切なものはどれか。",
    "options": [
      "バッテリー消費がなくなる",
      "個人の行動履歴が分析される可能性がある",
      "通信速度が向上する",
      "暗号化が解除される"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0107",
    "unit": "情報社会",
    "field": "フェイクニュース",
    "difficulty": "★★★★",
    "question": "SNSで『ある企業が倒産した』という情報が急速に拡散したが、後に誤情報であることが判明した。このような情報を安易に拡散する行為によって生じる問題として最も適切なものはどれか。",
    "options": [
      "ネットワークの高速化",
      "企業や個人の社会的信用の低下",
      "データ通信量の削減",
      "知的財産権の強化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0108",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★★★★",
    "question": "生成AIが学習した大量の画像データについて議論が続いている。この問題の背景として最も関係が深いものはどれか。",
    "options": [
      "メモリ不足",
      "著作権の保護と技術革新の両立",
      "通信規格の統一",
      "プログラミング言語の違い"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0109",
    "unit": "情報社会",
    "field": "情報倫理",
    "difficulty": "★★★",
    "question": "生徒Bは、友人との会話を無断で録音し、その音声をSNSに投稿した。この行為によって侵害される可能性が高い権利として最も適切なものはどれか。",
    "options": [
      "特許権",
      "商標権",
      "プライバシーの権利",
      "著作隣接権"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0110",
    "unit": "情報社会",
    "field": "サイバー犯罪",
    "difficulty": "★★★★",
    "question": "近年、企業や自治体がランサムウェアの被害を受ける事例が報告されている。ランサムウェアの特徴として最も適切なものはどれか。",
    "options": [
      "利用者の端末を遠隔操作して動画を配信する",
      "データを暗号化し、復旧のために金銭を要求する",
      "通信を高速化する",
      "電子署名を自動生成する"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0111",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★★★★",
    "question": "AIによる採用選考システムが過去の採用データを学習した結果、特定の属性を持つ応募者が不利になるケースが指摘されている。この問題の主な原因として最も適切なものはどれか。",
    "options": [
      "通信速度の低下",
      "学習データに含まれる偏り",
      "CPU性能の不足",
      "記憶装置の容量不足"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0112",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★★★★",
    "question": "自動運転車が事故を回避できない状況に直面した際、どのような行動を選択すべきかという問題は何に関する課題として議論されているか。",
    "options": [
      "ネットワークの冗長化",
      "AI倫理",
      "情報圧縮",
      "著作権保護"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0113",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★★",
    "question": "インターネット検索では、利用者ごとに異なる検索結果が表示されることがある。この現象によって生じる問題として最も適切なものはどれか。",
    "options": [
      "情報の偏りが強化される可能性がある",
      "通信速度が低下する",
      "個人情報が完全に保護される",
      "検索機能が利用できなくなる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0114",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★★",
    "question": "ある企業では、社員が個人所有のスマートフォンを業務利用することを認めている。この制度に伴うリスクとして最も適切なものはどれか。",
    "options": [
      "業務データが外部に漏えいする可能性が高まる",
      "ネットワーク機器が不要になる",
      "著作権が失われる",
      "電子メールが利用できなくなる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0115",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★★★★",
    "question": "今後、生成AIやロボット技術の発展によって単純作業の自動化が進むと予想されている。この変化に対応するために特に重要となる能力として最も適切なものはどれか。",
    "options": [
      "決められた作業を繰り返す能力",
      "AIの出力を批判的に評価し、新たな価値を創造する能力",
      "手書きによる大量の計算能力",
      "暗記した知識をそのまま再現する能力"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0116",
    "unit": "情報社会",
    "field": "生成AIとプライバシー",
    "difficulty": "★★",
    "question": "生成AIのプロンプト（指示文）に自社の未公開データや他人の個人情報を入力することのリスクとして、最も適切なものはどれか。",
    "options": [
      "入力したデータがAIの学習に利用され、他者への回答として漏洩するリスクがある",
      "入力したデータがすべて自動的に暗号化され、二度と閲覧できなくなるリスク",
      "AIの処理速度が急激に低下し、システムがダウンするリスク",
      "入力した瞬間に著作権がすべてAI開発企業に譲渡されるリスク"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0117",
    "unit": "情報社会",
    "field": "偽情報と技術",
    "difficulty": "★★★",
    "question": "AIによって生成された画像や動画の「本物らしさ」を証明、または追跡するために、データに制作者や改変履歴のメタデータを埋め込む最新の技術規格を何というか。",
    "options": [
      "デジタルフォレンジック",
      "デジタルウォーターマーク（電子水透かし）/ オリジネーター・プロファイル（OP）",
      "ブロックチェーン・エスクロー",
      "データスクリーニング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0118",
    "unit": "情報社会",
    "field": "SNSとメンタルヘルス",
    "difficulty": "★",
    "question": "深夜までスマートフォンでSNSを見続けたり、動画を視聴したりすることで睡眠の質が低下し、翌日の体調や精神面に悪影響を及ぼす現代の健康課題を何というか。",
    "options": [
      "テクノストレス",
      "デジタルヘルスケア",
      "睡眠負債 / ブルーライト依存",
      "インターネット中毒（ネット依存）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0119",
    "unit": "情報社会",
    "field": "アテンション・エコノミー",
    "difficulty": "★★",
    "question": "動画配信サイト等で、視聴数（再生回数）を稼ぐために他人の迷惑になる行為や危険な行為を撮影・投稿する若者が問題視されている。この背景にある経済的な仕組みを何というか。",
    "options": [
      "サブスクリプション・エコノミー",
      "アテンション・エコノミー（関心経済）",
      "シェアリング・エコノミー",
      "ギグ・エコノミー"
    ],
    "answer": 2,
    "correctCount": 2,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0120",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "企業の従業員を狙い、業務に関係のある件名（「請求書の件」「お見積もり」など）を装ってウイルス付きのメールを送りつける、標的を絞ったサイバー攻撃を何というか。",
    "options": [
      "ランサムウェア攻撃",
      "フィッシング詐欺",
      "標的型攻撃メール（サミング）",
      "ブルートフォース攻撃"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0121",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "ソフトウェアの修正プログラム（パッチ）が公開される前に、その脆弱性（セキュリティの穴）を突いて行われるサイバー攻撃を何というか。",
    "options": [
      "ゼロデイ攻撃",
      "バックドア攻撃",
      "ダークウェブ攻撃",
      "バッファオーバーフロー攻撃"
    ],
    "answer": 1,
    "correctCount": 2,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0122",
    "unit": "情報社会",
    "field": "スマート都市とデータ",
    "difficulty": "★★",
    "question": "GPSの位置情報やスマートフォンの電波情報などを元に集計される、個人が特定されない形で統計化された膨大な人の流れや行動のデータのことを何というか。",
    "options": [
      "ビッグデータ（人流データ）",
      "ライフログ",
      "パーソナルデータ",
      "メタデータ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0123",
    "unit": "情報社会",
    "field": "プラットフォームの責任",
    "difficulty": "★★★",
    "question": "インターネット上のECサイトなどで、サクラ（偽の購入者）を使って意図的に高評価の口コミを投稿させ、消費者を誤認させる行為（ステルスマーケティングなど）を規制する法律はどれか。",
    "options": [
      "景品表示法",
      "消費者契約法",
      "特定商取引法",
      "不正競争防止法"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0124",
    "unit": "情報社会",
    "field": "デジタル・デトックス",
    "difficulty": "★",
    "question": "スマートフォンの依存から脱却するために、一定期間デジタル機器から距離を置き、現実の自然や対面での会話に集中する取り組みを何というか。",
    "options": [
      "デジタルクレンズ",
      "デジタルデトックス",
      "マインドフルネスネット",
      "オフラインワーク"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0125",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "AIによる採用選考や融資の審査において、学習元の過去のデータ自体に偏りがあったため、特定の性別や人種が不当に低く評価されてしまう問題を何というか。",
    "options": [
      "AIのブラックボックス問題",
      "AIのアルゴリズムバイアス",
      "ハルシネーション（幻覚）",
      "ディープラーニングエラー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0126",
    "unit": "情報社会",
    "field": "生成AIの特性",
    "difficulty": "★★",
    "question": "生成AIが、もっともらしい嘘や事実とは異なる架空の情報を、まるで真実であるかのように出力してしまう現象を何というか。",
    "options": [
      "フェイクニュース",
      "ハルシネーション（幻覚）",
      "ディープフェイク",
      "ゴーストライティング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0127",
    "unit": "情報社会",
    "field": "クラウドと社会",
    "difficulty": "★",
    "question": "自社でサーバーやソフトウェアを所有せず、インターネット越しに提供される必要な機能やサービスを必要な分だけ利用する仕組みを何というか。",
    "options": [
      "オンプレミス",
      "クラウドコンピューティング",
      "エッジコンピューティング",
      "分散型システム"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0128",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "カスタマーサポートなどで生成AIやチャットボットが普及した結果、高齢者などデジタル機器の操作に慣れていない人が、人によるサポートを受けにくくなる格差問題を何というか。",
    "options": [
      "アクセシビリティ格差（デジタルデバイド）",
      "オペレーションギャップ",
      "インフラストラクチャデバイド",
      "リテラシーハザード"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0129",
    "unit": "情報社会",
    "field": "生体認証とプライバシー",
    "difficulty": "★★",
    "question": "スマートフォンのロック解除や空港のゲートで使われる「顔認証」や「指紋認証」などの生体情報を悪用された場合、他のパスワードと違ってどのようなリスクがあるか。",
    "options": [
      "データサイズが大きいため通信が遅くなる",
      "一度漏洩すると、パスワードのように「変更」することが不可能なため被害が永続する",
      "認証の精度が年齢とともに極端に低下する",
      "暗号化することが技術的に不可能である"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0130",
    "unit": "情報社会",
    "field": "Web3と新しい社会",
    "difficulty": "★★★",
    "question": "中央管理者が存在せず、ブロックチェーン技術を活用して参加者全員が自律的に運営・意思決定を行う分散型の組織形態を何というか。",
    "options": [
      "DAO（分散型自律組織）",
      "NFTコンソーシアム",
      "メタバース・ギルド",
      "スマートコントラクト"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0131",
    "unit": "情報社会",
    "field": "デジタル遺産",
    "difficulty": "★★",
    "question": "故人が遺したスマートフォンのアカウントや、ネット銀行の口座、定額制サービスの契約など、インターネット上に残された遺産のことを何というか。",
    "options": [
      "クラウド遺産",
      "デジタル遺品（デジタル遺産）",
      "サイバー資産",
      "仮想遺産"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0132",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "信頼できる身内や上司になりすましてメッセージを送り、指定の口座に現金を振り込ませるなど、ITツールを用いた現代型の特殊詐欺の総称を何というか。",
    "options": [
      "フィッシング詐欺",
      "ビジネスメール詐欺（BEC）/ ソーシャルエンジニアリング",
      "ランサムウェア",
      "スプーフィング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0133",
    "unit": "情報社会",
    "field": "新しい働き方",
    "difficulty": "★",
    "question": "インターネットを活用し、オフィスに出社せず自宅やカフェ、コワーキングスペースなどで時間や場所に縛られずに働くスタイルを何というか。",
    "options": [
      "フレックスタイム",
      "テレワーク（リモートワーク）",
      "フリーランス",
      "サテライトオフィス"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0134",
    "unit": "情報社会",
    "field": "ギグ・エコノミー",
    "difficulty": "★★",
    "question": "インターネット上のプラットフォームを介して、単発・短期の仕事を請け負う働き方や、それによって成り立つ経済形態を何というか。",
    "options": [
      "シェアリングエコノミー",
      "ギグ・エコノミー",
      "サブスクリプションエコノミー",
      "フリーランス・ネットワーク"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0135",
    "unit": "情報社会",
    "field": "情報の信憑性",
    "difficulty": "★★",
    "question": "災害時などに、善意の「注意喚起」のつもりで根拠のないデマ情報をSNSで拡散してしまう心理的要因として、最も適切なものはどれか。",
    "options": [
      "愉快犯として社会を混乱させたいという悪意",
      "「他者や社会の役に立ちたい」という承認欲求や正義感の暴走",
      "プラットフォームから広告収入を得るための金銭目的",
      "サイバー攻撃の一環としての組織的なプロパガンダ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0136",
    "unit": "情報社会",
    "field": "知的財産権とNFT",
    "difficulty": "★★★",
    "question": "デジタルアートなどのデータに、複製不可能な「唯一無二の証明書」を紐付けることで、デジタルデータに資産価値を持たせるブロックチェーン上の技術を何というか。",
    "options": [
      "FT（代替可能トークン）",
      "NFT（非代替性トークン）",
      "暗号資産",
      "スマートコントラクト"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0137",
    "unit": "情報社会",
    "field": "ダークパターン",
    "difficulty": "★★★",
    "question": "Webサイトやアプリの画面設計において、ユーザーに不利な有料プランの解約をわざと複雑にしたり、意図しない商品を購入させようとしたりする不適切なデザインの手法を何というか。",
    "options": [
      "バッドUI",
      "ダークパターン",
      "ハザードデザイン",
      "フィッシングレイアウト"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0138",
    "unit": "情報社会",
    "field": "インフルエンサーと責任",
    "difficulty": "★★",
    "question": "SNSで多くのフォロワーを持つ「インフルエンサー」が、企業から報酬を得て商品を紹介しているにもかかわらず、それを隠して純粋な感想を装う不適切な行為を何というか。",
    "options": [
      "バイラルマーケティング",
      "ステルスマーケティング（ステマ）",
      "アフィリエイト詐欺",
      "シャドープロモーション"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0139",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★★",
    "question": "他人のSNSのアカウントや、企業の機密データベースに不正に侵入する行為を「クラッキング」と呼ぶのに対し、ITの高度な知識を社会の安全やサイバー防衛のために役立てる行為（または人）を何というか。",
    "options": [
      "ホワイトハッカー（エシカルハッカー）",
      "ブラックハッカー",
      "セキュリティ・アナリスト",
      "サイバーガード"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0140",
    "unit": "情報社会",
    "field": "スマート農業",
    "difficulty": "★",
    "question": "ドローンによる農薬散布や、AIカメラを用いた作物の病気診断、自動運転トラクターなどを活用して、労働力不足の解消を目指す新しい農業の形態を何というか。",
    "options": [
      "精密農業",
      "スマート農業",
      "デジタルアグリ",
      "アグリテック"
    ],
    "answer": 2,
    "correctCount": 2,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0141",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "行政手続きのデジタル化（マイナンバーカードの活用など）が進む一方で、機器を持たない人や操作ができない人が行政サービスから取り残されてしまう現象を何というか。",
    "options": [
      "デジタルデバイド",
      "ガバメントギャップ",
      "行政スクリーニング",
      "アクセシビリティハザード"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0142",
    "unit": "情報社会",
    "field": "クッキー（Cookie）と規制",
    "difficulty": "★★★",
    "question": "Webサイトの訪問履歴やログイン情報を保存する「クッキー（Cookie）」が、ユーザーの同意なしに広告配信企業へ提供され、過剰な追跡（ターゲティング）に利用されることを制限する日本の法律はどれか。",
    "options": [
      "個人情報保護法（電気通信事業法含む）",
      "不正アクセス禁止法",
      "プロバイダ責任制限法",
      "特定商取引法"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0143",
    "unit": "情報社会",
    "field": "スマートモビリティ",
    "difficulty": "★★",
    "question": "自動運転技術やAIを活用し、自家用車に頼らず、バスや鉄道、シェアサイクルなどの複数の移動手段をシームレスに結びつける次世代の移動サービスを何というか。",
    "options": [
      "MaaS（マース）",
      "ITS（高度道路交通システム）",
      "スマートモビリティ",
      "自動運転エコシステム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0144",
    "unit": "情報社会",
    "field": "デジタル庁と社会",
    "difficulty": "★",
    "question": "日本の行政手続きのデジタル化を一元的に推進し、官民のDX（デジタルトランスフォーメーション）を加速させるために設置された国の機関はどれか。",
    "options": [
      "IT戦略本部",
      "総務省情報局",
      "デジタル庁",
      "サイバーセキュリティセンター"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0145",
    "unit": "情報社会",
    "field": "環境とICT",
    "difficulty": "★★",
    "question": "データセンターの消費電力急増が地球温暖化に与える影響が課題視される中、IT技術そのものの省エネ化や、ITの活用によって社会全体の環境負荷を減らすアプローチを何というか。",
    "options": [
      "グリーンIT（グリーントランスフォーメーション / GX）",
      "クリーンサイバー",
      "エコ・システム",
      "サステナブルコンピューティング"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0146",
    "unit": "情報社会",
    "field": "生成AI",
    "difficulty": "★★★★",
    "question": "ある自治体では、住民からの問い合わせ対応の一部に生成AIを導入した。導入にあたって特に重視すべき課題として最も適切なものはどれか。",
    "options": [
      "通信速度の向上",
      "回答内容の正確性や公平性の確保",
      "紙の使用量の増加",
      "記憶装置の容量削減"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0147",
    "unit": "情報社会",
    "field": "生成AI",
    "difficulty": "★★★★",
    "question": "生成AIを利用して作成した画像をSNSに投稿する際、特に注意すべき点として最も適切なものはどれか。",
    "options": [
      "生成AIが作成したものであれば著作権は存在しない",
      "他者の権利を侵害していないか確認する",
      "画像は必ず無料で利用できる",
      "投稿時に出典を示す必要はない"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0148",
    "unit": "情報社会",
    "field": "生成AI",
    "difficulty": "★★★★★",
    "question": "生成AIの発展によって、学校教育で特に重要性が高まる能力として最も適切なものはどれか。",
    "options": [
      "大量の知識を暗記する能力",
      "AIの出力を批判的に検討する能力",
      "長時間同じ作業を続ける能力",
      "手作業のみで課題を解決する能力"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0149",
    "unit": "情報社会",
    "field": "情報倫理",
    "difficulty": "★★★★",
    "question": "友人限定のSNSグループに投稿された写真を、投稿者の許可なく別のグループに転送した。この行為に関する説明として最も適切なものはどれか。",
    "options": [
      "限定公開であれば自由に転送できる",
      "著作権だけが問題になる",
      "プライバシーの侵害につながる可能性がある",
      "法律上の問題は生じない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0150",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★★",
    "question": "動画共有サイトで、過激な内容の動画ほど多くの視聴回数を獲得しやすい場合、利用者に求められる姿勢として最も適切なものはどれか。",
    "options": [
      "再生回数だけを基準に判断する",
      "動画の内容や情報源を確認する",
      "おすすめ動画を無条件に信頼する",
      "短い動画だけを視聴する"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0151",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★★★",
    "question": "SNSでは、自分と似た意見を持つ人の投稿ばかりが表示されることがある。このことによって生じる問題として最も適切なものはどれか。",
    "options": [
      "データ通信量が減少する",
      "異なる立場の情報に触れる機会が減少する",
      "個人情報が自動的に保護される",
      "検索機能が利用できなくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0152",
    "unit": "情報社会",
    "field": "情報格差",
    "difficulty": "★★★★",
    "question": "オンライン授業の導入時に、家庭によって利用できる端末や通信環境に差があった。この問題として最も適切なものはどれか。",
    "options": [
      "著作権侵害",
      "情報格差（デジタルデバイド）",
      "情報漏えい",
      "知的財産権の侵害"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0153",
    "unit": "情報社会",
    "field": "情報格差",
    "difficulty": "★★★★",
    "question": "情報格差を縮小するための取り組みとして最も適切なものはどれか。",
    "options": [
      "インターネット利用を制限する",
      "ICT教育や通信環境の整備を進める",
      "紙媒体のみを利用する",
      "電子機器の販売を停止する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0154",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★★",
    "question": "スマートフォンのアプリが、利用目的を明示しないまま位置情報や連絡先へのアクセスを求めている。このとき利用者がまず行うべきこととして最も適切なものはどれか。",
    "options": [
      "要求された権限をすべて許可する",
      "アプリの利用規約や権限の内容を確認する",
      "通信を切断する",
      "端末を初期化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0155",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★★★",
    "question": "匿名で投稿したつもりの内容から、投稿時刻や位置情報などを組み合わせて個人が特定されることがある。この事例から分かることとして最も適切なものはどれか。",
    "options": [
      "匿名化すれば必ず個人は特定されない",
      "複数の情報を組み合わせることで個人が推測される場合がある",
      "位置情報は個人情報に含まれない",
      "投稿時刻は重要ではない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0156",
    "unit": "情報社会",
    "field": "サイバー犯罪",
    "difficulty": "★★★★",
    "question": "企業の従業員が、不審なメールに添付されたファイルを開いた結果、社内ネットワーク全体に被害が拡大した。このような攻撃への対策として最も適切なものはどれか。",
    "options": [
      "OSやソフトウェアを最新の状態に保つ",
      "全てのメールを削除する",
      "パスワードを短くする",
      "共有フォルダを増やす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0157",
    "unit": "情報社会",
    "field": "サイバー犯罪",
    "difficulty": "★★★★★",
    "question": "近年、サイバー攻撃の被害が企業だけでなく病院や自治体にも及んでいる。この理由として最も適切なものはどれか。",
    "options": [
      "情報システムへの依存が高まっているため",
      "通信速度が向上したため",
      "コンピュータの価格が低下したため",
      "印刷物が減少したため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0158",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★★",
    "question": "ある企業では、退職した社員のアカウントが削除されず、その後も社内システムにアクセス可能な状態であった。この状況によって主に損なわれる情報セキュリティの要素はどれか。",
    "options": [
      "機密性",
      "可用性",
      "完全性",
      "利便性"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0159",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★★★",
    "question": "企業が情報漏えい対策として技術的な対策だけでなく、社員教育も重視する理由として最も適切なものはどれか。",
    "options": [
      "情報漏えいの多くが人的要因によって発生するため",
      "社員教育によって通信速度が向上するため",
      "教育によって暗号技術が不要になるため",
      "社員教育は法律で義務付けられているため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0160",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★★★★",
    "question": "AIによる画像認識技術が防犯カメラなどに利用されている。この技術の利用に伴う社会的課題として最も適切なものはどれか。",
    "options": [
      "半導体不足",
      "監視の強化によるプライバシーへの影響",
      "インターネット接続の不要化",
      "紙媒体の増加"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0161",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★★★★",
    "question": "生成AIによって大量の文章や画像を短時間で作成できるようになった。この変化が社会に与える影響として最も適切なものはどれか。",
    "options": [
      "情報発信の機会が広がる一方で、誤情報が拡散する可能性がある、",
      "情報の信頼性が完全に保証される",
      "著作権に関する問題は発生しない",
      "誰でも同じ品質の作品を作れるようになる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0162",
    "unit": "情報社会",
    "field": "フェイクニュース",
    "difficulty": "★★★★",
    "question": "災害発生直後、『近くのダムが決壊した』という情報がSNSで急速に拡散した。しかし、自治体はその情報を否定した。このとき取るべき行動として最も適切なものはどれか。",
    "options": [
      "情報をさらに拡散する",
      "自治体や報道機関の発表を確認する",
      "友人に電話して確認する",
      "検索結果の上位だけを確認する"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0163",
    "unit": "情報社会",
    "field": "情報倫理",
    "difficulty": "★★★★",
    "question": "インターネット上では匿名で発言できることがあるが、情報モラルの観点から最も適切な考え方はどれか。",
    "options": [
      "匿名であれば責任は生じない",
      "現実社会と同様に発言には責任が伴う",
      "匿名であれば法律は適用されない",
      "匿名性は常に保証される"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0164",
    "unit": "情報社会",
    "field": "法律",
    "difficulty": "★★★★★",
    "question": "ある人物が、他人になりすましてSNSアカウントを作成し、誹謗中傷を行った。この行為に関係する法律として最も適切なものはどれか。",
    "options": [
      "不正アクセス禁止法",
      "著作権法",
      "特許法",
      "種苗法"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0165",
    "unit": "情報社会",
    "field": "社会の変化",
    "difficulty": "★★★★★",
    "question": "情報技術の発展が急速に進む社会において、学校教育で特に重視すべき姿勢として最も適切なものはどれか。",
    "options": [
      "現在の知識だけを暗記する",
      "変化に応じて学び続ける力を身に付ける",
      "コンピュータを使わない生活を目指す",
      "特定のソフトウェアの操作だけを学ぶ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0166",
    "unit": "情報社会",
    "field": "生成AI",
    "difficulty": "★★★★",
    "question": "ある出版社では、記事の作成支援に生成AIを導入したが、最終的な公開前には必ず編集者が内容を確認している。この理由として最も適切なものはどれか。",
    "options": [
      "生成AIが誤った情報を生成する可能性があるため",
      "生成AIは文章を作成できないため",
      "編集者がAIの動作を停止する必要があるため",
      "法律で人間による確認が義務付けられているため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0167",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★★★",
    "question": "SNSで拡散される情報について、利用者が情報源を確認する意義として最も適切なものはどれか。",
    "options": [
      "通信量を削減できるため",
      "投稿者の年齢を推測できるため",
      "情報の信頼性を判断する材料となるため",
      "広告の表示を減らせるため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0168",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★★",
    "question": "あるスマートフォンアプリは、懐中電灯機能しか持たないにもかかわらず、連絡先や位置情報へのアクセス権限を求めている。利用者が取るべき対応として最も適切なものはどれか。",
    "options": [
      "必要性を確認し、不必要な権限は許可しない",
      "すべての権限を許可する",
      "アプリを再起動する",
      "通信をオフにする"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0169",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★★★",
    "question": "匿名化されたデータであっても、他の情報と組み合わせることで個人が特定されることがある。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "匿名化によって必ず安全性が保証される",
      "個人情報は名前だけを指す",
      "データの組み合わせによる影響を考慮する必要がある",
      "インターネット上の情報は全て匿名である"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0170",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★★★★",
    "question": "AIを活用した採点システムを学校に導入する際に、特に注意すべき点として最も適切なものはどれか。",
    "options": [
      "採点速度だけを重視すること",
      "採点基準の公平性や透明性を確保すること",
      "AIによる採点結果を非公開にすること",
      "すべての教員をAIに置き換えること"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0171",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★★★★",
    "question": "AI技術の発展に伴い、一部の仕事が自動化されると考えられている。この変化に対応するために重要な能力として最も適切なものはどれか。",
    "options": [
      "単純作業を素早く繰り返す能力",
      "特定の機械だけを操作する能力",
      "変化に応じて新しい知識や技能を学び続ける能力",
      "暗記した内容を正確に再現する能力"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0172",
    "unit": "情報社会",
    "field": "フェイクニュース",
    "difficulty": "★★★★",
    "question": "SNSで『有名人が重大な事件を起こした』という情報が拡散されているが、出典が示されていない。この情報を扱う際の対応として最も適切なものはどれか。",
    "options": [
      "情報をすぐに共有する",
      "信頼できる報道機関などで事実確認を行う",
      "コメント欄の意見だけを参考にする",
      "拡散数が多いので信用する"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0173",
    "unit": "情報社会",
    "field": "情報格差",
    "difficulty": "★★★★",
    "question": "高齢者向けに行政サービスの利用方法を説明する講習会を自治体が開催している。この取り組みの目的として最も適切なものはどれか。",
    "options": [
      "通信インフラを削減するため",
      "紙媒体を廃止するため",
      "情報格差を縮小するため",
      "スマートフォンの販売を促進するため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0174",
    "unit": "情報社会",
    "field": "情報倫理",
    "difficulty": "★★★★",
    "question": "オンライン会議中に録画を行い、その動画を参加者の許可なく公開した。この行為によって問題となる可能性が高いものはどれか。",
    "options": [
      "著作権やプライバシーの侵害",
      "通信速度の低下",
      "データ圧縮率の低下",
      "記憶装置の故障"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0175",
    "unit": "情報社会",
    "field": "サイバー犯罪",
    "difficulty": "★★★★★",
    "question": "企業がサイバー攻撃対策として、定期的にバックアップを取得する理由として最も適切なものはどれか。",
    "options": [
      "停電を防ぐため",
      "ファイルの復旧を容易にするため",
      "通信量を減らすため",
      "処理速度を向上させるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0176",
    "unit": "情報社会",
    "field": "サイバー犯罪",
    "difficulty": "★★★★",
    "question": "従業員が業務で使用しているパスワードを付箋に書いて机に貼っていた。この行為の問題点として最も適切なものはどれか。",
    "options": [
      "機密情報が第三者に漏れる可能性がある",
      "データ通信量が増加する",
      "システムの処理速度が低下する",
      "ハードウェアが故障する"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0177",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★★★",
    "question": "検索エンジンやSNSでは、利用者の過去の行動履歴をもとに表示内容が変化することがある。このことによる影響として最も適切なものはどれか。",
    "options": [
      "個人情報が完全に保護される",
      "利用者が多様な意見に触れやすくなる",
      "特定の情報や価値観に偏る可能性がある",
      "検索速度が低下する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0178",
    "unit": "情報社会",
    "field": "生成AI",
    "difficulty": "★★★★★",
    "question": "生成AIの出力結果に偏りが生じる原因として最も適切なものはどれか。",
    "options": [
      "学習に用いたデータに偏りが含まれているため",
      "通信速度が不足しているため",
      "コンピュータの性能が低いため",
      "利用者の年齢が影響するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0179",
    "unit": "情報社会",
    "field": "法律",
    "difficulty": "★★★★",
    "question": "インターネット上で誹謗中傷を受けた被害者が、投稿者の情報開示を求める際に関係する法律として最も適切なものはどれか。",
    "options": [
      "著作権法",
      "不正アクセス禁止法",
      "プロバイダ責任制限法",
      "特定商取引法"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0180",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★★★",
    "question": "自動運転技術の実用化に向けて議論されている課題として最も適切なものはどれか。",
    "options": [
      "記憶媒体の容量不足",
      "事故発生時の責任や倫理的判断",
      "電子メールの管理方法",
      "Webページの表示速度"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0181",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★★★",
    "question": "友人から送られてきた『限定情報なので拡散してほしい』というメッセージを受け取った。最初に取るべき行動として最も適切なものはどれか。",
    "options": [
      "内容を確認せずに転送する",
      "送信者をブロックする",
      "情報の真偽や出典を確認する",
      "すぐにSNSへ投稿する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0182",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★★",
    "question": "位置情報サービスを利用することで得られる利便性と引き換えに発生するリスクとして最も適切なものはどれか。",
    "options": [
      "通信速度が低下する",
      "個人の行動履歴が把握される可能性がある",
      "データが自動的に削除される",
      "著作権が失われる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0183",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★★★★",
    "question": "生成AIによって誰でも容易に画像や文章を作成できるようになった社会で、今後より重要になる能力として最も適切なものはどれか。",
    "options": [
      "AIが生成した情報の真偽や意図を見極める能力",
      "手書きだけで情報を記録する能力",
      "インターネットを利用しない能力",
      "暗号方式を自作する能力"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0184",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★★",
    "question": "学校が生徒用アカウントに二要素認証を導入する主な目的として最も適切なものはどれか。",
    "options": [
      "パスワードを不要にするため",
      "ログイン速度を向上させるため",
      "不正ログインの危険性を減らすため",
      "通信量を削減するため"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0185",
    "unit": "情報社会",
    "field": "社会の変化",
    "difficulty": "★★★★★",
    "question": "情報技術が急速に変化する社会において、個人に求められる姿勢として最も適切なものはどれか。",
    "options": [
      "一度学んだ知識だけを使い続ける",
      "新しい技術や制度を継続的に学ぶ",
      "変化を避けて従来の方法だけを用いる",
      "専門家にすべてを任せる"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0186",
    "unit": "情報社会",
    "field": "生成AIと知的財産",
    "difficulty": "★★",
    "question": "生成AIが作成したコンテンツ（画像や文章など）について、現行の日本の法的解釈において「原則として著作権が発生しない」とされる主な理由はどれか。",
    "options": [
      "データサイズが大きすぎるから",
      "有料ツールを使って作られているから",
      "思想や感情を「人間」が創作的に表現したものではないから",
      "すでにインターネット上にあるデータの単なるコピーだから"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0187",
    "unit": "情報社会",
    "field": "偽情報とディープフェイク",
    "difficulty": "★★",
    "question": "SNS等で拡散される、AI技術を悪用して作られたリアルな偽の動画や音声（ディープフェイク）が、社会に与える最も重大な脅威はどれか。",
    "options": [
      "スマートフォンの通信容量を過剰に消費すること",
      "動画編集ソフトの売り上げが減少すること",
      "選挙の公平性が揺らいだり、特定の個人への名誉毀損が起きたりすること",
      "インターネットの接続速度が全国的に遅くなること"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0188",
    "unit": "情報社会",
    "field": "SNSとフィルターバブル",
    "difficulty": "★★",
    "question": "SNSのアルゴリズムがユーザーの好む情報だけを優先的に表示した結果、利用者がまるで孤立した「泡」の中にいるように、偏った情報にしか触れられなくなる現象を何というか。",
    "options": [
      "エコーチェンバー現象",
      "インフォデミック",
      "サイバーカスケード",
      "フィルターバブル現象"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0189",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "近年、スマート家電やIPカメラなどのIoT機器がサイバー攻撃の標的になりやすい理由として、最も適切なものはどれか。",
    "options": [
      "機器の本体価格がパソコンより高価だから",
      "常に人間が画面を見て操作しているから",
      "工場出荷時の初期パスワードのまま変更されずに使われているケースが多いから",
      "通信に暗号化技術を組み込むことが法律で禁止されているから"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0190",
    "unit": "情報社会",
    "field": "プライバシーの権利",
    "difficulty": "★★★",
    "question": "ヨーロッパのGDPR（一般データ保護規則）などで明文化され、インターネット上の検索結果や過去の投稿から、自分のプライバシーに関する情報の削除を求めることができる権利を何というか。",
    "options": [
      "知る権利",
      "アクセス権",
      "忘れられる権利（消去権）",
      "自己決定権"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0191",
    "unit": "情報社会",
    "field": "アテンション・エコノミー",
    "difficulty": "★★",
    "question": "SNSにおいて、広告収入や知名度（「いいね！」の数）を得るために、あえて過激な投稿や迷惑行為を行って人々の関心を引こうとする現代の経済的な歪みを表す言葉はどれか。",
    "options": [
      "シェアリング・エコノミー",
      "トークン・エコノミー",
      "ギグ・エコノミー",
      "アテンション・エコノミー（関心経済）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0192",
    "unit": "情報社会",
    "field": "デジタル・シティズンシップ",
    "difficulty": "★★",
    "question": "ICTやインターネットを「単に禁止・制限する」のではなく、社会の良き一員としてデジタルツールを善用し、主体的に社会へ参加する力を育てる教育方針を何というか。",
    "options": [
      "情報モラル教育",
      "メディアリテラシー教育",
      "eラーニング教育",
      "デジタル・シティズンシップ教育"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0193",
    "unit": "情報社会",
    "field": "個人情報保護法",
    "difficulty": "★★",
    "question": "スマートフォンのGPSによる位置情報や、電子マネーの利用履歴など、個人の移動や購買の傾向が時系列で記録された行動履歴データのことを何というか。",
    "options": [
      "仮名加工情報",
      "個人識別符号",
      "メタデータ",
      "ライフログ（行動履歴情報）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0194",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "AIを用いた採用選考や融資の審査において、学習させた過去のデータ自体に偏見が含まれていたために、特定の性別や人種が不当に落とされてしまう問題を何というか。",
    "options": [
      "AIのブラックボックス問題",
      "ハルシネーション（幻覚）",
      "AIのアルゴリズムバイアス",
      "ディープラーニングエラー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0195",
    "unit": "情報社会",
    "field": "生成AIの特性",
    "difficulty": "★★",
    "question": "生成AI（大規模言語モデル）が、事実とは異なる架空の情報や、もっともらしい嘘をまるで真実であるかのように出力してしまう現象を何というか。",
    "options": [
      "フェイクニュース",
      "ディープフェイク",
      "ハルシネーション（幻覚）",
      "ゴーストライティング"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0196",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "組織の内部ネットワーク（社内LANなど）への侵入を前提とし、すべてのアクセスに対して「誰も信頼しない」として、常に認証や監視を行う最新のセキュリティ思想はどれか。",
    "options": [
      "ファイアウォール型セキュリティ",
      "境界防御型セキュリティ",
      "ゼロトラスト・セキュリティ",
      "サンドボックス構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0197",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "企業や病院のシステムを暗号化して人質に取り、復旧と引き換えに暗号資産（仮想通貨）などで金銭を要求する、近年被害が急増しているマルウェアを何というか。",
    "options": [
      "スパイウェア",
      "アドウェア",
      "ランサムウェア",
      "トロイの木馬"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0198",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "災害時などに、SNS上で根拠のないデマや偽情報が爆発的に拡散し、社会的な混乱やパニックを引き起こす現象を感染症になぞらえて何というか。",
    "options": [
      "パンデミック",
      "バイラルマーケティング",
      "インフォデミック",
      "サイバーパンク"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0199",
    "unit": "情報社会",
    "field": "法律",
    "difficulty": "★★",
    "question": "SNS上の誹謗中傷や悪質な投稿に対し、被害者が投稿者（発信者）を特定するための手続きを迅速化・簡素化するために改正された法律はどれか。",
    "options": [
      "電気通信事業法",
      "個人情報保護法",
      "不正アクセス禁止法",
      "プロバイダ責任制限法（発信者情報開示請求）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0200",
    "unit": "情報社会",
    "field": "新しい技術",
    "difficulty": "★★",
    "question": "現実世界にある工場、都市、製品などのリアルタイムデータを、デジタル空間上にそっくりそのまま再現し、シミュレーションや予測を行う技術を何というか。",
    "options": [
      "バーチャルリアリティ（VR）",
      "メタバース",
      "拡張現実（AR）",
      "デジタルツイン"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0201",
    "unit": "情報社会",
    "field": "Web3と新しい社会",
    "difficulty": "★★★",
    "question": "特定の代表者や中央管理者が存在せず、ブロックチェーン上のスマートコントラクトによって、参加者全員が自律的に運営・意思決定を行う分散型の組織形態を何というか。",
    "options": [
      "NFTコンソーシアム",
      "メタバース・ギルド",
      "DAO（分散型自律組織）",
      "クラウドファンディング"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0202",
    "unit": "情報社会",
    "field": "ダークパターン",
    "difficulty": "★★★",
    "question": "Webサイトやアプリの画面設計において、ユーザーの心理的な隙を突き、意図しない有料プランの契約をさせたり、解約手続きをわざと複雑にしたりする不適切なデザイン手法を何というか。",
    "options": [
      "バッドUI",
      "ハザードレイアウト",
      "ダークパターン",
      "フィッシングデザイン"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0203",
    "unit": "情報社会",
    "field": "インフルエンサーの責任",
    "difficulty": "★★",
    "question": "SNS等において、企業から金銭や商品の提供（報酬）を受けてPRしているにもかかわらず、それを隠して「純粋な個人の感想」を装って商品を紹介する不適切な行為を何というか。",
    "options": [
      "バイラルマーケティング",
      "アフィリエイト広告",
      "ステルスマーケティング（ステマ）",
      "シャドープロモーション"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0204",
    "unit": "情報社会",
    "field": "知的財産権とNFT",
    "difficulty": "★★★",
    "question": "デジタルアートや音楽などのデータに、複製不可能な「唯一無二の証明書」を紐付けることで、デジタルデータに資産価値や所有権のような概念を持たせるブロックチェーン技術を何というか。",
    "options": [
      "FT（代替可能トークン）",
      "暗号資産",
      "スマートコントラクト",
      "NFT（非代替性トークン）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0205",
    "unit": "情報社会",
    "field": "クッキー（Cookie）と規制",
    "difficulty": "★★★",
    "question": "Webサイトの訪問履歴を記録する「クッキー（Cookie）」が、ユーザーの同意なく広告企業へ提供され、過剰な行動追跡に利用されることを防ぐために強化された日本の法律はどれか。",
    "options": [
      "不正アクセス禁止法",
      "プロバイダ責任制限法",
      "個人情報保護法（電気通信事業法含む）",
      "特定商取引法"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0206",
    "unit": "情報社会",
    "field": "スマートモビリティ",
    "difficulty": "★★",
    "question": "自動運転やAIを活用し、自家用車に頼らず、バス、鉄道、シェアサイクルなどの複数の移動手段をスマホ一つでシームレスに結びつける次世代の移動サービスを何というか。",
    "options": [
      "ITS（高度道路交通システム）",
      "スマートモビリティ",
      "MaaS（マース）",
      "自動運転エコシステム"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0207",
    "unit": "情報社会",
    "field": "環境とICT",
    "difficulty": "★★",
    "question": "データセンターの消費電力急増が課題となる中、IT技術そのものの省エネ化や、IT活用による社会全体の環境負荷低減を目指すアプローチを何というか。",
    "options": [
      "クリーンサイバー",
      "エコ・システム",
      "グリーンIT（グリーントランスフォーメーション / GX）",
      "サステナブルコンピューティング"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0208",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "ソフトウェアの修正プログラム（パッチ）が開発・配布されるよりも前に、その脆弱性（セキュリティの穴）を突いて行われるサイバー攻撃を何というか。",
    "options": [
      "バックドア攻撃",
      "ダークウェブ攻撃",
      "ゼロデイ攻撃",
      "バッファオーバーフロー攻撃"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0209",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "取引先企業や上司、公的機関などになりすました偽のメールを送り、心理的な隙を突いて組織の機密情報やパスワードを盗み出す手法（人間を標的にした攻撃）の総称はどれか。",
    "options": [
      "技術的攻撃",
      "マルウェア攻撃",
      "クラッキング",
      "ソーシャルエンジニアリング"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0210",
    "unit": "情報社会",
    "field": "生成AIと社会",
    "difficulty": "★★★",
    "question": "生成AIの普及により、学生が宿題やレポートの文章をすべてAIに出力させることが容易になった結果、教育現場で懸念されている最も直接的な問題はどれか。",
    "options": [
      "学校のインターネット回線がパンクすること",
      "教科書のデジタル化が遅れること",
      "タイピングスキルの低下",
      "レポート・論文評価の形骸化や思考力の低下"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0211",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "SNS上で、自分と似た意見や価値観を持つ人たちばかりと繋がることで、自分の意見が世論の多数派だと錯覚し、考えが過激化していく現象を何というか。",
    "options": [
      "インフォデミック",
      "フィルターバブル現象",
      "アテンション・エコノミー",
      "エコーチェンバー現象"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0212",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★",
    "question": "インターネット上に一度投稿・拡散された情報や画像が、デジタル空間に刻まれた「刺青（いれずみ）」のように完全に消去することが極めて困難になる現象を何というか。",
    "options": [
      "インターネットフットプリント",
      "サイバーログ",
      "ネットアンカー",
      "デジタルタトゥー"
    ],
    "answer": 4,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0213",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★",
    "question": "行政手続きのデジタル化（オンライン申請など）が急速に進む一方で、デジタル機器の操作が苦手な人が行政サービスから実質的に排除されてしまう格差問題を何というか。",
    "options": [
      "ガバメントギャップ",
      "行政スクリーニング",
      "アクセシビリティハザード",
      "デジタルデバイド（情報格差）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0214",
    "unit": "情報社会",
    "field": "デジタル庁と社会",
    "difficulty": "★",
    "question": "日本の行政手続きのデジタル化を一元的に推進し、官民のDX（デジタルトランスフォーメーション）を強力に加速させるために設置された中央省庁はどれか。",
    "options": [
      "IT戦略本部",
      "総務省情報局",
      "サイバーセキュリティセンター",
      "デジタル庁"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0215",
    "unit": "情報社会",
    "field": "ギグ・エコノミー",
    "difficulty": "★★",
    "question": "インターネット上のプラットフォーム（アプリなど）を介して、単発・短期の仕事をその都度請け負う、現代の柔軟な働き方やそれに基づく経済形態を何というか。",
    "options": [
      "シェアリングエコノミー",
      "サブスクリプションエコノミー",
      "ギグ・エコノミー",
      "フリーランス・ネットワーク"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0216",
    "unit": "情報社会",
    "field": "情報の特性",
    "difficulty": "★",
    "question": "文字・音声・画像・動画などをデジタル化してコンピュータで扱えるようにしたものを何というか。",
    "options": [
      "アナログ情報",
      "デジタル情報",
      "数値情報",
      "記録媒体"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0217",
    "unit": "情報社会",
    "field": "情報の特性",
    "difficulty": "★",
    "question": "情報が複製されても品質がほとんど劣化しないという特徴を何というか。",
    "options": [
      "蓄積性",
      "共有性",
      "複製性",
      "即時性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0218",
    "unit": "情報社会",
    "field": "情報の特性",
    "difficulty": "★★",
    "question": "SNSに投稿された情報が短時間で多数の人へ広がる現象を説明する情報の特性として最も適切なものはどれか。",
    "options": [
      "秘匿性",
      "伝播性",
      "匿名性",
      "圧縮性"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0219",
    "unit": "情報社会",
    "field": "情報の特性",
    "difficulty": "★★",
    "question": "デジタル化された情報の特徴として適切でないものはどれか。",
    "options": [
      "容易に検索できる",
      "大量に保存できる",
      "複製を繰り返すと必ず画質が劣化する",
      "ネットワークを通じて共有できる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0220",
    "unit": "情報社会",
    "field": "情報の特性",
    "difficulty": "★★★",
    "question": "紙の地図をスマートフォンの地図アプリに置き換えることで特に向上した性質として最も適切なものはどれか。",
    "options": [
      "即時性",
      "匿名性",
      "独占性",
      "閉鎖性"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0221",
    "unit": "情報社会",
    "field": "情報社会の発展",
    "difficulty": "★",
    "question": "情報通信技術を表す略称として正しいものはどれか。",
    "options": [
      "USB",
      "ICT",
      "CPU",
      "PNG"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0222",
    "unit": "情報社会",
    "field": "情報社会の発展",
    "difficulty": "★★",
    "question": "スマートフォンの普及によって人々が時間や場所を問わず情報をやり取りできるようになった。この変化を最もよく表す言葉はどれか。",
    "options": [
      "ユビキタス社会",
      "工業社会",
      "農業社会",
      "現金社会"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0223",
    "unit": "情報社会",
    "field": "情報社会の発展",
    "difficulty": "★★",
    "question": "IoTの説明として最も適切なものはどれか。",
    "options": [
      "人工知能が自動で学習する技術",
      "あらゆるモノがインターネットにつながる仕組み",
      "大容量の記憶装置",
      "仮想空間を表現する技術"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0224",
    "unit": "情報社会",
    "field": "情報社会の発展",
    "difficulty": "★★★",
    "question": "冷蔵庫が食品の残量を自動で検知しスマートフォンに通知する仕組みに最も関係が深い技術はどれか。",
    "options": [
      "VR",
      "IoT",
      "CG",
      "OCR"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0225",
    "unit": "情報社会",
    "field": "情報社会の発展",
    "difficulty": "★★★★",
    "question": "AIを利用したサービスの例として最も適切なものはどれか。",
    "options": [
      "検索履歴をもとに広告を表示する仕組み",
      "紙をコピーする機械",
      "USBメモリへの保存",
      "ディスプレイの明るさ調整"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0226",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★",
    "question": "インターネット上で相手を傷つける書き込みを行う行為として最も適切なものはどれか。",
    "options": [
      "情報共有",
      "誹謗中傷",
      "情報検索",
      "データ圧縮"
    ],
    "answer": 2,
    "correctCount": 3,
    "totalCount": 3,
    "explanation": ""
  },
  {
    "id": "Q01-0227",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★★",
    "question": "SNS上で発言する際に注意すべきこととして最も適切なものはどれか。",
    "options": [
      "匿名なら何を書いてもよい",
      "削除すれば必ず記録は消える",
      "公開範囲や内容を十分確認する",
      "友人の個人情報を自由に公開できる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0228",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★★",
    "question": "インターネット上で他人になりすまして発言する行為として最も適切なものはどれか。",
    "options": [
      "フィッシング",
      "なりすまし",
      "マイニング",
      "キャッシュ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0229",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★★★",
    "question": "SNSで拡散前に情報の真偽を確認する行動として最も適切なものはどれか。",
    "options": [
      "タイトルだけ読む",
      "複数の情報源を確認する",
      "友人の投稿をそのまま信じる",
      "拡散してから考える"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0230",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★★★★",
    "question": "匿名アカウントによる発言であっても責任が伴う理由として最も適切なものはどれか。",
    "options": [
      "通信速度が低下するため",
      "投稿履歴が一切残らないため",
      "発信者情報が特定される場合があるため",
      "AIが監視しているため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0231",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★",
    "question": "個人情報として最も適切なものはどれか。",
    "options": [
      "学校名のみ",
      "都道府県名のみ",
      "氏名と電話番号",
      "好きな色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0232",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★",
    "question": "個人情報の保護として不適切な行動はどれか。",
    "options": [
      "パスワードを使い回す",
      "必要な人だけが閲覧できるようにする",
      "個人情報を暗号化する",
      "不要になったデータを削除する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0233",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★",
    "question": "インターネットサービスで二段階認証を利用する主な目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "本人確認を強化するため",
      "広告を表示するため",
      "データを圧縮するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0234",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★",
    "question": "生徒名簿をメールで送信する際に、パスワード付きファイルにする理由として最も適切なものはどれか。",
    "options": [
      "データ容量を小さくするため",
      "誤送信時の情報漏えいリスクを下げるため",
      "印刷しやすくするため",
      "検索しやすくするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0235",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★★★★",
    "question": "学校が生徒の顔写真をWebサイトに掲載する際、特に重視すべき権利として最も適切なものはどれか。",
    "options": [
      "著作権",
      "商標権",
      "肖像権",
      "特許権"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0236",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★",
    "question": "音楽や小説などの創作物を保護する権利はどれか。",
    "options": [
      "著作権",
      "特許権",
      "商標権",
      "意匠権"
    ],
    "answer": 1,
    "correctCount": 2,
    "totalCount": 2,
    "explanation": ""
  },
  {
    "id": "Q01-0237",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★",
    "question": "新しい発明を保護する権利はどれか。",
    "options": [
      "著作権",
      "商標権",
      "特許権",
      "肖像権"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0238",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★",
    "question": "商品のロゴやブランド名を保護する権利はどれか。",
    "options": [
      "意匠権",
      "商標権",
      "著作権",
      "実用新案権"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0239",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★★",
    "question": "授業で利用したWebサイトの画像をレポートに掲載する際、最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "画像のサイズ",
      "利用条件やライセンス",
      "投稿日時",
      "ファイル形式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0240",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★★★",
    "question": "クリエイティブ・コモンズ・ライセンスの目的として最も適切なものはどれか。",
    "options": [
      "著作物の利用条件を分かりやすく示すこと",
      "著作権を廃止すること",
      "無料でのみ利用させること",
      "画像の画質を向上させること"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0241",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★",
    "question": "ニュース記事を読む際、信頼性を判断する観点として適切でないものはどれか。",
    "options": [
      "発信元を確認する",
      "複数の情報源を比較する",
      "SNSでの拡散数だけを基準にする",
      "更新日時を確認する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0242",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★",
    "question": "生成AIが作成した文章や画像を利用する際に注意すべき点として最も適切なものはどれか。",
    "options": [
      "常に正確である",
      "著作権や誤情報の可能性を確認する",
      "確認作業は不要である",
      "必ず人間より優れている"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0243",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★★★",
    "question": "SNSで大きく拡散された情報が誤りであることが後から判明した。この事例から学ぶべきこととして最も適切なものはどれか。",
    "options": [
      "拡散数が多い情報ほど正しい",
      "情報の真偽を自ら判断する必要がある",
      "削除すれば責任はなくなる",
      "匿名の情報は信用できる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0244",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "コンピュータウイルスなどの悪意あるソフトウェアの総称を何というか。",
    "options": [
      "マルウェア",
      "ウェアラブル",
      "ファームウェア",
      "シェアウェア"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0245",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "同じパスワードを複数のサービスで使い回さない理由として最も適切なものはどれか。",
    "options": [
      "入力が面倒になるため",
      "一つ漏えいすると他のサービスにも被害が及ぶため",
      "通信速度が低下するため",
      "容量が不足するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0246",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★★★",
    "question": "公共の無線LANを利用する際に特に注意すべきこととして最も適切なものはどれか。",
    "options": [
      "機密情報の送受信を避ける",
      "必ず速度を測定する",
      "長時間接続する",
      "画面を明るくする"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0247",
    "unit": "情報社会",
    "field": "セキュリティ",
    "difficulty": "★★★★",
    "question": "企業がサイバー攻撃対策として定期的にソフトウェアを更新する主な理由として最も適切なものはどれか。",
    "options": [
      "新しい機能だけを追加するため",
      "脆弱性を修正するため",
      "容量を増やすため",
      "広告を表示するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0248",
    "unit": "情報社会",
    "field": "時事問題",
    "difficulty": "★★★★",
    "question": "近年、生成AIの普及に伴って特に問題視されている課題として最も適切なものはどれか。",
    "options": [
      "通信規格の統一",
      "誤情報や著作権侵害の可能性",
      "CPUの小型化",
      "画面解像度の向上"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0249",
    "unit": "情報社会",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "ディープフェイク技術によって生じる問題として最も適切なものはどれか。",
    "options": [
      "データ通信量が減少する",
      "現実には存在しない映像が本物のように作られる",
      "記憶装置の容量が増える",
      "Webサイトの表示速度が向上する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0250",
    "unit": "情報社会",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "ある生徒がSNSで見つけた「災害発生」の情報を家族に伝えようとしている。最初に取るべき行動として最も適切なものはどれか。",
    "options": [
      "すぐに拡散する",
      "コメント欄を確認する",
      "公的機関や報道機関の情報を確認する",
      "既読数を確認する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0251",
    "unit": "情報社会",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "学校でアンケート結果を公開することになった。個人情報を保護しながら結果を共有する方法として最も適切なものはどれか。",
    "options": [
      "氏名付きで公開する",
      "回答内容をそのまま掲載する",
      "個人が特定できない形で集計して公開する",
      "全員の住所を削除するだけにする"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0252",
    "unit": "情報社会",
    "field": "情報モラル（練習）",
    "difficulty": "★★",
    "question": "SNSに写真を投稿する際、友人が写っている場合に最も適切な行動はどれか。",
    "options": [
      "すぐに投稿する",
      "友人に知らせず投稿する",
      "顔を隠さず投稿する",
      "友人の許可を得てから投稿する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0253",
    "unit": "情報社会",
    "field": "情報モラル（練習）",
    "difficulty": "★★",
    "question": "インターネット上で発信した情報について最も適切な説明はどれか。",
    "options": [
      "一度削除すれば完全に消える",
      "発信者だけが閲覧できる",
      "一定時間で自動的に消える",
      "拡散すると完全に消すことが難しい"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0254",
    "unit": "情報社会",
    "field": "メディアリテラシー（練習）",
    "difficulty": "★★",
    "question": "インターネット上の記事を読む際に情報の信頼性を高める確認方法として最も適切なものはどれか。",
    "options": [
      "最初に見つけた記事だけを読む",
      "閲覧数だけを見る",
      "SNSの投稿数だけを見る",
      "複数の情報源を比較する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0255",
    "unit": "情報社会",
    "field": "メディアリテラシー（練習）",
    "difficulty": "★★",
    "question": "ニュースサイトで見つけた情報が正しいか判断するために最も重要な観点はどれか。",
    "options": [
      "掲載されている広告の数",
      "情報源や根拠の確認",
      "文字の大きさ",
      "サイトの色使い"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0256",
    "unit": "情報社会",
    "field": "知的財産権（練習）",
    "difficulty": "★★",
    "question": "インターネット上の画像をレポートに利用する際,最も適切な行動はどれか。",
    "options": [
      "無断で転載する",
      "自由に加工して使用する",
      "出典を削除する",
      "出典を確認する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0257",
    "unit": "情報社会",
    "field": "知的財産権（練習）",
    "difficulty": "★★",
    "question": "クリエイティブ・コモンズ・ライセンスの付いた作品を利用する際、最初に確認すべき内容として最も適切なものはどれか。",
    "options": [
      "作品の容量",
      "公開日",
      "作者の年齢",
      "ライセンス条件"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0258",
    "unit": "情報社会",
    "field": "個人情報（練習）",
    "difficulty": "★★",
    "question": "次のうち単独では個人情報に当たらないものはどれか。",
    "options": [
      "氏名",
      "生年月日と氏名の組み合わせ",
      "学籍番号",
      "都道府県名のみ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0259",
    "unit": "情報社会",
    "field": "個人情報（練習）",
    "difficulty": "★★",
    "question": "学校のアンケート結果を公表する際、個人が特定されないように加工した情報を何というか。",
    "options": [
      "秘密情報",
      "暗号化情報",
      "個人情報",
      "匿名加工情報"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0260",
    "unit": "情報社会",
    "field": "情報セキュリティ（練習）",
    "difficulty": "★★",
    "question": "同じパスワードを複数のサービスで使い回すことが危険な理由として最も適切なものはどれか。",
    "options": [
      "入力に時間がかかるため",
      "1つ漏えいすると他のサービスにも不正ログインされる可能性があるため",
      "通信速度が低下するため",
      "容量を圧迫するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0261",
    "unit": "情報社会",
    "field": "情報セキュリティ（練習）",
    "difficulty": "★★",
    "question": "二段階認証を利用する主な目的として最も適切なものはどれか。",
    "options": [
      "通信量を減らすため",
      "不正ログインを防ぐため",
      "通信速度を向上させるため",
      "広告を減らすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0262",
    "unit": "情報社会",
    "field": "情報社会の課題（演習）",
    "difficulty": "★★★",
    "question": "自治体が行政手続きをオンライン化した結果、高齢者の一部が利用しづらくなった。この問題として最も適切なものはどれか。",
    "options": [
      "著作権侵害",
      "匿名加工",
      "フィッシング",
      "情報格差（デジタルデバイド）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0263",
    "unit": "情報社会",
    "field": "情報社会の課題（演習）",
    "difficulty": "★★★",
    "question": "AIによって作成された文章や画像が広く利用されるようになった社会において特に重要となる能力はどれか。",
    "options": [
      "タイピング速度",
      "計算能力",
      "暗記力",
      "メディアリテラシー"
    ],
    "answer": 4,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0264",
    "unit": "情報社会",
    "field": "メディアリテラシー（演習）",
    "difficulty": "★★★",
    "question": "SNSで拡散されている災害情報について真偽を確かめるために最も適切な行動はどれか。",
    "options": [
      "投稿者を信頼する",
      "コメント数を見る",
      "拡散数を見る",
      "公的機関の発表を確認する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0265",
    "unit": "情報社会",
    "field": "情報モラル（演習）",
    "difficulty": "★★★",
    "question": "チャットグループで特定の生徒の悪口が投稿されているのを見つけた。このとき最も適切な対応はどれか。",
    "options": [
      "自分も参加する",
      "内容を保存して信頼できる大人に相談する",
      "無関係な人へ転送する",
      "面白半分で拡散する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0266",
    "unit": "情報社会",
    "field": "著作権（演習）",
    "difficulty": "★★★",
    "question": "学校祭の動画をインターネットで公開する際、市販の音楽を無断でBGMとして利用した。この行為に関係する権利として最も適切なものはどれか。",
    "options": [
      "肖像権のみ",
      "著作権のみ",
      "商標権",
      "著作権や著作隣接権"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0267",
    "unit": "情報社会",
    "field": "知的財産権（演習）",
    "difficulty": "★★★",
    "question": "ある企業が商品の名前やロゴを独占的に利用するために取得する権利として最も適切なものはどれか。",
    "options": [
      "特許権",
      "著作権",
      "商標権",
      "意匠権"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0268",
    "unit": "情報社会",
    "field": "個人情報（演習）",
    "difficulty": "★★★",
    "question": "位置情報アプリが収集したデータを分析する際、利用者のプライバシー保護のために最も重要なことはどれか。",
    "options": [
      "データ量を増やすこと",
      "保存期間を延ばすこと",
      "すべて公開すること",
      "個人を特定できない形で扱うこと"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0269",
    "unit": "情報社会",
    "field": "情報社会の課題（演習）",
    "difficulty": "★★★",
    "question": "インターネット上で誰でも自由に発信できる社会の利点として最も適切なものはどれか。",
    "options": [
      "誤情報がなくなる",
      "多様な意見を共有できる",
      "著作権が不要になる",
      "情報の真偽を確認する必要がなくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0270",
    "unit": "情報社会",
    "field": "AIと社会（応用）",
    "difficulty": "★★★★",
    "question": "生成AIによる文章作成サービスを利用してレポートを提出する際、利用者に最も求められる態度はどれか。",
    "options": [
      "AIの出力をそのまま提出する",
      "AIの出力を暗記する",
      "AIの利用を隠す",
      "内容の正確性や妥当性を確認する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0271",
    "unit": "情報社会",
    "field": "AIと社会（応用）",
    "difficulty": "★★★★",
    "question": "生成AIによる画像生成技術が普及したことで特に問題となる可能性が高いものはどれか。",
    "options": [
      "通信速度の低下",
      "ハードウェアの故障",
      "IPアドレス不足",
      "著作権や肖像権の侵害"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0272",
    "unit": "情報社会",
    "field": "メディアリテラシー（応用）",
    "difficulty": "★★★★",
    "question": "あるニュース記事についてA社のみが報道している内容と、複数の報道機関が共通して伝えている内容がある。情報の信頼性を判断する際により重視すべきものはどれか。",
    "options": [
      "記事の長さ",
      "A社独自の内容",
      "掲載日時",
      "複数の報道機関が一致して伝えている内容"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0273",
    "unit": "情報社会",
    "field": "情報社会の課題（応用）",
    "difficulty": "★★★★",
    "question": "AIによる自動運転技術が普及した社会で新たに生じる課題として最も適切なものはどれか。",
    "options": [
      "印刷技術の衰退",
      "通信速度の低下",
      "手書き文化の発展",
      "事故発生時の責任の所在"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0274",
    "unit": "情報社会",
    "field": "情報社会の課題（応用）",
    "difficulty": "★★★★",
    "question": "企業が大量の利用者データを分析してサービスを改善する際、特に重視すべきことはどれか。",
    "options": [
      "データを無期限に保存すること",
      "すべてのデータを公開すること",
      "利用者に通知しないこと",
      "利用目的を明確にし、適切に管理すること"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0275",
    "unit": "情報社会",
    "field": "情報モラル（応用）",
    "difficulty": "★★★★",
    "question": "匿名で投稿できるSNSで他人を中傷する書き込みをした場合、最も適切な説明はどれか。",
    "options": [
      "匿名であれば責任を問われない",
      "法律は適用されない",
      "一定期間後に自動的に削除される",
      "発信者情報の開示によって特定される場合がある"
    ],
    "answer": 4,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0276",
    "unit": "情報社会",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある自治体が防災情報をSNSと自治体サイトの両方で発信している。SNSでは拡散が速い一方、誤情報も広まりやすい。この状況で住民が取るべき行動として最も適切なものはどれか。",
    "options": [
      "SNSの情報だけを信頼する",
      "投稿日時を無視する",
      "拡散数だけを参考にする",
      "自治体の公式発表を確認する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0277",
    "unit": "情報社会",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある学校では生徒が生成AIを用いてレポートを作成することを認めている。ただしその内容に誤りが含まれていた場合、責任を負うべき主体として最も適切なものはどれか。",
    "options": [
      "AIの開発者のみ",
      "学校のみ",
      "インターネット事業者",
      "利用した生徒自身"
    ],
    "answer": 4,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0278",
    "unit": "情報社会",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "SNS上で話題となった商品のレビューを分析したところ極端に高評価または低評価の投稿が短時間に集中していた。この状況から最初に疑うべきこととして最も適切なものはどれか。",
    "options": [
      "商品の品質向上",
      "著作権侵害",
      "通信障害",
      "意図的な情報操作やステルスマーケティング"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0279",
    "unit": "情報社会",
    "field": "大学入試レベル（思考問題）",
    "difficulty": "★★★★★",
    "question": "災害時にSNS上で「避難所が閉鎖された」という情報が拡散している。しかし自治体の公式サイトでは閉鎖の情報は確認できなかった。このとき最も適切な行動はどれか。",
    "options": [
      "SNSの情報をさらに拡散する",
      "公式機関の追加情報を確認する",
      "SNSの投稿者へ個人情報を送る",
      "真偽を確かめず避難を中止する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0280",
    "unit": "情報社会",
    "field": "大学入試レベル（思考問題）",
    "difficulty": "★★★★★",
    "question": "企業が利用者の購買履歴を分析し、おすすめ商品を表示するシステムを導入した。このシステムの利便性と引き換えに生じる課題として最も適切なものはどれか。",
    "options": [
      "通信速度の低下",
      "IPアドレスの不足",
      "著作権の消滅",
      "プライバシー保護"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0281",
    "unit": "情報社会",
    "field": "メディアリテラシー（演習）",
    "difficulty": "★★★",
    "question": "あるニュースサイトの記事には「専門家によると」とだけ書かれており、専門家の氏名や所属は示されていなかった。この情報を評価する際に最も重要な観点はどれか。",
    "options": [
      "記事の文字数",
      "広告の数",
      "掲載された時刻",
      "専門家の具体的な情報源"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0282",
    "unit": "情報社会",
    "field": "情報モラル（演習）",
    "difficulty": "★★★",
    "question": "クラスメイトが撮影した写真をグループチャットで受け取った。その写真を別の友人へ送信する前に最も確認すべきことはどれか。",
    "options": [
      "画像の画質",
      "撮影者や被写体の同意",
      "ファイルサイズ",
      "送信回数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0283",
    "unit": "情報社会",
    "field": "著作権（演習）",
    "difficulty": "★★★",
    "question": "文化祭のポスターを作成する際、インターネット上の画像を利用したい。著作権侵害の可能性を最も小さくする方法はどれか。",
    "options": [
      "出典を書かずに縮小して使う",
      "作者名だけ削除して使用する",
      "色を変更して使用する",
      "利用条件が明示された素材を使用する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0284",
    "unit": "情報社会",
    "field": "情報社会の課題（演習）",
    "difficulty": "★★★",
    "question": "自治体が手続きをオンライン化したところ一部の住民が利用できなかった。この問題を解決する方策として最も適切なものはどれか。",
    "options": [
      "窓口を完全に廃止する",
      "紙の資料を禁止する",
      "利用料金を値上げする",
      "利用方法を支援する講習会を実施する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0285",
    "unit": "情報社会",
    "field": "個人情報（演習）",
    "difficulty": "★★★",
    "question": "ある企業が利用者の購買履歴を分析する際、個人情報保護の観点から最も適切な対応はどれか。",
    "options": [
      "すべて公開する",
      "利用者に知らせず共有する",
      "無期限に保存する",
      "利用目的を明示する"
    ],
    "answer": 4,
    "correctCount": 3,
    "totalCount": 3,
    "explanation": ""
  },
  {
    "id": "Q01-0286",
    "unit": "情報社会",
    "field": "情報モラル（演習）",
    "difficulty": "★★★",
    "question": "SNSで友人が誤った情報を拡散していた。最も適切な対応はどれか。",
    "options": [
      "何も確認せず拡散する",
      "公開の場で非難する",
      "信頼できる情報源を示して伝える",
      "別の誤情報を流す"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0287",
    "unit": "情報社会",
    "field": "知的財産権（演習）",
    "difficulty": "★★★",
    "question": "企業が長年使用してきた商品のロゴマークを他社に無断使用されないようにするため取得する権利はどれか。",
    "options": [
      "著作権",
      "商標権",
      "特許権",
      "意匠権"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0288",
    "unit": "情報社会",
    "field": "メディアリテラシー（演習）",
    "difficulty": "★★★",
    "question": "動画投稿サイトで「〇〇を食べるだけで病気が治る」という内容が拡散されている。この情報に接した際の行動として最も適切なものはどれか。",
    "options": [
      "再生回数を根拠に信じる",
      "公的機関や専門家の情報を確認する",
      "家族全員に勧める",
      "コメント欄だけを参考にする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0289",
    "unit": "情報社会",
    "field": "情報社会の課題（演習）",
    "difficulty": "★★★",
    "question": "生成AIが作成した文章をニュース記事として公開する場合、特に注意すべきことはどれか。",
    "options": [
      "通信速度",
      "画像の解像度",
      "文字数",
      "内容の正確性"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0290",
    "unit": "情報社会",
    "field": "肖像権（演習）",
    "difficulty": "★★★",
    "question": "学校行事の様子を紹介する動画を公開する際、特に配慮が必要な権利はどれか。",
    "options": [
      "商標権",
      "実用新案権",
      "特許権",
      "肖像権"
    ],
    "answer": 4,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0291",
    "unit": "情報社会",
    "field": "情報社会の課題（応用）",
    "difficulty": "★★★★",
    "question": "ある自治体ではAIを用いて住民からの問い合わせに自動応答している。一方で、複雑な相談には職員が対応している。このような運用を行う理由として最も適切なものはどれか。",
    "options": [
      "AIは通信速度を低下させるため",
      "AIは個人情報を扱えないため",
      "AIは法律で禁止されているため",
      "AIだけでは適切に判断できない場合があるため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0292",
    "unit": "情報社会",
    "field": "個人情報（応用）",
    "difficulty": "★★★★",
    "question": "スマートフォンの位置情報を利用したサービスを提供する企業が利用者の信頼を得るために最も重要なことはどれか。",
    "options": [
      "取得する情報を増やす",
      "常に位置情報を公開する",
      "データを第三者へ自由に提供する",
      "利用目的や管理方法を明確にする"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0293",
    "unit": "情報社会",
    "field": "情報モラル（応用）",
    "difficulty": "★★★★",
    "question": "匿名で利用できる掲示板に他人を誹謗中傷する書き込みがあった。この書き込みについて最も適切な説明はどれか。",
    "options": [
      "匿名であれば法的責任は発生しない",
      "削除されれば責任は消える",
      "発信者情報の開示請求によって特定される場合がある",
      "海外のサービスなら法律は適用されない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0294",
    "unit": "情報社会",
    "field": "メディアリテラシー（応用）",
    "difficulty": "★★★★",
    "question": "ある出来事についてA社・B社・C社の報道内容が異なっていた。情報を適切に判断する方法として最も適切なものはどれか。",
    "options": [
      "最初に読んだ記事だけを信じる",
      "複数の情報源を比較し、共通点や相違点を確認する",
      "最も長い記事を信じる",
      "動画だけを見る"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0295",
    "unit": "情報社会",
    "field": "著作権（応用）",
    "difficulty": "★★★★",
    "question": "生成AIに既存のイラスト作品を大量に学習させ、新しい画像を作成した。この技術の普及によって生じる課題として最も適切なものはどれか。",
    "options": [
      "通信速度の低下",
      "著作権侵害の可能性",
      "インターネットの消滅",
      "情報格差の解消"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0296",
    "unit": "情報社会",
    "field": "情報社会の課題（応用）",
    "difficulty": "★★★★",
    "question": "学校が授業資料を完全に電子化した結果、一部の生徒が十分に学習できなくなった。この問題に最も関係が深いものはどれか。",
    "options": [
      "デジタルデバイド",
      "著作隣接権",
      "特許制度",
      "公開鍵暗号方式"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0297",
    "unit": "情報社会",
    "field": "AIと社会（応用）",
    "difficulty": "★★★★",
    "question": "企業が採用活動にAIを利用する場合、特に注意すべき課題として最も適切なものはどれか。",
    "options": [
      "処理速度が速すぎること",
      "学習データの偏りによる不公平な判断",
      "通信量の増加",
      "記憶容量の不足"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0298",
    "unit": "情報社会",
    "field": "AIと社会（応用）",
    "difficulty": "★★★★",
    "question": "生成AIが作成したレポートをそのまま提出することが望ましくない理由として最も適切なものはどれか。",
    "options": [
      "文章量が多くなるため",
      "誤情報や偏りが含まれる可能性があるため",
      "ファイルサイズが大きくなるため",
      "印刷できないため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0299",
    "unit": "情報社会",
    "field": "メディアリテラシー（応用）",
    "difficulty": "★★★★",
    "question": "SNSのおすすめ機能によって自分と似た意見ばかりが表示される現象を説明したものとして最も適切なのはどれか。",
    "options": [
      "オープンデータ",
      "フィルターバブル",
      "デジタルタトゥー",
      "クラウドコンピューティング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0300",
    "unit": "情報社会",
    "field": "情報社会の課題（応用）",
    "difficulty": "★★★★",
    "question": "行政機関が防災情報を発信する際、SNSと公式サイトの両方を活用する理由として最も適切なものはどれか。",
    "options": [
      "両者の長所を組み合わせるため",
      "SNSだけでは法律上問題があるため",
      "公式サイトは検索できないため",
      "SNSの方が必ず正確だから"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0301",
    "unit": "情報社会",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある企業は利用者の閲覧履歴を分析して広告を表示している。一方で、利用者からは「監視されているようで不安だ」という意見も出ている。この事例から考えられる課題として最も適切なものはどれか。",
    "options": [
      "通信速度の低下",
      "プライバシー保護との両立",
      "著作権の消滅",
      "情報機器の不足"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0302",
    "unit": "情報社会",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "災害発生時にSNS上で「〇〇地区の橋が崩落した」という投稿が拡散した。しかし自治体の公式発表にはその情報がなかった。住民が取るべき行動として最も適切なものはどれか。",
    "options": [
      "SNSの情報を優先する",
      "追加の情報源を確認する",
      "情報を拡散して注意喚起する",
      "自治体サイトを無視する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0303",
    "unit": "情報社会",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "学校で生成AIを利用した課題提出が認められた。このとき生徒に最も求められる姿勢として適切なものはどれか。",
    "options": [
      "AIの出力をそのまま提出する",
      "AIが誤ることはないと考える",
      "AIの利用を隠す",
      "AIの出力を検証し、自分の考えを加える"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0304",
    "unit": "情報社会",
    "field": "大学入試レベル（思考問題）",
    "difficulty": "★★★★★",
    "question": "ある自治体は高齢者向けにスマートフォン講習会を実施した。その目的として最も適切なものはどれか。",
    "options": [
      "通信量を削減するため",
      "情報格差を小さくするため",
      "個人情報を収集するため",
      "紙媒体を廃止するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0305",
    "unit": "情報社会",
    "field": "大学入試レベル（思考問題）",
    "difficulty": "★★★★★",
    "question": "生成AIによって作成された画像が選挙期間中にSNSで拡散された。利用者が特に注意すべき点として最も適切なものはどれか。",
    "options": [
      "画像の容量",
      "画像の真偽や出典",
      "投稿者のフォロワー数",
      "画面の明るさ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0306",
    "unit": "情報社会",
    "field": "大学入試レベル（思考問題）",
    "difficulty": "★★★★★",
    "question": "SNS事業者が誹謗中傷の投稿をAIで自動検出して削除する仕組みを導入した。この仕組みの課題として最も適切なものはどれか。",
    "options": [
      "通信速度が必ず低下する",
      "適切な投稿まで誤って削除される可能性がある",
      "個人情報が不要になる",
      "著作権侵害がなくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0307",
    "unit": "情報社会",
    "field": "情報モラル（練習）",
    "difficulty": "★★",
    "question": "友人から「まだ公開していないテスト範囲表」の写真が送られてきた。このとき最も適切な行動はどれか。",
    "options": [
      "他の友人にも転送する",
      "SNSに投稿する",
      "先生に確認する",
      "画像を加工して公開する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0308",
    "unit": "情報社会",
    "field": "情報モラル（練習）",
    "difficulty": "★★",
    "question": "インターネット上で知り合った相手と会う約束をした。最も適切な対応はどれか。",
    "options": [
      "誰にも相談せず会う",
      "個人情報を送ってから会う",
      "保護者や信頼できる大人に相談する",
      "夜遅い時間に会う"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0309",
    "unit": "情報社会",
    "field": "情報モラル（練習）",
    "difficulty": "★★",
    "question": "SNSで意見を書き込む際に最も重要なことはどれか。",
    "options": [
      "感情的に反論する",
      "匿名なら自由に発言する",
      "相手への配慮を忘れない",
      "拡散数を増やす"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0310",
    "unit": "情報社会",
    "field": "メディアリテラシー（練習）",
    "difficulty": "★★",
    "question": "ある記事に「専門家の研究で証明された」と書かれていた。内容を確認するために最初に見るべきものはどれか。",
    "options": [
      "広告の数",
      "研究の出典",
      "閲覧数",
      "コメント数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0311",
    "unit": "情報社会",
    "field": "メディアリテラシー（練習）",
    "difficulty": "★★",
    "question": "SNSで「今だけ無料配布」という情報を見つけた。最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "投稿時刻",
      "情報の発信元",
      "画像の色",
      "コメントの長さ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0312",
    "unit": "情報社会",
    "field": "著作権（練習）",
    "difficulty": "★★",
    "question": "インターネット上で見つけたイラストをレポートに利用する際、最も重要な確認事項はどれか。",
    "options": [
      "ファイル形式",
      "画像サイズ",
      "利用条件",
      "ダウンロード回数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0313",
    "unit": "情報社会",
    "field": "著作権（練習）",
    "difficulty": "★★",
    "question": "著作権法上、保護される対象として最も適切なものはどれか。",
    "options": [
      "歴史上の事実",
      "数式そのもの",
      "小説の文章",
      "自然現象"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0314",
    "unit": "情報社会",
    "field": "知的財産権（練習）",
    "difficulty": "★★",
    "question": "商品のデザインを保護する権利として最も適切なものはどれか。",
    "options": [
      "特許権",
      "商標権",
      "意匠権",
      "著作権"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0315",
    "unit": "情報社会",
    "field": "知的財産権（練習）",
    "difficulty": "★★",
    "question": "新しい技術的発明を保護する権利として最も適切なものはどれか。",
    "options": [
      "著作権",
      "特許権",
      "意匠権",
      "商標権"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0316",
    "unit": "情報社会",
    "field": "個人情報（練習）",
    "difficulty": "★★",
    "question": "次のうち個人情報に該当する可能性が最も高いものはどれか。",
    "options": [
      "学校名のみ",
      "都道府県名のみ",
      "顔写真と氏名",
      "教科書名"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0317",
    "unit": "情報社会",
    "field": "個人情報（練習）",
    "difficulty": "★★",
    "question": "SNSに投稿した写真から住所が特定されることがある主な理由はどれか。",
    "options": [
      "写真の画質が高いため",
      "位置情報や背景が含まれるため",
      "投稿数が多いため",
      "通信速度が速いため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0318",
    "unit": "情報社会",
    "field": "セキュリティ（練習）",
    "difficulty": "★★",
    "question": "パスワードの管理方法として最も適切なものはどれか。",
    "options": [
      "すべて同じものを使う",
      "紙に書いて公開する",
      "サービスごとに異なるものを設定する",
      "誕生日だけを使う"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0319",
    "unit": "情報社会",
    "field": "セキュリティ（練習）",
    "difficulty": "★★",
    "question": "スマートフォンに画面ロックを設定する目的として最も適切なものはどれか。",
    "options": [
      "通信量を減らすため",
      "不正利用を防ぐため",
      "電池消費を抑えるため",
      "容量を増やすため"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0320",
    "unit": "情報社会",
    "field": "情報社会の課題（練習）",
    "difficulty": "★★",
    "question": "インターネット環境の有無によって生じる格差を何というか。",
    "options": [
      "フィルターバブル",
      "デジタルデバイド",
      "クラウド化",
      "サイバー攻撃"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0321",
    "unit": "情報社会",
    "field": "情報社会の課題（練習）",
    "difficulty": "★★",
    "question": "AIを利用する際に特に注意すべきことはどれか。",
    "options": [
      "AIは必ず正しいと考える",
      "AIの出力を確認する",
      "AIの利用履歴を削除する",
      "AIを使わないようにする"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0322",
    "unit": "情報社会",
    "field": "メディアリテラシー（演習）",
    "difficulty": "★★★",
    "question": "SNS上で「○○を飲めば必ず痩せる」という投稿が拡散されている。この情報に対して最も適切な行動はどれか。",
    "options": [
      "拡散する",
      "専門家や公的機関の情報を確認する",
      "家族に勧める",
      "広告をクリックする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0323",
    "unit": "情報社会",
    "field": "情報モラル（演習）",
    "difficulty": "★★★",
    "question": "グループチャットで特定の人物をからかうスタンプが大量に送られていた。最も適切な対応はどれか。",
    "options": [
      "面白がって参加する",
      "スクリーンショットを公開する",
      "信頼できる大人に相談する",
      "別のグループを作る"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0324",
    "unit": "情報社会",
    "field": "情報モラル（演習）",
    "difficulty": "★★★",
    "question": "動画配信サービスで他人が制作した動画を無断転載した場合、侵害する可能性が最も高い権利はどれか。",
    "options": [
      "肖像権のみ",
      "著作権",
      "特許権",
      "商標権"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0325",
    "unit": "情報社会",
    "field": "知的財産権（演習）",
    "difficulty": "★★★",
    "question": "ある企業が開発した新技術の内容を公開する代わりに一定期間独占的に利用できる制度はどれか。",
    "options": [
      "意匠登録",
      "商標登録",
      "特許制度",
      "実名登録"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0326",
    "unit": "情報社会",
    "field": "個人情報（演習）",
    "difficulty": "★★★",
    "question": "企業が利用者データを分析する際、プライバシー保護の観点から最も適切な方法はどれか。",
    "options": [
      "個人名を公開する",
      "匿名化して利用する",
      "すべて削除する",
      "自由に第三者へ提供する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0327",
    "unit": "情報社会",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "フィッシングメールを見分ける方法として最も適切なものはどれか。",
    "options": [
      "差出人やURLを確認する",
      "すぐにリンクを開く",
      "本文の長さを見る",
      "添付ファイルを保存する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0328",
    "unit": "情報社会",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "公共のWi-Fiを利用する際に注意すべきこととして最も適切なものはどれか。",
    "options": [
      "個人情報を含む通信を避ける",
      "必ず動画を見る",
      "長時間接続する",
      "パスワードを共有する"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0329",
    "unit": "情報社会",
    "field": "情報社会の課題（演習）",
    "difficulty": "★★★",
    "question": "AIが作成した画像が本物の写真としてSNSで拡散された。この問題に最も関係する能力はどれか。",
    "options": [
      "計算能力",
      "メディアリテラシー",
      "運動能力",
      "暗記力"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0330",
    "unit": "情報社会",
    "field": "情報社会の課題（演習）",
    "difficulty": "★★★",
    "question": "ネット通販サイトが利用者の購入履歴をもとに商品を推薦している。この仕組みの利点として最も適切なものはどれか。",
    "options": [
      "通信量が減る",
      "利用者の興味に合った商品を提示できる",
      "個人情報が不要になる",
      "在庫が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0331",
    "unit": "情報社会",
    "field": "メディアリテラシー（演習）",
    "difficulty": "★★★",
    "question": "複数のニュースサイトで同じ出来事について異なる内容が報じられている。このとき最も適切な対応はどれか。",
    "options": [
      "最初に読んだ記事だけを信じる",
      "複数の情報源を比較する",
      "最も短い記事を信じる",
      "コメント欄だけを確認する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0332",
    "unit": "情報社会",
    "field": "情報モラル（演習）",
    "difficulty": "★★★",
    "question": "匿名掲示板で誹謗中傷を書き込んだ場合について最も適切な説明はどれか。",
    "options": [
      "匿名なら責任は発生しない",
      "投稿後すぐに削除すれば問題ない",
      "発信者が特定される可能性がある",
      "海外サイトなら法律は適用されない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0333",
    "unit": "情報社会",
    "field": "著作権（演習）",
    "difficulty": "★★★",
    "question": "学校紹介動画を作成する際、市販の音楽を利用したい。最も適切な対応はどれか。",
    "options": [
      "無断で利用する",
      "著作権者の許諾や利用条件を確認する",
      "曲名だけ記載する",
      "音量を下げて利用する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0334",
    "unit": "情報社会",
    "field": "情報社会の課題（演習）",
    "difficulty": "★★★",
    "question": "高齢者向けにスマートフォン教室を開催する主な目的はどれか。",
    "options": [
      "情報格差を小さくするため",
      "通信速度を上げるため",
      "機器の価格を下げるため",
      "データ容量を増やすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0335",
    "unit": "情報社会",
    "field": "AIと社会（演習）",
    "difficulty": "★★★",
    "question": "生成AIを利用してレポートを作成する際、最も適切な姿勢はどれか。",
    "options": [
      "出力をそのまま提出する",
      "内容を検証して利用する",
      "AIの使用を隠す",
      "AIにすべて任せる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0336",
    "unit": "情報社会",
    "field": "AIと社会（演習）",
    "difficulty": "★★★",
    "question": "生成AIが学習データの偏りを受け継ぐことで生じる問題として最も適切なものはどれか。",
    "options": [
      "通信障害",
      "不公平な判断",
      "データ容量不足",
      "著作権消滅"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0337",
    "unit": "情報社会",
    "field": "情報の信頼性",
    "difficulty": "★",
    "question": "生成AIが作成した記事を読む際、最も適切な行動はどれか。",
    "options": [
      "複数の情報源と比較して確認する",
      "文章が長ければ信用する",
      "画像があれば信用する",
      "SNSで拡散されていれば信用する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0338",
    "unit": "情報社会",
    "field": "デジタル市民",
    "difficulty": "★",
    "question": "インターネット上で発言する際、匿名であっても求められるものとして最も適切なものはどれか。",
    "options": [
      "通信速度",
      "画面解像度",
      "責任ある行動",
      "記憶容量"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0339",
    "unit": "情報社会",
    "field": "情報共有",
    "difficulty": "★",
    "question": "災害時に自治体が公式SNSを運用する主な目的として最も適切なものはどれか。",
    "options": [
      "広告収入を得るため",
      "職員の作業を増やすため",
      "利用者数を競うため",
      "正確な情報を迅速に伝えるため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0340",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★",
    "question": "生成AIで作成したレポートをそのまま提出することについて、最も適切な考え方はどれか。",
    "options": [
      "AIが作成したものは自由に提出できる",
      "友人が許可すれば問題ない",
      "学校や課題のルールを確認する必要がある",
      "教師には判別できないため問題ない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0341",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★",
    "question": "あるニュースがSNSで急速に拡散されている。しかし、発信元が不明である場合、まず行うべきことはどれか。",
    "options": [
      "すぐに共有する",
      "コメント欄を閉じる",
      "端末を再起動する",
      "情報源を確認する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0342",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★",
    "question": "ある自治体が生成AIによる問い合わせ対応を導入した。人間の職員を残す理由として最も適切なものはどれか。",
    "options": [
      "AIは電力を消費しないから",
      "AIは文字を扱えないから",
      "複雑な判断や責任が必要な場面があるから",
      "AIは通信できないから"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0343",
    "unit": "情報社会",
    "field": "個人情報保護",
    "difficulty": "★★",
    "question": "健康管理アプリが利用者の位置情報や睡眠データを収集している。利用者が最初に確認すべきものはどれか。",
    "options": [
      "画面の色",
      "端末の価格",
      "アプリの利用規約やプライバシーポリシー",
      "CPUの種類"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0344",
    "unit": "情報社会",
    "field": "デジタル・ディバイド",
    "difficulty": "★★",
    "question": "行政手続きのオンライン化が進んだ結果、高齢者の一部がサービスを利用できなかった。この問題に最も関係するものはどれか。",
    "options": [
      "著作権侵害",
      "サイバー攻撃",
      "データ圧縮",
      "情報格差（デジタル・ディバイド）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0345",
    "unit": "情報社会",
    "field": "情報発信",
    "difficulty": "★★",
    "question": "学校の公式アカウントを運営する際、不適切な投稿を防ぐ方法として最も有効なものはどれか。",
    "options": [
      "投稿内容を複数人で確認する",
      "投稿回数を増やす",
      "写真の枚数を減らす",
      "文字数を増やす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0346",
    "unit": "情報社会",
    "field": "AI倫理",
    "difficulty": "★★",
    "question": "AIによる採用システムが特定の地域の応募者を不利に評価していた。この原因として最も考えられるものはどれか。",
    "options": [
      "画面表示の不具合",
      "通信障害",
      "学習データの偏り",
      "サーバの故障"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0347",
    "unit": "情報社会",
    "field": "フィルターバブル",
    "difficulty": "★★★",
    "question": "動画配信サービスで同じような内容の動画ばかり推薦される現象によって起こりうる問題として最も適切なものはどれか。",
    "options": [
      "動画の画質が低下する",
      "通信速度が低下する",
      "保存容量が不足する",
      "多様な情報に触れる機会が減少する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0348",
    "unit": "情報社会",
    "field": "AIと教育",
    "difficulty": "★★★",
    "question": "AIが学習内容を自動的に推薦する学校で、生徒全員が同じ教材だけを学ぶようになった。この状況の問題点として最も適切なものはどれか。",
    "options": [
      "学習の個別最適化が失われる",
      "教員が不要になる",
      "インターネットが不要になる",
      "教材の著作権が消滅する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0349",
    "unit": "情報社会",
    "field": "著作権",
    "difficulty": "★★★",
    "question": "生成AIが作成した画像を文化祭のポスターに利用することになった。最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "プリンタの性能",
      "画像の解像度",
      "インターネット回線",
      "利用条件や権利関係"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0350",
    "unit": "情報社会",
    "field": "情報の信頼性",
    "difficulty": "★★★",
    "question": "SNS上で『専門家が推奨している』という健康情報が拡散されている。しかし、専門家の氏名や所属が示されていない。このとき最も適切な判断はどれか。",
    "options": [
      "拡散数が多ければ信用する",
      "画像が付いていれば信用する",
      "根拠が確認できるまで慎重に扱う",
      "友人が共有していれば信用する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0351",
    "unit": "情報社会",
    "field": "情報社会の課題",
    "difficulty": "★★★",
    "question": "将来、AIエージェントが個人の代わりに商品の購入や契約を行う社会では、人間に最も求められる能力はどれか。",
    "options": [
      "キーボード入力の速度",
      "暗算能力",
      "長時間の記憶力",
      "AIの判断基準や行動を監督する能力"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0352",
    "unit": "情報社会",
    "field": "情報の特性",
    "difficulty": "★",
    "question": "情報は受け手の知識や経験によって解釈が異なることがある。このような情報の特徴として最も適切なものはどれか。",
    "options": [
      "情報は受け手によって意味が変化する",
      "情報は必ず正しく伝わる",
      "情報は数値でしか表現できない",
      "情報は保存できない"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0353",
    "unit": "情報社会",
    "field": "情報モラル",
    "difficulty": "★",
    "question": "友人が撮影した写真をSNSに投稿したい。最初に行うべきことはどれか。",
    "options": [
      "画像のサイズを変更する",
      "投稿時刻を変更する",
      "写真の解像度を下げる",
      "本人の許可を得る"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0354",
    "unit": "情報社会",
    "field": "個人情報",
    "difficulty": "★",
    "question": "インターネット上でパスワードを管理する方法として最も適切なものはどれか。",
    "options": [
      "全てのサービスで同じものを使う",
      "紙に貼って机に置く",
      "長く複雑なものを設定する",
      "友人と共有する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0355",
    "unit": "情報社会",
    "field": "情報発信",
    "difficulty": "★",
    "question": "SNSで情報を発信する際、誤解を生まないために重要なことはどれか。",
    "options": [
      "受け手の立場や状況を考慮する",
      "投稿数を増やす",
      "絵文字を減らす",
      "文字数を増やす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0356",
    "unit": "情報社会",
    "field": "情報共有",
    "difficulty": "★",
    "question": "オンライン会議の記録をクラウド上で共有する利点として最も適切なものはどれか。",
    "options": [
      "印刷が不要になる",
      "同時に複数人で確認できる",
      "必ず通信量が減る",
      "端末の性能が向上する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0357",
    "unit": "情報社会",
    "field": "メディアリテラシー",
    "difficulty": "★★",
    "question": "生成AIが作成したニュース記事を読む際、特に注意すべきことはどれか。",
    "options": [
      "フォントの種類",
      "記事の文字数",
      "内容の正確性や根拠",
      "掲載時刻"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0358",
    "unit": "情報社会",
    "field": "デジタル・タトゥー",
    "difficulty": "★★",
    "question": "一度インターネット上に公開された情報について、最も適切な説明はどれか。",
    "options": [
      "完全に削除できるとは限らない",
      "必ず1年で消える",
      "検索エンジンには表示されない",
      "画像は保存されない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0359",
    "unit": "情報社会",
    "field": "知的財産権",
    "difficulty": "★★",
    "question": "生成AIを利用して作成した動画に市販の音楽を無断で使用した。このとき問題となる可能性が最も高いものはどれか。",
    "options": [
      "通信障害",
      "著作権侵害",
      "画質の低下",
      "データ圧縮"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0360",
    "unit": "情報社会",
    "field": "情報格差",
    "difficulty": "★★",
    "question": "自治体が災害情報をスマートフォンアプリだけで配信した場合、起こりうる問題として最も適切なものはどれか。",
    "options": [
      "情報の暗号化が難しくなる",
      "情報が改ざんされる",
      "デジタル機器を利用できない人に情報が届きにくい",
      "通信速度が向上する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0361",
    "unit": "情報社会",
    "field": "AIと社会",
    "difficulty": "★★",
    "question": "生成AIによる相談サービスを公共機関が導入する際、人間の職員が必要な理由として最も適切なものはどれか。",
    "options": [
      "AIは電源を必要としないから",
      "AIは数値を処理できないから",
      "AIは文章を生成できないから",
      "最終的な判断や責任を人間が負う場面があるから"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0362",
    "unit": "情報社会",
    "field": "フィルターバブル",
    "difficulty": "★★★",
    "question": "SNSの推薦機能によって似た意見ばかり表示される状況が続くと、どのような問題が起こりやすいか。",
    "options": [
      "多様な考え方に触れる機会が減る",
      "通信速度が遅くなる",
      "端末価格が上がる",
      "保存容量が不足する"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0363",
    "unit": "情報社会",
    "field": "AI倫理",
    "difficulty": "★★★",
    "question": "AIによる採用システムを運用する企業が、定期的に結果を検証する主な理由はどれか。",
    "options": [
      "画面表示を変更するため",
      "データ量を減らすため",
      "公平性や偏りを確認するため",
      "通信量を増やすため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0364",
    "unit": "情報社会",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "学校で利用しているクラウドサービスのアカウント情報が漏えいした場合、最初に行う対応として最も適切なものはどれか。",
    "options": [
      "新しい端末を購入する",
      "パスワードを変更する",
      "アプリを削除する",
      "印刷設定を変更する"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0365",
    "unit": "情報社会",
    "field": "デジタル市民",
    "difficulty": "★★★",
    "question": "AIが自動で作成した文章をそのまま発信することの問題点として最も適切なものはどれか。",
    "options": [
      "通信量が増える",
      "フォントが変わる",
      "発信者自身が内容を十分に理解していない可能性がある",
      "保存容量が不足する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0366",
    "unit": "情報社会",
    "field": "情報の信頼性",
    "difficulty": "★★★",
    "question": "ある健康情報について、SNSでは『効果がある』という意見が多数を占めていた。しかし、公的機関の調査では効果が確認されていなかった。このとき最も適切な判断はどれか。",
    "options": [
      "SNSの意見を優先する",
      "拡散数だけで判断する",
      "有名人の発言だけを信じる",
      "複数の根拠を比較して判断する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0367",
    "unit": "情報社会",
    "field": "AIと教育",
    "difficulty": "★★★",
    "question": "学校がAIによる学習支援システムを導入したところ、生徒同士の議論の機会が減少した。この問題に対する改善策として最も適切なものはどれか。",
    "options": [
      "協働学習の場を設ける",
      "AIの利用を禁止する",
      "端末を減らす",
      "教材を紙だけにする"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0368",
    "unit": "情報社会",
    "field": "フェイク情報",
    "difficulty": "★★★",
    "question": "災害時にSNS上で真偽不明の情報が拡散された。利用者が取るべき行動として最も適切なものはどれか。",
    "options": [
      "すぐに転送する",
      "公式機関の情報を確認する",
      "画像だけを確認する",
      "投稿数を数える"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0369",
    "unit": "情報社会",
    "field": "AIエージェント",
    "difficulty": "★★★",
    "question": "将来、AIが商品の購入や旅行予約を代行する社会では、利用者に最も求められる能力はどれか。",
    "options": [
      "高速入力能力",
      "暗算能力",
      "AIの提案を評価・監督する能力",
      "長文読解力だけを高める能力"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q01-0370",
    "unit": "情報社会",
    "field": "情報発信",
    "difficulty": "★★★",
    "question": "企業がSNSで広告を配信する際、閲覧履歴に応じて表示内容を変える仕組みを利用している。このとき特に重要となる観点はどれか。",
    "options": [
      "端末の重量",
      "画面の大きさ",
      "通信速度",
      "個人情報の適切な管理"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q01-0371",
    "unit": "情報社会",
    "field": "社会課題",
    "difficulty": "★★★",
    "question": "行政サービスのデジタル化が進む中で、全ての人が平等に利用できる社会を実現するために必要な考え方はどれか。",
    "options": [
      "アクセシビリティや情報格差への配慮",
      "通信速度の統一",
      "端末の高性能化",
      "データ容量の削減"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q02-0001",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★",
    "question": "Webサイトのトップページから「会社概要」「製品紹介」「お問い合わせ」のように枝分かれして配置される情報の構造を何というか。",
    "options": [
      "ネットワーク構造",
      "直線構造",
      "階層構造（ツリー構造）",
      "グリッド構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0002",
    "unit": "情報デザイン",
    "field": "情報の構造化（思考）",
    "difficulty": "★★",
    "question": "「東京・名古屋・大阪などの各都市を結ぶ路線図」や「Webページ同士が相互にリンクし合っている状態」を表現するのに最も適した情報の構造はどれか。",
    "options": [
      "階層構造",
      "網の目構造（ネットワーク構造）",
      "直線構造",
      "マトリクス構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0003",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "「情報の受け手が迷わないように、情報の配置や表現を最適化するプロセス」を意味する言葉として、最も適切なものはどれか。",
    "options": [
      "グラフィックデザイン",
      "情報デザイン",
      "エディトリアルデザイン",
      "インダストリアルデザイン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0004",
    "unit": "情報デザイン",
    "field": "レイアウト（思考）",
    "difficulty": "★★",
    "question": "スマートフォンの設定画面において、「画面の明るさ」と「音量」の調整バーがある。これら異なる機能の境界を明確にするため、それぞれの塊を四角い枠で囲んで少し離して配置した。これはデザインのどの原則を応用したものか。",
    "options": [
      "近接（グループ化）",
      "整列",
      "反復",
      "対比（コントラスト）"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0005",
    "unit": "情報デザイン",
    "field": "レイアウト（思考）",
    "difficulty": "★★★",
    "question": "スライド資料を作成する際、もっとも伝えたい「結論」の文字を他の説明文の3倍の大きさにし、さらに赤色に変更した。これはデザインのどの原則を応用したものか。",
    "options": [
      "整列",
      "反復",
      "近接",
      "対比（コントラスト）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0006",
    "unit": "情報デザイン",
    "field": "レイアウト（思考）",
    "difficulty": "★★",
    "question": "企業のパンフレットを作成する際、すべてのページの左上にロゴマークを同じ位置で配置し、見出しのフォントとサイズを完全に統一した。これはデザインのどの原則を応用したものか。",
    "options": [
      "近接",
      "反復",
      "整列",
      "対比"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0007",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "赤、青、緑などの「色相（色みの違い）」を持つ色を「有彩色」と呼ぶのに対し、白、灰色、黒のように色相を持たず明度だけで表される色を何というか。",
    "options": [
      "補色",
      "類似色",
      "純色",
      "無彩色"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0008",
    "unit": "情報デザイン",
    "field": "色彩設計（思考）",
    "difficulty": "★★★",
    "question": "「暗い夜道でも目立つように、工事現場の看板に蛍光の黄色と黒の縞模様を使用する」など、2つの色を組み合わせたときに引き立ち、遠くからでも識別しやすくなる性質を何というか。",
    "options": [
      "視認性",
      "明視性（可読性）",
      "誘目性",
      "識別性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0009",
    "unit": "情報デザイン",
    "field": "色彩設計（過去事例）",
    "difficulty": "★★★",
    "question": "Webサイトのボタンをデザインする際、赤緑色覚障害を持つ人でも「購入」と「キャンセル」のボタンが色の違いだけで見分けられなくならないよう、文字やアイコン（形）を併記する工夫を行った。このような色のバリエーションに配慮した設計を何というか。",
    "options": [
      "カラーユニバーサルデザイン",
      "ユニバーサルフォント",
      "バリアフリーカラー",
      "Webアクセシビリティ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0010",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★",
    "question": "「国勢調査における、都道府県ごとの人口密度」のように、数値の大きさに応じて地図上の地域を段階的な色や模様で塗り分けたグラフを何というか。",
    "options": [
      "散布図",
      "等値線図",
      "階級区分図（コーロプレス図）",
      "カートグラム"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0011",
    "unit": "情報デザイン",
    "field": "視覚化（思考）",
    "difficulty": "★★★",
    "question": "「あるクラスの生徒50人における、数学のテストの点数と物理のテストの点数の間にどのような関係（相関）があるか」を視覚的に調べるために、最も適したグラフはどれか。",
    "options": [
      "散布図",
      "ヒストグラム",
      "レーダーチャート",
      "折れ線グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0012",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（時事）",
    "difficulty": "★★",
    "question": "高齢者や障害のある人がWebサイトを利用する際、画像に対して「音声読み上げソフト（スクリーンリーダー）」がその内容を理解できるように記述する、画像の代替テキスト属性を何というか。",
    "options": [
      "src属性",
      "alt属性",
      "href属性",
      "title属性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0013",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "パソコンの画面上にフォルダやゴミ箱の形をした「アイコン」を表示し、それをマウスでクリックすることで直感的に操作できるようにしたインタフェースの方式を何というか。",
    "options": [
      "CUI（Character User Interface）",
      "GUI（Graphical User Interface）",
      "VUI（Voice User Interface）",
      "NUI（Natural User Interface）"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0014",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（思考）",
    "difficulty": "★★",
    "question": "銀行のATMや駅の券売機において、操作を間違えそうになったときに「前の画面に戻る」ボタンを常に同じ場所に大きく配置したり、誤操作を未然に防ぐための警告ダイアログを表示したりする設計思想を何というか。",
    "options": [
      "デザインパターン",
      "プロトタイピング",
      "フールプルーフ",
      "アフォーダンス"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0015",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（思考）",
    "difficulty": "★★★",
    "question": "海外旅行客向けの案内板において、「非常口」や「お手洗い」の場所を文字ではなく、誰が見ても直感的に意味が伝わるマーク（ピクトグラム）で表現した。このように道具や環境が持つ「引き出される行為の可能性や意味」をデザインに落とし込む概念を何というか。",
    "options": [
      "アフォーダンス（シグニファイア）",
      "プロトタイプ",
      "アクセシビリティ",
      "インフォグラフィックス"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0016",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "「一度に大量の人へ情報を届けることができるが、受信者から発信者へのリアルタイムな双方向のやり取りが難しい」という特性を持つ、テレビや新聞などのメディアを何に分類するか。",
    "options": [
      "表現メディア",
      "記録メディア",
      "伝達メディア（マスメディア）",
      "通信メディア"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0017",
    "unit": "情報デザイン",
    "field": "インフォグラフィックス",
    "difficulty": "★★",
    "question": "複雑なデータや統計手順などを、文字の羅列ではなく、図やイラスト、グラフを組み合わせて1枚の画像で直感的にわかりやすくまとめた表現手法を何というか。",
    "options": [
      "ワイヤーフレーム",
      "マインドマップ",
      "インフォグラフィックス",
      "プロトタイプ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0018",
    "unit": "情報デザイン",
    "field": "プロトタイプ（過去事例）",
    "difficulty": "★★",
    "question": "システム開発において、画面のレイアウトやボタンの配置といった「大まかな構成案」を、色や詳細なデザインを省いて線と枠線だけでシンプルに描いた設計図を何というか。",
    "options": [
      "ワイヤーフレーム",
      "サムネイル",
      "モックアップ",
      "絵コンテ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0019",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "デザインにおいて、文字の読みやすさを高めるための文字フォントの種類、文字の太さ、行間、文字間隔などを適切に調整する技術や意匠を何というか。",
    "options": [
      "インフォグラフィックス",
      "タイポグラフィ",
      "グラフィックアート",
      "ピクトグラム"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0020",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★",
    "question": "JIS規格（JIS X 8341-3）にも制定されており、高齢者や障害者を含むすべての人が、Webサイトやデジタル機器が提供する情報や機能に問題なくアクセスし利用できる状態にあることを何というか。",
    "options": [
      "ユーザビリティ",
      "アクセシビリティ",
      "インクルージョン",
      "レスポンシブデザイン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0021",
    "unit": "情報デザイン",
    "field": "情報の構造化（思考）",
    "difficulty": "★★",
    "question": "「過去10年間の全国の降水量データ」を「地域別」だけでなく「月別」の2つの切り口から同時にクロスさせて整理したい。このとき最も適した情報の構造はどれか。",
    "options": [
      "直線構造",
      "マトリクス構造（マトリックス構造）",
      "階層構造",
      "ネットワーク構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0022",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "色相環において,黄色の隣にある「黄緑」や「橙（オレンジ）」のようにある色に対して色相が近い位置にある色の関係を何というか。",
    "options": [
      "有彩色",
      "補色",
      "類似色",
      "無彩色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0023",
    "unit": "情報デザイン",
    "field": "色彩設計（思考）",
    "difficulty": "★★★",
    "question": "「プレゼンテーションのスライドで背景を濃い紺色にし,文字を鮮やかな黄色にする」という工夫は,色彩設計におけるどの効果を最も高めるためのものか。",
    "options": [
      "コントラスト（明度差による視認性の向上）",
      "グラデーション効果",
      "進出色による立体感",
      "減法混色による調和"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0024",
    "unit": "情報デザイン",
    "field": "レイアウト（思考）",
    "difficulty": "★★",
    "question": "Webサイトのメニューバーにおいて、すべてのボタンの「縦横のサイズ」や「角の丸み」を全く同じに揃えて配置した。これはデザインのどの原則を応用したものか。",
    "options": [
      "近接",
      "対比",
      "整列",
      "反復"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0025",
    "unit": "情報デザイン",
    "field": "視覚化（思考）",
    "difficulty": "★★★",
    "question": "「あるスマートフォンの新機種について、デザイン・バッテリー持ち・カメラ性能・価格・操作性の5つの項目におけるユーザー満足度の平均値」をひと目で比較したい。最も適したグラフはどれか。",
    "options": [
      "レーダーチャート",
      "散布図",
      "ヒストグラム",
      "折れ線グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0026",
    "unit": "情報デザイン",
    "field": "視覚化（時事）",
    "difficulty": "★★",
    "question": "世界的なデータ視覚化の潮流において従来の棒グラフや円グラフをさらに発展させ、情報の「量」や「関係性」をクリエイティブに1枚の図にまとめた表現を何というか。",
    "options": [
      "ワイヤーフレーム",
      "インフォグラフィックス",
      "サムネイル",
      "プロトタイプ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0027",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（過去事例）",
    "difficulty": "★★★",
    "question": "過去のWebサイトでは「重要な情報をすべて赤文字で書く」という手法が横行したが、カラーユニバーサルデザインの観点からは不適切とされる。その理由として最も適切なものはどれか。",
    "options": [
      "赤色は視認性が低いため",
      "一部の色覚特性を持つ人には黒文字と区別がつきにくいため",
      "画面の明度が高くなりすぎるため",
      "JIS規格で赤色の使用が禁止されたため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0028",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "スマートスピーカー（Apple HomePodやAmazon Echoなど）に対して「明日の天気を教えて」と声で指示し、音声で情報を得るようなインタフェースの方式を何というか。",
    "options": [
      "CUI",
      "GUI",
      "VUI（Voice User Interface）",
      "NUI"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0029",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（思考）",
    "difficulty": "★★★",
    "question": "Webサイトの申し込みフォームにおいてユーザーが「生年月日」を入力する際、未来の日付を選択できないようにシステム側で制御する設計を行った。これはUI設計におけるどの原則にあたるか。",
    "options": [
      "アフォーダンス",
      "フールプルーフ",
      "アクセシビリティ",
      "プロトタイピング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0030",
    "unit": "情報デザイン",
    "field": "プロトタイプ（過去事例）",
    "difficulty": "★★",
    "question": "アプリ開発において実際にプログラムを組む前に画面の遷移やボタンの挙動をユーザーが画面上でクリックして疑似体験できるようにした。動作する試作品を何というか。",
    "options": [
      "インタラクティブプロトタイプ（プロトタイプ）",
      "ワイヤーフレーム",
      "ピクトグラム",
      "サムネイル"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0031",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "情報の送り手が伝えたい内容を受け手が最も正しくかつ効率的に理解できるように情報を整理・視覚化する一連のプロセスを何というか。",
    "options": [
      "タイポグラフィ",
      "情報デザイン",
      "メディアリテラシー",
      "ユニバーサルデザイン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0032",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（時事）",
    "difficulty": "★★",
    "question": "Webアクセシビリティの国際標準ガイドラインである「WCAG（Web Content Accessibility Guidelines）」において全盲のユーザーがWebサイトを閲覧する際に必須となる、画像を音声で説明するための仕組みはどれか。",
    "options": [
      "CSSスタイルシート",
      "代替テキスト（alt属性）",
      "ハイパーリンク",
      "JavaScript"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0033",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "「紙の書籍」と「電子書籍」のメディア特性を比較したとき「紙の書籍」が持つ記録・表現メディアとしての優位性として最も適切なものはどれか。",
    "options": [
      "キーワードによる全文検索が瞬時にできること",
      "文字の大きさやフォントを自由に変更できること",
      "端末のバッテリー残量を気にせずいつでもどこでも読めること",
      "数千冊のデータを1つの端末で持ち運べること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0034",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★",
    "question": "動画配信サービスにおいて「映画 ＞ アクション ＞ 2020年代 ＞ 作品名」というように大分類から小分類へと順に絞り込んでいく情報の配置構造を何というか。",
    "options": [
      "直線構造",
      "階層構造（ツリー構造）",
      "ネットワーク構造",
      "グリッド構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0035",
    "unit": "情報デザイン",
    "field": "レイアウト（思考）",
    "difficulty": "★★",
    "question": "チラシのデザインにおいて関連性の高い「商品の写真」と「その商品の価格」をすぐ近くに配置し、別の商品の情報とはスペースを空けて離した。これはデザインのどの原則か。",
    "options": [
      "近接（グループ化）",
      "整列",
      "対比",
      "反復"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0036",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "赤や黄色などのように見る人に「暖かい」という印象を与える色を「暖色」というが、これに対して青や青緑などのように「冷たい」という印象を与える色のグループを何というか。",
    "options": [
      "無彩色",
      "類似色",
      "補色",
      "冷色"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0037",
    "unit": "情報デザイン",
    "field": "視覚化（思考）",
    "difficulty": "★★★",
    "question": "「全国のコンビニエンスストアにおける店舗ごとの『最高気温』と『アイスクリームの売上額』のデータ」がある。この2つのデータの間にどのような関係（相関）があるかを視覚的に分析するのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "折れ線グラフ",
      "散布図",
      "ヒストグラム"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0038",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（思考）",
    "difficulty": "★★★",
    "question": "スマートフォンの画面デザインにおいてボタンのような形をした画像が配置されていると、ユーザーは「ここはタップできる場所だ」と直感的に理解する。このように形やデザインが人間に特定の行動を促す・予感させる効果を何というか。",
    "options": [
      "フールプルーフ",
      "アフォーダンス（シグニファイア）",
      "アクセシビリティ",
      "ユーザビリティ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0039",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎（過去事例）",
    "difficulty": "★★",
    "question": "駅や空港などの公共施設において言葉や言語が分からない外国人や子どもでもひと目でその場所（非常口トイレなど）の意味がわかるように単純化された視覚記号を何というか。",
    "options": [
      "ピクトグラム",
      "サムネイル",
      "ロゴマーク",
      "タイポグラフィ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0040",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（時事）",
    "difficulty": "★★★",
    "question": "日本のWebアクセシビリティに関する国家規格であり、2024年の障害者差別解消法の改正（合理的配慮の義務化）に伴い、企業や自治体のWebサイトにおいて対応が強く求められている規格はどれか。",
    "options": [
      "ISO 9001",
      "JIS X 8341-3",
      "JIS Q 27001",
      "IEEE 802.11"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0041",
    "unit": "情報デザイン",
    "field": "ユニバーサルデザイン（過去問題）",
    "difficulty": "★★★",
    "question": "「誰でも使いやすいデザイン」を目指すユニバーサルデザインの7原則において右利きでも左利きでも手が大きくても小さくても、同じように操作ができるような柔軟性を持たせる原則を何というか。",
    "options": [
      "公平な利用",
      "自由度の高さ（利用における柔軟性）",
      "直感的な利用",
      "安全な配慮"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0042",
    "unit": "情報デザイン",
    "field": "情報の構造化（思考）",
    "difficulty": "★★",
    "question": "ある博物館の展示室の案内アプリを作る。展示室1から展示室2、展示室2から展示室3へと順番通りに進むルート（動線）のみをユーザーに提示したい。このときに採用すべき最も適切な情報の構造はどれか。",
    "options": [
      "直線構造",
      "階層構造",
      "ネットワーク構造",
      "マトリクス構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0043",
    "unit": "情報デザイン",
    "field": "レイアウト（思考）",
    "difficulty": "★★★",
    "question": "Webサイトのトップページにおいて最も重要な「期間限定セールの告知」にユーザーの視線を最初に誘導したい。情報デザインの観点から人間の視線移動の特性（Zの法則・Fの法則）を踏まえた最も効果的な配置はどこか。",
    "options": [
      "画面の左上",
      "画面の中央最下部",
      "画面の右上",
      "画面の右下"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0044",
    "unit": "情報デザイン",
    "field": "色彩設計（過去問題）",
    "difficulty": "★★★",
    "question": "大学入学共通テスト（試作問題）でも扱われた色のアクセシビリティに関する問題である。P型・D型などの色覚特性を持つ人にとって「緑色の背景に赤色の文字」は非常に識別しにくい。この組み合わせの視認性を改善するための方法として最も不適切なものはどれか。",
    "options": [
      "文字のフォントを太くする",
      "文字の周りに白い縁取りをつける",
      "赤色の文字をさらに濃い同系色の茶色に変える",
      "文字の横にアイコンや記号を併記する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0045",
    "unit": "情報デザイン",
    "field": "視覚化（思考）",
    "difficulty": "★★",
    "question": "「過去5年間における毎月のA商品の売上金額の推移」と「B商品の売上金額の推移」を重ねて表示し、季節による変動のパターンの違いを比較したい。最も適したグラフはどれか。",
    "options": [
      "散布図",
      "折れ線グラフ",
      "ヒストグラム",
      "円グラフ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0046",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（時事）",
    "difficulty": "★★★",
    "question": "Webアクセシビリティの確保においてWebページ全体のフォントサイズをユーザーが自由に変更できるようにする、あるいは画面全体の配色を「黒背景に白文字（高コントラスト）」に切り替えられる機能を実装することはどの規格への適合を意識したものか。",
    "options": [
      "JIS X 8341-3（Webアクセシビリティ規格）",
      "ISO 14001（環境マネジメント規格）",
      "JIS Q 27001（情報セキュリティ規格）",
      "JIS X 0121（ソフトウェア品質規格）"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0047",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "Webサイトを閲覧している際、現在表示されているページがサイト全体のどの位置にあるかを「ホーム ＞ 製品情報 ＞ スマートフォン ＞ 詳細」のように階層順にリンクで示したナビゲーションを何というか。",
    "options": [
      "ポップアップメニュー",
      "ハンバーガーメニュー",
      "パンくずリスト",
      "サイトマップ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0048",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（思考）",
    "difficulty": "★★★",
    "question": "Webサイトのログイン画面においてパスワードの入力欄の横に「目の形のアイコン」を配置し、それをクリックすると伏せ字（●●●）が解除されて入力内容を確認できるようにした。これはユーザーのどのような心理・エラーを防ぐための設計か。",
    "options": [
      "アフォーダンスの欠如を防ぐため",
      "フールプルーフによる入力ミス（タイポ）の自己修正を促すため",
      "ユニバーサルデザインの公平性を担保するため",
      "認知負荷を下げてセキュリティ意識を高めるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0049",
    "unit": "情報デザイン",
    "field": "プロトタイプ（過去問題）",
    "difficulty": "★★",
    "question": "ソフトウェアやWebサイトの開発においてデザインの初期段階で「手書きのスケッチ」や「紙の切り貼り」を用いて、ユーザーインターフェースのレイアウトや大まかな操作感を素早く検証する手法を何というか。",
    "options": [
      "ペーパープロトタイピング",
      "ワイヤーフレーム作成",
      "モックアップ作成",
      "3Dプリンティング"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0050",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★★",
    "question": "「インターネット上のニュースサイト」と「紙の新聞」を比較したとき、表現・伝達メディアとしての「紙の新聞」が持つ固有の強みとして最も適切なものはどれか。",
    "options": [
      "動画や音声を埋め込んで立体的に情報を伝えられること",
      "一度に1つの記事だけに集中させ、他の一切の情報を排除できること",
      "紙面全体を広げることで、複数の多様なニュースを一目で俯瞰（一覧）できること",
      "発信された後に誤りが見つかっても、瞬時に内容を修正できること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0051",
    "unit": "情報デザイン",
    "field": "インフォグラフィックス（思考）",
    "difficulty": "★★★",
    "question": "複雑な「美味しいカレーの作り方」の工程（野菜を切る、炒める、煮込む、ルーを入れる）とそれぞれの所要時間を言葉が通じない外国人にも直感的に理解してもらえるよう1枚の図にまとめたい。このとき最も重視すべき情報デザインの手法はどれか。",
    "options": [
      "タイポグラフィの文字装飾",
      "ピクトグラムとタイムライン（時系列図）の組み合わせ",
      "階層構造によるテキストの分類",
      "コントラスト（明度差）の最大化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0052",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "情報デザインにおいて文字の形そのものの美しさや、文章としての読みやすさ（可読性・視認性）を向上させるために、文字の配置、行間、フォントの選択などを調整する技術を何というか。",
    "options": [
      "インフォグラフィックス",
      "タイポグラフィ",
      "ピクトグラム",
      "グラフィックデザイン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0053",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（時事）",
    "difficulty": "★★",
    "question": "視覚障害者がスマートフォンを使用する際、画面に表示されているテキストやボタンの名称を音声で読み上げる機能を何というか。",
    "options": [
      "スクリーンリーダー（ボイスオーバーなど）",
      "音声認識システム",
      "Webアクセシビリティ",
      "ユニバーサルフォント"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0054",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（思考）",
    "difficulty": "★★★",
    "question": "スマートフォンのアプリで画面を上から下へ引っ張る（スワイプする）と、画面が更新（リロード）されて新しいタイムラインが表示される。この「引っ張る」という操作自体が画面の更新を予感させるUI設計の考え方を何というか。",
    "options": [
      "シグニファイア（アフォーダンス）",
      "フールプルーフ",
      "レスポンシブデザイン",
      "フラットデザイン"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0055",
    "unit": "情報デザイン",
    "field": "視覚化（過去問題）",
    "difficulty": "★★★",
    "question": "2つの連続する数値データの間に「一方が増えるともう一方が増える（または減る）」という相関関係があるかどうかを視覚的に確認するのに最も適したグラフはどれか。",
    "options": [
      "ヒストグラム",
      "散布図",
      "レーダーチャート",
      "累積棒グラフ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0056",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "Webデザインやプレゼンテーションにおいて、画面全体の印象を決定づけ、最も大きな面積（約70%）を占める色のことを何というか。",
    "options": [
      "メインカラー（主調色）",
      "アクセントカラー（強調色）",
      "ベースカラー（支配色・背景色）",
      "アソートカラー（配合色）"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0057",
    "unit": "情報デザイン",
    "field": "情報の構造化（思考）",
    "difficulty": "★★",
    "question": "世界中のWebページがハイパーリンクによって互いに複雑に結びつき特定の中心（親）を持たずに自由に移動できる情報の構造を何というか。",
    "options": [
      "直線構造",
      "マトリクス構造",
      "階層構造",
      "ネットワーク構造（網の目構造）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0058",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（過去問題）",
    "difficulty": "★★",
    "question": "人間工学や情報デザインに基づき、製品やサービス、システムを実際に利用したユーザーが「どれだけストレスなく、使いやすいと感じたか」という利用品質の度合いを表す言葉はどれか。",
    "options": [
      "アクセシビリティ",
      "ユーザビリティ",
      "プロトタイピング",
      "インタフェース"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0059",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎（過去問題）",
    "difficulty": "★★",
    "question": "情報デザインの目的として最も適切なものはどれか。",
    "options": [
      "できるだけ多くの情報を1つの画面に隙間なく詰め込むこと",
      "最新の高度なプログラミング技術をアピールすること",
      "受け手の状況や目的に応じて情報を分かりやすく整理・表現し、効率的な伝達を可能にすること",
      "文字をすべて排除し、画像とイラストだけで表現すること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0060",
    "unit": "情報デザイン",
    "field": "レイアウト（思考）",
    "difficulty": "★★",
    "question": "デザインの4原則（近接・整列・反復・コントラスト）において「見出しのフォントと色、箇条書きのドットの形をすべてのページで完全に統一する」ことで資料全体に一貫性と安心感を与える効果を狙う原則はどれか。",
    "options": [
      "近接",
      "整列",
      "対比",
      "反復"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0061",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "「情報の送り手」と「受け手」の間で意図が正確に伝わらない原因となる,知識や認識のズレのことを何というか。",
    "options": [
      "情報の送り手",
      "情報ギャップ",
      "メディアリテラシー",
      "アクセシビリティ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0062",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "赤・黄・青のように他の色を混ぜ合わせても作ることができない色彩の基本となる3つの色のことを何というか。",
    "options": [
      "三原色",
      "補色",
      "類似色",
      "無彩色"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0063",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "Webサイトなどでユーザーが迷わずに操作できるよう,直感的な絵で機能を表現した視覚記号を何というか。",
    "options": [
      "ロゴマーク",
      "ピクトグラム",
      "アイコン",
      "タイポグラフィ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0064",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "「テレビ」や「ラジオ」といったメディアが持つ情報を一斉に多くの人へ届けることができる特性を何というか。",
    "options": [
      "双方向性",
      "マスメディア性（一方向・大量伝達性）",
      "アーカイブ性",
      "個別受容性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0065",
    "unit": "情報デザイン",
    "field": "レイアウト（練習）",
    "difficulty": "★★",
    "question": "Webページのデザインにおいて関連する画像とテキストを1つの四角い枠内にまとめ、それを並列に並べる配置手法を何というか。",
    "options": [
      "階層構造",
      "マトリクス構造",
      "カードレイアウト（グリッドレイアウト）",
      "直線構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0066",
    "unit": "情報デザイン",
    "field": "情報の構造化（練習）",
    "difficulty": "★★",
    "question": "「商品の購入手続き」のようにユーザーが特定の順番通りにページを進めていく必要があるシステムで採用すべき情報の構造はどれか。",
    "options": [
      "直線構造",
      "階層構造",
      "ネットワーク構造",
      "マトリクス構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0067",
    "unit": "情報デザイン",
    "field": "視覚化（練習）",
    "difficulty": "★★",
    "question": "あるクラスの「通学時間の分布（30分未満、30分以上60分未満など）」とそれぞれの範囲に何人いるかという「度数」を視覚的に表すのに最も適したグラフはどれか。",
    "options": [
      "散布図",
      "折れ線グラフ",
      "ヒストグラム",
      "レーダーチャート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0068",
    "unit": "情報デザイン",
    "field": "色彩設計（練習）",
    "difficulty": "★★",
    "question": "プレゼンテーションのスライドにおいて最も強調したい1箇所（全体の約5%）だけに使い、聞き手の視線を誘導するために設定する色のことを何というか。",
    "options": [
      "ベースカラー",
      "アクセントカラー",
      "メインカラー",
      "アソートカラー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0069",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（演習）",
    "difficulty": "★★★",
    "question": "Webサイトのデザインにおいて高齢者や色覚特性を持つ人など、あらゆる人が障壁なく情報を利用できるように設計する度合いを何というか。",
    "options": [
      "ユーザビリティ",
      "アフォーダンス",
      "アクセシビリティ",
      "プロトタイピング"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0070",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（演習）",
    "difficulty": "★★★",
    "question": "スマートフォンの画面を指で「2本の指でつまむようにして拡大・縮小する」操作のことを何というか。",
    "options": [
      "スワイプ",
      "ピンチイン・ピンチアウト",
      "ドラッグ",
      "タップ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0071",
    "unit": "情報デザイン",
    "field": "情報の構造化（演習）",
    "difficulty": "★★★",
    "question": "「OSの種類（Windows/Mac）」と「用途（ビジネス/ゲーム）」という2つの独立した条件を組み合わせて最適なPCをマトリクス（表）形式で整理する構造を何というか。",
    "options": [
      "直線構造",
      "ネットワーク構造",
      "階層構造",
      "マトリクス構造"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0072",
    "unit": "情報デザイン",
    "field": "レイアウト（演習）",
    "difficulty": "★★★",
    "question": "デザインの4原則において強弱（コントラスト）をつけることで情報の優先順位（重要度）を視覚的にハッキリと伝える原則はどれか。",
    "options": [
      "近接",
      "整列",
      "反復",
      "対比（コントラスト）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0073",
    "unit": "情報デザイン",
    "field": "Webデザイン（応用）",
    "difficulty": "★★★★",
    "question": "PC、タブレット、スマートフォンなど、閲覧する端末の画面サイズに応じて自動的に最適なレイアウトに切り替わるWebデザインの手法を何というか。",
    "options": [
      "レスポンシブWebデザイン",
      "フラットデザイン",
      "マテリアルデザイン",
      "ワイヤーフレーム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0074",
    "unit": "情報デザイン",
    "field": "色彩設計（応用）",
    "difficulty": "★★★★",
    "question": "JIS規格（JIS Z 9103）で定められている安全色において、非常口や避難誘導、安全な状態を示すために用いられる色はどれか。",
    "options": [
      "赤色",
      "黄色",
      "緑色",
      "青色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0075",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（応用）",
    "difficulty": "★★★★",
    "question": "ATMの画面において、ユーザーが操作を間違えたとき次のステップに進めないようにしたり警告を出したりして、重大な誤操作を未然に防ぐ設計思想を何というか。",
    "options": [
      "アフォーダンス",
      "フールプルーフ",
      "フェイルセーフ",
      "アクセシビリティ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0076",
    "unit": "情報デザイン",
    "field": "視覚化（応用）",
    "difficulty": "★★★★",
    "question": "2つの異なるデータの相関係数を計算したところ、結果が「0.85」となった。この2つのデータの関係を散布図で表現したとき、最も適切な特徴はどれか。",
    "options": [
      "右上がりの直線に近い形で点がきれいに集まっている",
      "右下がりの直線に近い形で点がきれいに集まっている",
      "点が全体に円状にばらついており、規則性が見られない",
      "すべての点がY軸と平行に一列に並んでいる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0077",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "大学入学共通テストにおける「色覚のバリアフリー」に関する思考問題である。ある案内図で「赤色の線」と「緑色の線」が交差しており、一部の色覚特性を持つ人が区別しづらいことが分かった。デザインの修正案として最も不適切なものはどれか。",
    "options": [
      "一方の線を「点線」にし、もう一方を「実線」にする",
      "線の交点付近にそれぞれの線の行き先を示す「文字」を配置する",
      "赤色の線を「より鮮やかな赤色」に緑色の線を「より鮮やかな緑色」に変更する",
      "赤色の線の横に「○」緑色の線の横に「●」のマークを並記する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0078",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "情報のデジタル化とレイアウトに関する総合問題である。1つの画像をデータ量を抑えつつWebサイト上で拡大しても境界線（輪郭）がぼやけたりギザギザ（ジャギー）になったりしない形式で保存したい。最も適した画像データ形式はどれか。",
    "options": [
      "BMP形式（ビットマップ）",
      "JPEG形式",
      "SVG形式（ベクタ形式）",
      "PNG形式"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0079",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "情報の構造化とWebサイトの設計に関する問題である。数万ページに及ぶ大規模なECサイトを構築する際、ユーザーが求める商品に最も効率よく、迷わずにアクセスできるようにするためのナビゲーション設計として最も適切な組み合わせはどれか。",
    "options": [
      "「階層構造（カテゴリ分類）」と「サイト内検索機能」の組み合わせ",
      "「直線構造（1ページずつ進む）」と「リンク一覧」の組み合わせ",
      "「ネットワーク構造（すべてのページが全リンクを持つ）」のみの設計",
      "「マトリクス構造（2つの軸でのみ分類）」と「ポップアップ画面」の組み合わせ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0080",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "人間工学とインタフェースデザインの歴史に関する問題である。コンピュータの画面上でゴミ箱の形をした絵（アイコン）にファイルをドラッグ＆ドロップすると削除できるような視覚的・直感的に操作できるインタフェースを何というか。",
    "options": [
      "CUI",
      "GUI",
      "VUI",
      "NUI"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0081",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "情報デザインにおいて受け手が必要な情報に迷わずアクセスできるよう、情報の配置やグループ分けを最適化することを何というか。",
    "options": [
      "情報の構造化",
      "タイポグラフィ",
      "プロトタイピング",
      "インタフェースの拡張"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0082",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "色相環（しきそうかん）においてちょうど反対側に位置する、お互いの色を引き立て合う組み合わせの色を何というか。",
    "options": [
      "無彩色",
      "メインカラー",
      "補色",
      "類似色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0083",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "Webサイトなどでユーザーがクリックやタップをして別のページに移動できる仕組みを何というか。",
    "options": [
      "アイコン",
      "ハイパーリンク",
      "パンくずリスト",
      "ポップアップ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0084",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "「手紙」や「電子メール」のように特定の1人または少人数に対して個別に情報を伝えるメディアの特性を何というか。",
    "options": [
      "マスメディア性",
      "アーカイブ性",
      "双方向性",
      "個別伝達性（パーソナルメディア性）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0085",
    "unit": "情報デザイン",
    "field": "情報の構造化（練習）",
    "difficulty": "★★",
    "question": "Webサイトの設計においてトップページ（親）から順に「製品情報」「会社概要」などのカテゴリ（子）へ枝分かれしていく、最も一般的な情報の構造を何というか。",
    "options": [
      "階層構造",
      "直線構造",
      "マトリクス構造",
      "ネットワーク構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0086",
    "unit": "情報デザイン",
    "field": "レイアウト（練習）",
    "difficulty": "★★",
    "question": "デザインの4原則において関連する複数の要素（画像と解説文など）を物理的に近づけて配置し、それらがグループであることを直感的に伝える原則はどれか。",
    "options": [
      "整列",
      "近接",
      "反復",
      "コントラスト"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0087",
    "unit": "情報デザイン",
    "field": "視覚化（練習）",
    "difficulty": "★★",
    "question": "「全校生徒の身長と体重のデータ」があり、2つの数値の間にどのような関係（相関）があるかを一目で確認したい。最も適したグラフはどれか。",
    "options": [
      "ヒストグラム",
      "折れ線グラフ",
      "円グラフ",
      "散布図"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0088",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（練習）",
    "difficulty": "★★",
    "question": "公共施設や駅、Webサイトなどのデザインにおいて、年齢や性別、障害の有無などにかかわらず「最初からすべての人が利用しやすいように」設計する考え方を何というか。",
    "options": [
      "ユーザビリティ",
      "アフォーダンス",
      "ユニバーサルデザイン",
      "プロトタイピング"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0089",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（演習）",
    "difficulty": "★★★",
    "question": "ドアのノブを見ただけで「回すものだ」と分かったり画面上の立体的なボタンを見て「押せるものだ」と判断できたりするような、物体の形が人間に操作方法を直感的に誘発する効果を何というか。",
    "options": [
      "アフォーダンス（シグニファイア）",
      "ユーザビリティ",
      "フールプルーフ",
      "アクセシビリティ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0090",
    "unit": "情報デザイン",
    "field": "色彩設計（演習）",
    "difficulty": "★★★",
    "question": "大学入試でも重視される「色のバリアフリー（カラーユニバーサルデザイン）」においてP型・D型などの色覚特性を持つ人が最も見分けにくいとされる、避けるべき代表的な色の組み合わせはどれか。",
    "options": [
      "赤と緑",
      "黒と白",
      "青と黄",
      "オレンジと紫"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0091",
    "unit": "情報デザイン",
    "field": "情報の構造化（演習）",
    "difficulty": "★★★",
    "question": "「発信元や中心となるページを持たず、それぞれの情報（Webページ）がリンクによって網の目のように対等に結びついている」情報の構造を何というか。",
    "options": [
      "直線構造",
      "階層構造",
      "マトリクス構造",
      "ネットワーク構造"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0092",
    "unit": "情報デザイン",
    "field": "レイアウト（演習）",
    "difficulty": "★★★",
    "question": "プレゼンテーションのスライドにおいて、複数のテキストボックスの左端を縦にビシッと揃えて配置することで、画面全体に組織的で洗練された印象を与えるデザインの原則はどれか。",
    "options": [
      "近接",
      "整列",
      "反復",
      "対比"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0093",
    "unit": "情報デザイン",
    "field": "Webデザイン（応用）",
    "difficulty": "★★★★",
    "question": "Webサイトのデザイン制作において実際のコーディング（プログラム作成）に入る前に、ボタンや写真の配置などのレイアウト（設計図）を簡素な線と枠だけで視覚化したものを何というか。",
    "options": [
      "ワイヤーフレーム",
      "プロトタイプ",
      "ピクトグラム",
      "パンくずリスト"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0094",
    "unit": "情報デザイン",
    "field": "色彩設計（応用）",
    "difficulty": "★★★★",
    "question": "JIS規格（JIS Z 9103）の安全色において、非常に強い危険、禁止、あるいは消火設備を示すために用いられる最も視覚的警告レベルの高い色はどれか。",
    "options": [
      "黄色",
      "橙色",
      "赤色",
      "緑色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0095",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（応用）",
    "difficulty": "★★★★",
    "question": "情報システムを設計する際、ユーザーがどのような手順や感情でサービスを利用するかを時系列のストーリー仕立てで可視化した図を何というか。",
    "options": [
      "カスタマージャーニーマップ",
      "サイトマップ",
      "ワイヤーフレーム",
      "ユースケース図"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0096",
    "unit": "情報デザイン",
    "field": "視覚化（応用）",
    "difficulty": "★★★★",
    "question": "ある2つの連続データの相関関係を調べたところ相関係数が「-0.78」であった。この関係を散布図で表現したとき、点の分布として最も適切なものはどれか。",
    "options": [
      "右上がりの直線に近い形できれいに点が集まっている",
      "右下がりの直線に近い形できれいに点が集まっている",
      "全体に円状にばらついており、明確な傾向が見られない",
      "全ての点が水平な一直線上に並んでいる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0097",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "情報の構造化と評価に関する思考問題である。ある学校のWebサイトで生徒が「年間行事予定」を探すのに非常に苦労している。調査したところ、「トップ ＞ 学校紹介 ＞ 校長挨拶 ＞ 年間行事」という深い階層に格納されていた。情報デザインの観点から、この構造が抱える最も本質的な問題点はどれか。",
    "options": [
      "パンくずリストが設置されていないこと",
      "マトリクス構造を採用していないため、検索機能が働かないこと",
      "ユーザーの目的（行事確認）と情報の分類（校長挨拶の配下）の論理的整合性が著しく低いこと",
      "サイト全体の総ページ数が多すぎること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0098",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "情報の表現とデジタル化に関する問題である。画像をコンピュータで処理・拡大する際、1つ1つの画素（ピクセル）の色情報を補間して、境界線を滑らかに見せる手法を何というか。",
    "options": [
      "ジャギー",
      "アンチエイリアシング",
      "ディザリング",
      "インフォグラフィックス"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0099",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ユニバーサルデザインとアクセシビリティの評価に関する問題である。ある自治体が高齢者向けの給付金申請サイトを開設した。情報デザインの観点から「アクセシビリティ」を担保するための施策として、最も不適切なものはどれか。",
    "options": [
      "文字のサイズをワンクリックで拡大できるボタンを設置する",
      "申請に必要なすべての手順を1枚の非常に長いページにスクロールなしで詰め込む",
      "音声読み上げソフト（スクリーンリーダー）が正しく機能するよう、画像に適切な代替テキスト（alt属性）を設定する",
      "背景色と文字色の明度差（コントラスト比）を十分に大きく取る"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0100",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "人間工学とユーザーインタフェースの設計に関する問題である。システムが機能停止に至るような致命的な故障や誤操作が発生した際、システム全体を安全な状態（安全側）に移行させるように制御する設計思想を何というか。",
    "options": [
      "フールプルーフ",
      "アフォーダンス",
      "ユーザビリティ",
      "フェイルセーフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0101",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "文字や画像、音声など、情報を表現し伝えるための媒介となるものを何というか。",
    "options": [
      "メディア",
      "ハイパーテキスト",
      "マルチメディア",
      "プロトコル"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0102",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★★",
    "question": "新聞やテレビのように、発信者から不特定多数の受信者へ一方通行で情報を伝えるメディアの分類はどれか。",
    "options": [
      "共有メディア",
      "伝達メディア",
      "表現メディア",
      "記録メディア"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0103",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "USBメモリやSSD、DVDなどのように、情報を長期間保存するために用いるメディアの分類はどれか。",
    "options": [
      "伝達メディア",
      "表現メディア",
      "記録メディア",
      "通信メディア"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0104",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★",
    "question": "Webサイトなどで、トップページから順に枝分かれしていく情報の構成要素を可視化した図構造を何というか。",
    "options": [
      "階層構造（ツリー構造）",
      "網の目構造（ネットワーク構造）",
      "直線構造（シーシャル構造）",
      "輪構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0105",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★★",
    "question": "百科事典やWikipediaのように、各情報がリンクによって相互に関連付けられている情報の構造を何というか。、",
    "options": [
      "階層構造",
      "直線構造",
      "グリッド構造",
      "ネットワーク構造（ハイパーテキスト構造）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0106",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "情報を分かりやすく整理し、受け手に意図した通りに伝わるように表現を工夫することを何というか。、",
    "options": [
      "ユニバーサルデザイン",
      "情報デザイン",
      "グラフィックデザイン",
      "インタフェースデザイン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0107",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★",
    "question": "デザインにおいて、関連する要素を近づけて配置し、グループとして認識しやすくする原則を何というか。",
    "options": [
      "近接（グループ化）",
      "整列",
      "対比",
      "反復"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0108",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★★",
    "question": "重要な情報とそうでない情報の差をはっきりさせるため、文字の大きさや色にメリハリをつける原則を何というか。、",
    "options": [
      "反復",
      "整列",
      "対比（コントラスト）",
      "近接"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0109",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★★",
    "question": "画面上の要素の端（左揃え、中央揃えなど）をきれいに揃えることで、視線の移動をスムーズにする原則を何というか。",
    "options": [
      "近接",
      "整列",
      "反復",
      "対比"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0110",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "赤、黄、青といった、色そのものの「色み」の違いを表す性質を何というか。、",
    "options": [
      "明度",
      "彩度",
      "色相",
      "輝度"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0111",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "色相環において、真反対に位置する２つの色の組み合わせを何というか。",
    "options": [
      "同系色",
      "補色",
      "類似色",
      "無彩色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0112",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "色の三属性のうち、色の「明るさの度合い」を表す性質を何というか。",
    "options": [
      "色相",
      "彩度",
      "明度",
      "色度"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0113",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "色の三属性のうち、色の「鮮やかさの度合い」を表す性質を何というか。",
    "options": [
      "彩度",
      "明度",
      "色相",
      "純度"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0114",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★",
    "question": "数値データの変化の割合や推移（時間の経過による変化）を表現するのに最も適したグラフはどれか。",
    "options": [
      "棒グラフ",
      "折れ線グラフ",
      "円グラフ",
      "散布図"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0115",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★",
    "question": "データの各項目の大きさや量を単純に比較するのに最も適したグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "円グラフ",
      "棒グラフ",
      "レーダーチャート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0116",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★",
    "question": "全体に対する各内訳の割合・構成比を表現するのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "棒グラフ",
      "散布図",
      "折れ線グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0117",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★",
    "question": "年齢や障害の有無に関わらず、すべての人が製品やサービスを問題なく利用できるような設計思想を何というか。",
    "options": [
      "バリアフリーデザイン",
      "ユニバーサルデザイン",
      "Webアクセシビリティ",
      "インクルーシブデザイン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0118",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "コンピュータと利用者との間で情報のやり取りを行う境界や仕組みのことを何というか。",
    "options": [
      "インタフェース",
      "プロトコル",
      "ゲートウェイ",
      "OS"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0119",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★★",
    "question": "スマートフォンなどのように、画面上のアイコンを直接指で触れて視覚的に操作できるインタフェース（UI）の方式を何というか。",
    "options": [
      "CUI",
      "GUI",
      "API",
      "VUI"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0120",
    "unit": "情報デザイン",
    "field": "プロトタイプ",
    "difficulty": "★★",
    "question": "システムやWebサイトの開発において、本格的な制作に入る前に試作される「試作品」のことを何というか。",
    "options": [
      "ワイヤーフレーム",
      "モックアップ",
      "プロトタイプ",
      "サムネイル"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0121",
    "unit": "情報デザイン",
    "field": "情報デザイン",
    "difficulty": "★",
    "question": "情報デザインの目的として最も適切なものはどれか。",
    "options": [
      "情報量をできるだけ増やすこと",
      "情報を分かりやすく伝えること",
      "文字を装飾すること",
      "最新の技術を使うこと"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0122",
    "unit": "情報デザイン",
    "field": "情報デザイン",
    "difficulty": "★★",
    "question": "学校行事のポスターを作成する際、重要な情報を目立たせる方法として最も適切なものはどれか。",
    "options": [
      "全て同じ大きさの文字で表す",
      "色や大きさに変化をつける",
      "文章だけで説明する",
      "情報をランダムに配置する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0123",
    "unit": "情報デザイン",
    "field": "メディア",
    "difficulty": "★★",
    "question": "文字・音声・画像・動画など、さまざまな表現手段を組み合わせて情報を伝えることを何というか。",
    "options": [
      "データベース",
      "マルチメディア",
      "ユニバーサルデザイン",
      "ネットワーク"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0124",
    "unit": "情報デザイン",
    "field": "コミュニケーション",
    "difficulty": "★★",
    "question": "対面での会話と比べて、SNSやメールでのコミュニケーションにおいて特に注意が必要な点はどれか。",
    "options": [
      "送信速度が遅いこと",
      "相手の表情や声の調子が伝わりにくいこと",
      "文字数に制限があること",
      "情報を保存できないこと"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0125",
    "unit": "情報デザイン",
    "field": "プレゼンテーション",
    "difficulty": "★",
    "question": "プレゼンテーションで、聞き手の理解を助けるために用いられる図や表を総称して何というか。",
    "options": [
      "アルゴリズム",
      "コンテンツ",
      "視覚資料",
      "プロトコル"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0126",
    "unit": "情報デザイン",
    "field": "色彩",
    "difficulty": "★★",
    "question": "赤や黄色などの暖かさを感じさせる色を何というか。",
    "options": [
      "寒色",
      "中間色",
      "暖色",
      "補色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0127",
    "unit": "情報デザイン",
    "field": "色彩",
    "difficulty": "★★",
    "question": "青や水色などの涼しさを感じさせる色を何というか。",
    "options": [
      "寒色",
      "暖色",
      "補色",
      "原色"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0128",
    "unit": "情報デザイン",
    "field": "色彩",
    "difficulty": "★★★",
    "question": "赤色の文字を背景色の緑色の上に配置したところ、読みにくいという意見が出た。この原因として最も適切なものはどれか。",
    "options": [
      "文字数が少ないため",
      "色のコントラストが強すぎるため",
      "補色の組み合わせによって見づらく感じる人がいるため",
      "画像が含まれていないため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0129",
    "unit": "情報デザイン",
    "field": "ユニバーサルデザイン",
    "difficulty": "★★",
    "question": "年齢や障害の有無などにかかわらず、多くの人が利用しやすいように設計する考え方を何というか。",
    "options": [
      "アクセシビリティ",
      "ユニバーサルデザイン",
      "バリアフリー",
      "デザイン思考"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0130",
    "unit": "情報デザイン",
    "field": "ユニバーサルデザイン",
    "difficulty": "★★★",
    "question": "色覚特性を持つ人にも見やすいグラフを作成するための工夫として最も適切なものはどれか。",
    "options": [
      "色だけで区別する",
      "似た色を多用する",
      "色に加えて模様やラベルを用いる",
      "赤と緑のみを使用する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0131",
    "unit": "情報デザイン",
    "field": "Webデザイン",
    "difficulty": "★★",
    "question": "Webページ上で文字や画像の配置や見た目を指定する言語はどれか。",
    "options": [
      "HTML",
      "CSS",
      "Python",
      "SQL"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0132",
    "unit": "情報デザイン",
    "field": "Webデザイン",
    "difficulty": "★★",
    "question": "Webページの構造を記述するために用いられる言語はどれか。",
    "options": [
      "JavaScript",
      "Python",
      "HTML",
      "CSS"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0133",
    "unit": "情報デザイン",
    "field": "Webデザイン",
    "difficulty": "★★★",
    "question": "スマートフォンとパソコンの両方で見やすいWebページを作成するための手法を何というか。",
    "options": [
      "レスポンシブデザイン",
      "フラットデザイン",
      "マルチメディア",
      "オープンデータ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0134",
    "unit": "情報デザイン",
    "field": "コミュニケーション",
    "difficulty": "★★★",
    "question": "チャットで『了解』という短いメッセージを送ったところ、相手が冷たい印象を受けた。この原因として最も適切なものはどれか。",
    "options": [
      "通信速度が遅かったため",
      "文字情報だけでは感情が伝わりにくいため",
      "暗号化されていなかったため",
      "誤字があったため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0135",
    "unit": "情報デザイン",
    "field": "プレゼンテーション",
    "difficulty": "★★",
    "question": "プレゼンテーション資料に文章を大量に詰め込んだ場合に起こりやすい問題として最も適切なものはどれか。",
    "options": [
      "通信量が増える",
      "聞き手が内容を理解しにくくなる",
      "画像が表示されなくなる",
      "データ容量が減少する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0136",
    "unit": "情報デザイン",
    "field": "プレゼンテーション",
    "difficulty": "★★★",
    "question": "グラフを用いて情報を伝える際、円グラフが特に適しているものはどれか。",
    "options": [
      "時間による変化",
      "複数の項目の比較",
      "全体に占める割合",
      "大量の数値データ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0137",
    "unit": "情報デザイン",
    "field": "プレゼンテーション",
    "difficulty": "★★★",
    "question": "売上の推移を示す資料を作成する際、最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "折れ線グラフ",
      "帯グラフ",
      "レーダーチャート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0138",
    "unit": "情報デザイン",
    "field": "コミュニケーション",
    "difficulty": "★★★★",
    "question": "オンライン会議では、発言のタイミングが重なりやすい。この問題を解決する方法として最も適切なものはどれか。",
    "options": [
      "全員が同時に話す",
      "発言の順番やルールを決める",
      "チャット機能を禁止する",
      "カメラをオフにする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0139",
    "unit": "情報デザイン",
    "field": "情報デザイン",
    "difficulty": "★★★★",
    "question": "同じ内容の情報でも、図やアイコンを用いることで理解しやすくなる理由として最も適切なものはどれか。",
    "options": [
      "データ量が減るため",
      "視覚的に特徴を把握しやすくなるため",
      "通信速度が向上するため",
      "情報が暗号化されるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0140",
    "unit": "情報デザイン",
    "field": "ユニバーサルデザイン",
    "difficulty": "★★★★",
    "question": "駅の案内表示で、日本語だけでなく英語やピクトグラムが使われている理由として最も適切なものはどれか。",
    "options": [
      "デザインを派手にするため",
      "看板の数を増やすため",
      "多様な利用者に情報を伝えやすくするため",
      "印刷費用を削減するため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0141",
    "unit": "情報デザイン",
    "field": "情報デザイン",
    "difficulty": "★★★★★",
    "question": "情報デザインにおいて『受け手を意識する』ことが重要である理由として最も適切なものはどれか。",
    "options": [
      "送信者の好みを反映するため",
      "利用するソフトウェアを統一するため",
      "受け手によって必要な情報や表現方法が異なるため",
      "データ容量を小さくするため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0142",
    "unit": "情報デザイン",
    "field": "コミュニケーション",
    "difficulty": "★★★★★",
    "question": "SNSの普及によって、個人が簡単に情報を発信できるようになった社会で特に重要となる姿勢はどれか。",
    "options": [
      "注目を集めるために事実確認を省略する",
      "情報の受け手や影響を考えて発信する",
      "できるだけ多くの情報を拡散する",
      "匿名であれば責任を負わない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0143",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★★★",
    "question": "動画教材を作成する際、聴覚に障害のある人への配慮として最も適切なものはどれか。",
    "options": [
      "音量を大きくする",
      "字幕を付ける",
      "再生速度を上げる",
      "画質を下げる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0144",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★★★",
    "question": "Webサイトの画像に代替テキスト（alt属性）を設定する主な目的として最も適切なものはどれか。",
    "options": [
      "画像の容量を減らすため",
      "検索結果の順位を上げるため",
      "画像が表示されない場合や音声読み上げに対応するため",
      "ページの読み込みを高速化するため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0145",
    "unit": "情報デザイン",
    "field": "情報デザイン",
    "difficulty": "★★★★★",
    "question": "防災情報を伝えるポスターを作成する際に最も重視すべき点はどれか。",
    "options": [
      "装飾を増やして目立たせること",
      "掲載する情報量を増やすこと",
      "誰もが短時間で必要な情報を理解できること",
      "最新のデザイン技法を取り入れること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0146",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "Webサイトの使いやすさや、ユーザーがサービスを利用した際に得られる「心地よさ」「満足度」などの体験全体のことを何というか。",
    "options": [
      "UX（ユーザーエクスペリエンス）",
      "ユーザビリティ",
      "アフォーダンス",
      "アクセシビリティ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0147",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "文字の読みやすさを高めるために重要な背景の色と文字の色の間にある「明るさの差」のことを何というか。",
    "options": [
      "色相差",
      "彩度差",
      "明度差（コントラスト）",
      "補色関係"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0148",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "Webページをスクロールした際、画面の右下などに常に見えていて、クリックすると一瞬でページの最上部に戻れるボタンを何というか。",
    "options": [
      "パンくずリスト",
      "トップへ戻るボタン（Go to Top）",
      "ハンバーガーメニュー",
      "プレースホルダー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0149",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "「新聞」や「書籍」のように一度印刷して発行すると後から内容を変更することが難しい代わりに正確な記録として残りやすいメディアの特性を何というか。",
    "options": [
      "双方向性",
      "リアルタイム性",
      "アーカイブ性・固定性",
      "個別受信性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0150",
    "unit": "情報デザイン",
    "field": "情報の構造化（練習）",
    "difficulty": "★★",
    "question": "「世界遺産の一覧」を「アジア」「ヨーロッパ」「アフリカ」などの地域ごとに分類して整理するのに最も適した情報の構造はどれか。",
    "options": [
      "直線構造",
      "階層構造",
      "ネットワーク構造",
      "マトリクス構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0151",
    "unit": "情報デザイン",
    "field": "レイアウト（練習）",
    "difficulty": "★★",
    "question": "デザインの4原則において、同じ形式のアイコンや見出しのフォント、箇条書きのドットなどをページ内で繰り返し使用し、一貫性を持たせる原則はどれか。",
    "options": [
      "近接",
      "整列",
      "反復",
      "対比"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0152",
    "unit": "情報デザイン",
    "field": "視覚化（練習）",
    "difficulty": "★★",
    "question": "複雑なデータや統計、手続きの流れなどをイラストや図、グラフを用いて1枚の画像にわかりやすくまとめた表現手法を何というか。",
    "options": [
      "インフォグラフィックス",
      "ワイヤーフレーム",
      "タイポグラフィ",
      "プロトタイプ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0153",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（練習）",
    "difficulty": "★★",
    "question": "Webページの画像を表示できない環境や視覚障害者が音声読み上げブラウザを使用しているとき、画像の代わりに読み上げられる説明テキスト（属性）を何というか。",
    "options": [
      "src属性",
      "class属性",
      "href属性",
      "alt属性（代替テキスト）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0154",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（演習）",
    "difficulty": "★★★",
    "question": "Webサイトの上部に「ホーム ＞ 製品情報 ＞ スマートフォン ＞ 新機種」のように現在見ているページが全体のどの位置にあるかを階層で示すナビゲーションを何というか。",
    "options": [
      "ハンバーガーメニュー",
      "サイトマップ",
      "パンくずリスト",
      "フッターリンク"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0155",
    "unit": "情報デザイン",
    "field": "色彩設計（演習）",
    "difficulty": "★★★",
    "question": "Webデザインにおいてサイト全体の印象を決定づけ、ロゴマークなどにも使われる、全体の約25%を占める主役となる色のことを何というか。",
    "options": [
      "ベースカラー",
      "無彩色",
      "アクセントカラー",
      "メインカラー（ブランドカラー）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0156",
    "unit": "情報デザイン",
    "field": "情報の構造化（演習）",
    "difficulty": "★★★",
    "question": "「国語・数学・英語」という教科軸と「1年・2年・3年」という学年軸の2つの属性を掛け合わせて、補習用の教材を整理するのに最も適した情報の構造はどれか。",
    "options": [
      "階層構造",
      "ネットワーク構造",
      "直線構造",
      "マトリクス構造"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0157",
    "unit": "情報デザイン",
    "field": "レイアウト（演習）",
    "difficulty": "★★★",
    "question": "デザインにおいて文字のフォント（書体）の種類や大きさ、行間、文字間隔などを適切に調整し、文章を読みやすく美しく配置する技術を何というか。",
    "options": [
      "アフォーダンス",
      "ワイヤーフレーム",
      "ピクトグラム",
      "タイポグラフィ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0158",
    "unit": "情報デザイン",
    "field": "Webデザイン（応用）",
    "difficulty": "★★★★",
    "question": "スマートフォン向けWebサイトでよく見られる、3本の横線が並んだ形状をしており、タップするとメニュー画面が横からスライドして現れるアイコンを何というか。",
    "options": [
      "インフォグラフィックス",
      "パンくずリスト",
      "ハンバーガーメニュー",
      "ポップアップウインドウ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0159",
    "unit": "情報デザイン",
    "field": "色彩設計（応用）",
    "difficulty": "★★★★",
    "question": "色の3属性（色相・明度・彩度）のうち「色の鮮やかさ（度合い）」を表す言葉はどれか。",
    "options": [
      "色相",
      "明度",
      "彩度",
      "トーン"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0160",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（応用）",
    "difficulty": "★★★★",
    "question": "利用者の視線が画面上のどこをどのように動いているかを特殊な装置で計測し、Webサイトのレイアウト評価や改善に活かす分析手法を何というか。",
    "options": [
      "A/Bテスト",
      "アイトラッキング（視線計測）",
      "カスタマージャーニーマップ",
      "ペルソナ分析"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0161",
    "unit": "情報デザイン",
    "field": "視覚化（応用）",
    "difficulty": "★★★★",
    "question": "売上データの分析において、単に全体の平均値を見るだけでなく、データを「年齢層別」「地域別」などの小さなグループに切り分けて分析するアプローチを何というか。",
    "options": [
      "データの正規化",
      "クロス集計（セグメンテーション）",
      "データの平滑化",
      "仮説検定"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0162",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "情報デザインの評価に関する問題である。あるオンラインショップで「購入ボタン」がページの一番下に小さく配置されていたため売上が伸び悩んでいた。これを「画面上部に常に固定して大きく表示する」というUI変更を行った。この改善を評価するために行う変更前後の2つのデザインをランダムにユーザーに表示して効果を比較するテスト手法を何というか。",
    "options": [
      "ユーザビリティテスト",
      "アプローチ分析",
      "A/Bテスト",
      "プロトタイピング評価"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0163",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "情報のデジタル化とデータ表現に関する問題である。コンピュータで扱う「色」において、RGB各色を8ビット（計24ビット）で表現する「フルカラー」では、最大で約何色の異なる色を表現することができるか。",
    "options": [
      "約256色",
      "約6万5千色",
      "約1677万色",
      "約43億色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0164",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "バリアフリーと情報デザインに関する問題である。文字の形そのものを工夫し、読み間違えにくく、高齢者やロービジョン（弱視）の人でも認識しやすいように設計されたフォント（書体）の総称を何というか。",
    "options": [
      "ユニバーサルデザインフォント（UDフォント）",
      "アウトラインフォント",
      "ビットマップフォント",
      "プロポーショナルフォント"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0165",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "人間工学とインタフェースデザインの原則に関する問題である。電子レンジの設計において「扉が開いているときは、加熱スタートボタンを押しても絶対にマイクロ波が放射されない」というように、ユーザーの誤操作や想定外の行動があっても致命的な事故が起きないように物理的な制限をかける設計思想を何というか。",
    "options": [
      "フェイルセーフ",
      "フールプルーフ",
      "サステナビリティ",
      "アクセシビリティ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0166",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "デザインにおける「アフォーダンス」に対し、物事が本来持つ意味をユーザーに正しく伝えるための「知覚可能な手がかりや合図」のことを認知心理学で何というか。",
    "options": [
      "シグニファイア",
      "プロトタイプ",
      "メンタルモデル",
      "ワイヤーフレーム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0167",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "Webサイトを閲覧する際、ユーザーが「どこをクリックすれば何が起きるか」を過去の経験から直感的に予測する、頭の中のイメージ（認知構造）を何というか。",
    "options": [
      "ペルソナ",
      "メンタルモデル",
      "カスタマージャーニー",
      "アプローチ分析"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0169",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "色覚特性（色盲や色弱など）を持つ人だけでなく、すべての人にとって見やすく誤認しにくいように配色を工夫する設計思想を何というか。",
    "options": [
      "マテリアルデザイン",
      "トーン配色",
      "カラーユニバーサルデザイン（CUD）",
      "補色コントラスト"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0170",
    "unit": "情報デザイン",
    "field": "情報の構造化（練習）",
    "difficulty": "★★",
    "question": "Webサイトの設計において、人間が短期記憶で一度に保持できる情報の限界数（マジックナンバー：5±2や7±2）を考慮して、メニューの項目数を絞る工夫は何に基づくか。",
    "options": [
      "認知心理学・人間工学",
      "確率・統計学",
      "記述統計",
      "離散数学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0171",
    "unit": "情報デザイン",
    "field": "レイアウト（練習）",
    "difficulty": "★★",
    "question": "デザインの4原則「整列」において、各要素をグリッド（格子状の縦横の線）に沿って配置し、画面全体に規則性と美しい調和をもたらすレイアウト手法を何というか。",
    "options": [
      "フリーレイアウト",
      "グリッドシステム",
      "ネットワークレイアウト",
      "マトリクス配置"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0172",
    "unit": "情報デザイン",
    "field": "視覚化（練習）",
    "difficulty": "★★",
    "question": "あるグラフでデータの数値自体の変化率よりも、グラフの「縦軸の目盛りの幅」を意図的に狭くすることで、変化が極端に激しいように見せる視覚的なテクニック（あるいは欺瞞）を何というか。",
    "options": [
      "データの平滑化",
      "視覚的強調（目盛りの操作）",
      "データの正規化",
      "クロス集計"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0173",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（練習）",
    "difficulty": "★★",
    "question": "Webアクセシビリティに関する国際的なガイドラインであり、Webコンテンツを障害者や高齢者を含むすべての人が利用しやすくするための世界標準の指針を何というか。",
    "options": [
      "WCAG（Web Content Accessibility Guidelines）",
      "JIS X 8341",
      "ISO 9001",
      "W3Cプロトコル"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0174",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（演習）",
    "difficulty": "★★★",
    "question": "ユーザーがWebサイトで目的を達成するまでに必要な「画面のスクロール」「ボタンのクリック」「文字入力」などユーザー側が支払う肉体的・精神的な労力の総量を何というか。",
    "options": [
      "アクセシビリティコスト",
      "インタラクションコスト",
      "ユーザビリティスケール",
      "UI負荷（タスクロード）"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0175",
    "unit": "情報デザイン",
    "field": "色彩設計（演習）",
    "difficulty": "★★★",
    "question": "Webサイトを訪れたユーザーに対し、注意を促したり、最も重要なアクション（購入や申し込みなど）を促すボタンに適用される全体の約5%を占める際立った色のことを何というか。",
    "options": [
      "ベースカラー",
      "メインカラー",
      "アクセントカラー",
      "無彩色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0176",
    "unit": "情報デザイン",
    "field": "情報の構造化（演習）",
    "difficulty": "★★★",
    "question": "Webサイトにおいてすべてのページへのリンクを1つの画面に階層的にまとめ、ユーザーや検索エンジンがサイトの全体像を把握しやすくしたページの記述を何というか。",
    "options": [
      "パンくずリスト",
      "ハンバーガーメニュー",
      "サイトマップ",
      "ランディングページ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0177",
    "unit": "情報デザイン",
    "field": "レイアウト（演習）",
    "difficulty": "★★★",
    "question": "ユーザーがWebサイトを閲覧する際、視線が「左上 → 右上 → 左下 → 右下」と、アルファベットの文字を描くように動く一般的な視線移動のパターンを何というか。",
    "options": [
      "Fの法則",
      "Zの法則",
      "Nの法則",
      "Oの法則"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0178",
    "unit": "情報デザイン",
    "field": "Webデザイン（応用）",
    "difficulty": "★★★★",
    "question": "ユーザーの利益よりもサイト運営者の利益（メルマガ強制登録や有料オプションの自動追加など）を優先し、ユーザーを視覚的・心理的に騙して誤操作を誘導する不適切なUIデザインの総称を何というか。",
    "options": [
      "フラットデザイン",
      "ダークパターン",
      "スケューモフィズム",
      "バッドUI"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0179",
    "unit": "情報デザイン",
    "field": "色彩設計（応用）",
    "difficulty": "★★★★",
    "question": "印刷物で使われる色の3原色（CMYK）は色を混ぜるほど暗くなり、最終的に黒に近づく特性を持つ。この混色方法を何というか。",
    "options": [
      "加法混色",
      "減法混色",
      "中間混色",
      "並置混色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0180",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（応用）",
    "difficulty": "★★★★",
    "question": "単に「使いやすい製品」を作るだけでなく、ユーザーがサービスを知り、購入し、利用し終えるまでの「一連の顧客体験のプロセス全体」をデザインする手法を何というか。",
    "options": [
      "UIデザイン",
      "インタラクションデザイン",
      "サービスデザイン（UXデザイン）",
      "プロダクトデザイン"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0181",
    "unit": "情報デザイン",
    "field": "視覚化（応用）",
    "difficulty": "★★★★",
    "question": "多変量データ（多くの項目を持つデータ）を表現する視覚化手法の一つでデータの値を「人間の顔のパーツ（目の大きさ、口の形、眉の傾きなど）」に変形させて、直感的に特徴を比較できるようにした特殊なグラフを何というか。",
    "options": [
      "チェルノフの顔（フェイサグラフ）",
      "レーダーチャート",
      "インフォグラフィックス",
      "散布図行列"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0182",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "情報デザインのプロセスと評価に関する問題である。ユーザー中心のデザインアプローチにおいて「観察・共感 ＞ 課題定義 ＞ 概念創出（ブレスト） ＞ 試作（プロトタイプ） ＞ テスト」という5つのステップを繰り返し、革新的な解決策を導き出す思考法を何というか。",
    "options": [
      "論理的思考（ロジカルシンキング）",
      "デザイン思考（デザインシンキング）",
      "システム思考",
      "データ駆動型思考"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0183",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "情報の表現と視覚化に関する問題である。あるニュースサイトが「地球温暖化による気温上昇」を伝えるため世界の平均気温の推移をグラフにした。その際、過去100年間のデータをそのまま載せるのではなく、5年ごとの移動平均線を重ねて表示した。このように、データの細かいギザギザ（雑音）を取り除き、全体的な「傾向（トレンド）」を分かりやすくする処理を何というか。",
    "options": [
      "データの正規化",
      "データの平滑化",
      "データの二値化",
      "データのカプセル化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0184",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "アクセシビリティと法的・社会的要請に関する問題である。日本の「障害者差別解消法」の改正（2024年4月施行）に伴い、公的機関だけでなく民間事業者にとっても、Webサイトなどの情報アクセシビリティ確保において、どのような対応が「義務化」されたか。",
    "options": [
      "努力義務としての配慮",
      "合理的配慮の提供",
      "JIS規格の完全準拠の免除",
      "すべての画像ファイルの削除"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0185",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "人間工学と安全設計に関する問題である。スマートフォンの画面ロック解除において「パスワードを何度も間違えると、次の入力までに『30秒待つ』『5分待つ』と段階的にペナルティ時間を設ける」仕様になっている。この設計が防ごうとしている、考えられるすべての文字や数字の組み合わせを片端から試すサイバー攻撃の手法（パスワードクラック）を何というか。",
    "options": [
      "ソーシャルエンジニアリング",
      "フィッシング詐欺",
      "総当たり攻撃（ブルートフォースアタック）",
      "マルウェア感染"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0186",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "デザインにおける情報のまとまりや構造を可視化するため骨組みやレイアウトの配置、機能のみを単純な線と枠で表した、画面の「設計図」にあたるものを何というか。",
    "options": [
      "ワイヤーフレーム",
      "プロトタイプ",
      "モックアップ",
      "ムードボード"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0187",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "人間がシステムを操作する際、機能のボタンが画面の端に小さく配置されていると、移動距離が長くクリックに時間がかかるという、UI設計の古典的な法則を何というか。",
    "options": [
      "フィッツの法則",
      "ヒックの法則",
      "ゲシュタルトの法則",
      "ヤコブの法則"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0188",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "「紙の書籍」や「印刷された新聞」が持つ電源や通信環境がなくてもいつでもどこでもすぐに文字情報を読めるというメディアの特性を何というか。",
    "options": [
      "可搬性（ポータビリティ）",
      "双方向性",
      "リアルタイム性",
      "アーカイブ性"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0189",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "Webデザインなどで明度や彩度が共通している（同じ系統の）色のグループをまとめて扱い、デザイン全体に統一された雰囲気を与える色の共通属性を何というか。",
    "options": [
      "トーン（色調）",
      "色相",
      "輝度",
      "コントラスト"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0190",
    "unit": "情報デザイン",
    "field": "情報の構造化（練習）",
    "difficulty": "★★",
    "question": "Webサイトのメニュー設計において選択肢の数が多すぎるとユーザーが決定を下すまでの時間が対数的に増加するという、UI/UXデザインの法則を何というか。",
    "options": [
      "ヒックの法則",
      "フィッツの法則",
      "マトリクス法則",
      "マジックナンバーの法則"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0191",
    "unit": "情報デザイン",
    "field": "レイアウト（練習）",
    "difficulty": "★★",
    "question": "デザインの4原則「近接」において関連する情報同士を近づけて配置することで生まれる、情報が何も配置されていない「意図的な空間」のことを何というか。",
    "options": [
      "ホワイトスペース（余白）",
      "デッドスペース",
      "グリッドライン",
      "マージン領域"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0192",
    "unit": "情報デザイン",
    "field": "視覚化（練習）",
    "difficulty": "★★",
    "question": "インフォグラフィックスの一種で物事の「手順」「作業手順」「時系列の流れ」を矢印や記号を用いて、直感的にわかりやすく図式化したものを何というか。",
    "options": [
      "フローチャート（工程図）",
      "マインドマップ",
      "タイムライン",
      "ピクトグラム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0193",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（練習）",
    "difficulty": "★★",
    "question": "Webアクセシビリティにおいてキーボードの「Tabキー」を押した際に、現在どのボタンやリンクが選択されているかを視覚的に示す枠線のことを何というか。",
    "options": [
      "フォーカスリング",
      "インジケーター",
      "プレースホルダー",
      "ポップアップ枠"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0194",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（演習）",
    "difficulty": "★★★",
    "question": "デザインの心理学的アプローチにおいて人間がバラバラの要素を目にしたとき、それらを無意識に「近いもの同士」「同じ色のもの同士」で1つのグループとして認識する視覚特性を何というか。",
    "options": [
      "ゲシュタルトの法則（体制化）",
      "アフォーダンス",
      "メンタルモデル",
      "シグニファイア"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0195",
    "unit": "情報デザイン",
    "field": "色彩設計（演習）",
    "difficulty": "★★★",
    "question": "暗い映画館の非常口誘導灯のように背景が暗いときに手前の文字や図形を明るい色（蛍光の緑など）にすることで、一目で情報が認識しやすくなる「見やすさ」の度合いを何というか。",
    "options": [
      "可読性",
      "誘目性",
      "識別性",
      "視認性"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0196",
    "unit": "情報デザイン",
    "field": "情報の構造化（演習）",
    "difficulty": "★★★",
    "question": "Webサイトのページ上部に「ホーム ＞ 製品情報 ＞ スマートフォン ＞ 詳細」のように現在地からトップページまでの階層構造をテキストリンクで示した、移動を補助するUI要素を何というか。",
    "options": [
      "パンくずリスト",
      "ナビゲーションバー",
      "フッターメニュー",
      "サイトマップ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0197",
    "unit": "情報デザイン",
    "field": "レイアウト（演習）",
    "difficulty": "★★★",
    "question": "Webサイトのデザインにおいてユーザーの視線がまず左上にとどまり、そこから「右上 → 少し下がって左 → 右」と、アルファベットの特定の文字の形に沿って動くパターンを何というか。",
    "options": [
      "Nの法則",
      "Zの法則",
      "Eの法則",
      "Fの法則"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0198",
    "unit": "情報デザイン",
    "field": "Webデザイン（応用）",
    "difficulty": "★★★★",
    "question": "Webサイトの評価においてアクセスしたユーザーが最初の1ページだけを見て、他のページに移動することなくそのままサイトを離脱してしまう割合を何というか。",
    "options": [
      "クリック率",
      "離脱率",
      "コンバージョン率",
      "直帰率（バウンスレート）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0199",
    "unit": "情報デザイン",
    "field": "色彩設計（応用）",
    "difficulty": "★★★★",
    "question": "JIS安全色（JIS Z 9103）において踏切の警戒標識や道路の工事現場など、「注意」や「警告」を喚起するために黒色と組み合わせて用いられる、最も引き立つ色は何色か。",
    "options": [
      "青色",
      "赤色",
      "緑色",
      "黄色"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0200",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（応用）",
    "difficulty": "★★★★",
    "question": "UIデザインにおいてボタンにマウスカーソルを合わせたときにボタンの色が変わったり、クリックしたときに凹むような視覚効果を出すことで操作可能であることをユーザーに伝える仕組みを何というか。",
    "options": [
      "プロトタイピング",
      "マイクロインタラクション",
      "アフォーダンス・シグナル",
      "インタラクティブ・フィードバック"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0201",
    "unit": "情報デザイン",
    "field": "視覚化（応用）",
    "difficulty": "★★★★",
    "question": "地理的なデータ（人口密度や気温など）を地図上に表す際、数値の大きさに応じて地域ごとの「色の濃淡や明暗」で塗り分けて視覚化する統計地図を何というか。",
    "options": [
      "階級区分図（コーロプレスマップ）",
      "等値線図",
      "図形表現図",
      "カートグラム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0202",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "情報デザインの評価手法に関する問題である。あるアプリの開発において操作性の課題を発見するために、実際の想定ユーザーにアプリを使ってもらい、その様子を観察したり思考を口に出してもらうことでUIの欠点や使いにくさを抽出する調査手法を何というか。",
    "options": [
      "ユーザーテスト（ユーザビリティテスト）",
      "A/Bテスト",
      "アンケート調査",
      "アクセスログ解析"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0203",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "情報のデジタル化とフォントのデザインに関する問題である。コンピュータで扱う文字（フォント）のうち文字の線の端に「セリフ」と呼ばれる小さな飾り（ひげ）がなく、縦横の線の太さがほぼ一様でデジタル画面での視認性に優れた書体スタイルを何というか。",
    "options": [
      "等幅フォント",
      "セリフ（明朝体）",
      "スクリプト（筆記体）",
      "サンセリフ（ゴシック体）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0204",
    "unit": "情報デザイン",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "インフォグラフィックスと情報の信頼性に関する思考問題である。ある自治体が「年間のゴミ排出量の推移」を住民に伝えるためグラフを用いたインフォグラフィックスを作成した。この際、情報の正確性と誠実性を保つために「最も避けるべき（不適切とされる）」視覚表現はどれか。",
    "options": [
      "ゴミの量を表す3D（立体）イラストの「高さ」だけでなく「縦横の比率」も同時に拡大し体積比で実際の数値以上の変化があるように見せる",
      "データの出所（出典）となった中央省庁の統計資料名と調査年をグラフの隅に明記する",
      "過去10年間のデータを省略せず等間隔の横軸で時系列に並べて表示する",
      "色のバリアフリーを考慮し、ゴミの種類（可燃・不燃）を赤と緑の差だけでなく、網掛け（パターン）を併用して区別する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0205",
    "unit": "情報デザイン",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "ヒューマンインタフェースの安全設計に関する問題である。電子レンジの設計において「扉が開いている状態ではユーザーが開始ボタンを押しても絶対にマイクロ波が放射されない（加熱が始まらない）」という誤操作による事故や危険を未然に防ぐ安全思想を何というか。",
    "options": [
      "インターロック（フールプルーフの一種）",
      "フェイルセーフ",
      "フェイルソフト",
      "フォールトトレラント"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0206",
    "unit": "情報デザイン",
    "field": "コミュニケーション",
    "difficulty": "★",
    "question": "情報を伝える際に送り手が意図した内容を受け手に正しく理解してもらうために重要なものはどれか。",
    "options": [
      "通信速度",
      "画面サイズ",
      "記憶容量",
      "共通認識"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0207",
    "unit": "情報デザイン",
    "field": "コミュニケーション",
    "difficulty": "★★",
    "question": "同じ内容でも相手の年齢や知識に応じて表現方法を変える理由として最も適切なものはどれか。",
    "options": [
      "データ量を減らすため",
      "著作権を守るため",
      "通信速度を上げるため",
      "受け手に応じて理解しやすさが異なるため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0208",
    "unit": "情報デザイン",
    "field": "コミュニケーション",
    "difficulty": "★★★",
    "question": "外国人観光客向けの案内板で日本語だけでなく図記号を併記する目的として最も適切なものはどれか。",
    "options": [
      "装飾性を高めるため",
      "情報量を減らすため",
      "文化や言語の違いを超えて伝えるため",
      "印刷費を抑えるため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0209",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★",
    "question": "情報を「大分類→中分類→小分類」のように整理する構造を何というか。",
    "options": [
      "ネットワーク構造",
      "階層構造",
      "直線構造",
      "マトリクス構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0210",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★★",
    "question": "スマートフォンの設定画面のように「設定」→「Wi-Fi」→「接続先」と順にたどる構造として最も適切なものはどれか。",
    "options": [
      "並列構造",
      "直線構造",
      "ネットワーク構造",
      "階層構造"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0211",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★★★",
    "question": "複数の条件を縦横に組み合わせて情報を整理する表形式の構造を何というか。",
    "options": [
      "階層構造",
      "直線構造",
      "マトリクス構造",
      "木構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0212",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★★★★",
    "question": "SNSの投稿同士が相互にリンクされ、多様な経路で情報にアクセスできる構造として最も適切なものはどれか。",
    "options": [
      "直線構造",
      "マトリクス構造",
      "階層構造",
      "ネットワーク構造"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0213",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "情報を分かりやすく整理し、相手に効果的に伝える活動を何というか。",
    "options": [
      "情報処理",
      "情報設計",
      "情報共有",
      "情報デザイン"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0214",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★★",
    "question": "情報デザインで最も重視される観点として適切なものはどれか。",
    "options": [
      "制作者の好み",
      "受け手の理解しやすさ",
      "データ容量",
      "印刷速度"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0215",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★★★",
    "question": "学校案内を作成する際、まず行うべきこととして最も適切なものはどれか。",
    "options": [
      "配色を決める",
      "フォントを選ぶ",
      "画像を集める",
      "伝えたい相手と目的を明確にする"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0216",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★",
    "question": "時間の経過に伴う変化を表すのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "折れ線グラフ",
      "帯グラフ",
      "レーダーチャート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0217",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★",
    "question": "全体に対する割合を表すのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "散布図",
      "折れ線グラフ",
      "ヒストグラム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0218",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★",
    "question": "2種類のデータの関係性を分析するのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "散布図",
      "帯グラフ",
      "レーダーチャート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0219",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★",
    "question": "度数分布を視覚的に表現するのに最も適したグラフはどれか。",
    "options": [
      "ヒストグラム",
      "折れ線グラフ",
      "散布図",
      "帯グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0220",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★★",
    "question": "テストの点数と学習時間の関係を調べるために散布図を作成したところ、右上がりの傾向が見られた。このことから考えられることとして最も適切なものはどれか。",
    "options": [
      "学習時間が長いほど点数が低い傾向がある",
      "学習時間と点数には関係がない",
      "学習時間と点数は必ず比例する",
      "学習時間が長いほど点数が高い傾向がある"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0221",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "色の三属性に含まれないものはどれか。",
    "options": [
      "色相",
      "明度",
      "彩度",
      "透明度"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0222",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "白・黒・灰色のように色味を持たない色を何というか。",
    "options": [
      "補色",
      "無彩色",
      "類似色",
      "暖色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0223",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "背景が黒で文字が濃い青色の場合、読みづらくなる主な原因として最も適切なものはどれか。",
    "options": [
      "彩度が高いため",
      "色数が少ないため",
      "文字数が多いため",
      "明度差が小さいため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0224",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★★",
    "question": "スライド全体の大部分を占める色を何というか。",
    "options": [
      "アクセントカラー",
      "ベースカラー",
      "テーマカラー",
      "補色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0225",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★★★",
    "question": "プレゼン資料において重要な数値だけを赤色で表示する目的として最も適切なものはどれか。",
    "options": [
      "データ量を減らすため",
      "印刷速度を上げるため",
      "容量を削減するため",
      "視線を誘導するため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0226",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★",
    "question": "高齢者や障害のある人を含め、誰もが情報を利用しやすい状態を何というか。",
    "options": [
      "ユーザビリティ",
      "レスポンシブ性",
      "インタラクティブ性",
      "アクセシビリティ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0227",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★",
    "question": "Webサイトで画像の内容を音声読み上げソフトに伝えるために設定するものはどれか。",
    "options": [
      "URL",
      "alt属性",
      "IPアドレス",
      "CSS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0228",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★★",
    "question": "色覚特性に配慮した資料作成として最も適切なものはどれか。",
    "options": [
      "色だけで区別する",
      "色に加えて形や文字でも区別する",
      "赤と緑を積極的に使う",
      "全て同じ色にする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0229",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★★★",
    "question": "駅の案内表示で日本語・英語・ピクトグラムが併記されている主な理由として最も適切なものはどれか。",
    "options": [
      "デザインを派手にするため",
      "容量を減らすため",
      "印刷を簡単にするため",
      "アクセシビリティを高めるため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0230",
    "unit": "情報デザイン",
    "field": "ユーザインタフェース",
    "difficulty": "★",
    "question": "コンピュータを操作する際に人と機械の接点となる部分を何というか。",
    "options": [
      "アルゴリズム",
      "データベース",
      "プロトコル",
      "ユーザインタフェース"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0231",
    "unit": "情報デザイン",
    "field": "ユーザインタフェース",
    "difficulty": "★★",
    "question": "「ごみ箱」や「保存」などを絵で表したものを何というか。",
    "options": [
      "ピクトグラム",
      "アイコン",
      "フォント",
      "テンプレート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0232",
    "unit": "情報デザイン",
    "field": "ユーザインタフェース",
    "difficulty": "★★★",
    "question": "ボタンを押せそうな見た目にすることで利用者に操作方法を想像させる性質を何というか。",
    "options": [
      "アクセシビリティ",
      "最適化",
      "ユーザビリティ",
      "アフォーダンス"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0233",
    "unit": "情報デザイン",
    "field": "ユーザインタフェース",
    "difficulty": "★★★★",
    "question": "利用者が誤った操作をしても重大な事故が起きないように設計する考え方を何というか。",
    "options": [
      "フェイルセーフ",
      "GUI",
      "レスポンシブデザイン",
      "マルチメディア"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0234",
    "unit": "情報デザイン",
    "field": "Webデザイン",
    "difficulty": "★★",
    "question": "スマートフォンやPCなど画面サイズに応じて表示を自動調整する設計手法を何というか。",
    "options": [
      "フラットデザイン",
      "マテリアルデザイン",
      "ワイヤーフレーム",
      "レスポンシブWebデザイン"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0235",
    "unit": "情報デザイン",
    "field": "Webデザイン",
    "difficulty": "★★★",
    "question": "Webページの設計段階で画面の構成や部品の配置を簡易的に表した図を何というか。",
    "options": [
      "モックアップ",
      "フローチャート",
      "サイトマップ",
      "ワイヤーフレーム"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0236",
    "unit": "情報デザイン",
    "field": "Webデザイン",
    "difficulty": "★★★★",
    "question": "ECサイトで「パンくずリスト」が用いられる主な目的として最も適切なものはどれか。",
    "options": [
      "広告を表示するため",
      "現在位置を分かりやすくするため",
      "検索速度を向上させるため",
      "画像を圧縮するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0237",
    "unit": "情報デザイン",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "学校の文化祭サイトを作成することになった。来場者には小学生、保護者、高齢者、外国人観光客が含まれる。最も適切な設計方針はどれか。",
    "options": [
      "デザイン性を優先し文字を小さくする",
      "色だけで情報を区別する",
      "日本語のみで案内を作る",
      "誰でも理解しやすい表現や案内を採用する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0238",
    "unit": "情報デザイン",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "あるアンケート結果を円グラフと折れ線グラフのどちらで表現するか検討している。「クラス全体に占める各回答の割合」を示したい場合、適切な選択はどれか。",
    "options": [
      "ヒストグラムを用いる",
      "折れ線グラフを用いる",
      "散布図を用いる",
      "円グラフを用いる"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0239",
    "unit": "情報デザイン",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "色覚特性を持つ人にも配慮した路線図を作成する際、最も不適切な改善策はどれか。",
    "options": [
      "線種を変える",
      "駅名を文字で示す",
      "記号を追加する",
      "色だけを変更して区別する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0240",
    "unit": "情報デザイン",
    "field": "コミュニケーションの基礎",
    "difficulty": "★",
    "question": "相手に情報を伝えるために文字や音声、画像などを用いて意思をやり取りすることを何というか。",
    "options": [
      "暗号化",
      "コミュニケーション",
      "標本化",
      "圧縮"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0241",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "情報を整理し、受け手に分かりやすく伝えるための工夫を何というか。",
    "options": [
      "情報デザイン",
      "情報検索",
      "データ分析",
      "プログラミング"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0242",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "情報を一度に多くの人へ伝えることができるメディアを何というか。",
    "options": [
      "パーソナルメディア",
      "マスメディア",
      "ソーシャルメディア",
      "ローカルメディア"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0243",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "コンピュータと利用者の接点となる画面やボタンなどを何というか。",
    "options": [
      "アルゴリズム",
      "ユーザーインタフェース",
      "プロトコル",
      "データベース"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0244",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★",
    "question": "数値の変化を時間の経過とともに表現するのに適したグラフはどれか。",
    "options": [
      "円グラフ",
      "棒グラフ",
      "折れ線グラフ",
      "散布図"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0245",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "白・黒・灰色のように色みを持たない色を何というか。",
    "options": [
      "補色",
      "暖色",
      "無彩色",
      "寒色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0246",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★",
    "question": "トップページから複数のページへ枝分かれする構造を何というか。",
    "options": [
      "直線構造",
      "ネットワーク構造",
      "階層構造",
      "マトリクス構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0247",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★",
    "question": "高齢者や障害のある人を含め、誰もが利用しやすい設計を何というか。",
    "options": [
      "ユーザビリティ",
      "アクセシビリティ",
      "アフォーダンス",
      "プロトタイピング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0248",
    "unit": "情報デザイン",
    "field": "コミュニケーションの基礎",
    "difficulty": "★",
    "question": "身振りや表情など言葉を用いないコミュニケーションを何というか。",
    "options": [
      "ノンバーバルコミュニケーション",
      "テキストコミュニケーション",
      "デジタルコミュニケーション",
      "ネットワークコミュニケーション"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0249",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "SNSに代表される利用者同士が双方向に情報を発信・共有できるメディアを何というか。",
    "options": [
      "マスメディア",
      "紙媒体",
      "ソーシャルメディア",
      "放送メディア"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0250",
    "unit": "情報デザイン",
    "field": "情報の構造化（練習）",
    "difficulty": "★★",
    "question": "学校のWebサイトで「学校案内→学科紹介→授業内容」のように順番にページをたどる構造として最も適切なものはどれか。",
    "options": [
      "直線構造",
      "階層構造",
      "マトリクス構造",
      "環状構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0251",
    "unit": "情報デザイン",
    "field": "視覚化（練習）",
    "difficulty": "★★",
    "question": "クラス全体の部活動の所属割合を表現するのに最も適したグラフはどれか。",
    "options": [
      "散布図",
      "折れ線グラフ",
      "円グラフ",
      "ヒストグラム"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0252",
    "unit": "情報デザイン",
    "field": "視覚化（練習）",
    "difficulty": "★★",
    "question": "身長と体重の関係のように2種類のデータの関連性を表すのに最も適したグラフはどれか。",
    "options": [
      "棒グラフ",
      "散布図",
      "円グラフ",
      "レーダーチャート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0253",
    "unit": "情報デザイン",
    "field": "色彩設計（練習）",
    "difficulty": "★★",
    "question": "色相環において互いに反対側に位置し、組み合わせることで強い印象を与える色の関係を何というか。",
    "options": [
      "類似色",
      "暖色",
      "補色",
      "中間色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0254",
    "unit": "情報デザイン",
    "field": "色彩設計（練習）",
    "difficulty": "★★",
    "question": "スライド全体の大部分を占める基本的な色を何というか。",
    "options": [
      "アクセントカラー",
      "ベースカラー",
      "イメージカラー",
      "サブカラー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0255",
    "unit": "情報デザイン",
    "field": "レイアウト（練習）",
    "difficulty": "★★",
    "question": "デザインの4原則のうち関連する情報を近くに配置する考え方を何というか。",
    "options": [
      "反復",
      "整列",
      "近接",
      "対比"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0256",
    "unit": "情報デザイン",
    "field": "レイアウト（練習）",
    "difficulty": "★★",
    "question": "デザインの4原則のうち同じ種類の要素に共通したデザインを繰り返す原則はどれか。",
    "options": [
      "近接",
      "反復",
      "対比",
      "整列"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0257",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（練習）",
    "difficulty": "★★",
    "question": "スマートフォンで画面を左右に指でなぞって移動する操作を何というか。",
    "options": [
      "タップ",
      "スワイプ",
      "ドラッグ",
      "ピンチアウト"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0258",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（練習）",
    "difficulty": "★★",
    "question": "ボタンが立体的に見えることで「押せそうだ」と感じさせる性質を何というか。",
    "options": [
      "アクセシビリティ",
      "アフォーダンス",
      "ユーザビリティ",
      "標本化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0259",
    "unit": "情報デザイン",
    "field": "コミュニケーション（練習）",
    "difficulty": "★★",
    "question": "オンライン会議では音声が聞き取りにくいことがある。この問題を減らすために最も有効な工夫はどれか。",
    "options": [
      "背景画像を変更する",
      "マイクを適切に設定する",
      "画面の明るさを下げる",
      "通知を増やす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0260",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（練習）",
    "difficulty": "★★",
    "question": "色覚特性を持つ人にも分かりやすい案内図を作る工夫として最も適切なものはどれか。",
    "options": [
      "色だけで区別する",
      "色数を増やす",
      "模様や文字も併用する",
      "赤と緑だけを使う"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0261",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（練習）",
    "difficulty": "★★",
    "question": "Webページの画像に代替テキストを設定する主な目的はどれか。",
    "options": [
      "画像を圧縮するため",
      "ページの容量を減らすため",
      "音声読み上げソフトで内容を伝えるため",
      "画像を拡大するため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0262",
    "unit": "情報デザイン",
    "field": "メディアの特性（練習）",
    "difficulty": "★★",
    "question": "新聞とSNSを比較したときSNSの特徴として最も適切なものはどれか。",
    "options": [
      "情報発信に時間がかかる",
      "双方向性が高い",
      "編集者しか投稿できない",
      "紙媒体である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0263",
    "unit": "情報デザイン",
    "field": "情報の構造化（練習）",
    "difficulty": "★★",
    "question": "商品の一覧を「価格帯」と「メーカー」の2つの観点から整理する方法として最も適した構造はどれか。",
    "options": [
      "直線構造",
      "階層構造",
      "マトリクス構造",
      "木構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0264",
    "unit": "情報デザイン",
    "field": "視覚化（練習）",
    "difficulty": "★★",
    "question": "あるクラスのテストの点数分布を表すのに最も適したグラフはどれか。",
    "options": [
      "ヒストグラム",
      "円グラフ",
      "散布図",
      "帯グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0265",
    "unit": "情報デザイン",
    "field": "レイアウト（練習）",
    "difficulty": "★★",
    "question": "プレゼンテーション資料で重要な部分だけ文字を大きくした。この工夫はデザインの4原則のうちどれに当たるか。",
    "options": [
      "整列",
      "近接",
      "反復",
      "対比"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0266",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（練習）",
    "difficulty": "★★",
    "question": "アプリの画面上でごみ箱の絵を見て「削除できる」と理解できるような設計を何というか。",
    "options": [
      "プロトタイピング",
      "アフォーダンス",
      "アクセシビリティ",
      "サンプリング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0267",
    "unit": "情報デザイン",
    "field": "コミュニケーション（練習）",
    "difficulty": "★★",
    "question": "電子メールで相手に誤解を与えないために最も重要なことはどれか。",
    "options": [
      "件名や本文を分かりやすく書く",
      "絵文字を多用する",
      "本文を短くする",
      "大文字を多く使う"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0268",
    "unit": "情報デザイン",
    "field": "コミュニケーション（練習）",
    "difficulty": "★★",
    "question": "対面での会話と比較した場合、チャットによるコミュニケーションの特徴として最も適切なものはどれか。",
    "options": [
      "表情や声の調子が伝わりやすい",
      "相手の反応を即座に確認しやすい",
      "文字情報のみで誤解が生じることがある",
      "非言語情報が多い"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0269",
    "unit": "情報デザイン",
    "field": "色彩設計（練習）",
    "difficulty": "★★",
    "question": "警告や危険を示す標識でよく使用される色として最も適切なものはどれか。",
    "options": [
      "青",
      "色のない灰色",
      "赤",
      "緑"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0270",
    "unit": "情報デザイン",
    "field": "情報の構造化（演習）",
    "difficulty": "★★★",
    "question": "学校のWebサイトを作成する際、「学校案内」「行事」「部活動」「進路」などの大分類から各ページへ移動できる構造として最も適切なものはどれか。",
    "options": [
      "直線構造",
      "階層構造",
      "環状構造",
      "行列構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0271",
    "unit": "情報デザイン",
    "field": "情報の構造化（演習）",
    "difficulty": "★★★",
    "question": "ECサイトで「価格帯」と「メーカー」の2つの条件を組み合わせて商品を検索できるようにした。このような情報整理に最も適した構造はどれか。",
    "options": [
      "直線構造",
      "木構造",
      "マトリクス構造",
      "放射構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0272",
    "unit": "情報デザイン",
    "field": "視覚化（演習）",
    "difficulty": "★★★",
    "question": "ある学校で各学年のスマートフォン所有率の推移を5年間比較したい。最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "ヒストグラム",
      "折れ線グラフ",
      "帯グラフ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0273",
    "unit": "情報デザイン",
    "field": "視覚化（演習）",
    "difficulty": "★★★",
    "question": "身長と握力の関係を調査したところ、身長が高い生徒ほど握力が強い傾向が見られた。この関係を確認するのに最も適したグラフはどれか。",
    "options": [
      "散布図",
      "円グラフ",
      "帯グラフ",
      "レーダーチャート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0274",
    "unit": "情報デザイン",
    "field": "視覚化（演習）",
    "difficulty": "★★★",
    "question": "複数の教科について、ある生徒の得意・不得意を一目で比較するのに最も適したグラフはどれか。",
    "options": [
      "棒グラフ",
      "折れ線グラフ",
      "レーダーチャート",
      "ヒストグラム"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0275",
    "unit": "情報デザイン",
    "field": "レイアウト（演習）",
    "difficulty": "★★★",
    "question": "デザインの4原則のうち、複数の見出しの位置をそろえて全体を整理して見せる原則はどれか。",
    "options": [
      "反復",
      "整列",
      "近接",
      "対比"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0276",
    "unit": "情報デザイン",
    "field": "レイアウト（演習）",
    "difficulty": "★★★",
    "question": "プレゼンテーション資料で重要な数値だけを大きな文字と太字で表示した。この工夫はどの原則に基づくものか。",
    "options": [
      "近接",
      "整列",
      "対比",
      "反復"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0277",
    "unit": "情報デザイン",
    "field": "レイアウト（演習）",
    "difficulty": "★★★",
    "question": "同じ種類のボタンをすべて同じ色・形で統一した。この工夫に最も関係する原則はどれか。",
    "options": [
      "近接",
      "反復",
      "整列",
      "強調"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0278",
    "unit": "情報デザイン",
    "field": "色彩設計（演習）",
    "difficulty": "★★★",
    "question": "スライド全体の70％を白、25％を青、5％を赤で構成した。この赤色の役割として最も適切なものはどれか。",
    "options": [
      "ベースカラー",
      "補色",
      "アクセントカラー",
      "背景色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0279",
    "unit": "情報デザイン",
    "field": "色彩設計（演習）",
    "difficulty": "★★★",
    "question": "色覚特性を持つ人にも見分けやすいグラフを作る工夫として最も適切なものはどれか。",
    "options": [
      "赤と緑だけを使う",
      "色だけで区別する",
      "模様や文字を併用する",
      "彩度を上げる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0280",
    "unit": "情報デザイン",
    "field": "色彩設計（演習）",
    "difficulty": "★★★",
    "question": "同じ明るさの赤と緑を用いた資料が見づらいと指摘された。改善策として最も適切なものはどれか。",
    "options": [
      "色数を増やす",
      "色相だけで区別する",
      "模様や線種も変更する",
      "文字サイズを小さくする"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0281",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（演習）",
    "difficulty": "★★★",
    "question": "Webページの画像に代替テキストを設定する主な目的として最も適切なものはどれか。",
    "options": [
      "画像容量を減らすため",
      "音声読み上げソフトで内容を伝えるため",
      "検索速度を上げるため",
      "画像を自動生成するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0282",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（演習）",
    "difficulty": "★★★",
    "question": "動画配信サイトで字幕機能を提供する主な目的として最も適切なものはどれか。",
    "options": [
      "通信量を削減するため",
      "音量を下げるため",
      "多様な利用者が内容を理解できるようにするため",
      "動画を短くするため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0283",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（演習）",
    "difficulty": "★★★",
    "question": "ATMで現金を引き出す前に確認画面を表示する設計は主に何を目的としているか。",
    "options": [
      "通信速度の向上",
      "誤操作の防止",
      "画面の装飾",
      "記憶容量の削減"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0284",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（演習）",
    "difficulty": "★★★",
    "question": "スマートフォンのアプリで画面下部に「ホーム」「検索」「設定」などの共通ボタンを配置する利点として最も適切なものはどれか。",
    "options": [
      "画面を華やかにするため",
      "ユーザーが操作方法を予測しやすくするため",
      "通信速度を上げるため",
      "データ量を減らすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0285",
    "unit": "情報デザイン",
    "field": "コミュニケーション（演習）",
    "difficulty": "★★★",
    "question": "オンライン会議では対面よりも相手の感情が伝わりにくいことがある。この原因として最も適切なものはどれか。",
    "options": [
      "通信速度が遅いため",
      "非言語情報が伝わりにくいため",
      "文字数が少ないため",
      "画面サイズが小さいため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0286",
    "unit": "情報デザイン",
    "field": "コミュニケーション（演習）",
    "difficulty": "★★★",
    "question": "同じ内容のメールでも件名が「至急：提出期限変更のお知らせ」となっている方が内容を理解しやすい理由として最も適切なものはどれか。",
    "options": [
      "文字数が増えるため",
      "情報の優先順位が明確になるため",
      "通信量が減るため",
      "閲覧回数が増えるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0287",
    "unit": "情報デザイン",
    "field": "Webデザイン（応用）",
    "difficulty": "★★★★",
    "question": "スマートフォン、タブレット、ＰＣ等、画面サイズに応じてレイアウトを自動調整する設計手法を何というか。",
    "options": [
      "フラットデザイン",
      "レスポンシブWebデザイン",
      "カードデザイン",
      "ユニバーサルデザイン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0288",
    "unit": "情報デザイン",
    "field": "Webデザイン（応用）",
    "difficulty": "★★★★",
    "question": "Webサイトのトップページから目的のページへ移動するまでのクリック回数が多すぎる場合、最も懸念される問題はどれか。",
    "options": [
      "アクセシビリティの向上",
      "ユーザビリティの低下",
      "色覚特性への配慮不足",
      "通信速度の低下"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0289",
    "unit": "情報デザイン",
    "field": "視覚化（応用）",
    "difficulty": "★★★★",
    "question": "ある商品の広告費と売上の関係を散布図で表したところ相関係数が0.92であった。この結果から読み取れる内容として最も適切なものはどれか。",
    "options": [
      "強い正の相関がある",
      "強い負の相関がある",
      "相関がほとんどない",
      "必ず因果関係がある"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0290",
    "unit": "情報デザイン",
    "field": "視覚化（応用）",
    "difficulty": "★★★★",
    "question": "クラスAとクラスBのテスト平均点は同じだったがAの標準偏差はBより大きかった。このことから考えられる内容として最も適切なものはどれか。",
    "options": [
      "Aの方が得点のばらつきが大きい",
      "Bの方が平均点が高い",
      "Aの人数が少ない",
      "Bの方が難しい問題を解いた"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0291",
    "unit": "情報デザイン",
    "field": "色彩設計（応用）",
    "difficulty": "★★★★",
    "question": "災害時の避難経路を示す地図を作成する際、色だけで経路を区別することが望ましくない理由として最も適切なものはどれか。",
    "options": [
      "印刷費が増えるため",
      "色覚特性によって区別できない場合があるため",
      "データ容量が増えるため",
      "地図が拡大できなくなるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0292",
    "unit": "情報デザイン",
    "field": "アクセシビリティ（応用）",
    "difficulty": "★★★★",
    "question": "高齢者向けのスマートフォンアプリを設計する際、最も適切な工夫はどれか。",
    "options": [
      "文字サイズを小さくする",
      "操作を複雑にする",
      "ボタンを大きくして配置する",
      "色数を増やす"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0293",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（応用）",
    "difficulty": "★★★★",
    "question": "エレベーターの「開く」と「閉じる」のボタンが隣接して配置されている場合、誤操作を防ぐ工夫として最も適切なものはどれか。",
    "options": [
      "色や形を変える",
      "文字を小さくする",
      "ボタン数を増やす",
      "配置をランダムにする"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0294",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース（応用）",
    "difficulty": "★★★★",
    "question": "ATMでは停電時に現金が払い出されないよう設計されている。この考え方として最も適切なものはどれか。",
    "options": [
      "アフォーダンス",
      "アクセシビリティ",
      "フェイルセーフ",
      "プロトタイピング"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0295",
    "unit": "情報デザイン",
    "field": "情報デザイン総合（応用）",
    "difficulty": "★★★★",
    "question": "学校説明会の資料を作成する際、「重要な情報が一目で分かる」「誰でも読みやすい」「目的の情報を探しやすい」を同時に満たすために最も重要な考え方はどれか。",
    "options": [
      "情報デザイン",
      "データ圧縮",
      "プログラム設計",
      "暗号化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0296",
    "unit": "情報デザイン",
    "field": "大学入試レベル（応用）",
    "difficulty": "★★★★",
    "question": "ある自治体が作成したWebサイトについて、「音声読み上げソフトで一部のボタンが認識されない」という指摘があった。この問題を改善する方法として最も適切なものはどれか。",
    "options": [
      "画像を増やす",
      "代替テキストを設定する",
      "背景色を増やす",
      "文字数を減らす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0297",
    "unit": "情報デザイン",
    "field": "大学入試レベル（応用）",
    "difficulty": "★★★★",
    "question": "駅の案内表示を改善することになった。外国人観光客や子ども高齢者にも伝わりやすい表示として最も適切なものはどれか。",
    "options": [
      "日本語だけで表示する",
      "色だけで区別する",
      "文字とピクトグラムを併用する",
      "情報量を減らす"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0298",
    "unit": "情報デザイン",
    "field": "大学入試レベル（応用）",
    "difficulty": "★★★★",
    "question": "ある企業のWebサイトでは、全ページに同じ位置にメニューが配置されている。この設計の利点として最も適切なものはどれか。",
    "options": [
      "通信量を削減できる",
      "利用者が操作方法を学習しやすい",
      "ページ数を減らせる",
      "検索機能が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0299",
    "unit": "情報デザイン",
    "field": "情報デザインの基礎",
    "difficulty": "★",
    "question": "情報デザインの目的として最も適切なものはどれか。",
    "options": [
      "情報を受け手に分かりやすく伝えること",
      "情報量をできるだけ増やすこと",
      "色数を多くすること",
      "装飾を増やすこと"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0300",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "スマートフォンのアプリで、押すとホーム画面に戻ることを表す「家」の絵を何というか。",
    "options": [
      "タイポグラフィ",
      "ピクトグラム",
      "バナー",
      "アイコン"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0301",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "白・黒・灰色のように、色みを持たない色を何というか。",
    "options": [
      "補色",
      "三原色",
      "無彩色",
      "暖色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0302",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★",
    "question": "Webサイトにおいて、トップページから『学校案内』『行事』『部活動』などに枝分かれしていく構造を何というか。",
    "options": [
      "階層構造",
      "ネットワーク構造",
      "直線構造",
      "マトリクス構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0303",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "インターネットがテレビと比較して優れている特徴として最も適切なものはどれか。",
    "options": [
      "双方向性が高い",
      "一方向にしか情報を送れない",
      "情報を保存できない",
      "個人で発信できない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0304",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "プレゼンテーション資料において、背景など広い範囲に使用する色を何というか。",
    "options": [
      "アクセントカラー",
      "補色",
      "ベースカラー",
      "警戒色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0305",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★",
    "question": "色覚特性を持つ人にも分かりやすいグラフを作成する方法として最も適切なものはどれか。",
    "options": [
      "色だけで区別する",
      "赤と緑だけを使う",
      "できるだけ多くの色を使う",
      "模様や文字も併用する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0306",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★★",
    "question": "ポスターで重要な情報を目立たせるため、文字の大きさや太さに変化をつける原則を何というか。",
    "options": [
      "整列",
      "反復",
      "対比（コントラスト）",
      "近接"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0307",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★★",
    "question": "オンライン学習サイトで、『数学→関数→二次関数』のように分類して情報を整理する利点として最も適切なものはどれか。",
    "options": [
      "情報を見つけやすくする",
      "通信量を減らす",
      "画面を明るくする",
      "文字数を減らす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0308",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★",
    "question": "1年間の気温の変化のように、時間とともに変化するデータを表現するのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "帯グラフ",
      "散布図",
      "折れ線グラフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0309",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★★",
    "question": "自動ドアの前に立つと開く仕組みのように、人が自然に操作方法を理解できる性質を何というか。",
    "options": [
      "アクセシビリティ",
      "ユーザビリティ",
      "アフォーダンス",
      "モジュール化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0310",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "交通標識や非常口の案内で緑色が多く用いられる理由として最も適切なものはどれか。",
    "options": [
      "危険を示す色だから",
      "高級感を与えるため",
      "安全や避難を示すため",
      "夜間に見えなくするため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0311",
    "unit": "情報デザイン",
    "field": "情報発信",
    "difficulty": "★★",
    "question": "学校のホームページを作成する際、スマートフォンとパソコンの両方で見やすく表示されるようにする設計を何というか。",
    "options": [
      "レスポンシブWebデザイン",
      "カードソート",
      "フラットデザイン",
      "マテリアルデザイン"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0312",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★★",
    "question": "デザインの4原則のうち、関連する情報を近くに配置してまとまりを示す原則はどれか。",
    "options": [
      "近接",
      "整列",
      "反復",
      "対比"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0313",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★",
    "question": "クラス全員のテストの点数分布を表現するのに最も適したグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "円グラフ",
      "ヒストグラム",
      "レーダーチャート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0314",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★★",
    "question": "駅の案内図で『赤線』と『緑線』が区別しにくいことが分かった。改善策として最も不適切なものはどれか。",
    "options": [
      "線の種類を変える",
      "文字情報を追加する",
      "赤と緑をさらに鮮やかにする",
      "記号を併用する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0315",
    "unit": "情報デザイン",
    "field": "情報デザイン",
    "difficulty": "★★★",
    "question": "学校のWebサイトを全面的に改修することになった。高齢者や外国人も利用することを考えると、最も重視すべき観点はどれか。",
    "options": [
      "アニメーションの多さ",
      "フォントの種類",
      "アクセス数の増加",
      "誰もが利用しやすい設計"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0316",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★★",
    "question": "ある商品の広告を見た100人のうち、年齢層ごとの購入率を比較したい。このとき最も適切なグラフはどれか。",
    "options": [
      "帯グラフ",
      "散布図",
      "レーダーチャート",
      "円グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0317",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★★★",
    "question": "ATMの画面で『確認画面』を表示して誤操作を防ぐ設計思想を何というか。",
    "options": [
      "フェイルセーフ",
      "アフォーダンス",
      "レスポンシブデザイン",
      "フールプルーフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0318",
    "unit": "情報デザイン",
    "field": "情報構造",
    "difficulty": "★★★",
    "question": "動画配信サービスでは、『ジャンル』『出演者』『公開年』など複数の条件で作品を検索できる。このような情報整理の考え方として最も適切なものはどれか。",
    "options": [
      "直線構造",
      "階層構造",
      "マトリクス構造",
      "ツリー構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0319",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "赤・青・黄のような色を組み合わせて作られる色相の輪を何というか。",
    "options": [
      "明度",
      "色覚",
      "色相環",
      "彩度"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0320",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "利用者が操作しやすいように設計された画面やボタンなどの仕組み全体を何というか。",
    "options": [
      "データベース",
      "アルゴリズム",
      "アクセシビリティ",
      "ユーザーインタフェース"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0321",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★",
    "question": "書籍の目次のように、大きな項目から小さな項目へと分かれていく構造を何というか。",
    "options": [
      "階層構造",
      "直線構造",
      "ネットワーク構造",
      "マトリクス構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0322",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★",
    "question": "デザインの4原則のうち、同じ種類の情報に同じ色や形を繰り返し用いる原則を何というか。",
    "options": [
      "整列",
      "近接",
      "反復",
      "強調"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0323",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★",
    "question": "ある学校の男女比のように、全体に対する各項目の割合を表すのに適したグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "散布図",
      "ヒストグラム",
      "円グラフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0324",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "Webページの背景に白色、本文に黒色を用いることで読みやすさを向上させる工夫は、何を高めているといえるか。",
    "options": [
      "対比（コントラスト）",
      "反復",
      "近接",
      "整列"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0325",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★★",
    "question": "テレビと比較した場合のインターネットの特徴として最も適切なものはどれか。",
    "options": [
      "一方向にしか情報を伝えられない",
      "同時に多数へ配信できない",
      "利用者同士が情報を発信・共有できる",
      "動画を扱えない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0326",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★",
    "question": "視覚障害のある人がWebサイトを利用しやすくする工夫として最も適切なものはどれか。",
    "options": [
      "文字を小さくする",
      "画像を増やす",
      "背景色を派手にする",
      "画像に代替テキストを設定する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0327",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★★",
    "question": "『商品カテゴリ→メーカー→価格帯』のように、複数の分類基準を組み合わせて整理する構造として最も適切なものはどれか。",
    "options": [
      "マトリクス構造",
      "ネットワーク構造",
      "階層構造",
      "直線構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0328",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★",
    "question": "身長と体重の関係のように、2種類の数値データの関係性を表すのに最も適したグラフはどれか。",
    "options": [
      "散布図",
      "帯グラフ",
      "円グラフ",
      "レーダーチャート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0329",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★★",
    "question": "スマートフォンで指を横に滑らせて画面を切り替える操作を何というか。",
    "options": [
      "タップ",
      "ドラッグ",
      "スワイプ",
      "ピンチアウト"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0330",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★★",
    "question": "Webページで関連する情報を近くに配置することで、利用者にまとまりを認識させる原則はどれか。",
    "options": [
      "対比",
      "反復",
      "整列",
      "近接"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0331",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "色覚の多様性に配慮した資料を作成する際、避けるべき方法として最も適切なものはどれか。",
    "options": [
      "色だけで情報を区別する",
      "模様を使う",
      "文字を併記する",
      "記号を加える"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0332",
    "unit": "情報デザイン",
    "field": "情報発信",
    "difficulty": "★★",
    "question": "学校のホームページを外国人にも利用しやすくする工夫として最も適切なものはどれか。",
    "options": [
      "動画を削除する",
      "文字を減らす",
      "多言語表示に対応する",
      "背景色を変更する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0333",
    "unit": "情報デザイン",
    "field": "情報デザイン",
    "difficulty": "★★",
    "question": "利用者が迷わず目的の情報へたどり着けるかどうかを評価する観点として最も適切なものはどれか。",
    "options": [
      "ユーザビリティ",
      "演算速度",
      "解像度",
      "圧縮率"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0334",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★★",
    "question": "ある自治体が避難情報アプリを作成している。高齢者、外国人、色覚特性を持つ人など、多様な利用者に対応するために最も重要な考え方はどれか。",
    "options": [
      "高画質化",
      "高速通信",
      "装飾性の向上",
      "アクセシビリティの確保"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0335",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★★★",
    "question": "自動販売機の『商品を選んでからお金を入れる』方式を『お金を入れてから商品を選ぶ』方式に変更したところ、誤操作が増加した。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "利用者の慣れや直感を考慮する必要がある",
      "画面を大きくすれば解決する",
      "色数を増やせばよい",
      "処理速度だけが重要である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0336",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★★",
    "question": "ある地域の人口と店舗数の関係を分析したところ、人口が増えるほど店舗数も増える傾向が見られた。この関係を最も適切に確認できるグラフはどれか。",
    "options": [
      "円グラフ",
      "ヒストグラム",
      "散布図",
      "帯グラフ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0337",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★★★",
    "question": "ポスターで最も重要な見出しだけを大きく赤色で表示した。この工夫が利用しているデザインの原則はどれか。",
    "options": [
      "近接",
      "整列",
      "反復",
      "対比"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0338",
    "unit": "情報デザイン",
    "field": "情報構造",
    "difficulty": "★★★",
    "question": "動画配信サービスが『ジャンル』『配信年』『出演者』など複数の条件を自由に組み合わせて検索できるようにした。この設計に最も近い考え方はどれか。",
    "options": [
      "直線構造",
      "階層構造",
      "ネットワーク構造",
      "マトリクス構造"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0339",
    "unit": "情報デザイン",
    "field": "情報の構造化",
    "difficulty": "★",
    "question": "Webサイトで、利用者が現在どのページを見ているかを示す『ホーム＞学校案内＞アクセス』のような表示を何というか。",
    "options": [
      "サイトマップ",
      "ハイパーリンク",
      "メニューバー",
      "パンくずリスト"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0340",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★",
    "question": "色覚の多様性に配慮した資料を作成する際、色だけでなく模様や記号も用いる理由として最も適切なものはどれか。",
    "options": [
      "印刷コストを下げるため",
      "ファイルサイズを小さくするため",
      "画面を明るくするため",
      "誰にでも情報が伝わりやすくするため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0341",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★",
    "question": "スマートフォンの画面を指でつまむように操作して縮小表示する操作を何というか。",
    "options": [
      "スワイプ",
      "ドラッグ",
      "タップ",
      "ピンチイン"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0342",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★",
    "question": "複数の項目について、それぞれの特徴を比較する際に用いられる、クモの巣のような形をしたグラフを何というか。",
    "options": [
      "円グラフ",
      "帯グラフ",
      "散布図",
      "レーダーチャート"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0343",
    "unit": "情報デザイン",
    "field": "メディアの特性",
    "difficulty": "★",
    "question": "インターネット上の文章や画像、動画などを相互に関連付ける仕組みを何というか。",
    "options": [
      "検索エンジン",
      "ストリーミング",
      "SNS",
      "ハイパーリンク"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0344",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★★",
    "question": "デザインの4原則のうち、重要な情報を目立たせるために色や大きさに変化をつける原則を何というか。",
    "options": [
      "反復",
      "整列",
      "近接",
      "対比"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0345",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★",
    "question": "高齢者向けのWebサイトで、文字サイズを自由に変更できる機能を設ける目的として最も適切なものはどれか。",
    "options": [
      "通信量を減らすため",
      "検索速度を上げるため",
      "広告を表示するため",
      "利用しやすさを向上させるため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0346",
    "unit": "情報デザイン",
    "field": "情報発信",
    "difficulty": "★★",
    "question": "学校の文化祭ポスターを作成する際、日時や場所を目立つ位置に配置する理由として最も適切なものはどれか。",
    "options": [
      "画像の容量を減らすため",
      "配色を統一するため",
      "印刷時間を短縮するため",
      "必要な情報を見つけやすくするため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0347",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★★",
    "question": "ATMで『このまま振り込みますか』という確認画面を表示する設計を何というか。",
    "options": [
      "アフォーダンス",
      "レスポンシブデザイン",
      "マルチメディア",
      "フールプルーフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0348",
    "unit": "情報デザイン",
    "field": "情報構造",
    "difficulty": "★★",
    "question": "オンラインショップで『家電→テレビ→50型以上』のように分類して商品を探す方法として最も適切なものはどれか。",
    "options": [
      "ネットワーク構造",
      "マトリクス構造",
      "直線構造",
      "階層構造"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0349",
    "unit": "情報デザイン",
    "field": "色彩設計",
    "difficulty": "★★",
    "question": "プレゼンテーション資料で、注意を引きたい部分だけに赤色を使う理由として最も適切なものはどれか。",
    "options": [
      "印刷を速くするため",
      "ファイルサイズを小さくするため",
      "色数を減らすため",
      "重要な部分を強調するため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0350",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★",
    "question": "ある学校で各学年の生徒数の割合を比較したい。このとき最も適したグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "散布図",
      "ヒストグラム",
      "円グラフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0351",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★",
    "question": "外国人観光客向けの案内板で、文字だけでなく絵記号を併記する利点として最も適切なものはどれか。",
    "options": [
      "看板を小さくできるため",
      "製作費が安くなるため",
      "情報量を減らせるため",
      "言語が異なっても理解しやすくなるため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0352",
    "unit": "情報デザイン",
    "field": "メディア活用",
    "difficulty": "★★",
    "question": "動画、音声、文字、画像などを組み合わせて情報を伝える表現方法を何というか。",
    "options": [
      "ユニバーサルデザイン",
      "ハイパーテキスト",
      "レスポンシブデザイン",
      "マルチメディア"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0353",
    "unit": "情報デザイン",
    "field": "レイアウト",
    "difficulty": "★★",
    "question": "デザインの4原則のうち、関連する情報を近くに配置することで、ひとまとまりであることを示す原則を何というか。",
    "options": [
      "整列",
      "反復",
      "対比",
      "近接"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0354",
    "unit": "情報デザイン",
    "field": "情報デザイン",
    "difficulty": "★★★",
    "question": "学校のWebサイトを改修したところ、利用者から『必要な情報を探しにくい』という意見が寄せられた。最初に見直すべきものとして最も適切なものはどれか。",
    "options": [
      "サーバの性能",
      "画面の解像度",
      "端末の種類",
      "情報の分類方法や配置"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0355",
    "unit": "情報デザイン",
    "field": "ユーザーインタフェース",
    "difficulty": "★★★",
    "question": "あるアプリでは、削除ボタンを押した直後にはデータが消えず、一時的に『元に戻す』ことができる。この設計の目的として最も適切なものはどれか。",
    "options": [
      "通信量を減らすため",
      "処理速度を向上させるため",
      "画面を整理するため",
      "誤操作による影響を小さくするため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0356",
    "unit": "情報デザイン",
    "field": "アクセシビリティ",
    "difficulty": "★★★",
    "question": "災害情報アプリを開発する際、視覚障害者にも情報を伝えられるようにする工夫として最も適切なものはどれか。",
    "options": [
      "画像を増やす",
      "文字を小さくする",
      "色数を増やす",
      "音声読み上げ機能を実装する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0357",
    "unit": "情報デザイン",
    "field": "視覚化",
    "difficulty": "★★★",
    "question": "ある企業が売上と広告費の関係を調べるために散布図を作成した。その主な目的として最も適切なものはどれか。",
    "options": [
      "割合を比較するため",
      "順位を決めるため",
      "時間変化を調べるため",
      "二つのデータの関係を分析するため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q02-0358",
    "unit": "情報デザイン",
    "field": "情報社会との関わり",
    "difficulty": "★★★",
    "question": "将来、AIが自動で画面デザインを生成するようになっても、人間の役割として特に重要であり続けるものはどれか。",
    "options": [
      "描画速度の向上",
      "ファイル容量の削減",
      "端末性能の改善",
      "利用者にとって分かりやすいかを評価すること"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0001",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方",
    "difficulty": "★",
    "question": "コンピュータの内部において、すべての情報を「0」と「1」の2つの状態（オンとオフ）の組み合わせだけで表現する数記法を何というか。",
    "options": [
      "10進法",
      "2進法",
      "8進法",
      "16進法"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0002",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方",
    "difficulty": "★",
    "question": "コンピュータが扱う情報の最小単位で0または1の1桁の情報を表す単位を何というか。",
    "options": [
      "ビット（bit）",
      "バイト（Byte）",
      "キロバイト（KB）",
      "ワード（Word）"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0003",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方",
    "difficulty": "★",
    "question": "1バイト（Byte）は何ビット（bit）の情報をまとめた単位か。",
    "options": [
      "4ビット",
      "8ビット",
      "16ビット",
      "32ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0004",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア",
    "difficulty": "★",
    "question": "コンピュータの五大装置のうち、データの計算やプログラムの命令を解釈し、全体の制御を行う中心的な装置（CPU）はどれか。",
    "options": [
      "記憶装置",
      "入力装置",
      "演算・制御装置",
      "出力装置"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0005",
    "unit": "コンピュータとプログラミング",
    "field": "ソフトウェア",
    "difficulty": "★",
    "question": "コンピュータのハードウェアを直接制御し、アプリケーションソフトが動作するための共通機能を提供する「基本ソフトウェア」の代表的な略称はどれか。",
    "options": [
      "OS",
      "App",
      "CPU",
      "LAN"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0006",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（練習）",
    "difficulty": "★★",
    "question": "10進数の「13」をコンピュータが処理しやすい2進数で表現したものとして正しいものはどれか。",
    "options": [
      "1011",
      "1100",
      "1101",
      "1110"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0007",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（練習）",
    "difficulty": "★★",
    "question": "2進数の「1010」を人間が理解しやすい10進数で表現したものとして正しいものはどれか。",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0008",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（練習）",
    "difficulty": "★★",
    "question": "2つの入力（A、B）がともに「1」のときだけ出力が「1」となり、それ以外（どちらか一方または両方が0）のときは「0」を出力する論理演算はどれか。",
    "options": [
      "排他的論理和（XOR）",
      "論理和（OR）",
      "否定（NOT）",
      "論理積（AND）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0009",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（練習）",
    "difficulty": "★★",
    "question": "アルゴリズムを視覚的に表現するために処理（長方形）や条件分岐（ひし形）などの記号を線で結んで処理の流れを描いた図を何というか。",
    "options": [
      "構造図",
      "データフロー図",
      "シーケンス図",
      "フローチャート（流れ図）"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0010",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎",
    "difficulty": "★★",
    "question": "プログラムの中で数値や文字列などのデータを一時的に記憶しておくために名前を割り当てた「箱」のような仕組みを何というか。",
    "options": [
      "定数",
      "配列",
      "関数",
      "変数"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0011",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（演習）",
    "difficulty": "★★★",
    "question": "2つの入力が「異なるとき」（0と1、または1と0のとき）に出力が「1」となり、「同じとき」（0と0または1と1のとき）に出力が「0」となる。暗号化などで多用される論理演算はどれか。",
    "options": [
      "論理積（AND）",
      "論理和（OR）",
      "排他的論理和（XOR）",
      "否定（NOT）"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0012",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "データ列の中から目的のデータを特定する探索アルゴリズムのうち「先頭から順番に1つずつ目的のデータと比較していく」最も単純な手法を何というか。",
    "options": [
      "線形探索（リニアサーチ）",
      "二分探索（バイナリサーチ）",
      "ハッシュ探索",
      "バブルソート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0013",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "すでに昇順（小さい順）に並べ替えられている100個のデータから目的のデータを「中央の値と比較して、探索範囲を毎回半分に絞り込みながら」高速に探索する手法を何というか。",
    "options": [
      "線形探索",
      "バブルソート",
      "二分探索（バイナリサーチ）",
      "選択ソート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0014",
    "unit": "コンピュータとプログラミング",
    "field": "配列（演習）",
    "difficulty": "★★★",
    "question": "要素数が5の配列 `A` の中身が `[4,7,2,9,5]` であるとする。配列のインデックス（添字）が 0 から始まるとするとき`A[3]` が指し示す値はどれか。",
    "options": [
      "2",
      "7",
      "9",
      "5"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0015",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "隣り合う2つのデータを比較し、順序が逆であれば入れ替えるという操作を繰り返すことでデータ列全体を並べ替える（ソートする）最も基本的なアルゴリズムはどれか。",
    "options": [
      "クイックソート",
      "バブルソート（基本交換法）",
      "選択ソート（基本選択法）",
      "挿入ソート（基本挿入法）"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0016",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（応用・思考）",
    "difficulty": "★★★★",
    "question": "1000個の整列されたデータに対して「二分探索法（バイナリサーチ）」を用いて目的のデータを探索するとき目的のデータが存在しない（見つからない）と確定するまでに最大で何回の比較を行う必要があるか。",
    "options": [
      "約10回",
      "約100回",
      "約500回",
      "約1000回"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0017",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "「変数 x に 5 を代入する。変数 y に 3 を代入する。x ＞ y であるならば、x に x - y の値を代入する。そうでないならば、y に y - x の値を代入する。」という処理を実行したとき、最終的な変数 x の値はいくつか。",
    "options": [
      "2",
      "3",
      "5",
      "8"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0018",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "プログラミングにおけるエラー（バグ）の分類に関する問題である。プログラムの文法（ルール）の間違いによるエラーを「構文エラー（シンタックスエラー）」というのに対し、文法は正しいがアルゴリズムのミスによって「開発者が意図しない計算結果が出力されてしまうエラー」を何というか。",
    "options": [
      "実行時エラー",
      "コンパイルエラー",
      "論理エラー（ロジックエラー）",
      "メモリリーク"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0019",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある配列に格納された多数の数値データの「最大値」を求めるアルゴリズムを考える。最初に仮の最大値として「配列の先頭の要素の値」を変数 `max` に代入した。その後、配列の2番目から最後の要素までをループ処理で順に調査する際、ループ内で実行すべき正しい処理はどれか。",
    "options": [
      "調査中の要素の値が `max` より大きければ、`max` の値をその要素の値で更新する",
      "調査中の要素の値が `max` より小さければ、`max` の値をその要素の値で更新する",
      "調査中の要素の値を `max` に毎回足し合わせる",
      "すべての要素の値を足して要素数で割る"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0020",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "アナログな音や画像をコンピュータで扱えるデジタルデータに変換する（A/D変換）手順において「時間を一定の間隔に区切り、その周期ごとに音の強さや画像の色などの値を切り出す（抽出する）」第1のステップを何というか。",
    "options": [
      "符号化",
      "量子化",
      "標本化（サンプリング）",
      "圧縮化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0021",
    "unit": "コンピュータとプログラミング",
    "field": "コンピュータの構成",
    "difficulty": "★",
    "question": "コンピュータを構成する装置のうち、演算や制御を行う中心的な装置を何というか。",
    "options": [
      "CPU",
      "SSD",
      "GPU",
      "RAM"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0022",
    "unit": "コンピュータとプログラミング",
    "field": "コンピュータの構成",
    "difficulty": "★",
    "question": "プログラムやデータを一時的に記憶し、CPUが直接読み書きする主記憶装置はどれか。",
    "options": [
      "HDD",
      "USBメモリ",
      "RAM",
      "DVD"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0023",
    "unit": "コンピュータとプログラミング",
    "field": "コンピュータの構成",
    "difficulty": "★",
    "question": "キーボードやマウスは、コンピュータの装置の分類では何に当たるか。",
    "options": [
      "出力装置",
      "補助記憶装置",
      "制御装置",
      "入力装置"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0024",
    "unit": "コンピュータとプログラミング",
    "field": "コンピュータの構成",
    "difficulty": "★★",
    "question": "CPUの性能指標の一つであるクロック周波数の単位として適切なものはどれか。",
    "options": [
      "Hz",
      "Gbps",
      "dpi",
      "px"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0025",
    "unit": "コンピュータとプログラミング",
    "field": "記憶装置",
    "difficulty": "★★",
    "question": "SSDがHDDと比較して一般的に優れている点として最も適切なものはどれか。",
    "options": [
      "価格が安い",
      "可動部分がなく高速に読み書きできる",
      "保存容量が必ず大きい",
      "寿命が無限である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0026",
    "unit": "コンピュータとプログラミング",
    "field": "記憶装置",
    "difficulty": "★★",
    "question": "電源を切っても内容が消えない記憶装置の組み合わせとして適切なものはどれか。",
    "options": [
      "RAMとキャッシュメモリ",
      "ROMとSSD",
      "RAMとROM",
      "キャッシュメモリとレジスタ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0027",
    "unit": "コンピュータとプログラミング",
    "field": "2進数",
    "difficulty": "★★",
    "question": "2進数101101₂を10進数で表したものはどれか。",
    "options": [
      "43",
      "45",
      "47",
      "49"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0028",
    "unit": "コンピュータとプログラミング",
    "field": "2進数",
    "difficulty": "★★★",
    "question": "10進数の29を2進数で表したものはどれか。",
    "options": [
      "11101₂",
      "11011₂",
      "10111₂",
      "11110₂"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0029",
    "unit": "コンピュータとプログラミング",
    "field": "2進数",
    "difficulty": "★★★",
    "question": "8ビット符号なし整数で表現できる最大の値はどれか。",
    "options": [
      "127",
      "255",
      "256",
      "512"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0030",
    "unit": "コンピュータとプログラミング",
    "field": "文字コード",
    "difficulty": "★★",
    "question": "ASCIIコードで表現できる文字として最も適切なものはどれか。",
    "options": [
      "漢字",
      "ひらがな",
      "アルファベット",
      "絵文字"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0031",
    "unit": "コンピュータとプログラミング",
    "field": "文字コード",
    "difficulty": "★★★",
    "question": "同じ文字でも、コンピュータやOSによって文字化けが起こる主な原因として最も適切なものはどれか。",
    "options": [
      "CPUの性能差",
      "画面解像度の違い",
      "使用している文字コードの違い",
      "通信速度の違い"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0032",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★★",
    "question": "論理積（AND）回路の説明として適切なものはどれか。",
    "options": [
      "どちらか一方が1なら出力が1になる",
      "入力が異なるときだけ1になる",
      "両方とも1のときだけ1になる",
      "入力を反転する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0033",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★★",
    "question": "入力Aが1、入力Bが0のとき、論理和（OR）回路の出力はどうなるか。",
    "options": [
      "0",
      "1",
      "2",
      "反転する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0034",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★★★",
    "question": "入力が異なる場合にのみ1を出力する論理回路はどれか。",
    "options": [
      "AND回路",
      "NAND回路",
      "XOR回路",
      "NOT回路"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0035",
    "unit": "コンピュータとプログラミング",
    "field": "OS",
    "difficulty": "★★",
    "question": "オペレーティングシステム（OS）の役割として最も適切なものはどれか。",
    "options": [
      "Webページを作成する",
      "ハードウェアやソフトウェアを管理する",
      "画像を編集する",
      "電子メールを送信する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0036",
    "unit": "コンピュータとプログラミング",
    "field": "OS",
    "difficulty": "★★★",
    "question": "OSが行う機能として適切でないものはどれか。",
    "options": [
      "ファイル管理",
      "メモリ管理",
      "周辺機器の制御",
      "プログラム言語の設計"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0037",
    "unit": "コンピュータとプログラミング",
    "field": "ソフトウェア",
    "difficulty": "★★",
    "question": "複数のアプリケーションソフトウェアを同時に実行できるOSの機能を何というか。",
    "options": [
      "マルチタスク",
      "マルチメディア",
      "マルチキャスト",
      "マルチユーザ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0038",
    "unit": "コンピュータとプログラミング",
    "field": "圧縮技術",
    "difficulty": "★★★★",
    "question": "JPEG形式がPNG形式よりも写真の保存に適している理由として最も適切なものはどれか。",
    "options": [
      "可逆圧縮を用いているため",
      "透過処理に対応しているため",
      "写真データを高い圧縮率で保存できるため",
      "ベクタ形式だから"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0039",
    "unit": "コンピュータとプログラミング",
    "field": "画像データ",
    "difficulty": "★★★★",
    "question": "SVG形式の画像の特徴として最も適切なものはどれか。",
    "options": [
      "拡大すると画質が劣化しやすい",
      "写真の保存に特化している",
      "ベクタ形式で拡大しても輪郭が劣化しにくい",
      "アニメーションを作成できない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0040",
    "unit": "コンピュータとプログラミング",
    "field": "音声データ",
    "difficulty": "★★★★",
    "question": "CDの音声データは、アナログ音声を標本化・量子化・符号化することでデジタル化している。この一連の処理を何というか。",
    "options": [
      "レンダリング",
      "サンプリング",
      "AD変換",
      "エンコード"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0041",
    "unit": "コンピュータとプログラミング",
    "field": "動画データ",
    "difficulty": "★★★★",
    "question": "動画ファイルのデータ量を小さくするために利用される技術として最も適切なものはどれか。",
    "options": [
      "圧縮技術",
      "暗号化技術",
      "仮想化技術",
      "多重化技術"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0042",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "1文字を表すのにUTF-8では可変長のバイト数が用いられる。UTF-8を利用する利点として最も適切なものはどれか。",
    "options": [
      "すべての文字を1バイトで表現できる",
      "世界中の多くの文字を統一的に扱える",
      "英数字しか扱えない",
      "文字化けが完全になくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0043",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "CPUのクロック周波数だけを比較してコンピュータの性能を判断できない理由として最も適切なものはどれか。",
    "options": [
      "クロック周波数は年ごとに変化するため",
      "CPU以外のメモリやストレージなどの性能も影響するため",
      "クロック周波数は整数でしか表せないため",
      "OSによって単位が変わるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0044",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "ある画像を拡大したところ、輪郭がギザギザになった。この画像がビットマップ形式で保存されていた理由として最も適切なものはどれか。",
    "options": [
      "色数が少ないため",
      "点（画素）の集合として画像を表現しているため",
      "圧縮率が高いため",
      "透明処理に対応しているため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0045",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある処理を行うプログラムの実行時間を短縮するため、CPUのコア数を増やした。このとき、期待したほど高速化しなかった理由として最も適切なものはどれか。",
    "options": [
      "OSが存在しないため",
      "並列処理できない部分が残っているため",
      "メモリ容量が大きすぎるため",
      "ディスプレイの解像度が低いため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0046",
    "unit": "コンピュータとプログラミング",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "近年、生成AIの普及に伴ってGPUが注目されている理由として最も適切なものはどれか。",
    "options": [
      "画像しか処理できないため",
      "大量の並列計算を高速に実行できるため",
      "CPUの代わりとしてOSを管理するため",
      "消費電力が常に小さいため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0047",
    "unit": "コンピュータとプログラミング",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "クラウドサービス事業者が大規模データセンターの建設を進めている背景として最も適切なものはどれか。",
    "options": [
      "インターネット利用者が減少しているため",
      "AIや動画配信などによる計算需要が増加しているため",
      "個人用PCが不要になったため",
      "文字コードが統一されたため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0048",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある8ビットのデータに対して誤り検出用のパリティビットを付加した。偶数パリティを用いる場合、10110011に付加するパリティビットはどれか。",
    "options": [
      "0",
      "1",
      "2",
      "10110011では判定できない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0049",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★★★★",
    "question": "入力A、Bに対して『AかBのどちらか一方のみが真であるとき真』となる論理式として最も適切なものはどれか。",
    "options": [
      "A AND B",
      "A OR B",
      "A XOR B",
      "NOT A"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0050",
    "unit": "コンピュータとプログラミング",
    "field": "情報表現",
    "difficulty": "★★★★★",
    "question": "解像度1920×1080、24ビットカラーの画像1枚を非圧縮で保存するとき、必要なデータ量として最も近いものはどれか。",
    "options": [
      "約0.6MB",
      "約2MB",
      "約6MB",
      "約60MB"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0051",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方",
    "difficulty": "★",
    "question": "2進数の「101」に2進数の「11」を足し算した結果として正しいものはどれか。",
    "options": [
      "2進数の「110」",
      "2進数の「1000」",
      "2進数の「111」",
      "2進数の「1011」"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0052",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方",
    "difficulty": "★",
    "question": "コンピュータが扱うデータ量の単位において,「1KB（キロバイト）」は「1B（バイト）」の約何倍（または厳密に何倍）か。",
    "options": [
      "10倍",
      "100倍",
      "1024倍",
      "10000倍"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0053",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア",
    "difficulty": "★",
    "question": "コンピュータにおいて電源を切ると記憶していた内容がすべて消えてしまうが、動作中に高速にデータの読み書きを行う主記憶装置（メインメモリ）の性質を何というか。",
    "options": [
      "揮発性",
      "不揮発性",
      "静実性",
      "多重性"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0054",
    "unit": "コンピュータとプログラミング",
    "field": "ソフトウェア",
    "difficulty": "★",
    "question": "ソースコードを1行ずつ解釈しながら同時に実行していくタイプのプログラム翻訳・実行方式を何というか。",
    "options": [
      "コンパイラ",
      "インタプリタ",
      "アセンブラ",
      "リンカ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0055",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（練習）",
    "difficulty": "★★",
    "question": "非常に大きな数や小数をコンピュータ内部で表現する際、「仮数部」と「指数部」に分けて表現する形式を何というか。",
    "options": [
      "固定小数点数",
      "浮動小数点数",
      "2の補数",
      "16進表記"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0056",
    "unit": "コンピュータとプログラミング",
    "field": "数値表現と誤差（練習）",
    "difficulty": "★★",
    "question": "コンピュータの計算において無限小数を限られた桁数で表現するために、ある桁以降を四捨五入や切り捨てをすることによって生じる誤差を何というか。",
    "options": [
      "丸め誤差",
      "桁落ち",
      "情報落ち",
      "オーバーフロー"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0057",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（練習）",
    "difficulty": "★★",
    "question": "入力Aが「1」のときは「0」を入力Aが「0」のときは「1」をというように入力を反転させて出力する論理演算はどれか。",
    "options": [
      "論理積（AND）",
      "論理和（OR）",
      "否定（NOT）",
      "排他的論理和（XOR）"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0058",
    "unit": "コンピュータとプログラミング",
    "field": "配列（練習）",
    "difficulty": "★★",
    "question": "「3行4列の2次元配列 `M`」がある。配列のインデックス（添字）が行・列ともに 0 から始まるとするとき2行目（3番目の行）の1列目（2番目の列）の要素を指す正しい記述はどれか。",
    "options": [
      "M[3][2]",
      "M[2][1]",
      "M[1][2]",
      "M[2][2]"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0059",
    "unit": "コンピュータとプログラミング",
    "field": "データ構造（演習）",
    "difficulty": "★★★",
    "question": "データを1列に並べたデータ構造のうち、後から入れたデータを先に取り出す「後入れ先出し（LIFO）」の特徴を持つ仕組みを何というか。",
    "options": [
      "スタック",
      "キュー",
      "ツリー",
      "リスト"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0060",
    "unit": "コンピュータとプログラミング",
    "field": "データ構造（演習）",
    "difficulty": "★★★",
    "question": "データを1列に並べたデータ構造のうち、先に入れたデータを先に取り出す「先入れ先出し（FIFO）」の特徴を持つ仕組み（待ち行列）を何というか。",
    "options": [
      "スタック",
      "キュー",
      "ハッシュ",
      "グラフ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0061",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "データ列を並べ替えるソートアルゴリズムのうち、まだ整列していないデータの中から「最小値（または最大値）を探し出し、未整列の部分の先頭のデータと入れ替える」操作を繰り返す手法はどれか。",
    "options": [
      "バブルソート",
      "選択ソート（基本選択法）",
      "挿入ソート",
      "クイックソート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0062",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎",
    "difficulty": "★★★",
    "question": "プログラムの中で特定のまとまった処理を何度も再利用できるように独立させた仕組み（関数やメソッドなど）に呼び出し元から渡す「値」のことを何というか。",
    "options": [
      "引数（ひきすう）",
      "戻り値",
      "定数",
      "変数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0063",
    "unit": "コンピュータとプログラミング",
    "field": "数値表現と誤差（応用）",
    "difficulty": "★★★★",
    "question": "コンピュータの計算において「値が非常に近い2つの数値の引き算」を行った際、有効数字が大きく減ってしまい、計算精度が著しく低下する現象を何というか。",
    "options": [
      "情報落ち",
      "丸め誤差",
      "桁落ち",
      "アンダーフロー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0064",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎（応用）",
    "difficulty": "★★★★",
    "question": "ある処理（関数など）の内部において自分自身をさらに呼び出すようなプログラムの記述技法を何というか。",
    "options": [
      "再帰呼び出し（再帰関数）",
      "多重ループ",
      "カプセル化",
      "インクリメント"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0065",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（応用・思考）",
    "difficulty": "★★★★",
    "question": "要素数 $N$ 個のデータから目的のデータを「線形探索法（リニアサーチ）」で探すとき、データが見つかるまでに比較する平均回数として最も適切な表現はどれか。",
    "options": [
      "$N$ 回",
      "$\\frac{N}{2}$ 回",
      "$\\log_{2} N$ 回",
      "$N^2$ 回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0066",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（応用・思考）",
    "difficulty": "★★★★",
    "question": "ソートアルゴリズムのうち、基準となる値（ピボット）を決めてそれより大きいグループと小さいグループにデータを2分割する操作を再帰的に繰り返し、最悪の場合を除いて非常に高速に整列できる手法はどれか。",
    "options": [
      "バブルソート",
      "選択ソート",
      "挿入ソート",
      "クイックソート"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0067",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "「変数 sum を 0 とする。変数 i を 1 から 5 まで 1 ずつ増やしながら繰り返す：sum に sum + i の値を代入する。」というループ処理が終了したとき、最終的な変数 sum の値はいくつか。",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0068",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "「外側のループが3回まわりその内側のループが4回まわる」というような二重ループのプログラムがある。このプログラム全体で内側ループの最深部にある処理は合計で何回実行されるか。",
    "options": [
      "7回",
      "12回",
      "64回",
      "81回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0069",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "数値を2進数に変換するアルゴリズムを考える。10進数の整数を2で割り、その「余り」を記録することを商が0になるまで繰り返す。このとき、記録された余りをどのような順序で並べ替えると正しい2進数の文字列が得られるか。",
    "options": [
      "最初に記録された余りから順に（そのままの順で）並べる",
      "最後に記録された余りから順に（逆順に）並べる",
      "余りのうち値が「1」のものをすべて先に並べる",
      "余りの大きさに応じてソートして並べる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0070",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "音データのデジタル化に関する思考問題である。「サンプリング周波数（標本化周波数）が 44.1kHz」で「量子化ビット数が 16ビット（2バイト）」のステレオ（2チャンネル）音声を10秒間録音した。このとき生成される非圧縮の音声データの容量（サイズ）は約何バイトになるか。",
    "options": [
      "約44万バイト",
      "約88万バイト",
      "約176万バイト",
      "約352万バイト"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0071",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミングの基本",
    "difficulty": "★",
    "question": "プログラムにおいて処理を順番に1つずつ実行していく最も基本的な制御構造を何というか。",
    "options": [
      "順次構造",
      "選択構造",
      "反復構造",
      "分岐構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0072",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミングの基本",
    "difficulty": "★",
    "question": "プログラムの記述において特定の条件が満たされたときだけ特定の処理を行う制御構造を何というか。",
    "options": [
      "順次構造",
      "反復構造",
      "分岐構造",
      "並列構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0073",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミングの基本",
    "difficulty": "★",
    "question": "特定の処理を決められた回数や条件が満たされている間、繰り返し実行する制御構造を何というか。",
    "options": [
      "選択構造",
      "反復構造（ループ構造）",
      "順次構造",
      "再帰構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0074",
    "unit": "コンピュータとプログラミング",
    "field": "配列",
    "difficulty": "★★",
    "question": "1次元配列 `A` に5つの要素 `[10,20,30,40,50]` が格納されている。インデックス（添字）が0から始まるとき、`A[1] + A[3]` の計算結果はどうなるか。",
    "options": [
      "30",
      "40",
      "50",
      "60"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0075",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム",
    "difficulty": "★★",
    "question": "「1から100までの整数をすべて足し合わせる」プログラムを作成する際、合計値を格納する変数の初期値として最も適切な数値はどれか。",
    "options": [
      "-1",
      "0",
      "1",
      "10"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0076",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム",
    "difficulty": "★★",
    "question": "フローチャート（流れ図）においてデータの入力や出力（画面表示など）を表す記号の形として正しいものはどれか。",
    "options": [
      "長方形",
      "ひし形",
      "平行四辺形",
      "楕円"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0077",
    "unit": "コンピュータとプログラミング",
    "field": "演算子",
    "difficulty": "★★",
    "question": "プログラミングにおいて割り算をしたときの「余り（剰余）」を求めるために使われる演算子（記号）として一般的なものはどれか。",
    "options": [
      "”/”",
      "”＋”",
      "”%”",
      "”*”"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0078",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミングの基本",
    "difficulty": "★★★",
    "question": "変数 `x` の初期値が `10` であるとき処理 `x = x * 2 + 5` を実行した後の変数 `x` の値はいくつか。",
    "options": [
      "20",
      "25",
      "35",
      "45"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0079",
    "unit": "コンピュータとプログラミング",
    "field": "配列",
    "difficulty": "★★★",
    "question": "2次元配列 `B` の中身が `[[12][34][56]]` であるとする。インデックスが0から始まるとき`B[1][0]` が指し示す値はどれか。",
    "options": [
      "1234",
      "3412",
      "5634",
      "5612"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0080",
    "unit": "コンピュータとプログラミング",
    "field": "データ構造",
    "difficulty": "★★★",
    "question": "一列に並んだデータ構造において要素の挿入や削除が先頭や末尾だけでなく「前後の要素へのポインタ（位置情報）」を書き換えることで途中の位置でも高速に行える仕組みを何というか。",
    "options": [
      "スタック",
      "キュー",
      "リスト（連結リスト）",
      "ツリー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0081",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム",
    "difficulty": "★★★",
    "question": "「数値を2で割り、余りを記録し、商が0になるまで繰り返す」というアルゴリズムによって10進数から変換できるものはどれか。",
    "options": [
      "2進数",
      "8進数",
      "16進数",
      "BCDコード"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0082",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム",
    "difficulty": "★★★★",
    "question": "昇順に並んだ10個のデータから目的のデータを「二分探索法」で探すとき最悪の場合（データが見つからないまたは最後に見つかる場合）の最大比較回数として正しいものはどれか。2回4回5回10回2",
    "options": [
      "2回",
      "4回",
      "5回",
      "10回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0083",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム",
    "difficulty": "★★★★",
    "question": "ソートアルゴリズムのうちデータ列をいくつかの部分的な列に分割し、それぞれを整列してから元に戻すという「分割統治法」を用いて平均計算量が最も少ない高速な手法はどれか。",
    "options": [
      "バブルソート",
      "選択ソート",
      "挿入ソート",
      "クイックソート"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0084",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング応用",
    "difficulty": "★★★★",
    "question": "プログラムの実行中にゼロによる割り算（ゼロ除算）が発生したり、存在しないファイルを開こうとしたりしたときに発生する構文エラーではないエラーの総称を何というか。実行時エラー（例外）コンパイルエラー論理エラーシンタックスエラー1",
    "options": [
      "実行時エラー（例外）",
      "コンパイルエラー",
      "論理エラー",
      "シンタックスエラー"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0085",
    "unit": "コンピュータとプログラミング",
    "field": "数値表現と誤差",
    "difficulty": "★★★★",
    "question": "非常に絶対値の大きな数値と非常に絶対値の小さな数値の「足し算」を行った際、小さな数値が計算結果に反映されずに無視されてしまう現象を何というか。",
    "options": [
      "桁落ち",
      "情報落ち",
      "丸め誤差",
      "アンダーフロー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0086",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "「変数 `a` に 12,変数 `b` に 18 を代入する。`b` が 0 でない間、次の処理を繰り返す：『`r = a % b`（余り）』『`a = b`』『`b = r`』。ループを抜けたら `a` を出力する。」このアルゴリズム（ユークリッドの互除法）によって出力される値はいくつか。",
    "options": [
      "2",
      "3",
      "6",
      "12"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0087",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "「変数 `ans` を 0 とする。変数 `i` を 1 から 4 まで 1 ずつ増やしながら繰り返す：さらに内側で変数 `j` を 1 から `i` まで 1 ずつ増やしながら繰り返す：『`ans = ans + 1`』」この二重ループが終了したとき最終的な `ans` の値はいくつか。",
    "options": [
      "4",
      "6",
      "10",
      "16"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0088",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（応用）",
    "difficulty": "★★",
    "question": "16進数の「1F」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "29",
      "31",
      "32",
      "33"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0089",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（応用）",
    "difficulty": "★★",
    "question": "10進数の「45」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "101101",
      "101011",
      "110101",
      "111001"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0090",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（演習）",
    "difficulty": "★★★",
    "question": "8ビットで表現できる符号なし整数の個数として正しいものはどれか。",
    "options": [
      "128個",
      "256個",
      "512個",
      "1024個"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0091",
    "unit": "コンピュータとプログラミング",
    "field": "データ量",
    "difficulty": "★★★",
    "question": "5MBのファイルを20個保存したとき、必要な記憶容量として最も適切なものはどれか。",
    "options": [
      "10MB",
      "50MB",
      "100MB",
      "500MB"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0092",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア（演習）",
    "difficulty": "★★",
    "question": "コンピュータの五大装置のうち、キーボードから入力されたデータを一時的に保存する装置として最も適切なものはどれか。",
    "options": [
      "入力装置",
      "出力装置",
      "記憶装置",
      "通信装置"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0093",
    "unit": "コンピュータとプログラミング",
    "field": "ソフトウェア（演習）",
    "difficulty": "★★",
    "question": "ワープロソフトや表計算ソフトなど、利用者が目的に応じて使用するソフトウェアを何というか。",
    "options": [
      "OS",
      "アプリケーションソフトウェア",
      "デバイスドライバ",
      "ファームウェア"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0094",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎",
    "difficulty": "★★",
    "question": "変数 x に10を代入した後、x ← x + 5 を実行したときの変数 x の値として正しいものはどれか。",
    "options": [
      "5",
      "10",
      "15",
      "50"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0095",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎",
    "difficulty": "★★",
    "question": "条件分岐において、『テストの点数が80点以上なら「合格」を表示する』という処理に最も適した構造はどれか。",
    "options": [
      "繰り返し",
      "条件分岐",
      "配列",
      "探索"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0096",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（演習）",
    "difficulty": "★★★",
    "question": "入力Aが0、入力Bが1であるとき、論理和（OR）の出力として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "A",
      "B"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0097",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（演習）",
    "difficulty": "★★★",
    "question": "入力Aが1であるとき、否定（NOT）の出力として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "2",
      "変化しない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0098",
    "unit": "コンピュータとプログラミング",
    "field": "配列（演習）",
    "difficulty": "★★★",
    "question": "配列 B = [8, 3, 6, 1, 5] があり、添字が0から始まるとする。このとき B[2] の値はどれか。",
    "options": [
      "3",
      "5",
      "6",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0099",
    "unit": "コンピュータとプログラミング",
    "field": "配列（演習）",
    "difficulty": "★★★",
    "question": "配列 A = [10, 20, 30, 40, 50] に対して、A[1] ← A[1] + 5 を実行した後の A[1] の値として正しいものはどれか。",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0100",
    "unit": "コンピュータとプログラミング",
    "field": "繰り返し処理",
    "difficulty": "★★★",
    "question": "変数 sum を0に初期化し、1から5までの整数を順番に加算するプログラムを実行した。最終的な sum の値はどれか。",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0101",
    "unit": "コンピュータとプログラミング",
    "field": "繰り返し処理",
    "difficulty": "★★★★",
    "question": "次の処理を考える。『xを1にする。xを2倍する処理を3回繰り返す。』最終的な x の値として正しいものはどれか。",
    "options": [
      "6",
      "8",
      "12",
      "16"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0102",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム",
    "difficulty": "★★★★",
    "question": "昇順に整列された1024個のデータに対して二分探索を行う場合、最悪でも何回程度の比較で探索できるか。",
    "options": [
      "約10回",
      "約100回",
      "約500回",
      "約1000回"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0103",
    "unit": "コンピュータとプログラミング",
    "field": "ソートアルゴリズム",
    "difficulty": "★★★★",
    "question": "『未整列部分から最小値を探し、先頭の要素と交換する』という特徴をもつ整列アルゴリズムはどれか。",
    "options": [
      "バブルソート",
      "挿入ソート",
      "選択ソート",
      "クイックソート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0104",
    "unit": "コンピュータとプログラミング",
    "field": "ソートアルゴリズム",
    "difficulty": "★★★★",
    "question": "『整列済みの部分列に対して適切な位置へデータを挿入していく』アルゴリズムはどれか。",
    "options": [
      "バブルソート",
      "挿入ソート",
      "選択ソート",
      "線形探索"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0105",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（思考）",
    "difficulty": "★★★★",
    "question": "1000人の生徒の名簿が出席番号順に並んでいる。この中から特定の生徒を最も効率よく探す方法として適切なものはどれか。",
    "options": [
      "線形探索を用いる",
      "二分探索を用いる",
      "最初の100人だけ調べる",
      "乱数で選ぶ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0106",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "『xに4を代入する。yに7を代入する。もし x < y ならば、y ← y - x を実行する。』という処理を行ったとき、最終的な y の値はいくつか。",
    "options": [
      "3",
      "4",
      "7",
      "11"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0107",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "『aに3を代入する。bに5を代入する。a ← a × b を実行し、その後 b ← a - b を実行する。』最終的な b の値として正しいものはどれか。",
    "options": [
      "5",
      "10",
      "12",
      "15"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0108",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "次のプログラムを実行する。『xを0に初期化する。iを1から4まで1ずつ増やしながら、x ← x + i を実行する。』最終的な x の値として正しいものはどれか。",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0109",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "変数 count を用いて、配列の中にある偶数の個数を求めるプログラムを作成している。ループ内で必要な処理として最も適切なものはどれか。",
    "options": [
      "調査中の値が偶数ならば、count を1増やす",
      "調査中の値を count に代入する",
      "調査中の値を2倍する",
      "配列を並べ替える"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0110",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "プログラムの処理時間を短縮するためにアルゴリズムを改善する理由として最も適切なものはどれか。",
    "options": [
      "プログラムの見た目をよくするため",
      "使用する変数を減らすため",
      "大規模なデータを効率よく処理するため",
      "キーボード操作を減らすため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0111",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "音声をデジタル化する際の『標本化→量子化→符号化』の手順について、量子化の説明として最も適切なものはどれか。",
    "options": [
      "一定時間ごとに値を取り出す処理",
      "データを圧縮する処理",
      "取り出した値を離散的な数値に変換する処理",
      "2進数へ変換する処理"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0112",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "配列 A = [5, 8, 2, 9, 4] に対して最大値を求めるアルゴリズムを実行する。最初に max ← 5 とした場合、配列全体を調べ終えた後の max の値として正しいものはどれか。",
    "options": [
      "4",
      "5",
      "8",
      "9"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0113",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（思考）",
    "difficulty": "★★★★★",
    "question": "あるプログラムは、データ数が10倍になると実行時間がおよそ100倍になった。このプログラムに最も近い計算量はどれか。",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(2ⁿ)"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0114",
    "unit": "コンピュータとプログラミング",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "生成AIの学習には大量の計算が必要であるため、近年特に需要が高まっている半導体はどれか。",
    "options": [
      "SSD",
      "GPU",
      "ROM",
      "USBメモリ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0115",
    "unit": "コンピュータとプログラミング",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "近年、多くのプログラミング言語やサービスで生成AIによるコード補完機能が搭載されている。この機能を利用する際に最も重要なことはどれか。",
    "options": [
      "AIが生成したコードを必ずそのまま使用する",
      "プログラムの正しさや安全性を確認する",
      "変数名を短くする",
      "コメントを削除する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0116",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（演習）",
    "difficulty": "★★",
    "question": "2進数「111001」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "57",
      "58",
      "59",
      "60"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0117",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（演習）",
    "difficulty": "★★",
    "question": "10進数「26」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "11001",
      "11010",
      "11100",
      "10110"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0118",
    "unit": "コンピュータとプログラミング",
    "field": "データ量",
    "difficulty": "★★",
    "question": "1文字を1バイトで表す文字コードを用いるとき、500文字の文章のデータ量として最も適切なものはどれか。",
    "options": [
      "500ビット",
      "500バイト",
      "4000バイト",
      "4キロバイト"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0119",
    "unit": "コンピュータとプログラミング",
    "field": "データ量",
    "difficulty": "★★★",
    "question": "1GBを1024MBとするとき、3GBの動画ファイルを保存するのに必要な容量は何MBか。",
    "options": [
      "2048MB",
      "3072MB",
      "4096MB",
      "5120MB"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0120",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア",
    "difficulty": "★★",
    "question": "主記憶装置（RAM）の特徴として最も適切なものはどれか。",
    "options": [
      "電源を切っても内容が保存される",
      "CPUが高速に読み書きできる",
      "DVDと同じ仕組みで記録する",
      "データを永久に保存できる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0121",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア",
    "difficulty": "★★★",
    "question": "CPUのクロック周波数が高いほど一般的には処理能力が向上する理由として最も適切なものはどれか。",
    "options": [
      "1秒間に実行できる命令数が増えるため",
      "保存容量が増えるため",
      "画面表示が美しくなるため",
      "消費電力が小さくなるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0122",
    "unit": "コンピュータとプログラミング",
    "field": "ソフトウェア",
    "difficulty": "★★★",
    "question": "OSの役割として最も適切でないものはどれか。",
    "options": [
      "ファイルを管理する",
      "周辺機器を制御する",
      "Webページを作成する",
      "メモリを管理する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0123",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎",
    "difficulty": "★★",
    "question": "変数 a に7を代入し、その後 a ← a × 3 を実行した。最終的な a の値として正しいものはどれか。",
    "options": [
      "10",
      "14",
      "21",
      "28"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0124",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎",
    "difficulty": "★★★",
    "question": "変数 x に12を代入した後、x ← x ÷ 4 + 2 を実行した。最終的な x の値として正しいものはどれか。",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0125",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★★",
    "question": "『xが10以上ならAを表示し、それ以外ならBを表示する』プログラムで、xに8を入力した場合の結果として正しいものはどれか。",
    "options": [
      "A",
      "B",
      "AとBの両方",
      "何も表示されない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0126",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★★★",
    "question": "『テストの点数が80点以上なら「優」、60点以上80点未満なら「良」、それ以外は「可」を表示する』プログラムで、75点を入力した場合の結果はどれか。",
    "options": [
      "優",
      "良",
      "可",
      "エラー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0127",
    "unit": "コンピュータとプログラミング",
    "field": "繰り返し処理",
    "difficulty": "★★★",
    "question": "変数 sum を0に初期化し、1から4までの整数を順に加算した。最終的な sum の値として正しいものはどれか。",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0128",
    "unit": "コンピュータとプログラミング",
    "field": "繰り返し処理",
    "difficulty": "★★★★",
    "question": "変数 x を2に初期化し、『xを3倍する処理』を2回繰り返した。最終的な x の値として正しいものはどれか。",
    "options": [
      "6",
      "9",
      "12",
      "18"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0129",
    "unit": "コンピュータとプログラミング",
    "field": "配列",
    "difficulty": "★★★",
    "question": "配列 A=[1,4,7,10,13] がある。添字が0から始まるとき、A[4] の値として正しいものはどれか。",
    "options": [
      "7",
      "10",
      "13",
      "14"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0130",
    "unit": "コンピュータとプログラミング",
    "field": "配列",
    "difficulty": "★★★★",
    "question": "配列 B=[3,5,8,2,9] に対して B[2] ← B[2] + B[0] を実行した後の B[2] の値はどれか。",
    "options": [
      "8",
      "10",
      "11",
      "13"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0131",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算",
    "difficulty": "★★★",
    "question": "入力A=1、B=0のとき、排他的論理和（XOR）の出力として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "2",
      "判定できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0132",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算",
    "difficulty": "★★★★",
    "question": "論理式『A AND (NOT B)』において、A=1、B=1のときの出力として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "A",
      "B"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0133",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム",
    "difficulty": "★★★",
    "question": "データが整列されていない場合でも利用できる探索方法として最も適切なものはどれか。",
    "options": [
      "二分探索",
      "ハッシュ探索",
      "線形探索",
      "木探索"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0134",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム",
    "difficulty": "★★★★",
    "question": "100万件の整列済みデータから目的の値を高速に探したい。このとき最も適したアルゴリズムはどれか。",
    "options": [
      "線形探索",
      "バブルソート",
      "二分探索",
      "選択ソート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0135",
    "unit": "コンピュータとプログラミング",
    "field": "ソートアルゴリズム",
    "difficulty": "★★★★",
    "question": "バブルソートにおいて、1回の走査が終了した時点で必ず正しい位置に移動している要素として最も適切なものはどれか。",
    "options": [
      "最小値",
      "中央値",
      "平均値",
      "最大値"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0136",
    "unit": "コンピュータとプログラミング",
    "field": "ソートアルゴリズム",
    "difficulty": "★★★★",
    "question": "選択ソートの説明として最も適切なものはどれか。",
    "options": [
      "隣り合う要素を比較して交換する",
      "最小値を選んで先頭と交換する",
      "適切な位置に挿入する",
      "中央の値を比較する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0137",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "『aに10を代入する。bに4を代入する。a ← a − b を実行し、その後 b ← a + b を実行する。』最終的な b の値として正しいものはどれか。",
    "options": [
      "6",
      "10",
      "14",
      "18"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0138",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "『xに1を代入する。3回繰り返し、x ← x + 2 を実行する。』最終的な x の値として正しいものはどれか。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0139",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "配列 A=[6,2,9,4,8] の平均値を求めるプログラムを作成する場合、必要な処理の組み合わせとして最も適切なものはどれか。",
    "options": [
      "最大値を求めて要素数で割る",
      "すべての要素を加算して要素数で割る",
      "最小値を求めて要素数で割る",
      "中央値を求めて要素数で割る"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0140",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "あるアルゴリズムでは、データ数が2倍になると処理時間がおよそ4倍になった。このアルゴリズムの計算量として最も適切なものはどれか。",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(2ⁿ)"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0141",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "標本化周波数を高くすると、音声データにどのような影響があるか。",
    "options": [
      "データ量が減少する",
      "より細かな音を記録できる",
      "音量が小さくなる",
      "量子化ビット数が減少する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0142",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "音声データの量子化ビット数を増やすと、一般にどのような変化が起こるか。",
    "options": [
      "音質が向上する",
      "標本化周波数が下がる",
      "録音時間が短くなる",
      "再生速度が変化する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0143",
    "unit": "コンピュータとプログラミング",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "近年の生成AI開発では、複数のGPUを同時に利用する技術が重要視されている。その主な理由として最も適切なものはどれか。",
    "options": [
      "データを暗号化するため",
      "大量の計算を並列処理するため",
      "消費電力をゼロにするため",
      "記憶容量を削減するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0144",
    "unit": "コンピュータとプログラミング",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "生成AIによるプログラム生成を利用する際、開発者に求められる能力として最も重要なものはどれか。",
    "options": [
      "タイピング速度",
      "コードの正しさや安全性を検証する力",
      "プログラミング言語を暗記する力",
      "CPUを組み立てる力"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0145",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（思考）",
    "difficulty": "★★★★★",
    "question": "二分探索で1000件のデータを探索するとき、最大比較回数がおよそ10回で済む理由として最も適切なものはどれか。",
    "options": [
      "1回の比較で探索範囲を半分に絞り込めるため",
      "データを順番に調べるため",
      "CPUが高速だから",
      "配列の先頭から調べるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0146",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（基礎）",
    "difficulty": "★",
    "question": "コンピュータが文字や画像、音声などのさまざまな情報を扱える理由として最も適切なものはどれか。",
    "options": [
      "すべての情報を2進数で表現しているため",
      "すべての情報を日本語に変換しているため",
      "CPUが情報を暗記しているため",
      "情報ごとに別の装置を用いているため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0147",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（基礎）",
    "difficulty": "★",
    "question": "1KBを1024Bとするとき、4KBは何Bか。",
    "options": [
      "1024B",
      "2048B",
      "4096B",
      "8192B"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0148",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア（基礎）",
    "difficulty": "★",
    "question": "コンピュータの五大装置のうち、計算や比較を行う装置はどれか。",
    "options": [
      "入力装置",
      "演算装置",
      "記憶装置",
      "出力装置"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0149",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア（基礎）",
    "difficulty": "★",
    "question": "マウスやキーボードから入力されたデータを画面に表示する装置はどれか。",
    "options": [
      "演算装置",
      "制御装置",
      "入力装置",
      "出力装置"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0150",
    "unit": "コンピュータとプログラミング",
    "field": "ソフトウェア（基礎）",
    "difficulty": "★",
    "question": "アプリケーションソフトウェアの例として適切なものはどれか。",
    "options": [
      "Windows",
      "macOS",
      "表計算ソフト",
      "Android"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0151",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（練習）",
    "difficulty": "★★",
    "question": "2進数10111₂を10進数で表したものとして正しいものはどれか。",
    "options": [
      "21",
      "23",
      "25",
      "27"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0152",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（練習）",
    "difficulty": "★★",
    "question": "10進数19を2進数で表したものとして正しいものはどれか。",
    "options": [
      "10011",
      "10101",
      "11001",
      "11011"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0153",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（練習）",
    "difficulty": "★★",
    "question": "入力A=0、B=1のとき、論理積（AND）の出力として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "A",
      "B"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0154",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（練習）",
    "difficulty": "★★",
    "question": "入力A=1、B=0のとき、論理和（OR）の出力として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "2",
      "判定できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0155",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎（練習）",
    "difficulty": "★★",
    "question": "変数xに8を代入し、その後 x ← x + 7 を実行した。最終的なxの値として正しいものはどれか。",
    "options": [
      "8",
      "14",
      "15",
      "16"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0156",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎（練習）",
    "difficulty": "★★",
    "question": "変数aに10を代入し、その後 a ← a ÷ 2 を実行した。最終的なaの値として正しいものはどれか。",
    "options": [
      "2",
      "5",
      "10",
      "20"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0157",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（練習）",
    "difficulty": "★★",
    "question": "アルゴリズムにおいて、同じ処理を複数回実行する構造を何というか。",
    "options": [
      "順次構造",
      "分岐構造",
      "繰り返し構造",
      "階層構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0158",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（練習）",
    "difficulty": "★★",
    "question": "フローチャートにおいて、条件分岐を表す図形として適切なものはどれか。",
    "options": [
      "長方形",
      "ひし形",
      "楕円",
      "平行四辺形"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0159",
    "unit": "コンピュータとプログラミング",
    "field": "配列（演習）",
    "difficulty": "★★★",
    "question": "配列 A=[2,4,6,8,10] がある。添字が0から始まるとき、A[1]+A[3] の値として正しいものはどれか。",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0160",
    "unit": "コンピュータとプログラミング",
    "field": "配列（演習）",
    "difficulty": "★★★",
    "question": "配列 B=[7,3,9,1] に対して B[0] ← B[0]+B[2] を実行した後の B[0] の値として正しいものはどれか。",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0161",
    "unit": "コンピュータとプログラミング",
    "field": "繰り返し処理（演習）",
    "difficulty": "★★★",
    "question": "変数sumを0に初期化し、1から10までの整数を加算した。最終的なsumの値として正しいものはどれか。",
    "options": [
      "45",
      "50",
      "55",
      "60"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0162",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "線形探索法において、100個のデータの最後の要素を探す場合、最悪で何回の比較が必要か。",
    "options": [
      "25回",
      "50回",
      "99回",
      "100回"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0163",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "二分探索法を利用するための条件として適切なものはどれか。",
    "options": [
      "データ数が偶数であること",
      "データが整列されていること",
      "データが100個以下であること",
      "データが文字列であること"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0164",
    "unit": "コンピュータとプログラミング",
    "field": "ソートアルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "バブルソートで、先頭から末尾に向かって1回比較を行った後、必ず確定する要素として適切なものはどれか。",
    "options": [
      "最小値",
      "中央値",
      "最大値",
      "平均値"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0165",
    "unit": "コンピュータとプログラミング",
    "field": "ソートアルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "配列 [4,2,5,1] に対して選択ソートを1回実行した後の配列として正しいものはどれか。",
    "options": [
      "[1,2,5,4]",
      "[2,4,5,1]",
      "[4,1,2,5]",
      "[1,4,2,5]"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0166",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "データ数nが2倍になったとき、処理時間もほぼ2倍になった。このアルゴリズムの計算量として最も適切なものはどれか。",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(2ⁿ)"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0167",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "データ数nが100倍になっても、処理回数は数回しか増えなかった。この特徴をもつ計算量として最も適切なものはどれか。",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(n³)"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0168",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング（応用）",
    "difficulty": "★★★★",
    "question": "『xを3にする→xを2倍する→xに5を加える』という処理を行ったとき、最終的なxの値として正しいものはどれか。",
    "options": [
      "8",
      "10",
      "11",
      "12"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0169",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング（応用）",
    "difficulty": "★★★★",
    "question": "次の処理を考える。『xを1にする。3回繰り返し、x ← x × 2 + 1 を実行する。』最終的なxの値として正しいものはどれか。",
    "options": [
      "9",
      "11",
      "15",
      "17"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0170",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "『aに2を代入する。bに3を代入する。a ← a+b を実行する。その後、b ← a×b を実行する。』最終的なbの値として正しいものはどれか。",
    "options": [
      "10",
      "12",
      "15",
      "18"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0171",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "『xに20を代入する。xが10より大きい間、x ← x−3 を繰り返す。』処理終了後のxの値として正しいものはどれか。",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0172",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "あるプログラムでは、配列Aの各要素について、偶数なら変数countを1増やす処理を行う。A=[3,8,2,5,10] のとき、最終的なcountの値として正しいものはどれか。",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0173",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "配列A=[1,4,7,10,13]に対して、すべての要素の合計を求めるプログラムを実行した。最終的な合計として正しいものはどれか。",
    "options": [
      "30",
      "35",
      "40",
      "45"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0174",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "音声の標本化周波数を2倍にした場合、同じ時間の音声データ量は一般にどうなるか。",
    "options": [
      "約2倍になる",
      "約4倍になる",
      "半分になる",
      "変わらない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0175",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "画像の解像度を縦横ともに2倍にした場合、画素数は一般に何倍になるか。",
    "options": [
      "2倍",
      "3倍",
      "4倍",
      "8倍"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0176",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（思考）",
    "difficulty": "★★★★★",
    "question": "二分探索法で4096個の整列済みデータを探索するとき、最悪の場合の比較回数として最も適切なものはどれか。",
    "options": [
      "約12回",
      "約24回",
      "約48回",
      "約96回"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0177",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（思考）",
    "difficulty": "★★★★★",
    "question": "あるアルゴリズムでは、データ数が10倍になると実行時間がおよそ10倍になった。一方、別のアルゴリズムでは実行時間がおよそ100倍になった。後者の計算量として最も適切なものはどれか。",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(n log n)"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0178",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（基礎）",
    "difficulty": "★",
    "question": "コンピュータ内部で扱われる文字コードの役割として最も適切なものはどれか。",
    "options": [
      "文字を数値として表現する",
      "画像を圧縮する",
      "音声を記録する",
      "動画を再生する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0179",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（基礎）",
    "difficulty": "★",
    "question": "1TBを1024GBとするとき、2TBは何GBか。",
    "options": [
      "512GB",
      "1024GB",
      "2048GB",
      "4096GB"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0180",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア（基礎）",
    "difficulty": "★",
    "question": "CPUが直接読み書きする主記憶装置として最も適切なものはどれか。",
    "options": [
      "SSD",
      "RAM",
      "DVD",
      "USBメモリ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0181",
    "unit": "コンピュータとプログラミング",
    "field": "ハードウェア（基礎）",
    "difficulty": "★",
    "question": "プリンタはコンピュータの五大装置のうちどれに分類されるか。",
    "options": [
      "入力装置",
      "制御装置",
      "出力装置",
      "記憶装置"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0182",
    "unit": "コンピュータとプログラミング",
    "field": "ソフトウェア（基礎）",
    "difficulty": "★",
    "question": "OSが担う役割として最も適切なものはどれか。",
    "options": [
      "CPUやメモリを管理する",
      "文書を作成する",
      "画像を編集する",
      "Webページを閲覧する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0183",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（練習）",
    "difficulty": "★★",
    "question": "2進数「100101」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0184",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（練習）",
    "difficulty": "★★",
    "question": "10進数「42」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "101010",
      "100110",
      "110010",
      "111010"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0185",
    "unit": "コンピュータとプログラミング",
    "field": "データの表し方（練習）",
    "difficulty": "★★",
    "question": "16進数「2A」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "40",
      "41",
      "42",
      "43"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0186",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（練習）",
    "difficulty": "★★",
    "question": "入力A=1、B=1のとき、排他的論理和（XOR）の出力として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0187",
    "unit": "コンピュータとプログラミング",
    "field": "論理演算（練習）",
    "difficulty": "★★",
    "question": "入力A=0、B=0のとき、論理和（OR）の出力として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "A",
      "B"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0188",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎（練習）",
    "difficulty": "★★",
    "question": "変数xに15を代入した後、x ← x − 8 を実行した。最終的なxの値として正しいものはどれか。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0189",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング基礎（練習）",
    "difficulty": "★★",
    "question": "変数yに6を代入した後、y ← y × y を実行した。最終的なyの値として正しいものはどれか。",
    "options": [
      "12",
      "24",
      "30",
      "36"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0190",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐（練習）",
    "difficulty": "★★",
    "question": "『xが5未満ならAを表示し、それ以外ならBを表示する』プログラムで、x=5のとき表示されるものはどれか。",
    "options": [
      "A",
      "B",
      "AとBの両方",
      "何も表示されない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0191",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐（練習）",
    "difficulty": "★★",
    "question": "『整数nが偶数なら「○」、奇数なら「×」を表示する』プログラムで、n=13のとき表示されるものはどれか。",
    "options": [
      "○",
      "×",
      "○×",
      "エラー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0192",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "アルゴリズムを評価する観点として適切でないものはどれか。",
    "options": [
      "正確さ",
      "効率",
      "可読性",
      "モニタの大きさ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0193",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "線形探索法で50個のデータから目的の値を探す場合、平均的な比較回数として最も近いものはどれか。",
    "options": [
      "約10回",
      "約25回",
      "約40回",
      "約50回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0194",
    "unit": "コンピュータとプログラミング",
    "field": "配列（演習）",
    "difficulty": "★★★",
    "question": "配列A=[3,6,9,12,15]について、添字が0から始まるとき、A[1]×A[4]の値として正しいものはどれか。",
    "options": [
      "54",
      "72",
      "90",
      "108"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0195",
    "unit": "コンピュータとプログラミング",
    "field": "配列（演習）",
    "difficulty": "★★★",
    "question": "配列B=[5,8,1,4]に対して、B[3] ← B[0]+B[1] を実行した。実行後のB[3]の値として正しいものはどれか。",
    "options": [
      "9",
      "11",
      "13",
      "15"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0196",
    "unit": "コンピュータとプログラミング",
    "field": "繰り返し処理（演習）",
    "difficulty": "★★★",
    "question": "変数sumを0に初期化し、2から8までの偶数を加算した。最終的なsumの値として正しいものはどれか。",
    "options": [
      "18",
      "20",
      "24",
      "30"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0197",
    "unit": "コンピュータとプログラミング",
    "field": "繰り返し処理（演習）",
    "difficulty": "★★★",
    "question": "変数xを1に初期化し、『x ← x + 3』を4回繰り返した。最終的なxの値として正しいものはどれか。",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0198",
    "unit": "コンピュータとプログラミング",
    "field": "ソートアルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "データ列 [5,2,4,1] に対してバブルソートを1回実行した後の状態として正しいものはどれか。",
    "options": [
      "[2,4,1,5]",
      "[2,5,1,4]",
      "[1,2,4,5]",
      "[5,2,1,4]"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0199",
    "unit": "コンピュータとプログラミング",
    "field": "ソートアルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "挿入ソートの特徴として最も適切なものはどれか。",
    "options": [
      "隣接する要素を交換する",
      "整列済み部分に新しい要素を挿入する",
      "中央の値と比較する",
      "最小値を毎回選ぶ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0200",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "二分探索法で512個の整列済みデータを探索する場合、最悪時の比較回数として最も適切なものはどれか。",
    "options": [
      "約7回",
      "約9回",
      "約16回",
      "約32回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0201",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "計算量O(n²)のアルゴリズムにおいて、データ数が3倍になった場合、処理時間は理論上何倍程度になるか。",
    "options": [
      "3倍",
      "6倍",
      "9倍",
      "27倍"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0202",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング（応用）",
    "difficulty": "★★★★",
    "question": "変数aを2、bを5とする。a ← a+b を実行した後、b ← a×2 を実行した。最終的なbの値として正しいものはどれか。",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0203",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング（応用）",
    "difficulty": "★★★★",
    "question": "変数xを10とする。『xが0より大きい間、x ← x−2 を繰り返す』処理が終了したときのxの値として正しいものはどれか。",
    "options": [
      "-2",
      "0",
      "2",
      "4"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0204",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "『xに8を代入する。yに2を代入する。x ← x ÷ y を実行する。その後、y ← x + y を実行する。』最終的なyの値として正しいものはどれか。",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0205",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（DNCLトレース）",
    "difficulty": "★★★★★",
    "question": "『aに1を代入する。5回繰り返し、a ← a×2 を実行する。』最終的なaの値として正しいものはどれか。",
    "options": [
      "16",
      "24",
      "32",
      "64"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0206",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "配列A=[4,7,2,9,8]の要素のうち、7以上の値の個数を求めるプログラムを考える。最終的な個数として正しいものはどれか。",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0207",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "配列A=[2,6,10,14,18]の平均値として正しいものはどれか。",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0208",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "画像の解像度が縦1000画素、横2000画素であるとき、総画素数として正しいものはどれか。",
    "options": [
      "100万画素",
      "150万画素",
      "200万画素",
      "300万画素"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0209",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（過去問題）",
    "difficulty": "★★★★★",
    "question": "標本化周波数44.1kHzとは、1秒間に何回標本化を行うことを意味するか。",
    "options": [
      "441回",
      "4410回",
      "44100回",
      "441000回"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0210",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（思考）",
    "difficulty": "★★★★★",
    "question": "あるアルゴリズムでは、データ数が100倍になると処理時間がおよそ10000倍になった。このアルゴリズムの計算量として最も適切なものはどれか。",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(n³)"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0211",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル（思考）",
    "difficulty": "★★★★★",
    "question": "100万件の整列済みデータに対して二分探索を用いるとき、最悪時の比較回数として最も近いものはどれか。",
    "options": [
      "約10回",
      "約20回",
      "約100回",
      "約1000回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0212",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（基礎）",
    "difficulty": "★",
    "question": "2進数「1000」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0213",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（基礎）",
    "difficulty": "★",
    "question": "10進数「15」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "1010",
      "1100",
      "1111",
      "10000"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0214",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（基礎）",
    "difficulty": "★",
    "question": "16進数において、アルファベット「A」が表す10進数の値として正しいものはどれか。",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0215",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（基礎）",
    "difficulty": "★",
    "question": "16進数において、アルファベット「F」が表す10進数の値として正しいものはどれか。",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0216",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "2進数「11010」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "24",
      "25",
      "26",
      "27"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0217",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "10進数「35」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "100011",
      "100101",
      "101001",
      "101011"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0218",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "16進数「3C」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "58",
      "60",
      "62",
      "64"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0219",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "10進数「63」を16進数で表したものとして正しいものはどれか。",
    "options": [
      "2F",
      "3F",
      "4F",
      "5F"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0220",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "2進数「11111111」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "127",
      "255",
      "256",
      "511"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0221",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "10進数「100」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "1100000",
      "1100100",
      "1110000",
      "1110100"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0222",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "8ビットの符号なし整数で表現できる値の範囲として正しいものはどれか。",
    "options": [
      "0～127",
      "0～255",
      "-128～127",
      "0～511"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0223",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "2進数「10110101」を16進数で表したものとして正しいものはどれか。",
    "options": [
      "A5",
      "B5",
      "C5",
      "D5"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0224",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "16進数「7F」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "1111111",
      "10111111",
      "11111110",
      "11111111"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0225",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "10進数「255」を16進数で表したものとして正しいものはどれか。",
    "options": [
      "EE",
      "EF",
      "FE",
      "FF"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0226",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "2進数「100000000」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "128",
      "256",
      "512",
      "1024"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0227",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（応用）",
    "difficulty": "★★★★",
    "question": "16進数「2D」を10進数に変換するといくつになるか。",
    "options": [
      "43",
      "45",
      "47",
      "49"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0228",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（応用）",
    "difficulty": "★★★★",
    "question": "10進数「75」を2進数に変換するといくつになるか。",
    "options": [
      "1001011",
      "1001101",
      "1010011",
      "1010101"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0229",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（応用）",
    "difficulty": "★★★★",
    "question": "16進数「FF」を10進数に変換した値として正しいものはどれか。",
    "options": [
      "127",
      "255",
      "511",
      "1023"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0230",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（応用）",
    "difficulty": "★★★★",
    "question": "ある8ビットのデータが「11110000」である。このデータを16進数で表したものとして正しいものはどれか。",
    "options": [
      "D0",
      "E0",
      "F0",
      "F1"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0231",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（大学入試）",
    "difficulty": "★★★★★",
    "question": "8ビットの符号なし整数同士の加算「11111111₂＋00000001₂」を行った。この結果として最も適切なものはどれか。",
    "options": [
      "00000000となり桁あふれが発生する",
      "11111110となる",
      "100000000となるため9ビットに拡張される",
      "00000001となる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0232",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（基礎）",
    "difficulty": "★",
    "question": "アナログ情報をコンピュータで扱えるデータに変換することを何というか。",
    "options": [
      "デジタル化",
      "暗号化",
      "圧縮",
      "復号"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0233",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（基礎）",
    "difficulty": "★",
    "question": "音声をデジタル化する際、一定時間ごとに音の大きさを測定する工程を何というか。",
    "options": [
      "量子化",
      "標本化",
      "圧縮",
      "復号"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0234",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（基礎）",
    "difficulty": "★",
    "question": "音声の標本化・量子化の後、0と1の列に変換する工程を何というか。",
    "options": [
      "圧縮",
      "復号",
      "符号化",
      "暗号化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0235",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（練習）",
    "difficulty": "★★",
    "question": "音声のデジタル化の手順として正しいものはどれか。",
    "options": [
      "量子化→標本化→符号化",
      "標本化→量子化→符号化",
      "符号化→量子化→標本化",
      "標本化→符号化→量子化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0236",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（練習）",
    "difficulty": "★★",
    "question": "標本化周波数を高くした場合に起こる変化として最も適切なものはどれか。",
    "options": [
      "音質が向上する",
      "音量が大きくなる",
      "ファイルサイズが小さくなる",
      "再生速度が遅くなる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0237",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（練習）",
    "difficulty": "★★",
    "question": "量子化ビット数を増やした場合に起こる変化として最も適切なものはどれか。",
    "options": [
      "データ量が減少する",
      "音質が向上する",
      "標本化周波数が下がる",
      "録音時間が短くなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0238",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（演習）",
    "difficulty": "★★★",
    "question": "標本化周波数44.1kHzとは、1秒間に何回標本化することを表しているか。",
    "options": [
      "4410回",
      "44100回",
      "441000回",
      "4410000回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0239",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（演習）",
    "difficulty": "★★★",
    "question": "8ビットで量子化した場合、表現できる音の強さの段階数として正しいものはどれか。",
    "options": [
      "128段階",
      "256段階",
      "512段階",
      "1024段階"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0240",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（演習）",
    "difficulty": "★★★",
    "question": "画像をデジタル化するとき、画面を小さな点の集まりとして分割する単位を何というか。",
    "options": [
      "サンプル",
      "ピクセル",
      "ビット",
      "バイト"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0241",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（演習）",
    "difficulty": "★★★",
    "question": "1920×1080画素の画像の総画素数として最も適切なものはどれか。",
    "options": [
      "約100万画素",
      "約200万画素",
      "約300万画素",
      "約400万画素"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0242",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（応用）",
    "difficulty": "★★★★",
    "question": "標本化周波数を2倍、量子化ビット数も2倍にした場合、同じ長さの音声データ量は理論上何倍になるか。",
    "options": [
      "2倍",
      "4倍",
      "8倍",
      "16倍"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0243",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（応用）",
    "difficulty": "★★★★",
    "question": "縦横の解像度をそれぞれ2倍にした画像について、総画素数は元画像の何倍になるか。",
    "options": [
      "2倍",
      "3倍",
      "4倍",
      "8倍"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0244",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（応用）",
    "difficulty": "★★★★",
    "question": "モノクロ画像を8ビットで表現する場合、表現できる階調数として正しいものはどれか。",
    "options": [
      "64階調",
      "128階調",
      "256階調",
      "512階調"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0245",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（大学入試）",
    "difficulty": "★★★★★",
    "question": "CD音源は44.1kHz、16ビット、ステレオで記録される。音声データ量を増加させる要因として適切でないものはどれか。",
    "options": [
      "標本化周波数を上げる",
      "量子化ビット数を増やす",
      "モノラルからステレオにする",
      "再生装置の音量を大きくする"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0246",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（大学入試）",
    "difficulty": "★★★★★",
    "question": "音声データの標本化周波数を半分にした場合に起こる変化として最も適切なものはどれか。",
    "options": [
      "データ量が増える",
      "記録できる高い音の限界が下がる",
      "量子化誤差が減少する",
      "音量が半分になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0247",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（大学入試）",
    "difficulty": "★★★★★",
    "question": "ある画像の縦横の解像度を2倍にし、さらに1画素当たりの色数を表すビット数を2倍にした。このとき、画像データ量は理論上何倍になるか。",
    "options": [
      "4倍",
      "6倍",
      "8倍",
      "16倍"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0248",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（基礎）",
    "difficulty": "★",
    "question": "2進数「101」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0249",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（基礎）",
    "difficulty": "★",
    "question": "10進数「32」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "10000",
      "100000",
      "1000000",
      "10000000"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0250",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（基礎）",
    "difficulty": "★",
    "question": "16進数「B」が表す10進数として正しいものはどれか。",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0251",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（基礎）",
    "difficulty": "★",
    "question": "2進数で1桁増えるたびに値はどのようになるか。",
    "options": [
      "2分の1になる",
      "2倍になる",
      "10倍になる",
      "16倍になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0252",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "2進数「100110」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "36",
      "37",
      "38",
      "39"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0253",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "10進数「54」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "110010",
      "110110",
      "111000",
      "111010"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0254",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "16進数「4D」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "75",
      "76",
      "77",
      "78"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0255",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "10進数「80」を16進数で表したものとして正しいものはどれか。",
    "options": [
      "4F",
      "50",
      "5A",
      "60"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0256",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "2進数「1000000」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "32",
      "64",
      "128",
      "256"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0257",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（練習）",
    "difficulty": "★★",
    "question": "16進数「20」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "16",
      "24",
      "32",
      "64"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0258",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "8ビットで表現できる符号なし整数の最大値として正しいものはどれか。",
    "options": [
      "127",
      "255",
      "511",
      "1023"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0259",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "16進数「9A」を2進数に変換したものとして正しいものはどれか。",
    "options": [
      "10011010",
      "10101010",
      "10010110",
      "11001010"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0260",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "2進数「11001100」を16進数で表したものとして正しいものはどれか。",
    "options": [
      "B4",
      "C8",
      "CC",
      "DC"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0261",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "10進数「128」を16進数で表したものとして正しいものはどれか。",
    "options": [
      "7F",
      "80",
      "81",
      "88"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0262",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（演習）",
    "difficulty": "★★★",
    "question": "16進数「AB」を10進数で表したものとして正しいものはどれか。",
    "options": [
      "169",
      "170",
      "171",
      "172"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0263",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（応用）",
    "difficulty": "★★★★",
    "question": "8ビットの2進数「11111111」に1を加えたときに起こる現象として最も適切なものはどれか。",
    "options": [
      "オーバーフロー",
      "アンダーフロー",
      "暗号化",
      "圧縮"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0264",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（応用）",
    "difficulty": "★★★★",
    "question": "16進数「3F」と10進数「63」の関係として正しいものはどれか。",
    "options": [
      "等しい",
      "16進数の方が大きい",
      "10進数の方が大きい",
      "比較できない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0265",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（応用）",
    "difficulty": "★★★★",
    "question": "2進数「1000000000」を10進数に変換した値として正しいものはどれか。",
    "options": [
      "256",
      "512",
      "1024",
      "2048"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0266",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（応用）",
    "difficulty": "★★★★",
    "question": "16進数「7A」を2進数で表したものとして正しいものはどれか。",
    "options": [
      "1111010",
      "1110110",
      "11101010",
      "11110110"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0267",
    "unit": "コンピュータとプログラミング",
    "field": "進数変換（大学入試）",
    "difficulty": "★★★★★",
    "question": "10進数「200」を8ビットの符号なし整数で表現した場合、必要なビット数として最も適切なものはどれか。",
    "options": [
      "6ビット",
      "7ビット",
      "8ビット",
      "9ビット"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0268",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（基礎）",
    "difficulty": "★",
    "question": "アナログ情報を一定時間ごとに区切って取り出す処理を何というか。",
    "options": [
      "量子化",
      "標本化",
      "符号化",
      "圧縮"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0269",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（基礎）",
    "difficulty": "★",
    "question": "音声データのデジタル化において、音の強さを数値化する処理を何というか。",
    "options": [
      "標本化",
      "復号化",
      "量子化",
      "暗号化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0270",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（基礎）",
    "difficulty": "★",
    "question": "画像を構成する最小単位として最も適切なものはどれか。",
    "options": [
      "ビット",
      "バイト",
      "ピクセル",
      "サンプル"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0271",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（基礎）",
    "difficulty": "★",
    "question": "1画素を白黒2色のみで表現する場合、必要なビット数として正しいものはどれか。",
    "options": [
      "1ビット",
      "2ビット",
      "4ビット",
      "8ビット"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0272",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（練習）",
    "difficulty": "★★",
    "question": "音声データの標本化周波数を2倍にした場合、1秒あたりの標本数はどうなるか。",
    "options": [
      "半分になる",
      "変わらない",
      "2倍になる",
      "4倍になる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0273",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（練習）",
    "difficulty": "★★",
    "question": "8ビットで表現できる色の階調数として正しいものはどれか。",
    "options": [
      "64",
      "128",
      "256",
      "512"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0274",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（練習）",
    "difficulty": "★★",
    "question": "縦100画素、横200画素の画像の総画素数として正しいものはどれか。",
    "options": [
      "10000",
      "20000",
      "30000",
      "40000"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0275",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（練習）",
    "difficulty": "★★",
    "question": "標本化周波数22.05kHzの音声データは、1秒間に何回標本化されるか。",
    "options": [
      "2205回",
      "22050回",
      "220500回",
      "2200000回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0276",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（演習）",
    "difficulty": "★★★",
    "question": "16ビットで量子化した場合、理論上表現できる段階数として最も適切なものはどれか。",
    "options": [
      "256",
      "1024",
      "65536",
      "131072"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0277",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（演習）",
    "difficulty": "★★★",
    "question": "RGB各8ビットで表現されるフルカラー画像において、1画素あたり何ビット必要か。",
    "options": [
      "8ビット",
      "16ビット",
      "24ビット",
      "32ビット"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0278",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（演習）",
    "difficulty": "★★★",
    "question": "640×480画素の画像の総画素数として最も適切なものはどれか。",
    "options": [
      "153600",
      "307200",
      "614400",
      "1228800"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0279",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（演習）",
    "difficulty": "★★★",
    "question": "同じ長さの音声データについて、標本化周波数を2倍、量子化ビット数を半分にした場合、データ量はどうなるか。",
    "options": [
      "半分になる",
      "変わらない",
      "2倍になる",
      "4倍になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0280",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（応用）",
    "difficulty": "★★★★",
    "question": "縦横の解像度をそれぞれ3倍にした画像の総画素数は、元画像の何倍になるか。",
    "options": [
      "3倍",
      "6倍",
      "9倍",
      "12倍"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0281",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（応用）",
    "difficulty": "★★★★",
    "question": "音声データをCD品質（44.1kHz、16ビット、ステレオ）から、標本化周波数のみ88.2kHzに変更した場合、データ量はどうなるか。",
    "options": [
      "半分になる",
      "変わらない",
      "2倍になる",
      "4倍になる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0282",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（応用）",
    "difficulty": "★★★★",
    "question": "モノクロ画像を8ビットから16ビットに変更した場合、1画素当たりのデータ量はどうなるか。",
    "options": [
      "半分になる",
      "変わらない",
      "2倍になる",
      "4倍になる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0283",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（応用）",
    "difficulty": "★★★★",
    "question": "RGB各8ビットの画像を、縦横ともに半分の解像度にした場合、データ量は元画像のおよそ何分の1になるか。",
    "options": [
      "2分の1",
      "4分の1",
      "8分の1",
      "16分の1"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0284",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（大学入試）",
    "difficulty": "★★★★★",
    "question": "縦1000画素、横2000画素、24ビットカラーの画像がある。この画像のデータ量として最も近いものはどれか。",
    "options": [
      "約6MB",
      "約12MB",
      "約24MB",
      "約48MB"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0285",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（大学入試）",
    "difficulty": "★★★★★",
    "question": "44.1kHz、16ビット、モノラルの音声データを、44.1kHz、16ビット、ステレオに変更した場合、データ量は何倍になるか。",
    "options": [
      "2倍",
      "4倍",
      "8倍",
      "16倍"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0286",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（大学入試）",
    "difficulty": "★★★★★",
    "question": "音声データの標本化周波数を下げると、最も影響を受けるものはどれか。",
    "options": [
      "記録できる音の高さの範囲",
      "スピーカーの性能",
      "ファイル名の長さ",
      "CPUのクロック周波数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0287",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化（大学入試）",
    "difficulty": "★★★★★",
    "question": "画像の解像度を2倍、色深度を4倍にした場合、データ量は元画像の何倍になるか。",
    "options": [
      "8倍",
      "12倍",
      "16倍",
      "32倍"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0288",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（練習）",
    "difficulty": "★★",
    "question": "ある生徒が『2進数では、末尾が0なら偶数である』と説明した。この説明が正しい理由として最も適切なものはどれか。",
    "options": [
      "末尾の桁が常に1だから",
      "1の位が2⁰ではなく2¹だから",
      "末尾が0であれば1の位の値が加算されないから",
      "2進数では偶数しか表現できないから"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0289",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（練習）",
    "difficulty": "★★",
    "question": "10進数で5の倍数は1の位を見ることで判定できる。同様に、2進数で4の倍数かどうかを最も簡単に判定する方法として適切なものはどれか。",
    "options": [
      "先頭の桁を見る",
      "末尾2桁を見る",
      "桁数を数える",
      "1の個数を数える"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0290",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（演習）",
    "difficulty": "★★★",
    "question": "2進数で表された整数について、『1』の個数が奇数個であるデータだけを送信する通信方式を考える。この方式で検出できる誤りとして最も適切なものはどれか。",
    "options": [
      "1ビットだけ誤る場合",
      "2ビット同時に誤る場合",
      "すべての誤り",
      "どの誤りも検出できない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0291",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（演習）",
    "difficulty": "★★★",
    "question": "10進数の『999』を2進数で表したとき、必要なビット数として最も適切なものはどれか。",
    "options": [
      "8ビット",
      "9ビット",
      "10ビット",
      "12ビット"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0292",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（演習）",
    "difficulty": "★★★",
    "question": "2進数で表された数値の桁数が1桁増えると、表現できる整数の種類はどのように変化するか。",
    "options": [
      "1種類増える",
      "2倍になる",
      "4倍になる",
      "10倍になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0293",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（応用）",
    "difficulty": "★★★★",
    "question": "16進数は、2進数何桁分を1桁で表現しているか。",
    "options": [
      "2桁分",
      "3桁分",
      "4桁分",
      "8桁分"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0294",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（応用）",
    "difficulty": "★★★★",
    "question": "10進数の『2026』を2進数に変換したところ、11桁になった。このことから言えるものとして最も適切なものはどれか。",
    "options": [
      "1024以上2048未満である",
      "2048以上4096未満である",
      "512以上1024未満である",
      "4096以上8192未満である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0295",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（応用）",
    "difficulty": "★★★★",
    "question": "ある8ビットのデータのうち、左から3ビット目だけを反転させた。この操作によって数値がどのように変化するか。",
    "options": [
      "必ず1増える",
      "必ず2増える",
      "4だけ増減する",
      "128だけ増減する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0296",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（大学入試）",
    "difficulty": "★★★★★",
    "question": "『ある正の整数を2進数で表したとき、1がちょうど3個含まれていた』という条件だけから必ず言えることはどれか。",
    "options": [
      "奇数である",
      "偶数である",
      "8の倍数である",
      "3の倍数である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0297",
    "unit": "コンピュータとプログラミング",
    "field": "進数と思考（大学入試）",
    "difficulty": "★★★★★",
    "question": "10進数の整数 n を2倍する操作を、2進数の表現上で言い換えたものとして最も適切なものはどれか。",
    "options": [
      "先頭に1を追加する",
      "末尾に0を追加する",
      "末尾を削除する",
      "すべての桁を反転する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0298",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（練習）",
    "difficulty": "★★",
    "question": "ある画像をスマートフォンで拡大すると、輪郭がギザギザに見えた。この現象が起こる主な理由として最も適切なものはどれか。",
    "options": [
      "量子化ビット数が大きすぎるため",
      "画素数に限界があるため",
      "圧縮率が低いため",
      "CPUの性能が低いため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0299",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（練習）",
    "difficulty": "★★",
    "question": "同じ写真を白黒画像として保存したところ、ファイルサイズが小さくなった。この理由として最も適切なものはどれか。",
    "options": [
      "画像の縦横が縮小されたため",
      "1画素あたりの情報量が減少したため",
      "標本化周波数が下がったため",
      "圧縮方式が変化したため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0300",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（演習）",
    "difficulty": "★★★",
    "question": "ある音声ファイルAは『44.1kHz・16ビット』、音声ファイルBは『22.05kHz・32ビット』で記録されている。両者のデータ量の関係として最も適切なものはどれか。",
    "options": [
      "Aの方が大きい",
      "Bの方が大きい",
      "同じである",
      "条件だけでは判断できない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0301",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（演習）",
    "difficulty": "★★★",
    "question": "1秒間の動画が30枚の静止画から構成されているとき、この動画のフレームレートとして最も適切なものはどれか。",
    "options": [
      "15fps",
      "24fps",
      "30fps",
      "60fps"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0302",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（演習）",
    "difficulty": "★★★",
    "question": "『音質をあまり変えずにデータ量だけを削減したい』という目的に対して、最も適切な方法はどれか。",
    "options": [
      "標本化周波数を少し下げる",
      "画像の解像度を上げる",
      "画面の明るさを下げる",
      "CPUを交換する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0303",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（応用）",
    "difficulty": "★★★★",
    "question": "縦横それぞれ2倍の解像度をもつ画像を作成したところ、データ量は4倍になった。しかし表示サイズは変わらなかった。このとき期待できる効果として最も適切なものはどれか。",
    "options": [
      "音質が向上する",
      "拡大した際の滑らかさが向上する",
      "ファイルの転送速度が上がる",
      "圧縮率が上がる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0304",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（応用）",
    "difficulty": "★★★★",
    "question": "あるセンサは1秒間に100回測定していたが、改良後は1秒間に400回測定するようになった。同じ精度の量子化を行う場合、データ量は何倍になるか。",
    "options": [
      "2倍",
      "4倍",
      "8倍",
      "16倍"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0305",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（応用）",
    "difficulty": "★★★★",
    "question": "8ビットで表現していたモノクロ画像を4ビットで表現するよう変更した場合、最も起こりやすい変化はどれか。",
    "options": [
      "階調表現が粗くなる",
      "画像の縦横サイズが小さくなる",
      "画素数が増える",
      "色数が増える"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0306",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（大学入試）",
    "difficulty": "★★★★★",
    "question": "ある写真は『2000×1500画素・24ビットカラー』で保存されている。この写真の縦横の解像度を半分にし、さらに12ビットカラーに変更したとき、データ量は元のおよそ何分の1になるか。",
    "options": [
      "2分の1",
      "4分の1",
      "8分の1",
      "16分の1"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0307",
    "unit": "コンピュータとプログラミング",
    "field": "デジタル化と思考（大学入試）",
    "difficulty": "★★★★★",
    "question": "音声Aは『48kHz・16ビット・ステレオ』、音声Bは『96kHz・8ビット・モノラル』で記録されている。1秒あたりのデータ量の関係として最も適切なものはどれか。",
    "options": [
      "Aの方が大きい",
      "Bの方が大きい",
      "同じである",
      "比較できない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0308",
    "unit": "コンピュータとプログラミング",
    "field": "奇抜な思考問題",
    "difficulty": "★★★★",
    "question": "ある国では、コンピュータ内部で0と1ではなく0・1・2の3種類の数字だけを用いる『3進コンピュータ』を研究している。このとき、1桁で表現できる状態数はいくつか。",
    "options": [
      "2通り",
      "3通り",
      "8通り",
      "9通り"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0309",
    "unit": "コンピュータとプログラミング",
    "field": "奇抜な思考問題",
    "difficulty": "★★★★",
    "question": "『0』と『1』だけで文字や画像や音楽を表現できる理由として最も本質的な説明はどれか。",
    "options": [
      "CPUが意味を理解しているから",
      "情報は最終的に数値として表現できるから",
      "0と1が特別な数字だから",
      "人間が慣れているから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0310",
    "unit": "コンピュータとプログラミング",
    "field": "奇抜な思考問題",
    "difficulty": "★★★★★",
    "question": "ある惑星では、1週間が8日で構成されている。その惑星のコンピュータが日付を管理するために最低限必要なビット数として最も適切なものはどれか。",
    "options": [
      "2ビット",
      "3ビット",
      "4ビット",
      "8ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0311",
    "unit": "コンピュータとプログラミング",
    "field": "奇抜な思考問題",
    "difficulty": "★★★★★",
    "question": "あるゲームでは256種類のアイテムを管理している。開発者が新たに257種類目のアイテムを追加したい場合、データを保存する最小ビット数は何ビットになるか。",
    "options": [
      "8ビット",
      "9ビット",
      "16ビット",
      "32ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0312",
    "unit": "コンピュータとプログラミング",
    "field": "奇抜な思考問題",
    "difficulty": "★★★★★",
    "question": "1枚の画像を『高解像度化して画質を向上させるAI』が存在する。このAIが元画像に存在しない細部を補っている理由として最も適切なものはどれか。",
    "options": [
      "失われた情報を完全に復元しているから",
      "大量の学習データからもっともらしい特徴を推測しているから",
      "画素を無限に増やしているから",
      "圧縮データを展開しているから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0313",
    "unit": "コンピュータとプログラミング",
    "field": "時事・生成AI",
    "difficulty": "★★★★★",
    "question": "生成AIが画像を作る際、内部では最終的にどのような情報として処理されているか。",
    "options": [
      "文章だけ",
      "図形だけ",
      "0と1の列",
      "音声信号"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0314",
    "unit": "コンピュータとプログラミング",
    "field": "時事・生成AI",
    "difficulty": "★★★★★",
    "question": "生成AIによって作成された高精細画像であっても、デジタルデータとして保存される以上、理論上必ず存在するものはどれか。",
    "options": [
      "画素数の上限",
      "ファイルサイズ",
      "解像度",
      "以上すべて"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0315",
    "unit": "コンピュータとプログラミング",
    "field": "データ表現と思考",
    "difficulty": "★★",
    "question": "8ビットの符号なし整数で表現できる値の個数を求める式として正しいものはどれか。",
    "options": [
      "2×8",
      "8²",
      "2⁸",
      "8!"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0316",
    "unit": "コンピュータとプログラミング",
    "field": "データ表現と思考",
    "difficulty": "★★",
    "question": "あるデータを保存するために最低10ビット必要である。このデータが区別して扱う対象の数として最も適切なものはどれか。",
    "options": [
      "512個以下",
      "513～1024個",
      "1025～2048個",
      "2049個以上"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0317",
    "unit": "コンピュータとプログラミング",
    "field": "データ表現と思考",
    "difficulty": "★★★",
    "question": "10進数の整数を2進数に変換したところ、ちょうど8桁になった。この整数について必ず成り立つことはどれか。",
    "options": [
      "64未満である",
      "64以上128未満である",
      "128以上256未満である",
      "256以上である"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0318",
    "unit": "コンピュータとプログラミング",
    "field": "データ表現と思考",
    "difficulty": "★★★",
    "question": "あるゲームでは、512種類のモンスターにそれぞれ異なる番号を割り当てる必要がある。番号の管理に必要な最小ビット数として適切なものはどれか。",
    "options": [
      "8ビット",
      "9ビット",
      "10ビット",
      "11ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0319",
    "unit": "コンピュータとプログラミング",
    "field": "データ表現と思考",
    "difficulty": "★★★★",
    "question": "10進数の『1000』を2進数で表現したときに必要なビット数として最も適切なものはどれか。",
    "options": [
      "9ビット",
      "10ビット",
      "11ビット",
      "12ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0320",
    "unit": "コンピュータとプログラミング",
    "field": "データ表現と思考",
    "difficulty": "★★★★★",
    "question": "あるデータを管理するためにnビットを用いるとき、表現可能な状態数を表す式として正しいものはどれか。",
    "options": [
      "n²",
      "2n",
      "n!",
      "2ⁿ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0321",
    "unit": "コンピュータとプログラミング",
    "field": "文字コード",
    "difficulty": "★",
    "question": "コンピュータ内部で文字を0と1の列で表現するための規則を何というか。",
    "options": [
      "文字列",
      "フォント",
      "文字コード",
      "エンコード"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0322",
    "unit": "コンピュータとプログラミング",
    "field": "文字コード",
    "difficulty": "★★",
    "question": "ASCIIコードで表現できる文字として最も適切なものはどれか。",
    "options": [
      "漢字",
      "ひらがな",
      "アルファベットと数字",
      "絵文字"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0323",
    "unit": "コンピュータとプログラミング",
    "field": "文字コード",
    "difficulty": "★★★",
    "question": "同じ文章であっても、文字コードが異なる環境で開くと文字化けが発生する主な理由として最も適切なものはどれか。",
    "options": [
      "文字の大きさが異なるため",
      "対応するビット列の解釈が異なるため",
      "CPUの性能が異なるため",
      "画面解像度が異なるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0324",
    "unit": "コンピュータとプログラミング",
    "field": "文字コード",
    "difficulty": "★★★★",
    "question": "Unicodeが普及した理由として最も適切なものはどれか。",
    "options": [
      "英数字だけを扱うため",
      "世界中の多様な文字を統一的に扱うため",
      "ファイルサイズを小さくするため",
      "画像を圧縮するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0325",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★",
    "question": "入力が0のとき1を出力し、入力が1のとき0を出力する論理演算はどれか。",
    "options": [
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0326",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★",
    "question": "A=1、B=0のとき、A AND B の結果として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "2",
      "条件不足で求められない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0327",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★",
    "question": "A=1、B=0のとき、A OR B の結果として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "2",
      "条件不足で求められない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0328",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★★",
    "question": "A=1、B=1のとき、A XOR B の結果として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0329",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★★★",
    "question": "ある論理回路は『入力が異なる場合のみ1を出力する』という特徴をもつ。この回路として適切なものはどれか。",
    "options": [
      "AND",
      "OR",
      "XOR",
      "NOT"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0330",
    "unit": "コンピュータとプログラミング",
    "field": "論理回路",
    "difficulty": "★★★★★",
    "question": "A、B、Cの3つの入力について、『AかつB』または『C』が真である条件を表す論理式として正しいものはどれか。",
    "options": [
      "(A AND B) OR C",
      "A AND (B OR C)",
      "A OR (B AND C)",
      "(A OR B) AND C"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0331",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムと思考",
    "difficulty": "★★",
    "question": "100人のテストの点数を高い順に並べ替える処理は、アルゴリズムの分類として何に当たるか。",
    "options": [
      "探索",
      "ソート",
      "暗号化",
      "圧縮"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0332",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムと思考",
    "difficulty": "★★★",
    "question": "整列済みデータに対して二分探索を行うとき、1回の比較ごとに探索範囲はどのように変化するか。",
    "options": [
      "半分になる",
      "4分の1になる",
      "8分の1になる",
      "変化しない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0333",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムと思考",
    "difficulty": "★★★",
    "question": "100万件のデータが昇順に並んでいる。この中から1件を探すとき、線形探索より二分探索が適している理由として最も適切なものはどれか。",
    "options": [
      "プログラムが短いから",
      "必要な比較回数が大幅に少ないから",
      "メモリを使わないから",
      "データを圧縮できるから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0334",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムと思考",
    "difficulty": "★★★★",
    "question": "データ数が1024個のとき、二分探索で必要となる最大比較回数として最も適切なものはどれか。",
    "options": [
      "10回",
      "32回",
      "100回",
      "512回"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0335",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムと思考",
    "difficulty": "★★★★★",
    "question": "二分探索法が利用できないデータとして最も適切なものはどれか。",
    "options": [
      "名前順に並んだ名簿",
      "得点順に並んだ順位表",
      "ランダムな順序で保存されたデータ",
      "辞書順に並んだ単語集"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0336",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング",
    "difficulty": "★★",
    "question": "変数xに3を代入し、その後 x ← x + 5 を実行したときのxの値として正しいものはどれか。",
    "options": [
      "3",
      "5",
      "8",
      "15"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0337",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング",
    "difficulty": "★★★",
    "question": "次の処理を考える。『x←10、y←4、x←x−y、y←x+y』。最終的なyの値として正しいものはどれか。",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0338",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング",
    "difficulty": "★★★",
    "question": "配列A=[3,7,5,9,2]において、添字が0から始まるとき A[4] の値として正しいものはどれか。",
    "options": [
      "2",
      "5",
      "7",
      "9"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0339",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング",
    "difficulty": "★★★★",
    "question": "変数xの初期値を1とする。『x←x×2』を5回繰り返した後のxの値として正しいものはどれか。",
    "options": [
      "16",
      "24",
      "32",
      "64"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0340",
    "unit": "コンピュータとプログラミング",
    "field": "プログラミング",
    "difficulty": "★★★★★",
    "question": "次の擬似コードを実行する。\\n『s←0\\nfor i=1 から 5\\n s←s+i\\nend for』\\n最終的なsの値として正しいものはどれか。",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0341",
    "unit": "コンピュータとプログラミング",
    "field": "情報量と思考",
    "difficulty": "★★★",
    "question": "クラス40人全員を区別するために必要な最小ビット数として最も適切なものはどれか。",
    "options": [
      "4ビット",
      "5ビット",
      "6ビット",
      "7ビット"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0342",
    "unit": "コンピュータとプログラミング",
    "field": "情報量と思考",
    "difficulty": "★★★★",
    "question": "サイコロの出目を記録するために必要な最小ビット数として適切なものはどれか。",
    "options": [
      "2ビット",
      "3ビット",
      "4ビット",
      "5ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0343",
    "unit": "コンピュータとプログラミング",
    "field": "情報量と思考",
    "difficulty": "★★★★",
    "question": "52枚のトランプを区別するために必要な最小ビット数として最も適切なものはどれか。",
    "options": [
      "5ビット",
      "6ビット",
      "7ビット",
      "8ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0344",
    "unit": "コンピュータとプログラミング",
    "field": "情報量と思考",
    "difficulty": "★★★★★",
    "question": "1000種類の商品を管理するシステムを設計している。商品番号を表現するために必要な最小ビット数として最も適切なものはどれか。",
    "options": [
      "9ビット",
      "10ビット",
      "11ビット",
      "12ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0345",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "あるコンピュータでは1文字を16ビットで表現する。200文字からなる文章を保存するために最低限必要なデータ量として最も適切なものはどれか。",
    "options": [
      "400バイト",
      "800バイト",
      "1600バイト",
      "3200バイト"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0346",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "256×256画素の画像を24ビットカラーで保存する。この画像のデータ量として最も近いものはどれか。",
    "options": [
      "約192KB",
      "約384KB",
      "約768KB",
      "約1.5MB"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0347",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "8ビットの符号なし整数で表されたデータがある。全ビットを反転した結果が00000000となった。元のデータとして正しいものはどれか。",
    "options": [
      "11110000",
      "11111111",
      "1111",
      "10000000"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0348",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "生成AIが出力した画像や文章であっても、コンピュータ内部で最終的に処理される単位として最も基本的なものはどれか。",
    "options": [
      "ピクセル",
      "文字コード",
      "ビット",
      "バイト"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0349",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "100万人のユーザーを区別するIDを設計する。最小限必要なビット数として最も適切なものはどれか。",
    "options": [
      "18ビット",
      "19ビット",
      "20ビット",
      "21ビット"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0350",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★",
    "question": "コンピュータの五大装置のうち、プログラムの命令を解釈し、計算や制御を行う装置はどれか。",
    "options": [
      "主記憶装置",
      "CPU",
      "補助記憶装置",
      "出力装置"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0351",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★",
    "question": "電源を切ると内容が消える記憶装置として最も適切なものはどれか。",
    "options": [
      "SSD",
      "RAM",
      "ROM",
      "HDD"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0352",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★",
    "question": "OSやBIOSなどの基本的な情報を保持する、電源を切っても内容が消えない記憶装置はどれか。",
    "options": [
      "RAM",
      "キャッシュメモリ",
      "ROM",
      "レジスタ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0353",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★★",
    "question": "CPUと主記憶装置の間でデータを一時的に保存し、高速な処理を実現するための記憶装置はどれか。",
    "options": [
      "SSD",
      "ROM",
      "キャッシュメモリ",
      "USBメモリ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0354",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★★",
    "question": "CPU内部で計算途中の値を一時的に保持する、最も高速な記憶装置はどれか。",
    "options": [
      "レジスタ",
      "キャッシュメモリ",
      "RAM",
      "HDD"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0355",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★★",
    "question": "CPUのクロック周波数が高いことの説明として最も適切なものはどれか。",
    "options": [
      "一度に処理できるデータ量が増える",
      "1秒間に実行できる基本動作回数が多い",
      "保存できるデータ量が増える",
      "消費電力が必ず小さくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0356",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★★★",
    "question": "あるCPUのクロック周波数が3GHzである。このCPUが1秒間に実行するクロック数として最も適切なものはどれか。",
    "options": [
      "約300万回",
      "約3億回",
      "約30億回",
      "約300億回"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0357",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★★★",
    "question": "CPUの性能を比較する際、クロック周波数だけでは性能を正確に判断できない理由として最も適切なものはどれか。",
    "options": [
      "CPUの色が異なるため",
      "命令当たりの処理効率などが異なるため",
      "OSの種類が異なるため",
      "保存容量が異なるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0358",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★★★★",
    "question": "キャッシュメモリの容量を増やした場合に期待される効果として最も適切なものはどれか。",
    "options": [
      "補助記憶装置の容量が増える",
      "CPUが主記憶装置にアクセスする回数が減る",
      "クロック周波数が上昇する",
      "画面の解像度が向上する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0359",
    "unit": "コンピュータとプログラミング",
    "field": "CPUとメモリ",
    "difficulty": "★★★★★",
    "question": "CPU、キャッシュメモリ、主記憶装置を、一般的に高速な順に並べたものとして正しいものはどれか。",
    "options": [
      "CPU→主記憶→キャッシュ",
      "キャッシュ→CPU→主記憶",
      "CPU→キャッシュ→主記憶",
      "主記憶→キャッシュ→CPU"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0360",
    "unit": "コンピュータとプログラミング",
    "field": "画像圧縮",
    "difficulty": "★",
    "question": "画像ファイルの容量を小さくする技術を何というか。",
    "options": [
      "暗号化",
      "圧縮",
      "量子化",
      "標本化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0361",
    "unit": "コンピュータとプログラミング",
    "field": "画像圧縮",
    "difficulty": "★★",
    "question": "JPEG形式の特徴として最も適切なものはどれか。",
    "options": [
      "文字データに特化している",
      "非可逆圧縮を利用している",
      "アニメーション専用である",
      "拡大しても画質が劣化しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0362",
    "unit": "コンピュータとプログラミング",
    "field": "画像圧縮",
    "difficulty": "★★",
    "question": "PNG形式の特徴として最も適切なものはどれか。",
    "options": [
      "非可逆圧縮のみを行う",
      "可逆圧縮を利用できる",
      "動画専用形式である",
      "音声を保存できる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0363",
    "unit": "コンピュータとプログラミング",
    "field": "画像圧縮",
    "difficulty": "★★★",
    "question": "JPEG画像を繰り返し保存すると画質が低下する理由として最も適切なものはどれか。",
    "options": [
      "毎回ランダムに画素が削除されるため",
      "非可逆圧縮によって情報の一部が失われるため",
      "解像度が自動的に下がるため",
      "色数が増えるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0364",
    "unit": "コンピュータとプログラミング",
    "field": "画像圧縮",
    "difficulty": "★★★",
    "question": "ロゴやアイコンなど、輪郭を拡大しても劣化しにくい画像形式として最も適切なものはどれか。",
    "options": [
      "JPEG",
      "BMP",
      "SVG",
      "TIFF"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0365",
    "unit": "コンピュータとプログラミング",
    "field": "画像圧縮",
    "difficulty": "★★★★",
    "question": "同じ画像について、圧縮率を高くした場合に一般的に起こる変化として最も適切なものはどれか。",
    "options": [
      "画質が向上する",
      "ファイルサイズが小さくなる",
      "画素数が増える",
      "色数が増える"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0366",
    "unit": "コンピュータとプログラミング",
    "field": "画像圧縮",
    "difficulty": "★★★★★",
    "question": "SNSへの投稿用に写真を圧縮する際、『通信量を抑えたいが、ある程度の画質は維持したい』という条件に最も適した形式はどれか。",
    "options": [
      "BMP",
      "JPEG",
      "RAW",
      "TIFF"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0367",
    "unit": "コンピュータとプログラミング",
    "field": "音声圧縮",
    "difficulty": "★",
    "question": "MP3形式の特徴として最も適切なものはどれか。",
    "options": [
      "音声の圧縮形式である",
      "画像専用形式である",
      "表計算専用形式である",
      "動画専用形式である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0368",
    "unit": "コンピュータとプログラミング",
    "field": "音声圧縮",
    "difficulty": "★★",
    "question": "音声データを圧縮する目的として最も適切なものはどれか。",
    "options": [
      "音量を大きくするため",
      "データ量を減らすため",
      "再生速度を速くするため",
      "周波数を変更するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0369",
    "unit": "コンピュータとプログラミング",
    "field": "音声圧縮",
    "difficulty": "★★★",
    "question": "音声圧縮技術において、人間が聞き取りにくい音を削除する方法はどの圧縮方式に多く用いられるか。",
    "options": [
      "可逆圧縮",
      "非可逆圧縮",
      "暗号化",
      "標本化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0370",
    "unit": "コンピュータとプログラミング",
    "field": "音声圧縮",
    "difficulty": "★★★★",
    "question": "可逆圧縮方式の特徴として最も適切なものはどれか。",
    "options": [
      "元のデータを完全に復元できる",
      "必ずファイルサイズが半分になる",
      "音質が必ず劣化する",
      "動画には使用できない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0371",
    "unit": "コンピュータとプログラミング",
    "field": "音声圧縮",
    "difficulty": "★★★★★",
    "question": "音楽制作会社が編集作業を行う際、圧縮による音質劣化を避けたい。この目的に最も適した形式はどれか。",
    "options": [
      "MP3",
      "AAC",
      "WAV",
      "OGG"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0372",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート",
    "difficulty": "★",
    "question": "フローチャートにおいて、処理を表す記号として一般的に用いられる図形はどれか。",
    "options": [
      "ひし形",
      "長方形",
      "平行四辺形",
      "楕円"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0373",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート",
    "difficulty": "★",
    "question": "フローチャートにおいて、条件分岐を表す記号として一般的に用いられる図形はどれか。",
    "options": [
      "長方形",
      "平行四辺形",
      "ひし形",
      "円"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0374",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート",
    "difficulty": "★★",
    "question": "フローチャートにおいて、開始や終了を表す記号として一般的に用いられる図形はどれか。",
    "options": [
      "ひし形",
      "楕円",
      "長方形",
      "平行四辺形"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0375",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート",
    "difficulty": "★★",
    "question": "『整数xが10以上なら「合格」と表示する』処理をフローチャートで表現する際、条件として適切なものはどれか。",
    "options": [
      "x＜10",
      "x≧10",
      "x＝10",
      "x≠10"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0376",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート",
    "difficulty": "★★★",
    "question": "『1から10までの整数の合計を求める』処理に必ず必要となる構造はどれか。",
    "options": [
      "順次構造のみ",
      "反復構造",
      "分岐構造のみ",
      "並列構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0377",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート",
    "difficulty": "★★★",
    "question": "『入力された数値が偶数か奇数かを判定する』処理に必ず必要となる構造はどれか。",
    "options": [
      "順次構造",
      "反復構造",
      "分岐構造",
      "圧縮構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0378",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート",
    "difficulty": "★★★★",
    "question": "次の処理を考える。『x←1から開始し、xを2倍する処理を4回繰り返す』。最終的なxの値として正しいものはどれか。",
    "options": [
      "8",
      "16",
      "32",
      "64"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0379",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート",
    "difficulty": "★★★★★",
    "question": "変数sの初期値を0とし、『1以上100以下の奇数だけを順に加算する』アルゴリズムを実行した。最終的なsの値として正しいものはどれか。",
    "options": [
      "2500",
      "2550",
      "2600",
      "5050"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0380",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "ある学校では、生徒番号を0から9999までの整数で管理している。この番号を2進数で管理する場合、最低限必要なビット数として最も適切なものはどれか。",
    "options": [
      "12ビット",
      "13ビット",
      "14ビット",
      "15ビット"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0381",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "ある画像の縦横の解像度をそれぞれ2倍にし、さらに1画素当たりの色数を表すビット数を半分にした。このときデータ量は元画像の何倍になるか。",
    "options": [
      "2倍",
      "4倍",
      "8倍",
      "16倍"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0382",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "あるプログラムでは、1000件の整列済みデータから目的の値を探索する。最悪の場合の比較回数を最も少なくできるアルゴリズムはどれか。",
    "options": [
      "線形探索",
      "二分探索",
      "バブルソート",
      "選択ソート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0383",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "生成AIが高解像度画像を作成する際、画像サイズを縦横2倍にすると画素数はどう変化するか。",
    "options": [
      "2倍",
      "3倍",
      "4倍",
      "8倍"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0384",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "ある動画は毎秒60枚の静止画から構成されている。この動画を30fpsに変更した場合、同じ再生時間では静止画の枚数はどうなるか。",
    "options": [
      "2倍になる",
      "半分になる",
      "4分の1になる",
      "変化しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0385",
    "unit": "コンピュータとプログラミング",
    "field": "プログラムの基本構造",
    "difficulty": "★",
    "question": "プログラムの三つの基本構造として正しい組合せはどれか。",
    "options": [
      "順次・分岐・反復",
      "入力・処理・出力",
      "探索・整列・圧縮",
      "変数・配列・関数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0386",
    "unit": "コンピュータとプログラミング",
    "field": "プログラムの基本構造",
    "difficulty": "★★",
    "question": "ある処理を『条件が満たされている間だけ繰り返す』構造を何というか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "再帰構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0387",
    "unit": "コンピュータとプログラミング",
    "field": "変数とデータ型",
    "difficulty": "★★",
    "question": "プログラム中で、後から値を変更しないことが前提の値を表すものとして最も適切なのはどれか。",
    "options": [
      "変数",
      "配列",
      "定数",
      "添字"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0388",
    "unit": "コンピュータとプログラミング",
    "field": "変数とデータ型",
    "difficulty": "★★★",
    "question": "整数型の変数xに3.14を代入した場合に起こり得る現象として最も適切なものはどれか。",
    "options": [
      "小数部分が失われる場合がある",
      "xが文字列型に変換される",
      "整数型が自動的に削除される",
      "必ずエラーになる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0389",
    "unit": "コンピュータとプログラミング",
    "field": "配列",
    "difficulty": "★★",
    "question": "配列を利用する利点として最も適切なものはどれか。",
    "options": [
      "複数のデータをまとめて管理できる",
      "データを暗号化できる",
      "データ量を圧縮できる",
      "処理速度が必ず向上する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0390",
    "unit": "コンピュータとプログラミング",
    "field": "配列",
    "difficulty": "★★★",
    "question": "要素数10の配列Aにおいて、添字が0から始まるとき、最後の要素を表す添字として正しいものはどれか。",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0391",
    "unit": "コンピュータとプログラミング",
    "field": "配列",
    "difficulty": "★★★★",
    "question": "配列A=[2,4,6,8,10]に対し、『すべての要素を2倍する』処理を行った。処理後のA[2]の値として正しいものはどれか。",
    "options": [
      "6",
      "8",
      "12",
      "16"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0392",
    "unit": "コンピュータとプログラミング",
    "field": "反復処理",
    "difficulty": "★★",
    "question": "『5回繰り返す』処理を記述する場合、最も適切な制御構造はどれか。",
    "options": [
      "条件分岐",
      "反復処理",
      "配列操作",
      "論理演算"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0393",
    "unit": "コンピュータとプログラミング",
    "field": "反復処理",
    "difficulty": "★★★",
    "question": "変数xを0で初期化し、『x←x+3』を4回繰り返した。最終的なxの値として正しいものはどれか。",
    "options": [
      "7",
      "9",
      "12",
      "15"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0394",
    "unit": "コンピュータとプログラミング",
    "field": "反復処理",
    "difficulty": "★★★★",
    "question": "変数sを0で初期化し、『1から20までの偶数だけを加算する』処理を行った。最終的なsの値として正しいものはどれか。",
    "options": [
      "100",
      "110",
      "120",
      "210"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0395",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★",
    "question": "『気温が30度以上なら冷房をつける』という処理に必要な基本構造はどれか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "並列構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0396",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★★",
    "question": "変数xに12が格納されている。『xが偶数なら1を、奇数なら0を表示する』プログラムを実行した場合、表示される値はどれか。",
    "options": [
      "0",
      "1",
      "2",
      "12"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0397",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★★★",
    "question": "変数xに15が格納されている。『xが10以上20未満ならAを表示し、それ以外ならBを表示する』プログラムを実行した結果として正しいものはどれか。",
    "options": [
      "A",
      "B",
      "AとBの両方",
      "何も表示されない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0398",
    "unit": "コンピュータとプログラミング",
    "field": "関数",
    "difficulty": "★★",
    "question": "プログラムの一部をまとめ、必要なときに呼び出して利用できるようにしたものを何というか。",
    "options": [
      "配列",
      "関数",
      "添字",
      "変数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0399",
    "unit": "コンピュータとプログラミング",
    "field": "関数",
    "difficulty": "★★★",
    "question": "関数を利用する利点として最も適切なものはどれか。",
    "options": [
      "データ量を削減できる",
      "同じ処理を再利用しやすくなる",
      "メモリが不要になる",
      "必ず処理速度が向上する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0400",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム",
    "difficulty": "★★",
    "question": "50人の生徒の名簿から、出席番号順に並んでいない状態で特定の生徒を探す場合、最も単純な方法はどれか。",
    "options": [
      "二分探索",
      "ハッシュ探索",
      "線形探索",
      "バブルソート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0401",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム",
    "difficulty": "★★★★",
    "question": "二分探索を利用するために必要な条件として最も適切なものはどれか。",
    "options": [
      "データ数が100個以下であること",
      "データがあらかじめ整列されていること",
      "データが数値であること",
      "配列を用いないこと"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0402",
    "unit": "コンピュータとプログラミング",
    "field": "整列アルゴリズム",
    "difficulty": "★★",
    "question": "データを一定の規則で並べ替える処理全般を何というか。",
    "options": [
      "探索",
      "整列",
      "圧縮",
      "暗号化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0403",
    "unit": "コンピュータとプログラミング",
    "field": "整列アルゴリズム",
    "difficulty": "★★★",
    "question": "選択ソートにおいて、未整列部分から最小値を探して並べる操作を繰り返した場合、昇順に整列できる。このアルゴリズムの名称として正しいものはどれか。",
    "options": [
      "バブルソート",
      "クイックソート",
      "選択ソート",
      "二分探索"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0404",
    "unit": "コンピュータとプログラミング",
    "field": "整列アルゴリズム",
    "difficulty": "★★★★",
    "question": "データ数が増加した場合、一般に処理時間が最も大きく増加しやすいアルゴリズムはどれか。",
    "options": [
      "線形探索",
      "二分探索",
      "基本交換法",
      "ハッシュ探索"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0405",
    "unit": "コンピュータとプログラミング",
    "field": "シミュレーション",
    "difficulty": "★★",
    "question": "実際に試すことが難しい現象を、コンピュータ上で再現して調べることを何というか。",
    "options": [
      "デバッグ",
      "シミュレーション",
      "コンパイル",
      "暗号化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0406",
    "unit": "コンピュータとプログラミング",
    "field": "シミュレーション",
    "difficulty": "★★★",
    "question": "サイコロを10000回振る実験をコンピュータ上で再現する際に利用されることが多いものはどれか。",
    "options": [
      "乱数",
      "文字コード",
      "圧縮率",
      "クロック周波数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0407",
    "unit": "コンピュータとプログラミング",
    "field": "シミュレーション",
    "difficulty": "★★★★",
    "question": "乱数を用いたシミュレーションを複数回実行したところ、毎回少しずつ異なる結果になった。この理由として最も適切なものはどれか。",
    "options": [
      "CPUが故障しているため",
      "乱数によって異なる値が生成されるため",
      "メモリ容量が不足しているため",
      "プログラムが誤っているため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0408",
    "unit": "コンピュータとプログラミング",
    "field": "デバッグ",
    "difficulty": "★★",
    "question": "プログラムの誤りを発見し、修正する作業を何というか。",
    "options": [
      "コンパイル",
      "デバッグ",
      "圧縮",
      "標本化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0409",
    "unit": "コンピュータとプログラミング",
    "field": "デバッグ",
    "difficulty": "★★★",
    "question": "プログラムが実行途中で停止してしまう原因として最も適切なものはどれか。",
    "options": [
      "実行時エラー",
      "コメント文",
      "インデント",
      "変数名"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0410",
    "unit": "コンピュータとプログラミング",
    "field": "デバッグ",
    "difficulty": "★★★★",
    "question": "プログラムは最後まで実行できるものの、期待した結果が得られない。このような誤りを何というか。",
    "options": [
      "構文エラー",
      "通信エラー",
      "論理エラー",
      "入出力エラー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0411",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "変数xを1、変数yを2で初期化する。その後、『x←x+y』『y←x+y』『x←x+y』を順に実行した。最終的なxの値として正しいものはどれか。",
    "options": [
      "5",
      "7",
      "8",
      "10"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0412",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "配列A=[1,3,5,7,9]について、すべての要素を順に加算するプログラムを実行した。合計値として正しいものはどれか。",
    "options": [
      "20",
      "25",
      "30",
      "35"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0413",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "ある探索アルゴリズムでは、1回比較するたびに探索範囲が半分になる。100万件のデータを対象とした場合、必要な比較回数の最大値として最も近いものはどれか。",
    "options": [
      "約10回",
      "約20回",
      "約100回",
      "約1000回"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0414",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "あるプログラムは『条件判定→処理→条件判定→処理…』を繰り返している。このプログラムが永久に終了しない状態を何というか。",
    "options": [
      "無限ループ",
      "再帰呼び出し",
      "論理積",
      "コンパイルエラー"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0415",
    "unit": "コンピュータとプログラミング",
    "field": "データ構造",
    "difficulty": "★",
    "question": "複数の値を順番に並べて管理し、同じ種類のデータをまとめて扱うための仕組みを何というか。",
    "options": [
      "関数",
      "変数",
      "配列",
      "定数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0416",
    "unit": "コンピュータとプログラミング",
    "field": "データ構造",
    "difficulty": "★★",
    "question": "要素数8の配列Bにおいて、添字が1から始まる場合、最後の要素の添字はどれか。",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0417",
    "unit": "コンピュータとプログラミング",
    "field": "データ構造",
    "difficulty": "★★★",
    "question": "配列A=[5,8,11,14,17]とする。添字が0から始まるとき、A[1]+A[3]の値として正しいものはどれか。",
    "options": [
      "19",
      "21",
      "22",
      "25"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0418",
    "unit": "コンピュータとプログラミング",
    "field": "データ構造",
    "difficulty": "★★★★",
    "question": "配列A=[1,2,3,4,5]の各要素に対して『現在の値に添字を加える』処理を行った。処理後のA[4]の値として正しいものはどれか。",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0419",
    "unit": "コンピュータとプログラミング",
    "field": "データ構造",
    "difficulty": "★★★★★",
    "question": "配列A=[2,4,6,8,10]に対し、『偶数番目の添字をもつ要素だけを合計する』処理を行った。結果として正しいものはどれか。",
    "options": [
      "12",
      "18",
      "20",
      "30"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0420",
    "unit": "コンピュータとプログラミング",
    "field": "反復処理",
    "difficulty": "★",
    "question": "同じ処理を何度も実行するための構造を何というか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "階層構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0421",
    "unit": "コンピュータとプログラミング",
    "field": "反復処理",
    "difficulty": "★★",
    "question": "変数xを2とし、『x←x+2』を5回繰り返した。最終的なxの値として正しいものはどれか。",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0422",
    "unit": "コンピュータとプログラミング",
    "field": "反復処理",
    "difficulty": "★★★",
    "question": "変数sを0で初期化し、『3,6,9,12』を順に加算した。最終的なsの値として正しいものはどれか。",
    "options": [
      "24",
      "27",
      "30",
      "33"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0423",
    "unit": "コンピュータとプログラミング",
    "field": "反復処理",
    "difficulty": "★★★★",
    "question": "1から50までの整数のうち、5の倍数だけを加算するプログラムを実行した。最終的な合計値として正しいものはどれか。",
    "options": [
      "225",
      "250",
      "275",
      "300"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0424",
    "unit": "コンピュータとプログラミング",
    "field": "反復処理",
    "difficulty": "★★★★★",
    "question": "変数xを1で初期化し、『x←x×3』を4回繰り返した。最終的なxの値として正しいものはどれか。",
    "options": [
      "27",
      "54",
      "81",
      "243"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0425",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★",
    "question": "『もし雨なら傘を持つ』という処理に対応する基本構造はどれか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "探索構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0426",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★",
    "question": "変数x=18のとき、『xが20以上ならA、そうでなければBを表示する』プログラムの出力として正しいものはどれか。",
    "options": [
      "A",
      "B",
      "AとB",
      "何も表示されない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0427",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★★",
    "question": "変数x=15、y=20とする。『x>yなら1、そうでなければ0を表示する』プログラムの結果として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "15",
      "20"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0428",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★★★",
    "question": "あるプログラムでは、点数が80点以上ならA評価、60点以上80点未満ならB評価、それ以外はC評価となる。点数が75点のときの評価として正しいものはどれか。",
    "options": [
      "A",
      "B",
      "C",
      "判定できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0429",
    "unit": "コンピュータとプログラミング",
    "field": "条件分岐",
    "difficulty": "★★★★★",
    "question": "変数x=12に対して『xが3の倍数かつ4の倍数なら1を表示する』プログラムを実行した。表示される値として正しいものはどれか。",
    "options": [
      "0",
      "1",
      "3",
      "4"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0430",
    "unit": "コンピュータとプログラミング",
    "field": "関数とモジュール化",
    "difficulty": "★★",
    "question": "複数の場所で利用する処理をまとめて再利用しやすくしたものを何というか。",
    "options": [
      "変数",
      "関数",
      "配列",
      "添字"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0431",
    "unit": "コンピュータとプログラミング",
    "field": "関数とモジュール化",
    "difficulty": "★★★",
    "question": "関数を利用してプログラムを部品化する利点として最も適切なものはどれか。",
    "options": [
      "プログラムの容量が必ず小さくなる",
      "同じ処理を何度も記述しなくてよくなる",
      "変数が不要になる",
      "実行速度が必ず向上する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0432",
    "unit": "コンピュータとプログラミング",
    "field": "関数とモジュール化",
    "difficulty": "★★★★",
    "question": "プログラムを複数人で開発する際、関数ごとに役割を分担する利点として最も適切なものはどれか。",
    "options": [
      "エラーが絶対になくなる",
      "作業を分担しやすくなる",
      "メモリ使用量が0になる",
      "プログラムが短くなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0433",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム",
    "difficulty": "★★",
    "question": "線形探索において、目的の値が最後に存在する場合、最悪何回比較する必要があるか。データ数は50個とする。",
    "options": [
      "25回",
      "49回",
      "50回",
      "100回"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0434",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム",
    "difficulty": "★★★",
    "question": "二分探索法を利用する際、データをあらかじめ整列しておく必要がある理由として最も適切なものはどれか。",
    "options": [
      "計算速度を一定にするため",
      "探索範囲を半分に絞るため",
      "メモリを節約するため",
      "圧縮率を上げるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0435",
    "unit": "コンピュータとプログラミング",
    "field": "探索アルゴリズム",
    "difficulty": "★★★★",
    "question": "4096個の整列済みデータを二分探索するとき、最大比較回数として最も適切なものはどれか。",
    "options": [
      "8回",
      "10回",
      "12回",
      "16回"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0436",
    "unit": "コンピュータとプログラミング",
    "field": "整列アルゴリズム",
    "difficulty": "★★",
    "question": "整列前のデータ列『4,2,7,1』を昇順に並べ替えた結果として正しいものはどれか。",
    "options": [
      "1,2,4,7",
      "1,4,2,7",
      "2,1,4,7",
      "7,4,2,1"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0437",
    "unit": "コンピュータとプログラミング",
    "field": "整列アルゴリズム",
    "difficulty": "★★★",
    "question": "バブルソートの1回目の走査を行った結果、最も大きい値はどうなるか。",
    "options": [
      "先頭に移動する",
      "中央に移動する",
      "最後尾に移動する",
      "変化しない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0438",
    "unit": "コンピュータとプログラミング",
    "field": "整列アルゴリズム",
    "difficulty": "★★★★",
    "question": "データ数n個に対して、比較回数が概ねn²に比例して増える整列アルゴリズムとして最も適切なものはどれか。",
    "options": [
      "二分探索",
      "バブルソート",
      "ハッシュ探索",
      "順次探索"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0439",
    "unit": "コンピュータとプログラミング",
    "field": "乱数とシミュレーション",
    "difficulty": "★★",
    "question": "コンピュータがサイコロやくじ引きを模擬する際に利用する値を何というか。",
    "options": [
      "実数",
      "乱数",
      "配列",
      "関数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0440",
    "unit": "コンピュータとプログラミング",
    "field": "乱数とシミュレーション",
    "difficulty": "★★★",
    "question": "乱数を100回生成して平均値を求める実験を10万回行うことを何というか。",
    "options": [
      "圧縮",
      "シミュレーション",
      "暗号化",
      "コンパイル"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0441",
    "unit": "コンピュータとプログラミング",
    "field": "乱数とシミュレーション",
    "difficulty": "★★★★",
    "question": "ある現象をシミュレーションする回数を増やした場合に一般的に期待されることはどれか。",
    "options": [
      "実際の値から離れる",
      "結果のばらつきが小さくなる",
      "計算が不要になる",
      "乱数が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0442",
    "unit": "コンピュータとプログラミング",
    "field": "乱数とシミュレーション",
    "difficulty": "★★★★★",
    "question": "サイコロを6万回投げるシミュレーションを行ったところ、各目の出現回数はほぼ等しくなった。この考え方の基礎となる法則として最も適切なものはどれか。",
    "options": [
      "情報の法則",
      "大数の法則",
      "モジュールの法則",
      "交換法則"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0443",
    "unit": "コンピュータとプログラミング",
    "field": "プログラムの評価",
    "difficulty": "★★★",
    "question": "同じ結果を得られる二つのアルゴリズムがある場合、一般に優れていると考えられるものはどれか。",
    "options": [
      "処理時間やメモリ使用量が少ないもの",
      "ソースコードが長いもの",
      "変数の数が多いもの",
      "画面表示が派手なもの"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0444",
    "unit": "コンピュータとプログラミング",
    "field": "プログラムの評価",
    "difficulty": "★★★★",
    "question": "アルゴリズムの効率を評価する指標として適切なものはどれか。",
    "options": [
      "画面サイズ",
      "計算量",
      "文字コード",
      "ファイル形式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0445",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "配列A=[3,1,4,1,5,9]について、添字が奇数の要素のみを加算した。結果として正しいものはどれか。",
    "options": [
      "11",
      "13",
      "15",
      "17"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0446",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "変数x=2、y=5とする。『x←x+y』『y←x-y』『x←x-y』を順に実行した後のxの値として正しいものはどれか。",
    "options": [
      "2",
      "5",
      "7",
      "10"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0447",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "あるプログラムでは、1から100までの整数のうち3の倍数の個数を数える。最終的な個数として正しいものはどれか。",
    "options": [
      "32",
      "33",
      "34",
      "35"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0448",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "変数sを0で初期化し、1以上10以下の整数iについて『s←s+i×i』を繰り返した。最終的なsの値として正しいものはどれか。",
    "options": [
      "285",
      "330",
      "385",
      "440"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0449",
    "unit": "コンピュータとプログラミング",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "あるプログラムが100回の反復処理を含み、その内部でさらに100回の反復処理を行っている。この処理回数として最も適切なものはどれか。",
    "options": [
      "100回",
      "200回",
      "1000回",
      "10000回"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0450",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース",
    "difficulty": "★★★",
    "question": "次の処理を実行する。『x←7、y←3、x←x+y、y←x-y』。処理後のyの値として正しいものはどれか。",
    "options": [
      "3",
      "7",
      "10",
      "13"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0451",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース",
    "difficulty": "★★★",
    "question": "次の処理を実行する。『a←5、b←2、a←a×b、b←a+b』。処理後のbの値として正しいものはどれか。",
    "options": [
      "7",
      "10",
      "12",
      "15"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0452",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース",
    "difficulty": "★★★",
    "question": "次の処理を実行する。『x←12、y←5、もし x mod y = 2 ならば y←y+1 を実行する』。処理後のyの値として正しいものはどれか。",
    "options": [
      "5",
      "6",
      "7",
      "12"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0453",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース",
    "difficulty": "★★★★",
    "question": "次の処理を実行する。『s←0、iを1から4まで1ずつ増やしながら、s←s+i を実行する』。処理後のsの値として正しいものはどれか。",
    "options": [
      "8",
      "10",
      "12",
      "15"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0454",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース",
    "difficulty": "★★★★",
    "question": "次の処理を実行する。『x←2、3回繰り返す：x←x×2+1』。処理後のxの値として正しいものはどれか。",
    "options": [
      "11",
      "15",
      "23",
      "31"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0455",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース",
    "difficulty": "★★★★",
    "question": "次の処理を実行する。『n←15、nが偶数なら n←n÷2、そうでなければ n←n×3+1』。処理後のnの値として正しいものはどれか。",
    "options": [
      "16",
      "45",
      "46",
      "48"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0456",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース",
    "difficulty": "★★★★★",
    "question": "次の処理を実行する。『x←1、y←1、4回繰り返す：tmp←x+y、x←y、y←tmp』。処理後のyの値として正しいものはどれか。",
    "options": [
      "5",
      "8",
      "13",
      "21"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0457",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース",
    "difficulty": "★★★★★",
    "question": "次の処理を実行する。『s←1、iを1から5まで増やしながら、s←s×i を実行する』。処理後のsの値として正しいものはどれか。",
    "options": [
      "24",
      "60",
      "120",
      "720"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0458",
    "unit": "コンピュータとプログラミング",
    "field": "Python読解",
    "difficulty": "★★",
    "question": "次のPythonコードを実行する。\\nx = 8\\nx = x - 3\\nprint(x)\\n表示される値として正しいものはどれか。",
    "options": [
      "3",
      "5",
      "8",
      "11"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0459",
    "unit": "コンピュータとプログラミング",
    "field": "Python読解",
    "difficulty": "★★",
    "question": "次のPythonコードを実行する。\\ncount = 0\\nfor i in range(4):\\n count += 2\\nprint(count)\\n表示される値として正しいものはどれか。",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0460",
    "unit": "コンピュータとプログラミング",
    "field": "Python読解",
    "difficulty": "★★★",
    "question": "次のPythonコードを実行する。\\nx = 3\\nif x > 5:\\n print('A')\\nelse:\\n print('B')\\n表示される文字として正しいものはどれか。",
    "options": [
      "A",
      "B",
      "AとB",
      "何も表示されない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0461",
    "unit": "コンピュータとプログラミング",
    "field": "Python読解",
    "difficulty": "★★★",
    "question": "次のPythonコードを実行する。\\nnums = [2, 4, 6, 8]\\nprint(nums[2])\\n表示される値として正しいものはどれか。",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0462",
    "unit": "コンピュータとプログラミング",
    "field": "Python読解",
    "difficulty": "★★★★",
    "question": "次のPythonコードを実行する。\\ns = 0\\nfor i in range(1, 6):\\n s += i\\nprint(s)\\n表示される値として正しいものはどれか。",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0463",
    "unit": "コンピュータとプログラミング",
    "field": "Python読解",
    "difficulty": "★★★★",
    "question": "次のPythonコードを実行する。\\nx = 1\\nfor i in range(3):\\n x = x * 3\\nprint(x)\\n表示される値として正しいものはどれか。",
    "options": [
      "9",
      "18",
      "27",
      "81"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0464",
    "unit": "コンピュータとプログラミング",
    "field": "Python読解",
    "difficulty": "★★★★★",
    "question": "次のPythonコードを実行する。\\na = [1, 3, 5, 7]\\ns = 0\\nfor x in a:\\n if x > 3:\\n s += x\\nprint(s)\\n表示される値として正しいものはどれか。",
    "options": [
      "8",
      "12",
      "15",
      "16"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0465",
    "unit": "コンピュータとプログラミング",
    "field": "Python読解",
    "difficulty": "★★★★★",
    "question": "次のPythonコードを実行する。\\nx = 10\\ny = 4\\nx, y = y, x\\nprint(x)\\n表示される値として正しいものはどれか。",
    "options": [
      "4",
      "6",
      "10",
      "14"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0466",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート読解",
    "difficulty": "★★",
    "question": "フローチャートにおいて、入力や出力を表す図形として一般的に用いられるものはどれか。",
    "options": [
      "長方形",
      "ひし形",
      "平行四辺形",
      "楕円"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0467",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート読解",
    "difficulty": "★★★",
    "question": "あるフローチャートでは、条件判定の後に『はい』と『いいえ』の二方向に処理が分かれている。この構造として最も適切なものはどれか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "再帰構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0468",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート読解",
    "difficulty": "★★★",
    "question": "『1から10までの整数について、偶数だけを表示する』フローチャートに必ず含まれる構造として最も適切なものはどれか。",
    "options": [
      "順次構造のみ",
      "分岐構造のみ",
      "反復構造と分岐構造",
      "探索構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0469",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート読解",
    "difficulty": "★★★★",
    "question": "変数xを1で初期化し、『x←x+3』をxが10以上になるまで繰り返す。繰り返し終了後のxの値として正しいものはどれか。",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0470",
    "unit": "コンピュータとプログラミング",
    "field": "フローチャート読解",
    "difficulty": "★★★★★",
    "question": "変数sを0で初期化する。iを1から5まで変化させながら、iが奇数のときだけ s←s+i を実行する。処理後のsの値として正しいものはどれか。",
    "options": [
      "6",
      "8",
      "9",
      "15"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0471",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "ある学校では、生徒の出席番号を配列Aに格納している。A=[12,15,18,21,24,27]のとき、『3の倍数かつ20未満』の要素数として正しいものはどれか。",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0472",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "あるプログラムでは、変数xを1で初期化し、1回目は2を、2回目は4を、3回目は8を加える処理を行う。処理後のxの値として正しいものはどれか。",
    "options": [
      "7",
      "13",
      "15",
      "16"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0473",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "次の処理を考える。『配列Aの全要素について、偶数なら1を加算する』。A=[1,4,7,8,10]のとき、加算回数として正しいものはどれか。",
    "options": [
      "1回",
      "2回",
      "3回",
      "4回"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0474",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "あるアルゴリズムでは、データ数が2倍になるたびに処理時間もほぼ2倍になる。このアルゴリズムの特徴として最も適切なものはどれか。",
    "options": [
      "処理時間は一定である",
      "線形的に増加する",
      "指数的に増加する",
      "減少する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0475",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "あるクラス40人のテスト結果を処理するプログラムを作成する。各生徒の得点を格納し、平均点を求めるために最も適したデータ構造はどれか。",
    "options": [
      "単一の変数",
      "配列",
      "定数",
      "条件分岐"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0476",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "あるプログラムが終了しない原因を調べたところ、繰り返し条件を更新する処理が存在しなかった。このプログラムで発生している現象として最も適切なものはどれか。",
    "options": [
      "構文エラー",
      "型エラー",
      "無限ループ",
      "圧縮エラー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0477",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "『1から100までの整数のうち、7の倍数の個数を数える』プログラムを実行した。最終的な個数として正しいものはどれか。",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0478",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "あるプログラムは、データ数nが増えると処理時間がおよそn²に比例して増加する。この特徴をもつ処理として最も考えられるものはどれか。",
    "options": [
      "二分探索",
      "線形探索",
      "単純な整列アルゴリズム",
      "定数時間処理"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0479",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース（応用）",
    "difficulty": "★★★★★",
    "question": "次の処理を実行する。『x←2、y←3、z←0。3回繰り返す：z←x+y、x←y、y←z』。処理後のzの値として正しいものはどれか。",
    "options": [
      "8",
      "13",
      "21",
      "34"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0480",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース（応用）",
    "difficulty": "★★★★★",
    "question": "次の処理を実行する。『a←10、b←4。a←a-b、b←a+b、a←a×2』。処理後のaの値として正しいものはどれか。",
    "options": [
      "8",
      "10",
      "12",
      "16"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0481",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース（応用）",
    "difficulty": "★★★★★",
    "question": "次の処理を実行する。『x←1。5回繰り返す：x←x×2』。処理後のxの値として正しいものはどれか。",
    "options": [
      "16",
      "24",
      "32",
      "64"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0482",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース（応用）",
    "difficulty": "★★★★★",
    "question": "次の処理を実行する。『s←0。iを1から5まで1ずつ増やしながら、s←s+i×2』。処理後のsの値として正しいものはどれか。",
    "options": [
      "20",
      "30",
      "40",
      "50"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0483",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース（応用）",
    "difficulty": "★★★★★",
    "question": "次の処理を実行する。『x←20。xが5より大きい間、x←x-4を繰り返す』。処理後のxの値として正しいものはどれか。",
    "options": [
      "0",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0484",
    "unit": "コンピュータとプログラミング",
    "field": "DNCLトレース（応用）",
    "difficulty": "★★★★★",
    "question": "次の処理を実行する。『n←1。4回繰り返す：n←n+3、n←n×2』。処理後のnの値として正しいものはどれか。",
    "options": [
      "46",
      "62",
      "78",
      "94"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0485",
    "unit": "コンピュータとプログラミング",
    "field": "Pythonコード読解",
    "difficulty": "★★★★",
    "question": "次のPythonコードを実行する。\\nnums=[3,6,9,12]\\ns=0\\nfor x in nums:\\n s=s+x\\nprint(s)\\n表示される値として正しいものはどれか。",
    "options": [
      "24",
      "30",
      "36",
      "42"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0486",
    "unit": "コンピュータとプログラミング",
    "field": "Pythonコード読解",
    "difficulty": "★★★★",
    "question": "次のPythonコードを実行する。\\ncount=0\\nfor i in range(1,10):\\n if i%3==0:\\n count+=1\\nprint(count)\\n表示される値として正しいものはどれか。",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0487",
    "unit": "コンピュータとプログラミング",
    "field": "Pythonコード読解",
    "difficulty": "★★★★",
    "question": "次のPythonコードを実行する。\\na=[2,5,8,11]\\nprint(a[1]+a[3])\\n表示される値として正しいものはどれか。",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0488",
    "unit": "コンピュータとプログラミング",
    "field": "Pythonコード読解",
    "difficulty": "★★★★★",
    "question": "次のPythonコードを実行する。\\nx=1\\nfor i in range(4):\\n x=x+i\\nprint(x)\\n表示される値として正しいものはどれか。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0489",
    "unit": "コンピュータとプログラミング",
    "field": "Pythonコード読解",
    "difficulty": "★★★★★",
    "question": "次のPythonコードを実行する。\\ns=0\\nfor i in range(1,6):\\n if i%2==1:\\n s=s+i\\nprint(s)\\n表示される値として正しいものはどれか。",
    "options": [
      "6",
      "8",
      "9",
      "15"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0490",
    "unit": "コンピュータとプログラミング",
    "field": "Pythonコード読解",
    "difficulty": "★★★★★",
    "question": "次のPythonコードを実行する。\\na=[1,2,3,4,5]\\na[2]=10\\nprint(a[2])\\n表示される値として正しいものはどれか。",
    "options": [
      "3",
      "5",
      "10",
      "12"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0491",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムの設計",
    "difficulty": "★★★★",
    "question": "配列A=[8,3,5,1]について、最小値を求めるアルゴリズムを実行する。最終的に得られる値として正しいものはどれか。",
    "options": [
      "1",
      "3",
      "5",
      "8"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0492",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムの設計",
    "difficulty": "★★★★",
    "question": "配列A=[4,7,2,9,5]について、最大値を求めるアルゴリズムを実行する。最終的に得られる値として正しいものはどれか。",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0493",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムの設計",
    "difficulty": "★★★★★",
    "question": "配列A=[10,20,30,40,50]について、全要素の平均値として正しいものはどれか。",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0494",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムの設計",
    "difficulty": "★★★★★",
    "question": "配列A=[1,4,7,10,13]について、10以上の要素数として正しいものはどれか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0495",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズムの設計",
    "difficulty": "★★★★★",
    "question": "配列A=[2,4,6,8,10]の各要素を2倍した後、A[4]の値として正しいものはどれか。",
    "options": [
      "16",
      "18",
      "20",
      "24"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0496",
    "unit": "コンピュータとプログラミング",
    "field": "シミュレーション",
    "difficulty": "★★★★",
    "question": "コンピュータでコイン投げを100回シミュレーションしたところ、表が48回出た。この結果について最も適切な説明はどれか。",
    "options": [
      "シミュレーションが失敗している",
      "表と裏は必ず50回ずつになる",
      "試行回数を増やすと割合は理論値に近づく傾向がある",
      "コンピュータでは乱数を使えない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0497",
    "unit": "コンピュータとプログラミング",
    "field": "シミュレーション",
    "difficulty": "★★★★",
    "question": "サイコロを振るシミュレーションを行う際、乱数によって生成される値として適切なものはどれか。",
    "options": [
      "0～4",
      "1～6",
      "0～9",
      "1～10"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0498",
    "unit": "コンピュータとプログラミング",
    "field": "シミュレーション",
    "difficulty": "★★★★★",
    "question": "あるプログラムで1から100までの乱数を10000回生成した。各数字の出現回数について最も適切な説明はどれか。",
    "options": [
      "すべて同じ回数になる",
      "出現回数は大きく偏る",
      "概ね均等になる傾向がある",
      "100だけが多く出る"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0499",
    "unit": "コンピュータとプログラミング",
    "field": "計算量",
    "difficulty": "★★★★★",
    "question": "線形探索で1000件のデータを探索する場合、最悪時の比較回数として正しいものはどれか。",
    "options": [
      "10回",
      "100回",
      "500回",
      "1000回"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0500",
    "unit": "コンピュータとプログラミング",
    "field": "計算量",
    "difficulty": "★★★★★",
    "question": "1024件の整列済みデータを二分探索する場合、最悪時の比較回数として最も適切なものはどれか。",
    "options": [
      "10回",
      "32回",
      "128回",
      "512回"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0501",
    "unit": "コンピュータとプログラミング",
    "field": "計算量",
    "difficulty": "★★★★★",
    "question": "データ数nが増えるにつれて、処理時間がおよそlog₂nに比例して増加するアルゴリズムとして最も適切なものはどれか。",
    "options": [
      "線形探索",
      "バブルソート",
      "二分探索",
      "選択ソート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0502",
    "unit": "コンピュータとプログラミング",
    "field": "情報活用とプログラミング",
    "difficulty": "★★★★★",
    "question": "学校祭の来場者数を時間帯ごとに集計するプログラムを作成する。来場者数を順番に保存するために最も適したものはどれか。",
    "options": [
      "条件分岐",
      "配列",
      "論理演算",
      "フローチャート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0503",
    "unit": "コンピュータとプログラミング",
    "field": "情報活用とプログラミング",
    "difficulty": "★★★★★",
    "question": "あるクラス40人分の点数データから平均点を求めるとき、必ず必要となる処理の組合せとして最も適切なものはどれか。",
    "options": [
      "探索と暗号化",
      "反復と加算",
      "圧縮と分岐",
      "標本化と量子化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0504",
    "unit": "コンピュータとプログラミング",
    "field": "情報活用とプログラミング",
    "difficulty": "★★★★★",
    "question": "プログラムの可読性を高めるために、処理内容を説明する文章をソースコード内に記述することがある。この文章を何というか。",
    "options": [
      "コメント",
      "変数",
      "配列",
      "引数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0505",
    "unit": "コンピュータとプログラミング",
    "field": "情報活用とプログラミング",
    "difficulty": "★★★★★",
    "question": "複数人でプログラムを開発する際、変数名を『a』『b』ではなく『total』『score』など意味の分かる名前にする主な理由として最も適切なものはどれか。",
    "options": [
      "処理速度を向上させるため",
      "メモリ消費を減らすため",
      "プログラムを読みやすくするため",
      "ファイル容量を削減するため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0506",
    "unit": "コンピュータとプログラミング",
    "field": "情報活用とプログラミング",
    "difficulty": "★★★★★",
    "question": "プログラムを修正した際、以前は正常に動いていた部分に問題が生じていないか確認するテストを何というか。",
    "options": [
      "単体テスト",
      "回帰テスト",
      "負荷テスト",
      "結合テスト"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0507",
    "unit": "コンピュータとプログラミング",
    "field": "リストの操作",
    "difficulty": "★★",
    "question": "Pythonにおいて、リストA=[10,20,30]の末尾に40を追加するメソッドとして正しいものはどれか。",
    "options": [
      "insert()",
      "append()",
      "add()",
      "push()"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0508",
    "unit": "コンピュータとプログラミング",
    "field": "リストの操作",
    "difficulty": "★★",
    "question": "Pythonにおいて、リストA=[5,8,11,14]の長さを取得する関数として正しいものはどれか。",
    "options": [
      "size(A)",
      "count(A)",
      "length(A)",
      "len(A)"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0509",
    "unit": "コンピュータとプログラミング",
    "field": "リストの操作",
    "difficulty": "★★★",
    "question": "Pythonにおいて、A=[2,4,6,8,10]とする。A[1]とA[3]を足した値として正しいものはどれか。",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0510",
    "unit": "コンピュータとプログラミング",
    "field": "リストの操作",
    "difficulty": "★★★",
    "question": "Pythonにおいて、A=[1,3,5]とする。A.append(7)を実行した後のリストとして正しいものはどれか。",
    "options": [
      "[1,3,5,7]",
      "[7,1,3,5]",
      "[1,3,7,5]",
      "[1,3,5]"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0511",
    "unit": "コンピュータとプログラミング",
    "field": "リストの操作",
    "difficulty": "★★★★",
    "question": "Pythonにおいて、A=[8,6,4,2]とする。A[2]=10を実行した後のリストとして正しいものはどれか。",
    "options": [
      "[8,6,10,2]",
      "[8,10,4,2]",
      "[10,6,4,2]",
      "[8,6,4,10]"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0512",
    "unit": "コンピュータとプログラミング",
    "field": "リストの操作",
    "difficulty": "★★★★★",
    "question": "Pythonにおいて、A=[1,2,3,4,5]とする。for文を用いて偶数のみを加算した結果として正しいものはどれか。",
    "options": [
      "5",
      "6",
      "7",
      "9"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0513",
    "unit": "コンピュータとプログラミング",
    "field": "二重ループ",
    "difficulty": "★★",
    "question": "『外側のループを3回、内側のループを4回』実行するとき、内側の処理は合計何回実行されるか。",
    "options": [
      "7回",
      "10回",
      "12回",
      "16回"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0514",
    "unit": "コンピュータとプログラミング",
    "field": "二重ループ",
    "difficulty": "★★★",
    "question": "次のPythonコードを実行する。\\ncount=0\\nfor i in range(2):\\n for j in range(3):\\n count+=1\\nprint(count)\\n表示される値として正しいものはどれか。",
    "options": [
      "3",
      "5",
      "6",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0515",
    "unit": "コンピュータとプログラミング",
    "field": "二重ループ",
    "difficulty": "★★★",
    "question": "次のPythonコードを実行する。\\ns=0\\nfor i in range(1,4):\\n for j in range(1,3):\\n s=s+1\\nprint(s)\\n表示される値として正しいものはどれか。",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0516",
    "unit": "コンピュータとプログラミング",
    "field": "二重ループ",
    "difficulty": "★★★★",
    "question": "5×5のマス目をすべて順番に調べるプログラムを二重ループで実装する場合、マスを調べる処理は合計何回行われるか。",
    "options": [
      "10回",
      "20回",
      "25回",
      "50回"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0517",
    "unit": "コンピュータとプログラミング",
    "field": "二重ループ",
    "difficulty": "★★★★★",
    "question": "100人の生徒について5教科の点数を処理するプログラムを二重ループで実装した。点数を読み取る処理は合計何回実行されるか。",
    "options": [
      "100回",
      "105回",
      "500回",
      "1000回"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0518",
    "unit": "コンピュータとプログラミング",
    "field": "文字列処理",
    "difficulty": "★★",
    "question": "Pythonにおいて、文字列'情報Ⅰ'を格納する変数として適切なものはどれか。",
    "options": [
      "text = 情報Ⅰ",
      "text = '情報Ⅰ'",
      "text = 123",
      "text = [情報Ⅰ]"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0519",
    "unit": "コンピュータとプログラミング",
    "field": "文字列処理",
    "difficulty": "★★★",
    "question": "Pythonにおいて、text='ABCDEF'とする。text[2]として取り出される文字はどれか。",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0520",
    "unit": "コンピュータとプログラミング",
    "field": "文字列処理",
    "difficulty": "★★★",
    "question": "Pythonにおいて、text='HELLO'とする。len(text)の値として正しいものはどれか。",
    "options": [
      "4",
      "5",
      "6",
      "10"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0521",
    "unit": "コンピュータとプログラミング",
    "field": "文字列処理",
    "difficulty": "★★★★",
    "question": "Pythonにおいて、text='情報'、num=1とする。print(text+str(num))を実行した結果として正しいものはどれか。",
    "options": [
      "情報",
      "num",
      "情報1",
      "エラー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0522",
    "unit": "コンピュータとプログラミング",
    "field": "文字列処理",
    "difficulty": "★★★★★",
    "question": "文字列'DATA'の各文字を順番に取り出して表示する処理を実現するために最も適した構造はどれか。",
    "options": [
      "条件分岐",
      "反復処理",
      "再帰処理",
      "例外処理"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0523",
    "unit": "コンピュータとプログラミング",
    "field": "関数",
    "difficulty": "★★",
    "question": "複数回利用する処理をまとめた部品を何というか。",
    "options": [
      "変数",
      "配列",
      "関数",
      "リスト"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0524",
    "unit": "コンピュータとプログラミング",
    "field": "関数",
    "difficulty": "★★★",
    "question": "Pythonにおいて、画面に文字を表示する関数はどれか。",
    "options": [
      "show()",
      "display()",
      "write()",
      "print()"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0525",
    "unit": "コンピュータとプログラミング",
    "field": "関数",
    "difficulty": "★★★",
    "question": "Pythonにおいて、絶対値を求める関数として正しいものはどれか。",
    "options": [
      "abs()",
      "int()",
      "str()",
      "max()"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0526",
    "unit": "コンピュータとプログラミング",
    "field": "関数",
    "difficulty": "★★★★",
    "question": "Pythonにおいて、次の関数を考える。\\n\\ndef add(a,b):\\n return a+b\\n\\nadd(3,5)の返り値として正しいものはどれか。",
    "options": [
      "5",
      "8",
      "15",
      "35"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0527",
    "unit": "コンピュータとプログラミング",
    "field": "関数",
    "difficulty": "★★★★★",
    "question": "関数を利用してプログラムを部品化する主な利点として最も適切なものはどれか。",
    "options": [
      "処理速度が必ず向上する",
      "コードの再利用がしやすくなる",
      "変数が不要になる",
      "メモリ使用量が0になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0528",
    "unit": "コンピュータとプログラミング",
    "field": "擬似言語とPython",
    "difficulty": "★★★",
    "question": "擬似言語における『←』がPythonで表す操作として最も適切なものはどれか。",
    "options": [
      "比較",
      "代入",
      "出力",
      "削除"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0529",
    "unit": "コンピュータとプログラミング",
    "field": "擬似言語とPython",
    "difficulty": "★★★",
    "question": "擬似言語の『もし x > 10 ならば』に対応するPythonの構文として正しいものはどれか。",
    "options": [
      "if x > 10:",
      "for x > 10:",
      "while x > 10:",
      "print(x > 10)"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0530",
    "unit": "コンピュータとプログラミング",
    "field": "擬似言語とPython",
    "difficulty": "★★★★",
    "question": "擬似言語の『iを1から5まで1ずつ増やしながら繰り返す』に最も対応するPythonコードはどれか。",
    "options": [
      "for i in range(5):",
      "for i in range(1,6):",
      "while i <= 6:",
      "for i in [1,6]:"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0531",
    "unit": "コンピュータとプログラミング",
    "field": "擬似言語とPython",
    "difficulty": "★★★★",
    "question": "擬似言語における『Aの要素数』をPythonで表現するものとして最も適切なものはどれか。",
    "options": [
      "A.size",
      "count(A)",
      "len(A)",
      "A.length()"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0532",
    "unit": "コンピュータとプログラミング",
    "field": "擬似言語とPython",
    "difficulty": "★★★★★",
    "question": "次の擬似言語を考える。\\n『s←0\\niを1から4まで増やしながら\\n s←s+i\\nを繰り返す』\\n処理後のsの値として正しいものはどれか。",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0533",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "次のPythonコードを実行する。\\nA=[2,4,6]\\nfor i in range(len(A)):\\n A[i]=A[i]+1\\nprint(A)\\n出力として正しいものはどれか。",
    "options": [
      "[2,4,6]",
      "[3,5,7]",
      "[1,3,5]",
      "[2,5,8]"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0534",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "次のPythonコードを実行する。\\ntext='PROGRAM'\\ncount=0\\nfor c in text:\\n count+=1\\nprint(count)\\n表示される値として正しいものはどれか。",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0535",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "次のPythonコードを実行する。\\nA=[1,3,5,7,9]\\ns=0\\nfor x in A:\\n if x > 4:\\n s=s+x\\nprint(s)\\n表示される値として正しいものはどれか。",
    "options": [
      "16",
      "18",
      "21",
      "24"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0536",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "ある学校の40人の生徒の点数を管理するプログラムを作成する。最高点・最低点・平均点を求める際、最も適切な処理の組合せはどれか。",
    "options": [
      "分岐のみ",
      "反復のみ",
      "反復と条件分岐",
      "条件分岐と再帰"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0537",
    "unit": "コンピュータとプログラミング",
    "field": "共通テスト型思考問題",
    "difficulty": "★★★★★",
    "question": "プログラムの処理時間を短縮するため、同じ計算を何度も実行しないように結果を保存して再利用する考え方として最も適切なものはどれか。",
    "options": [
      "変数の初期化",
      "計算結果の使い回し",
      "無限ループ",
      "条件分岐の削除"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0538",
    "unit": "コンピュータとプログラミング",
    "field": "リスト操作",
    "difficulty": "★★★",
    "question": "PythonでA=[5,10,15]とする。A.insert(17)を実行した後のリストとして正しいものはどれか。",
    "options": [
      "[5,7,10,15]",
      "[7,5,10,15]",
      "[5,10,7,15]",
      "[5,10,15,7]"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0539",
    "unit": "コンピュータとプログラミング",
    "field": "リスト操作",
    "difficulty": "★★★",
    "question": "PythonでA=[1,2,3,4]とする。A.pop()を実行した後のリストとして正しいものはどれか。",
    "options": [
      "[1,2,3]",
      "[2,3,4]",
      "[1,2,4]",
      "[1,2,3,4]"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0540",
    "unit": "コンピュータとプログラミング",
    "field": "リスト操作",
    "difficulty": "★★★★",
    "question": "PythonでA=[4,6,8,10]とする。A.remove(8)を実行した後のリストとして正しいものはどれか。",
    "options": [
      "[4,6,10]",
      "[4,8,10]",
      "[6,8,10]",
      "[4,6,8]"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0541",
    "unit": "コンピュータとプログラミング",
    "field": "リスト操作",
    "difficulty": "★★★★★",
    "question": "PythonでA=[3,6,9]とする。A.append(sum(A))を実行した後の最後の要素として正しいものはどれか。",
    "options": [
      "9",
      "12",
      "18",
      "21"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0542",
    "unit": "コンピュータとプログラミング",
    "field": "二次元配列",
    "difficulty": "★★★",
    "question": "二次元配列table=[[1,2],[3,4]]においてtable[1][0]の値として正しいものはどれか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0543",
    "unit": "コンピュータとプログラミング",
    "field": "二次元配列",
    "difficulty": "★★★★",
    "question": "30人×5教科の点数を保存する場合に最も適したデータ構造はどれか。",
    "options": [
      "変数30個",
      "一次元配列",
      "二次元配列",
      "文字列"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0544",
    "unit": "コンピュータとプログラミング",
    "field": "二次元配列",
    "difficulty": "★★★★★",
    "question": "二次元配列で「全生徒の数学の点数だけ」を取り出す処理に必要な反復処理として最も適切なものはどれか。",
    "options": [
      "列方向のみ反復",
      "行方向のみ反復",
      "反復不要",
      "二重ループ必須"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0545",
    "unit": "コンピュータとプログラミング",
    "field": "CSV",
    "difficulty": "★★",
    "question": "CSVファイルにおいて各項目を区切る文字として一般的なものはどれか。",
    "options": [
      "ピリオド",
      "カンマ",
      "コロン",
      "セミコロン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0546",
    "unit": "コンピュータとプログラミング",
    "field": "CSV",
    "difficulty": "★★★",
    "question": "CSV形式がExcelなどで広く利用される主な理由として最も適切なものはどれか。",
    "options": [
      "画像を保存できるため",
      "様々なソフトで読み書きしやすいため",
      "暗号化されているため",
      "容量が必ず0になるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0547",
    "unit": "コンピュータとプログラミング",
    "field": "CSV",
    "difficulty": "★★★★",
    "question": "CSVファイルをメモ帳で開いたとき、複数の列が確認できる理由として最も適切なものはどれか。",
    "options": [
      "列幅情報を持っているため",
      "区切り文字でデータを表現しているため",
      "画像として保存されているため",
      "セル情報を保持しているため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0548",
    "unit": "コンピュータとプログラミング",
    "field": "辞書型",
    "difficulty": "★★★",
    "question": "Pythonで辞書型を表す記号として正しいものはどれか。",
    "options": [
      "()",
      "[]",
      "{}",
      "<>"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0549",
    "unit": "コンピュータとプログラミング",
    "field": "辞書型",
    "difficulty": "★★★★",
    "question": "{'国語':72,'数学':85}のようなデータ構造を何というか。",
    "options": [
      "配列",
      "文字列",
      "辞書型",
      "タプル"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0550",
    "unit": "コンピュータとプログラミング",
    "field": "辞書型",
    "difficulty": "★★★★★",
    "question": "辞書型を利用する最大の利点として最も適切なものはどれか。",
    "options": [
      "添字しか使えない",
      "名前でデータを取り出せる",
      "並べ替えしかできない",
      "文字列しか保存できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0551",
    "unit": "コンピュータとプログラミング",
    "field": "乱数",
    "difficulty": "★★★",
    "question": "Pythonで0以上1未満の乱数を生成する関数を含むモジュールとして正しいものはどれか。",
    "options": [
      "math",
      "random",
      "string",
      "os"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0552",
    "unit": "コンピュータとプログラミング",
    "field": "乱数",
    "difficulty": "★★★★",
    "question": "random.randint(16)を実行したとき得られる値として適切なものはどれか。",
    "options": [
      "0～5",
      "1～5",
      "1～6",
      "0～6"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0553",
    "unit": "コンピュータとプログラミング",
    "field": "乱数",
    "difficulty": "★★★★★",
    "question": "コンピュータで乱数を利用したシミュレーションを何度も繰り返す目的として最も適切なものはどれか。",
    "options": [
      "実行速度を下げるため",
      "結果の傾向を調べるため",
      "メモリを増やすため",
      "データを暗号化するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0554",
    "unit": "コンピュータとプログラミング",
    "field": "関数設計",
    "difficulty": "★★★★",
    "question": "関数に値を渡して処理させる仕組みで関数へ渡す値を何というか。",
    "options": [
      "返り値",
      "引数",
      "変数",
      "定数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0555",
    "unit": "コンピュータとプログラミング",
    "field": "関数設計",
    "difficulty": "★★★★",
    "question": "関数の処理結果として呼び出し元へ返される値を何というか。",
    "options": [
      "戻り値（返り値）",
      "引数",
      "添字",
      "配列"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0556",
    "unit": "コンピュータとプログラミング",
    "field": "関数設計",
    "difficulty": "★★★★★",
    "question": "関数を利用することで最も期待できる効果として適切なものはどれか。",
    "options": [
      "プログラムの再利用性向上",
      "CPU速度向上",
      "通信速度向上",
      "メモリ容量増加"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0557",
    "unit": "コンピュータとプログラミング",
    "field": "アルゴリズム",
    "difficulty": "★★★★★",
    "question": "同じアルゴリズムでも入力データによって処理時間が変化する理由として最も適切なものはどれか。",
    "options": [
      "CPU性能が毎回変わるため",
      "比較回数や反復回数が変化するため",
      "プログラムが書き換わるため",
      "変数名が変わるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q03-0558",
    "unit": "コンピュータとプログラミング",
    "field": "プログラム設計",
    "difficulty": "★★★★★",
    "question": "プログラムを作成する前に処理手順を整理しておくことの最大の利点として最も適切なものはどれか。",
    "options": [
      "ソースコードが短くなる",
      "設計ミスを減らせる",
      "メモリ使用量が0になる",
      "必ず高速化できる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0001",
    "unit": "情報通信ネットワーク",
    "field": "ネットワークの基礎",
    "difficulty": "★",
    "question": "世界中のコンピュータやスマートフォンなどが相互に接続された巨大なネットワークを何というか。",
    "options": [
      "LAN",
      "インターネット",
      "WAN",
      "VPN"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0002",
    "unit": "情報通信ネットワーク",
    "field": "ネットワークの基礎",
    "difficulty": "★",
    "question": "家庭や学校などの限られた範囲で構築されるネットワークを何というか。",
    "options": [
      "LAN",
      "WAN",
      "VPN",
      "クラウド"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0003",
    "unit": "情報通信ネットワーク",
    "field": "ネットワークの基礎",
    "difficulty": "★",
    "question": "地理的に離れた地域同士を接続する広域ネットワークを何というか。",
    "options": [
      "LAN",
      "WAN",
      "NAS",
      "USB"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0004",
    "unit": "情報通信ネットワーク",
    "field": "通信技術",
    "difficulty": "★",
    "question": "スマートフォンやノートPCを無線でネットワークに接続する技術として最も一般的なものはどれか。",
    "options": [
      "Bluetooth",
      "Wi-Fi",
      "NFC",
      "HDMI"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0005",
    "unit": "情報通信ネットワーク",
    "field": "通信技術",
    "difficulty": "★★",
    "question": "近距離無線通信の一種でありワイヤレスイヤホンなどで広く利用されている技術はどれか。",
    "options": [
      "Bluetooth",
      "Wi-Fi",
      "LAN",
      "USB"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0006",
    "unit": "情報通信ネットワーク",
    "field": "通信技術",
    "difficulty": "★★",
    "question": "ICカードやスマートフォン決済などで利用される近距離無線通信技術はどれか。",
    "options": [
      "VPN",
      "NFC",
      "DNS",
      "SMTP"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0007",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス",
    "difficulty": "★",
    "question": "インターネット上で機器を識別するために割り当てられる番号を何というか。",
    "options": [
      "MACアドレス",
      "IPアドレス",
      "URL",
      "SSID"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0008",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス",
    "difficulty": "★★",
    "question": "「192.168.1.1」のように4つの数値をピリオドで区切って表現する方式を何というか。",
    "options": [
      "IPv4",
      "IPv6",
      "URL",
      "DNS"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0009",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス",
    "difficulty": "★★★",
    "question": "IPv6が導入された主な理由として最も適切なものはどれか。",
    "options": [
      "通信速度を下げるため",
      "IPアドレスの不足に対応するため",
      "LANを廃止するため",
      "無線通信を禁止するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0010",
    "unit": "情報通信ネットワーク",
    "field": "ドメイン名",
    "difficulty": "★",
    "question": "「www.example.com」における「example.com」のような人間が理解しやすい形で表した名前を何というか。",
    "options": [
      "IPアドレス",
      "ドメイン名",
      "プロトコル",
      "パケット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0011",
    "unit": "情報通信ネットワーク",
    "field": "DNS",
    "difficulty": "★★",
    "question": "ドメイン名とIPアドレスを対応付ける仕組みを何というか。",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "TCP"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0012",
    "unit": "情報通信ネットワーク",
    "field": "URL",
    "difficulty": "★★",
    "question": "Webページの場所を示す「https://www.example.com/index.html」のような文字列を何というか。",
    "options": [
      "URL",
      "IPアドレス",
      "DNS",
      "SSID"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0013",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル",
    "difficulty": "★",
    "question": "コンピュータ同士が通信を行う際の取り決めを何というか。",
    "options": [
      "プロトコル",
      "アルゴリズム",
      "プログラム",
      "インタフェース"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0014",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル",
    "difficulty": "★★",
    "question": "Webページの閲覧時に利用される代表的なプロトコルはどれか。",
    "options": [
      "SMTP",
      "HTTP",
      "DNS",
      "FTP"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0015",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル",
    "difficulty": "★★",
    "question": "電子メールの送信に主に利用されるプロトコルはどれか。",
    "options": [
      "SMTP",
      "HTTP",
      "DNS",
      "SSH"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0016",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル",
    "difficulty": "★★★",
    "question": "ファイル転送に利用される代表的なプロトコルはどれか。",
    "options": [
      "FTP",
      "TCP",
      "DNS",
      "POP3"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0017",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信",
    "difficulty": "★★",
    "question": "インターネット通信においてデータを小さな単位に分割したものを何というか。",
    "options": [
      "セクタ",
      "パケット",
      "フレーム",
      "ビット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0018",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信",
    "difficulty": "★★★",
    "question": "パケット通信の利点として最も適切なものはどれか。",
    "options": [
      "常に同じ経路しか通れない",
      "回線を効率よく共有できる",
      "通信速度が必ず一定になる",
      "データの分割ができない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0019",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信",
    "difficulty": "★★★★",
    "question": "動画視聴中に一部のパケットが失われた場合に起こり得る現象として最も適切なものはどれか。",
    "options": [
      "画面や音声が乱れる",
      "スマートフォンが充電される",
      "IPアドレスが変化する",
      "通信料金が無料になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0020",
    "unit": "情報通信ネットワーク",
    "field": "TCP/IP",
    "difficulty": "★★★",
    "question": "インターネットで広く利用されている通信方式を何というか。",
    "options": [
      "LAN方式",
      "TCP/IP",
      "Wi-Fi",
      "DNS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0021",
    "unit": "情報通信ネットワーク",
    "field": "TCP/IP",
    "difficulty": "★★★★",
    "question": "TCPの役割として最も適切なものはどれか。",
    "options": [
      "通信相手のIPアドレスを決定する",
      "データの欠落や順序を確認する",
      "無線通信を行う",
      "URLを管理する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0022",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★",
    "question": "インターネット経由でソフトウェアやデータを利用する仕組みを何というか。",
    "options": [
      "ローカルストレージ",
      "クラウドコンピューティング",
      "データ圧縮",
      "仮想記憶"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0023",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★",
    "question": "クラウドサービスの利点として最も適切なものはどれか。",
    "options": [
      "インターネット接続が不要である",
      "複数の端末から同じデータを利用できる",
      "停電の影響を受けない",
      "必ず無料である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0024",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★★",
    "question": "学校でクラウドサービスを利用して課題を共有することの利点として最も適切なものはどれか。",
    "options": [
      "USBが不要になるだけである",
      "複数人で同時編集できる",
      "通信速度が常に向上する",
      "パスワードが不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0025",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★",
    "question": "予約システムや販売管理システムなど目的を達成するために複数の要素を組み合わせた仕組みを何というか。",
    "options": [
      "情報システム",
      "プログラム",
      "データベース",
      "アルゴリズム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0026",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★",
    "question": "データを整理して保存し、検索や更新を容易にする仕組みを何というか。",
    "options": [
      "アルゴリズム",
      "データベース",
      "プロトコル",
      "キャッシュ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0027",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★★",
    "question": "コンビニのPOSシステムで収集された販売データの活用例として最も適切なものはどれか。",
    "options": [
      "商品の価格を固定する",
      "売れ筋商品の分析を行う",
      "通信速度を測定する",
      "ネットワークを切断する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0028",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★★★",
    "question": "情報システムにおいて入力されたデータが正しいかを確認する処理を何というか。",
    "options": [
      "暗号化",
      "認証",
      "データ検証",
      "圧縮"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0029",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★",
    "question": "利用者本人であることを確認するためにIDと組み合わせて使用するものはどれか。",
    "options": [
      "URL",
      "パスワード",
      "IPアドレス",
      "DNS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0030",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★★",
    "question": "指紋や顔認証など身体的特徴を利用した認証方式を何というか。",
    "options": [
      "二段階認証",
      "生体認証",
      "公開鍵認証",
      "クラウド認証"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0031",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★★★",
    "question": "「知識情報」「所持情報」「生体情報」のうちワンタイムパスワードアプリはどれに分類されるか。",
    "options": [
      "知識情報",
      "所持情報",
      "生体情報",
      "公開情報"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0032",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★",
    "question": "暗号化の目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "第三者による盗み見を防ぐため",
      "データ量を削減するため",
      "ファイルを整理するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0033",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★★",
    "question": "公開鍵暗号方式において送信者が暗号化に使用し、誰でも知ることができる鍵を何というか。",
    "options": [
      "秘密鍵",
      "公開鍵",
      "認証鍵",
      "復号鍵"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0034",
    "unit": "情報通信ネットワーク",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "近年、企業や自治体でゼロトラストセキュリティが注目されている理由として最も適切なものはどれか。",
    "options": [
      "社内ネットワークは常に安全だと考えるため",
      "ネットワークの内外を問わず常に検証が必要になったため",
      "Wi-Fiを禁止するため",
      "クラウドを廃止するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0035",
    "unit": "情報通信ネットワーク",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "学校の生徒1000人が同時に動画教材を視聴することになった。回線混雑を軽減するために学校側が最初に検討すべき内容として最も適切なものはどれか。",
    "options": [
      "端末の色を統一する",
      "ネットワーク帯域を増強する",
      "教室の机を増やす",
      "パスワードを変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0036",
    "unit": "情報通信ネットワーク",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "災害によって学校のサーバが故障した場合でもデータを失わないようにする方法として最も適切なものはどれか。",
    "options": [
      "サーバの電源を切る",
      "別の場所やクラウドにバックアップを保存する",
      "パスワードを長くする",
      "IPアドレスを変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0037",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★",
    "question": "通信速度を表す単位として用いられる「Mbps」の「b」が表しているものはどれか。",
    "options": [
      "byte",
      "bit",
      "buffer",
      "binary"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0038",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★",
    "question": "通信速度が100Mbpsである回線において「100」が表すものとして最も適切なものはどれか。",
    "options": [
      "1秒間に転送できるビット数",
      "1分間に転送できるバイト数",
      "1時間当たりの通信回数",
      "接続できる端末数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0039",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★★",
    "question": "1Gbpsは何Mbpsに相当するか。",
    "options": [
      "100Mbps",
      "1000Mbps",
      "10000Mbps",
      "100000Mbps"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0040",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★★",
    "question": "100MBのファイルを100Mbpsの回線で転送するとき理論上最も近い時間はどれか。ただし、1Byte＝8bitとする。",
    "options": [
      "約1秒",
      "約8秒",
      "約80秒",
      "約800秒"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0041",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★★★",
    "question": "通信速度の実測値が契約速度より遅くなる理由として最も適切なものはどれか。",
    "options": [
      "IPアドレスが不足しているため",
      "利用者が回線を共有しているため",
      "CPUが停止しているため",
      "URLが長いため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0042",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★★",
    "question": "電話回線で用いられてきた、通信中に専用の経路を確保する方式を何というか。",
    "options": [
      "パケット交換方式",
      "回線交換方式",
      "ストリーミング方式",
      "ブロードキャスト方式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0043",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★★",
    "question": "インターネットで広く利用されている通信方式はどれか。",
    "options": [
      "回線交換方式",
      "パケット交換方式",
      "直列交換方式",
      "多重交換方式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0044",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★★★",
    "question": "パケット交換方式の利点として最も適切なものはどれか。",
    "options": [
      "専用回線を確保できる",
      "通信資源を効率よく利用できる",
      "必ず同じ経路を通る",
      "通信の遅延が起こらない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0045",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★★★★",
    "question": "インターネットで送信されたパケットが異なる経路を通る理由として最も適切なものはどれか。",
    "options": [
      "通信の効率化や障害回避のため",
      "送信者が手動で指定するため",
      "受信者が選択するため",
      "暗号化のため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0046",
    "unit": "情報通信ネットワーク",
    "field": "LAN機器",
    "difficulty": "★",
    "question": "家庭や学校で複数の機器をネットワークへ接続する装置として最も適切なものはどれか。",
    "options": [
      "プリンタ",
      "ルータ",
      "ディスプレイ",
      "スキャナ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0047",
    "unit": "情報通信ネットワーク",
    "field": "LAN機器",
    "difficulty": "★★",
    "question": "異なるネットワーク同士を接続する役割をもつ装置はどれか。",
    "options": [
      "ハブ",
      "ルータ",
      "アクセスポイント",
      "モデム"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0048",
    "unit": "情報通信ネットワーク",
    "field": "LAN機器",
    "difficulty": "★★",
    "question": "無線LANに接続するための基地局の役割を果たす装置はどれか。",
    "options": [
      "アクセスポイント",
      "サーバ",
      "ルータ",
      "スイッチ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0049",
    "unit": "情報通信ネットワーク",
    "field": "LAN機器",
    "difficulty": "★★★",
    "question": "スイッチングハブの説明として最も適切なものはどれか。",
    "options": [
      "接続された全端末に無条件で送信する",
      "必要な端末だけにデータを転送する",
      "通信を暗号化する",
      "IPアドレスを発行する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0050",
    "unit": "情報通信ネットワーク",
    "field": "サーバ",
    "difficulty": "★",
    "question": "Webページを公開するためのコンピュータを何というか。",
    "options": [
      "メールサーバ",
      "ファイルサーバ",
      "Webサーバ",
      "認証サーバ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0051",
    "unit": "情報通信ネットワーク",
    "field": "サーバ",
    "difficulty": "★★",
    "question": "電子メールの送受信に利用されるサーバの組み合わせとして適切なものはどれか。",
    "options": [
      "DNSサーバとFTPサーバ",
      "SMTPサーバとPOPサーバ",
      "HTTPサーバとFTPサーバ",
      "TCPサーバとUDPサーバ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0052",
    "unit": "情報通信ネットワーク",
    "field": "サーバ",
    "difficulty": "★★★",
    "question": "ドメイン名とIPアドレスの対応表を管理しているサーバはどれか。",
    "options": [
      "メールサーバ",
      "DNSサーバ",
      "Webサーバ",
      "ファイルサーバ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0053",
    "unit": "情報通信ネットワーク",
    "field": "サーバ",
    "difficulty": "★★★★",
    "question": "学校の校内ネットワークで生徒のアカウント情報を一元管理するサーバとして最も適切なものはどれか。",
    "options": [
      "認証サーバ",
      "DNSサーバ",
      "Webサーバ",
      "FTPサーバ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0054",
    "unit": "情報通信ネットワーク",
    "field": "電子メール",
    "difficulty": "★",
    "question": "電子メールアドレスの「@」より後ろの部分を何というか。",
    "options": [
      "アカウント名",
      "ドメイン名",
      "ホスト名",
      "ユーザ名"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0055",
    "unit": "情報通信ネットワーク",
    "field": "電子メール",
    "difficulty": "★★",
    "question": "同じ内容のメールを多数の相手に送信する際、受信者同士にメールアドレスを見せないようにする機能はどれか。",
    "options": [
      "CC",
      "BCC",
      "To",
      "Reply"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0056",
    "unit": "情報通信ネットワーク",
    "field": "電子メール",
    "difficulty": "★★★",
    "question": "電子メールにおいて受信者以外にも内容を確認してほしい相手を指定する欄はどれか。",
    "options": [
      "BCC",
      "CC",
      "To",
      "From"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0057",
    "unit": "情報通信ネットワーク",
    "field": "電子メール",
    "difficulty": "★★★★",
    "question": "フィッシングメールへの対策として最も適切なものはどれか。",
    "options": [
      "添付ファイルをすぐ開く",
      "本文中のURLを無条件でクリックする",
      "送信元やURLを確認する",
      "メールを転送する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0058",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "外部からの不正アクセスを監視・制御する仕組みを何というか。",
    "options": [
      "VPN",
      "ファイアウォール",
      "クラウド",
      "DNS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0059",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "コンピュータの脆弱性を悪用して被害を与えるプログラムの総称はどれか。",
    "options": [
      "マルウェア",
      "ミドルウェア",
      "ファームウェア",
      "シェアウェア"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0060",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "利用者ごとに異なる権限を設定し、閲覧や操作を制限する考え方を何というか。",
    "options": [
      "アクセス制御",
      "圧縮",
      "認証",
      "仮想化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0061",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★★",
    "question": "ウイルス対策ソフトを最新の状態に保つ理由として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "新しい脅威に対応するため",
      "画質を向上させるため",
      "記憶容量を増やすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0062",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★★★",
    "question": "組織の内部ネットワークに接続する際、暗号化された専用の通信経路を構築する技術を何というか。",
    "options": [
      "VPN",
      "LAN",
      "DNS",
      "NAT"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0063",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★",
    "question": "送信者と受信者が同じ鍵を用いる暗号方式を何というか。",
    "options": [
      "公開鍵暗号方式",
      "共通鍵暗号方式",
      "ハッシュ関数",
      "電子署名"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0064",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★",
    "question": "公開鍵暗号方式において受信者が秘密に保持する鍵を何というか。",
    "options": [
      "公開鍵",
      "秘密鍵",
      "共有鍵",
      "認証鍵"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0065",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★★",
    "question": "電子署名の目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させる",
      "送信者の正当性や改ざんの有無を確認する",
      "データ容量を減らす",
      "ファイルを圧縮する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0066",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★",
    "question": "パスワードとスマートフォンへの確認コード入力を組み合わせる認証方式を何というか。",
    "options": [
      "生体認証",
      "二要素認証",
      "公開鍵認証",
      "匿名認証"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0067",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★★",
    "question": "「知識情報」に分類される認証情報として最も適切なものはどれか。",
    "options": [
      "指紋",
      "ICカード",
      "パスワード",
      "スマートフォン"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0068",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★★★",
    "question": "顔認証や虹彩認証が属する認証方式はどれか。",
    "options": [
      "知識認証",
      "所有物認証",
      "生体認証",
      "公開鍵認証"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0069",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★",
    "question": "コンビニエンスストアのPOSシステムが蓄積している情報として最も適切なものはどれか。",
    "options": [
      "店員の勤務表のみ",
      "商品の販売履歴や在庫情報",
      "レジの製造番号のみ",
      "建物の設計図"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0070",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★★",
    "question": "POSシステムのデータ分析によって実現できることとして最も適切なものはどれか。",
    "options": [
      "売れ筋商品の把握",
      "通信速度の向上",
      "ネットワークの暗号化",
      "OSの更新"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0071",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★★★",
    "question": "交通系ICカードの利用履歴を分析することで期待される効果として最も適切なものはどれか。",
    "options": [
      "通信回線の削減",
      "混雑状況の把握やダイヤ改善",
      "スマートフォンの性能向上",
      "パケット数の削減"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0072",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★",
    "question": "クラウドストレージを利用する利点として最も適切なものはどれか。",
    "options": [
      "インターネットが不要になる",
      "複数端末でデータを共有できる",
      "必ず無料で使える",
      "通信速度が一定になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0073",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★★",
    "question": "学校がクラウド型の学習サービスを利用する理由として最も適切なものはどれか。",
    "options": [
      "教材を紙で管理しやすくなるため",
      "場所を問わず学習できるため",
      "ネットワークが不要になるため",
      "パスワードが不要になるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0074",
    "unit": "情報通信ネットワーク",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "近年、生成AIサービスの利用拡大に伴い多くの企業が導入を進めている「社内の機密情報を外部サービスへ入力する際の利用ルール」を何というか。",
    "options": [
      "利用規約",
      "情報セキュリティポリシー",
      "著作権法",
      "電波法"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0075",
    "unit": "情報通信ネットワーク",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "近年の大規模なサイバー攻撃に備え、多くの自治体や企業が重視している対策として最も適切なものはどれか。",
    "options": [
      "パスワードの廃止",
      "定期的なバックアップ",
      "メールの禁止",
      "インターネットの停止"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0076",
    "unit": "情報通信ネットワーク",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "学校祭のライブ配信中に映像が頻繁に止まるようになった。最初に疑うべき原因として最も適切なものはどれか。",
    "options": [
      "教室の照明",
      "ネットワーク帯域の不足",
      "生徒数の不足",
      "ディスプレイの大きさ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0077",
    "unit": "情報通信ネットワーク",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "学校のWebサイトがアクセス集中によって表示されにくくなった。管理者が最初に検討すべき対策として最も適切なものはどれか。",
    "options": [
      "画像の色を変更する",
      "サーバの性能や回線を強化する",
      "URLを短くする",
      "利用者数を制限する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0078",
    "unit": "情報通信ネットワーク",
    "field": "TCP/IP",
    "difficulty": "★★",
    "question": "インターネット上で通信を行うための基本的な規約群を何というか。",
    "options": [
      "HTTP",
      "TCP/IP",
      "DNS",
      "FTP"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0079",
    "unit": "情報通信ネットワーク",
    "field": "TCP/IP",
    "difficulty": "★★★",
    "question": "TCPの役割として最も適切なものはどれか。",
    "options": [
      "通信経路を決定する",
      "データの順序や欠落を確認する",
      "ドメイン名を変換する",
      "Webページを表示する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0080",
    "unit": "情報通信ネットワーク",
    "field": "TCP/IP",
    "difficulty": "★★★",
    "question": "IPの役割として最も適切なものはどれか。",
    "options": [
      "データの分割と送信先の指定",
      "電子メールの管理",
      "Webページの表示",
      "暗号化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0081",
    "unit": "情報通信ネットワーク",
    "field": "TCP/IP",
    "difficulty": "★★★★",
    "question": "動画配信サービスでは多少のデータ欠損よりもリアルタイム性が重視されるため、TCPではなくUDPが利用されることがある。UDPの特徴として最も適切なものはどれか。",
    "options": [
      "必ずデータの到着順を保証する",
      "通信速度は遅いが信頼性が高い",
      "確認応答を省略して高速に通信できる",
      "暗号化機能を持つ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0082",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信",
    "difficulty": "★★",
    "question": "送信するデータを小さな単位に分割して送る方式を何というか。",
    "options": [
      "回線交換",
      "パケット交換",
      "時分割交換",
      "周波数交換"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0083",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信",
    "difficulty": "★★★",
    "question": "大きな画像ファイルをインターネットで送信する際にデータを分割して送る主な理由として最も適切なものはどれか。",
    "options": [
      "画像の画質を上げるため",
      "効率よく通信回線を共有するため",
      "暗号化するため",
      "容量を増やすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0084",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信",
    "difficulty": "★★★★",
    "question": "送信されたパケットの一部が途中で失われた場合、TCP通信では通常どのような処理が行われるか。",
    "options": [
      "通信を終了する",
      "失われたパケットを再送する",
      "送信元のIPアドレスを変更する",
      "暗号化を解除する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0085",
    "unit": "情報通信ネットワーク",
    "field": "DNS",
    "difficulty": "★★",
    "question": "DNSサーバが停止した場合に最も起こりやすい現象はどれか。",
    "options": [
      "キーボードが使えなくなる",
      "URLを入力してもWebページを開けなくなる",
      "CPUが停止する",
      "Wi-Fiが切断される"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0086",
    "unit": "情報通信ネットワーク",
    "field": "DNS",
    "difficulty": "★★★",
    "question": "DNSを利用する利点として最も適切なものはどれか。",
    "options": [
      "通信速度が必ず向上する",
      "人間がIPアドレスを覚える必要がなくなる",
      "データを圧縮できる",
      "メールを自動送信できる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0087",
    "unit": "情報通信ネットワーク",
    "field": "DNS",
    "difficulty": "★★★★",
    "question": "Webサイトを閲覧するとき「www.example.com」をIPアドレスに変換する処理を担当する機器はどれか。",
    "options": [
      "ルータ",
      "DNSサーバ",
      "Webサーバ",
      "ハブ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0088",
    "unit": "情報通信ネットワーク",
    "field": "Web",
    "difficulty": "★★",
    "question": "HTTPとHTTPSの違いとして最も適切なものはどれか。",
    "options": [
      "HTTPSでは通信内容が暗号化される",
      "HTTPはインターネットで利用できない",
      "HTTPSは画像を表示できない",
      "HTTPは電子メール専用である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0089",
    "unit": "情報通信ネットワーク",
    "field": "Web",
    "difficulty": "★★★",
    "question": "ブラウザのアドレスバーに表示される鍵マークが示す内容として最も適切なものはどれか。",
    "options": [
      "通信が暗号化されている",
      "通信速度が速い",
      "広告が表示されない",
      "ウイルスが存在しない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0090",
    "unit": "情報通信ネットワーク",
    "field": "Web",
    "difficulty": "★★★★",
    "question": "HTTPS通信においてWebサイトの運営者が正当であることを証明する仕組みとして利用されるものはどれか。",
    "options": [
      "電子証明書",
      "ハッシュ関数",
      "MACアドレス",
      "プロキシサーバ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0091",
    "unit": "情報通信ネットワーク",
    "field": "メール",
    "difficulty": "★★",
    "question": "受信者全員のメールアドレスを互いに見えないようにメールを送る際に利用する欄はどれか。",
    "options": [
      "To",
      "CC",
      "BCC",
      "Reply-To"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0092",
    "unit": "情報通信ネットワーク",
    "field": "メール",
    "difficulty": "★★★",
    "question": "迷惑メール対策として最も適切なものはどれか。",
    "options": [
      "不審な添付ファイルを開かない",
      "同じパスワードを使う",
      "メールを全員に転送する",
      "差出人を確認しない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0093",
    "unit": "情報通信ネットワーク",
    "field": "メール",
    "difficulty": "★★★★",
    "question": "「至急確認してください」という件名のメールに添付ファイルがあり、送信者に心当たりがない。このとき最初に取るべき行動として最も適切なものはどれか。",
    "options": [
      "すぐに開く",
      "別の人に転送する",
      "添付ファイルを削除し、送信元を確認する",
      "返信してパスワードを尋ねる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0094",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "情報セキュリティの三要素「機密性・完全性」ともう一つは何か。",
    "options": [
      "匿名性",
      "可用性",
      "共有性",
      "複製性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0095",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "情報セキュリティにおける「完全性」とは何を意味するか。",
    "options": [
      "必要なときに利用できること",
      "情報が正確で改ざんされていないこと",
      "権限のある人だけが閲覧できること",
      "通信速度が速いこと"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0096",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "情報セキュリティにおける「可用性」とは何を意味するか。",
    "options": [
      "必要なときに情報を利用できること",
      "情報を圧縮できること",
      "情報を暗号化できること",
      "情報を複製できること"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0097",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★★★",
    "question": "学校の成績データを管理するシステムで教員のみが閲覧できるようにすることは主にどの要素を高めるためか。",
    "options": [
      "完全性",
      "機密性",
      "可用性",
      "拡張性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0098",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★★★★",
    "question": "災害時でも学校のシステムを継続して利用できるように複数の場所にサーバを設置する対策は、主にどの要素を高めるためか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "匿名性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0099",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★",
    "question": "パスワード認証は認証の三要素のうちどれに分類されるか。",
    "options": [
      "知識情報",
      "所持情報",
      "生体情報",
      "位置情報"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0100",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★★",
    "question": "ICカード社員証による認証は認証の三要素のうちどれに分類されるか。",
    "options": [
      "知識情報",
      "所持情報",
      "生体情報",
      "公開情報"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0101",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★★★",
    "question": "「パスワード＋指紋認証」のように異なる種類の認証を組み合わせる方式を何というか。",
    "options": [
      "単一認証",
      "多要素認証",
      "公開認証",
      "匿名認証"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0102",
    "unit": "情報通信ネットワーク",
    "field": "認証",
    "difficulty": "★★★★★",
    "question": "スマートフォンに送信されるワンタイムパスワードを利用する利点として最も適切なものはどれか。",
    "options": [
      "通信速度が向上する",
      "パスワード漏えい時のリスクを低減できる",
      "データ容量が増える",
      "暗号化が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0103",
    "unit": "情報通信ネットワーク",
    "field": "データベース",
    "difficulty": "★★",
    "question": "大量のデータを整理して保存し、検索や更新を容易にする仕組みを何というか。",
    "options": [
      "データベース",
      "アルゴリズム",
      "クラウド",
      "プロトコル"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0104",
    "unit": "情報通信ネットワーク",
    "field": "データベース",
    "difficulty": "★★★",
    "question": "データベースで各レコードを一意に識別する項目を何というか。",
    "options": [
      "主キー",
      "副キー",
      "索引",
      "属性"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0105",
    "unit": "情報通信ネットワーク",
    "field": "データベース",
    "difficulty": "★★★★",
    "question": "学校の生徒名簿データベースで主キーとして最も適切なものはどれか。",
    "options": [
      "氏名",
      "住所",
      "出席番号",
      "好きな教科"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0106",
    "unit": "情報通信ネットワーク",
    "field": "データベース",
    "difficulty": "★★★★★",
    "question": "生徒データベースで「学年」と「クラス」の両方を条件に検索する場合、利用される処理として最も適切なものはどれか。",
    "options": [
      "AND検索",
      "OR検索",
      "XOR検索",
      "NOT検索"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0107",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★",
    "question": "クラウドサービスを利用する際の注意点として最も適切なものはどれか。",
    "options": [
      "インターネット接続が不要である",
      "障害時に利用できなくなる可能性がある",
      "データは必ず国内に保存される",
      "セキュリティ対策が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0108",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★★",
    "question": "クラウドサービスにデータを保存する利点として最も適切なものはどれか。",
    "options": [
      "端末が故障してもデータを復元しやすい",
      "パスワードが不要になる",
      "通信が不要になる",
      "必ず無料になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0109",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★★★",
    "question": "学校でクラウド型学習システムを導入した結果、教員と生徒が同時に資料を編集できるようになった。この特徴として最も適切なものはどれか。",
    "options": [
      "分散処理",
      "共同編集",
      "仮想記憶",
      "暗号化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0110",
    "unit": "情報通信ネットワーク",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "近年多くの企業で導入が進んでいる「ゼロトラスト」という考え方として最も適切なものはどれか。",
    "options": [
      "社内ネットワークは安全であると仮定する",
      "すべての通信を信用せず検証する",
      "インターネット接続を禁止する",
      "パスワードを廃止する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0111",
    "unit": "情報通信ネットワーク",
    "field": "時事問題",
    "difficulty": "★★★★★",
    "question": "生成AIサービスの利用時に学校が最も注意すべき事項として適切なものはどれか。",
    "options": [
      "入力した情報の取り扱い",
      "通信速度",
      "画面の大きさ",
      "端末の色"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0112",
    "unit": "情報通信ネットワーク",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "学校全体でオンライン試験を同時実施したところ、通信が不安定になった。改善策として最も適切なものはどれか。",
    "options": [
      "問題数を増やす",
      "ネットワーク機器や回線を増強する",
      "全員のパスワードを変更する",
      "端末の壁紙を統一する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0113",
    "unit": "情報通信ネットワーク",
    "field": "思考問題",
    "difficulty": "★★★★★",
    "question": "災害発生時に自治体のWebサイトへアクセスが集中したため表示できなくなった。この問題を防ぐ方法として最も適切なものはどれか。",
    "options": [
      "利用者数を制限する",
      "複数のサーバへ負荷を分散する",
      "URLを短縮する",
      "ファイル名を変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0114",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "通信速度が80Mbpsの回線で20MBのデータを送信するとき、理論上最も近い時間はどれか。ただし、1Byte＝8bitとする。",
    "options": [
      "約1秒",
      "約2秒",
      "約8秒",
      "約16秒"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0115",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "1.6GBの動画ファイルを800Mbpsの回線でダウンロードする場合、理論上最も近い時間はどれか。ただし、1GB＝1000MBとする。",
    "options": [
      "約4秒",
      "約8秒",
      "約16秒",
      "約32秒"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0116",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "50Mbpsの回線を5人で等しく利用するとき1人あたりの理論上の通信速度として最も近いものはどれか。",
    "options": [
      "5Mbps",
      "10Mbps",
      "15Mbps",
      "25Mbps"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0117",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "200MBのデータを100Mbpsの回線で転送したところ理論値よりも大幅に時間がかかった。原因として最も考えられるものはどれか。",
    "options": [
      "利用者が回線を共有していた",
      "画面の明るさが低かった",
      "CPUのクロック周波数が高かった",
      "ファイル名が長かった"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0118",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "250Mbpsは何Gbpsか。",
    "options": [
      "0.025Gbps",
      "0.25Gbps",
      "2.5Gbps",
      "25Gbps"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0119",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（練習）",
    "difficulty": "★★",
    "question": "IPアドレス「192.168.10.25」のような形式はどれか。",
    "options": [
      "IPv4",
      "IPv6",
      "MACアドレス",
      "URL"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0120",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（練習）",
    "difficulty": "★★",
    "question": "家庭内の複数の端末が1つのグローバルIPアドレスを共有できるようにする技術はどれか。",
    "options": [
      "DNS",
      "NAT",
      "SSL",
      "SMTP"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0121",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（練習）",
    "difficulty": "★★",
    "question": "Webサイトを閲覧するときブラウザが最初に行う処理として最も適切なものはどれか。",
    "options": [
      "DNSサーバへ問い合わせる",
      "メールサーバへ接続する",
      "ファイルを圧縮する",
      "IPアドレスを暗号化する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0122",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信（練習）",
    "difficulty": "★★",
    "question": "インターネット上で送信された複数のパケットが異なる順序で到着することがある理由として最も適切なものはどれか。",
    "options": [
      "送信者が順番を指定していないため",
      "異なる経路を通る場合があるため",
      "受信者が順番を変更するため",
      "暗号化されているため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0123",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信（練習）",
    "difficulty": "★★",
    "question": "動画配信サービスで映像が一時的に停止した。この原因として最も考えられるものはどれか。",
    "options": [
      "パケットの遅延や欠落",
      "画面の解像度",
      "ブラウザの色設定",
      "IPアドレスの変更"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0124",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信（練習）",
    "difficulty": "★★",
    "question": "1つの通信回線を多数の利用者で共有できる理由として最も適切なものはどれか。",
    "options": [
      "データをパケットに分割しているため",
      "全員が同じIPアドレスを持つため",
      "全員が同じ端末を使うため",
      "データが暗号化されているため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0125",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（練習）",
    "difficulty": "★★",
    "question": "「https://www.example.jp/index.html」においてドメイン名として正しいものはどれか。",
    "options": [
      "https",
      "www.example.jp",
      "index.html",
      "jp/index"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0126",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（練習）",
    "difficulty": "★★",
    "question": "DNSサーバの役割として最も適切なものはどれか。",
    "options": [
      "通信を暗号化する",
      "ドメイン名をIPアドレスに変換する",
      "メールを送信する",
      "動画を圧縮する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0127",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（練習）",
    "difficulty": "★★",
    "question": "同じWebサイトにアクセスできるがURLではなくIPアドレスを直接入力している。この状況で利用されていない仕組みはどれか。",
    "options": [
      "DNS",
      "TCP/IP",
      "HTTP",
      "パケット交換"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0128",
    "unit": "情報通信ネットワーク",
    "field": "メール（練習）",
    "difficulty": "★★",
    "question": "メールの宛先にBCCを利用する理由として最も適切なものはどれか。",
    "options": [
      "送信速度を向上させるため",
      "受信者同士にメールアドレスを見せないため",
      "メールを暗号化するため",
      "添付ファイルを削除するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0129",
    "unit": "情報通信ネットワーク",
    "field": "メール（練習）",
    "difficulty": "★★",
    "question": "メールに添付されたファイルを開く前に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "ファイルサイズだけを確認する",
      "送信者や内容に不審な点がないか確認する",
      "受信時刻だけを確認する",
      "件名を変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0130",
    "unit": "情報通信ネットワーク",
    "field": "メール（練習）",
    "difficulty": "★★",
    "question": "メールアドレス「student@example.ac.jp」において「student」を何というか。",
    "options": [
      "ドメイン名",
      "ユーザー名",
      "プロトコル",
      "ホスト名"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0131",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（練習）",
    "difficulty": "★★",
    "question": "公開鍵暗号方式において送信者が暗号化に使用する鍵はどれか。",
    "options": [
      "秘密鍵",
      "公開鍵",
      "共通鍵",
      "認証鍵"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0132",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（練習）",
    "difficulty": "★★",
    "question": "第三者に通信内容を盗み見されないようにする技術を何というか。",
    "options": [
      "圧縮",
      "暗号化",
      "認証",
      "複製"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0133",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（練習）",
    "difficulty": "★★",
    "question": "HTTPS通信を利用する主な目的として最も適切なものはどれか。",
    "options": [
      "データを高速化するため",
      "通信内容を保護するため",
      "URLを短くするため",
      "サーバを増やすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0134",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "学校の学習システムにログインする際、「パスワード」と「スマートフォンに送られた確認コード」の両方が必要であった。この認証方式を何というか。",
    "options": [
      "公開鍵認証",
      "多要素認証",
      "匿名認証",
      "生体認証"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0135",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "指紋認証が突破されるリスクを低減するため最も有効な方法はどれか。",
    "options": [
      "パスワードを廃止する",
      "別の認証要素と組み合わせる",
      "指紋を定期的に変更する",
      "通信速度を向上させる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0136",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "ICカードを紛失した場合に最も懸念される情報セキュリティ上の問題はどれか。",
    "options": [
      "完全性の低下",
      "機密性の低下",
      "可用性の向上",
      "通信速度の低下"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0137",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "学校のサーバがランサムウェアに感染した場合、最も直接的な被害として考えられるものはどれか。",
    "options": [
      "データが暗号化され利用できなくなる",
      "通信速度が向上する",
      "IPアドレスが変更される",
      "メールアドレスが削除される"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0138",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "情報セキュリティの三要素のうち「権限のない人が情報を閲覧できないこと」を表すものはどれか。",
    "options": [
      "可用性",
      "完全性",
      "機密性",
      "拡張性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0139",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "企業のWebサイトがサイバー攻撃を受け、一時的に閲覧できなくなった。このとき損なわれた可能性が最も高い要素はどれか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "匿名性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0140",
    "unit": "情報通信ネットワーク",
    "field": "サーバ（演習）",
    "difficulty": "★★★",
    "question": "Webブラウザでページを表示する際、HTMLファイルを送信している装置はどれか。",
    "options": [
      "DNSサーバ",
      "メールサーバ",
      "Webサーバ",
      "認証サーバ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0141",
    "unit": "情報通信ネットワーク",
    "field": "サーバ（演習）",
    "difficulty": "★★★",
    "question": "学校内の複数のパソコンが同じプリンタを利用できるようにするため最も適切なサーバはどれか。",
    "options": [
      "プリントサーバ",
      "DNSサーバ",
      "メールサーバ",
      "Webサーバ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0142",
    "unit": "情報通信ネットワーク",
    "field": "サーバ（演習）",
    "difficulty": "★★★",
    "question": "生徒が校外から学校のファイルサーバへ安全に接続するために必要な技術として最も適切なものはどれか。",
    "options": [
      "VPN",
      "DNS",
      "POP3",
      "FTP"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0143",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（演習）",
    "difficulty": "★★★",
    "question": "クラウドストレージに保存したファイルを自宅と学校の両方で編集できる理由として最も適切なものはどれか。",
    "options": [
      "ファイルが各端末に完全に保存されるため",
      "インターネット経由で同じデータにアクセスできるため",
      "通信速度が一定であるため",
      "IPアドレスが共通だから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0144",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（演習）",
    "difficulty": "★★★",
    "question": "学校がクラウドサービスを利用する際、最も注意すべき事項はどれか。",
    "options": [
      "サーバの色",
      "保存する情報の管理",
      "画面サイズ",
      "マウスの種類"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0145",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（演習）",
    "difficulty": "★★★",
    "question": "コンビニのPOSシステムが蓄積したデータを分析することで可能になることとして最も適切なものはどれか。",
    "options": [
      "売れ筋商品の予測",
      "ネットワーク速度の向上",
      "レジの削減",
      "通信の暗号化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0146",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（演習）",
    "difficulty": "★★★",
    "question": "駅の改札システムでICカードの履歴を分析することで得られる情報として最も適切なものはどれか。",
    "options": [
      "利用者の混雑状況",
      "通信速度",
      "画面解像度",
      "端末の寿命"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0147",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "学校で一斉にオンライン授業を実施したところ一部の生徒だけ映像が途切れた。原因として最も考えられるものはどれか。",
    "options": [
      "生徒ごとの通信環境の違い",
      "サーバの色",
      "教科書の内容",
      "画面の明るさ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0148",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "災害時に学校のサーバ室が使用不能になった場合でもシステムを継続利用するため最も重要な対策はどれか。",
    "options": [
      "サーバを定期的に再起動する",
      "データを別の場所にも保存する",
      "パスワードを変更する",
      "画面を大型化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0149",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "学校のWebサイトへのアクセスが急増した結果、ページの表示に時間がかかるようになった。最も効果的な対策はどれか。",
    "options": [
      "ネットワーク機器やサーバを増強する",
      "URLを変更する",
      "利用者の端末を交換する",
      "メールアドレスを変更する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0150",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（演習）",
    "difficulty": "★★★",
    "question": "通信速度が200Mbpsの回線を4人で均等に利用している。このとき1人あたりの理論上の通信速度として最も適切なものはどれか。",
    "options": [
      "25Mbps",
      "50Mbps",
      "100Mbps",
      "150Mbps"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0151",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（演習）",
    "difficulty": "★★★",
    "question": "300MBの動画ファイルを150Mbpsの回線でダウンロードする。理論上最も近い時間はどれか。ただし、1Byte＝8bitとする。",
    "options": [
      "8秒",
      "16秒",
      "24秒",
      "32秒"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0152",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（演習）",
    "difficulty": "★★★",
    "question": "学校の回線速度が1Gbpsであり、同時に100人の生徒が均等に利用している。1人あたりの理論上の通信速度はどれか。",
    "options": [
      "1Mbps",
      "10Mbps",
      "100Mbps",
      "1000Mbps"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0153",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（演習）",
    "difficulty": "★★★",
    "question": "ある学校では午前中だけ通信が遅くなることが多い。この現象の原因として最も適切なものはどれか。",
    "options": [
      "IPアドレスの変更",
      "同時利用者の増加",
      "パスワードの変更",
      "画面解像度の上昇"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0154",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（演習）",
    "difficulty": "★★★",
    "question": "200MBのファイルを100Mbpsの回線で転送したところ32秒かかった。理論値より時間が長くなった原因として最も適切なものはどれか。",
    "options": [
      "回線が共有されていた",
      "CPUの性能が高かった",
      "ファイル名が長かった",
      "DNSサーバが存在した"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0155",
    "unit": "情報通信ネットワーク",
    "field": "通信方式（演習）",
    "difficulty": "★★★",
    "question": "パケット交換方式において一部の経路で障害が発生しても通信を継続できる理由として最も適切なものはどれか。",
    "options": [
      "送信者がすべての経路を指定するため",
      "パケットごとに別経路を選択できるため",
      "通信内容が圧縮されるため",
      "専用回線を利用するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0156",
    "unit": "情報通信ネットワーク",
    "field": "通信方式（演習）",
    "difficulty": "★★★",
    "question": "インターネット電話では多少音声が乱れても遅延を少なくすることが重視される。このような通信で利用されることが多いプロトコルはどれか。",
    "options": [
      "UDP",
      "TCP",
      "HTTP",
      "SMTP"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0157",
    "unit": "情報通信ネットワーク",
    "field": "通信方式（演習）",
    "difficulty": "★★★",
    "question": "動画配信サービスで一部の映像データが失われても再生が継続される理由として最も適切なものはどれか。",
    "options": [
      "専用回線を利用しているため",
      "リアルタイム性を優先しているため",
      "通信速度が一定であるため",
      "DNSが補完しているため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0158",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（演習）",
    "difficulty": "★★★",
    "question": "ある生徒は「https://www.school.jp」と入力してもページを開けなかったが「203.0.113.1」を入力すると閲覧できた。このとき障害が発生している可能性が高い機器はどれか。",
    "options": [
      "DNSサーバ",
      "Webサーバ",
      "メールサーバ",
      "ファイルサーバ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0159",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（演習）",
    "difficulty": "★★★",
    "question": "Webページを表示する際の処理順として最も適切なものはどれか。",
    "options": [
      "HTTP通信→DNS問い合わせ→HTML受信",
      "DNS問い合わせ→HTTP通信→HTML受信",
      "HTML受信→DNS問い合わせ→HTTP通信",
      "HTTP通信→HTML受信→DNS問い合わせ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0160",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（演習）",
    "difficulty": "★★★",
    "question": "学校のWebサイトのURLを変更したところ一部の利用者だけ古いページが表示された。原因として最も適切なものはどれか。",
    "options": [
      "DNS情報が更新されていないため",
      "IPアドレスが不足しているため",
      "メールサーバが停止しているため",
      "通信速度が低下したため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0161",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "情報セキュリティの三要素のうち、バックアップによって特に向上するものはどれか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "匿名性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0162",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "学校の成績データが第三者によって書き換えられた。このとき損なわれた情報セキュリティの要素はどれか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "拡張性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0163",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "生徒の個人情報が外部に漏えいした。このとき損なわれた要素として最も適切なものはどれか。",
    "options": [
      "可用性",
      "完全性",
      "機密性",
      "効率性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0164",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "学校のサーバが故障し、生徒が学習システムを利用できなくなった。このとき損なわれた要素として最も適切なものはどれか。",
    "options": [
      "可用性",
      "完全性",
      "機密性",
      "秘匿性"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0165",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "認証アプリがインストールされたスマートフォンを利用したワンタイムパスワード認証は認証要素のうちどれに分類されるか。",
    "options": [
      "知識情報",
      "所持情報",
      "生体情報",
      "位置情報"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0166",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "ある生徒が「パスワード＋指紋認証」を利用してログインしている。この認証方式を何というか。",
    "options": [
      "公開鍵認証",
      "多要素認証",
      "電子署名",
      "シングルサインオン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0167",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "同じパスワードを複数のサービスで使い回すことの危険性として最も適切なものはどれか。",
    "options": [
      "通信速度が低下する",
      "一つの漏えいが他のサービスにも影響する",
      "IPアドレスが変わる",
      "DNSが停止する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0168",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（応用）",
    "difficulty": "★★★★",
    "question": "公開鍵暗号方式においてAさんがBさんだけに読めるメッセージを送りたい。このとき暗号化に利用する鍵はどれか。",
    "options": [
      "Aさんの秘密鍵",
      "Aさんの公開鍵",
      "Bさんの秘密鍵",
      "Bさんの公開鍵"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0169",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（応用）",
    "difficulty": "★★★★",
    "question": "電子署名を用いて送信者本人であることを証明する際に利用される鍵はどれか。",
    "options": [
      "送信者の秘密鍵",
      "送信者の公開鍵",
      "受信者の公開鍵",
      "受信者の秘密鍵"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0170",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（応用）",
    "difficulty": "★★★★",
    "question": "第三者が公開鍵を入手できるにもかかわらず、安全な通信が可能である理由として最も適切なものはどれか。",
    "options": [
      "秘密鍵を容易に推測できないため",
      "秘密鍵が公開されないため",
      "公開鍵が定期的に削除されるため",
      "通信量が少ないため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0171",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク構成（応用）",
    "difficulty": "★★★★",
    "question": "学校の教室Aと教室Bが異なるLANに属している。この2つのLANを接続する装置として最も適切なものはどれか。",
    "options": [
      "ハブ",
      "ルータ",
      "アクセスポイント",
      "スイッチ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0172",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク構成（応用）",
    "difficulty": "★★★★",
    "question": "スイッチングハブが通常のハブより通信効率に優れている理由として最も適切なものはどれか。",
    "options": [
      "必要な端末のみにデータを転送するため",
      "通信内容を圧縮するため",
      "暗号化を行うため",
      "IPアドレスを管理するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0173",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク構成（応用）",
    "difficulty": "★★★★",
    "question": "学校内で無線LANが利用できない教室がある。原因として最も考えられるものはどれか。",
    "options": [
      "アクセスポイントの電波が届いていない",
      "IPアドレスが存在しない",
      "DNSが停止している",
      "CPUが故障している"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0174",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（応用）",
    "difficulty": "★★★★",
    "question": "学校がクラウドストレージを導入した結果、生徒が自宅からも課題を提出できるようになった。この仕組みの利点として最も適切なものはどれか。",
    "options": [
      "通信量がゼロになる",
      "場所を問わず利用できる",
      "インターネットが不要になる",
      "データが自動で削除される"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0175",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（応用）",
    "difficulty": "★★★★",
    "question": "クラウドサービスに障害が発生した場合のリスクとして最も適切なものはどれか。",
    "options": [
      "通信速度が必ず向上する",
      "サービスを利用できなくなる可能性がある",
      "パスワードが不要になる",
      "IPアドレスが固定される"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0176",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（応用）",
    "difficulty": "★★★★",
    "question": "学校が重要なデータをクラウドと校内サーバの両方に保存している。このような運用の主な目的として最も適切なものはどれか。",
    "options": [
      "データの冗長化による可用性の向上",
      "通信速度の低下",
      "暗号化の省略",
      "URLの短縮"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0177",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（応用）",
    "difficulty": "★★★★",
    "question": "コンビニのPOSシステムの販売データを分析した結果、雨の日には特定の商品が売れやすいことが分かった。この情報の活用方法として最も適切なものはどれか。",
    "options": [
      "雨の日の発注量を増やす",
      "店舗数を減らす",
      "レジを撤去する",
      "通信速度を向上させる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0178",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（応用）",
    "difficulty": "★★★★",
    "question": "交通系ICカードの利用履歴を分析する目的として最も適切なものはどれか。",
    "options": [
      "通信プロトコルを変更する",
      "利用者の移動傾向を把握する",
      "暗号化方式を変更する",
      "IPアドレスを管理する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0179",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（応用）",
    "difficulty": "★★★★",
    "question": "学校が生徒の学習履歴を分析して個別に教材を提示するシステムを導入した。このシステムの目的として最も適切なものはどれか。",
    "options": [
      "学習の最適化",
      "通信速度の向上",
      "ネットワークの削減",
      "メール送信の自動化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0180",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "災害発生時に学校のサーバ室が利用できなくなったがクラウド上のデータは利用できた。この結果から分かるクラウドの利点として最も適切なものはどれか。",
    "options": [
      "通信速度が速い",
      "物理的な被害の影響を受けにくい",
      "暗号化が不要である",
      "IPアドレスが不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0181",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "学校のホームページがアクセス集中によって停止した。この問題を軽減する方法として最も適切なものはどれか。",
    "options": [
      "サーバを複数台用意して負荷分散を行う",
      "URLを変更する",
      "画像を削除する",
      "パスワードを変更する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0182",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある自治体は災害時にも住民向けサービスを停止させないために複数地域にデータセンターを設置している。この目的として最も適切なものはどれか。",
    "options": [
      "機密性の向上",
      "可用性の向上",
      "通信量の削減",
      "暗号化の簡略化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0183",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "500MBのファイルを250Mbpsの回線でダウンロードする。理論上最も近い時間はどれか。ただし1Byte＝8bitとする。",
    "options": [
      "8秒",
      "16秒",
      "24秒",
      "32秒"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0184",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "80Mbpsの回線を8人で均等に利用している。このとき1人あたりの理論上の通信速度として最も適切なものはどれか。",
    "options": [
      "5Mbps",
      "10Mbps",
      "20Mbps",
      "40Mbps"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0185",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "0.5Gbpsは何Mbpsか。",
    "options": [
      "50Mbps",
      "500Mbps",
      "5000Mbps",
      "50000Mbps"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0186",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "通信速度が100Mbpsの回線で800MBのデータを送信するとき理論上最も近い時間はどれか。",
    "options": [
      "32秒",
      "64秒",
      "80秒",
      "128秒"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0187",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "同じ100Mbpsの回線を多数の利用者が同時に利用すると1人あたりの通信速度が低下する理由として最も適切なものはどれか。",
    "options": [
      "IPアドレスが変化するため",
      "回線を共有しているため",
      "DNSが停止するため",
      "暗号化されるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0188",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（練習）",
    "difficulty": "★★",
    "question": "200MBのデータを送信したところ理論値より時間がかかった。原因として最も考えられるものはどれか。",
    "options": [
      "利用者数の増加",
      "URLの変更",
      "パスワードの変更",
      "ブラウザの更新"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0189",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（練習）",
    "difficulty": "★★",
    "question": "URL「https://www.example.jp/index.html」において「https」は何を表しているか。",
    "options": [
      "ドメイン名",
      "ファイル名",
      "プロトコル",
      "IPアドレス"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0190",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（練習）",
    "difficulty": "★★",
    "question": "DNSの役割として最も適切なものはどれか。",
    "options": [
      "通信を暗号化する",
      "ドメイン名をIPアドレスに変換する",
      "電子メールを送信する",
      "データを圧縮する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0191",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（練習）",
    "difficulty": "★★",
    "question": "Webページを閲覧するときブラウザがDNSサーバに問い合わせる内容として最も適切なものはどれか。",
    "options": [
      "Webページの本文",
      "対応するIPアドレス",
      "暗号化方式",
      "通信速度"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0192",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（練習）",
    "difficulty": "★★",
    "question": "「www.school.ac.jp」のうちドメイン名として最も適切なものはどれか。",
    "options": [
      "www",
      "school",
      "school.ac.jp",
      "ac.jp"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0193",
    "unit": "情報通信ネットワーク",
    "field": "DNS・URL（練習）",
    "difficulty": "★★",
    "question": "URLではアクセスできないが、IPアドレスではアクセスできる場合、障害が発生している可能性が高い機器はどれか。",
    "options": [
      "Webサーバ",
      "DNSサーバ",
      "ルータ",
      "アクセスポイント"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0194",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信（練習）",
    "difficulty": "★★",
    "question": "インターネット通信でデータを小さな単位に分割して送信する方式を何というか。",
    "options": [
      "回線交換方式",
      "パケット交換方式",
      "多重通信方式",
      "直列通信方式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0195",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信（練習）",
    "difficulty": "★★",
    "question": "パケット通信の特徴として最も適切なものはどれか。",
    "options": [
      "常に同じ経路を通る",
      "複数の利用者で回線を共有できる",
      "専用回線が必要である",
      "データを分割しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0196",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信（練習）",
    "difficulty": "★★",
    "question": "送信されたパケットが異なる経路を通る可能性がある理由として最も適切なものはどれか。",
    "options": [
      "効率よく通信を行うため",
      "暗号化するため",
      "通信速度を一定にするため",
      "IPアドレスを隠すため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0197",
    "unit": "情報通信ネットワーク",
    "field": "パケット通信（練習）",
    "difficulty": "★★",
    "question": "インターネット上で動画を視聴しているとき一時的に映像が止まる原因として最も適切なものはどれか。",
    "options": [
      "パケットの遅延や欠落",
      "IPアドレスの重複",
      "DNSの更新",
      "メールの受信"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0198",
    "unit": "情報通信ネットワーク",
    "field": "メール（練習）",
    "difficulty": "★★",
    "question": "電子メールで受信者全員のアドレスを互いに見えないようにする機能はどれか。",
    "options": [
      "To",
      "CC",
      "BCC",
      "Reply"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0199",
    "unit": "情報通信ネットワーク",
    "field": "メール（練習）",
    "difficulty": "★★",
    "question": "電子メールアドレス「student@example.com」の「example.com」を何というか。",
    "options": [
      "ユーザー名",
      "ホスト名",
      "ドメイン名",
      "サーバ名"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0200",
    "unit": "情報通信ネットワーク",
    "field": "メール（練習）",
    "difficulty": "★★",
    "question": "メールの添付ファイルを開く前に最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "ファイルサイズ",
      "送信者と内容",
      "文字数",
      "受信日時"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0201",
    "unit": "情報通信ネットワーク",
    "field": "メール（練習）",
    "difficulty": "★★",
    "question": "CC欄の役割として最も適切なものはどれか。",
    "options": [
      "他の受信者に見えない形で送信する",
      "主な受信者以外にも内容を共有する",
      "メールを暗号化する",
      "添付ファイルを圧縮する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0202",
    "unit": "情報通信ネットワーク",
    "field": "メール（練習）",
    "difficulty": "★★",
    "question": "不審なメールを受信した際の対応として最も適切なものはどれか。",
    "options": [
      "添付ファイルをすぐ開く",
      "URLを無条件でクリックする",
      "送信元を確認する",
      "全員に転送する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0203",
    "unit": "情報通信ネットワーク",
    "field": "サーバ（演習）",
    "difficulty": "★★★",
    "question": "WebブラウザでWebページを閲覧する際、HTMLファイルを送信する役割を担うものはどれか。",
    "options": [
      "DNSサーバ",
      "Webサーバ",
      "メールサーバ",
      "ファイルサーバ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0204",
    "unit": "情報通信ネットワーク",
    "field": "サーバ（演習）",
    "difficulty": "★★★",
    "question": "学校の校内ネットワークで生徒のログイン情報を管理しているサーバとして最も適切なものはどれか。",
    "options": [
      "認証サーバ",
      "Webサーバ",
      "DNSサーバ",
      "プリントサーバ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0205",
    "unit": "情報通信ネットワーク",
    "field": "サーバ（演習）",
    "difficulty": "★★★",
    "question": "ドメイン名をIPアドレスに変換する役割を担うサーバはどれか。",
    "options": [
      "メールサーバ",
      "DNSサーバ",
      "Webサーバ",
      "認証サーバ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0206",
    "unit": "情報通信ネットワーク",
    "field": "サーバ（演習）",
    "difficulty": "★★★",
    "question": "学校のプリンタを複数の端末で共有するために利用されるサーバとして最も適切なものはどれか。",
    "options": [
      "DNSサーバ",
      "メールサーバ",
      "プリントサーバ",
      "認証サーバ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0207",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "パスワード認証は認証要素のうちどれに分類されるか。",
    "options": [
      "知識情報",
      "所持情報",
      "生体情報",
      "位置情報"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0208",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "ICカード社員証による認証は認証要素のうちどれに分類されるか。",
    "options": [
      "知識情報",
      "所持情報",
      "生体情報",
      "公開情報"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0209",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "顔認証や虹彩認証が分類される認証方式はどれか。",
    "options": [
      "知識認証",
      "生体認証",
      "所持認証",
      "共有認証"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0210",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "「パスワード＋スマートフォン認証」を利用する利点として最も適切なものはどれか。",
    "options": [
      "通信速度が向上する",
      "セキュリティが向上する",
      "データ量が減る",
      "IPアドレスが固定される"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0211",
    "unit": "情報通信ネットワーク",
    "field": "認証（演習）",
    "difficulty": "★★★",
    "question": "パスワードを複数のサービスで使い回さない方がよい理由として最も適切なものはどれか。",
    "options": [
      "通信量が増えるため",
      "一つ漏えいすると他のサービスにも影響するため",
      "DNSが停止するため",
      "通信速度が低下するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0212",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "情報セキュリティの三要素のうち災害対策としてバックアップを行う目的に最も関係するものはどれか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "匿名性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0213",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "学校の成績データが改ざんされた。このとき損なわれたものとして最も適切なものはどれか。",
    "options": [
      "可用性",
      "完全性",
      "機密性",
      "利便性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0214",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "ランサムウェアの被害として最も典型的なものはどれか。",
    "options": [
      "データが暗号化され利用できなくなる",
      "通信速度が向上する",
      "IPアドレスが変更される",
      "メールが削除される"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0215",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "学校の学習システムにアクセスが集中し利用できなくなった。このとき主に損なわれたものはどれか。",
    "options": [
      "完全性",
      "可用性",
      "機密性",
      "匿名性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0216",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "第三者による盗み見を防ぐために利用される技術はどれか。",
    "options": [
      "暗号化",
      "圧縮",
      "複製",
      "仮想化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0217",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（演習）",
    "difficulty": "★★★",
    "question": "クラウドサービスの利点として最も適切なものはどれか。",
    "options": [
      "インターネット接続が不要になる",
      "場所を問わずデータにアクセスできる",
      "必ず無料で利用できる",
      "データが消失しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0218",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（演習）",
    "difficulty": "★★★",
    "question": "学校でクラウド型学習サービスを利用する際の注意点として最も適切なものはどれか。",
    "options": [
      "保存データの管理",
      "通信の暗号化は不要",
      "パスワードは共有する",
      "バックアップは不要"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0219",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（演習）",
    "difficulty": "★★★",
    "question": "クラウドストレージを利用することで端末が故障した場合でもデータを復元しやすい理由として最も適切なものはどれか。",
    "options": [
      "データがインターネット上のサーバに保存されているため",
      "通信速度が速いため",
      "IPアドレスが固定されるため",
      "DNSが管理しているため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0220",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（演習）",
    "difficulty": "★★★",
    "question": "コンビニのPOSシステムが収集している情報として最も適切なものはどれか。",
    "options": [
      "商品の販売履歴",
      "通信速度",
      "WebサイトのURL",
      "メールアドレス"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0221",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（演習）",
    "difficulty": "★★★",
    "question": "POSシステムのデータ分析によって可能になることとして最も適切なものはどれか。",
    "options": [
      "売れ筋商品の把握",
      "通信速度の向上",
      "ネットワークの暗号化",
      "サーバの停止"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0222",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（演習）",
    "difficulty": "★★★",
    "question": "駅のICカード利用履歴を分析することで期待される効果として最も適切なものはどれか。",
    "options": [
      "混雑状況の把握",
      "IPアドレスの管理",
      "暗号化方式の変更",
      "メール送信の効率化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0223",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（演習）",
    "difficulty": "★★★",
    "question": "IPv4アドレス「192.168.1.15」において1つの数値を表す8ビットのまとまりを何というか。",
    "options": [
      "オクテット",
      "パケット",
      "セグメント",
      "ビット列"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0224",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（演習）",
    "difficulty": "★★★",
    "question": "IPv4アドレスが32ビットで表現される理由として最も適切なものはどれか。",
    "options": [
      "4つの8ビットの組で構成されているため",
      "16進数で表現するため",
      "通信速度を向上させるため",
      "暗号化に必要なため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0225",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（演習）",
    "difficulty": "★★★",
    "question": "学校内の端末には「192.168.x.x」のようなプライベートIPアドレスが割り当てられている。この主な理由として最も適切なものはどれか。",
    "options": [
      "インターネット上で一意に識別するため",
      "校内ネットワーク内で利用するため",
      "通信速度を向上させるため",
      "DNSを不要にするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0226",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（演習）",
    "difficulty": "★★★",
    "question": "家庭内の複数の機器が1つのグローバルIPアドレスを共有してインターネットに接続できる技術として最も適切なものはどれか。",
    "options": [
      "URL変換",
      "NAT",
      "暗号化",
      "DNS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0227",
    "unit": "情報通信ネットワーク",
    "field": "通信経路（演習）",
    "difficulty": "★★★",
    "question": "パケットが送信元から宛先まで到達する途中で経由する機器として最も適切なものはどれか。",
    "options": [
      "ディスプレイ",
      "ルータ",
      "キーボード",
      "スピーカー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0228",
    "unit": "情報通信ネットワーク",
    "field": "通信経路（演習）",
    "difficulty": "★★★",
    "question": "ルータの主な役割として最も適切なものはどれか。",
    "options": [
      "データを印刷する",
      "異なるネットワーク同士を接続する",
      "Webページを作成する",
      "メールを暗号化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0229",
    "unit": "情報通信ネットワーク",
    "field": "通信経路（演習）",
    "difficulty": "★★★",
    "question": "通信中に一部のルータが故障した場合でも通信が継続できることがある理由として最も適切なものはどれか。",
    "options": [
      "すべてのデータを再送するため",
      "パケットごとに経路を変更できるため",
      "通信速度が速いため",
      "DNSが代行するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0230",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル（演習）",
    "difficulty": "★★★",
    "question": "Webページの閲覧で利用されるHTTPの役割として最も適切なものはどれか。",
    "options": [
      "メールを送信する",
      "Webサーバとデータをやり取りする",
      "IPアドレスを管理する",
      "ファイルを暗号化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0231",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル（演習）",
    "difficulty": "★★★",
    "question": "電子メールの送信に利用される代表的なプロトコルはどれか。",
    "options": [
      "FTP",
      "SMTP",
      "DNS",
      "HTTPS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0232",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル（演習）",
    "difficulty": "★★★",
    "question": "ファイル転送のために用いられる代表的なプロトコルはどれか。",
    "options": [
      "FTP",
      "POP",
      "HTTP",
      "DNS"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0233",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル（演習）",
    "difficulty": "★★★",
    "question": "HTTPSがHTTPより安全とされる理由として最も適切なものはどれか。",
    "options": [
      "通信内容が圧縮されるため",
      "通信内容が暗号化されるため",
      "通信速度が速いため",
      "URLが短くなるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0234",
    "unit": "情報通信ネットワーク",
    "field": "TCP・UDP（演習）",
    "difficulty": "★★★",
    "question": "TCPの特徴として最も適切なものはどれか。",
    "options": [
      "データの到達確認を行わない",
      "高速性を優先する",
      "データの順序や欠落を確認する",
      "映像配信専用である"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0235",
    "unit": "情報通信ネットワーク",
    "field": "TCP・UDP（演習）",
    "difficulty": "★★★",
    "question": "オンラインゲームやライブ配信でUDPが利用されることが多い理由として最も適切なものはどれか。",
    "options": [
      "データ量を削減できるため",
      "リアルタイム性を優先するため",
      "暗号化機能が強いため",
      "DNSを利用しないため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0236",
    "unit": "情報通信ネットワーク",
    "field": "TCP・UDP（演習）",
    "difficulty": "★★★",
    "question": "TCP通信で受信側が送信側に返す、正常受信を知らせる信号を何というか。",
    "options": [
      "ACK",
      "URL",
      "NAT",
      "SSL"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0237",
    "unit": "情報通信ネットワーク",
    "field": "LAN（演習）",
    "difficulty": "★★★",
    "question": "学校のコンピュータ室ですべての端末を中央の機器に接続する構成を何というか。",
    "options": [
      "リング型",
      "バス型",
      "スター型",
      "メッシュ型"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0238",
    "unit": "情報通信ネットワーク",
    "field": "LAN（演習）",
    "difficulty": "★★★",
    "question": "無線LANにおいて端末をネットワークへ接続するための機器として最も適切なものはどれか。",
    "options": [
      "アクセスポイント",
      "ルータ",
      "DNSサーバ",
      "プリンタ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0239",
    "unit": "情報通信ネットワーク",
    "field": "LAN（演習）",
    "difficulty": "★★★",
    "question": "無線LANを利用する際に設定するSSIDの役割として最も適切なものはどれか。",
    "options": [
      "通信速度を指定する",
      "ネットワークの識別名を表す",
      "暗号鍵を管理する",
      "IPアドレスを決定する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0240",
    "unit": "情報通信ネットワーク",
    "field": "LAN（演習）",
    "difficulty": "★★★",
    "question": "無線LANの暗号化方式を設定する主な目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "第三者による盗聴を防ぐため",
      "接続台数を増やすため",
      "DNSを不要にするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0241",
    "unit": "情報通信ネットワーク",
    "field": "Web技術（演習）",
    "difficulty": "★★★",
    "question": "ブラウザにURLを入力してからWebページが表示されるまでの流れとして最も適切なものはどれか。",
    "options": [
      "HTTP通信→DNS問い合わせ→HTML受信",
      "DNS問い合わせ→HTTP通信→HTML受信",
      "HTML受信→HTTP通信→DNS問い合わせ",
      "DNS問い合わせ→HTML受信→HTTP通信"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0242",
    "unit": "情報通信ネットワーク",
    "field": "Web技術（演習）",
    "difficulty": "★★★",
    "question": "ブラウザがWebサーバから受信して画面表示の基礎となるデータはどれか。",
    "options": [
      "CSV",
      "HTML",
      "MP3",
      "PDF"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0243",
    "unit": "情報通信ネットワーク",
    "field": "Web技術（演習）",
    "difficulty": "★★★",
    "question": "Webページ中の画像やスタイルシートが別々に読み込まれる理由として最も適切なものはどれか。",
    "options": [
      "パケット交換方式を採用しているため",
      "HTMLから追加の通信要求が送られるため",
      "DNSが自動生成するため",
      "暗号化が必要なため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0244",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "フィッシング詐欺の対策として最も適切なものはどれか。",
    "options": [
      "メールのURLをすぐに開く",
      "公式サイトかどうか確認する",
      "パスワードを使い回す",
      "暗号化を解除する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0245",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "辞書に載っている単語を順番に試してパスワードを解析しようとする攻撃を何というか。",
    "options": [
      "DoS攻撃",
      "辞書攻撃",
      "総当たり攻撃",
      "なりすまし"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0246",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "大量のデータを送り付けてサーバを停止させる攻撃として最も適切なものはどれか。",
    "options": [
      "SQLインジェクション",
      "DoS攻撃",
      "フィッシング",
      "辞書攻撃"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0247",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（演習）",
    "difficulty": "★★★",
    "question": "OSやソフトウェアを最新の状態に更新する目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "セキュリティ上の弱点を修正するため",
      "画面を見やすくするため",
      "データ量を削減するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0248",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（演習）",
    "difficulty": "★★★",
    "question": "クラウドサービスに保存したデータを複数人で同時編集できる主な理由として最も適切なものはどれか。",
    "options": [
      "端末ごとに別のデータを保存しているため",
      "インターネット上の共通サーバで管理しているため",
      "通信速度が一定であるため",
      "全員が同じIPアドレスを持つため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0249",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（演習）",
    "difficulty": "★★★",
    "question": "学校でクラウドサービスを利用する際、強力なパスワードを設定する目的として最も適切なものはどれか。",
    "options": [
      "通信量を削減するため",
      "不正アクセスを防ぐため",
      "DNSを高速化するため",
      "画面表示を改善するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0250",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（演習）",
    "difficulty": "★★★",
    "question": "コンビニのPOSシステムが商品の販売時刻を記録する目的として最も適切なものはどれか。",
    "options": [
      "売れやすい時間帯を分析するため",
      "商品の価格を変更するため",
      "通信速度を測定するため",
      "レジを削減するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0251",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（演習）",
    "difficulty": "★★★",
    "question": "交通系ICカードの利用履歴から分析できる情報として最も適切なものはどれか。",
    "options": [
      "利用者の移動傾向",
      "通信プロトコル",
      "暗号化方式",
      "サーバの構成"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0252",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（演習）",
    "difficulty": "★★★",
    "question": "学校が学習履歴データを分析することで期待される効果として最も適切なものはどれか。",
    "options": [
      "生徒ごとの理解状況の把握",
      "ネットワーク機器の削減",
      "DNSサーバの管理",
      "メールの暗号化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0253",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "ある生徒は自宅では学校の学習サイトを閲覧できるが学校内では閲覧できなかった。最も考えられる原因はどれか。",
    "options": [
      "学校のネットワーク設定の問題",
      "生徒のパスワードが漏えいしたため",
      "URLが変更されたため",
      "家庭の回線速度が遅いため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0254",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "学校のホームページが表示されないが他のサイトは正常に表示される。このとき最も考えられる原因はどれか。",
    "options": [
      "利用者の端末が故障した",
      "学校のWebサーバに障害が発生している",
      "インターネットそのものが停止している",
      "DNSサーバが存在しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0255",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "オンライン授業中に映像は見えるが音声だけが途切れることがある。この現象の原因として最も適切なものはどれか。",
    "options": [
      "パケットの遅延や欠落",
      "URLの入力ミス",
      "DNSサーバの更新",
      "IPアドレスの変更"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0256",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "校内ネットワークの通信が突然遅くなったため調査したところ大量の動画配信が行われていた。この現象の原因として最も適切なものはどれか。",
    "options": [
      "回線帯域が共有されているため",
      "IPアドレスが重複したため",
      "DNSサーバが故障したため",
      "暗号化方式が変更されたため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0257",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（応用）",
    "difficulty": "★★★★",
    "question": "ある学校では1Gbpsの回線を導入している。授業中に250人の生徒が同時に動画教材を視聴しているとき1人あたりに割り当てられる理論上の通信速度として最も適切なものはどれか。",
    "options": [
      "2Mbps",
      "4Mbps",
      "8Mbps",
      "16Mbps"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0258",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（応用）",
    "difficulty": "★★★★",
    "question": "900MBの動画ファイルを150Mbpsの回線でダウンロードする。理論上最も近い時間はどれか。ただし1Byte＝8bitとする。",
    "options": [
      "24秒",
      "36秒",
      "48秒",
      "72秒"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0259",
    "unit": "情報通信ネットワーク",
    "field": "通信速度（応用）",
    "difficulty": "★★★★",
    "question": "校内の無線LANで一部の教室のみ通信速度が著しく低下している。最も考えられる原因として適切なものはどれか。",
    "options": [
      "その教室のアクセスポイントに多数の端末が集中している",
      "教室のコンピュータのCPU性能が高い",
      "DNSサーバが複数存在する",
      "利用しているブラウザが異なる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0260",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク設計（応用）",
    "difficulty": "★★★★",
    "question": "ある企業は社内LANとインターネットの間に機器を設置して不正な通信を監視・制御している。この機器として最も適切なものはどれか。",
    "options": [
      "DNSサーバ",
      "ファイアウォール",
      "アクセスポイント",
      "プリントサーバ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0261",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク設計（応用）",
    "difficulty": "★★★★",
    "question": "学校で無線LANのアクセスポイントを1台追加したところ一部の端末が意図しないアクセスポイントへ接続するようになった。この問題を軽減する設定として最も適切なものはどれか。",
    "options": [
      "SSIDと接続範囲を適切に設定する",
      "IPアドレスを固定する",
      "URLを変更する",
      "DNSを停止する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0262",
    "unit": "情報通信ネットワーク",
    "field": "通信方式（応用）",
    "difficulty": "★★★★",
    "question": "回線交換方式とパケット交換方式を比較したときパケット交換方式の特徴として最も適切なものはどれか。",
    "options": [
      "通信中は専用回線を占有する",
      "データを分割して効率よく回線を共有できる",
      "常に一定の速度が保証される",
      "音声通信には利用できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0263",
    "unit": "情報通信ネットワーク",
    "field": "TCP・UDP（応用）",
    "difficulty": "★★★★",
    "question": "オンライン会議システムでは多少のデータ欠落よりも遅延の少なさが重視される場合がある。このような通信でUDPが利用される主な理由として最も適切なものはどれか。",
    "options": [
      "再送制御を行わないため",
      "暗号化が不要になるため",
      "通信速度が一定になるため",
      "データ容量が小さくなるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0264",
    "unit": "情報通信ネットワーク",
    "field": "TCP・UDP（応用）",
    "difficulty": "★★★★",
    "question": "TCP通信ではデータの到着確認や再送処理が行われる。この仕組みによって向上する情報セキュリティの三要素として最も適切なものはどれか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "匿名性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0265",
    "unit": "情報通信ネットワーク",
    "field": "DNS（応用）",
    "difficulty": "★★★★",
    "question": "あるWebサイトのサーバを別の場所へ移転したところ一部の利用者には新しいページが表示されず、古いページが表示された。この原因として最も適切なものはどれか。",
    "options": [
      "DNSの情報が利用者側に残っていた",
      "IPアドレスが暗号化された",
      "通信速度が低下した",
      "ルータが故障した"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0266",
    "unit": "情報通信ネットワーク",
    "field": "DNS（応用）",
    "difficulty": "★★★★",
    "question": "企業のWebサイトへアクセスするときブラウザが最初にDNSサーバへ問い合わせる内容として最も適切なものはどれか。",
    "options": [
      "HTMLファイル",
      "サーバのIPアドレス",
      "通信速度",
      "SSL証明書"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0267",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（応用）",
    "difficulty": "★★★★",
    "question": "学校のコンピュータ室には40台のPCがあるがグローバルIPアドレスは1つしか割り当てられていない。この状態で全端末がインターネットを利用できる理由として最も適切なものはどれか。",
    "options": [
      "DNSが複数のIPアドレスを生成しているため",
      "NATによって変換が行われているため",
      "全端末が同じMACアドレスを持つため",
      "HTTPがアドレスを管理しているため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0268",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス（応用）",
    "difficulty": "★★★★",
    "question": "IPv4アドレスの枯渇問題への対策として開発されたIPv6の特徴として最も適切なものはどれか。",
    "options": [
      "16ビットで構成される",
      "32ビットで構成される",
      "128ビットで構成される",
      "256ビットで構成される"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0269",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（応用）",
    "difficulty": "★★★★",
    "question": "AさんがBさんに秘密のメッセージを送るため公開鍵暗号方式を利用した。このとき、メッセージの暗号化に用いる鍵として最も適切なものはどれか。",
    "options": [
      "Aさんの秘密鍵",
      "Aさんの公開鍵",
      "Bさんの秘密鍵",
      "Bさんの公開鍵"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0270",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（応用）",
    "difficulty": "★★★★",
    "question": "電子署名の役割として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させる",
      "送信者本人であることを証明する",
      "IPアドレスを隠す",
      "DNSを管理する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0271",
    "unit": "情報通信ネットワーク",
    "field": "暗号化（応用）",
    "difficulty": "★★★★",
    "question": "公開鍵暗号方式において受信者だけが復号できる理由として最も適切なものはどれか。",
    "options": [
      "秘密鍵が受信者のみ管理している情報だから",
      "公開鍵が秘密にされているから",
      "通信速度が速いから",
      "DNSが復号しているから"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0272",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（応用）",
    "difficulty": "★★★★",
    "question": "学校のサーバが外部から大量のアクセスを受け正規の利用者が利用できなくなった。この攻撃として最も適切なものはどれか。",
    "options": [
      "フィッシング攻撃",
      "DoS攻撃",
      "SQLインジェクション",
      "辞書攻撃"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0273",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（応用）",
    "difficulty": "★★★★",
    "question": "Webサイトの入力フォームに不正なSQL文を送信し、データベースを操作しようとする攻撃はどれか。",
    "options": [
      "クロスサイトスクリプティング",
      "辞書攻撃",
      "SQLインジェクション",
      "ランサムウェア"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0274",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ（応用）",
    "difficulty": "★★★★",
    "question": "パスワードを総当たりで試すブルートフォース攻撃への対策として最も有効なものはどれか。",
    "options": [
      "短いパスワードを設定する",
      "多要素認証を導入する",
      "同じパスワードを使い回す",
      "URLを変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0275",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（応用）",
    "difficulty": "★★★★",
    "question": "学校がクラウドサービスへ移行した結果、災害時でもデータの利用が可能となった。この利点として最も関係が深い情報セキュリティの要素はどれか。",
    "options": [
      "完全性",
      "可用性",
      "機密性",
      "匿名性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0276",
    "unit": "情報通信ネットワーク",
    "field": "クラウド（応用）",
    "difficulty": "★★★★",
    "question": "クラウドサービス利用時に事業者側の障害によって利用できなくなる可能性がある。この問題を軽減する方法として最も適切なものはどれか。",
    "options": [
      "バックアップを複数の場所に保存する",
      "パスワードを短くする",
      "DNSを変更する",
      "URLを削除する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0277",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（応用）",
    "difficulty": "★★★★",
    "question": "コンビニがPOSデータを分析した結果、平日朝に飲料がよく売れることが分かった。この情報の活用方法として最も適切なものはどれか。",
    "options": [
      "朝の在庫を増やす",
      "レジの台数を減らす",
      "通信速度を下げる",
      "Webサイトを閉鎖する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0278",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（応用）",
    "difficulty": "★★★★",
    "question": "鉄道会社がICカードの利用履歴を分析する目的として最も適切なものはどれか。",
    "options": [
      "通信プロトコルを変更する",
      "混雑状況や利用傾向を把握する",
      "IPアドレスを管理する",
      "暗号化方式を変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0279",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（応用）",
    "difficulty": "★★★★",
    "question": "オンラインショップで「この商品を購入した人はこちらの商品も購入しています」と表示される仕組みとして最も適切なものはどれか。",
    "options": [
      "推薦システム",
      "暗号化システム",
      "DNSシステム",
      "NATシステム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0280",
    "unit": "情報通信ネットワーク",
    "field": "情報システム（応用）",
    "difficulty": "★★★★",
    "question": "ある自治体では災害発生時に交通情報や避難情報をリアルタイムで分析して住民へ配信している。このようなシステムに特に求められる性質として最も適切なものはどれか。",
    "options": [
      "即時性",
      "匿名性",
      "独立性",
      "排他性"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0281",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク運用（応用）",
    "difficulty": "★★★★",
    "question": "学校の校内ネットワークで一部の生徒だけがインターネットへ接続できない状況が発生した。原因として最も考えられるものはどれか。",
    "options": [
      "その生徒の端末設定に問題がある",
      "インターネット全体が停止している",
      "学校のWebサーバが故障している",
      "DNSが世界中で停止している"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0282",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク運用（応用）",
    "difficulty": "★★★★",
    "question": "学校のホームページがアクセス集中によって停止した。この問題への対策として最も適切なものはどれか。",
    "options": [
      "サーバを複数台用意して負荷分散を行う",
      "URLを変更する",
      "DNSを削除する",
      "通信の暗号化をやめる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0283",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク運用（応用）",
    "difficulty": "★★★★",
    "question": "ある企業は世界各地の利用者へ高速にWebページを配信するため、複数の地域にサーバを配置している。この目的として最も適切なものはどれか。",
    "options": [
      "通信の負荷を分散するため",
      "IPアドレスを減らすため",
      "暗号化を不要にするため",
      "DNSを廃止するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0284",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "オンライン授業中映像は問題なく視聴できるが、音声だけが頻繁に途切れる現象が発生した。原因として最も考えられるものはどれか。",
    "options": [
      "パケットの遅延や欠落",
      "URLの入力ミス",
      "IPアドレスの不足",
      "DNSの停止"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0285",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "学校のネットワーク管理者が生徒の利用履歴や通信量を分析して設備増強を計画している。この分析の目的として最も適切なものはどれか。",
    "options": [
      "ネットワーク資源を効率よく運用するため",
      "暗号化を不要にするため",
      "ドメイン名を短縮するため",
      "メールの送受信を禁止するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0286",
    "unit": "情報通信ネットワーク",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "災害対策として自治体が異なる地域に複数のデータセンターを設置している。この主な目的として最も適切なものはどれか。",
    "options": [
      "情報の完全性を高めるため",
      "システム全体の可用性を高めるため",
      "通信速度を一定にするため",
      "IPアドレスを節約するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0287",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（通信速度・計算）",
    "difficulty": "★★★★★",
    "question": "ある学校では1Gbpsの回線を利用している。生徒200人が同時に20Mbpsの動画配信を視聴した場合、必要な帯域として最も適切なものはどれか。",
    "options": [
      "0.4Gbps",
      "2Gbps",
      "4Gbps",
      "20Gbps"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0288",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（通信速度・計算）",
    "difficulty": "★★★★★",
    "question": "600MBの動画ファイルを100Mbpsの回線でダウンロードする。理論上必要な時間として最も適切なものはどれか。ただし1Byte＝8bitとする。",
    "options": [
      "24秒",
      "48秒",
      "60秒",
      "96秒"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0289",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（通信速度・計算）",
    "difficulty": "★★★★★",
    "question": "ある企業では10Gbpsの回線を導入したが、実際の通信速度は利用者数によって大きく変動した。この現象を説明する理由として最も適切なものはどれか。",
    "options": [
      "IPアドレスが毎回変わるため",
      "回線帯域を複数の利用者で共有しているため",
      "DNSサーバが処理を行っているため",
      "暗号化によって速度が固定されるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0290",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（プロトコル）",
    "difficulty": "★★★★★",
    "question": "利用者がブラウザにURLを入力してからWebページが表示されるまでの流れとして最も適切なものはどれか。",
    "options": [
      "HTTP通信→DNS問い合わせ→HTML受信",
      "DNS問い合わせ→HTTP通信→HTML受信",
      "DNS問い合わせ→HTML受信→HTTP通信",
      "HTML受信→DNS問い合わせ→HTTP通信"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0291",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（プロトコル）",
    "difficulty": "★★★★★",
    "question": "動画配信サービスでは多少のデータ欠落が発生しても再送を行わず、遅延を抑えることが重視される。この通信方式として最も適切なものはどれか。",
    "options": [
      "HTTP",
      "TCP",
      "UDP",
      "SMTP"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0292",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（プロトコル）",
    "difficulty": "★★★★★",
    "question": "TCPとUDPの比較として最も適切なものはどれか。",
    "options": [
      "TCPは到達確認を行わず、UDPは行う",
      "TCPは信頼性を重視し、UDPはリアルタイム性を重視する",
      "TCPは動画配信専用であり、UDPはWeb閲覧専用である",
      "TCPではIPアドレスを用いない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0293",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（IPアドレス）",
    "difficulty": "★★★★★",
    "question": "家庭内の複数の端末が1つのグローバルIPアドレスを共有してインターネットへ接続できる理由として最も適切なものはどれか。",
    "options": [
      "HTTPがIPアドレスを変換しているため",
      "NATがプライベートIPアドレスを変換しているため",
      "DNSが複数のIPアドレスを生成しているため",
      "SSLが暗号化しているため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0294",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（IPアドレス）",
    "difficulty": "★★★★★",
    "question": "IPv4のアドレス空間の枯渇問題への対応として導入されたIPv6の特徴として最も適切なものはどれか。",
    "options": [
      "32ビットで構成される",
      "64ビットで構成される",
      "128ビットで構成される",
      "256ビットで構成される"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0295",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（DNS）",
    "difficulty": "★★★★★",
    "question": "ある利用者は、IPアドレスを直接入力するとWebページを閲覧できるが、URLを入力すると閲覧できなかった。このとき障害が発生している可能性が最も高い機器はどれか。",
    "options": [
      "Webサーバ",
      "DNSサーバ",
      "メールサーバ",
      "プロキシサーバ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0296",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（DNS）",
    "difficulty": "★★★★★",
    "question": "企業がサーバの移転を行った後、一部の利用者のみ古いWebページが表示された。最も考えられる原因として適切なものはどれか。",
    "options": [
      "DNS情報の更新が反映されていないため",
      "HTTPのバージョンが異なるため",
      "IPアドレスが不足しているため",
      "暗号化方式が変わったため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0297",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（暗号化）",
    "difficulty": "★★★★★",
    "question": "AさんがBさんに秘密のメッセージを送信するため公開鍵暗号方式を利用した。メッセージを暗号化する際に用いる鍵として最も適切なものはどれか。",
    "options": [
      "Aさんの秘密鍵",
      "Aさんの公開鍵",
      "Bさんの公開鍵",
      "Bさんの秘密鍵"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0298",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（暗号化）",
    "difficulty": "★★★★★",
    "question": "電子署名を利用する目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させる",
      "送信者の正当性を確認する",
      "IPアドレスを秘匿する",
      "DNSサーバを認証する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0299",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（暗号化）",
    "difficulty": "★★★★★",
    "question": "公開鍵暗号方式において第三者が公開鍵を知っていても安全な通信が成立する理由として最も適切なものはどれか。",
    "options": [
      "秘密鍵を公開しないため",
      "公開鍵を暗号化しているため",
      "通信経路が固定されているため",
      "DNSが保護しているため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0300",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（セキュリティ）",
    "difficulty": "★★★★★",
    "question": "Webサイトの入力フォームに不正なSQL文を入力し、データベースを不正操作しようとする攻撃を何というか。",
    "options": [
      "クロスサイトスクリプティング",
      "SQLインジェクション",
      "DoS攻撃",
      "辞書攻撃"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0301",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（セキュリティ）",
    "difficulty": "★★★★★",
    "question": "大量の通信を送り付けてサーバの処理能力を超えさせ、サービスを停止させる攻撃を何というか。",
    "options": [
      "フィッシング",
      "DoS攻撃",
      "ブルートフォース攻撃",
      "ゼロデイ攻撃"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0302",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（セキュリティ）",
    "difficulty": "★★★★★",
    "question": "フィッシング詐欺への対策として最も適切なものはどれか。",
    "options": [
      "メール内のリンクをすぐに開く",
      "公式サイトのURLを確認する",
      "パスワードを単純化する",
      "同じパスワードを使い回す"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0303",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（情報セキュリティ三要素）",
    "difficulty": "★★★★★",
    "question": "災害時にもシステムを継続して利用できるよう、複数の地域にサーバを分散配置した。この対策によって特に向上する要素として最も適切なものはどれか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "真正性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0304",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（情報セキュリティ三要素）",
    "difficulty": "★★★★★",
    "question": "成績データが第三者によって書き換えられた。このとき損なわれた情報セキュリティの要素として最も適切なものはどれか。",
    "options": [
      "完全性",
      "機密性",
      "可用性",
      "匿名性"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0305",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（LAN）",
    "difficulty": "★★★★★",
    "question": "学校内のネットワークで中央のスイッチングハブを中心に各端末を接続する構成を採用している。この接続形態を何というか。",
    "options": [
      "バス型",
      "リング型",
      "スター型",
      "メッシュ型"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0306",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（LAN）",
    "difficulty": "★★★★★",
    "question": "スイッチングハブが通常のハブより通信効率に優れる理由として最も適切なものはどれか。",
    "options": [
      "必要な宛先のみにデータを転送するため",
      "通信を暗号化するため",
      "IPアドレスを割り当てるため",
      "DNS機能を持つため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0307",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（クラウド）",
    "difficulty": "★★★★★",
    "question": "学校がクラウド型学習システムを導入したところ生徒は自宅や学校など場所を問わず学習できるようになった。この利点として最も適切なものはどれか。",
    "options": [
      "インターネット接続が不要になる",
      "場所に依存せず利用できる",
      "通信速度が一定になる",
      "データ量が減少する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0308",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（クラウド）",
    "difficulty": "★★★★★",
    "question": "クラウドサービスに依存することのリスクとして最も適切なものはどれか。",
    "options": [
      "サービス事業者の障害によって利用できなくなる可能性がある",
      "IPアドレスが不要になる",
      "通信が暗号化されなくなる",
      "ネットワーク機器が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0309",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（情報システム）",
    "difficulty": "★★★★★",
    "question": "コンビニがPOSシステムの販売履歴を分析した結果、特定の曜日や天候によって売れ筋商品が変化することが分かった。この分析結果の活用方法として最も適切なものはどれか。",
    "options": [
      "需要予測による発注の最適化",
      "レジ台数の削減",
      "通信速度の向上",
      "サーバの暗号化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0310",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（情報システム）",
    "difficulty": "★★★★★",
    "question": "交通系ICカードの利用履歴を分析して列車の運行計画を改善する取り組みはどのような目的で行われているか。",
    "options": [
      "通信プロトコルを改善するため",
      "利用者の行動傾向を把握するため",
      "暗号化方式を変更するため",
      "DNSサーバを更新するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0311",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（総合問題）",
    "difficulty": "★★★★★",
    "question": "ある学校では校内サーバとクラウドの両方に学習データを保存している。この運用の主な目的として最も適切なものはどれか。",
    "options": [
      "通信速度を上げるため",
      "データの冗長化によって障害に備えるため",
      "IPアドレスを節約するため",
      "URLを短縮するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0312",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（総合問題）",
    "difficulty": "★★★★★",
    "question": "大規模災害時にも自治体の情報システムを停止させないため複数地域のデータセンター間で同じデータを管理している。この対策の目的として最も適切なものはどれか。",
    "options": [
      "可用性の向上",
      "通信速度の向上",
      "暗号化の強化",
      "IPアドレスの節約"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0313",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（総合問題）",
    "difficulty": "★★★★★",
    "question": "動画配信サービスでは世界各地にサーバを配置し、利用者に最も近いサーバからデータを配信している。この主な目的として最も適切なものはどれか。",
    "options": [
      "DNSサーバの数を減らすため",
      "通信遅延を小さくするため",
      "暗号化を簡略化するため",
      "IPアドレスを統一するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0314",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "学校のネットワーク管理者が特定の時間帯にだけ通信速度が低下していることを確認した。ログを分析すると多数の端末が同時に高画質動画を視聴していたことが分かった。この現象の原因として最も適切なものはどれか。",
    "options": [
      "DNSサーバの故障",
      "共有回線の帯域不足",
      "IPアドレスの枯渇",
      "暗号鍵の漏えい"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0315",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある生徒は家庭では問題なくアクセスできる学習サイトに学校からだけアクセスできなかった。学校内の他の生徒も同じ状況であったことから原因として最も考えられるものはどれか。",
    "options": [
      "学校側のネットワーク機器の障害",
      "生徒個人の端末設定ミス",
      "家庭の回線速度不足",
      "DNSそのものの廃止"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0316",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "情報セキュリティ対策として多要素認証を導入した場合、パスワード漏えい時のリスクが低減する理由として最も適切なものはどれか。",
    "options": [
      "通信速度が向上するため",
      "異なる種類の認証情報を組み合わせているため",
      "DNSが認証を代行するため",
      "公開鍵暗号が不要になるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0317",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス",
    "difficulty": "★",
    "question": "インターネット上で機器を識別するために割り当てられる番号を何というか。",
    "options": [
      "MACアドレス",
      "URL",
      "IPアドレス",
      "ドメイン名"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0318",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★",
    "question": "データを小さな単位に分割して送受信する通信方式を何というか。",
    "options": [
      "回線交換方式",
      "パケット交換方式",
      "単方向通信方式",
      "アナログ通信方式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0319",
    "unit": "情報通信ネットワーク",
    "field": "LAN",
    "difficulty": "★",
    "question": "学校や家庭などの限られた範囲で構築されるネットワークを何というか。",
    "options": [
      "WAN",
      "VPN",
      "LAN",
      "MAN"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0320",
    "unit": "情報通信ネットワーク",
    "field": "無線通信",
    "difficulty": "★",
    "question": "スマートフォンやタブレットを無線でインターネットに接続する技術として最も一般的なものはどれか。",
    "options": [
      "Bluetooth",
      "Wi-Fi",
      "HDMI",
      "USB"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0321",
    "unit": "情報通信ネットワーク",
    "field": "プロトコル",
    "difficulty": "★",
    "question": "Webページを閲覧するときに利用される代表的な通信プロトコルはどれか。",
    "options": [
      "SMTP",
      "HTTP",
      "FTP",
      "DNS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0322",
    "unit": "情報通信ネットワーク",
    "field": "メール",
    "difficulty": "★",
    "question": "電子メールを送信する際に利用されるプロトコルはどれか。",
    "options": [
      "SMTP",
      "POP3",
      "HTTP",
      "TCP"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0323",
    "unit": "情報通信ネットワーク",
    "field": "ドメイン名",
    "difficulty": "★",
    "question": "「www.example.com」の「example.com」に当たる部分を何というか。",
    "options": [
      "IPアドレス",
      "SSID",
      "ドメイン名",
      "ポート番号"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0324",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク機器",
    "difficulty": "★",
    "question": "家庭や学校で異なるネットワーク同士を接続する機器を何というか。",
    "options": [
      "ルータ",
      "ハブ",
      "ディスプレイ",
      "アクセスポイント"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0325",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "通信内容を第三者に読まれないようにする技術を何というか。",
    "options": [
      "圧縮",
      "暗号化",
      "認証",
      "復号"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0326",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★",
    "question": "情報セキュリティの三要素のうち必要な人が必要なときに情報を利用できる性質を何というか。",
    "options": [
      "完全性",
      "機密性",
      "可用性",
      "真正性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0327",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★★",
    "question": "100Mbpsの回線で1秒間に送信できるデータ量として最も近いものはどれか。",
    "options": [
      "約12.5MB",
      "約25MB",
      "約50MB",
      "約100MB"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0328",
    "unit": "情報通信ネットワーク",
    "field": "DNS",
    "difficulty": "★★",
    "question": "DNSサーバの役割として最も適切なものはどれか。",
    "options": [
      "Webページを保存する",
      "ドメイン名をIPアドレスに変換する",
      "電子メールを送信する",
      "通信を暗号化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0329",
    "unit": "情報通信ネットワーク",
    "field": "アドレス変換",
    "difficulty": "★★",
    "question": "家庭内の複数の端末が1つのグローバルIPアドレスを共有できる仕組みを何というか。",
    "options": [
      "NAT",
      "DNS",
      "URL",
      "HTML"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0330",
    "unit": "情報通信ネットワーク",
    "field": "無線LAN",
    "difficulty": "★★",
    "question": "同じ無線LAN内で通信速度が低下する原因として最も適切なものはどれか。",
    "options": [
      "利用者が増えた",
      "画面の明るさを下げた",
      "IPアドレスが長い",
      "OSを更新した"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0331",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "推測されやすいパスワードの特徴として最も適切なものはどれか。",
    "options": [
      "大文字と小文字を混在させている",
      "生年月日を利用している",
      "記号を含んでいる",
      "長い文字列である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0332",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★",
    "question": "クラウドサービスを利用する利点として最も適切なものはどれか。",
    "options": [
      "インターネットが不要になる",
      "場所を問わず利用できる",
      "通信速度が一定になる",
      "端末が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0333",
    "unit": "情報通信ネットワーク",
    "field": "通信経路",
    "difficulty": "★★",
    "question": "学校のパソコンからWebページを閲覧するとき最初に問い合わせが行われる可能性が高いサーバはどれか。",
    "options": [
      "DNSサーバ",
      "メールサーバ",
      "ファイルサーバ",
      "プリントサーバ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0334",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★",
    "question": "コンビニで商品が売れた時点で在庫情報を更新するシステムを何というか。",
    "options": [
      "POSシステム",
      "OS",
      "DBMS",
      "DNS"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0335",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "パスワードに加えてスマートフォン認証などを利用する認証方式を何というか。",
    "options": [
      "公開鍵認証",
      "多要素認証",
      "電子署名",
      "生体認証"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0336",
    "unit": "情報通信ネットワーク",
    "field": "LAN構成",
    "difficulty": "★★",
    "question": "ネットワーク障害時に原因を特定しやすい接続形態はどれか。",
    "options": [
      "スター型",
      "リング型",
      "バス型",
      "ツリー型"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0337",
    "unit": "情報通信ネットワーク",
    "field": "ルーティング",
    "difficulty": "★★★",
    "question": "パケット交換方式において各パケットが異なる経路を通る可能性がある理由として最も適切なものはどれか。",
    "options": [
      "送信者が毎回経路を指定するため",
      "通信状況に応じて最適な経路が選ばれるため",
      "IPアドレスが毎回変わるため",
      "DNSが経路を管理しているため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0338",
    "unit": "情報通信ネットワーク",
    "field": "TCP・UDP",
    "difficulty": "★★★",
    "question": "オンラインゲームでUDPが利用される理由として最も適切なものはどれか。",
    "options": [
      "暗号化性能が高い",
      "通信の遅延を小さくできる",
      "必ずデータが届く",
      "データ容量が減る"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0339",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★",
    "question": "電子署名を利用することで確認できる内容として適切でないものはどれか。",
    "options": [
      "送信者本人であること",
      "改ざんの有無",
      "データの真正性",
      "通信速度の向上"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0340",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク機器",
    "difficulty": "★★★",
    "question": "スイッチングハブが通常のハブより効率的な理由として最も適切なものはどれか。",
    "options": [
      "通信内容を暗号化するため",
      "必要な宛先だけに転送するため",
      "DNS機能を持つため",
      "IPアドレスを割り当てるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0341",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★★",
    "question": "交通系ICカードの履歴データを分析して列車の本数を調整する目的として最も適切なものはどれか。",
    "options": [
      "通信量を削減するため",
      "利用者の行動を分析するため",
      "IPアドレスを管理するため",
      "暗号鍵を変更するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0342",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★★",
    "question": "辞書攻撃への対策として最も有効なものはどれか。",
    "options": [
      "短いパスワードを使う",
      "複雑なパスワードを設定する",
      "同じパスワードを使い回す",
      "定期的にURLを変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0343",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★★★",
    "question": "1.2GBのファイルを200Mbpsの回線で送信するとき理論上最も近い時間はどれか。ただし1Byte＝8bitとする。",
    "options": [
      "24秒",
      "36秒",
      "48秒",
      "60秒"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0344",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★★",
    "question": "公開鍵暗号方式において送信者が受信者へ安全にデータを送るために利用する鍵はどれか。",
    "options": [
      "送信者の公開鍵",
      "送信者の秘密鍵",
      "受信者の公開鍵",
      "受信者の秘密鍵"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0345",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★★★",
    "question": "成績データが外部から不正に書き換えられた場合、主に損なわれた要素として最も適切なものはどれか。",
    "options": [
      "機密性",
      "完全性",
      "可用性",
      "匿名性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0346",
    "unit": "情報通信ネットワーク",
    "field": "DNS",
    "difficulty": "★★★★",
    "question": "あるWebサイトのURLでは接続できないがIPアドレスを直接入力すると閲覧できた。このとき障害が発生している可能性が最も高いものはどれか。",
    "options": [
      "DNSサーバ",
      "ファイアウォール",
      "メールサーバ",
      "アクセスポイント"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0347",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク設計",
    "difficulty": "★★★★",
    "question": "学校のネットワーク管理者が災害時にも授業用システムを停止させないために複数地域へサーバを分散配置した。この目的として最も適切なものはどれか。",
    "options": [
      "機密性の向上",
      "可用性の向上",
      "通信速度の向上",
      "暗号化の強化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0348",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★★★★",
    "question": "回線交換方式と比較したときのパケット交換方式の特徴として最も適切なものはどれか。",
    "options": [
      "通信中は回線を占有する",
      "複数の利用者で回線を共有できる",
      "常に一定速度で通信できる",
      "データ分割を行わない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0349",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★★★",
    "question": "大規模なWebサービスに対して複数の端末から大量の通信を送りつけサービス停止を狙う攻撃を何というか。",
    "options": [
      "SQLインジェクション",
      "DDoS攻撃",
      "辞書攻撃",
      "フィッシング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0350",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（総合）",
    "difficulty": "★★★★★",
    "question": "生徒が学校のWebサイトにアクセスする際、「URL入力→IPアドレス取得→Webページ表示」という流れの中で、IPアドレス取得を担当する仕組みとして最も適切なものはどれか。",
    "options": [
      "NAT",
      "DNS",
      "SSL",
      "SMTP"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0351",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（総合）",
    "difficulty": "★★★★★",
    "question": "ある企業では機密情報を扱うサーバをインターネットから直接アクセスできないようにしている。この構成の主な目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "機密性を高めるため",
      "データ量を削減するため",
      "IPアドレスを節約するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0352",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（総合）",
    "difficulty": "★★★★★",
    "question": "Web会議システムでは音声や映像が多少欠落しても会話が継続できることが重要である。この要件を満たす通信プロトコルとして最も適切なものはどれか。",
    "options": [
      "TCP",
      "UDP",
      "HTTP",
      "FTP"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0353",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（総合）",
    "difficulty": "★★★★★",
    "question": "ある自治体は複数のデータセンターで住民情報を管理している。この運用によって期待される効果として最も適切なものはどれか。",
    "options": [
      "障害時でもサービスを継続できる",
      "通信の暗号化が不要になる",
      "IPアドレスが不要になる",
      "DNSサーバが不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0354",
    "unit": "情報通信ネットワーク",
    "field": "大学入試レベル（総合）",
    "difficulty": "★★★★★",
    "question": "学校のネットワークで特定の時間帯だけ通信速度が大幅に低下した。調査の結果、多数の端末が動画配信サービスを利用していたことが分かった。この現象の原因として最も適切なものはどれか。",
    "options": [
      "DNSサーバの故障",
      "共有帯域の不足",
      "IPアドレスの競合",
      "暗号化処理の停止"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0355",
    "unit": "情報通信ネットワーク",
    "field": "ネットワークの基礎",
    "difficulty": "★",
    "question": "世界中のコンピュータ同士を接続する巨大なネットワークを何というか。",
    "options": [
      "LAN",
      "インターネット",
      "イントラネット",
      "VPN"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0356",
    "unit": "情報通信ネットワーク",
    "field": "ネットワークの基礎",
    "difficulty": "★",
    "question": "家庭や学校などの限られた範囲のネットワークを何というか。",
    "options": [
      "LAN",
      "WAN",
      "インターネット",
      "クラウド"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0357",
    "unit": "情報通信ネットワーク",
    "field": "通信の仕組み",
    "difficulty": "★",
    "question": "インターネット上でWebページの場所を表す文字列を何というか。",
    "options": [
      "URL",
      "IPアドレス",
      "パスワード",
      "SSID"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0358",
    "unit": "情報通信ネットワーク",
    "field": "通信の仕組み",
    "difficulty": "★",
    "question": "ネットワーク上で機器ごとに割り当てられる番号を何というか。",
    "options": [
      "URL",
      "ドメイン名",
      "IPアドレス",
      "ポート番号"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0359",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク機器",
    "difficulty": "★",
    "question": "無線LANに接続するための機器として最も適切なものはどれか。",
    "options": [
      "ルータ",
      "アクセスポイント",
      "スキャナ",
      "ディスプレイ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0360",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク機器",
    "difficulty": "★",
    "question": "家庭内のネットワークとインターネットを接続する機器はどれか。",
    "options": [
      "プリンタ",
      "ルータ",
      "ハブ",
      "モニタ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0361",
    "unit": "情報通信ネットワーク",
    "field": "通信サービス",
    "difficulty": "★",
    "question": "電子メールを受信するための代表的なプロトコルはどれか。",
    "options": [
      "HTTP",
      "FTP",
      "POP3",
      "HTML"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0362",
    "unit": "情報通信ネットワーク",
    "field": "通信サービス",
    "difficulty": "★",
    "question": "Webページを閲覧する際に使用されるプロトコルはどれか。",
    "options": [
      "SMTP",
      "HTTP",
      "POP3",
      "DNS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0363",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "第三者に通信内容を読まれないようにする技術を何というか。",
    "options": [
      "圧縮",
      "暗号化",
      "復号",
      "認証"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0364",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "本人確認のために指紋や顔を利用する認証方法を何というか。",
    "options": [
      "公開鍵認証",
      "多要素認証",
      "生体認証",
      "電子署名"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0365",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★★",
    "question": "50Mbpsの回線で理論上1秒間に送信できるデータ量として最も近いものはどれか。",
    "options": [
      "約6.25MB",
      "約12.5MB",
      "約25MB",
      "約50MB"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0366",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★★",
    "question": "800MBのファイルを100Mbpsの回線で送信する。理論上必要な時間として最も近いものはどれか。ただし1Byte＝8bitとする。",
    "options": [
      "32秒",
      "48秒",
      "64秒",
      "80秒"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0367",
    "unit": "情報通信ネットワーク",
    "field": "DNS",
    "difficulty": "★★",
    "question": "DNSサーバの役割として最も適切なものはどれか。",
    "options": [
      "URLを暗号化する",
      "ドメイン名をIPアドレスに変換する",
      "通信速度を測定する",
      "Webページを保存する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0368",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス",
    "difficulty": "★★",
    "question": "家庭内でスマートフォンやパソコンに割り当てられるIPアドレスとして最も適切なものはどれか。",
    "options": [
      "プライベートIPアドレス",
      "グローバルIPアドレス",
      "DNSアドレス",
      "MACアドレス"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0369",
    "unit": "情報通信ネットワーク",
    "field": "無線通信",
    "difficulty": "★★",
    "question": "Bluetoothの特徴として最も適切なものはどれか。",
    "options": [
      "長距離通信専用である",
      "近距離の無線通信に利用される",
      "必ずインターネット接続が必要である",
      "通信にはケーブルが必要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0370",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク構成",
    "difficulty": "★★",
    "question": "スター型ネットワークの特徴として最も適切なものはどれか。",
    "options": [
      "中央の機器を中心に接続する",
      "端末同士を輪のようにつなぐ",
      "すべての端末を直列につなぐ",
      "必ず無線通信を用いる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0371",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★",
    "question": "商品の販売情報を記録し在庫管理に活用するシステムを何というか。",
    "options": [
      "POSシステム",
      "DBMS",
      "OS",
      "DNS"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0372",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "パスワードを複雑にする目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "推測されにくくするため",
      "容量を減らすため",
      "IPアドレスを保護するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0373",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★",
    "question": "クラウドサービスの特徴として最も適切なものはどれか。",
    "options": [
      "利用にはUSBが必要である",
      "インターネット経由で利用できる",
      "校内でしか利用できない",
      "通信速度が一定になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0374",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "情報セキュリティの三要素のうち情報が改ざんされていない性質を何というか。",
    "options": [
      "可用性",
      "完全性",
      "機密性",
      "匿名性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0375",
    "unit": "情報通信ネットワーク",
    "field": "TCP・UDP",
    "difficulty": "★★★",
    "question": "TCPの特徴として最も適切なものはどれか。",
    "options": [
      "再送制御を行わない",
      "信頼性の高い通信を行う",
      "動画専用である",
      "暗号化専用である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0376",
    "unit": "情報通信ネットワーク",
    "field": "TCP・UDP",
    "difficulty": "★★★",
    "question": "オンラインゲームやビデオ通話でUDPが利用される理由として最も適切なものはどれか。",
    "options": [
      "暗号化性能が高い",
      "通信遅延が少ない",
      "通信量が増える",
      "必ずデータが届く"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0377",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★",
    "question": "公開鍵暗号方式において受信者が安全にデータを受け取るために用いられる鍵はどれか。",
    "options": [
      "受信者の秘密鍵",
      "受信者の公開鍵",
      "送信者の公開鍵",
      "送信者の秘密鍵"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0378",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★",
    "question": "電子署名によって確認できる内容として最も適切なものはどれか。",
    "options": [
      "通信速度",
      "送信者の真正性",
      "IPアドレス",
      "DNS情報"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0379",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "複数の端末から同時に大量のアクセスを送り、サービス停止を狙う攻撃を何というか。",
    "options": [
      "SQLインジェクション",
      "DDoS攻撃",
      "フィッシング",
      "辞書攻撃"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0380",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★★",
    "question": "偽のWebサイトへ誘導し利用者の情報を盗み出す攻撃を何というか。",
    "options": [
      "ブルートフォース攻撃",
      "フィッシング",
      "DoS攻撃",
      "ランサムウェア"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0381",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク機器",
    "difficulty": "★★★",
    "question": "スイッチングハブの役割として最も適切なものはどれか。",
    "options": [
      "必要な端末だけにデータを転送する",
      "IPアドレスを暗号化する",
      "DNS機能を提供する",
      "メールを送信する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0382",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★★★",
    "question": "パケット交換方式の特徴として最も適切なものはどれか。",
    "options": [
      "通信中は回線を占有する",
      "データを分割して送信する",
      "通信速度が一定である",
      "電話でしか利用できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0383",
    "unit": "情報通信ネットワーク",
    "field": "情報システム",
    "difficulty": "★★★",
    "question": "交通系ICカードの利用履歴を分析することで得られる効果として最も適切なものはどれか。",
    "options": [
      "通信速度の向上",
      "利用者の移動傾向の把握",
      "暗号化の廃止",
      "IPアドレスの削減"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0384",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★★",
    "question": "学校がクラウド型教材配信システムを導入する利点として最も適切なものはどれか。",
    "options": [
      "インターネットが不要になる",
      "場所を問わず利用できる",
      "通信量がゼロになる",
      "端末が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0385",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス",
    "difficulty": "★★★★",
    "question": "URLを入力してもWebサイトが表示されないが、IPアドレスを直接入力すると表示された。この原因として最も適切なものはどれか。",
    "options": [
      "DNSサーバの障害",
      "Webサーバの停止",
      "通信回線の切断",
      "ルータの故障"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0386",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク設計",
    "difficulty": "★★★★",
    "question": "学校内の一部教室のみ通信速度が低下している。最も考えられる原因はどれか。",
    "options": [
      "アクセスポイントへの接続集中",
      "DNSサーバの停止",
      "IPアドレスの不足",
      "電子署名の失敗"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0387",
    "unit": "情報通信ネットワーク",
    "field": "暗号化",
    "difficulty": "★★★★",
    "question": "AさんがBさんに安全にデータを送信するため公開鍵暗号方式を利用する。このとき暗号化に用いる鍵はどれか。",
    "options": [
      "Aさんの公開鍵",
      "Aさんの秘密鍵",
      "Bさんの公開鍵",
      "Bさんの秘密鍵"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0388",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★★★",
    "question": "学校の成績データが誤って書き換えられた。このとき失われた情報セキュリティの要素として最も適切なものはどれか。",
    "options": [
      "機密性",
      "可用性",
      "完全性",
      "真正性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0389",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク設計",
    "difficulty": "★★★★",
    "question": "災害時にも自治体のシステムを継続利用できるよう複数地域にサーバを配置している。この目的として最も適切なものはどれか。",
    "options": [
      "可用性の向上",
      "通信速度の向上",
      "IPアドレスの削減",
      "暗号化の簡略化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0390",
    "unit": "情報通信ネットワーク",
    "field": "総合問題",
    "difficulty": "★★★★",
    "question": "学校のWebサーバがアクセス集中で停止した。対策として最も適切なものはどれか。",
    "options": [
      "サーバを複数台用意する",
      "URLを変更する",
      "DNSを停止する",
      "暗号化を解除する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0391",
    "unit": "情報通信ネットワーク",
    "field": "総合問題",
    "difficulty": "★★★★",
    "question": "家庭内の複数の端末が同時に動画視聴を始めたところ通信速度が低下した。この現象の原因として最も適切なものはどれか。",
    "options": [
      "共有回線の帯域不足",
      "DNSの障害",
      "IPアドレスの競合",
      "電子署名の失敗"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0392",
    "unit": "情報通信ネットワーク",
    "field": "ネットワークの基礎",
    "difficulty": "★",
    "question": "世界中のコンピュータやスマートフォンが相互に接続された巨大なネットワークを何というか。",
    "options": [
      "インターネット",
      "LAN",
      "VPN",
      "イントラネット"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0393",
    "unit": "情報通信ネットワーク",
    "field": "通信プロトコル",
    "difficulty": "★",
    "question": "Webページを閲覧するときに用いられる通信プロトコルはどれか。",
    "options": [
      "FTP",
      "TCP",
      "SMTP",
      "HTTP"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0394",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク構成",
    "difficulty": "★",
    "question": "学校内だけで利用される比較的小規模なネットワークを何というか。",
    "options": [
      "WAN",
      "VPN",
      "LAN",
      "インターネット"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0395",
    "unit": "情報通信ネットワーク",
    "field": "IPアドレス",
    "difficulty": "★",
    "question": "ネットワーク上で機器を識別するために割り当てられる番号を何というか。",
    "options": [
      "IPアドレス",
      "DNS",
      "URL",
      "SSID"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0396",
    "unit": "情報通信ネットワーク",
    "field": "無線通信",
    "difficulty": "★",
    "question": "無線LANに接続する際、アクセスポイントを識別するために表示される名称を何というか。",
    "options": [
      "IPアドレス",
      "URL",
      "DNS",
      "SSID"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0397",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "通信内容を第三者に読み取られないよう、データを変換する技術を何というか。",
    "options": [
      "暗号化",
      "認証",
      "復号",
      "圧縮"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0398",
    "unit": "情報通信ネットワーク",
    "field": "DNS",
    "difficulty": "★★",
    "question": "『www.example.com』のようなドメイン名をIPアドレスに変換する仕組みを何というか。",
    "options": [
      "DHCP",
      "FTP",
      "DNS",
      "SMTP"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0399",
    "unit": "情報通信ネットワーク",
    "field": "電子メール",
    "difficulty": "★★",
    "question": "電子メールを送信する際に主に利用されるプロトコルはどれか。",
    "options": [
      "HTTP",
      "POP3",
      "IMAP",
      "SMTP"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0400",
    "unit": "情報通信ネットワーク",
    "field": "情報セキュリティ",
    "difficulty": "★★",
    "question": "IDとパスワードに加えて、スマートフォンへの通知など別の方法でも本人確認を行う仕組みを何というか。",
    "options": [
      "多要素認証",
      "暗号化",
      "電子署名",
      "バックアップ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0401",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★★",
    "question": "クラウドサービスを利用する利点として最も適切なものはどれか。",
    "options": [
      "利用者ごとに専用サーバが必要になる",
      "インターネットが不要になる",
      "複数の端末から同じデータを利用できる",
      "通信速度が常に一定になる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0402",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "利用者になりすましてパスワードなどを入力させる詐欺を何というか。",
    "options": [
      "マルウェア",
      "スパム",
      "ランサムウェア",
      "フィッシング"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0403",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★★",
    "question": "インターネット上で送信するデータを小さな単位に分割して送る方式を何というか。",
    "options": [
      "パケット通信",
      "回線交換",
      "同報通信",
      "専用線通信"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0404",
    "unit": "情報通信ネットワーク",
    "field": "IoT",
    "difficulty": "★★",
    "question": "家電や自動車など、さまざまな機器をインターネットに接続する仕組みを何というか。",
    "options": [
      "VPN",
      "LAN",
      "IoT",
      "DNS"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0405",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "災害や故障に備えてデータの複製を保存しておくことを何というか。",
    "options": [
      "圧縮",
      "同期",
      "認証",
      "バックアップ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0406",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク機器",
    "difficulty": "★★",
    "question": "家庭や学校で、異なるネットワーク同士を接続する機器を何というか。",
    "options": [
      "ルータ",
      "ハブ",
      "スイッチ",
      "アクセスポイント"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0407",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★★",
    "question": "学校のサーバに不正アクセスが発生した。今後同様の被害を防ぐための対策として最も適切なものはどれか。",
    "options": [
      "定期的にパスワードを変更する",
      "全ての端末の電源を切る",
      "ファイル名を変更する",
      "印刷枚数を減らす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0408",
    "unit": "情報通信ネットワーク",
    "field": "通信の仕組み",
    "difficulty": "★★★",
    "question": "動画配信サービスでは、利用者ごとの通信状況に応じて画質が自動調整される。この目的として最も適切なものはどれか。",
    "options": [
      "通信の安定性を高めるため",
      "広告を増やすため",
      "データを暗号化するため",
      "サーバを小型化するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0409",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク設計",
    "difficulty": "★★★",
    "question": "災害時に通信網の一部が故障しても全体が停止しないよう、複数の経路を用意する設計を何というか。",
    "options": [
      "集中管理",
      "単一路線",
      "冗長化",
      "仮想化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0410",
    "unit": "情報通信ネットワーク",
    "field": "情報モラル",
    "difficulty": "★★★",
    "question": "SNS上で発信された災害情報を拡散する前に確認すべきこととして最も重要なものはどれか。",
    "options": [
      "投稿者の好きな色",
      "投稿時刻だけ",
      "閲覧数",
      "情報源の信頼性"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0411",
    "unit": "情報通信ネットワーク",
    "field": "未来のネットワーク",
    "difficulty": "★★★",
    "question": "自動運転車や遠隔医療の普及に伴い、通信技術に特に求められる性能として最も適切なものはどれか。",
    "options": [
      "低遅延で安定した通信",
      "画面の大型化",
      "端末の軽量化",
      "印刷速度の向上"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0412",
    "unit": "情報通信ネットワーク",
    "field": "ネットワークの基礎",
    "difficulty": "★",
    "question": "インターネット上でWebページの場所を表す「https://～」のような文字列を何というか。",
    "options": [
      "URL",
      "IPアドレス",
      "DNS",
      "SSID"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0413",
    "unit": "情報通信ネットワーク",
    "field": "通信プロトコル",
    "difficulty": "★",
    "question": "電子メールを受信する際に利用されるプロトコルとして適切なものはどれか。",
    "options": [
      "HTTP",
      "SMTP",
      "POP3",
      "FTP"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0414",
    "unit": "情報通信ネットワーク",
    "field": "無線通信",
    "difficulty": "★",
    "question": "スマートフォンを無線LANに接続するとき、電波を発信している機器を何というか。",
    "options": [
      "ルータ",
      "ハブ",
      "スイッチ",
      "アクセスポイント"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0415",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★",
    "question": "他人に推測されにくいパスワードの作成方法として最も適切なものはどれか。",
    "options": [
      "英字・数字・記号を組み合わせる",
      "誕生日を使う",
      "名前だけを使う",
      "全サービスで共通にする"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0416",
    "unit": "情報通信ネットワーク",
    "field": "クラウド",
    "difficulty": "★",
    "question": "クラウドストレージを利用する利点として最も適切なものはどれか。",
    "options": [
      "複数の端末から同じデータを利用できる",
      "停電時にも必ず利用できる",
      "通信回線が不要になる",
      "端末の故障が起こらなくなる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0417",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク機器",
    "difficulty": "★★",
    "question": "家庭内の複数の端末をインターネットに接続する際、中心となる機器はどれか。",
    "options": [
      "モデム",
      "アクセスポイント",
      "ルータ",
      "スピーカー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0418",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "WebサイトのURLが『https://』で始まる場合、期待できる効果として最も適切なものはどれか。",
    "options": [
      "通信内容が暗号化される",
      "必ず安全なサイトである",
      "通信速度が速くなる",
      "広告が表示されなくなる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0419",
    "unit": "情報通信ネットワーク",
    "field": "電子メール",
    "difficulty": "★★",
    "question": "電子メールを複数人に送信するとき、受信者同士にアドレスを知られたくない場合に利用する欄はどれか。",
    "options": [
      "CC",
      "TO",
      "BCC",
      "DNS"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0420",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "スマートフォンに指紋認証を設定する主な目的として最も適切なものはどれか。",
    "options": [
      "画面を明るくするため",
      "通信量を減らすため",
      "バッテリー消費を抑えるため",
      "本人確認を強化するため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0421",
    "unit": "情報通信ネットワーク",
    "field": "情報モラル",
    "difficulty": "★★",
    "question": "公共の無線LANを利用するときに注意すべきこととして最も適切なものはどれか。",
    "options": [
      "重要な情報の送受信には注意する",
      "必ず高速通信になると考える",
      "誰でも安全に利用できると考える",
      "パスワードを共有する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0422",
    "unit": "情報通信ネットワーク",
    "field": "通信方式",
    "difficulty": "★★",
    "question": "動画視聴中に必要な部分から順番にデータを受信しながら再生する仕組みを何というか。",
    "options": [
      "ストリーミング",
      "ミラーリング",
      "バックアップ",
      "ルーティング"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0423",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★",
    "question": "不審なメールに添付されたファイルを開いた結果、ファイルが勝手に暗号化され、復旧と引き換えに金銭を要求された。このようなマルウェアを何というか。",
    "options": [
      "ワーム",
      "スパイウェア",
      "ランサムウェア",
      "トロイの木馬"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0424",
    "unit": "情報通信ネットワーク",
    "field": "IoT",
    "difficulty": "★★",
    "question": "農場で土壌の水分量を自動で測定し、必要に応じて水やりを行うシステムに最も関係が深い技術はどれか。",
    "options": [
      "VPN",
      "クラウド",
      "LAN",
      "IoT"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0425",
    "unit": "情報通信ネットワーク",
    "field": "通信速度",
    "difficulty": "★★",
    "question": "同じ容量のデータをより短時間で送信できる状態を表す言葉として最も適切なものはどれか。",
    "options": [
      "帯域幅が広い",
      "IPアドレスが長い",
      "ドメイン名が短い",
      "暗号化されている"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0426",
    "unit": "情報通信ネットワーク",
    "field": "情報共有",
    "difficulty": "★★",
    "question": "クラウド上の文書を複数人で同時編集できることの利点として最も適切なものはどれか。",
    "options": [
      "共同作業を効率化できる",
      "必ず誤入力を防げる",
      "通信量をなくせる",
      "端末が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0427",
    "unit": "情報通信ネットワーク",
    "field": "ネットワーク設計",
    "difficulty": "★★★",
    "question": "学校のネットワークで一部の機器が故障しても通信を継続できるよう、予備の回線を設ける設計を何というか。",
    "options": [
      "分散処理",
      "負荷分散",
      "冗長化",
      "仮想化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0428",
    "unit": "情報通信ネットワーク",
    "field": "セキュリティ",
    "difficulty": "★★★",
    "question": "企業が従業員に定期的な情報セキュリティ研修を実施する理由として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "機器の寿命を延ばすため",
      "データ容量を増やすため",
      "人的ミスによる事故を防ぐため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0429",
    "unit": "情報通信ネットワーク",
    "field": "AIとネットワーク",
    "difficulty": "★★★",
    "question": "将来、遠隔手術や自動運転が普及した社会で特に重要となる通信の特徴はどれか。",
    "options": [
      "遅延が少なく安定していること",
      "広告を表示できること",
      "端末が軽量であること",
      "画面が大きいこと"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0430",
    "unit": "情報通信ネットワーク",
    "field": "社会と情報",
    "difficulty": "★★★",
    "question": "災害時にSNS上で誤った避難情報が広まった。このような事態を防ぐために最も重要なことはどれか。",
    "options": [
      "公式情報を確認すること",
      "閲覧数の多い投稿を信じること",
      "最初に見つけた情報を拡散すること",
      "投稿時刻だけを見ること"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q04-0431",
    "unit": "情報通信ネットワーク",
    "field": "未来の技術",
    "difficulty": "★★★",
    "question": "都市全体の交通量や電力使用量をネットワークで管理する『スマートシティ』において、最も重要となる考え方はどれか。",
    "options": [
      "多くのデータを連携して活用すること",
      "通信回線を1本に統一すること",
      "全ての情報を紙で管理すること",
      "インターネットを使わないこと"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0001",
    "unit": "データの活用",
    "field": "データの分析の基礎",
    "difficulty": "★",
    "question": "数値や文字など観察や調査によって集められた事実や記録を何というか。",
    "options": [
      "アルゴリズム",
      "データ",
      "モデル",
      "シミュレーション"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0002",
    "unit": "データの活用",
    "field": "データの分析の基礎",
    "difficulty": "★",
    "question": "複数のデータを整理して表にまとめたものを何というか。",
    "options": [
      "グラフ",
      "データベース",
      "表計算ソフト",
      "度数分布表"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0003",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データの値をすべて足し合わせデータの個数で割って求める値を何というか。",
    "options": [
      "中央値",
      "最頻値",
      "平均値",
      "偏差値"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0004",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データを大きさの順に並べたとき中央に位置する値を何というか。",
    "options": [
      "中央値",
      "平均値",
      "最頻値",
      "代表値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0005",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データの中で最も多く現れる値を何というか。",
    "options": [
      "中央値",
      "最頻値",
      "平均値",
      "偏差"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0006",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "平均値、中央値、最頻値のようにデータ全体の特徴を表す値をまとめて何というか。",
    "options": [
      "代表値",
      "相関係数",
      "分散",
      "標準偏差"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0007",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "身長を「150cm以上155cm未満」のように区切った区間を何というか。",
    "options": [
      "階級",
      "度数",
      "中央値",
      "偏差"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0008",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "各階級に含まれるデータの個数を何というか。",
    "options": [
      "中央値",
      "相関",
      "度数",
      "偏差値"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0009",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "データを階級ごとに整理し、度数をまとめた表を何というか。",
    "options": [
      "クロス集計表",
      "度数分布表",
      "散布図",
      "折れ線グラフ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0010",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "時間の経過による変化を表すのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "帯グラフ",
      "折れ線グラフ",
      "散布図"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0011",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "全体に占める割合を表すのに最も適したグラフはどれか。",
    "options": [
      "ヒストグラム",
      "散布図",
      "折れ線グラフ",
      "円グラフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0012",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "データの分布の様子を表すのに最も適したグラフはどれか。",
    "options": [
      "ヒストグラム",
      "帯グラフ",
      "円グラフ",
      "折れ線グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0013",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "2種類のデータの関係を表すのに最も適したグラフはどれか。",
    "options": [
      "散布図",
      "円グラフ",
      "棒グラフ",
      "帯グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0014",
    "unit": "データの活用",
    "field": "相関",
    "difficulty": "★",
    "question": "2つのデータの関係の強さを表す値を何というか。",
    "options": [
      "中央値",
      "相関係数",
      "偏差値",
      "階級値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0015",
    "unit": "データの活用",
    "field": "相関",
    "difficulty": "★",
    "question": "一方の値が大きくなるにつれてもう一方の値も大きくなる関係を何というか。",
    "options": [
      "負の相関",
      "無相関",
      "正の相関",
      "逆相関"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0016",
    "unit": "データの活用",
    "field": "相関",
    "difficulty": "★",
    "question": "一方の値が大きくなるにつれてもう一方の値が小さくなる関係を何というか。",
    "options": [
      "負の相関",
      "無相関",
      "正の相関",
      "比例"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0017",
    "unit": "データの活用",
    "field": "相関",
    "difficulty": "★",
    "question": "2つのデータにほとんど関係が見られない状態を何というか。",
    "options": [
      "無相関",
      "負の相関",
      "逆相関",
      "比例"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0018",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★",
    "question": "調査対象全体を何というか。",
    "options": [
      "標本",
      "母集団",
      "代表値",
      "中央値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0019",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★",
    "question": "母集団の一部を取り出して調べることを何というか。",
    "options": [
      "推測",
      "抽出",
      "標本調査",
      "実験"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0020",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★",
    "question": "母集団から取り出したデータの集まりを何というか。",
    "options": [
      "標本",
      "階級",
      "偏差",
      "相関"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0021",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★",
    "question": "くじ引きのようにすべての対象が同じ確率で選ばれるように標本を選ぶ方法を何というか。",
    "options": [
      "層化抽出法",
      "系統抽出法",
      "無作為抽出法",
      "有意抽出法"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0022",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelなどの表計算ソフトで計算式を入力する欄を何というか。",
    "options": [
      "シート",
      "セル",
      "数式バー",
      "ワークブック"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0023",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelで平均値を求める関数はどれか。",
    "options": [
      "SUM関数",
      "COUNT関数",
      "AVERAGE関数",
      "MAX関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0024",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelでセル内の数値の合計を求める関数はどれか。",
    "options": [
      "AVERAGE関数",
      "SUM関数",
      "COUNT関数",
      "IF関数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0025",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelでデータの個数を数える関数はどれか。",
    "options": [
      "COUNT関数",
      "AVERAGE関数",
      "SUM関数",
      "MAX関数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0026",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelで最も大きい値を求める関数はどれか。",
    "options": [
      "MIN関数",
      "COUNT関数",
      "SUM関数",
      "MAX関数"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0027",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelで最も小さい値を求める関数はどれか。",
    "options": [
      "COUNT関数",
      "MIN関数",
      "AVERAGE関数",
      "SUM関数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0028",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★",
    "question": "実際の現象や問題を単純化して表現したものを何というか。",
    "options": [
      "モデル",
      "標本",
      "統計量",
      "階級"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0029",
    "unit": "データの活用",
    "field": "シミュレーション",
    "difficulty": "★",
    "question": "モデルを利用して現実の現象をコンピュータ上で再現することを何というか。",
    "options": [
      "分析",
      "集計",
      "シミュレーション",
      "可視化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0030",
    "unit": "データの活用",
    "field": "シミュレーション",
    "difficulty": "★",
    "question": "サイコロを多数回振る実験をコンピュータ上で再現する方法を何というか。",
    "options": [
      "データベース",
      "シミュレーション",
      "暗号化",
      "圧縮"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0031",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "度数分布表において各階級の中央の値を何というか。",
    "options": [
      "中央値",
      "階級値",
      "最頻値",
      "代表値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0032",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "ヒストグラムの横軸に表されるものとして最も適切なものはどれか。",
    "options": [
      "度数",
      "割合",
      "階級",
      "平均値"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0033",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "ヒストグラムの縦軸に表されるものとして最も適切なものはどれか。",
    "options": [
      "階級値",
      "中央値",
      "度数",
      "相関係数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0034",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データの中で最も大きい値を何というか。",
    "options": [
      "最大値",
      "中央値",
      "平均値",
      "最頻値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0035",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データの中で最も小さい値を何というか。",
    "options": [
      "最小値",
      "最頻値",
      "代表値",
      "偏差値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0036",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データの散らばり具合を表す指標の1つである標準偏差について最も適切な説明はどれか。",
    "options": [
      "値が大きいほどデータのばらつきが大きい",
      "値が大きいほど平均値が高い",
      "値が大きいほどデータ数が多い",
      "値が大きいほど中央値が高い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0037",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "複数の項目の数量を比較するのに最も適したグラフはどれか。",
    "options": [
      "棒グラフ",
      "円グラフ",
      "散布図",
      "ヒストグラム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0038",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "全体を100%として構成比を比較するのに最も適したグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "帯グラフ",
      "散布図",
      "ヒストグラム"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0039",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelで最も頻繁に使われる計算式は先頭にどの記号を付けて入力するか。",
    "options": [
      "#",
      "=",
      "@",
      "&"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0040",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "ExcelでセルA1からA10までの合計を求める式として正しいものはどれか。",
    "options": [
      "=SUM(A1:A10)",
      "=COUNT(A1:A10)",
      "=MAX(A1:A10)",
      "=AVERAGE(A1:A10)"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0041",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelで条件に応じて処理を分岐させる関数はどれか。",
    "options": [
      "SUM関数",
      "IF関数",
      "COUNT関数",
      "MIN関数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0042",
    "unit": "データの活用",
    "field": "標本調査",
    "difficulty": "★",
    "question": "全国の高校生全員を対象に調査することが難しい場合、一部を調べて全体を推測する方法を何というか。",
    "options": [
      "完全調査",
      "悉皆調査",
      "標本調査",
      "比較調査"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0043",
    "unit": "データの活用",
    "field": "標本調査",
    "difficulty": "★",
    "question": "母集団全体を対象として調査を行う方法を何というか。",
    "options": [
      "悉皆調査",
      "無作為抽出",
      "標本調査",
      "層化抽出"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0044",
    "unit": "データの活用",
    "field": "シミュレーション",
    "difficulty": "★",
    "question": "現実の現象を単純化して表現したものを利用して実験を行うことを何というか。",
    "options": [
      "デバッグ",
      "シミュレーション",
      "コンパイル",
      "モデリング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0045",
    "unit": "データの活用",
    "field": "シミュレーション",
    "difficulty": "★",
    "question": "コンピュータ上で気象予報や人口変動を予測する際に使われる考え方として最も適切なものはどれか。",
    "options": [
      "データ圧縮",
      "モデリングとシミュレーション",
      "暗号化",
      "標本抽出"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0046",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "5, 7, 8, 10, 10 の平均値として正しいものはどれか。",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0047",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "3, 5, 7, 9, 11 の中央値として正しいものはどれか。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0048",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "2, 4, 4, 5, 7, 8 の最頻値として正しいものはどれか。",
    "options": [
      "2",
      "4",
      "5",
      "7"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0049",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "平均値が50点のクラスで自分の点数が70点だった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "平均より高い点数である",
      "中央値と同じである",
      "最高点である",
      "人数が分かる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0050",
    "unit": "データの活用",
    "field": "グラフ（練習）",
    "difficulty": "★★",
    "question": "ある商品の売上を月ごとに比較したい。このとき最も適したグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "散布図",
      "円グラフ",
      "帯グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0051",
    "unit": "データの活用",
    "field": "グラフ（練習）",
    "difficulty": "★★",
    "question": "クラス40人の通学手段の割合を示したい。このとき最も適したグラフはどれか。",
    "options": [
      "散布図",
      "円グラフ",
      "折れ線グラフ",
      "ヒストグラム"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0052",
    "unit": "データの活用",
    "field": "グラフ（練習）",
    "difficulty": "★★",
    "question": "数学の点数と理科の点数の関係を調べたい。このとき最も適したグラフはどれか。",
    "options": [
      "棒グラフ",
      "散布図",
      "円グラフ",
      "帯グラフ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0053",
    "unit": "データの活用",
    "field": "相関（練習）",
    "difficulty": "★★",
    "question": "気温が高くなるほどアイスクリームの売上が増える傾向がある。この関係は何と呼ばれるか。",
    "options": [
      "負の相関",
      "無相関",
      "正の相関",
      "因果関係"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0054",
    "unit": "データの活用",
    "field": "相関（練習）",
    "difficulty": "★★",
    "question": "勉強時間とテレビの視聴時間を調べたところ、一方が増えると他方が減る傾向が見られた。この関係は何と呼ばれるか。",
    "options": [
      "正の相関",
      "負の相関",
      "無相関",
      "比例関係"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0055",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "ExcelでA1からA20までの数値の個数を求める関数はどれか。",
    "options": [
      "SUM関数",
      "AVERAGE関数",
      "COUNT関数",
      "IF関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0056",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "Excelで「80点以上なら合格、それ以外は不合格」と表示する際に用いる関数として最も適切なものはどれか。",
    "options": [
      "SUM関数",
      "COUNT関数",
      "IF関数",
      "MAX関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0057",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "Excelでセルをコピーした際、数式内の参照先が自動的に変化する参照方法を何というか。",
    "options": [
      "絶対参照",
      "相対参照",
      "混合参照",
      "固定参照"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0058",
    "unit": "データの活用",
    "field": "標本調査（練習）",
    "difficulty": "★★",
    "question": "学校全体の意見を調べるために特定の部活動の生徒だけを対象にアンケートを実施した。この方法の問題点として最も適切なものはどれか。",
    "options": [
      "人数が多すぎる",
      "無作為ではない",
      "集計に時間がかかる",
      "調査項目が多い"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0059",
    "unit": "データの活用",
    "field": "標本調査（練習）",
    "difficulty": "★★",
    "question": "全校生徒を男女別に分けそれぞれから同じ割合で抽出する方法を何というか。",
    "options": [
      "無作為抽出",
      "層化抽出",
      "系統抽出",
      "完全調査"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0060",
    "unit": "データの活用",
    "field": "シミュレーション（練習）",
    "difficulty": "★★",
    "question": "サイコロを1000回振る実験をコンピュータで再現する目的として最も適切なものはどれか。",
    "options": [
      "結果を必ず予言するため",
      "現象の傾向を調べるため",
      "乱数をなくすため",
      "実験を簡単にするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0061",
    "unit": "データの活用",
    "field": "シミュレーション（練習）",
    "difficulty": "★★",
    "question": "交通渋滞の発生を予測するためにコンピュータ上で実験を行う際、最初に行うべきことはどれか。",
    "options": [
      "現実をモデル化する",
      "乱数を削除する",
      "データを暗号化する",
      "プログラムを削除する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0062",
    "unit": "データの活用",
    "field": "統計量（演習）",
    "difficulty": "★★★",
    "question": "A組とB組の平均点はいずれも70点だったが、A組の標準偏差の方が大きかった。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "A組の方が人数が多い",
      "A組の方が点数のばらつきが大きい",
      "B組の方が平均点が高い",
      "B組の方が最高点が高い"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0063",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "身長と体重の相関係数が0.85であった。この結果から読み取れることとして最も適切なものはどれか。",
    "options": [
      "強い負の相関がある",
      "ほとんど関係がない",
      "強い正の相関がある",
      "因果関係が証明された"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0064",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "ある調査でアイスクリームの売上と熱中症患者数に正の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "アイスが熱中症を引き起こしている",
      "両者には共通の要因がある可能性がある",
      "必ず因果関係がある",
      "相関係数は負である"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0065",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "学校全体の意見を公平に反映するアンケートを実施したい。このとき最も適切な方法はどれか。",
    "options": [
      "仲の良い友人だけを選ぶ",
      "無作為抽出を行う",
      "成績上位者だけを選ぶ",
      "先生だけに聞く"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0066",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelで数式「=$A$1+B1」を下方向にコピーしたとき変化しないセル参照はどれか。",
    "options": [
      "A1とB1の両方",
      "A1のみ",
      "B1のみ",
      "どちらも変化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0067",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelで複数の条件を満たすデータの個数を数える関数として最も適切なものはどれか。",
    "options": [
      "COUNT関数",
      "SUM関数",
      "COUNTIFS関数",
      "AVERAGE関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0068",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "ある感染症の広がり方を予測するシミュレーションを作成する際、最も重要なことはどれか。",
    "options": [
      "見た目を派手にすること",
      "現実を適切にモデル化すること",
      "データをすべて削除すること",
      "乱数を使わないこと"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0069",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "シミュレーションの結果が実際の現象と異なった場合、まず見直すべきものはどれか。",
    "options": [
      "使用したモデルや前提条件",
      "コンピュータの色設定",
      "画面の解像度",
      "キーボード配列"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0070",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "あるクラス5人のテストの点数が 50, 60, 70, 80, 90 点であった。このクラスの平均点として正しいものはどれか。",
    "options": [
      "65",
      "70",
      "75",
      "80"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0071",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "7人の身長を小さい順に並べたところ、155, 158, 160, 163, 165, 167, 170 cmであった。中央値はどれか。",
    "options": [
      "160cm",
      "163cm",
      "165cm",
      "167cm"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0072",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "4, 5, 5, 6, 7, 8, 8, 8, 9 の最頻値として正しいものはどれか。",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0073",
    "unit": "データの活用",
    "field": "グラフ（練習）",
    "difficulty": "★★",
    "question": "ある学校の各部活動の人数を比較したい。このとき最も適したグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "棒グラフ",
      "散布図",
      "円グラフ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0074",
    "unit": "データの活用",
    "field": "グラフ（練習）",
    "difficulty": "★★",
    "question": "1週間の気温の変化を表すのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "散布図",
      "折れ線グラフ",
      "帯グラフ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0075",
    "unit": "データの活用",
    "field": "グラフ（練習）",
    "difficulty": "★★",
    "question": "全校生徒の通学方法の割合を表したい。このとき最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "ヒストグラム",
      "散布図",
      "折れ線グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0076",
    "unit": "データの活用",
    "field": "ヒストグラム（練習）",
    "difficulty": "★★",
    "question": "ヒストグラムから読み取れる情報として最も適切なものはどれか。",
    "options": [
      "データの分布の様子",
      "正確な中央値のみ",
      "相関係数のみ",
      "数式の内容"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0077",
    "unit": "データの活用",
    "field": "相関（練習）",
    "difficulty": "★★",
    "question": "散布図の点が右上がりに分布している場合、どのような関係が考えられるか。",
    "options": [
      "負の相関",
      "無相関",
      "正の相関",
      "因果関係"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0078",
    "unit": "データの活用",
    "field": "相関（練習）",
    "difficulty": "★★",
    "question": "相関係数が -0.9 に近い値であった。このとき最も適切な説明はどれか。",
    "options": [
      "強い正の相関がある",
      "強い負の相関がある",
      "相関がない",
      "因果関係がある"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0079",
    "unit": "データの活用",
    "field": "標本調査（練習）",
    "difficulty": "★★",
    "question": "全校生徒1000人の意見を調査するために100人を無作為に選んだ。この100人を何というか。",
    "options": [
      "母集団",
      "標本",
      "代表値",
      "階級値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0080",
    "unit": "データの活用",
    "field": "標本調査（練習）",
    "difficulty": "★★",
    "question": "標本調査の利点として最も適切なものはどれか。",
    "options": [
      "必ず正確な値が得られる",
      "短時間・低コストで調査できる",
      "計算が不要になる",
      "偏りがなくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0081",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "ExcelでセルB2からB20の平均を求める式として正しいものはどれか。",
    "options": [
      "=SUM(B2:B20)",
      "=COUNT(B2:B20)",
      "=AVERAGE(B2:B20)",
      "=MAX(B2:B20)"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0082",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "Excelで「70点以上なら○それ以外は×」と表示する際に最も適した関数はどれか。",
    "options": [
      "COUNT関数",
      "SUM関数",
      "IF関数",
      "AVERAGE関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0083",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "Excelの絶対参照を表す記号として正しいものはどれか。",
    "options": [
      "#",
      "%",
      "$",
      "&"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0084",
    "unit": "データの活用",
    "field": "シミュレーション（練習）",
    "difficulty": "★★",
    "question": "コンピュータ上でサイコロを10000回振る実験を行う目的として最も適切なものはどれか。",
    "options": [
      "乱数をなくすため",
      "結果を必ず一致させるため",
      "確率の傾向を調べるため",
      "計算を減らすため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0085",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "あるクラス10人の平均点は70点であった。転校生1人が加わった結果、平均点が72点になった。転校生の得点として正しいものはどれか。",
    "options": [
      "82点",
      "90点",
      "92点",
      "94点"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0086",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "5人の点数が 40, 50, 60, 70, x 点であり、平均点が64点であった。x の値として正しいものはどれか。",
    "options": [
      "80",
      "90",
      "100",
      "110"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0087",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "A組とB組の平均点はともに70点である。A組の標準偏差が12、B組の標準偏差が5であった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "A組の方が人数が多い",
      "A組の方がばらつきが大きい",
      "B組の平均点が高い",
      "B組の最高点が高い"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0088",
    "unit": "データの活用",
    "field": "ヒストグラム（演習）",
    "difficulty": "★★★",
    "question": "ヒストグラムで特定の階級の棒が他より高い場合、そのことが意味する内容として最も適切なものはどれか。",
    "options": [
      "その階級の度数が大きい",
      "平均値が大きい",
      "中央値が大きい",
      "相関係数が高い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0089",
    "unit": "データの活用",
    "field": "ヒストグラム（演習）",
    "difficulty": "★★★",
    "question": "テスト結果のヒストグラムが左右対称に近い形をしていた。このことから推測できることとして最も適切なものはどれか。",
    "options": [
      "極端な得点が多い",
      "平均値と中央値が近い可能性が高い",
      "必ず満点が存在する",
      "相関が強い"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0090",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "ある調査で「勉強時間」と「テストの点数」の相関係数が0.75であった。この結果から言えることとして最も適切なものはどれか。",
    "options": [
      "強い負の相関がある",
      "弱い正の相関がある",
      "比較的強い正の相関がある",
      "因果関係が証明された"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0091",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "「アイスクリームの売上」と「水難事故件数」に正の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "アイスクリームが事故を引き起こしている",
      "共通の要因が存在する可能性がある",
      "事故が売上を増やしている",
      "データが誤っている"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0092",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "散布図の点がほぼ一直線上に右下がりに並んでいる。このとき相関係数として最も適切な値はどれか。",
    "options": [
      "0.95",
      "-0.95",
      "0.1",
      "-0.1"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0093",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "学校全体の意見を公平に反映したい。最も適切な標本抽出方法はどれか。",
    "options": [
      "成績上位者のみを抽出する",
      "部活動加入者のみを抽出する",
      "無作為抽出を行う",
      "教師が選んだ生徒だけを抽出する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0094",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "全校生徒を学年ごとに分け、各学年から同じ割合で抽出する方法を何というか。",
    "options": [
      "系統抽出",
      "層化抽出",
      "単純抽出",
      "任意抽出"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0095",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelでセルA1の値が80以上なら「合格」それ以外なら「再試験」と表示する式として正しいものはどれか。",
    "options": [
      "\"=IF(A1>=80,合格,再試験)\"",
      "\"=SUM(A1>=80,合格,再試験)\"",
      "\"=COUNT(A1>=80,合格,再試験)\"",
      "\"=AVERAGE(A1>=80,合格,再試験)\""
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0096",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelで数式「=$A1+B$1」を右方向にコピーしたとき変化する参照先はどれか。",
    "options": [
      "A列のみ",
      "B列のみ",
      "A1とB1の両方",
      "どちらも変化しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0097",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "気象予測シミュレーションの精度を高めるために最も重要なことはどれか。",
    "options": [
      "見た目を改善する",
      "現実に近いモデルを作る",
      "乱数を使わない",
      "計算回数を減らす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0098",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "シミュレーション結果が実際と異なる場合、まず確認すべきものとして最も適切なものはどれか。",
    "options": [
      "コンピュータの性能",
      "モデルや前提条件",
      "画面の解像度",
      "使用したOS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0099",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "あるクラスの平均点は70点中央値は85点であった。この結果から推測できることとして最も適切なものはどれか。",
    "options": [
      "低得点者が一部存在する可能性がある",
      "全員の得点が同じである",
      "正規分布である",
      "最高点は85点である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0100",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "A市とB市の平均気温は同じであったが、A市の標準偏差はB市より大きかった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "A市の方が気温変化が大きい",
      "A市の方が平均気温が高い",
      "B市の方が暑い",
      "B市の方が寒い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0101",
    "unit": "データの活用",
    "field": "相関（応用）",
    "difficulty": "★★★★",
    "question": "ある調査で「スマートフォン利用時間」と「学力」に負の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "スマートフォンが学力を必ず低下させる",
      "相関だけでは因果関係は分からない",
      "データは必ず誤っている",
      "利用時間と学力は無関係である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0102",
    "unit": "データの活用",
    "field": "標本調査（応用）",
    "difficulty": "★★★★",
    "question": "全国調査を行う際、都市部の生徒だけを対象にするとどのような問題が生じる可能性が高いか。",
    "options": [
      "計算量が増える",
      "標本に偏りが生じる",
      "相関係数が変化する",
      "標準偏差が0になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0103",
    "unit": "データの活用",
    "field": "表計算（応用）",
    "difficulty": "★★★★",
    "question": "Excelで大量のデータを条件ごとに集計し、クロス集計表を作成する機能として最も適切なものはどれか。",
    "options": [
      "ピボットテーブル",
      "条件付き書式",
      "オートフィル",
      "改ページプレビュー"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0104",
    "unit": "データの活用",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "感染症の流行予測シミュレーションを作成したところ、実際より感染者数が大幅に少なくなった。最初に見直すべき項目として最も適切なものはどれか。",
    "options": [
      "ディスプレイの設定",
      "感染率などの前提条件",
      "キーボード配列",
      "ファイル名"
    ],
    "answer": 2,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0105",
    "unit": "データの活用",
    "field": "データ活用（応用）",
    "difficulty": "★★★★",
    "question": "ある商品の売上予測モデルが高い精度を示した。しかし社会情勢が大きく変化した場合、予測が外れる可能性がある。この理由として最も適切なものはどれか。",
    "options": [
      "モデルは常に誤っているから",
      "モデルには前提条件や限界があるから",
      "コンピュータの性能不足だから",
      "データ量が多すぎるから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0106",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "Aさん、Bさん、Cさん、Dさん、Eさんの5人のテストの点数が60点、70点、70点、80点、120点であった。このデータの代表値について適切な説明はどれか。",
    "options": [
      "平均値は中央値より小さい",
      "中央値は70点である",
      "最頻値は80点である",
      "代表値は1つしか存在しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0107",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "あるクラス40人の平均点は68点であった。欠席していた1人が後日受験し、その点数を加えると平均点は69点になった。欠席者の得点として最も適切なものはどれか。",
    "options": [
      "90点",
      "100点",
      "109点",
      "110点"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0108",
    "unit": "データの活用",
    "field": "統計量（演習）",
    "difficulty": "★★★",
    "question": "A組とB組のテストの平均点はどちらも75点であった。A組の標準偏差は5、B組の標準偏差は15であった。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "A組の方が人数が多い",
      "B組の方が得点のばらつきが大きい",
      "A組の最高点が高い",
      "B組の平均点が高い"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0109",
    "unit": "データの活用",
    "field": "ヒストグラム（演習）",
    "difficulty": "★★★",
    "question": "あるヒストグラムにおいて「70点以上80点未満」の階級の棒が最も高かった。このことから確実に言えることはどれか。",
    "options": [
      "平均点は75点である",
      "中央値は75点である",
      "最も人数が多い階級である",
      "最高点は80点未満である"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0110",
    "unit": "データの活用",
    "field": "ヒストグラム（演習）",
    "difficulty": "★★★",
    "question": "ヒストグラムだけを見て判断できないものはどれか。",
    "options": [
      "最も人数の多い階級",
      "おおよその分布",
      "各生徒の正確な点数",
      "度数の大小"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0111",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "ある調査で睡眠時間と翌日の集中力の相関係数が0.82であった。この結果から言えることとして最も適切なものはどれか。",
    "options": [
      "比較的強い正の相関がある",
      "強い負の相関がある",
      "相関はない",
      "睡眠時間だけで集中力が決まる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0112",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "散布図の点がばらばらに分布していた。このことから最も適切に判断できるものはどれか。",
    "options": [
      "強い正の相関がある",
      "強い負の相関がある",
      "相関が弱い可能性が高い",
      "因果関係が存在する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0113",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "ある地域で「アイスクリームの売上」と「電気使用量」に正の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "アイスクリームが電気を消費している",
      "電気使用量がアイスを作っている",
      "気温という共通要因の影響を受けている可能性がある",
      "相関があるので因果関係が証明された"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0114",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "学校全体のアンケートを行う際、昼休みに図書館にいる生徒だけを対象に調査した。この調査方法の問題点として最も適切なものはどれか。",
    "options": [
      "計算量が多い",
      "回答数が不足している",
      "標本に偏りがある",
      "無作為抽出になっている"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0115",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "全国の高校生のスマートフォン利用時間を調査したい。このとき最も適切な方法はどれか。",
    "options": [
      "1校だけを調査する",
      "都市部だけを調査する",
      "全国から無作為に抽出する",
      "自分の学校だけを調査する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0116",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "全校生徒を男女別に分類しそれぞれから一定割合を抽出する方法を何というか。",
    "options": [
      "層化抽出法",
      "系統抽出法",
      "単純抽出法",
      "全数調査"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0117",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelでセルA1の値が60以上なら「合格」60未満なら「不合格」と表示したい。最も適切な式はどれか。",
    "options": [
      "=IF(A1>=60,\"合格\",\"不合格\")",
      "=SUM(A1>=60,\"合格\",\"不合格\")",
      "=COUNT(A1>=60,\"合格\",\"不合格\")",
      "=AVERAGE(A1>=60,\"合格\",\"不合格\")"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0118",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelの数式「=$B$2+C3」を下方向にコピーしたとき変化する参照先はどれか。",
    "options": [
      "B2のみ",
      "C3のみ",
      "B2とC3の両方",
      "どちらも変化しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0119",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelで複数条件に一致するセルの個数を求める関数として最も適切なものはどれか。",
    "options": [
      "COUNT",
      "COUNTA",
      "COUNTIF",
      "COUNTIFS"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0120",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelのピボットテーブルの主な用途として最も適切なものはどれか。",
    "options": [
      "文字の装飾",
      "大量のデータの集計と分析",
      "画像の編集",
      "印刷範囲の設定"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0121",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "サイコロを100万回振るシミュレーションを行ったところ「1」が出る割合は約16.7%になった。この結果から分かることとして最も適切なものはどれか。",
    "options": [
      "シミュレーションは常に正確である",
      "試行回数を増やすと理論値に近づく傾向がある",
      "サイコロは偏っている",
      "偶然の影響は存在しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0122",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "交通量の変化を予測するシミュレーションを作成したが実際と大きく異なる結果になった。まず確認すべきことはどれか。",
    "options": [
      "ディスプレイの設定",
      "モデル化の前提条件",
      "ファイル名",
      "コンピュータの色設定"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0123",
    "unit": "データの活用",
    "field": "代表値（応用）",
    "difficulty": "★★★★",
    "question": "あるクラスの平均点は70点、中央値は78点、最頻値は82点であった。このデータの特徴として最も適切なものはどれか。",
    "options": [
      "高得点者が少数存在する",
      "低得点者が一部存在する可能性が高い",
      "全員が80点前後である",
      "データは左右対称である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0124",
    "unit": "データの活用",
    "field": "統計量（応用）",
    "difficulty": "★★★★",
    "question": "A高校とB高校の平均身長は同じであったが、A高校の標準偏差の方が大きかった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "A高校の方が身長のばらつきが大きい",
      "A高校の方が平均身長が高い",
      "B高校の方が人数が多い",
      "B高校の方が最高身長が高い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0125",
    "unit": "データの活用",
    "field": "相関（応用）",
    "difficulty": "★★★★",
    "question": "ある調査で「スマートフォンの所有台数」と「学力テストの点数」に弱い負の相関が見られた。この結果について最も適切な解釈はどれか。",
    "options": [
      "スマートフォンが学力を低下させることが証明された",
      "スマートフォンを禁止すべきである",
      "相関だけでは因果関係は判断できない",
      "データが必ず間違っている"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0126",
    "unit": "データの活用",
    "field": "相関（応用）",
    "difficulty": "★★★★",
    "question": "散布図では明らかな関係が見られないにもかかわらず、ある人が「この2つのデータには関係がある」と主張している。この主張に対する考えとして最も適切なものはどれか。",
    "options": [
      "散布図より主観を優先するべきである",
      "相関係数などを用いて客観的に分析する必要がある",
      "必ず隠れた法則が存在する",
      "データ数を減らすべきである"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0127",
    "unit": "データの活用",
    "field": "標本調査（応用）",
    "difficulty": "★★★★",
    "question": "ある企業が新商品の満足度調査を自社の公式ファンクラブ会員だけを対象に実施した。この調査結果の問題点として最も適切なものはどれか。",
    "options": [
      "調査人数が多すぎる",
      "標本が母集団を適切に表していない",
      "平均値が求められない",
      "相関係数が計算できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0128",
    "unit": "データの活用",
    "field": "標本調査（応用）",
    "difficulty": "★★★★",
    "question": "「日本の高校生の読書時間」を調査するため47都道府県から同数の学校を抽出した。この方法の利点として最も適切なものはどれか。",
    "options": [
      "必ず正確な値が求まる",
      "地域による偏りを減らせる",
      "標準偏差が小さくなる",
      "母集団を調べる必要がなくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0129",
    "unit": "データの活用",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "感染症の拡大シミュレーションにおいて現実には存在する「ワクチン接種」の要素をモデルに組み込まなかった。このとき最も考えられることはどれか。",
    "options": [
      "結果が現実と異なる可能性が高まる",
      "シミュレーションの速度だけが低下する",
      "計算結果は変わらない",
      "モデルの精度が必ず向上する"
    ],
    "answer": 1,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0130",
    "unit": "データの活用",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "ある店舗の売上予測AIが過去5年間のデータをもとに高い精度を示していたが突然予測が外れるようになった。最も考えられる理由はどれか。",
    "options": [
      "AIが故障した",
      "社会状況や利用者の行動が変化した",
      "データの件数が増えた",
      "平均値が変化した"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0131",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "ある自治体が「バスの本数を増やした地域では人口が増加した」と発表した。この発表だけでは「バスの本数が人口増加の原因である」と断定できない理由として最も適切なものはどれか。",
    "options": [
      "人口は必ず減少するから",
      "相関関係だけでは因果関係は判断できないから",
      "バスの本数は測定できないから",
      "平均値を求めていないから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0132",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "あるデータ分析で極端に大きな値が1つだけ含まれていた。この値が平均値に与える影響について最も適切な説明はどれか。",
    "options": [
      "平均値はほとんど変化しない",
      "平均値が大きく変化する可能性がある",
      "中央値だけが変化する",
      "最頻値が必ず変化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0133",
    "unit": "データの活用",
    "field": "データの収集",
    "difficulty": "★",
    "question": "数値や文字、画像などを集めて整理したものを何というか。",
    "options": [
      "モデル",
      "データ",
      "アルゴリズム",
      "プログラム"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0134",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelなどの表計算ソフトで縦方向に並ぶセルの集まりを何というか。",
    "options": [
      "行",
      "列",
      "シート",
      "ブック"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0135",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "各項目の数量を比較するのに最も適したグラフはどれか。",
    "options": [
      "棒グラフ",
      "散布図",
      "円グラフ",
      "ヒストグラム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0136",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データの最大値から最小値を引いた値を何というか。",
    "options": [
      "標準偏差",
      "中央値",
      "範囲",
      "階級値"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0137",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データの散らばりの大きさを表す代表的な指標はどれか。",
    "options": [
      "中央値",
      "標準偏差",
      "最頻値",
      "相関係数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0138",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelで最小値を求める関数はどれか。",
    "options": [
      "MAX関数",
      "MIN関数",
      "SUM関数",
      "COUNT関数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0139",
    "unit": "データの活用",
    "field": "標本調査",
    "difficulty": "★",
    "question": "母集団の一部を取り出して調べる目的として最も適切なものはどれか。",
    "options": [
      "平均値をなくすため",
      "全体の傾向を推測するため",
      "誤差を増やすため",
      "データを削減するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0140",
    "unit": "データの活用",
    "field": "シミュレーション",
    "difficulty": "★",
    "question": "実際の現象を簡略化して表現したものを何というか。",
    "options": [
      "モデル",
      "標本",
      "母集団",
      "変数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0141",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "8人の得点が 50, 55, 60, 65, 70, 75, 80, 85 点である。このとき中央値として正しいものはどれか。",
    "options": [
      "62.5点",
      "65点",
      "67.5点",
      "70点"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0142",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "10人の平均点が72点であった。合計点は何点か。",
    "options": [
      "620点",
      "700点",
      "720点",
      "740点"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0143",
    "unit": "データの活用",
    "field": "統計量（練習）",
    "difficulty": "★★",
    "question": "あるデータの最大値が95、最小値が42であった。このデータの範囲はいくつか。",
    "options": [
      "47",
      "48",
      "52",
      "53"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0144",
    "unit": "データの活用",
    "field": "グラフ（練習）",
    "difficulty": "★★",
    "question": "ある商品の売上高を4月から9月まで月ごとに比較したい。最も適したグラフはどれか。",
    "options": [
      "散布図",
      "円グラフ",
      "折れ線グラフ",
      "ヒストグラム"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0145",
    "unit": "データの活用",
    "field": "ヒストグラム（練習）",
    "difficulty": "★★",
    "question": "ヒストグラムで横軸の階級の幅を狭くした場合に起こることとして最も適切なものはどれか。",
    "options": [
      "分布の特徴が細かく分かる",
      "平均値が変わる",
      "中央値が変わる",
      "度数の合計が減る"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0146",
    "unit": "データの活用",
    "field": "散布図（練習）",
    "difficulty": "★★",
    "question": "散布図で右下がりの傾向が見られる場合、最も適切な説明はどれか。",
    "options": [
      "正の相関がある",
      "負の相関がある",
      "無相関である",
      "比例関係である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0147",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "Excelで「A1からA10までの最大値」を求める式として正しいものはどれか。",
    "options": [
      "=MAX(A1:A10)",
      "=MIN(A1:A10)",
      "=SUM(A1:A10)",
      "=COUNT(A1:A10)"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0148",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "Excelのオートフィル機能の説明として最も適切なものはどれか。",
    "options": [
      "セルの色を自動で変える機能",
      "連続したデータや数式を自動入力する機能",
      "グラフを自動作成する機能",
      "ファイルを圧縮する機能"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0149",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "あるクラスの平均点は65点である。1人が欠席していたため後日受験したところ、その生徒の得点を含めると平均点は66点になった。もともとの人数が39人であったとすると、欠席者の得点は何点か。",
    "options": [
      "95点",
      "100点",
      "105点",
      "106点"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0150",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "4人のデータ x, 10, 12, 14 の平均値が11である。xの値として正しいものはどれか。",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0151",
    "unit": "データの活用",
    "field": "統計量（演習）",
    "difficulty": "★★★",
    "question": "平均点が同じ2つのクラスを比較したところ一方の標準偏差が大きかった。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "人数が多い",
      "点数のばらつきが大きい",
      "平均点が高い",
      "中央値が高い"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0152",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "ある調査で相関係数が0.02であった。このデータについて最も適切な説明はどれか。",
    "options": [
      "強い正の相関がある",
      "強い負の相関がある",
      "ほとんど相関がない",
      "因果関係がある"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0153",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "「エアコンの販売台数」と「熱中症患者数」に正の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "エアコンが熱中症を増やしている",
      "熱中症がエアコンを作っている",
      "気温などの共通要因がある可能性がある",
      "調査が間違っている"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0154",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "全国の高校生の意見を調査するために進学校だけを対象にアンケートを行った。この調査の問題点として最も適切なものはどれか。",
    "options": [
      "調査人数が少ない",
      "標本に偏りがある",
      "平均値が求められない",
      "データ量が多すぎる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0155",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "標本調査において標本数を増やすことの利点として最も適切なものはどれか。",
    "options": [
      "調査時間が短くなる",
      "母集団が不要になる",
      "全数調査になる",
      "誤差が小さくなる傾向がある"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0156",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelのセルA1に80、B1に90が入力されている。セルC1に=A1*0.4+B1*0.6を入力したとき、表示される値として正しいものはどれか。",
    "options": [
      "84",
      "85",
      "86",
      "88"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0157",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelで条件に一致するセルの個数を数える関数はどれか。",
    "options": [
      "COUNTIF関数",
      "AVERAGE関数",
      "MAX関数",
      "SUM関数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0158",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "サイコロをコンピュータ上で10回振る実験と100万回振る実験を比較した場合、100万回の方が理論値に近づきやすい理由として最も適切なものはどれか。",
    "options": [
      "偶然の影響が小さくなるため",
      "計算速度が速くなるため",
      "乱数が不要になるため",
      "標本が不要になるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0159",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "人口推移のシミュレーションを行う際、出生率や死亡率を設定する目的として最も適切なものはどれか。",
    "options": [
      "見た目を良くするため",
      "モデルを現実に近づけるため",
      "計算量を減らすため",
      "乱数を減らすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0160",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "A市とB市の平均気温はどちらも20℃であった。しかし、A市の標準偏差はB市より大きかった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "A市の方が気温変化が大きい",
      "A市の方が暑い",
      "B市の方が寒い",
      "A市の平均気温が高い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0161",
    "unit": "データの活用",
    "field": "相関（応用）",
    "difficulty": "★★★★",
    "question": "ある調査で「スマートフォンの利用時間」と「睡眠時間」に負の相関が見られた。この結果から直ちに結論づけてはいけないものはどれか。",
    "options": [
      "2つのデータに関係がある可能性",
      "共通の要因が存在する可能性",
      "スマートフォンが睡眠不足の唯一の原因であること",
      "相関の強さ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0162",
    "unit": "データの活用",
    "field": "統計量（応用）",
    "difficulty": "★★★★",
    "question": "あるクラスの平均点は70点であった。極端に高い点数の生徒が転校した結果、中央値は変わらなかったが平均点は低下した。このことから中央値について言えることはどれか。",
    "options": [
      "外れ値の影響を受けやすい",
      "外れ値の影響を受けにくい",
      "平均値と常に等しい",
      "最頻値と常に等しい"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0163",
    "unit": "データの活用",
    "field": "表計算（応用）",
    "difficulty": "★★★★",
    "question": "Excelで大量の販売データを地域別・商品別に集計したい。このとき最も適した機能はどれか。",
    "options": [
      "条件付き書式",
      "ピボットテーブル",
      "オートフィル",
      "改ページプレビュー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0164",
    "unit": "データの活用",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "避難経路のシミュレーションを作成する際、現実には存在する障害物をモデルに含めなかった場合、最も起こりやすいことはどれか。",
    "options": [
      "処理速度が低下する",
      "結果の信頼性が低下する",
      "計算結果は変化しない",
      "平均値が変化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0165",
    "unit": "データの活用",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "あるテストの点数分布において平均値が中央値より大きかった。このとき最も考えられる分布の特徴はどれか。",
    "options": [
      "低得点側に外れ値が存在する",
      "高得点側に外れ値が存在する",
      "左右対称である",
      "全員が同じ点数である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0166",
    "unit": "データの活用",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "ある学校で「読書時間」と「国語の成績」の散布図を作成したところ相関係数は0.75であった。この結果について最も適切な説明はどれか。",
    "options": [
      "読書時間を増やせば必ず成績が上がる",
      "比較的強い正の相関がある",
      "因果関係が証明された",
      "無相関である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0167",
    "unit": "データの活用",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "あるアンケートでは回答率が20%であった。この調査結果を解釈する際に特に注意すべき点はどれか。",
    "options": [
      "平均値が計算できない可能性",
      "回答者に偏りが生じている可能性",
      "標準偏差が求められない可能性",
      "グラフを作成できない可能性"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0168",
    "unit": "データの活用",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "感染症拡大シミュレーションの結果が実際と異なった。原因として最も適切なものはどれか。",
    "options": [
      "コンピュータの性能不足のみ",
      "乱数を使ったこと",
      "モデル化の前提条件が現実と異なっていた可能性",
      "平均値を求めていないこと"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0169",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "データを値の大きさの順に並べたとき最初の25%と残り75%を分ける値を何というか。",
    "options": [
      "第1四分位数",
      "中央値",
      "最頻値",
      "平均値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0170",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "データを値の大きさの順に並べたとき最後の25%と残り75%を分ける値を何というか。",
    "options": [
      "中央値",
      "第3四分位数",
      "最小値",
      "最大値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0171",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "箱ひげ図において箱の中央の線が表すものは何か。",
    "options": [
      "平均値",
      "最頻値",
      "中央値",
      "最大値"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0172",
    "unit": "データの活用",
    "field": "データの整理",
    "difficulty": "★",
    "question": "箱ひげ図における「箱」の長さが長い場合、何を意味するか。",
    "options": [
      "データ数が多い",
      "データのばらつきが大きい",
      "平均値が大きい",
      "外れ値が多い"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0173",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "複数のデータを小さい順に並べたとき中央付近50%のデータの散らばりを表す値を何というか。",
    "options": [
      "範囲",
      "四分位範囲",
      "標準偏差",
      "相関係数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0174",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelでセルの内容を昇順や降順に並べ替える機能を何というか。",
    "options": [
      "並列化",
      "ソート",
      "フィルター",
      "ピボット"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0175",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "Excelで条件に合うデータだけを表示する機能を何というか。",
    "options": [
      "フィルター",
      "ソート",
      "グラフ化",
      "絶対参照"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0176",
    "unit": "データの活用",
    "field": "シミュレーション",
    "difficulty": "★",
    "question": "実際の現象の特徴を抜き出して単純化したものを利用する理由として最も適切なものはどれか。",
    "options": [
      "計算を不要にするため",
      "現象を分析しやすくするため",
      "誤差を完全になくすため",
      "データ量をゼロにするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0177",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "10人の点数の平均が68点であった。そのうち9人の合計点が594点だったとき、残り1人の点数はいくつか。",
    "options": [
      "74点",
      "80点",
      "86点",
      "92点"
    ],
    "answer": 3,
    "correctCount": 1,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0178",
    "unit": "データの活用",
    "field": "代表値（練習）",
    "difficulty": "★★",
    "question": "3, 5, 8, 9, x の中央値が8である。このとき x として考えられない値はどれか。",
    "options": [
      "7",
      "8",
      "10",
      "12"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0179",
    "unit": "データの活用",
    "field": "データの整理（練習）",
    "difficulty": "★★",
    "question": "ある箱ひげ図で第1四分位数が20、第3四分位数が50であった。このデータの四分位範囲はいくつか。",
    "options": [
      "20",
      "25",
      "30",
      "35"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0180",
    "unit": "データの活用",
    "field": "グラフ（練習）",
    "difficulty": "★★",
    "question": "ある商品の市場シェアをA社・B社・C社・D社で比較したい。このとき最も適切なグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "散布図",
      "円グラフ",
      "ヒストグラム"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0181",
    "unit": "データの活用",
    "field": "散布図（練習）",
    "difficulty": "★★",
    "question": "散布図上の点が左上から右下に分布している場合、相関係数はどのような値になることが予想されるか。",
    "options": [
      "0に近い値",
      "正の値",
      "負の値",
      "必ず1"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0182",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "ExcelでセルA1からA20までのうち80以上のデータの個数を数えるのに最も適した関数はどれか。",
    "options": [
      "SUM関数",
      "COUNTIF関数",
      "AVERAGE関数",
      "MAX関数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0183",
    "unit": "データの活用",
    "field": "表計算（練習）",
    "difficulty": "★★",
    "question": "Excelで「東京都」と入力された行だけを表示したい。このとき使用する機能として最も適切なものはどれか。",
    "options": [
      "ピボットテーブル",
      "オートフィル",
      "フィルター",
      "条件付き書式"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0184",
    "unit": "データの活用",
    "field": "標本調査（練習）",
    "difficulty": "★★",
    "question": "全校生徒を出席番号順に並べ、10人おきに抽出する方法を何というか。",
    "options": [
      "無作為抽出",
      "層化抽出",
      "系統抽出",
      "全数調査"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0185",
    "unit": "データの活用",
    "field": "標本調査（練習）",
    "difficulty": "★★",
    "question": "ある学校の昼休みの利用施設を調査するため毎日図書館前でアンケートを取った。この調査の問題点として最も適切なものはどれか。",
    "options": [
      "調査期間が長すぎる",
      "調査対象に偏りがある",
      "無作為抽出である",
      "母集団が大きすぎる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0186",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "A組40人の平均点は72点であった。B組30人の平均点は68点であった。A組とB組を合わせた70人の平均点として正しいものはどれか。",
    "options": [
      "69.7点",
      "70.0点",
      "70.3点",
      "70.8点"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0187",
    "unit": "データの活用",
    "field": "統計量（演習）",
    "difficulty": "★★★",
    "question": "平均値が同じ2つのデータ群について一方の箱ひげ図の箱が短かった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "データ数が多い",
      "ばらつきが小さい",
      "中央値が大きい",
      "最大値が大きい"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0188",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "相関係数が0.95であった場合、最も適切な説明はどれか。",
    "options": [
      "非常に強い正の相関がある",
      "強い負の相関がある",
      "相関がない",
      "因果関係が証明された"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0189",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "「運動時間」と「体力テストの得点」に正の相関が見られた。この結果から直ちに言えないことはどれか。",
    "options": [
      "両者には関係がある可能性がある",
      "運動時間だけが得点を決定している",
      "他の要因が存在する可能性がある",
      "散布図は右上がりの傾向を示す可能性がある"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0190",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelのセルA1に5、A2に8が入力されている。セルA3に =A1^2+A2 を入力したときの値はいくつか。",
    "options": [
      "29",
      "31",
      "33",
      "35"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0191",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelの数式「=B$2+$C3」を右方向にコピーしたとき変化する参照先はどれか。",
    "options": [
      "B列のみ",
      "C列のみ",
      "B2とC3の両方",
      "どちらも変化しない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0192",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelで複数の条件を満たすデータの合計を求める関数として最も適切なものはどれか。",
    "options": [
      "SUMIF関数",
      "SUMIFS関数",
      "COUNTIFS関数",
      "AVERAGE関数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0193",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "ある店舗の来客数シミュレーションを作成する際、曜日ごとの違いを考慮しなかった場合、最も考えられることはどれか。",
    "options": [
      "結果が現実とずれる可能性がある",
      "処理速度だけが低下する",
      "計算結果は変わらない",
      "平均値が0になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0194",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "コンピュータシミュレーションを用いる利点として最も適切なものはどれか。",
    "options": [
      "現実では困難な実験を繰り返し行える",
      "必ず正しい結果が得られる",
      "誤差を完全になくせる",
      "データ収集が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0195",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "ある学校でスマートフォンの利用時間が長い生徒ほど学力が低い傾向が見られた。この結果を分析する際に最も重要な視点はどれか。",
    "options": [
      "平均値だけを見ること",
      "因果関係と相関関係を区別すること",
      "標本数を減らすこと",
      "散布図を使わないこと"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0196",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "あるアンケートの回答者の90%が「満足」と回答した。しかし回答率は10%であった。この結果について最も適切な解釈はどれか。",
    "options": [
      "全体の90%が満足していると断定できる",
      "回答しなかった人の意見も考慮する必要がある",
      "調査は必ず正しい",
      "母集団は存在しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0197",
    "unit": "データの活用",
    "field": "統計量（応用）",
    "difficulty": "★★★★",
    "question": "平均値が同じ2つのクラスのうち一方は標準偏差が極めて小さかった。このクラスの特徴として最も適切なものはどれか。",
    "options": [
      "得点が平均点付近に集中している",
      "最高点が極端に高い",
      "人数が多い",
      "中央値が低い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0198",
    "unit": "データの活用",
    "field": "標本調査（応用）",
    "difficulty": "★★★★",
    "question": "日本全国の高校生の生活習慣を調査するために都市部の学校のみを対象にした。この調査で最も問題となる点はどれか。",
    "options": [
      "データ量が多い",
      "標本の代表性が不足している",
      "平均値が求められない",
      "グラフが作れない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0199",
    "unit": "データの活用",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "ある避難シミュレーションで実際には閉鎖されている通路を通行可能として設定した。このシミュレーションの問題点として最も適切なものはどれか。",
    "options": [
      "乱数が不足している",
      "モデルが現実を正しく表していない",
      "計算速度が遅い",
      "標本数が少ない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0200",
    "unit": "データの活用",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "ある地域について「コンビニの店舗数」と「人口」の間に強い正の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "コンビニが人口を増やしている",
      "人口がコンビニを建設している",
      "相関があることと因果関係があることは別である",
      "データに誤りがある"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0201",
    "unit": "データの活用",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "あるシミュレーションでは過去10年間のデータをもとに将来予測を行ったが社会情勢の急変によって予測が外れた。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "シミュレーションは無意味である",
      "モデルには適用範囲や限界がある",
      "データ量が多すぎた",
      "平均値を用いるべきではない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0202",
    "unit": "データの活用",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "あるクラスのテスト結果について平均値は70点、中央値は70点、最頻値は70点であった。このことから必ず言えることはどれか。",
    "options": [
      "全員が70点である",
      "70点の生徒が少なくとも1人は存在する",
      "点数は左右対称に分布している",
      "外れ値が存在しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0203",
    "unit": "データの活用",
    "field": "大学入試レベル",
    "difficulty": "★★★★★",
    "question": "大規模な標本調査を行う際、標本数を増やしても偏りのある抽出方法を続けた場合、どのような問題が残るか。",
    "options": [
      "標本誤差が増える",
      "調査コストが下がる",
      "偏りによる誤差は解消されない",
      "相関係数が0になる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0204",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "あるクラス40人の数学の平均点は72点であった。1人が採点ミスで、本来より8点低く記録されていたことが分かった。正しい平均点はいくつか。",
    "options": [
      "72.0点",
      "72.2点",
      "72.4点",
      "72.8点"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0205",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "5人のテストの点数は60点、65点、70点、75点、x点であり、平均点は74点であった。xの値として正しいものはどれか。",
    "options": [
      "90点",
      "95点",
      "100点",
      "105点"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0206",
    "unit": "データの活用",
    "field": "中央値（演習）",
    "difficulty": "★★★",
    "question": "7個のデータを小さい順に並べたところ、中央値が18であった。中央値として正しい説明はどれか。",
    "options": [
      "4番目の値が18である",
      "3番目の値が18である",
      "平均値が18である",
      "最頻値が18である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0207",
    "unit": "データの活用",
    "field": "最頻値（演習）",
    "difficulty": "★★★",
    "question": "あるアンケートの回答結果が「A,A,B,C,C,C,D,D」であった。このデータの最頻値として正しいものはどれか。",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0208",
    "unit": "データの活用",
    "field": "四分位数（演習）",
    "difficulty": "★★★",
    "question": "データを並べたところ、第1四分位数が15、第3四分位数が35であった。四分位範囲はいくつか。",
    "options": [
      "20",
      "25",
      "30",
      "50"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0209",
    "unit": "データの活用",
    "field": "箱ひげ図（演習）",
    "difficulty": "★★★",
    "question": "2つのクラスの箱ひげ図を比較したところ、A組の箱の長さがB組より短かった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "A組の平均点が高い",
      "A組の人数が多い",
      "A組のデータの散らばりが小さい",
      "A組の最高点が高い"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0210",
    "unit": "データの活用",
    "field": "散布図（演習）",
    "difficulty": "★★★",
    "question": "散布図を作成したところ、点が右上がりに並んでいた。このとき最も適切な説明はどれか。",
    "options": [
      "負の相関がある",
      "正の相関がある",
      "相関はない",
      "比例していない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0211",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "相関係数が-0.82であった。このデータについて最も適切な説明はどれか。",
    "options": [
      "強い正の相関がある",
      "弱い相関がある",
      "強い負の相関がある",
      "相関がない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0212",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "アイスクリームの売上と熱中症患者数に正の相関が見られた。この結果から考えられる共通要因として最も適切なものはどれか。",
    "options": [
      "人口",
      "気温",
      "湿度",
      "店舗数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0213",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "ある調査で相関係数が0.01であった。この結果として最も適切なものはどれか。",
    "options": [
      "非常に強い相関がある",
      "強い負の相関がある",
      "ほとんど相関がない",
      "比例関係がある"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0214",
    "unit": "データの活用",
    "field": "ヒストグラム（演習）",
    "difficulty": "★★★",
    "question": "あるヒストグラムで、40点以上50点未満の階級の度数が12であった。この意味として正しいものはどれか。",
    "options": [
      "40点以上50点以下の人数が12人である",
      "40点以上50点未満の人数が12人である",
      "50点以上の人数が12人である",
      "40点未満の人数が12人である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0215",
    "unit": "データの活用",
    "field": "ヒストグラム（演習）",
    "difficulty": "★★★",
    "question": "同じデータを用いてヒストグラムを作成する際、階級幅を小さくするとどうなるか。",
    "options": [
      "分布の細かな特徴が分かりやすくなる",
      "平均値が変化する",
      "中央値が変化する",
      "データ数が減少する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0216",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "ある市の住民の意見を調査するため、市役所を訪れた人だけにアンケートを行った。この調査の問題点として最も適切なものはどれか。",
    "options": [
      "データ量が少ない",
      "回答時間が長い",
      "標本に偏りがある",
      "人数が多すぎる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0217",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "母集団全体を調査せず、一部を取り出して調査する利点として最も適切なものはどれか。",
    "options": [
      "誤差が完全になくなる",
      "短時間・低コストで調査できる",
      "必ず正確な結果になる",
      "データ分析が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0218",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "1000人の生徒から無作為に100人を抽出して調査した。この100人を何というか。",
    "options": [
      "母集団",
      "標本",
      "代表値",
      "階級"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0219",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "サイコロを100回振るシミュレーションを1000回振るシミュレーションに変更した場合、最も期待されることはどれか。",
    "options": [
      "平均値が必ず3になる",
      "理論値に近づきやすくなる",
      "乱数が不要になる",
      "結果が毎回同じになる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0220",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "避難シミュレーションを作成する際、人の歩く速さを全員同じと仮定した。この仮定による問題点として最も適切なものはどれか。",
    "options": [
      "計算ができなくなる",
      "モデルが現実と異なる可能性がある",
      "乱数が発生しない",
      "処理時間が長くなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0221",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "コンピュータシミュレーションを用いる目的として最も適切なものはどれか。",
    "options": [
      "現実では難しい条件を試すため",
      "計算を不要にするため",
      "必ず正解を得るため",
      "データを削除するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0222",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelでセルA1からA10の平均値を求める式として正しいものはどれか。",
    "options": [
      "=SUM(A1:A10)",
      "=COUNT(A1:A10)",
      "=AVERAGE(A1:A10)",
      "=MAX(A1:A10)"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0223",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "セルA1に20、B1に30が入力されている。セルC1に「=A1+B1*2」を入力した場合、表示される値はいくつか。",
    "options": [
      "80",
      "100",
      "60",
      "90"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0224",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelでセルA1に「=$B$2」と入力し、別のセルへコピーした場合、参照先はどうなるか。",
    "options": [
      "行だけ変化する",
      "列だけ変化する",
      "B2のまま変化しない",
      "コピーできない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0225",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "Excelで「80点以上の人数」を数えたい場合に最も適した関数はどれか。",
    "options": [
      "COUNT関数",
      "SUM関数",
      "COUNTIF関数",
      "IF関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0226",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "ある学校で読書時間と国語の成績を調べたところ、相関係数は0.68であった。この結果として最も適切なものはどれか。",
    "options": [
      "比較的強い正の相関がある",
      "強い負の相関がある",
      "全く相関がない",
      "因果関係が証明された"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0227",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "平均値が同じ2つのクラスについて、一方の標準偏差が大きかった。このことから言えることはどれか。",
    "options": [
      "人数が多い",
      "データのばらつきが大きい",
      "中央値が高い",
      "平均値が異なる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0228",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "あるアンケートでは、インターネットで回答した人の90%が賛成した。しかし、高齢者の回答はほとんど含まれていなかった。この調査結果について最も適切な説明はどれか。",
    "options": [
      "賛成意見が全国の意見である",
      "回答者に偏りがある可能性がある",
      "回答数が十分である",
      "平均値を求めるべきである"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0229",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "ある商品の売上データを分析したところ、休日だけ売上が大きく増加していた。このような特徴を考慮せずに平均値だけで予測すると、どのような問題が生じる可能性があるか。",
    "options": [
      "予測精度が低下する",
      "標準偏差が0になる",
      "データ量が減少する",
      "相関係数が1になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0230",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "テストの平均点が70点であっても、全員が70点とは限らない。この理由として最も適切なものはどれか。",
    "options": [
      "平均値はデータ全体の代表値の一つに過ぎないから",
      "中央値が常に平均値より大きいから",
      "最頻値が存在しないから",
      "標準偏差が0だから"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0231",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "SNSの利用時間と学力の間に負の相関が見られた。この結果だけでは断定できないことはどれか。",
    "options": [
      "2つのデータに関係がある可能性",
      "他の要因が存在する可能性",
      "SNSが学力低下の原因であること",
      "散布図が右下がりになる可能性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0232",
    "unit": "データの活用",
    "field": "モデル化（演習）",
    "difficulty": "★★★",
    "question": "交通渋滞を予測するシミュレーションで、事故や工事を考慮しなかった。この場合に最も起こりやすいことはどれか。",
    "options": [
      "予測結果が実際と異なる可能性がある",
      "計算速度が上がる",
      "平均値が変化する",
      "データ量が増える"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0233",
    "unit": "データの活用",
    "field": "モデル化（演習）",
    "difficulty": "★★★",
    "question": "現実の現象をモデル化するとき、不要な要素を取り除く主な理由として最も適切なものはどれか。",
    "options": [
      "データを改ざんするため",
      "分析しやすくするため",
      "誤差を増やすため",
      "乱数をなくすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0234",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "あるクラス36人の英語の平均点は68点であった。1人の点数を誤って6点高く入力していたことが分かり、修正したところ、平均点は何点になるか。",
    "options": [
      "67.5点",
      "67.7点",
      "67.8点",
      "67.9点"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0235",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "5個のデータ a, 10, 12, 14, 16 の平均値が14である。このとき、a の値として正しいものはどれか。",
    "options": [
      "16",
      "18",
      "20",
      "22"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0236",
    "unit": "データの活用",
    "field": "代表値（演習）",
    "difficulty": "★★★",
    "question": "7人のテストの点数を小さい順に並べたところ、中央値が72点であった。このことから必ず言えることはどれか。",
    "options": [
      "4番目の人の点数が72点である",
      "平均点が72点である",
      "最頻値が72点である",
      "72点以上が4人いる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0237",
    "unit": "データの活用",
    "field": "統計量（演習）",
    "difficulty": "★★★",
    "question": "A組とB組の平均点はどちらも70点であったが、A組の標準偏差の方が大きかった。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "A組の人数の方が多い",
      "A組の得点のばらつきが大きい",
      "A組の中央値の方が高い",
      "A組の最高点が70点である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0238",
    "unit": "データの活用",
    "field": "箱ひげ図（演習）",
    "difficulty": "★★★",
    "question": "箱ひげ図において、第1四分位数が20、中央値が35、第3四分位数が50である。このデータのうち、中央50%のデータが含まれる範囲として正しいものはどれか。",
    "options": [
      "20～35",
      "35～50",
      "20～50",
      "0～50"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0239",
    "unit": "データの活用",
    "field": "箱ひげ図（演習）",
    "difficulty": "★★★",
    "question": "箱ひげ図を比較したところ、2つの集団の中央値は同じだったが、一方の箱の長さが長かった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "人数が多い",
      "データの散らばりが大きい",
      "最大値が小さい",
      "平均値が大きい"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0240",
    "unit": "データの活用",
    "field": "ヒストグラム（演習）",
    "difficulty": "★★★",
    "question": "あるヒストグラムで、階級幅を広く設定しすぎた場合に起こりやすいことはどれか。",
    "options": [
      "細かな分布の特徴が見えにくくなる",
      "平均値が変化する",
      "データ数が増える",
      "中央値が変化する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0241",
    "unit": "データの活用",
    "field": "ヒストグラム（演習）",
    "difficulty": "★★★",
    "question": "50人分のデータを10点刻みの階級で整理したところ、30点以上40点未満の度数が8であった。このことが表している内容として最も適切なものはどれか。",
    "options": [
      "30点以上40点以下が8人",
      "30点未満が8人",
      "30点以上40点未満が8人",
      "40点以上が8人"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0242",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "相関係数が0.92である2つのデータについて、最も適切な説明はどれか。",
    "options": [
      "非常に強い正の相関がある",
      "非常に強い負の相関がある",
      "相関はほとんどない",
      "比例関係が必ず成り立つ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0243",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "ある都市について、アイスの売上とプール利用者数に正の相関が見られた。この結果から考えられる第三の要因として最も適切なものはどれか。",
    "options": [
      "人口密度",
      "気温",
      "店舗数",
      "降水量"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0244",
    "unit": "データの活用",
    "field": "相関（演習）",
    "difficulty": "★★★",
    "question": "「勉強時間」と「テストの順位」に負の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "勉強時間が長いほど順位の数字が小さくなる傾向がある",
      "勉強時間が長いほど順位の数字が大きくなる傾向がある",
      "相関は存在しない",
      "勉強時間と順位は比例する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0245",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "全国の高校生のスマートフォン利用時間を調査するため、ある1校のみを対象にした。この調査の問題点として最も適切なものはどれか。",
    "options": [
      "回答数が多すぎる",
      "代表性に欠ける",
      "平均値が求められない",
      "データを整理できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0246",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "母集団から偏りなく標本を抽出するために、全員が同じ確率で選ばれる方法を何というか。",
    "options": [
      "系統抽出",
      "層化抽出",
      "無作為抽出",
      "全数調査"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0247",
    "unit": "データの活用",
    "field": "標本調査（演習）",
    "difficulty": "★★★",
    "question": "ある学校でアンケートを行ったところ、回答率が15%であった。この結果を解釈する際に注意すべき点として最も適切なものはどれか。",
    "options": [
      "平均値が求められない",
      "未回答者の意見が反映されていない可能性がある",
      "標本が存在しない",
      "相関係数が計算できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0248",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "コンピュータシミュレーションで乱数を用いる主な理由として最も適切なものはどれか。",
    "options": [
      "計算速度を上げるため",
      "現実の偶然性を再現するため",
      "データ量を減らすため",
      "平均値を求めるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0249",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "サイコロを振るシミュレーションを10回行う場合と10000回行う場合を比べたとき、10000回の方が理論値に近づきやすい理由として最も適切なものはどれか。",
    "options": [
      "乱数の種類が増えるため",
      "偶然による偏りが小さくなるため",
      "計算回数が減るため",
      "誤差がなくなるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0250",
    "unit": "データの活用",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "ある感染症の拡大予測モデルで、人の移動を考慮しなかった場合、最も起こりやすいことはどれか。",
    "options": [
      "モデルの結果が現実と異なる可能性が高まる",
      "計算が不可能になる",
      "標準偏差が求められなくなる",
      "データ量が不足する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0251",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelでA1:A50のセルのうち、50点以上80点未満の人数を数えたい。最も適切な関数はどれか。",
    "options": [
      "COUNT関数",
      "COUNTIF関数",
      "COUNTIFS関数",
      "SUMIF関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0252",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelでセルA1に5、B1に3を入力し、C1に「=(A1+B1)*2」を入力した。表示される値はいくつか。",
    "options": [
      "11",
      "13",
      "16",
      "18"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0253",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "ExcelでセルA1に「=B1+C1」と入力し、1行下へコピーしたとき、数式はどのように変化するか。",
    "options": [
      "=B1+C1",
      "=B2+C2",
      "=C1+D1",
      "=B1+C2"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0254",
    "unit": "データの活用",
    "field": "表計算（演習）",
    "difficulty": "★★★",
    "question": "セルA1に100、セルB1に25%が入力されている。セルC1に「=A1*B1」を入力したときの値として正しいものはどれか。",
    "options": [
      "4",
      "25",
      "40",
      "75"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0255",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "ある学校で、通学時間と遅刻回数の散布図を作成したところ、右上がりの傾向が見られた。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "負の相関がある",
      "正の相関がある",
      "無相関である",
      "因果関係が証明された"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0256",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "2つのクラスの平均点が同じであっても、標準偏差を調べる理由として最も適切なものはどれか。",
    "options": [
      "人数を求めるため",
      "データのばらつきを比較するため",
      "中央値を求めるため",
      "最大値を求めるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0257",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "ある地域について、人口とコンビニの店舗数には強い正の相関が見られた。この結果だけから断定できないことはどれか。",
    "options": [
      "人口が多い地域ほどコンビニが多い傾向がある",
      "両者には関係がある可能性がある",
      "人口がコンビニの数を直接決定している",
      "散布図が右上がりになる可能性がある"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0258",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "ある商品の売上予測モデルを作成したところ、実際の売上と大きく異なった。この原因として最も考えられるものはどれか。",
    "options": [
      "モデル化の前提条件が不適切だった",
      "表計算ソフトを使った",
      "平均値を利用した",
      "データを整理した"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0259",
    "unit": "データの活用",
    "field": "データ分析（演習）",
    "difficulty": "★★★",
    "question": "平均値が80点のクラスと平均値が80点のクラスがある。一方のクラスには100点と0点の生徒が多く含まれていた。このとき、2つのクラスを区別するのに役立つ指標として最も適切なものはどれか。",
    "options": [
      "人数",
      "標準偏差",
      "中央値",
      "最頻値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0260",
    "unit": "データの活用",
    "field": "代表値（応用）",
    "difficulty": "★★★★",
    "question": "あるクラス40人の数学の平均点は70点であった。その後、欠席していた1人が追試を受けた結果、クラス全体41人の平均点は71点になった。追試を受けた生徒の得点として正しいものはどれか。",
    "options": [
      "90点",
      "100点",
      "111点",
      "112点"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0261",
    "unit": "データの活用",
    "field": "代表値（応用）",
    "difficulty": "★★★★",
    "question": "A組20人の平均点は75点、B組30人の平均点は65点である。A組とB組を合わせた平均点として最も近いものはどれか。",
    "options": [
      "67点",
      "69点",
      "71点",
      "73点"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0262",
    "unit": "データの活用",
    "field": "統計量（応用）",
    "difficulty": "★★★★",
    "question": "2つのクラスA・Bの平均点はどちらも70点である。A組はほとんどの生徒が65～75点に集中しているが、B組は30点台から100点近くまで幅広く分布している。このとき、B組について成り立つと考えられることはどれか。",
    "options": [
      "中央値が必ず高い",
      "標準偏差が大きい",
      "人数が多い",
      "最頻値が存在しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0263",
    "unit": "データの活用",
    "field": "統計量（応用）",
    "difficulty": "★★★★",
    "question": "あるデータについて、外れ値を1つ削除したところ、中央値は変化しなかったが平均値は大きく変化した。このことから外れ値について最も適切に説明したものはどれか。",
    "options": [
      "中央値に強い影響を与えていた",
      "平均値に大きな影響を与えていた",
      "最頻値を変化させていた",
      "標本数を増やしていた"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0264",
    "unit": "データの活用",
    "field": "箱ひげ図（応用）",
    "difficulty": "★★★★",
    "question": "2つの箱ひげ図を比較したところ、中央値は同じであるが、一方の箱だけが著しく長かった。このとき、その箱ひげ図について最も適切な説明はどれか。",
    "options": [
      "平均値が高い",
      "中央50%のデータの散らばりが大きい",
      "最大値が小さい",
      "人数が少ない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0265",
    "unit": "データの活用",
    "field": "相関（応用）",
    "difficulty": "★★★★",
    "question": "ある調査で「ゲーム時間」と「視力」の間に負の相関が見られた。この結果から直ちに結論づけることができないものはどれか。",
    "options": [
      "2つの変数に関係がある可能性",
      "ゲーム時間が長い人ほど視力が低い傾向がある",
      "ゲーム時間だけが視力低下の原因である",
      "散布図が右下がりになる可能性"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0266",
    "unit": "データの活用",
    "field": "相関（応用）",
    "difficulty": "★★★★",
    "question": "ある都市では、夏になるとアイスクリームの売上と電気使用量の両方が増加する。このとき、両者の間に正の相関が見られた理由として最も適切なものはどれか。",
    "options": [
      "アイスクリームが電気を消費しているため",
      "電気がアイスクリームを生産しているため",
      "気温という共通要因が影響しているため",
      "調査が間違っているため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0267",
    "unit": "データの活用",
    "field": "相関（応用）",
    "difficulty": "★★★★",
    "question": "散布図を作成したところ、相関係数が0.00に近い値となった。この結果から言えることとして最も適切なものはどれか。",
    "options": [
      "必ず関係が存在しない",
      "線形の関係がほとんど見られない",
      "因果関係がないことが証明された",
      "データ数が不足している"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0268",
    "unit": "データの活用",
    "field": "標本調査（応用）",
    "difficulty": "★★★★",
    "question": "ある県の高校生の読書時間を調査するため、図書委員だけを対象にアンケートを行った。この結果を県全体の傾向として利用する際の問題点として最も適切なものはどれか。",
    "options": [
      "回答数が多すぎる",
      "抽出方法に偏りがある",
      "平均値が求められない",
      "無作為抽出になっている"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0269",
    "unit": "データの活用",
    "field": "標本調査（応用）",
    "difficulty": "★★★★",
    "question": "標本調査を行う際、標本数を増やしても調査対象の選び方に偏りがある場合、どうなると考えられるか。",
    "options": [
      "誤差は必ず小さくなる",
      "偏りは解消される",
      "偏った結果になる可能性が残る",
      "全数調査と同じ結果になる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0270",
    "unit": "データの活用",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "避難シミュレーションで『全員が同じ速さで移動する』と仮定した。このシミュレーション結果を利用する際の注意点として最も適切なものはどれか。",
    "options": [
      "現実の状況を完全に再現しているとは限らない",
      "シミュレーションは意味がない",
      "計算速度が遅くなる",
      "誤差が必ず0になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0271",
    "unit": "データの活用",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "ある感染症の拡大モデルで、人の移動やワクチン接種率を考慮しなかった場合、最も起こりやすいことはどれか。",
    "options": [
      "計算結果が現実と大きく異なる可能性がある",
      "コンピュータが停止する",
      "乱数が使えなくなる",
      "標準偏差が大きくなる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0272",
    "unit": "データの活用",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "コンピュータシミュレーションを100回実行した結果と10000回実行した結果では、後者の方が理論値に近づきやすい。この理由として最も適切なものはどれか。",
    "options": [
      "偶然による偏りの影響が小さくなるため",
      "計算式が変わるため",
      "データ量が減るため",
      "相関係数が高くなるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0273",
    "unit": "データの活用",
    "field": "表計算（応用）",
    "difficulty": "★★★★",
    "question": "ExcelでA列に都道府県名、B列に売上データが入力されている。同じ都道府県ごとの売上合計を自動集計するのに最も適した機能はどれか。",
    "options": [
      "条件付き書式",
      "ピボットテーブル",
      "オートフィル",
      "入力規則"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0274",
    "unit": "データの活用",
    "field": "表計算（応用）",
    "difficulty": "★★★★",
    "question": "Excelで大量のデータを分析する際、元の表を変更せずに条件ごとの集計結果を動的に表示したい。この目的に最も適した機能はどれか。",
    "options": [
      "ピボットテーブル",
      "グラフ機能",
      "絶対参照",
      "セル結合"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0275",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "ある学校で『家庭学習時間』と『テストの得点』を調査したところ、強い正の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "家庭学習時間だけが得点を決めている",
      "家庭学習時間と得点には関係がある可能性がある",
      "因果関係が証明された",
      "家庭学習をすれば必ず高得点になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0276",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "平均点が同じ2つのクラスを比較する際、学力のばらつきを比較するために最も適した指標はどれか。",
    "options": [
      "最頻値",
      "中央値",
      "標準偏差",
      "範囲"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0277",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "ある企業が新商品の満足度調査をインターネット上で実施したところ、回答者の95%が『満足』と回答した。しかし、回答率は8%であった。この結果について最も慎重に検討すべき点はどれか。",
    "options": [
      "平均値の計算方法",
      "回答者の偏り",
      "グラフの種類",
      "標準偏差の値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0278",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "ある地域で『コンビニの数』と『人口』に強い正の相関が見られた。この結果から必ずしも言えないことはどれか。",
    "options": [
      "人口が多い地域ほどコンビニが多い傾向がある",
      "両者の間に何らかの関係がある可能性がある",
      "人口の増加がコンビニの数を直接決定している",
      "散布図が右上がりになる可能性がある"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0279",
    "unit": "データの活用",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "SNSの利用時間と睡眠時間を調べたところ、相関係数が−0.75であった。この結果について最も適切な説明はどれか。",
    "options": [
      "比較的強い負の相関がある",
      "比較的強い正の相関がある",
      "相関はほとんどない",
      "因果関係が証明された"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0280",
    "unit": "データの活用",
    "field": "モデル化（応用）",
    "difficulty": "★★★★",
    "question": "台風の進路予測モデルは毎年更新されている。その理由として最も適切なものはどれか。",
    "options": [
      "コンピュータの性能を下げるため",
      "現実のデータや条件の変化を反映するため",
      "乱数をなくすため",
      "標本数を減らすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0281",
    "unit": "データの活用",
    "field": "モデル化（応用）",
    "difficulty": "★★★★",
    "question": "人口予測モデルを作成する際、出生率や死亡率だけでなく移住者数も考慮した。これを行う主な理由として最も適切なものはどれか。",
    "options": [
      "モデルを現実に近づけるため",
      "計算量を減らすため",
      "標準偏差を小さくするため",
      "グラフを見やすくするため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0282",
    "unit": "データの活用",
    "field": "モデル化（応用）",
    "difficulty": "★★★★",
    "question": "シミュレーション結果と実際の観測結果が大きく異なった。このとき、最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "使用したモデルや前提条件が適切か",
      "コンピュータのメーカー",
      "データの保存形式",
      "グラフの色"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0283",
    "unit": "データの活用",
    "field": "統計的思考（応用）",
    "difficulty": "★★★★",
    "question": "ある商品の売上予測を、前年の平均値だけを用いて行ったところ、大きく外れた。原因として最も考えられるものはどれか。",
    "options": [
      "季節変動や流行などの要因を考慮していなかった",
      "平均値の計算方法が間違っている",
      "グラフを作成していない",
      "データ数が多すぎた"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0284",
    "unit": "データの活用",
    "field": "統計的思考（応用）",
    "difficulty": "★★★★",
    "question": "2つのデータ群について、平均値は同じであったが、一方は中央値が大きく異なっていた。このことから考えられることとして最も適切なものはどれか。",
    "options": [
      "データの分布の形が異なっている可能性がある",
      "データ数が同じではない",
      "標準偏差は必ず同じである",
      "外れ値は存在しない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0285",
    "unit": "データの活用",
    "field": "統計的推測（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある高校では、生徒800人のスマートフォン利用時間を調査するため、各学年から同じ人数ずつ無作為抽出して調査を行った。この調査方法として最も適切なものはどれか。",
    "options": [
      "単純無作為抽出",
      "層化抽出",
      "系統抽出",
      "全数調査"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0286",
    "unit": "データの活用",
    "field": "代表値の活用（大学入試）",
    "difficulty": "★★★★★",
    "question": "A組40人の平均点は68点、B組20人の平均点は74点である。両クラスを合わせた60人の平均点として正しいものはどれか。",
    "options": [
      "69点",
      "70点",
      "71点",
      "72点"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0287",
    "unit": "データの活用",
    "field": "箱ひげ図の読解（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある2クラスの箱ひげ図を比較したところ、A組の中央値はB組より高く、四分位範囲はB組より小さかった。このことから確実に言えることはどれか。",
    "options": [
      "A組の平均値はB組より高い",
      "A組はB組より人数が多い",
      "A組はB組より中央50%のデータのばらつきが小さい",
      "A組の最大値はB組より大きい"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0288",
    "unit": "データの活用",
    "field": "相関の解釈（大学入試）",
    "difficulty": "★★★★★",
    "question": "ある地域で『書店数』と『大学進学率』に正の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "書店が増えると必ず進学率が上がる",
      "両者には何らかの関係がある可能性がある",
      "進学率が書店数を決定している",
      "因果関係が証明された"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0289",
    "unit": "データの活用",
    "field": "標本調査（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある自治体が住民の意識調査を行うため、平日の昼間に駅前で通行人にアンケートを実施した。この調査結果を解釈する際に最も注意すべき点はどれか。",
    "options": [
      "回答数が少ないこと",
      "調査者の人数",
      "回答者に偏りがある可能性",
      "平均値の計算方法"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0290",
    "unit": "データの活用",
    "field": "シミュレーション（大学入試）",
    "difficulty": "★★★★★",
    "question": "ある感染症の流行予測シミュレーションで、『人々の行動パターンは常に一定である』と仮定した。このシミュレーション結果を利用する際の注意点として最も適切なものはどれか。",
    "options": [
      "実際の状況とは異なる可能性がある",
      "誤差は発生しない",
      "シミュレーション結果は必ず正しい",
      "標本調査が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0291",
    "unit": "データの活用",
    "field": "データ分析（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある商品の売上データについて、月別の売上推移を折れ線グラフで表したところ、毎年12月に大きな増加が見られた。この傾向を分析する際に最も適切な考え方はどれか。",
    "options": [
      "12月は必ず景気が良い",
      "季節要因の影響を考慮する",
      "データに誤りがある",
      "平均値だけを比較する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0292",
    "unit": "データの活用",
    "field": "散布図の読解（大学入試）",
    "difficulty": "★★★★★",
    "question": "2つの変数X、Yについて散布図を作成したところ、点は右上がりに分布していたが、ばらつきが大きかった。この状況を最も適切に表したものはどれか。",
    "options": [
      "強い正の相関がある",
      "弱い正の相関がある",
      "弱い負の相関がある",
      "相関は存在しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0293",
    "unit": "データの活用",
    "field": "データの偏り（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "インターネット上で映画の満足度調査を行ったところ、『非常に満足』と回答した人が全体の85%を占めた。しかし、回答率は全利用者の4%であった。この結果について最も適切な説明はどれか。",
    "options": [
      "映画の満足度は必ず85%である",
      "回答者の偏りが生じている可能性がある",
      "調査人数が多すぎる",
      "標準偏差が小さい"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0294",
    "unit": "データの活用",
    "field": "代表値の比較（大学入試）",
    "difficulty": "★★★★★",
    "question": "平均値が同じ2つのデータ群について、一方は中央値が平均値よりかなり小さかった。このことから考えられることとして最も適切なものはどれか。",
    "options": [
      "左右対称な分布である",
      "外れ値の影響を受けている可能性がある",
      "標準偏差は0である",
      "データ数が異なる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0295",
    "unit": "データの活用",
    "field": "統計的判断（大学入試）",
    "difficulty": "★★★★★",
    "question": "ある学校では、授業動画を視聴した生徒の平均点が視聴していない生徒より高かった。この結果から直ちに結論づけることができないものはどれか。",
    "options": [
      "授業動画を視聴した生徒の平均点が高いこと",
      "両者に関連がある可能性",
      "授業動画の視聴だけが得点向上の原因であること",
      "追加調査が必要であること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0296",
    "unit": "データの活用",
    "field": "モデル化（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "人口予測モデルを構築する際、出生率や死亡率に加えて転入・転出も考慮した。これを行う理由として最も適切なものはどれか。",
    "options": [
      "モデルを単純化するため",
      "現実をより適切に表現するため",
      "計算量を減らすため",
      "誤差を大きくするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0297",
    "unit": "データの活用",
    "field": "シミュレーション（大学入試）",
    "difficulty": "★★★★★",
    "question": "あるゲームで勝率を推定するため、コンピュータによる試行回数を100回から100万回に増やした。このとき期待される変化として最も適切なものはどれか。",
    "options": [
      "理論値との差が小さくなりやすい",
      "必ず理論値と一致する",
      "乱数が不要になる",
      "計算時間が短くなる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0298",
    "unit": "データの活用",
    "field": "表計算と分析（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "売上データを分析する際、地域別・月別・商品別の集計結果を自由に切り替えて表示したい。この目的に最も適したExcelの機能はどれか。",
    "options": [
      "条件付き書式",
      "入力規則",
      "ピボットテーブル",
      "絶対参照"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0299",
    "unit": "データの活用",
    "field": "統計グラフの選択（大学入試）",
    "difficulty": "★★★★★",
    "question": "都道府県ごとの人口と面積の関係を調べる際、両者の相関を視覚的に確認するために最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "帯グラフ",
      "散布図",
      "レーダーチャート"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0300",
    "unit": "データの活用",
    "field": "標本調査（大学入試）",
    "difficulty": "★★★★★",
    "question": "全国の高校生の意見を調査する際、調査対象を都市部の学校のみに限定した場合に生じる問題として最も適切なものはどれか。",
    "options": [
      "標準偏差が求められない",
      "標本の代表性が失われる",
      "平均値が変化する",
      "無作為抽出になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0301",
    "unit": "データの活用",
    "field": "データの解釈（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "あるスポーツチームについて、練習時間と勝率に強い正の相関が見られた。この結果から確実に言えることはどれか。",
    "options": [
      "練習時間が長いほど必ず勝率が上がる",
      "練習時間だけが勝率を決定する",
      "2つの変数に関連がある可能性が高い",
      "勝率が練習時間を決定している"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0302",
    "unit": "データの活用",
    "field": "統計的思考（大学入試）",
    "difficulty": "★★★★★",
    "question": "平均年収が上昇した地域について調査したところ、一部の高所得者の増加が主な要因であることが分かった。この地域の状況をより適切に把握するために確認すべき指標として最も適切なものはどれか。",
    "options": [
      "中央値",
      "最大値",
      "最小値",
      "標本数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0303",
    "unit": "データの活用",
    "field": "シミュレーションとモデル化（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "避難経路のシミュレーション結果と実際の避難時間に大きな差が生じた。まず見直すべき点として最も適切なものはどれか。",
    "options": [
      "パソコンの性能",
      "使用したモデルの前提条件",
      "表計算ソフトの種類",
      "グラフの色分け"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0304",
    "unit": "データの活用",
    "field": "総合問題（大学入試）",
    "difficulty": "★★★★★",
    "question": "ある自治体では、過去10年間の気温データから将来の電力需要を予測している。しかし、近年はリモートワークの普及によって生活様式が変化している。この予測モデルについて最も適切な考え方はどれか。",
    "options": [
      "過去のデータだけで十分である",
      "シミュレーションは不要である",
      "気温データを削除するべきである",
      "社会の変化を考慮してモデルを更新する必要がある"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0305",
    "unit": "データの活用",
    "field": "データの種類",
    "difficulty": "★",
    "question": "身長や気温のように、連続的な値をとるデータを何というか。",
    "options": [
      "量的データ",
      "質的データ",
      "順序データ",
      "名義データ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0306",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "表計算ソフトでセル「A1」から「A10」までの合計を求める関数はどれか。",
    "options": [
      "COUNT関数",
      "IF関数",
      "SUM関数",
      "MAX関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0307",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "全体に占める割合を表すのに最も適したグラフはどれか。",
    "options": [
      "折れ線グラフ",
      "散布図",
      "ヒストグラム",
      "円グラフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0308",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "複数の値の合計を個数で割って求める代表値を何というか。",
    "options": [
      "平均値",
      "中央値",
      "最頻値",
      "範囲"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0309",
    "unit": "データの活用",
    "field": "データ整理",
    "difficulty": "★",
    "question": "数値データを小さい順に並べ替える操作を何というか。",
    "options": [
      "抽出",
      "集計",
      "並べ替え",
      "圧縮"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0310",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★★",
    "question": "時間の経過に伴う気温の変化を表すのに最も適したグラフはどれか。",
    "options": [
      "帯グラフ",
      "円グラフ",
      "ヒストグラム",
      "折れ線グラフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0311",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★★",
    "question": "データを小さい順に並べたとき、中央に位置する値を何というか。",
    "options": [
      "平均値",
      "分散",
      "中央値",
      "最頻値"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0312",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★★",
    "question": "表計算ソフトで、指定した条件を満たすセルの個数を数える関数はどれか。",
    "options": [
      "COUNTIF関数",
      "SUM関数",
      "AVERAGE関数",
      "MAX関数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0313",
    "unit": "データの活用",
    "field": "データ分析",
    "difficulty": "★★",
    "question": "身長と体重の関係のように、2つの数量の関係を調べる際に最も適したグラフはどれか。",
    "options": [
      "散布図",
      "帯グラフ",
      "円グラフ",
      "レーダーチャート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0314",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★★",
    "question": "データのばらつきの大きさを表す指標として最も適切なものはどれか。",
    "options": [
      "中央値",
      "平均値",
      "最頻値",
      "標準偏差"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0315",
    "unit": "データの活用",
    "field": "相関関係",
    "difficulty": "★★",
    "question": "散布図で右上がりの傾向が見られる場合、どのような関係があると考えられるか。",
    "options": [
      "負の相関",
      "無相関",
      "正の相関",
      "因果関係"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0316",
    "unit": "データの活用",
    "field": "データの収集",
    "difficulty": "★★",
    "question": "アンケート調査で偏りの少ない結果を得るために重要なことはどれか。",
    "options": [
      "できるだけ多様な対象からデータを集める",
      "回答者を友人だけに限定する",
      "回答数を減らす",
      "質問を曖昧にする"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0317",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★★",
    "question": "表計算ソフトで、複数の条件によって処理を分けるために利用される代表的な関数はどれか。",
    "options": [
      "COUNT関数",
      "SUM関数",
      "MAX関数",
      "IF関数"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0318",
    "unit": "データの活用",
    "field": "ヒストグラム",
    "difficulty": "★★",
    "question": "テストの点数分布を階級ごとに整理して表したグラフを何というか。",
    "options": [
      "円グラフ",
      "帯グラフ",
      "折れ線グラフ",
      "ヒストグラム"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0319",
    "unit": "データの活用",
    "field": "データ分析",
    "difficulty": "★★",
    "question": "ある商品の広告費と売上の関係を調べる際、まず確認すべきこととして最も適切なものはどれか。",
    "options": [
      "散布図などでデータの傾向を見ること",
      "広告費を2倍にすること",
      "平均値だけを見ること",
      "データ数を減らすこと"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0320",
    "unit": "データの活用",
    "field": "相関と因果",
    "difficulty": "★★★",
    "question": "アイスクリームの売上と水難事故件数には正の相関が見られた。この結果から直ちに『アイスクリームが事故を増やしている』と結論づけられない理由として最も適切なものはどれか。",
    "options": [
      "データが多すぎるから",
      "散布図が使えないから",
      "相関関係と因果関係は異なるから",
      "平均値が求められないから"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0321",
    "unit": "データの活用",
    "field": "データ分析",
    "difficulty": "★★★",
    "question": "ある学校では、睡眠時間とテストの点数の関係を調べた。しかし、学年によって傾向が異なっていた。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "データ分析は不要である",
      "睡眠時間は関係ない",
      "学年など別の要因も考慮する必要がある",
      "平均値だけで判断できる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0322",
    "unit": "データの活用",
    "field": "シミュレーション",
    "difficulty": "★★★",
    "question": "人口の増減や気温の変化を予測する際、コンピュータ上で条件を変えながら結果を調べる手法を何というか。",
    "options": [
      "集計",
      "抽出",
      "標本調査",
      "シミュレーション"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0323",
    "unit": "データの活用",
    "field": "データの活用",
    "difficulty": "★★★",
    "question": "店舗の売上データを分析した結果、休日だけ特定の商品がよく売れることが分かった。最も適切な活用方法はどれか。",
    "options": [
      "休日の在庫を増やす",
      "全商品の価格を上げる",
      "平日の営業をやめる",
      "データを削除する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0324",
    "unit": "データの活用",
    "field": "統計的な見方",
    "difficulty": "★★★",
    "question": "SNSのアンケートで『95%が賛成した』という結果が示されていた。しかし、回答者の大半が同じ地域の住民であった。この結果を解釈する際に最も注意すべきことはどれか。",
    "options": [
      "通信速度",
      "回答者の偏り",
      "端末の性能",
      "画像の解像度"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0325",
    "unit": "データの活用",
    "field": "データの種類",
    "difficulty": "★",
    "question": "血液型や好きな教科のように、数値ではなく分類で表されるデータを何というか。",
    "options": [
      "質的データ",
      "量的データ",
      "連続データ",
      "時系列データ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0326",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★",
    "question": "表計算ソフトで、指定した範囲の中の最大値を求める関数はどれか。",
    "options": [
      "SUM関数",
      "AVERAGE関数",
      "MAX関数",
      "COUNT関数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0327",
    "unit": "データの活用",
    "field": "グラフ",
    "difficulty": "★",
    "question": "各月の降水量の変化を1本の線で表すのに最も適したグラフはどれか。",
    "options": [
      "円グラフ",
      "帯グラフ",
      "ヒストグラム",
      "折れ線グラフ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0328",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★",
    "question": "データの中で最も多く現れる値を何というか。",
    "options": [
      "最頻値",
      "中央値",
      "平均値",
      "四分位数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0329",
    "unit": "データの活用",
    "field": "データ整理",
    "difficulty": "★",
    "question": "データを一定の幅ごとに区切ったものを何というか。",
    "options": [
      "階級",
      "相関",
      "標本",
      "変数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0330",
    "unit": "データの活用",
    "field": "ヒストグラム",
    "difficulty": "★★",
    "question": "ヒストグラムの横軸に通常表示されるものとして最も適切なものはどれか。",
    "options": [
      "平均値",
      "標準偏差",
      "階級",
      "度数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0331",
    "unit": "データの活用",
    "field": "統計量",
    "difficulty": "★★",
    "question": "データのばらつきを調べるために、平均値からの差を二乗して平均した値を何というか。",
    "options": [
      "中央値",
      "最頻値",
      "四分位範囲",
      "分散"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0332",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★★",
    "question": "表計算ソフトで、指定した範囲の平均値を求める関数はどれか。",
    "options": [
      "AVERAGE関数",
      "COUNT関数",
      "SUM関数",
      "IF関数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0333",
    "unit": "データの活用",
    "field": "データ分析",
    "difficulty": "★★",
    "question": "散布図において、点が右下がりに分布している場合に考えられる関係はどれか。",
    "options": [
      "負の相関",
      "無相関",
      "因果関係",
      "正の相関"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0334",
    "unit": "データの活用",
    "field": "データの収集",
    "difficulty": "★★",
    "question": "全国の高校生の意見を調べるため、特定の学校の1クラスだけにアンケートを実施した。この調査方法の問題点として最も適切なものはどれか。",
    "options": [
      "データ量が多すぎる",
      "質問数が少ない",
      "標本に偏りがある",
      "回答時間が長い"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0335",
    "unit": "データの活用",
    "field": "箱ひげ図",
    "difficulty": "★★",
    "question": "箱ひげ図の箱の中央に引かれた線が表しているものはどれか。",
    "options": [
      "平均値",
      "最頻値",
      "四分位偏差",
      "中央値"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0336",
    "unit": "データの活用",
    "field": "グラフの選択",
    "difficulty": "★★",
    "question": "各都道府県の人口を比較するのに最も適したグラフはどれか。",
    "options": [
      "棒グラフ",
      "折れ線グラフ",
      "散布図",
      "円グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0337",
    "unit": "データの活用",
    "field": "表計算",
    "difficulty": "★★",
    "question": "表計算ソフトで、条件によって異なる値を表示する処理に利用される関数はどれか。",
    "options": [
      "SUM関数",
      "AVERAGE関数",
      "COUNT関数",
      "IF関数"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0338",
    "unit": "データの活用",
    "field": "データ分析",
    "difficulty": "★★",
    "question": "あるクラスのテストの平均点は同じであったが、クラスAの方が得点のばらつきが大きかった。このことを表す指標として最も適切なものはどれか。",
    "options": [
      "標準偏差",
      "中央値",
      "最頻値",
      "階級値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0339",
    "unit": "データの活用",
    "field": "時系列データ",
    "difficulty": "★★",
    "question": "気温や売上高など、時間の経過に伴って変化するデータを何というか。",
    "options": [
      "カテゴリデータ",
      "順序データ",
      "時系列データ",
      "名義尺度データ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0340",
    "unit": "データの活用",
    "field": "相関と因果",
    "difficulty": "★★★",
    "question": "ある地域では、エアコンの販売台数とジュースの売上に正の相関が見られた。この結果について最も適切な説明はどれか。",
    "options": [
      "共通の要因が影響している可能性がある",
      "エアコンがジュースを作っている",
      "データに誤りがある",
      "相関があるため因果関係が証明された"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0341",
    "unit": "データの活用",
    "field": "データの解釈",
    "difficulty": "★★★",
    "question": "ある商品のレビューを分析したところ、評価の平均は高かったが、最高評価と最低評価に集中していた。このような場合に最も確認すべきことはどれか。",
    "options": [
      "データの分布の様子",
      "商品の価格",
      "回答者の年齢",
      "店舗数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0342",
    "unit": "データの活用",
    "field": "シミュレーション",
    "difficulty": "★★★",
    "question": "人口予測モデルに出生率や死亡率を追加した主な目的として最も適切なものはどれか。",
    "options": [
      "通信速度を向上させるため",
      "データ量を減らすため",
      "現実に近い予測を行うため",
      "計算回数を増やすため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0343",
    "unit": "データの活用",
    "field": "統計的思考",
    "difficulty": "★★★",
    "question": "SNS上の投票で『90%が賛成』という結果が出た。しかし、投票には誰でも何度でも参加できた。この結果を利用する際に最も注意すべきことはどれか。",
    "options": [
      "回答の信頼性",
      "通信量",
      "端末性能",
      "画面サイズ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0344",
    "unit": "データの活用",
    "field": "データ活用",
    "difficulty": "★★★",
    "question": "学校が登校時間や図書室の利用状況を分析して新しい時間割を検討している。このようなデータ活用の目的として最も適切なものはどれか。",
    "options": [
      "勘だけで判断するため",
      "過去の記録を削除するため",
      "意思決定に役立てるため",
      "データ量を減らすため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0345",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "データベースで、1人の生徒について『出席番号・氏名・クラス』などをまとめた1行分のデータを何というか。",
    "options": [
      "レコード",
      "フィールド",
      "セル",
      "シート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0346",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "データベースで『氏名』『住所』『電話番号』のような項目を何というか。",
    "options": [
      "レコード",
      "テーブル",
      "フィールド",
      "クエリ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0347",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "同じ生徒の情報が複数回登録されることによる問題として最も適切なものはどれか。",
    "options": [
      "データの重複による不整合",
      "計算速度の向上",
      "保存容量の削減",
      "検索回数の減少"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0348",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "学校の図書データベースで、本を一意に識別するために設定する値として最も適切なものはどれか。",
    "options": [
      "本の厚さ",
      "出版社名",
      "著者名",
      "図書番号"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0349",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "データベース管理システムを利用する利点として最も適切なものはどれか。",
    "options": [
      "大量のデータを整理・検索しやすい",
      "必ず紙が不要になる",
      "入力ミスがなくなる",
      "通信が高速になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0350",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "『好きなスポーツ』のように分類だけを表すデータを何というか。",
    "options": [
      "量的データ",
      "連続データ",
      "質的データ",
      "時系列データ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0351",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "全国の高校生のスマートフォン利用時間を調査する際、最も重要なことはどれか。",
    "options": [
      "偏りの少ない標本を集める",
      "1つの学校だけを調べる",
      "友人だけに質問する",
      "回答数を減らす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0352",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "気温や身長のように数値で表されるデータを何というか。",
    "options": [
      "カテゴリデータ",
      "順序データ",
      "名義データ",
      "量的データ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0353",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "データを収集する際、質問文が曖昧である場合に起こりやすい問題はどれか。",
    "options": [
      "回答結果の信頼性が低下する",
      "通信量が増える",
      "保存容量が不足する",
      "計算速度が向上する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0354",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "調査対象全員ではなく、その一部を取り出して調査する方法を何というか。",
    "options": [
      "全数調査",
      "無作為抽出",
      "標本調査",
      "追跡調査"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0355",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "データを小さい順に並べたとき、中央に位置する値を何というか。",
    "options": [
      "平均値",
      "最頻値",
      "中央値",
      "標準偏差"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0356",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "平均点が同じ2つのクラスを比較したところ、一方のクラスの点数の散らばりが大きかった。この散らばりを表す指標として適切なものはどれか。",
    "options": [
      "標準偏差",
      "中央値",
      "最頻値",
      "度数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0357",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "100m走の記録を速い順に並べ、上位25%と下位25%の境界を調べるときに用いられる考え方はどれか。",
    "options": [
      "相関係数",
      "平均値",
      "四分位数",
      "最頻値"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0358",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "データの分布の様子を箱とひげで表したグラフを何というか。",
    "options": [
      "円グラフ",
      "ヒストグラム",
      "散布図",
      "箱ひげ図"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0359",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "平均値が同じでも、外れ値の影響を受けにくい代表値はどれか。",
    "options": [
      "中央値",
      "標準偏差",
      "分散",
      "相関係数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0360",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "天気予報で『降水確率40%』と発表された。この意味として最も適切なものはどれか。",
    "options": [
      "同じ条件の日が100日あれば40日程度雨が降ると予測される",
      "今日の40%の地域で必ず雨が降る",
      "午前中だけ雨が降る",
      "40分間だけ雨が降る"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0361",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "ある病気の検査で陽性と判定された人のうち、実際に病気である人の割合を考える際に重要となるものはどれか。",
    "options": [
      "検査を受けた日時",
      "病院の規模",
      "病気の発症率",
      "検査機器の色"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0362",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "『宝くじを3回連続ではずしたから、次は当たりやすい』という考え方の誤りとして最も適切なものはどれか。",
    "options": [
      "確率は過去の結果だけでは変化しない",
      "抽選機は疲れる",
      "販売枚数が減る",
      "賞金額が変わる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0363",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "SNSで『10万人が拡散した健康法』という情報を見た。この情報を判断する際に最も重視すべきものはどれか。",
    "options": [
      "拡散された回数",
      "投稿者の年齢",
      "写真の有無",
      "科学的根拠"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0364",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "『ある地域では明日大地震が起こる確率が高い』という投稿を見た。最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "投稿の文字数",
      "投稿時刻",
      "情報源の信頼性",
      "閲覧回数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0365",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "散布図において、片方の値が大きくなるほどもう片方の値も大きくなる傾向を何というか。",
    "options": [
      "正の相関",
      "負の相関",
      "無相関",
      "因果関係"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0366",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "勉強時間とテストの点数に正の相関が見られた。この結果から直ちに言えないことはどれか。",
    "options": [
      "勉強時間が長いほど点数が高い傾向がある",
      "両者には関係が見られる",
      "勉強時間だけが点数を決めている",
      "散布図で確認できる"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0367",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "アイスクリームの売上と熱中症患者数の間に正の相関が見られた。この関係を生み出している要因として最も考えられるものはどれか。",
    "options": [
      "気温",
      "広告",
      "店舗数",
      "人口"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0368",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "ある動画配信サービスで、視聴時間と満足度の関係を調べるために最も適したグラフはどれか。",
    "options": [
      "帯グラフ",
      "円グラフ",
      "折れ線グラフ",
      "散布図"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0369",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "ある学校で『スマートフォン利用時間』と『睡眠時間』を調べたところ、右下がりの散布図になった。このことから考えられる関係はどれか。",
    "options": [
      "負の相関",
      "正の相関",
      "無相関",
      "因果関係"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0370",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "データベースにおいて、同じ内容を何度も入力しなくてもよいように表を分割する考え方を何というか。",
    "options": [
      "正規化",
      "暗号化",
      "圧縮",
      "集計"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0371",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "学校の生徒名簿で、同姓同名の生徒を区別するために最も適した項目はどれか。",
    "options": [
      "学籍番号",
      "住所",
      "部活動",
      "好きな教科"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0372",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "データベースで、複数の表を関連付けるために利用される共通の項目を何というか。",
    "options": [
      "キー",
      "セル",
      "レコード",
      "シート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0373",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "図書館システムで『貸出中の本だけを表示する』操作を何というか。",
    "options": [
      "抽出",
      "保存",
      "並べ替え",
      "圧縮"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 1,
    "explanation": ""
  },
  {
    "id": "Q05-0374",
    "unit": "データの活用",
    "field": "データの管理",
    "difficulty": "★",
    "question": "大量のデータを管理する際、表計算ソフトよりデータベースが適している理由として最も適切なものはどれか。",
    "options": [
      "検索や更新を効率的に行える",
      "必ず処理速度が速い",
      "インターネット接続が不要である",
      "関数を使わない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0375",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "ある商品の満足度を『満足・普通・不満』で調査した。このデータは何に分類されるか。",
    "options": [
      "質的データ",
      "量的データ",
      "連続データ",
      "時系列データ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0376",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "クラス全員を対象にアンケートを行う調査方法を何というか。",
    "options": [
      "全数調査",
      "標本調査",
      "無作為抽出",
      "追跡調査"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0377",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "全国調査で、一部の地域だけから回答を集めた場合に起こりやすい問題はどれか。",
    "options": [
      "標本に偏りが生じる",
      "計算が複雑になる",
      "回答数が増える",
      "分析が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0378",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "アンケートの質問文として適切なものはどれか。",
    "options": [
      "あなたは学校生活にどの程度満足していますか",
      "本校の素晴らしい校則をどう思いますか",
      "先生の授業は最高ですよね",
      "必ず部活動に参加すべきだと思いますか"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0379",
    "unit": "データの活用",
    "field": "データの収集と種類",
    "difficulty": "★",
    "question": "1日の歩数を記録したデータはどれに分類されるか。",
    "options": [
      "量的データ",
      "質的データ",
      "名義データ",
      "順序データ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0380",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "あるクラスのテスト結果で、95点の生徒が1人だけいた。このような値を何というか。",
    "options": [
      "外れ値",
      "中央値",
      "最頻値",
      "平均値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0381",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "中央値が50点、平均値が70点だった。この結果から考えられることとして最も適切なものはどれか。",
    "options": [
      "一部の高得点者が平均を押し上げている可能性がある",
      "全員が70点以上である",
      "点数にばらつきがない",
      "中央値は必ず平均値以上である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0382",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "ヒストグラムで縦軸が表しているものとして最も適切なものはどれか。",
    "options": [
      "度数",
      "階級",
      "中央値",
      "平均値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0383",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "箱ひげ図で箱の長さが長い場合、どのようなことが考えられるか。",
    "options": [
      "中央50%のデータのばらつきが大きい",
      "平均値が高い",
      "最頻値が小さい",
      "外れ値が存在しない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0384",
    "unit": "データの活用",
    "field": "データの分析",
    "difficulty": "★★",
    "question": "同じ平均点の2つのクラスを比較するとき、得点の散らばりを見る指標として適切なものはどれか。",
    "options": [
      "標準偏差",
      "中央値",
      "最頻値",
      "階級値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0385",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "天気予報で『降水確率20%』と発表された。この説明として正しいものはどれか。",
    "options": [
      "同じ条件の日のうち20%程度で雨が降ると予測される",
      "20%の地域だけが雨になる",
      "20分だけ雨が降る",
      "1日の20%の時間で雨が降る"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0386",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "ある薬の広告に『90%の人に効果があった』と書かれていた。最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "調査対象や調査方法",
      "広告の色",
      "会社の規模",
      "発売時期"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0387",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "コインを5回投げてすべて表が出た。このあと6回目に表が出る確率について最も適切なものはどれか。",
    "options": [
      "1回目と変わらない",
      "必ず裏になる",
      "表が出やすくなる",
      "確率は求められない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0388",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "インターネット上の『成功率99%』という情報を評価する際に重要なことはどれか。",
    "options": [
      "根拠となるデータを確認する",
      "閲覧数だけを見る",
      "拡散数を調べる",
      "投稿者の年齢を確認する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0389",
    "unit": "データの活用",
    "field": "不確実な事象の解釈",
    "difficulty": "★★",
    "question": "感染症の検査で陽性と判定された場合でも、実際には感染していないことがある。この理由として最も適切なものはどれか。",
    "options": [
      "検査には誤判定が存在する",
      "検査機器の色が異なる",
      "病院の規模が異なる",
      "検査時間が短い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0390",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "散布図で点が左上から右下に並んでいる場合、どのような関係が考えられるか。",
    "options": [
      "負の相関",
      "正の相関",
      "無相関",
      "因果関係"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0391",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "睡眠時間とテストの点数に相関が見られなかった。この結果から言えることはどれか。",
    "options": [
      "明確な関係は確認できない",
      "睡眠は不要である",
      "睡眠時間が長いほど点数が高い",
      "睡眠時間が短いほど点数が高い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0392",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "気温とアイスクリームの売上に正の相関が見られた。このとき『気温』を何というか。",
    "options": [
      "共通要因",
      "目的変数",
      "外れ値",
      "中央値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0393",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "ある動画サイトで、視聴時間が長い人ほど課金額が多い傾向が見られた。この結果だけから言えないことはどれか。",
    "options": [
      "視聴時間だけが課金額を決めている",
      "視聴時間と課金額に関係がある",
      "散布図で確認できる",
      "他の要因も考えられる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q05-0394",
    "unit": "データの活用",
    "field": "2つのデータの関係",
    "difficulty": "★★★",
    "question": "ある学校では、通学時間が長いほど睡眠時間が短い傾向が見られた。この関係を表すものとして最も適切なのはどれか。",
    "options": [
      "負の相関",
      "正の相関",
      "無相関",
      "標準偏差"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0001",
    "unit": "問題解決",
    "field": "問題解決の流れ",
    "difficulty": "★",
    "question": "問題を発見し解決する際に最初に行うべきこととして最も適切なものはどれか。",
    "options": [
      "解決策を実行する",
      "問題を明確にする",
      "結果を評価する",
      "情報を共有する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0002",
    "unit": "問題解決",
    "field": "問題解決の流れ",
    "difficulty": "★",
    "question": "問題解決の過程で「現状と理想の状態との差」を表す言葉として最も適切なものはどれか。",
    "options": [
      "データ",
      "課題",
      "モデル",
      "仮説"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0003",
    "unit": "問題解決",
    "field": "情報収集",
    "difficulty": "★",
    "question": "問題解決のために必要な資料やデータを集める活動を何というか。",
    "options": [
      "評価",
      "分析",
      "情報収集",
      "抽象化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0004",
    "unit": "問題解決",
    "field": "情報整理",
    "difficulty": "★",
    "question": "集めた情報を分類し、関係性を明らかにする作業を何というか。",
    "options": [
      "モデル化",
      "情報整理",
      "シミュレーション",
      "最適化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0005",
    "unit": "問題解決",
    "field": "問題解決の流れ",
    "difficulty": "★",
    "question": "問題解決の過程で実施した方法が適切だったかを確認する段階を何というか。",
    "options": [
      "評価・改善",
      "抽象化",
      "情報共有",
      "実装"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0006",
    "unit": "問題解決",
    "field": "PDCA",
    "difficulty": "★",
    "question": "PDCAサイクルにおいて「P」が表すものはどれか。",
    "options": [
      "計画",
      "実行",
      "確認",
      "改善"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0007",
    "unit": "問題解決",
    "field": "PDCA",
    "difficulty": "★",
    "question": "PDCAサイクルにおいて「D」が表すものはどれか。",
    "options": [
      "計画",
      "改善",
      "実行",
      "確認"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0008",
    "unit": "問題解決",
    "field": "PDCA",
    "difficulty": "★",
    "question": "PDCAサイクルにおいて「C」が表すものはどれか。",
    "options": [
      "確認",
      "改善",
      "実行",
      "計画"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0009",
    "unit": "問題解決",
    "field": "PDCA",
    "difficulty": "★",
    "question": "PDCAサイクルにおいて「A」が表すものはどれか。",
    "options": [
      "分析",
      "改善",
      "実行",
      "共有"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0010",
    "unit": "問題解決",
    "field": "問題の分析",
    "difficulty": "★",
    "question": "問題を解決するために原因と結果の関係を整理する図としてよく用いられるものはどれか。",
    "options": [
      "帯グラフ",
      "散布図",
      "特性要因図",
      "円グラフ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0011",
    "unit": "問題解決",
    "field": "問題の分析",
    "difficulty": "★",
    "question": "問題を構成する要素を分解し、重要な部分を取り出す考え方を何というか。",
    "options": [
      "抽象化",
      "具体化",
      "暗号化",
      "最適化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0012",
    "unit": "問題解決",
    "field": "問題の分析",
    "difficulty": "★",
    "question": "複雑な問題を複数の小さな問題に分ける考え方を何というか。",
    "options": [
      "分散化",
      "分割統治",
      "抽象化",
      "階層化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0013",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★",
    "question": "現実世界の問題を単純化して表現することを何というか。",
    "options": [
      "モデル化",
      "評価",
      "分析",
      "共有"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0014",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★",
    "question": "問題解決のために必要のない要素を取り除き本質だけを抜き出す作業を何というか。",
    "options": [
      "抽象化",
      "暗号化",
      "量子化",
      "圧縮"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0015",
    "unit": "問題解決",
    "field": "問題解決の流れ",
    "difficulty": "★",
    "question": "問題解決において解決策を実際に試してみる段階はどれか。",
    "options": [
      "評価",
      "実行",
      "分析",
      "整理"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0016",
    "unit": "問題解決",
    "field": "KJ法",
    "difficulty": "★",
    "question": "意見やアイデアをカードに書き出し、似た内容ごとにグループ化して整理する方法を何というか。",
    "options": [
      "ブレインストーミング",
      "KJ法",
      "PDCA法",
      "ロジックツリー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0017",
    "unit": "問題解決",
    "field": "発想法",
    "difficulty": "★",
    "question": "自由に意見を出し合い、多くのアイデアを生み出す会議手法を何というか。",
    "options": [
      "KJ法",
      "ブレインストーミング",
      "マインドマップ",
      "ロジックツリー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0018",
    "unit": "問題解決",
    "field": "発想法",
    "difficulty": "★",
    "question": "中心となるテーマから関連するキーワードを放射状に広げて整理する方法を何というか。",
    "options": [
      "マインドマップ",
      "特性要因図",
      "散布図",
      "フローチャート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0019",
    "unit": "問題解決",
    "field": "問題の分析",
    "difficulty": "★",
    "question": "問題の原因を木の枝のように分解して整理する図を何というか。",
    "options": [
      "円グラフ",
      "ロジックツリー",
      "ヒストグラム",
      "散布図"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0020",
    "unit": "問題解決",
    "field": "アルゴリズム",
    "difficulty": "★",
    "question": "問題解決の手順を明確にし、誰が実行しても同じ結果になるようにまとめたものを何というか。",
    "options": [
      "データベース",
      "アルゴリズム",
      "シミュレーション",
      "インタフェース"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0021",
    "unit": "問題解決",
    "field": "アルゴリズム",
    "difficulty": "★",
    "question": "アルゴリズムを図で表現したものとして最も適切なものはどれか。",
    "options": [
      "マインドマップ",
      "フローチャート",
      "帯グラフ",
      "散布図"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0022",
    "unit": "問題解決",
    "field": "評価",
    "difficulty": "★",
    "question": "問題解決の最後に行う「改善点を見つけ次に活かす活動」を何というか。",
    "options": [
      "最適化",
      "評価・改善",
      "抽象化",
      "モデル化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0023",
    "unit": "問題解決",
    "field": "意思決定",
    "difficulty": "★",
    "question": "複数の解決策の中から最も適切なものを選ぶことを何というか。",
    "options": [
      "分析",
      "抽象化",
      "意思決定",
      "符号化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0024",
    "unit": "問題解決",
    "field": "情報活用",
    "difficulty": "★",
    "question": "問題解決に必要な情報を適切に収集・分析・活用する能力を何というか。",
    "options": [
      "情報活用能力",
      "読解力",
      "表現力",
      "判断力"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0025",
    "unit": "問題解決",
    "field": "情報共有",
    "difficulty": "★",
    "question": "問題解決の結果や過程を他者と共有する目的として最も適切なものはどれか。",
    "options": [
      "記録を削除するため",
      "再利用や改善につなげるため",
      "データ量を減らすため",
      "作業を単純化するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0026",
    "unit": "問題解決",
    "field": "問題の発見",
    "difficulty": "★",
    "question": "「昼休みの食堂が混雑している」という状況について最初に行うべきこととして最も適切なものはどれか。",
    "options": [
      "解決策を実行する",
      "問題を整理して明確にする",
      "アンケート結果を公表する",
      "シミュレーションを行う"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0027",
    "unit": "問題解決",
    "field": "問題の発見",
    "difficulty": "★",
    "question": "理想の状態と現実の状態との差を分析し、解決すべき対象を明らかにする活動を何というか。",
    "options": [
      "情報共有",
      "問題発見",
      "モデル化",
      "抽象化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0028",
    "unit": "問題解決",
    "field": "問題設定",
    "difficulty": "★",
    "question": "問題解決において「目標を具体的に決める」ことの目的として最も適切なものはどれか。",
    "options": [
      "データ量を増やすため",
      "解決策を評価しやすくするため",
      "プログラムを書くため",
      "情報を削除するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0029",
    "unit": "問題解決",
    "field": "問題設定",
    "difficulty": "★",
    "question": "「1か月以内に図書館の利用者数を20%増加させる」は何を表しているか。",
    "options": [
      "評価",
      "目標",
      "原因",
      "分析"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0030",
    "unit": "問題解決",
    "field": "情報収集",
    "difficulty": "★",
    "question": "問題解決のためにインタビューやアンケートを行う主な目的はどれか。",
    "options": [
      "情報を削除するため",
      "必要な情報を集めるため",
      "データを暗号化するため",
      "プログラムを作成するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0031",
    "unit": "問題解決",
    "field": "情報収集",
    "difficulty": "★",
    "question": "情報収集の際、信頼性を高める方法として最も適切なものはどれか。",
    "options": [
      "1つの情報源だけを使う",
      "複数の情報源を比較する",
      "古い情報だけを使う",
      "SNSだけを参考にする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0032",
    "unit": "問題解決",
    "field": "情報整理",
    "difficulty": "★",
    "question": "集めた情報を分類したり表にまとめたりする主な目的はどれか。",
    "options": [
      "情報量を減らすため",
      "問題点や傾向を把握しやすくするため",
      "データを暗号化するため",
      "平均値を求めるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0033",
    "unit": "問題解決",
    "field": "情報整理",
    "difficulty": "★",
    "question": "情報を「人」「物」「時間」などの観点で整理することの利点として最も適切なものはどれか。",
    "options": [
      "誤差をなくせる",
      "情報の関係性を理解しやすくなる",
      "データ量が増える",
      "プログラムが不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0034",
    "unit": "問題解決",
    "field": "問題分析",
    "difficulty": "★",
    "question": "問題の原因を深く考えるため「なぜ」を繰り返して原因を探る手法を何というか。",
    "options": [
      "KJ法",
      "ブレインストーミング",
      "なぜなぜ分析",
      "PDCA法"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0035",
    "unit": "問題解決",
    "field": "問題分析",
    "difficulty": "★",
    "question": "問題の原因を「人」「方法」「環境」などの視点で整理する図を何というか。",
    "options": [
      "特性要因図",
      "散布図",
      "帯グラフ",
      "円グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0036",
    "unit": "問題解決",
    "field": "問題分析",
    "difficulty": "★",
    "question": "複雑な問題を細かな要素に分解することの利点として最も適切なものはどれか。",
    "options": [
      "問題を共有しなくてよくなる",
      "解決すべき部分が明確になる",
      "情報収集が不要になる",
      "結果を予測できなくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0037",
    "unit": "問題解決",
    "field": "問題分析",
    "difficulty": "★",
    "question": "問題解決において本質的な特徴だけを取り出す考え方を何というか。",
    "options": [
      "モデル化",
      "抽象化",
      "具体化",
      "暗号化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0038",
    "unit": "問題解決",
    "field": "問題分析",
    "difficulty": "★",
    "question": "抽象化の目的として最も適切なものはどれか。",
    "options": [
      "不要な特徴を増やすため",
      "共通する性質を見つけるため",
      "データを削除するため",
      "処理を遅くするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0039",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★",
    "question": "現実の問題を単純化して扱いやすくしたものを何というか。",
    "options": [
      "モデル",
      "変数",
      "関数",
      "データベース"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0040",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★",
    "question": "地図が現実世界のモデルである理由として最も適切なものはどれか。",
    "options": [
      "現実をそのまま縮小しているから",
      "必要な情報だけを取り出して表現しているから",
      "情報を暗号化しているから",
      "データを削除しているから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0041",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★",
    "question": "学校の避難訓練で避難経路を検討するためにコンピュータ上で人の流れを再現することを何というか。",
    "options": [
      "シミュレーション",
      "抽象化",
      "最適化",
      "符号化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0042",
    "unit": "問題解決",
    "field": "シミュレーション",
    "difficulty": "★",
    "question": "シミュレーションを利用する利点として最も適切なものはどれか。",
    "options": [
      "必ず正しい結果が得られる",
      "現実では試しにくい条件を検証できる",
      "データが不要になる",
      "実験の回数を減らせない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0043",
    "unit": "問題解決",
    "field": "シミュレーション",
    "difficulty": "★",
    "question": "シミュレーションの結果を利用するときに注意すべき点はどれか。",
    "options": [
      "現実と完全に一致するとは限らない",
      "計算結果は必ず誤っている",
      "データ分析には利用できない",
      "条件を変更できない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0044",
    "unit": "問題解決",
    "field": "発想法",
    "difficulty": "★",
    "question": "自由に意見を出し合う際、「他人の意見を批判しない」という原則をもつ手法はどれか。",
    "options": [
      "KJ法",
      "PDCA法",
      "ブレインストーミング",
      "ロジックツリー"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0045",
    "unit": "問題解決",
    "field": "発想法",
    "difficulty": "★",
    "question": "ブレインストーミングの目的として最も適切なものはどれか。",
    "options": [
      "正解を1つに絞る",
      "多くのアイデアを出す",
      "情報を削除する",
      "平均値を求める"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0046",
    "unit": "問題解決",
    "field": "発想法",
    "difficulty": "★",
    "question": "カードに書き出した意見をグループ化して整理する方法を何というか。",
    "options": [
      "KJ法",
      "PDCA法",
      "マインドマップ",
      "フローチャート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0047",
    "unit": "問題解決",
    "field": "発想法",
    "difficulty": "★",
    "question": "中心となるキーワードから関連する内容を枝分かれさせて整理する手法を何というか。",
    "options": [
      "散布図",
      "マインドマップ",
      "ヒストグラム",
      "特性要因図"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0048",
    "unit": "問題解決",
    "field": "ロジックツリー",
    "difficulty": "★",
    "question": "大きな問題を小さな要素に分解して整理する図を何というか。",
    "options": [
      "円グラフ",
      "ロジックツリー",
      "帯グラフ",
      "散布図"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0049",
    "unit": "問題解決",
    "field": "ロジックツリー",
    "difficulty": "★",
    "question": "ロジックツリーを利用する主な目的として最も適切なものはどれか。",
    "options": [
      "情報を暗号化するため",
      "問題の構造を明確にするため",
      "データ量を増やすため",
      "処理速度を上げるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0050",
    "unit": "問題解決",
    "field": "PDCA",
    "difficulty": "★",
    "question": "PDCAサイクルにおいて「計画→実行」の次に行う段階はどれか。",
    "options": [
      "改善",
      "確認",
      "共有",
      "分析"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0051",
    "unit": "問題解決",
    "field": "PDCA",
    "difficulty": "★",
    "question": "PDCAサイクルを繰り返し実施する目的として最も適切なものはどれか。",
    "options": [
      "問題を固定するため",
      "継続的に改善するため",
      "データを保存するため",
      "分析を省略するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0052",
    "unit": "問題解決",
    "field": "評価",
    "difficulty": "★",
    "question": "実施した解決策が有効だったかを確認する段階を何というか。",
    "options": [
      "評価",
      "抽象化",
      "情報収集",
      "具体化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0053",
    "unit": "問題解決",
    "field": "評価",
    "difficulty": "★",
    "question": "問題解決後に振り返りを行う主な理由として最も適切なものはどれか。",
    "options": [
      "同じ問題を繰り返さないため",
      "情報を削除するため",
      "データ量を増やすため",
      "分析をやめるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0054",
    "unit": "問題解決",
    "field": "意思決定",
    "difficulty": "★",
    "question": "複数の案を比較し、最適なものを選択することを何というか。",
    "options": [
      "抽象化",
      "意思決定",
      "情報共有",
      "モデル化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0055",
    "unit": "問題解決",
    "field": "意思決定",
    "difficulty": "★",
    "question": "解決策を選択する際に重視すべき観点として最も適切なものはどれか。",
    "options": [
      "実現可能性や効果",
      "作業者の好みだけ",
      "情報量の多さだけ",
      "処理速度だけ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0056",
    "unit": "問題解決",
    "field": "情報共有",
    "difficulty": "★",
    "question": "問題解決の結果を記録・共有する主な目的として最も適切なものはどれか。",
    "options": [
      "他者が再利用できるようにするため",
      "情報を隠すため",
      "データを削除するため",
      "作業を増やすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0057",
    "unit": "問題解決",
    "field": "情報活用",
    "difficulty": "★",
    "question": "問題解決に必要な情報を適切に扱い、判断する能力を何というか。",
    "options": [
      "情報活用能力",
      "暗記力",
      "計算力",
      "表現力"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0058",
    "unit": "問題解決",
    "field": "最適化",
    "difficulty": "★",
    "question": "複数の条件を満たしながら最も良い方法を探すことを何というか。",
    "options": [
      "最適化",
      "抽象化",
      "モデル化",
      "符号化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0059",
    "unit": "問題解決",
    "field": "制約条件",
    "difficulty": "★",
    "question": "「予算は5万円以内」「人数は20人以下」のように解決策を考える際の条件を何というか。",
    "options": [
      "目的変数",
      "制約条件",
      "外れ値",
      "標本"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0060",
    "unit": "問題解決",
    "field": "目的",
    "difficulty": "★",
    "question": "問題解決において「何を達成したいか」を表すものを何というか。",
    "options": [
      "目的",
      "制約条件",
      "モデル",
      "標本"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0061",
    "unit": "問題解決",
    "field": "問題の発見（練習）",
    "difficulty": "★★",
    "question": "ある学校で、放課後になると図書館の座席が不足することが問題になっている。問題解決の最初の段階で行うべきこととして最も適切なものはどれか。",
    "options": [
      "座席数を増やす",
      "図書館を増築する",
      "混雑の原因を調査する",
      "利用時間を制限する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0062",
    "unit": "問題解決",
    "field": "情報収集（練習）",
    "difficulty": "★★",
    "question": "文化祭の来場者数を増やす方法を考えるため、過去3年間の来場者数やアンケート結果を調べる活動として最も適切なものはどれか。",
    "options": [
      "情報収集",
      "評価",
      "抽象化",
      "最適化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0063",
    "unit": "問題解決",
    "field": "情報整理（練習）",
    "difficulty": "★★",
    "question": "アンケート結果を『学年』『性別』『満足度』ごとに分類した。この作業を何というか。",
    "options": [
      "モデル化",
      "情報整理",
      "意思決定",
      "シミュレーション"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0064",
    "unit": "問題解決",
    "field": "問題分析（練習）",
    "difficulty": "★★",
    "question": "『遅刻する生徒が多い』という問題について、『寝坊』『交通機関の遅延』『準備不足』などの原因を書き出して整理した。この手法として最も適切なものはどれか。",
    "options": [
      "特性要因図",
      "帯グラフ",
      "散布図",
      "円グラフ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0065",
    "unit": "問題解決",
    "field": "問題分析（練習）",
    "difficulty": "★★",
    "question": "学校祭の売上が減少した原因を分析するため、『人』『商品』『宣伝』などの観点から要因を分類した。このような分析の目的として最も適切なものはどれか。",
    "options": [
      "データを暗号化するため",
      "原因を体系的に整理するため",
      "平均値を求めるため",
      "プログラムを作るため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0066",
    "unit": "問題解決",
    "field": "モデル化（練習）",
    "difficulty": "★★",
    "question": "避難訓練で生徒の移動をコンピュータ上で再現する際、建物の細かな装飾を省略した。この理由として最も適切なものはどれか。",
    "options": [
      "データ量を増やすため",
      "本質的な特徴だけを扱うため",
      "計算を複雑にするため",
      "現実を完全に再現するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0067",
    "unit": "問題解決",
    "field": "モデル化（練習）",
    "difficulty": "★★",
    "question": "学校周辺の交通量を調査する際、自動車・自転車・歩行者の数だけを記録した。このように必要な情報だけを抜き出す考え方を何というか。",
    "options": [
      "具体化",
      "抽象化",
      "量子化",
      "圧縮"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0068",
    "unit": "問題解決",
    "field": "シミュレーション（練習）",
    "difficulty": "★★",
    "question": "文化祭当日の混雑状況を予測するため、来場者数を変えながらコンピュータ上で実験を行った。この手法を何というか。",
    "options": [
      "シミュレーション",
      "標本調査",
      "暗号化",
      "モデル化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0069",
    "unit": "問題解決",
    "field": "シミュレーション（練習）",
    "difficulty": "★★",
    "question": "体育館の避難経路を検討する際、コンピュータ上で複数の経路を試す利点として最も適切なものはどれか。",
    "options": [
      "必ず正しい結果が得られる",
      "現実では試しにくい条件を安全に検証できる",
      "調査が不要になる",
      "計算時間が短くなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0070",
    "unit": "問題解決",
    "field": "発想法（練習）",
    "difficulty": "★★",
    "question": "新しい学校行事の企画会議で、参加者全員が自由に意見を出し合い、批判をしないことを原則とした。この手法は何か。",
    "options": [
      "KJ法",
      "ロジックツリー",
      "ブレインストーミング",
      "PDCA法"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0071",
    "unit": "問題解決",
    "field": "発想法（練習）",
    "difficulty": "★★",
    "question": "ブレインストーミングで出された意見を似た内容ごとに分類した。この手法として最も適切なものはどれか。",
    "options": [
      "フローチャート",
      "KJ法",
      "散布図",
      "ヒストグラム"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0072",
    "unit": "問題解決",
    "field": "発想法（練習）",
    "difficulty": "★★",
    "question": "『学校生活をより便利にする方法』というテーマから、『授業』『部活動』『施設』などの関連語を枝状につなげて整理した。この方法を何というか。",
    "options": [
      "マインドマップ",
      "特性要因図",
      "帯グラフ",
      "ピボットテーブル"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0073",
    "unit": "問題解決",
    "field": "ロジックツリー（練習）",
    "difficulty": "★★",
    "question": "『売上を増やす』という目標を『来客数を増やす』『客単価を上げる』に分解した。このような図を何というか。",
    "options": [
      "円グラフ",
      "散布図",
      "ロジックツリー",
      "ヒストグラム"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0074",
    "unit": "問題解決",
    "field": "PDCA（練習）",
    "difficulty": "★★",
    "question": "『学習時間を増やす計画を立てる→実践する→成果を確認する→改善する』という活動は、どの考え方に基づいているか。",
    "options": [
      "KJ法",
      "PDCAサイクル",
      "ブレインストーミング",
      "抽象化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0075",
    "unit": "問題解決",
    "field": "PDCA（練習）",
    "difficulty": "★★",
    "question": "PDCAサイクルにおいて、テスト結果を分析し、次回の学習方法を見直す段階はどれか。",
    "options": [
      "Plan",
      "Do",
      "Check",
      "Act"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0076",
    "unit": "問題解決",
    "field": "評価（練習）",
    "difficulty": "★★",
    "question": "文化祭の新企画を実施した後、来場者アンケートを分析する目的として最も適切なものはどれか。",
    "options": [
      "データを削除するため",
      "企画の効果を評価するため",
      "参加者を増やすため",
      "予算を削減するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0077",
    "unit": "問題解決",
    "field": "意思決定（練習）",
    "difficulty": "★★",
    "question": "学校新聞を紙媒体で配布する案とWebで公開する案を比較する際、『費用』『閲覧しやすさ』などを検討することを何というか。",
    "options": [
      "抽象化",
      "意思決定",
      "暗号化",
      "モデル化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0078",
    "unit": "問題解決",
    "field": "意思決定（練習）",
    "difficulty": "★★",
    "question": "複数の案を比較するとき、最も重要なことはどれか。",
    "options": [
      "担当者の好みだけで決める",
      "評価基準を明確にする",
      "最初の案を採用する",
      "多数決だけで決める"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0079",
    "unit": "問題解決",
    "field": "制約条件（練習）",
    "difficulty": "★★",
    "question": "文化祭の出し物を決める際、『予算3万円以内』『準備期間2週間』という条件を設定した。このような条件を何というか。",
    "options": [
      "目的変数",
      "制約条件",
      "標本",
      "中央値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0080",
    "unit": "問題解決",
    "field": "最適化（練習）",
    "difficulty": "★★",
    "question": "限られた予算や時間の中で最も良い方法を選ぶことを何というか。",
    "options": [
      "モデル化",
      "抽象化",
      "最適化",
      "量子化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0081",
    "unit": "問題解決",
    "field": "情報共有（練習）",
    "difficulty": "★★",
    "question": "問題解決の過程や結果を文書として残しておく主な目的として最も適切なものはどれか。",
    "options": [
      "後から改善や再利用ができるようにするため",
      "データ量を減らすため",
      "プログラムを作るため",
      "情報を隠すため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0082",
    "unit": "問題解決",
    "field": "フローチャート（練習）",
    "difficulty": "★★",
    "question": "問題解決の手順を図として表現するために、処理や条件分岐を記号で表したものを何というか。",
    "options": [
      "ロジックツリー",
      "フローチャート",
      "散布図",
      "帯グラフ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0083",
    "unit": "問題解決",
    "field": "アルゴリズム（練習）",
    "difficulty": "★★",
    "question": "『信号が青なら渡る、赤なら待つ』というように、条件によって処理を変える構造を何というか。",
    "options": [
      "順次構造",
      "反復構造",
      "分岐構造",
      "階層構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0084",
    "unit": "問題解決",
    "field": "アルゴリズム（練習）",
    "difficulty": "★★",
    "question": "毎日、宿題が終わるまで学習を続ける処理は、アルゴリズムのどの構造に当たるか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "並列構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0085",
    "unit": "問題解決",
    "field": "問題解決の流れ（練習）",
    "difficulty": "★★",
    "question": "『問題の発見→情報収集→分析→解決策の実施→評価』の流れとして最も適切なものはどれか。",
    "options": [
      "評価→分析→実施→情報収集→問題発見",
      "問題発見→情報収集→分析→実施→評価",
      "情報収集→評価→分析→実施→問題発見",
      "分析→問題発見→情報収集→評価→実施"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0086",
    "unit": "問題解決",
    "field": "データ活用（練習）",
    "difficulty": "★★",
    "question": "学校の自転車置き場の混雑状況を調べるため、毎日の利用台数を記録した。この活動の目的として最も適切なものはどれか。",
    "options": [
      "感覚だけで判断するため",
      "客観的なデータを基に改善策を考えるため",
      "データ量を増やすため",
      "シミュレーションを省略するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0087",
    "unit": "問題解決",
    "field": "情報の信頼性（練習）",
    "difficulty": "★★",
    "question": "インターネット上の情報を問題解決に利用する際、最も重要なことはどれか。",
    "options": [
      "最初に見つけた情報だけを使う",
      "SNSの投稿だけを信じる",
      "情報の出典や信頼性を確認する",
      "新しい情報を避ける"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0088",
    "unit": "問題解決",
    "field": "抽象化（練習）",
    "difficulty": "★★",
    "question": "『自転車』『自動車』『バス』を『乗り物』としてまとめる考え方を何というか。",
    "options": [
      "具体化",
      "抽象化",
      "最適化",
      "量子化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0089",
    "unit": "問題解決",
    "field": "具体化（練習）",
    "difficulty": "★★",
    "question": "『交通機関』という分類を『電車』『バス』『飛行機』に分けて考えることを何というか。",
    "options": [
      "抽象化",
      "具体化",
      "モデル化",
      "最適化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0090",
    "unit": "問題解決",
    "field": "総合（練習）",
    "difficulty": "★★",
    "question": "問題解決において、限られた時間や予算の中で最適な解決策を選ぶために最も重要な考え方はどれか。",
    "options": [
      "制約条件を考慮すること",
      "データを増やすこと",
      "平均値を求めること",
      "情報を非公開にすること"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0091",
    "unit": "問題解決",
    "field": "問題の発見（練習）",
    "difficulty": "★★",
    "question": "ある学校では、朝の登校時間帯に校門前で混雑が発生している。問題解決の第一歩として最も適切なものはどれか。",
    "options": [
      "登校時間を変更する",
      "混雑の原因を調査する",
      "校門を増設する",
      "生徒数を減らす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0092",
    "unit": "問題解決",
    "field": "情報収集（練習）",
    "difficulty": "★★",
    "question": "校内の自動販売機の利用状況を調査するため、1週間にわたって利用者数を記録した。この活動として最も適切なものはどれか。",
    "options": [
      "情報収集",
      "モデル化",
      "抽象化",
      "最適化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0093",
    "unit": "問題解決",
    "field": "情報の信頼性（練習）",
    "difficulty": "★★",
    "question": "新しい通学路の安全性を調べる際、最も信頼性が高い情報源として適切なものはどれか。",
    "options": [
      "友人1人の感想",
      "SNSの投稿",
      "警察や自治体の公表資料",
      "匿名掲示板"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0094",
    "unit": "問題解決",
    "field": "問題分析（練習）",
    "difficulty": "★★",
    "question": "学校祭の来場者数が減少した原因を分析するため、『宣伝』『天候』『企画内容』などの観点で整理した。この目的として最も適切なものはどれか。",
    "options": [
      "原因を体系的に把握するため",
      "データ量を増やすため",
      "情報を削除するため",
      "計算を簡単にするため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0095",
    "unit": "問題解決",
    "field": "問題分析（練習）",
    "difficulty": "★★",
    "question": "ある問題について『なぜそうなったのか』を繰り返し考え、根本原因を探る方法を何というか。",
    "options": [
      "KJ法",
      "PDCA法",
      "なぜなぜ分析",
      "シミュレーション"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0096",
    "unit": "問題解決",
    "field": "情報整理（練習）",
    "difficulty": "★★",
    "question": "アンケート結果を『学年』『部活動』『通学手段』ごとに分類した。この作業として最も適切なものはどれか。",
    "options": [
      "情報整理",
      "意思決定",
      "モデル化",
      "評価"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0097",
    "unit": "問題解決",
    "field": "抽象化（練習）",
    "difficulty": "★★",
    "question": "『数学の宿題』『英語の宿題』『理科の宿題』を『課題』という共通の概念でまとめる考え方を何というか。",
    "options": [
      "具体化",
      "抽象化",
      "最適化",
      "モデル化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0098",
    "unit": "問題解決",
    "field": "具体化（練習）",
    "difficulty": "★★",
    "question": "『交通機関』という概念を『電車』『バス』『タクシー』などに分けて考えることを何というか。",
    "options": [
      "モデル化",
      "最適化",
      "具体化",
      "抽象化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0099",
    "unit": "問題解決",
    "field": "モデル化（練習）",
    "difficulty": "★★",
    "question": "文化祭当日の人の流れを調べるため、校舎の配置や通路を簡略化した図を作成した。この作業として最も適切なものはどれか。",
    "options": [
      "標本調査",
      "モデル化",
      "量子化",
      "評価"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0100",
    "unit": "問題解決",
    "field": "モデル化（練習）",
    "difficulty": "★★",
    "question": "学校周辺の交通状況を分析する際、建物の色や看板のデザインを省略した理由として最も適切なものはどれか。",
    "options": [
      "情報量を増やすため",
      "本質的な特徴だけを扱うため",
      "見栄えを良くするため",
      "データを暗号化するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0101",
    "unit": "問題解決",
    "field": "シミュレーション（練習）",
    "difficulty": "★★",
    "question": "避難訓練の計画を立てる際、コンピュータ上で避難時間を予測した。この手法を何というか。",
    "options": [
      "シミュレーション",
      "標本調査",
      "抽象化",
      "具体化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0102",
    "unit": "問題解決",
    "field": "シミュレーション（練習）",
    "difficulty": "★★",
    "question": "シミュレーションの結果を利用する際に注意すべきことはどれか。",
    "options": [
      "現実と必ず一致するとは限らない",
      "計算結果は必ず誤っている",
      "データ収集は不要である",
      "条件を変更できない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0103",
    "unit": "問題解決",
    "field": "シミュレーション（練習）",
    "difficulty": "★★",
    "question": "文化祭の模擬店の待ち時間を予測するため、来場者数を変えて何度も試算した。このような方法の利点として最も適切なものはどれか。",
    "options": [
      "現実では試せない条件を安全に検証できる",
      "必ず正しい結果が得られる",
      "データ収集が不要になる",
      "計算量を減らせる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0104",
    "unit": "問題解決",
    "field": "発想法（練習）",
    "difficulty": "★★",
    "question": "会議で自由な発言を促し、質より量を重視して多くの意見を出す方法を何というか。",
    "options": [
      "KJ法",
      "ブレインストーミング",
      "PDCA法",
      "ロジックツリー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0105",
    "unit": "問題解決",
    "field": "発想法（練習）",
    "difficulty": "★★",
    "question": "ブレインストーミングで出された意見をカードに書き出し、関連するもの同士をまとめる方法を何というか。",
    "options": [
      "KJ法",
      "特性要因図",
      "散布図",
      "フローチャート"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0106",
    "unit": "問題解決",
    "field": "発想法（練習）",
    "difficulty": "★★",
    "question": "『学校生活を便利にする方法』というテーマから、関連する単語を枝分かれさせて整理した。この手法として最も適切なものはどれか。",
    "options": [
      "ヒストグラム",
      "マインドマップ",
      "帯グラフ",
      "散布図"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0107",
    "unit": "問題解決",
    "field": "ロジックツリー（練習）",
    "difficulty": "★★",
    "question": "『部活動の参加者を増やす』という目標を『認知度を上げる』『活動内容を改善する』などに分解した。この図を何というか。",
    "options": [
      "ロジックツリー",
      "円グラフ",
      "散布図",
      "ヒストグラム"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0108",
    "unit": "問題解決",
    "field": "ロジックツリー（練習）",
    "difficulty": "★★",
    "question": "ロジックツリーを作成する目的として最も適切なものはどれか。",
    "options": [
      "問題の構造を明確にするため",
      "情報を暗号化するため",
      "データ量を増やすため",
      "計算を高速化するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0109",
    "unit": "問題解決",
    "field": "意思決定（練習）",
    "difficulty": "★★",
    "question": "文化祭の出し物を決める際、『費用』『準備期間』『安全性』を比較した。この作業として最も適切なものはどれか。",
    "options": [
      "意思決定",
      "抽象化",
      "情報収集",
      "モデル化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0110",
    "unit": "問題解決",
    "field": "意思決定（練習）",
    "difficulty": "★★",
    "question": "複数の案を比較する際に、あらかじめ『予算』『効果』などの観点を決めておく理由として最も適切なものはどれか。",
    "options": [
      "公平に比較するため",
      "データ量を増やすため",
      "時間を長くするため",
      "意見を減らすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0111",
    "unit": "問題解決",
    "field": "制約条件（練習）",
    "difficulty": "★★",
    "question": "『予算5万円以内』『準備期間は2週間以内』のように、解決策を考える際に満たす必要がある条件を何というか。",
    "options": [
      "制約条件",
      "目的変数",
      "中央値",
      "標本"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0112",
    "unit": "問題解決",
    "field": "最適化（練習）",
    "difficulty": "★★",
    "question": "限られた予算や時間の中で、最も効果的な方法を選ぶことを何というか。",
    "options": [
      "モデル化",
      "最適化",
      "抽象化",
      "具体化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0113",
    "unit": "問題解決",
    "field": "評価（練習）",
    "difficulty": "★★",
    "question": "新しい校則を試験的に導入した後、生徒へのアンケートを実施した。この目的として最も適切なものはどれか。",
    "options": [
      "施策の効果を評価するため",
      "情報を削除するため",
      "予算を決めるため",
      "問題を隠すため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0114",
    "unit": "問題解決",
    "field": "PDCA（練習）",
    "difficulty": "★★",
    "question": "学習計画を立て、実行し、テスト結果を分析して改善するという一連の流れを何というか。",
    "options": [
      "KJ法",
      "PDCAサイクル",
      "ブレインストーミング",
      "ロジックツリー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0115",
    "unit": "問題解決",
    "field": "PDCA（練習）",
    "difficulty": "★★",
    "question": "PDCAサイクルの『Check』で行うこととして最も適切なものはどれか。",
    "options": [
      "計画を立てる",
      "結果を分析する",
      "改善策を実行する",
      "情報を収集する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0116",
    "unit": "問題解決",
    "field": "PDCA（練習）",
    "difficulty": "★★",
    "question": "PDCAサイクルの『Act』で行うこととして最も適切なものはどれか。",
    "options": [
      "結果をもとに改善する",
      "実際に行動する",
      "目標を決める",
      "データを収集する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0117",
    "unit": "問題解決",
    "field": "アルゴリズム（練習）",
    "difficulty": "★★",
    "question": "『雨が降っていたら傘を持つ。降っていなければ持たない。』という処理は、どの構造に当たるか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "階層構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0118",
    "unit": "問題解決",
    "field": "アルゴリズム（練習）",
    "difficulty": "★★",
    "question": "『5回繰り返し掃除を行う』という処理は、どの構造に当たるか。",
    "options": [
      "分岐構造",
      "順次構造",
      "反復構造",
      "抽象構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0119",
    "unit": "問題解決",
    "field": "アルゴリズム（練習）",
    "difficulty": "★★",
    "question": "『起床する→朝食を食べる→登校する』という処理は、どの構造に当たるか。",
    "options": [
      "順次構造",
      "反復構造",
      "分岐構造",
      "選択構造"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0120",
    "unit": "問題解決",
    "field": "フローチャート（練習）",
    "difficulty": "★★",
    "question": "フローチャートで条件分岐を表す記号として使われるものはどれか。",
    "options": [
      "長方形",
      "ひし形",
      "楕円",
      "平行四辺形"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0121",
    "unit": "問題解決",
    "field": "フローチャート（練習）",
    "difficulty": "★★",
    "question": "フローチャートで『処理』を表す記号として最も適切なものはどれか。",
    "options": [
      "長方形",
      "ひし形",
      "楕円",
      "矢印"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0122",
    "unit": "問題解決",
    "field": "フローチャート（練習）",
    "difficulty": "★★",
    "question": "フローチャートにおいて、処理の流れを示すものはどれか。",
    "options": [
      "円",
      "矢印",
      "四角形",
      "ひし形"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0123",
    "unit": "問題解決",
    "field": "情報共有（練習）",
    "difficulty": "★★",
    "question": "問題解決の過程を記録として残しておく利点として最も適切なものはどれか。",
    "options": [
      "次回以降の改善に役立つ",
      "データを削除できる",
      "計算速度が上がる",
      "情報収集が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0124",
    "unit": "問題解決",
    "field": "情報共有（練習）",
    "difficulty": "★★",
    "question": "学校で作成したマニュアルを共有する主な目的として最も適切なものはどれか。",
    "options": [
      "個人の作業を増やすため",
      "知識やノウハウを引き継ぐため",
      "情報を隠すため",
      "評価をなくすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0125",
    "unit": "問題解決",
    "field": "情報の信頼性（練習）",
    "difficulty": "★★",
    "question": "インターネット上の複数のサイトで異なる情報が掲載されていた。このとき最も適切な行動はどれか。",
    "options": [
      "最初に見た情報を信じる",
      "情報源や発信者を確認する",
      "SNSの意見に従う",
      "多数派の意見を採用する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0126",
    "unit": "問題解決",
    "field": "問題解決の流れ（練習）",
    "difficulty": "★★",
    "question": "問題解決の過程において、解決策を考える前に原因を分析する理由として最も適切なものはどれか。",
    "options": [
      "効果的な解決策を立てるため",
      "データ量を増やすため",
      "計算を簡単にするため",
      "評価を省略するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0127",
    "unit": "問題解決",
    "field": "総合問題（練習）",
    "difficulty": "★★",
    "question": "学校のWi-Fiが昼休みに遅くなる原因を調べるため、まず接続台数や通信量を測定した。この行動として最も適切なものはどれか。",
    "options": [
      "意思決定",
      "情報収集",
      "抽象化",
      "最適化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0128",
    "unit": "問題解決",
    "field": "総合問題（練習）",
    "difficulty": "★★",
    "question": "体育館の空調の利用方法を改善するため、複数の設定をコンピュータ上で試した。この方法として最も適切なものはどれか。",
    "options": [
      "シミュレーション",
      "標本調査",
      "具体化",
      "暗号化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0129",
    "unit": "問題解決",
    "field": "問題の発見・分析（演習）",
    "difficulty": "★★★",
    "question": "ある高校では、昼休みの購買の待ち時間が長いことが問題となっている。調査の結果、特定の商品に注文が集中していることが分かった。この問題を解決するための最初の改善策として最も適切なものはどれか。",
    "options": [
      "商品の価格を値上げする",
      "人気商品の販売窓口を増やす",
      "昼休みを短くする",
      "購買を閉鎖する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0130",
    "unit": "問題解決",
    "field": "情報収集（演習）",
    "difficulty": "★★★",
    "question": "学校の図書館利用率を向上させるためにアンケートを実施することになった。利用しない理由を正しく把握するための質問として最も適切なものはどれか。",
    "options": [
      "図書館は好きですか",
      "最近読んだ本の冊数は何冊ですか",
      "図書館を利用しない理由として当てはまるものを選んでください",
      "図書館を利用するべきだと思いますか"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0131",
    "unit": "問題解決",
    "field": "情報の信頼性（演習）",
    "difficulty": "★★★",
    "question": "ある商品の購入を検討している。SNSでは高評価が多いが、専門機関の調査では評価が低かった。このとき最も適切な判断はどれか。",
    "options": [
      "SNSだけを信頼する",
      "専門機関の調査だけを信頼する",
      "複数の情報源を比較して判断する",
      "多数派の意見に従う"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0132",
    "unit": "問題解決",
    "field": "抽象化（演習）",
    "difficulty": "★★★",
    "question": "コンビニ、スーパー、書店に共通する特徴を整理し、『商品を販売する施設』としてまとめた。この考え方を何というか。",
    "options": [
      "具体化",
      "抽象化",
      "モデル化",
      "最適化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0133",
    "unit": "問題解決",
    "field": "具体化（演習）",
    "difficulty": "★★★",
    "question": "『情報機器』という概念を、スマートフォン、タブレット、パソコンなどに分けて考えることを何というか。",
    "options": [
      "モデル化",
      "最適化",
      "具体化",
      "抽象化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0134",
    "unit": "問題解決",
    "field": "モデル化（演習）",
    "difficulty": "★★★",
    "question": "文化祭の来場者数を予測するため、過去のデータをもとに『天候』『曜日』『開催時間』だけを用いたモデルを作成した。このとき、これらの要素だけを選んだ理由として最も適切なものはどれか。",
    "options": [
      "現実を完全に再現するため",
      "問題の本質を捉えるため",
      "データを減らすため",
      "計算を複雑にするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0135",
    "unit": "問題解決",
    "field": "モデル化（演習）",
    "difficulty": "★★★",
    "question": "避難経路をシミュレーションする際、校舎内の壁の色や掲示物を考慮しなかった。この判断の理由として最も適切なものはどれか。",
    "options": [
      "重要な要素ではないため",
      "データ量を増やすため",
      "現実を忠実に再現するため",
      "処理速度を低下させるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0136",
    "unit": "問題解決",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "ある自治体では、災害時の避難経路を検討するためにシミュレーションを利用している。この手法の利点として最も適切なものはどれか。",
    "options": [
      "現実では試しにくい条件を検証できる",
      "必ず正しい結果が得られる",
      "情報収集が不要になる",
      "計算量が少なくなる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0137",
    "unit": "問題解決",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "シミュレーションの結果と現実の結果が異なった。この原因として最も考えられるものはどれか。",
    "options": [
      "シミュレーションでは乱数を使えないため",
      "モデル化の際に考慮していない条件があったため",
      "コンピュータの性能が高すぎたため",
      "データを表にまとめたため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0138",
    "unit": "問題解決",
    "field": "発想法（演習）",
    "difficulty": "★★★",
    "question": "『校内のごみを減らす方法』を考える会議で、参加者が自由に意見を出し合った後、似た意見を分類した。分類の段階で用いられた手法はどれか。",
    "options": [
      "ブレインストーミング",
      "KJ法",
      "PDCAサイクル",
      "フローチャート"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0139",
    "unit": "問題解決",
    "field": "発想法（演習）",
    "difficulty": "★★★",
    "question": "ブレインストーミングを行う際のルールとして、不適切なものはどれか。",
    "options": [
      "他人の意見を批判しない",
      "自由な発想を歓迎する",
      "質より量を重視する",
      "現実的でない意見を排除する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0140",
    "unit": "問題解決",
    "field": "ロジックツリー（演習）",
    "difficulty": "★★★",
    "question": "『学校の電気代を削減する』という課題について、『使用量を減らす』『単価を下げる』という観点に分解した。このような手法の目的として最も適切なものはどれか。",
    "options": [
      "原因や解決策を整理するため",
      "データを暗号化するため",
      "計算を簡単にするため",
      "情報量を増やすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0141",
    "unit": "問題解決",
    "field": "意思決定（演習）",
    "difficulty": "★★★",
    "question": "文化祭の模擬店を決める際、『利益』『準備時間』『安全性』の3項目を点数化して比較した。この方法の利点として最も適切なものはどれか。",
    "options": [
      "担当者の好みを反映できる",
      "客観的に比較しやすくなる",
      "準備時間を短縮できる",
      "計算が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0142",
    "unit": "問題解決",
    "field": "意思決定（演習）",
    "difficulty": "★★★",
    "question": "複数の解決策を比較する際、評価項目に重み付けを行う理由として最も適切なものはどれか。",
    "options": [
      "項目ごとの重要度が異なるため",
      "データ量を増やすため",
      "計算を簡単にするため",
      "情報を整理するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0143",
    "unit": "問題解決",
    "field": "制約条件（演習）",
    "difficulty": "★★★",
    "question": "体育祭のプログラムを決める際、『予算』『競技時間』『安全性』を考慮した。このような条件を総称して何というか。",
    "options": [
      "制約条件",
      "目的変数",
      "代表値",
      "外れ値"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0144",
    "unit": "問題解決",
    "field": "最適化（演習）",
    "difficulty": "★★★",
    "question": "学校の送迎バスの運行計画を立てる際、運行本数を増やせば待ち時間は短くなるが費用は増加する。このような状況で必要となる考え方はどれか。",
    "options": [
      "抽象化",
      "最適化",
      "暗号化",
      "標本調査"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0145",
    "unit": "問題解決",
    "field": "評価（演習）",
    "difficulty": "★★★",
    "question": "新しい学習アプリを導入した後、その効果を調べるために行うべきこととして最も適切なものはどれか。",
    "options": [
      "導入前後の成績やアンケートを比較する",
      "アプリの広告を増やす",
      "アプリを削除する",
      "利用時間を制限する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0146",
    "unit": "問題解決",
    "field": "PDCA（演習）",
    "difficulty": "★★★",
    "question": "PDCAサイクルにおいて、『学習計画を立てる→実施する→テスト結果を分析する→改善する』という流れを繰り返す目的として最も適切なものはどれか。",
    "options": [
      "継続的な改善を行うため",
      "データ量を増やすため",
      "評価を省略するため",
      "問題を固定するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0147",
    "unit": "問題解決",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "あるフローチャートに『点数が80点以上なら「合格」と表示し、そうでなければ「再試験」と表示する』処理がある。この構造として最も適切なものはどれか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "並列構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0148",
    "unit": "問題解決",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "『忘れ物がなくなるまで持ち物を確認する』という処理は、アルゴリズムのどの構造に当たるか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "抽象構造"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0149",
    "unit": "問題解決",
    "field": "フローチャート（演習）",
    "difficulty": "★★★",
    "question": "フローチャートを用いて問題解決の手順を表現する利点として最も適切なものはどれか。",
    "options": [
      "処理の流れを視覚的に把握しやすい",
      "データ量が増える",
      "必ず最適解が得られる",
      "情報収集が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0150",
    "unit": "問題解決",
    "field": "情報共有（演習）",
    "difficulty": "★★★",
    "question": "学校行事の運営マニュアルを毎年更新して保存している。この活動の目的として最も適切なものはどれか。",
    "options": [
      "ノウハウを次年度に引き継ぐため",
      "情報を隠すため",
      "文書量を増やすため",
      "作業を複雑にするため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0151",
    "unit": "問題解決",
    "field": "情報の信頼性（演習）",
    "difficulty": "★★★",
    "question": "あるWebサイトには『この勉強法で必ず成績が上がる』と書かれていた。この情報を活用する際に最も重要なことはどれか。",
    "options": [
      "広告の大きさを確認する",
      "発信者や根拠を確認する",
      "コメント欄だけを見る",
      "SNSで拡散する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0152",
    "unit": "問題解決",
    "field": "データ活用（演習）",
    "difficulty": "★★★",
    "question": "図書館の利用率向上のため、貸出冊数だけでなく、利用時間帯や学年別の利用状況も調査した。この理由として最も適切なものはどれか。",
    "options": [
      "多面的に原因を分析するため",
      "データ量を増やすため",
      "計算を複雑にするため",
      "評価を省略するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0153",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "学校のWi-Fiが昼休みに遅くなる問題について、調査の結果『動画視聴サービスへのアクセスが急増している』ことが分かった。この時点で次に行うべきこととして最も適切なものはどれか。",
    "options": [
      "原因を踏まえて改善策を検討する",
      "すぐに機器を交換する",
      "調査を終了する",
      "Wi-Fiを停止する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0154",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "あるクラスでは『提出物の期限遅れが多い』という問題がある。担任は『連絡方法』『提出方法』『締切日』などの要因を整理した。この作業として最も適切なものはどれか。",
    "options": [
      "問題分析",
      "シミュレーション",
      "評価",
      "具体化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0155",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "学校の購買の混雑を解消するため、『レジを増やす案』と『事前予約制を導入する案』を比較している。比較の際に最も重要なことはどれか。",
    "options": [
      "担当者の好みで決める",
      "評価基準を明確にする",
      "最初の案を採用する",
      "多数決だけで決める"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0156",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "ある地域ではバスの本数を増やしたが、利用者数はあまり増えなかった。この結果から直ちに結論づけることができないものはどれか。",
    "options": [
      "本数以外の要因が存在する可能性",
      "利用者数の変化を追加調査する必要性",
      "バスの本数を増やせば必ず利用者が増えること",
      "問題解決には多面的な分析が必要なこと"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0157",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "学校祭の来場者数を予測するモデルを作成したところ、予測値と実際の値に大きな差が生じた。まず見直すべきものとして最も適切なものはどれか。",
    "options": [
      "モデル化の前提条件",
      "コンピュータのメーカー",
      "データの表示色",
      "使用した表計算ソフト"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0158",
    "unit": "問題解決",
    "field": "問題発見（演習）",
    "difficulty": "★★★",
    "question": "ある高校では、放課後になると職員室前のコピー機が混雑することが問題となっている。原因を特定するための調査方法として最も適切なものはどれか。",
    "options": [
      "利用者数と利用時間帯を記録する",
      "コピー機を増設する",
      "利用者に注意する",
      "利用を禁止する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0159",
    "unit": "問題解決",
    "field": "問題分析（演習）",
    "difficulty": "★★★",
    "question": "学校の食堂の売上が減少した原因を調べる際、「価格」「メニュー」「営業時間」などの観点に分けて整理した。この目的として最も適切なものはどれか。",
    "options": [
      "問題の構造を明確にするため",
      "データを削減するため",
      "計算を簡単にするため",
      "結論を先に決めるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0160",
    "unit": "問題解決",
    "field": "データ収集（演習）",
    "difficulty": "★★★",
    "question": "教室の空調設備を改善するため、温度だけでなく湿度や人数も記録した。この理由として最も適切なものはどれか。",
    "options": [
      "複数の要因を考慮するため",
      "記録用紙を埋めるため",
      "計算量を増やすため",
      "調査期間を短縮するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0161",
    "unit": "問題解決",
    "field": "データ収集（演習）",
    "difficulty": "★★★",
    "question": "学校全体の意見を調べたいが、全校生徒への調査は困難である。このとき、各学年から均等に生徒を選んで調査する方法として最も適切なものはどれか。",
    "options": [
      "全数調査",
      "無作為抽出",
      "層化抽出",
      "聞き取り調査"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0162",
    "unit": "問題解決",
    "field": "問題設定（演習）",
    "difficulty": "★★★",
    "question": "「学校をより良くしたい」という漠然とした目標を、「昼休みの校庭利用率を20％向上させる」という形に具体化した。この作業として最も適切なものはどれか。",
    "options": [
      "評価",
      "問題設定",
      "モデル化",
      "抽象化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0163",
    "unit": "問題解決",
    "field": "抽象化（演習）",
    "difficulty": "★★★",
    "question": "バス、電車、自転車を『移動手段』としてまとめる考え方を何というか。",
    "options": [
      "具体化",
      "抽象化",
      "最適化",
      "分類"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0164",
    "unit": "問題解決",
    "field": "具体化（演習）",
    "difficulty": "★★★",
    "question": "「飲食店」という概念を、ファストフード店、レストラン、カフェなどに分けて考えることを何というか。",
    "options": [
      "モデル化",
      "抽象化",
      "具体化",
      "最適化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0165",
    "unit": "問題解決",
    "field": "モデル化（演習）",
    "difficulty": "★★★",
    "question": "避難経路をシミュレーションする際、教室の机の色や掲示物を省略した。この理由として最も適切なものはどれか。",
    "options": [
      "本質的な要素に注目するため",
      "計算を複雑にするため",
      "データを増やすため",
      "現実を完全に再現するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0166",
    "unit": "問題解決",
    "field": "モデル化（演習）",
    "difficulty": "★★★",
    "question": "実際の交通状況を再現するシミュレーションで、信号機の故障や事故を考慮しなかった。この場合、シミュレーション結果を利用する際に最も注意すべきことはどれか。",
    "options": [
      "現実と異なる可能性がある",
      "必ず誤っている",
      "データ収集が不要になる",
      "結果は変化しない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0167",
    "unit": "問題解決",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "文化祭の来場者数を予測するため、過去5年間のデータを用いて複数回試算した。この方法の利点として最も適切なものはどれか。",
    "options": [
      "現実では試せない条件も検証できる",
      "データが不要になる",
      "結果が必ず正しい",
      "計算が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0168",
    "unit": "問題解決",
    "field": "発想法（演習）",
    "difficulty": "★★★",
    "question": "「通学中の安全対策」をテーマとした会議で、自由に意見を出し合った後、似た意見をグループ化した。グループ化の手法として最も適切なものはどれか。",
    "options": [
      "KJ法",
      "PDCA法",
      "PERT図",
      "散布図"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0169",
    "unit": "問題解決",
    "field": "発想法（演習）",
    "difficulty": "★★★",
    "question": "ブレインストーミングで意見を出し合う際、守るべきルールとして適切でないものはどれか。",
    "options": [
      "他人の意見を批判しない",
      "自由な発想を歓迎する",
      "アイデアを組み合わせる",
      "実現可能な案だけを出す"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0170",
    "unit": "問題解決",
    "field": "ロジックツリー（演習）",
    "difficulty": "★★★",
    "question": "「遅刻を減らす」という課題を、「起床時刻」「通学時間」「交通手段」などに分解した。この作業の目的として最も適切なものはどれか。",
    "options": [
      "問題を細分化するため",
      "データを暗号化するため",
      "情報量を増やすため",
      "結果を隠すため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0171",
    "unit": "問題解決",
    "field": "意思決定（演習）",
    "difficulty": "★★★",
    "question": "複数の候補を比較する際、評価項目ごとに点数を付けて比較する方法の利点として最も適切なものはどれか。",
    "options": [
      "客観的な比較がしやすい",
      "計算が不要になる",
      "必ず最適解が得られる",
      "情報収集が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0172",
    "unit": "問題解決",
    "field": "意思決定（演習）",
    "difficulty": "★★★",
    "question": "体育祭の競技を決める際、「安全性」を「盛り上がり」よりも重視した。このような判断を反映する方法として最も適切なものはどれか。",
    "options": [
      "無作為抽出",
      "重み付け",
      "具体化",
      "抽象化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0173",
    "unit": "問題解決",
    "field": "制約条件（演習）",
    "difficulty": "★★★",
    "question": "学校行事の計画において、「予算10万円以内」「準備期間は1か月以内」という条件を何というか。",
    "options": [
      "評価基準",
      "制約条件",
      "目的変数",
      "中央値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0174",
    "unit": "問題解決",
    "field": "最適化（演習）",
    "difficulty": "★★★",
    "question": "スクールバスの運行回数を増やせば利便性は向上するが、費用も増加する。このような状況で求められる考え方はどれか。",
    "options": [
      "モデル化",
      "抽象化",
      "最適化",
      "具体化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0175",
    "unit": "問題解決",
    "field": "評価（演習）",
    "difficulty": "★★★",
    "question": "新しい校則を導入した後、一定期間後にアンケートやデータを収集する主な目的はどれか。",
    "options": [
      "施策の効果を検証するため",
      "問題を隠すため",
      "情報量を増やすため",
      "計画を省略するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0176",
    "unit": "問題解決",
    "field": "PDCAサイクル（演習）",
    "difficulty": "★★★",
    "question": "テスト勉強の方法を改善するため、前回の勉強法を振り返って修正した。この行動はPDCAサイクルのどの段階に当たるか。",
    "options": [
      "Plan",
      "Do",
      "Check",
      "Act"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0177",
    "unit": "問題解決",
    "field": "PDCAサイクル（演習）",
    "difficulty": "★★★",
    "question": "PDCAサイクルを継続して回す最大の目的として最も適切なものはどれか。",
    "options": [
      "継続的な改善を行うため",
      "同じ方法を維持するため",
      "作業量を増やすため",
      "情報を減らすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0178",
    "unit": "問題解決",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "「点数が60点以上なら合格、そうでなければ再試験」という処理は、アルゴリズムのどの基本構造に当たるか。",
    "options": [
      "順次構造",
      "分岐構造",
      "反復構造",
      "並列構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0179",
    "unit": "問題解決",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "「全員の答案を採点し終えるまで採点を続ける」という処理は、どの基本構造に当たるか。",
    "options": [
      "順次構造",
      "反復構造",
      "分岐構造",
      "抽象構造"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0180",
    "unit": "問題解決",
    "field": "アルゴリズム（演習）",
    "difficulty": "★★★",
    "question": "フローチャートにおいて、データの入力や出力を表す記号として一般的に用いられるものはどれか。",
    "options": [
      "長方形",
      "ひし形",
      "平行四辺形",
      "楕円"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0181",
    "unit": "問題解決",
    "field": "フローチャート（演習）",
    "difficulty": "★★★",
    "question": "フローチャートで開始や終了を表す記号はどれか。",
    "options": [
      "長方形",
      "ひし形",
      "楕円",
      "平行四辺形"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0182",
    "unit": "問題解決",
    "field": "情報共有（演習）",
    "difficulty": "★★★",
    "question": "学校行事の反省点や改善点を文書として残す利点として最も適切なものはどれか。",
    "options": [
      "次年度の担当者が活用できる",
      "作業時間を増やせる",
      "情報を隠せる",
      "責任者を減らせる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0183",
    "unit": "問題解決",
    "field": "情報の信頼性（演習）",
    "difficulty": "★★★",
    "question": "ある健康法について、動画配信サイトでは効果があると紹介されていたが、専門家の論文では否定されていた。この場合、最も適切な行動はどれか。",
    "options": [
      "再生回数の多い動画を信じる",
      "最初に見た情報を採用する",
      "複数の情報源を確認する",
      "友人の意見だけを参考にする"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0184",
    "unit": "問題解決",
    "field": "問題分析（演習）",
    "difficulty": "★★★",
    "question": "学校のWi-Fiが遅い原因を調べる際、利用人数だけでなく時間帯ごとの通信量も調査した。この理由として最も適切なものはどれか。",
    "options": [
      "多角的に分析するため",
      "データを減らすため",
      "計算を単純化するため",
      "結果を固定するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0185",
    "unit": "問題解決",
    "field": "問題分析（演習）",
    "difficulty": "★★★",
    "question": "『体育館が暑い』という問題について、『換気』『空調』『人数』などの要因を整理した図として最も適切なものはどれか。",
    "options": [
      "特性要因図",
      "帯グラフ",
      "散布図",
      "箱ひげ図"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0186",
    "unit": "問題解決",
    "field": "意思決定（演習）",
    "difficulty": "★★★",
    "question": "文化祭の企画を決める際、担当者Aは『利益』を重視し、担当者Bは『安全性』を重視した。このような状況で重要なのはどれか。",
    "options": [
      "評価基準を共有する",
      "多数決を避ける",
      "計算を行わない",
      "データを減らす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0187",
    "unit": "問題解決",
    "field": "シミュレーション（演習）",
    "difficulty": "★★★",
    "question": "災害時の避難経路シミュレーションで、想定する避難者数を変更して結果を比較した。この目的として最も適切なものはどれか。",
    "options": [
      "条件の変化による影響を調べるため",
      "現実を無視するため",
      "計算回数を減らすため",
      "情報を削除するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0188",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "ある学校では、自転車通学者の事故が増加している。『事故件数』『発生場所』『時間帯』を調査した後に行うべきこととして最も適切なものはどれか。",
    "options": [
      "原因を分析して対策を検討する",
      "調査結果を破棄する",
      "すべての自転車通学を禁止する",
      "追加調査を行わない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0189",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "学校の図書館利用率向上のための施策を比較する際、『予算』『効果』『実現可能性』を数値化して評価した。このような手法の目的として最も適切なものはどれか。",
    "options": [
      "主観を減らして判断するため",
      "結果を固定するため",
      "計算量を増やすため",
      "情報を暗号化するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0190",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "ある店舗ではレジ待ち時間を短縮するためにセルフレジを導入したが、待ち時間はほとんど変化しなかった。最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "導入前後の利用状況や原因分析が適切だったか",
      "セルフレジの色が適切だったか",
      "店舗の名称が分かりやすいか",
      "店員の人数を増やせるか"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0191",
    "unit": "問題解決",
    "field": "総合問題（演習）",
    "difficulty": "★★★",
    "question": "問題解決の過程で、解決策の実施後にも継続してデータを収集する最大の理由はどれか。",
    "options": [
      "効果を検証し改善につなげるため",
      "情報量を増やすため",
      "記録媒体を使うため",
      "調査を長引かせるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0192",
    "unit": "問題解決",
    "field": "問題発見・分析（応用）",
    "difficulty": "★★★★",
    "question": "ある高校では、昼休みの食堂の待ち時間を短縮するためにレジを2台から4台に増設した。しかし、待ち時間はほとんど変化しなかった。次に優先して調査すべき項目として最も適切なものはどれか。",
    "options": [
      "メニュー表の色",
      "利用者が食券を購入する時間",
      "食堂の壁のデザイン",
      "机の配置間隔"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0193",
    "unit": "問題解決",
    "field": "問題設定（応用）",
    "difficulty": "★★★★",
    "question": "『学校生活をより良くする』という目標を問題解決に適した形へ具体化したものとして、最も適切なのはどれか。",
    "options": [
      "生徒全員を満足させる",
      "学校を楽しくする",
      "図書館の1日当たりの利用者数を半年で15％増加させる",
      "授業を改善する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0194",
    "unit": "問題解決",
    "field": "データ収集（応用）",
    "difficulty": "★★★★",
    "question": "学校祭の満足度を調査するため、実行委員だけにアンケートを行ったところ、非常に高い評価が得られた。この調査の問題点として最も適切なものはどれか。",
    "options": [
      "調査人数が多すぎる",
      "標本に偏りがある",
      "データ量が不足している",
      "質問数が多すぎる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0195",
    "unit": "問題解決",
    "field": "データ収集（応用）",
    "difficulty": "★★★★",
    "question": "ある地域の公共交通機関の利用状況を調査する際、平日の朝だけを対象にデータを収集した。この調査結果を利用する際に最も注意すべきことはどれか。",
    "options": [
      "計算方法が複雑であること",
      "データの単位が異なること",
      "収集したデータが全体を代表していない可能性",
      "データ量が多すぎること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0196",
    "unit": "問題解決",
    "field": "モデル化（応用）",
    "difficulty": "★★★★",
    "question": "災害時の避難シミュレーションでは、建物の形状や避難経路は再現したが、避難者の心理状態は考慮しなかった。このシミュレーションの限界として最も適切なものはどれか。",
    "options": [
      "計算速度が低下する",
      "現実の行動を完全には再現できない",
      "コンピュータを利用できない",
      "結果を保存できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0197",
    "unit": "問題解決",
    "field": "モデル化（応用）",
    "difficulty": "★★★★",
    "question": "モデル化を行う際に不要な情報を削除しすぎた場合、最も起こりやすい問題はどれか。",
    "options": [
      "シミュレーションの処理速度が向上する",
      "現実とのずれが大きくなる",
      "データの保存容量が増える",
      "結果の信頼性が高まる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0198",
    "unit": "問題解決",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "ある店舗では、レジの台数を変えた場合の待ち時間をシミュレーションした。その結果を実際の店舗運営に利用する際、最も重要なことはどれか。",
    "options": [
      "シミュレーション結果のみで判断する",
      "現実の状況と照らし合わせて検証する",
      "計算回数を減らす",
      "データを削除する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0199",
    "unit": "問題解決",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "学校の空調管理システムを改善するため、複数の設定条件を試したところ、どの条件でも結果が大きく異なった。このとき最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "使用したモデルや前提条件",
      "コンピュータの製造会社",
      "データの保存形式",
      "モニターの解像度"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0200",
    "unit": "問題解決",
    "field": "発想法（応用）",
    "difficulty": "★★★★",
    "question": "ブレインストーミングで多数の案が出た後、実現可能性と効果の2軸で整理した。この作業の目的として最も適切なものはどれか。",
    "options": [
      "アイデアを削除するため",
      "問題を抽象化するため",
      "解決策を比較・検討するため",
      "データを暗号化するため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0201",
    "unit": "問題解決",
    "field": "発想法（応用）",
    "difficulty": "★★★★",
    "question": "『校内のごみを減らす』という課題について、『ごみ箱を増やす』『啓発活動を行う』『分別を簡単にする』という案が出た。これらを比較する際に最も重要な観点はどれか。",
    "options": [
      "提案者の学年",
      "効果や実現可能性",
      "案を出した順番",
      "案の数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0202",
    "unit": "問題解決",
    "field": "意思決定（応用）",
    "difficulty": "★★★★",
    "question": "学校の新しい学習システムを選定する際、『導入費用』『操作性』『サポート体制』を数値化して評価した。この方法の最大の利点はどれか。",
    "options": [
      "必ず最適な案が選べる",
      "主観的な判断を減らせる",
      "データ収集が不要になる",
      "評価項目を減らせる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0203",
    "unit": "問題解決",
    "field": "意思決定（応用）",
    "difficulty": "★★★★",
    "question": "複数の案を比較した結果、評価点がほぼ同じになった。このとき最も適切な対応はどれか。",
    "options": [
      "最初に提案された案を採用する",
      "追加の評価基準を設定する",
      "無作為に決定する",
      "評価をやり直さない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0204",
    "unit": "問題解決",
    "field": "制約条件（応用）",
    "difficulty": "★★★★",
    "question": "文化祭の企画を考える際、『予算』『安全性』『準備期間』に加えて、『参加者全員が楽しめること』を条件に加えた。この条件のうち、他と性質が異なるものはどれか。",
    "options": [
      "予算",
      "安全性",
      "準備期間",
      "参加者全員が楽しめること"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0205",
    "unit": "問題解決",
    "field": "最適化（応用）",
    "difficulty": "★★★★",
    "question": "スクールバスの本数を増やすと待ち時間は減少するが、運営費は増加する。このように、一方を改善すると他方が悪化する関係を何というか。",
    "options": [
      "抽象化",
      "トレードオフ",
      "モデル化",
      "一般化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0206",
    "unit": "問題解決",
    "field": "最適化（応用）",
    "difficulty": "★★★★",
    "question": "ある企業では、商品の在庫を増やせば品切れは減るが、保管費用が増える。この問題解決で重要となる考え方として最も適切なものはどれか。",
    "options": [
      "具体化",
      "最適化",
      "量子化",
      "暗号化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0207",
    "unit": "問題解決",
    "field": "評価（応用）",
    "difficulty": "★★★★",
    "question": "新しい校則を導入した結果、遅刻者数は減少したが、生徒アンケートでは不満が増加した。この状況から分かることとして最も適切なものはどれか。",
    "options": [
      "遅刻者数だけを評価すれば十分である",
      "複数の観点から評価する必要がある",
      "校則は必ず失敗である",
      "アンケートは不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0208",
    "unit": "問題解決",
    "field": "評価（応用）",
    "difficulty": "★★★★",
    "question": "ある施策を評価する際、導入直後のデータだけではなく半年後のデータも収集する理由として最も適切なものはどれか。",
    "options": [
      "長期的な効果を確認するため",
      "データ量を増やすため",
      "評価を複雑にするため",
      "記録媒体を使うため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0209",
    "unit": "問題解決",
    "field": "PDCAサイクル（応用）",
    "difficulty": "★★★★",
    "question": "PDCAサイクルを繰り返しているにもかかわらず成果が見られない場合、最初に見直すべきものとして最も適切なものはどれか。",
    "options": [
      "パソコンの性能",
      "目標設定や評価指標",
      "データの保存場所",
      "担当者の人数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0210",
    "unit": "問題解決",
    "field": "アルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "ある作業を自動化するプログラムを作成したところ、条件分岐が増えすぎて複雑になった。改善策として最も適切なものはどれか。",
    "options": [
      "処理を分割して整理する",
      "条件をすべて削除する",
      "変数を使わない",
      "入力を禁止する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0211",
    "unit": "問題解決",
    "field": "アルゴリズム（応用）",
    "difficulty": "★★★★",
    "question": "フローチャートを用いて処理を表現する利点として、最も適切なものはどれか。",
    "options": [
      "プログラムの実行速度が向上する",
      "処理の流れや問題点を把握しやすくなる",
      "データ量が削減される",
      "記憶容量が増加する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0212",
    "unit": "問題解決",
    "field": "情報の信頼性（応用）",
    "difficulty": "★★★★",
    "question": "ある健康法について、SNSでは『効果がある』という投稿が多数見られた。一方で、専門家の論文では十分な根拠が示されていなかった。このとき最も適切な判断はどれか。",
    "options": [
      "SNSの多数意見を採用する",
      "論文だけを信頼する",
      "判断を放棄する",
      "追加の情報を収集し、根拠を比較する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0213",
    "unit": "問題解決",
    "field": "情報の信頼性（応用）",
    "difficulty": "★★★★",
    "question": "インターネット上の情報を活用して問題解決を行う際、特に注意すべきこととして最も適切なものはどれか。",
    "options": [
      "検索結果の上位だけを見る",
      "複数の情報源を比較する",
      "最新の情報を避ける",
      "画像だけを参考にする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0214",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある自治体では、自転車事故を減らすためにヘルメット着用を義務化した。しかし、事故件数は減少しなかった。この結果から直ちに結論づけることができないものはどれか。",
    "options": [
      "ヘルメット以外の要因が存在する可能性",
      "事故件数の変化を継続して調査する必要性",
      "ヘルメットには全く効果がないこと",
      "多面的な分析が必要なこと"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0215",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "学校のWi-Fi環境を改善するため、高性能な機器に交換したが通信速度は向上しなかった。最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "利用状況や通信量の分析が十分だったか",
      "機器の色が適切か",
      "校舎の築年数",
      "教員数の推移"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0216",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある学校では、図書館の利用者数を増やすために開館時間を延長した。しかし利用者数に変化はなかった。この状況で次に行うべきこととして最も適切なものはどれか。",
    "options": [
      "施策の効果を多面的に分析する",
      "図書館を閉鎖する",
      "調査を終了する",
      "利用者数の記録をやめる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0217",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある企業では、配送ルートを変更することで配送時間の短縮を図った。効果を正しく評価するために比較すべきデータとして最も適切なものはどれか。",
    "options": [
      "変更前後の配送時間や費用",
      "従業員の年齢",
      "社屋の面積",
      "商品の色"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0218",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある学校では、忘れ物を減らすために朝の持ち物確認アプリを導入した。導入後、忘れ物は減少したが、アプリの利用率は低かった。この状況から考えられることとして最も適切なものはどれか。",
    "options": [
      "アプリ以外の要因も影響している可能性がある",
      "アプリは必ず失敗である",
      "忘れ物は今後増加する",
      "利用率の調査は不要である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0219",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "問題解決の過程において、同じ施策を複数の学校で実施したところ、結果が大きく異なった。最も考えられる理由はどれか。",
    "options": [
      "問題や条件が学校ごとに異なるため",
      "施策には効果がないため",
      "データ量が不足しているため",
      "コンピュータの性能が異なるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0220",
    "unit": "問題解決",
    "field": "問題分析・評価（応用）",
    "difficulty": "★★★★",
    "question": "ある学校では、遅刻者数を減らすために朝のホームルーム開始時刻を15分遅らせた。その結果、遅刻者数は減少したが、放課後の部活動時間が短くなった。この状況の説明として最も適切なものはどれか。",
    "options": [
      "モデル化が不十分だった",
      "トレードオフが生じている",
      "データ量が不足している",
      "抽象化に失敗している"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0221",
    "unit": "問題解決",
    "field": "問題設定（応用）",
    "difficulty": "★★★★",
    "question": "『学校生活を快適にする』という目標について、問題解決に適した形に具体化したものとして最も適切なのはどれか。",
    "options": [
      "学校生活をもっと良くする",
      "校内の不満をなくす",
      "図書館の座席利用率を次年度までに20％向上させる",
      "全員が満足する環境を作る"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0222",
    "unit": "問題解決",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "あるクラスでは、家庭学習時間とテストの点数を調査したところ、学習時間が長い生徒ほど高得点を取る傾向が見られた。この結果から直ちに結論づけることができないものはどれか。",
    "options": [
      "両者には相関がある",
      "他の要因が影響している可能性がある",
      "学習時間を増やせば必ず成績が向上する",
      "追加の分析が必要である"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0223",
    "unit": "問題解決",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "ある地域では、バスの本数を増やしたにもかかわらず利用者数が減少した。この原因を分析するため、次に収集する情報として最も適切なものはどれか。",
    "options": [
      "利用者の満足度や他の交通手段の利用状況",
      "バスの車体の色",
      "運転手の年齢",
      "停留所の名称"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0224",
    "unit": "問題解決",
    "field": "モデル化（応用）",
    "difficulty": "★★★★",
    "question": "学校祭の来場者数を予測するモデルを作成したところ、予測値と実際の値が大きく異なった。最初に確認すべき事項として最も適切なものはどれか。",
    "options": [
      "モデルに用いた前提条件や変数",
      "使用したパソコンの性能",
      "予測結果の表示方法",
      "データの保存場所"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0225",
    "unit": "問題解決",
    "field": "モデル化（応用）",
    "difficulty": "★★★★",
    "question": "あるシミュレーションでは、道路の幅や信号の位置は考慮したが、天候や工事の影響は考慮しなかった。このシミュレーションを利用する際の注意点として最も適切なものはどれか。",
    "options": [
      "現実を完全に再現しているわけではない",
      "計算速度が遅くなる",
      "結果は必ず誤っている",
      "追加調査は不要である"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0226",
    "unit": "問題解決",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "ある企業が配送ルートの最適化を行う際、シミュレーションを用いる最大の利点として最も適切なものはどれか。",
    "options": [
      "必ず最適な解が得られる",
      "現実で試す前に複数の条件を検証できる",
      "データ収集が不要になる",
      "費用が発生しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0227",
    "unit": "問題解決",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "シミュレーションによって『A案が最適』という結果が得られたが、実際にはB案が採用された。考えられる理由として最も適切なものはどれか。",
    "options": [
      "現実にはモデル化していない制約条件が存在した",
      "シミュレーションは常に誤っている",
      "コンピュータの性能が不足していた",
      "データ量が多すぎた"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0228",
    "unit": "問題解決",
    "field": "発想法（応用）",
    "difficulty": "★★★★",
    "question": "ブレインストーミングで『質より量を重視する』理由として最も適切なものはどれか。",
    "options": [
      "少数の優れた案だけを残すため",
      "独創的なアイデアが生まれる可能性を高めるため",
      "会議時間を短縮するため",
      "評価を容易にするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0229",
    "unit": "問題解決",
    "field": "発想法（応用）",
    "difficulty": "★★★★",
    "question": "KJ法によって分類したアイデア群から新たな発見が得られる理由として最も適切なものはどれか。",
    "options": [
      "データ量が増加するため",
      "関連性や傾向を見つけやすくなるため",
      "計算速度が向上するため",
      "情報を暗号化できるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0230",
    "unit": "問題解決",
    "field": "意思決定（応用）",
    "difficulty": "★★★★",
    "question": "学校で新しい学習システムを導入する際、『費用』『使いやすさ』『安全性』に加えて『将来的な拡張性』を評価項目に加えた。この判断の理由として最も適切なものはどれか。",
    "options": [
      "現在の状況だけでは十分でないため",
      "評価項目を増やしたかったため",
      "計算を複雑にするため",
      "データ量を増やすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0231",
    "unit": "問題解決",
    "field": "意思決定（応用）",
    "difficulty": "★★★★",
    "question": "複数の解決策を評価した結果、A案は費用面で優れ、B案は効果面で優れていた。このような状況で重要な考え方はどれか。",
    "options": [
      "抽象化",
      "トレードオフ",
      "一般化",
      "標本調査"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0232",
    "unit": "問題解決",
    "field": "意思決定（応用）",
    "difficulty": "★★★★",
    "question": "ある学校では、『安全性』を最重要視して体育祭の競技を決定した。このとき、『安全性』に高い重み付けを行った理由として最も適切なものはどれか。",
    "options": [
      "評価項目ごとの重要度が異なるため",
      "計算量を増やすため",
      "データを整理するため",
      "評価基準を減らすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0233",
    "unit": "問題解決",
    "field": "制約条件（応用）",
    "difficulty": "★★★★",
    "question": "学校祭の企画を検討する際、『予算10万円』『準備期間1か月』『教室の広さ』という制約の下で最適な案を選ぶことになった。このとき最も重要な考え方はどれか。",
    "options": [
      "抽象化",
      "最適化",
      "モデル化",
      "一般化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0234",
    "unit": "問題解決",
    "field": "評価（応用）",
    "difficulty": "★★★★",
    "question": "新しい授業方法を導入した結果、平均点は向上したが、学習意欲に関するアンケート結果は悪化した。この結果から分かることとして最も適切なものはどれか。",
    "options": [
      "平均点だけで評価すればよい",
      "複数の指標を用いて評価する必要がある",
      "授業方法は完全に失敗である",
      "アンケートは不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0235",
    "unit": "問題解決",
    "field": "評価（応用）",
    "difficulty": "★★★★",
    "question": "問題解決の成果を評価する際、導入直後だけでなく半年後や1年後のデータも調査する理由として最も適切なものはどれか。",
    "options": [
      "長期的な影響を確認するため",
      "データ量を増やすため",
      "計算を複雑にするため",
      "評価項目を減らすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0236",
    "unit": "問題解決",
    "field": "PDCAサイクル（応用）",
    "difficulty": "★★★★",
    "question": "PDCAサイクルを繰り返しても成果が上がらない場合、最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "目標や評価指標が適切かどうか",
      "データの保存場所",
      "担当者の人数",
      "コンピュータの性能"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0237",
    "unit": "問題解決",
    "field": "PDCAサイクル（応用）",
    "difficulty": "★★★★",
    "question": "PDCAサイクルの『Check』を十分に行わなかった場合、最も起こりやすい問題はどれか。",
    "options": [
      "改善策の効果を正しく判断できない",
      "データ収集が不要になる",
      "計画の作成が簡単になる",
      "実行速度が向上する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0238",
    "unit": "問題解決",
    "field": "情報の信頼性（応用）",
    "difficulty": "★★★★",
    "question": "SNS上で『ある勉強法で必ず成績が上がる』という情報が拡散している。この情報を問題解決に利用する際に最も適切な行動はどれか。",
    "options": [
      "拡散数だけを確認する",
      "発信者や根拠を調べる",
      "友人の意見を優先する",
      "すぐに実践する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0239",
    "unit": "問題解決",
    "field": "情報の信頼性（応用）",
    "difficulty": "★★★★",
    "question": "インターネット上の複数のサイトで異なる統計データが掲載されていた。このとき最も優先して確認すべき項目はどれか。",
    "options": [
      "ページの色使い",
      "データの出典や調査方法",
      "閲覧者数",
      "掲載順序"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0240",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある学校では、校内放送の音量に関する苦情が増えたため、音量を下げた。しかし今度は『聞こえにくい』という苦情が増えた。この状況を最も適切に説明する言葉はどれか。",
    "options": [
      "抽象化",
      "トレードオフ",
      "モデル化",
      "具体化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0241",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "学校のWi-Fi環境を改善するために高性能な機器を導入したが、通信速度はほとんど変化しなかった。次に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "利用人数や通信量などの実態調査",
      "機器のメーカー",
      "教室の広さ",
      "校舎の築年数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0242",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある自治体では、バス停を増設したが利用者数は増えなかった。この結果から『バス停の増設には意味がない』と結論づけることが適切でない理由として最も適切なものはどれか。",
    "options": [
      "利用者数以外の要因も考慮する必要があるため",
      "バス停の数は重要ではないため",
      "調査期間が長すぎるため",
      "データ量が多すぎるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0243",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある企業では、会議時間を短縮するシステムを導入した結果、会議時間は減少したが、情報共有の不足が問題となった。この結果から分かることとして最も適切なものはどれか。",
    "options": [
      "一つの指標だけで効果を判断してはならない",
      "会議は不要である",
      "システムは失敗である",
      "情報共有は重要ではない"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0244",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "学校の図書館では、利用者数を増やすために開館時間を延長したが、利用者数に大きな変化は見られなかった。次の改善策を検討する前に行うべきこととして最も適切なものはどれか。",
    "options": [
      "利用しない理由を調査する",
      "さらに開館時間を延長する",
      "図書館を移設する",
      "調査を終了する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0245",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "ある地域では、交通事故を減らすために信号機を増設したが、事故件数は変わらなかった。この結果を分析する際に最も重要な考え方はどれか。",
    "options": [
      "単一の要因だけで判断しないこと",
      "データを減らすこと",
      "シミュレーションを行わないこと",
      "評価を省略すること"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0246",
    "unit": "問題解決",
    "field": "総合問題（応用）",
    "difficulty": "★★★★",
    "question": "問題解決において、解決策の実施後も継続してデータを収集する最大の目的として最も適切なものはどれか。",
    "options": [
      "システムを複雑にするため",
      "データ量を増やすため",
      "担当者を増やすため",
      "施策の効果を検証し、改善につなげるため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0247",
    "unit": "問題解決",
    "field": "問題分析（応用）",
    "difficulty": "★★★★",
    "question": "ある高校では、授業アンケートの満足度向上を目標として、授業中の小テストを廃止した。その結果、満足度は向上したが、定期考査の平均点は低下した。この結果から最も適切に言えることはどれか。",
    "options": [
      "小テストは不要だった",
      "満足度だけを指標にすると問題点を見落とす可能性がある",
      "平均点は授業の質と無関係である",
      "授業アンケートは意味がない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0248",
    "unit": "問題解決",
    "field": "評価指標（応用）",
    "difficulty": "★★★★",
    "question": "ある自治体では、観光客数の増加を目標としてイベントを開催した。しかし、イベント後にはごみ処理費用や交通渋滞も増加した。施策の効果を適切に評価するために最も重要な考え方はどれか。",
    "options": [
      "単一の指標で評価する",
      "費用を無視する",
      "複数の観点から総合的に評価する",
      "観光客数のみを重視する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0249",
    "unit": "問題解決",
    "field": "データ分析（応用）",
    "difficulty": "★★★★",
    "question": "ある商品の売上が増加した時期に広告費も増加していた。このことから『広告費を増やせば必ず売上が増える』と結論づけられない理由として最も適切なものはどれか。",
    "options": [
      "広告費は売上と無関係だから",
      "相関関係だけでは因果関係は分からないから",
      "広告費は測定できないから",
      "売上データが不要だから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0250",
    "unit": "問題解決",
    "field": "モデル化（応用）",
    "difficulty": "★★★★",
    "question": "避難シミュレーションを作成する際、計算量を減らすために人の歩く速度を全員同じと仮定した。この仮定によって生じる問題として最も適切なものはどれか。",
    "options": [
      "計算速度が遅くなる",
      "結果が現実と異なる可能性が高まる",
      "データ量が増える",
      "シミュレーションが実行できなくなる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0251",
    "unit": "問題解決",
    "field": "シミュレーション（応用）",
    "difficulty": "★★★★",
    "question": "ある企業では、新商品の販売予測を行うためにシミュレーションを利用した。シミュレーションの結果をそのまま採用せず、実地調査も行うべき理由として最も適切なものはどれか。",
    "options": [
      "シミュレーションには前提条件や限界があるから",
      "シミュレーションは必ず誤るから",
      "実地調査の方が安価だから",
      "コンピュータの性能が不足しているから"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0252",
    "unit": "問題解決",
    "field": "意思決定（応用）",
    "difficulty": "★★★★",
    "question": "新しい校内システムを導入する際、A案は導入費用が安く、B案は保守性に優れていた。このとき、どちらを採用するかを決めるために最も必要なことはどれか。",
    "options": [
      "担当者の好みで決める",
      "評価項目の優先順位を定める",
      "費用だけで判断する",
      "多数決だけで決める"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0253",
    "unit": "問題解決",
    "field": "最適化（応用）",
    "difficulty": "★★★★",
    "question": "文化祭の模擬店の配置を考える際、『来場者の移動距離を短くすること』と『混雑を避けること』を同時に満たすことが難しかった。この状況を表す言葉として最も適切なものはどれか。",
    "options": [
      "一般化",
      "抽象化",
      "トレードオフ",
      "モデル化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0254",
    "unit": "問題解決",
    "field": "PDCAサイクル（応用）",
    "difficulty": "★★★★",
    "question": "PDCAサイクルを導入したにもかかわらず改善が見られない場合、最初に見直すべき内容として最も適切なものはどれか。",
    "options": [
      "計画や評価基準の妥当性",
      "使用したパソコンの性能",
      "会議の回数",
      "担当者の年齢構成"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0255",
    "unit": "問題解決",
    "field": "問題発見（応用）",
    "difficulty": "★★★★",
    "question": "学校図書館の利用者数が減少していることが分かった。原因を分析する前に、『利用者数が減少している』という現象を問題として設定する際に必要な視点はどれか。",
    "options": [
      "誰にとって何が問題なのかを明確にする",
      "解決策を先に決める",
      "利用者数だけを見る",
      "予算だけを確認する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0256",
    "unit": "問題解決",
    "field": "情報の信頼性（応用）",
    "difficulty": "★★★★",
    "question": "SNS上で『この学習法で全員の成績が向上した』という投稿が拡散されている。この情報の信頼性を確かめる方法として最も適切なものはどれか。",
    "options": [
      "拡散数を確認する",
      "投稿者の知名度を確認する",
      "調査方法や統計データの根拠を確認する",
      "コメント欄を確認する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0257",
    "unit": "問題解決",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある学校では、自習室の利用率向上を目指して席数を増やした。しかし利用率は変わらなかった。調査の結果、自習室が満席になることは少なく、利用者の多くは『閉館時間が早い』ことを理由に挙げていた。この結果から導ける結論として最も適切なものはどれか。",
    "options": [
      "席数不足が主な原因であった",
      "利用率向上には開館時間の検討が必要である",
      "利用率は改善できない",
      "アンケート結果は不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0258",
    "unit": "問題解決",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある都市では、渋滞解消のため道路を拡張したが、数年後には再び渋滞が発生した。この現象を分析する際に最も重要な視点はどれか。",
    "options": [
      "施策によって交通需要そのものが変化した可能性を考慮する",
      "道路の色を調査する",
      "工事費用だけを比較する",
      "道路標識の数を増やす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0259",
    "unit": "問題解決",
    "field": "大学入試レベル（データ分析）",
    "difficulty": "★★★★★",
    "question": "ある企業では、社員の残業時間を減らす施策を実施した。その結果、平均残業時間は減少したが、社員一人当たりの業務量は変化しなかった。このデータだけでは判断できないことはどれか。",
    "options": [
      "社員の働き方が変化した可能性",
      "業務の持ち帰りが増えた可能性",
      "施策によって生産性が向上したかどうか",
      "平均残業時間が減少したこと"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0260",
    "unit": "問題解決",
    "field": "大学入試レベル（モデル化）",
    "difficulty": "★★★★★",
    "question": "ある感染症の拡大予測モデルでは、『全員が均等に接触する』という仮定を置いて計算を行った。このモデルの限界として最も適切なものはどれか。",
    "options": [
      "現実の人間関係の偏りを反映できない",
      "計算量が増えすぎる",
      "感染症を予測できない",
      "統計処理が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0261",
    "unit": "問題解決",
    "field": "大学入試レベル（意思決定）",
    "difficulty": "★★★★★",
    "question": "災害時の避難所配置を決めるため、自治体は『収容人数』『建設費』『アクセスの良さ』『災害リスク』を数値化した。最終的に最適な配置を決定する際、最も重要な作業はどれか。",
    "options": [
      "全ての項目を同じ重みで扱う",
      "評価項目ごとの重要度を設定する",
      "建設費のみを重視する",
      "収容人数のみを比較する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0262",
    "unit": "問題解決",
    "field": "大学入試レベル（シミュレーション）",
    "difficulty": "★★★★★",
    "question": "シミュレーションではA案の方が優れていたが、現実ではB案が採用された。最も適切な理由はどれか。",
    "options": [
      "現実にはモデル化されていない制約条件が存在した",
      "シミュレーションは利用できない",
      "コンピュータの性能が不足していた",
      "データ量が少なかった"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0263",
    "unit": "問題解決",
    "field": "大学入試レベル（論理的思考）",
    "difficulty": "★★★★★",
    "question": "『新しい教材を導入したクラスは平均点が高かった』という結果が得られた。この結果だけでは教材の効果を断定できない理由として最も適切なものはどれか。",
    "options": [
      "平均点が整数だから",
      "他の条件が同一とは限らないから",
      "教材の価格が不明だから",
      "クラス人数が異なるから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0264",
    "unit": "問題解決",
    "field": "大学入試レベル（最適化）",
    "difficulty": "★★★★★",
    "question": "ある配送会社では、配送時間の短縮と燃料費の削減を同時に実現したいと考えている。しかし、最短経路を選ぶと燃料費が増加する場合がある。このような問題を解決する際の考え方として最も適切なものはどれか。",
    "options": [
      "単一の指標のみを最適化する",
      "複数の評価指標を用いて最適解を探す",
      "配送時間だけを重視する",
      "燃料費だけを重視する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0265",
    "unit": "問題解決",
    "field": "大学入試レベル（情報活用）",
    "difficulty": "★★★★★",
    "question": "インターネット上の複数の情報源を比較したところ、同じ統計について異なる値が掲載されていた。最初に確認すべき事項として最も適切なものはどれか。",
    "options": [
      "グラフの色",
      "情報の出典と調査条件",
      "閲覧回数",
      "サイトのデザイン"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0266",
    "unit": "問題解決",
    "field": "大学入試レベル（総合問題）",
    "difficulty": "★★★★★",
    "question": "ある自治体は、防犯カメラの設置台数を増やしたところ、中心部の犯罪件数は減少したが、周辺地域では増加した。この結果の分析として最も適切なものはどれか。",
    "options": [
      "防犯カメラには全く効果がない",
      "犯罪が他地域へ移動した可能性がある",
      "統計データは信用できない",
      "設置台数が不足していた"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0267",
    "unit": "問題解決",
    "field": "大学入試レベル（問題発見）",
    "difficulty": "★★★★★",
    "question": "ある自治体は、公園の利用者数を増やすために遊具を増設した。しかし、半年後に利用者数を調査したところ、増加は見られなかった。アンケートでは「日陰が少ない」「ベンチが不足している」という意見が多かった。この結果から最も適切に言えることはどれか。",
    "options": [
      "遊具の増設は失敗であった",
      "利用者数の増減は遊具の数だけで決まる",
      "問題設定の段階で利用者のニーズを十分に把握できていなかった可能性がある",
      "アンケート結果は信用できない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0268",
    "unit": "問題解決",
    "field": "大学入試レベル（データ分析）",
    "difficulty": "★★★★★",
    "question": "ある高校では、家庭学習時間と定期試験の得点の関係を調査したところ、強い正の相関が見られた。この結果から直ちに導けない結論はどれか。",
    "options": [
      "家庭学習時間が長い生徒ほど高得点を取る傾向がある",
      "家庭学習時間以外の要因が影響している可能性がある",
      "家庭学習時間を増やせば必ず得点が向上する",
      "追加調査が必要である"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0269",
    "unit": "問題解決",
    "field": "大学入試レベル（データ収集）",
    "difficulty": "★★★★★",
    "question": "ある市では、市民の交通手段を調査するために、市役所を訪れた人だけを対象にアンケートを行った。この調査結果を市全体の傾向として利用する際の問題点として最も適切なものはどれか。",
    "options": [
      "回答数が少ない可能性がある",
      "標本が母集団を適切に代表していない可能性がある",
      "統計処理ができない",
      "交通手段は調査できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0270",
    "unit": "問題解決",
    "field": "大学入試レベル（モデル化）",
    "difficulty": "★★★★★",
    "question": "ある学校では、避難経路のシミュレーションを行うため、『全ての生徒は同じ速度で移動する』という仮定を置いた。このシミュレーション結果を利用する際、最も注意すべきことはどれか。",
    "options": [
      "計算量が増加すること",
      "現実の避難行動との差が生じる可能性があること",
      "結果が必ず誤っていること",
      "避難訓練が不要になること"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0271",
    "unit": "問題解決",
    "field": "大学入試レベル（シミュレーション）",
    "difficulty": "★★★★★",
    "question": "ある企業では、新商品の需要予測をシミュレーションした結果、A案が最適であると判断された。しかし、実際にはB案が採用された。考えられる理由として最も適切なものはどれか。",
    "options": [
      "B案の方が計算量が少なかった",
      "現実にはシミュレーションで考慮されていない条件が存在した",
      "シミュレーションは常に誤る",
      "担当者が結果を理解できなかった"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0272",
    "unit": "問題解決",
    "field": "大学入試レベル（評価指標）",
    "difficulty": "★★★★★",
    "question": "ある学校では、授業改善の指標として『授業アンケートの満足度』のみを利用していた。しかし、満足度が上昇した一方で、学力テストの平均点は低下した。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "満足度調査は不要である",
      "平均点は重要ではない",
      "単一の評価指標だけでは適切に評価できない場合がある",
      "授業改善は不可能である"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0273",
    "unit": "問題解決",
    "field": "大学入試レベル（トレードオフ）",
    "difficulty": "★★★★★",
    "question": "ある市では、渋滞緩和のために道路を拡幅する計画が立てられた。しかし、歩道の幅を狭くする必要があることが分かった。この状況を最も適切に表す言葉はどれか。",
    "options": [
      "一般化",
      "トレードオフ",
      "抽象化",
      "モデル化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0274",
    "unit": "問題解決",
    "field": "大学入試レベル（意思決定）",
    "difficulty": "★★★★★",
    "question": "災害時の避難所を選定する際、『収容人数』『建設費』『災害リスク』『アクセスの良さ』を点数化した。最終的な判断を行うために最も重要な作業はどれか。",
    "options": [
      "評価項目ごとの重み付けを行う",
      "全ての項目を同じ重みで扱う",
      "最も高得点の項目だけを見る",
      "建設費だけを考慮する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0275",
    "unit": "問題解決",
    "field": "大学入試レベル（PDCA）",
    "difficulty": "★★★★★",
    "question": "ある学校では、遅刻者数を減らすための施策を実施したが、効果が見られなかった。PDCAサイクルの観点から、次に行うべきこととして最も適切なのはどれか。",
    "options": [
      "同じ施策を継続する",
      "目標や評価方法を見直す",
      "データの収集をやめる",
      "別の学校の結果を無条件に採用する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0276",
    "unit": "問題解決",
    "field": "大学入試レベル（情報の信頼性）",
    "difficulty": "★★★★★",
    "question": "インターネット上の複数の記事で同じ統計データが引用されていたが、数値に違いがあった。最初に確認すべき事項として最も適切なものはどれか。",
    "options": [
      "記事の公開日時だけを比較する",
      "引用元や調査条件を確認する",
      "閲覧数を確認する",
      "サイトの運営会社を確認する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0277",
    "unit": "問題解決",
    "field": "大学入試レベル（相関と因果）",
    "difficulty": "★★★★★",
    "question": "ある地域では、アイスクリームの売上が増える時期に水難事故も増える傾向が見られた。このことから『アイスクリームの売上が水難事故を増やしている』と結論づけることが適切でない理由として最も適切なものはどれか。",
    "options": [
      "両者に共通する別の要因が存在する可能性があるため",
      "アイスクリームの売上を測定できないため",
      "水難事故の件数が少ないため",
      "統計処理が不十分であるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0278",
    "unit": "問題解決",
    "field": "大学入試レベル（最適化）",
    "difficulty": "★★★★★",
    "question": "ある配送会社では、配送時間の短縮と燃料費の削減を同時に目指している。この問題を解決する際に最も適切な考え方はどれか。",
    "options": [
      "配送時間のみを最適化する",
      "燃料費のみを最適化する",
      "複数の評価基準を考慮した最適化を行う",
      "ランダムに配送経路を決定する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0279",
    "unit": "問題解決",
    "field": "大学入試レベル（データ解釈）",
    "difficulty": "★★★★★",
    "question": "ある自治体では、防犯カメラを増設したところ、中心市街地の犯罪件数は減少したが、周辺地域では増加した。この結果の解釈として最も適切なものはどれか。",
    "options": [
      "防犯カメラには効果がなかった",
      "犯罪が他地域へ移動した可能性がある",
      "犯罪件数の集計に誤りがある",
      "防犯カメラの台数が不足していた"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0280",
    "unit": "問題解決",
    "field": "大学入試レベル（条件設定）",
    "difficulty": "★★★★★",
    "question": "ある学校では、図書館の利用率向上を目標として開館時間を延長した。しかし、利用率はほとんど変化しなかった。アンケートでは『蔵書が少ない』という回答が多かった。このことから最も適切に言えることはどれか。",
    "options": [
      "開館時間の延長は必ず失敗する",
      "問題の原因を一つに決めつけるべきではない",
      "アンケートは不要である",
      "図書館は不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0281",
    "unit": "問題解決",
    "field": "大学入試レベル（総合問題）",
    "difficulty": "★★★★★",
    "question": "ある企業では、社員の残業時間を削減する施策を導入した結果、平均残業時間は減少した。しかし、持ち帰り業務の増加が指摘された。この結果から直ちに判断できないことはどれか。",
    "options": [
      "会社全体の残業時間が減少したこと",
      "社員の負担が軽減されたこと",
      "追加の調査が必要であること",
      "施策の評価には複数の指標が必要であること"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0282",
    "unit": "問題解決",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある市では、公共交通機関の利用促進のため、バス料金を値下げした。しかし、自家用車の利用率はほとんど変化しなかった。次に調査すべき項目として最も適切なものはどれか。",
    "options": [
      "バスの車体の色",
      "利用者の移動目的や運行本数",
      "市役所の職員数",
      "道路標識の数"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0283",
    "unit": "問題解決",
    "field": "大学入試レベル（共通テスト模擬）",
    "difficulty": "★★★★★",
    "question": "ある高校では、オンライン学習システムを導入したところ、学習時間は増加したが、成績には大きな変化が見られなかった。この結果から最も適切に言えることはどれか。",
    "options": [
      "学習時間と成績には全く関係がない",
      "学習時間だけでは学習効果を評価できない可能性がある",
      "オンライン学習は無意味である",
      "成績データは不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0284",
    "unit": "問題解決",
    "field": "大学入試レベル（総合的判断）",
    "difficulty": "★★★★★",
    "question": "ある自治体では、住民満足度向上のために複数の施策を検討している。予算には限りがあるため、全てを実施することはできない。この状況で最も重要な考え方はどれか。",
    "options": [
      "全ての施策を均等に実施する",
      "多数決だけで決める",
      "費用を無視する",
      "評価基準を設定し、優先順位を決定する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0285",
    "unit": "問題解決",
    "field": "大学入試レベル（論理的思考）",
    "difficulty": "★★★★★",
    "question": "『新しい教材を導入したクラスの平均点が上昇した』というデータが得られた。この教材の効果を正しく判断するために追加で必要な情報として最も適切なものはどれか。",
    "options": [
      "教材の価格",
      "教材を導入していないクラスとの比較結果",
      "教材の色",
      "教室の広さ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0286",
    "unit": "問題解決",
    "field": "問題発見",
    "difficulty": "★",
    "question": "ある学校で、生徒から『昼休みの校庭が混雑している』という意見が出た。問題解決の最初の段階として最も適切なものはどれか。",
    "options": [
      "解決策を実施する",
      "原因を決めつける",
      "問題を明確にする",
      "アンケート結果を公表する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0287",
    "unit": "問題解決",
    "field": "問題発見",
    "difficulty": "★",
    "question": "『校内の自動販売機の前に人が集まっている』という現象を見たとき、問題解決の視点として最初に考えるべきことはどれか。",
    "options": [
      "誰にとって何が問題なのか",
      "どの業者が設置したのか",
      "商品の価格",
      "自動販売機の色"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0288",
    "unit": "問題解決",
    "field": "情報収集",
    "difficulty": "★",
    "question": "問題解決のために情報を集める際、最も重要なことはどれか。",
    "options": [
      "自分の考えに合う情報だけを集める",
      "できるだけ多くの種類の情報を集める",
      "古い情報だけを使う",
      "最初に見つけた情報だけを使う"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0289",
    "unit": "問題解決",
    "field": "データ活用",
    "difficulty": "★",
    "question": "アンケート結果を表やグラフに整理する主な目的として最も適切なものはどれか。",
    "options": [
      "データを消去しやすくするため",
      "傾向を把握しやすくするため",
      "回答数を減らすため",
      "印刷しやすくするため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0290",
    "unit": "問題解決",
    "field": "抽象化",
    "difficulty": "★",
    "question": "『自転車』『電車』『徒歩』をまとめて表す言葉として適切なものはどれか。",
    "options": [
      "交通費",
      "移動手段",
      "旅行",
      "地図"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0291",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★",
    "question": "現実の問題を単純化して考えやすくすることを何というか。",
    "options": [
      "圧縮",
      "暗号化",
      "モデル化",
      "標本化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0292",
    "unit": "問題解決",
    "field": "発想法",
    "difficulty": "★",
    "question": "ブレインストーミングを行う際のルールとして適切でないものはどれか。",
    "options": [
      "自由な発想を歓迎する",
      "他人の意見を批判する",
      "質より量を重視する",
      "意見を組み合わせる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0293",
    "unit": "問題解決",
    "field": "問題設定",
    "difficulty": "★★",
    "question": "『学校をより良くする』という目標を、問題解決に適した形にしたものとして最も適切なのはどれか。",
    "options": [
      "学校生活を楽しくする",
      "学校を変える",
      "図書館利用者数を半年で10％増加させる",
      "生徒を増やす"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0294",
    "unit": "問題解決",
    "field": "情報収集",
    "difficulty": "★★",
    "question": "ある高校で『朝の校門前が混雑する』という問題を調査する際、最初に集める情報として最も適切なものはどれか。",
    "options": [
      "教員の年齢",
      "時間帯ごとの通行人数",
      "校舎の築年数",
      "生徒の好きな教科"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0295",
    "unit": "問題解決",
    "field": "発想法",
    "difficulty": "★★",
    "question": "ブレインストーミングの後、似た意見同士をまとめて整理する方法として最も適切なものはどれか。",
    "options": [
      "PDCA法",
      "KJ法",
      "二分探索法",
      "回帰分析"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0296",
    "unit": "問題解決",
    "field": "シミュレーション",
    "difficulty": "★★",
    "question": "現実では試しにくい条件をコンピュータ上で再現して検証する方法を何というか。",
    "options": [
      "圧縮",
      "シミュレーション",
      "暗号化",
      "量子化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0297",
    "unit": "問題解決",
    "field": "制約条件",
    "difficulty": "★★",
    "question": "文化祭の出し物を考える際、『予算5万円以内』『準備期間2週間』などの条件を何というか。",
    "options": [
      "目的変数",
      "制約条件",
      "中央値",
      "外れ値"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0298",
    "unit": "問題解決",
    "field": "評価",
    "difficulty": "★★",
    "question": "新しい施策を実施した後、アンケートやデータ分析を行う主な目的として最も適切なものはどれか。",
    "options": [
      "施策の効果を確認するため",
      "作業を増やすため",
      "責任者を決めるため",
      "予算を増やすため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0299",
    "unit": "問題解決",
    "field": "抽象化",
    "difficulty": "★★",
    "question": "『コンビニ』『スーパー』『商店街』を『買い物をする場所』としてまとめる考え方を何というか。",
    "options": [
      "最適化",
      "抽象化",
      "具体化",
      "一般化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0300",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★★",
    "question": "学校の避難訓練のシミュレーションで、生徒の服装の違いを考慮しなかった理由として最も適切なものはどれか。",
    "options": [
      "本質的な要素ではないから",
      "データ量を増やすため",
      "計算速度を下げるため",
      "現実を完全に再現するため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0301",
    "unit": "問題解決",
    "field": "データ分析",
    "difficulty": "★★★",
    "question": "あるコンビニでは、アイスの売上と日傘の売上が同時に増える傾向が見られた。この結果から直ちに言えないことはどれか。",
    "options": [
      "両者には相関がある",
      "夏の気温が影響している可能性がある",
      "アイスを買うと日傘も買いたくなる",
      "他の要因が存在する可能性がある"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0302",
    "unit": "問題解決",
    "field": "問題分析",
    "difficulty": "★★★",
    "question": "学校のWi-Fiが遅い原因を調査したところ、利用者数の増加だけでなく、動画視聴の増加も確認された。この状況から最も適切に言えることはどれか。",
    "options": [
      "原因は1つしか存在しない",
      "複数の要因を考慮する必要がある",
      "Wi-Fiを廃止するべきである",
      "利用者数は無関係である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0303",
    "unit": "問題解決",
    "field": "意思決定",
    "difficulty": "★★★",
    "question": "文化祭の模擬店を決める際、『利益』『安全性』『準備のしやすさ』を点数化した。この手法の利点として最も適切なものはどれか。",
    "options": [
      "多数決が不要になる",
      "客観的に比較しやすくなる",
      "必ず最適解が得られる",
      "データ収集が不要になる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0304",
    "unit": "問題解決",
    "field": "トレードオフ",
    "difficulty": "★★★",
    "question": "学校の空調を強くすると快適さは増すが、電気代も増える。このような関係を何というか。",
    "options": [
      "一般化",
      "モデル化",
      "トレードオフ",
      "標本化"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0305",
    "unit": "問題解決",
    "field": "シミュレーション",
    "difficulty": "★★★",
    "question": "あるテーマパークでは、待ち時間を減らすためにシミュレーションを行った。シミュレーションの利点として最も適切なものはどれか。",
    "options": [
      "現実では試しにくい条件を検証できる",
      "必ず正しい答えが得られる",
      "データが不要になる",
      "実験より費用が高い"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0306",
    "unit": "問題解決",
    "field": "問題設定",
    "difficulty": "★★★",
    "question": "『通学中の事故を減らす』という目標について、より適切な問題設定はどれか。",
    "options": [
      "事故をゼロにする",
      "事故を減らしたい",
      "登校時間帯の自転車事故を1年間で20％減らす",
      "安全意識を高める"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0307",
    "unit": "問題解決",
    "field": "情報の信頼性",
    "difficulty": "★★★",
    "question": "動画配信サイトで『この勉強法で全員が成績アップ』という情報を見つけた。この情報を利用する際に最も重要なことはどれか。",
    "options": [
      "再生回数を確認する",
      "投稿者の年齢を確認する",
      "根拠や調査方法を確認する",
      "コメント欄だけを読む"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0308",
    "unit": "問題解決",
    "field": "最適化",
    "difficulty": "★★★★",
    "question": "ある鉄道会社では、列車の本数を増やすと混雑は減るが、運行コストが増えることが分かった。この問題を解決するために最も重要な考え方はどれか。",
    "options": [
      "抽象化",
      "最適化",
      "標本化",
      "暗号化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0309",
    "unit": "問題解決",
    "field": "データ解釈",
    "difficulty": "★★★★",
    "question": "ある自治体では、防犯灯を増設したところ犯罪件数が減少した。しかし、同時期に人口も減少していた。このとき、追加で確認すべき情報として最も適切なものはどれか。",
    "options": [
      "防犯灯の色",
      "人口1人当たりの犯罪件数",
      "自治体職員数",
      "電気料金"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0310",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★★★★",
    "question": "人気動画の再生回数を予測するモデルを作成したが、実際の結果と大きく異なった。最初に見直すべきものとして最も適切なものはどれか。",
    "options": [
      "動画の長さ",
      "モデルの前提条件",
      "パソコンの性能",
      "保存形式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0311",
    "unit": "問題解決",
    "field": "評価",
    "difficulty": "★★★★",
    "question": "学校が『宿題提出率』だけを指標として学習効果を評価していた。この評価方法の問題点として最も適切なものはどれか。",
    "options": [
      "提出率は測定できない",
      "学習効果を単一の指標で判断している",
      "データ量が不足している",
      "宿題は不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0312",
    "unit": "問題解決",
    "field": "大学入試レベル（相関と因果）",
    "difficulty": "★★★★★",
    "question": "ある地域では、救急車の出動件数が多い日に交通事故も多いことが分かった。このことから『救急車が事故を増やしている』と結論づけることが適切でない理由として最も適切なものはどれか。",
    "options": [
      "救急車の台数が少ないから",
      "事故によって救急車が呼ばれている可能性があるから",
      "交通事故は調査できないから",
      "救急車の色が異なるから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0313",
    "unit": "問題解決",
    "field": "大学入試レベル（データ分析）",
    "difficulty": "★★★★★",
    "question": "ある企業では、社員のオンライン会議時間を減らしたところ、作業効率が向上した。しかし、部署ごとのデータを見ると、一部の部署では効率が低下していた。この状況について最も適切に言えることはどれか。",
    "options": [
      "全ての部署で効率が向上している",
      "平均値だけでは全体像を把握できない",
      "オンライン会議は不要である",
      "部署ごとの差は存在しない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0314",
    "unit": "問題解決",
    "field": "大学入試レベル（意思決定）",
    "difficulty": "★★★★★",
    "question": "災害時の避難所を選ぶ際、『収容人数』『建設費』『避難時間』『災害リスク』を数値化した。最終的な意思決定で最も重要となる作業はどれか。",
    "options": [
      "項目ごとの重要度を決める",
      "最も高い数値だけを見る",
      "建設費のみを比較する",
      "全て同じ重みで扱う"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0315",
    "unit": "問題解決",
    "field": "大学入試レベル（シミュレーション）",
    "difficulty": "★★★★★",
    "question": "ある都市では、渋滞緩和策として道路を拡張したが、数年後には再び渋滞が発生した。この現象を分析する際に最も重要な視点はどれか。",
    "options": [
      "道路の色を調べる",
      "交通需要が変化した可能性を考える",
      "道路標識を増やす",
      "舗装材を変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0316",
    "unit": "問題解決",
    "field": "大学入試レベル（AI活用）",
    "difficulty": "★★★★★",
    "question": "ある学校では、AIが生徒の質問に自動回答するシステムを導入した。しかし、一部の回答には誤りが含まれていた。この状況から最も適切に言えることはどれか。",
    "options": [
      "AIの回答は必ず正しい",
      "AIは利用すべきではない",
      "AIの出力は人間が検証する必要がある",
      "AIは誤答を出さないよう改良できない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0317",
    "unit": "問題解決",
    "field": "大学入試レベル（行動経済学）",
    "difficulty": "★★★★★",
    "question": "ある食堂では、健康的なメニューを目立つ位置に配置したところ、そのメニューの注文数が増加した。この事例で利用されている考え方として最も適切なものはどれか。",
    "options": [
      "暗号化",
      "ナッジ",
      "量子化",
      "標本化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0318",
    "unit": "問題解決",
    "field": "問題発見",
    "difficulty": "★",
    "question": "文化祭の準備で『片付けの時間が毎年足りない』という声が上がった。問題解決の最初の段階として最も適切なものはどれか。",
    "options": [
      "原因や現状を整理する",
      "新しい備品を購入する",
      "片付け時間を延長する",
      "担当者を増やす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0319",
    "unit": "問題解決",
    "field": "情報収集",
    "difficulty": "★",
    "question": "学校の食堂の利用者数を増やす方法を考えるため、最初に行うべきこととして最も適切なものはどれか。",
    "options": [
      "利用状況や意見を調査する",
      "メニューを全て変更する",
      "食堂を増築する",
      "価格を一律に下げる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0320",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★",
    "question": "通学時間の長さと睡眠時間の関係を分析する際、最初に行うこととして適切なものはどれか。",
    "options": [
      "必要なデータを集める",
      "結論を決める",
      "データを削除する",
      "印象だけで判断する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0321",
    "unit": "問題解決",
    "field": "PDCA",
    "difficulty": "★",
    "question": "定期試験の勉強計画を立てた後、実際の学習状況を振り返る段階を何というか。",
    "options": [
      "Plan",
      "Action",
      "Check",
      "Do"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0322",
    "unit": "問題解決",
    "field": "情報整理",
    "difficulty": "★",
    "question": "クラスアンケートの結果を分類し、共通点を探す作業として最も適切なものはどれか。",
    "options": [
      "データの整理・分析",
      "回答の削除",
      "質問数の削減",
      "印刷設定の変更"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0323",
    "unit": "問題解決",
    "field": "社会問題",
    "difficulty": "★★",
    "question": "学校周辺の通学路で自転車事故が増えている。事故を減らす対策を考えるために最も重要なことはどれか。",
    "options": [
      "事故が起きた場所や時間帯を調べる",
      "自転車通学を禁止する",
      "道路を全て広げる",
      "信号を撤去する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0324",
    "unit": "問題解決",
    "field": "情報活用",
    "difficulty": "★★",
    "question": "SNSで誤情報が拡散される原因を分析する際、最も必要な視点はどれか。",
    "options": [
      "拡散経路や情報源を調べる",
      "フォロワー数だけを見る",
      "投稿の長さを比較する",
      "アイコンの色を確認する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0325",
    "unit": "問題解決",
    "field": "意思決定",
    "difficulty": "★★",
    "question": "学校祭で模擬店の数を決める際、限られた予算の中で最適な案を考える方法として最も適切なものはどれか。",
    "options": [
      "条件を整理して比較する",
      "前年と全く同じにする",
      "多数決だけで決める",
      "最初の案を採用する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0326",
    "unit": "問題解決",
    "field": "モデル化",
    "difficulty": "★★",
    "question": "駅前の混雑を解消するため、人の流れをコンピュータ上で再現する手法を何というか。",
    "options": [
      "シミュレーション",
      "デバッグ",
      "暗号化",
      "圧縮"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0327",
    "unit": "問題解決",
    "field": "アルゴリズム",
    "difficulty": "★★",
    "question": "文化祭の来場者をスムーズに案内するため、受付の手順を順番に整理した。このような手順を何というか。",
    "options": [
      "アルゴリズム",
      "プログラム言語",
      "データベース",
      "ネットワーク"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0328",
    "unit": "問題解決",
    "field": "環境問題",
    "difficulty": "★★",
    "question": "学校で電力使用量を減らす取り組みを行うことになった。効果を検証するために必要なものはどれか。",
    "options": [
      "実施前後の電力使用量の比較",
      "教室数の確認",
      "校舎の築年数",
      "教員数の集計"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0329",
    "unit": "問題解決",
    "field": "地域課題",
    "difficulty": "★★",
    "question": "地域のバス利用者が減少している原因を調べる際、最も適切な方法はどれか。",
    "options": [
      "住民へのアンケートや利用状況の分析",
      "路線をすぐ廃止する",
      "運賃を無料にする",
      "バスの色を変える"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0330",
    "unit": "問題解決",
    "field": "情報モラル",
    "difficulty": "★★",
    "question": "学校で生成AIの利用ルールを作る際、最初に検討すべきことはどれか。",
    "options": [
      "どのような場面で利用するかを明確にする",
      "全ての利用を禁止する",
      "全ての課題をAIに任せる",
      "利用時間だけを制限する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0331",
    "unit": "問題解決",
    "field": "防災",
    "difficulty": "★★",
    "question": "豪雨災害に備えて避難計画を立てる際、最も重要な情報はどれか。",
    "options": [
      "避難所や危険区域の位置",
      "友人の人数",
      "学校の創立年",
      "教科書の冊数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0332",
    "unit": "問題解決",
    "field": "データ分析",
    "difficulty": "★★",
    "question": "購買部で売れ残りが増えている原因を考える際、最初に確認すべきことはどれか。",
    "options": [
      "売上データや購入時間帯",
      "商品の包装",
      "色の種類",
      "店員の人数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0333",
    "unit": "問題解決",
    "field": "少子高齢化",
    "difficulty": "★★★",
    "question": "ある地域で高齢者の買い物が困難になっている。問題解決の方法として最も適切なものはどれか。",
    "options": [
      "住民の意見や移動手段を調査する",
      "全ての店舗を閉店する",
      "若者だけを対象に調査する",
      "人口を増やす計画だけを立てる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0334",
    "unit": "問題解決",
    "field": "AIと社会",
    "difficulty": "★★★",
    "question": "学校が生成AIによる学習支援を導入したところ、生徒がAIの回答をそのまま提出するケースが増えた。この問題への対策として最も適切なものはどれか。",
    "options": [
      "利用目的やルールを明確にする",
      "AIの利用記録を削除する",
      "全ての課題を紙に戻す",
      "インターネットを禁止する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0335",
    "unit": "問題解決",
    "field": "交通問題",
    "difficulty": "★★★",
    "question": "通学路の混雑を改善するためにシミュレーションを行った。しかし、実際の結果と大きく異なった。最も考えられる理由はどれか。",
    "options": [
      "現実の条件を十分に反映できていなかった",
      "コンピュータの電源が入っていた",
      "データ量が少なかった",
      "グラフを作成していなかった"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0336",
    "unit": "問題解決",
    "field": "地域活性化",
    "difficulty": "★★★",
    "question": "商店街の利用者を増やすために高校生が提案を行うことになった。提案の根拠として最も適切なものはどれか。",
    "options": [
      "アンケートや売上データの分析結果",
      "個人の感想",
      "インターネット上のうわさ",
      "担当者の経験だけ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0337",
    "unit": "問題解決",
    "field": "情報社会",
    "difficulty": "★★★",
    "question": "SNSの利用時間が長い生徒ほど睡眠不足の傾向があることが分かった。この結果をもとに学校が対策を考える際、最初に確認すべきことはどれか。",
    "options": [
      "本当に因果関係があるのかを検討する",
      "直ちにSNSを禁止する",
      "スマートフォンを回収する",
      "SNS会社に責任を求める"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0338",
    "unit": "問題解決",
    "field": "AI社会",
    "difficulty": "★",
    "question": "学校でAIチューターが導入されたが、生徒によって利用頻度に大きな差があった。まず取り組むべきこととして最も適切なものはどれか。",
    "options": [
      "利用状況や利用しない理由を調査する",
      "AIチューターを廃止する",
      "利用回数の上限をなくす",
      "教員だけが利用する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0339",
    "unit": "問題解決",
    "field": "情報活用",
    "difficulty": "★",
    "question": "授業中にAIが自動生成した資料に誤りが多いことが分かった。問題解決の第一段階として適切なものはどれか。",
    "options": [
      "誤りの発生条件を整理する",
      "全て手書きに戻す",
      "資料配布を中止する",
      "AIを交換する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0340",
    "unit": "問題解決",
    "field": "スマートシティ",
    "difficulty": "★",
    "question": "通学路の混雑を緩和するため、自治体が信号機の点灯時間を自動制御するシステムを導入した。改善効果を調べるために必要なものはどれか。",
    "options": [
      "導入前後の交通量データ",
      "信号機の色の種類",
      "周辺店舗の数",
      "道路の名称"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0341",
    "unit": "問題解決",
    "field": "個別最適化",
    "difficulty": "★",
    "question": "生徒ごとに異なる学習計画をAIが提案する仕組みを評価する際、最も重視すべきことはどれか。",
    "options": [
      "学習成果が向上したかどうか",
      "AIの開発費",
      "教室の広さ",
      "端末の色"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0342",
    "unit": "問題解決",
    "field": "仮説設定",
    "difficulty": "★",
    "question": "学校の電力使用量が急増した原因を探るため、最初に行うべきことはどれか。",
    "options": [
      "原因の候補を挙げて仮説を立てる",
      "設備を全て交換する",
      "電気を止める",
      "校舎を建て替える"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0343",
    "unit": "問題解決",
    "field": "生成AIと教育",
    "difficulty": "★★",
    "question": "数年後、学校ではAIが生徒の提出物を自動で添削している。しかし、一部の生徒が不公平だと感じている。問題解決のために最も必要な視点はどれか。",
    "options": [
      "評価基準の透明性を高める",
      "AIの処理速度を上げる",
      "教室を増やす",
      "紙の提出物を禁止する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0344",
    "unit": "問題解決",
    "field": "エネルギー問題",
    "difficulty": "★★",
    "question": "地域の電力不足を解消するため、家庭の蓄電池をネットワークで連携させる計画が立てられた。まず検討すべき事項はどれか。",
    "options": [
      "電力需要と供給のデータ",
      "電線の色",
      "住宅の築年数",
      "家族構成だけ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0345",
    "unit": "問題解決",
    "field": "都市設計",
    "difficulty": "★★",
    "question": "自動運転バスが導入された都市で事故が発生した。原因分析のために優先して確認すべきものはどれか。",
    "options": [
      "走行記録やセンサー情報",
      "運転席の形状",
      "車体の色",
      "乗客の服装"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0346",
    "unit": "問題解決",
    "field": "医療と情報",
    "difficulty": "★★",
    "question": "AIが健康診断の結果から病気の可能性を予測するシステムを導入した。予測精度を改善するために必要なものはどれか。",
    "options": [
      "質の高い医療データ",
      "病院の建物の大きさ",
      "診察室の数",
      "ポスターの枚数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0347",
    "unit": "問題解決",
    "field": "情報格差",
    "difficulty": "★★",
    "question": "AIサービスが普及した社会で、高齢者が十分に利用できていないことが分かった。解決策を検討する際に最も重要なことはどれか。",
    "options": [
      "利用者の困りごとを調査する",
      "端末を高価なものにする",
      "利用を義務化する",
      "機能を増やす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0348",
    "unit": "問題解決",
    "field": "環境とデータ",
    "difficulty": "★★★",
    "question": "自治体が熱中症対策として街中のセンサーから得られるデータを活用している。しかし、予測が外れる日が多い。最初に見直すべきことはどれか。",
    "options": [
      "収集しているデータやモデルの妥当性",
      "センサーの色",
      "職員数",
      "広報資料のデザイン"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0349",
    "unit": "問題解決",
    "field": "デジタル民主主義",
    "difficulty": "★★★",
    "question": "将来、自治体がオンライン投票を導入したところ、若者と高齢者で投票率に大きな差が生じた。問題解決のために最も必要なものはどれか。",
    "options": [
      "利用実態や原因の分析",
      "投票回数の増加",
      "投票所の削減",
      "投票時間の短縮"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0350",
    "unit": "問題解決",
    "field": "AIと創作",
    "difficulty": "★★★",
    "question": "AIによる自動作曲が普及し、人間の作品との区別が難しくなった。制度設計を考える際に重要な観点はどれか。",
    "options": [
      "作品の生成過程を記録する仕組み",
      "AIの計算速度",
      "音楽データの容量",
      "スピーカーの性能"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0351",
    "unit": "問題解決",
    "field": "宇宙開発",
    "difficulty": "★★★",
    "question": "月面基地では、限られた資源を管理するためにAIが利用されている。食料不足の問題を解決するため、まず行うべきことはどれか。",
    "options": [
      "消費量と生産量を分析する",
      "居住区を拡張する",
      "通信回線を増設する",
      "基地の名称を変更する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0352",
    "unit": "問題解決",
    "field": "地域社会",
    "difficulty": "★★★",
    "question": "人口減少が進む地域で、配送ドローンの利用計画が立てられた。しかし、利用者が想定より少なかった。次に行うべきこととして最も適切なものはどれか。",
    "options": [
      "住民のニーズや利用状況を再調査する",
      "機体の色を変える",
      "配送回数を増やす",
      "飛行速度を上げる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0353",
    "unit": "問題解決",
    "field": "未来の教育",
    "difficulty": "★★★★",
    "question": "AIが学習内容を個別最適化する学校で、学力格差がかえって拡大した。この原因を探るための方法として最も適切なものはどれか。",
    "options": [
      "学習履歴や家庭環境など複数の要因を分析する",
      "AIの台数を増やす",
      "授業時間を短縮する",
      "教科書を電子化する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0354",
    "unit": "問題解決",
    "field": "気候変動",
    "difficulty": "★★★★",
    "question": "気候変動対策として都市全体の電力消費をAIが制御する仕組みが導入された。しかし、特定地域だけ停電が多発した。原因究明のために必要なことはどれか。",
    "options": [
      "制御アルゴリズムと地域データを検証する",
      "電柱の本数を数える",
      "建物の高さをそろえる",
      "学校の数を増やす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0355",
    "unit": "問題解決",
    "field": "仮想空間",
    "difficulty": "★★★★",
    "question": "多くの授業が仮想空間上で行われるようになった未来において、学習効果の低下が指摘された。改善策を考える前に行うべきことはどれか。",
    "options": [
      "学習記録やアンケートを分析する",
      "仮想空間を廃止する",
      "教室数を増やす",
      "端末を統一する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0356",
    "unit": "問題解決",
    "field": "AI行政",
    "difficulty": "★★★★",
    "question": "自治体の相談窓口の多くをAIが担当するようになったが、一部の住民が利用を避けている。その理由を明らかにする方法として最も適切なものはどれか。",
    "options": [
      "利用者と非利用者の双方を調査する",
      "AIの応答速度を上げる",
      "窓口を減らす",
      "広告を増やす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q06-0357",
    "unit": "問題解決",
    "field": "未来社会",
    "difficulty": "★★★★",
    "question": "2050年、複数の都市が交通・医療・教育データを共有するようになった。その結果、予想外の問題が発生した。問題解決の出発点として最も適切なものはどれか。",
    "options": [
      "関係者ごとに課題を整理する",
      "共有を完全に停止する",
      "データ量を減らす",
      "都市数を減らす"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0001",
    "unit": "予想問題（教科書未載）",
    "field": "生成AIと情報モラル",
    "difficulty": "★★★",
    "question": "生成AIが作成した画像や文章が本物と区別しにくくなっている。このような社会において、最も重要となる能力はどれか。",
    "options": [
      "プログラミング能力",
      "記憶力",
      "計算速度",
      "情報を批判的に読み取る力"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0002",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル市民社会",
    "difficulty": "★★★",
    "question": "将来、多くの行政手続きがオンライン化された社会で、高齢者などが不利益を受けないようにするために重要な考え方はどれか。",
    "options": [
      "情報圧縮",
      "アクセシビリティ",
      "暗号化",
      "仮想化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0003",
    "unit": "予想問題（教科書未載）",
    "field": "AI時代の著作権",
    "difficulty": "★★★★",
    "question": "生成AIを利用して作成した作品を公開する際、最初に確認すべき事項として最も適切なものはどれか。",
    "options": [
      "パソコンの性能",
      "AIの学習元や利用規約",
      "ファイルサイズ",
      "公開日時"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0004",
    "unit": "予想問題（教科書未載）",
    "field": "フェイク情報",
    "difficulty": "★★★★★",
    "question": "SNS上で、AIが自動生成した災害情報が急速に拡散した。情報の真偽を確認する方法として最も適切なものはどれか。",
    "options": [
      "拡散数を確認する",
      "投稿者のフォロワー数を確認する",
      "複数の公的機関の情報を比較する",
      "コメント欄を読む"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0005",
    "unit": "予想問題（教科書未載）",
    "field": "XRデザイン",
    "difficulty": "★★★",
    "question": "拡張現実（AR）を用いた観光案内アプリを設計する際、画面上の情報量が多すぎると利用者が混乱する可能性がある。この問題を防ぐために重要な考え方はどれか。",
    "options": [
      "冗長化",
      "ユーザビリティ",
      "量子化",
      "符号化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0006",
    "unit": "予想問題（教科書未載）",
    "field": "生成AIとデザイン",
    "difficulty": "★★★★",
    "question": "生成AIを利用してポスター案を作成したところ、文字が読みにくいデザインが多く出力された。改善のために最も有効な方法はどれか。",
    "options": [
      "AIの出力をそのまま利用する",
      "人間が目的に応じて評価・修正する",
      "画像サイズを小さくする",
      "色数を減らす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0007",
    "unit": "予想問題（教科書未載）",
    "field": "メタバース",
    "difficulty": "★★★★★",
    "question": "仮想空間上の学校で授業を行う際、誰もが利用しやすい環境を実現するために最も重要な考え方はどれか。",
    "options": [
      "アクセシビリティ",
      "暗号化",
      "標本化",
      "デバッグ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0008",
    "unit": "予想問題（教科書未載）",
    "field": "量子コンピュータ",
    "difficulty": "★★★",
    "question": "量子コンピュータと現在のコンピュータの大きな違いとして最も適切なものはどれか。",
    "options": [
      "0と1だけを扱う",
      "量子状態を利用した計算を行う",
      "電気を使用しない",
      "プログラムが不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0009",
    "unit": "予想問題（教科書未載）",
    "field": "生成AIプログラミング",
    "difficulty": "★★★",
    "question": "生成AIが提案したプログラムを利用する際、最も重要なことはどれか。",
    "options": [
      "必ず正しいとして実行する",
      "コードの内容を理解して検証する",
      "コメントを削除する",
      "変数名を短くする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0010",
    "unit": "予想問題（教科書未載）",
    "field": "エッジAI",
    "difficulty": "★★★★",
    "question": "自動運転車がクラウドではなく車両内部で画像認識を行う利点として最も適切なものはどれか。",
    "options": [
      "通信量や遅延を減らせる",
      "電力消費が増える",
      "記憶容量が不要になる",
      "プログラムが不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0011",
    "unit": "予想問題（教科書未載）",
    "field": "AIとアルゴリズム",
    "difficulty": "★★★★★",
    "question": "生成AIが誤った回答を出力した原因を調査する際、確認すべき事項として最も適切なものはどれか。",
    "options": [
      "画面の大きさ",
      "学習データやアルゴリズムの特性",
      "利用者の年齢",
      "CPUの色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0012",
    "unit": "予想問題（教科書未載）",
    "field": "IoT社会",
    "difficulty": "★★★",
    "question": "将来、家庭内の家電が全てネットワークに接続される社会で、新たなリスクとして最も考えられるものはどれか。",
    "options": [
      "画質の低下",
      "不正アクセスによる情報漏えい",
      "印刷速度の低下",
      "記憶容量の不足"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0013",
    "unit": "予想問題（教科書未載）",
    "field": "6G通信",
    "difficulty": "★★★",
    "question": "6Gなどの超高速通信技術が普及した社会で、遠隔医療や自動運転が実現しやすくなる主な理由はどれか。",
    "options": [
      "通信の遅延が小さくなるため",
      "ファイル形式が統一されるため",
      "電力消費がなくなるため",
      "暗号化が不要になるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0014",
    "unit": "予想問題（教科書未載）",
    "field": "分散システム",
    "difficulty": "★★★★",
    "question": "多数のコンピュータで処理を分担する分散システムの利点として最も適切なものはどれか。",
    "options": [
      "障害時の影響を小さくできる",
      "通信が不要になる",
      "データ量が減少する",
      "記憶装置が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0015",
    "unit": "予想問題（教科書未載）",
    "field": "ゼロトラスト",
    "difficulty": "★★★★★",
    "question": "社外からのアクセスが増加した企業が『社内だから安全』という前提をやめ、すべてのアクセスを検証する仕組みを導入した。この考え方を何というか。",
    "options": [
      "フェイルセーフ",
      "ゼロトラスト",
      "キャッシュ",
      "ルーティング"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0016",
    "unit": "予想問題（教科書未載）",
    "field": "AIによる予測",
    "difficulty": "★★★",
    "question": "生成AIを利用して売上予測を行う際、過去のデータだけを学習させた場合に起こり得る問題として最も適切なものはどれか。",
    "options": [
      "未来の社会変化に対応できない可能性がある",
      "計算速度が速くなる",
      "通信量が減少する",
      "暗号化が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0017",
    "unit": "予想問題（教科書未載）",
    "field": "フェイク動画検出",
    "difficulty": "★★★★",
    "question": "AIによって作られた映像かどうかを判定するシステムを開発する際、最も重要なことはどれか。",
    "options": [
      "学習データの偏りを減らすこと",
      "動画の長さを統一すること",
      "ファイル名を変更すること",
      "圧縮率を上げること"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0018",
    "unit": "予想問題（教科書未載）",
    "field": "データバイアス",
    "difficulty": "★★★★★",
    "question": "採用支援AIが特定の属性を持つ応募者を不利に評価していた。この問題の原因として最も考えられるものはどれか。",
    "options": [
      "ディスプレイの性能",
      "学習データに偏りが存在した",
      "通信速度の低下",
      "記憶容量の不足"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0019",
    "unit": "予想問題（教科書未載）",
    "field": "AIと意思決定",
    "difficulty": "★★★",
    "question": "学校が時間割の自動作成にAIを導入したところ、一部の教員の希望が反映されなかった。改善のために最も重要なことはどれか。",
    "options": [
      "AIを廃止する",
      "評価基準や制約条件を見直す",
      "通信速度を上げる",
      "データ量を減らす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0020",
    "unit": "予想問題（教科書未載）",
    "field": "スマートシティ",
    "difficulty": "★★★★",
    "question": "将来のスマートシティでは、交通量や電力消費量をリアルタイムで分析して都市運営を行う。このとき最も重要な考え方はどれか。",
    "options": [
      "複数のデータを統合して最適化すること",
      "紙の地図を増やすこと",
      "通信を減らすこと",
      "記憶容量を増やすこと"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0021",
    "unit": "予想問題（教科書未載）",
    "field": "AIエージェント社会",
    "difficulty": "★★★★★",
    "question": "将来、AIエージェントが個人の代わりに商品の購入や予約を行う社会では、人間に最も求められる能力はどれか。",
    "options": [
      "暗算力",
      "AIの判断基準を理解し監督する力",
      "タイピング速度",
      "ファイル圧縮技術"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0022",
    "unit": "予想問題（教科書未載）",
    "field": "気候変動シミュレーション",
    "difficulty": "★★★★★",
    "question": "気候変動を予測するシミュレーションの結果が複数の機関で異なっていた。この状況で最も適切な考え方はどれか。",
    "options": [
      "最も都合の良い結果だけを採用する",
      "モデルの前提条件や使用データを比較する",
      "計算機の価格を比較する",
      "古い予測を優先する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0023",
    "unit": "予想問題（教科書未載）",
    "field": "AI人格と情報倫理",
    "difficulty": "★★★★★",
    "question": "2038年、多くの人が『AIパートナー』と日常的に会話するようになった。ある高校では、生徒がAIパートナーに進路相談を任せるケースが増えている。この状況で学校教育が最も重視すべき能力はどれか。",
    "options": [
      "AIの発言を記憶する能力",
      "AIの助言の根拠や限界を判断する能力",
      "AIの処理速度を向上させる能力",
      "AIを長時間利用する能力"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0024",
    "unit": "予想問題（教科書未載）",
    "field": "記憶のデジタル化",
    "difficulty": "★★★★★",
    "question": "将来、人間の経験や記憶の一部をデジタル保存できる技術が普及したとする。この技術の利用において最も重要な課題はどれか。",
    "options": [
      "記憶容量の不足",
      "個人情報や人格の保護",
      "表示速度の低下",
      "通信規格の統一"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0025",
    "unit": "予想問題（教科書未載）",
    "field": "AIによる情報生成",
    "difficulty": "★★★★",
    "question": "ニュース記事の大半をAIが自動生成する社会において、読者に最も必要となる能力はどれか。",
    "options": [
      "タイピング速度",
      "複数の情報源を比較・検証する力",
      "ファイル圧縮技術",
      "画像編集技術"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0026",
    "unit": "予想問題（教科書未載）",
    "field": "脳直結インタフェース",
    "difficulty": "★★★★★",
    "question": "脳とコンピュータを直接接続する技術が普及した社会で、最も新たに問題となる可能性が高いものはどれか。",
    "options": [
      "ディスプレイの大型化",
      "思考データの漏えい",
      "文字コードの違い",
      "電源ケーブルの長さ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0027",
    "unit": "予想問題（教科書未載）",
    "field": "AI選挙",
    "difficulty": "★★★★★",
    "question": "選挙公約の分析や候補者の推薦をAIが行う社会において、民主主義を守るために最も重要なことはどれか。",
    "options": [
      "AIの推薦を必ず採用する",
      "AIの判断基準の透明性を確保する",
      "AIを一切利用しない",
      "投票を自動化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0028",
    "unit": "予想問題（教科書未載）",
    "field": "感情認識UI",
    "difficulty": "★★★★",
    "question": "利用者の表情を読み取って表示内容を変える学習システムを設計する際、最も重視すべき観点はどれか。",
    "options": [
      "画面の解像度",
      "利用者が認識内容を確認・制御できること",
      "配色を増やすこと",
      "処理速度のみを高めること"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0029",
    "unit": "予想問題（教科書未載）",
    "field": "仮想空間の設計",
    "difficulty": "★★★★★",
    "question": "仮想空間上の学校で避難訓練を行う際、現実世界とは異なる新たなデザイン上の課題として最も適切なものはどれか。",
    "options": [
      "机の材質",
      "空間認識の個人差",
      "紙の配布方法",
      "照明の色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0030",
    "unit": "予想問題（教科書未載）",
    "field": "AI生成コンテンツ",
    "difficulty": "★★★★",
    "question": "生成AIが作成した教材を利用する際、教師が最も確認すべきことはどれか。",
    "options": [
      "フォントの種類",
      "内容の正確性や偏り",
      "ファイル形式",
      "作成日時"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0031",
    "unit": "予想問題（教科書未載）",
    "field": "自己改良AI",
    "difficulty": "★★★★★",
    "question": "プログラム自身がコードを書き換えて性能を向上させるAIが登場した。このようなAIを運用する際に最も重要となる仕組みはどれか。",
    "options": [
      "処理速度の向上",
      "変更履歴や動作を監査する仕組み",
      "メモリ容量の削減",
      "画面サイズの統一"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0032",
    "unit": "予想問題（教科書未載）",
    "field": "量子アルゴリズム",
    "difficulty": "★★★★★",
    "question": "量子コンピュータの実用化によって、現在の暗号技術の一部が危険視されている。この問題への対応として最も適切なものはどれか。",
    "options": [
      "記憶装置を増設する",
      "耐量子暗号を導入する",
      "通信速度を下げる",
      "画像圧縮率を高める"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0033",
    "unit": "予想問題（教科書未載）",
    "field": "AIプログラミング",
    "difficulty": "★★★★",
    "question": "AIが生成したプログラムを複数の開発者が共同で修正している。このとき、バグの原因を特定しやすくするために最も重要なものはどれか。",
    "options": [
      "画面の明るさ",
      "バージョン管理システム",
      "CPUの性能",
      "モニターの大きさ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0034",
    "unit": "予想問題（教科書未載）",
    "field": "生体コンピューティング",
    "difficulty": "★★★★★",
    "question": "DNAや細胞を利用したコンピュータが実用化された場合、従来の電子計算機との比較で最も注目される観点はどれか。",
    "options": [
      "画面の解像度",
      "計算原理の違い",
      "キーボードの配列",
      "ファイル形式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0035",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙インターネット",
    "difficulty": "★★★★",
    "question": "月面基地と地球を結ぶ通信網が整備された社会で、現在のインターネット以上に重要となる課題はどれか。",
    "options": [
      "画面サイズの統一",
      "通信遅延への対応",
      "プリンタの性能",
      "マウス操作の習得"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0036",
    "unit": "予想問題（教科書未載）",
    "field": "IoT防災網",
    "difficulty": "★★★★",
    "question": "街中のセンサーが地震や豪雨を検知し、自動で避難指示を出すシステムにおいて、誤作動を減らすために最も重要なことはどれか。",
    "options": [
      "センサーの数だけを増やす",
      "複数種類のデータを組み合わせて判断する",
      "通信速度を落とす",
      "利用者数を減らす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0037",
    "unit": "予想問題（教科書未載）",
    "field": "AIサイバー攻撃",
    "difficulty": "★★★★★",
    "question": "AI同士が攻撃と防御を繰り返すサイバー空間では、防御側に最も求められる能力はどれか。",
    "options": [
      "手作業による監視のみを行う能力",
      "攻撃パターンを継続的に学習・更新する能力",
      "パスワードを紙に記録する能力",
      "通信を停止する能力"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0038",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル分身",
    "difficulty": "★★★★★",
    "question": "個人の行動を学習した『デジタル分身』がネットワーク上で活動する社会において、最も問題となる可能性が高いものはどれか。",
    "options": [
      "画面の明るさ",
      "本人と分身の責任の境界",
      "電力消費",
      "文字サイズ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0039",
    "unit": "予想問題（教科書未載）",
    "field": "予測AIの限界",
    "difficulty": "★★★★",
    "question": "AIが『明日の電力消費量』を予測していたが、大規模なイベントの開催によって予測が大きく外れた。この事例から分かることとして最も適切なものはどれか。",
    "options": [
      "AIは常に誤る",
      "過去のデータだけでは予測できない事象が存在する",
      "イベントは無関係である",
      "データ量を減らすべきである"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0040",
    "unit": "予想問題（教科書未載）",
    "field": "データ所有権",
    "difficulty": "★★★★★",
    "question": "将来、個人の健康データを企業に提供する代わりに報酬を得る仕組みが普及した。この社会で最も重要となる考え方はどれか。",
    "options": [
      "データの所有権と利用範囲を明確にすること",
      "データを全て無料公開すること",
      "紙で保存すること",
      "暗号化を廃止すること"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0041",
    "unit": "予想問題（教科書未載）",
    "field": "AI科学研究",
    "difficulty": "★★★★★",
    "question": "AIが新薬候補を発見したが、その理由を研究者が説明できなかった。この状況で最も重要な課題はどれか。",
    "options": [
      "通信速度",
      "説明可能性",
      "画面解像度",
      "保存容量"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0042",
    "unit": "予想問題（教科書未載）",
    "field": "自律都市",
    "difficulty": "★★★★★",
    "question": "都市全体を管理するAIが、渋滞緩和のために一部道路の通行を制限したところ、物流企業から反発が起きた。この問題を解決する際に最も重要な考え方はどれか。",
    "options": [
      "一つの指標だけを最適化する",
      "複数の利害関係者の視点を考慮する",
      "AIの判断を無条件で採用する",
      "交通量だけを分析する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0043",
    "unit": "予想問題（教科書未載）",
    "field": "AI教師",
    "difficulty": "★★★★★",
    "question": "AI教師が授業を担当する学校で、生徒の成績は向上したが、議論する力が低下した。この結果から最も適切に言えることはどれか。",
    "options": [
      "成績だけを評価すべきである",
      "教育効果は複数の観点から評価する必要がある",
      "AI教師は不要である",
      "議論力は測定できない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0044",
    "unit": "予想問題（教科書未載）",
    "field": "火星都市計画",
    "difficulty": "★★★★★",
    "question": "火星移住計画において、『資源消費』『安全性』『快適性』『建設コスト』を同時に考慮する必要がある。このような問題の特徴として最も適切なものはどれか。",
    "options": [
      "単一の評価指標で解決できる",
      "複数の条件の間にトレードオフが存在する",
      "解が必ず一つに定まる",
      "データ分析は不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0045",
    "unit": "予想問題（教科書未載）",
    "field": "AIエージェント社会",
    "difficulty": "★★★★★",
    "question": "AIエージェントが商品の購入や契約を代行する社会で、人間に最も求められる役割はどれか。",
    "options": [
      "AIより速く計算すること",
      "AIの目標設定と監督を行うこと",
      "AIの代わりに全ての作業を行うこと",
      "AIを利用しないこと"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0046",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル人格",
    "difficulty": "★★★★★",
    "question": "2042年、個人の会話や行動履歴を学習した『デジタル人格』が、本人の死後も家族と対話できるサービスが普及した。このサービスの利用にあたり、最も重要な課題はどれか。",
    "options": [
      "通信速度の向上",
      "人格データの所有権や利用範囲の明確化",
      "画面サイズの統一",
      "記憶装置の大容量化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0047",
    "unit": "予想問題（教科書未載）",
    "field": "アルゴリズム統治",
    "difficulty": "★★★★★",
    "question": "ある都市では、交通、医療、福祉などの予算配分をAIが提案するようになった。住民の信頼を維持するために最も重要な仕組みはどれか。",
    "options": [
      "AIの処理速度向上",
      "AIの判断過程を説明できる仕組み",
      "高性能なサーバの導入",
      "利用料金の無料化"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0048",
    "unit": "予想問題（教科書未載）",
    "field": "感情データ",
    "difficulty": "★★★★",
    "question": "ウェアラブル機器によって利用者の感情状態をリアルタイムで取得できる社会において、最も慎重に扱うべき情報はどれか。",
    "options": [
      "歩数データ",
      "感情や心理状態に関するデータ",
      "気温データ",
      "時刻データ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0049",
    "unit": "予想問題（教科書未載）",
    "field": "AIニュース編集",
    "difficulty": "★★★★★",
    "question": "ニュース配信AIが利用者の興味に合わせて記事を選別する社会では、どのような問題が起こる可能性が最も高いか。",
    "options": [
      "通信量が減る",
      "異なる意見に触れる機会が減少する",
      "画像の解像度が下がる",
      "端末の価格が上がる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0050",
    "unit": "予想問題（教科書未載）",
    "field": "個人最適化社会",
    "difficulty": "★★★★★",
    "question": "AIが個人ごとに最適な商品、学習内容、交友関係を提案する社会において、教育現場が特に重視すべき能力はどれか。",
    "options": [
      "暗算力",
      "自ら選択し判断する能力",
      "タイピング速度",
      "検索速度"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0051",
    "unit": "予想問題（教科書未載）",
    "field": "動的インタフェース",
    "difficulty": "★★★★",
    "question": "2040年、利用者の年齢や状況に応じて、ボタンの配置や文字の大きさが自動的に変化するシステムが普及した。この設計で最も重要な観点はどれか。",
    "options": [
      "色数を増やすこと",
      "利用者が変化を理解し操作できること",
      "画像サイズを固定すること",
      "表示速度を下げること"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0052",
    "unit": "予想問題（教科書未載）",
    "field": "五感インタフェース",
    "difficulty": "★★★★★",
    "question": "視覚や聴覚だけでなく、触覚や嗅覚も利用する通信技術が普及した場合、新たに重要となるデザイン上の課題はどれか。",
    "options": [
      "文字コードの統一",
      "感覚情報の個人差への対応",
      "CPU性能の向上",
      "ファイル形式の統一"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0053",
    "unit": "予想問題（教科書未載）",
    "field": "AI共同制作",
    "difficulty": "★★★★",
    "question": "生成AIと人間が共同で映像作品を制作する際、人間に最も求められる役割はどれか。",
    "options": [
      "AIの計算を代行すること",
      "作品の目的や価値観を設計すること",
      "保存容量を管理すること",
      "通信速度を調整すること"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0054",
    "unit": "予想問題（教科書未載）",
    "field": "自己進化ソフトウェア",
    "difficulty": "★★★★★",
    "question": "AIが自らプログラムを改良する社会では、ソフトウェア開発者に最も求められる能力はどれか。",
    "options": [
      "高速なタイピング",
      "AIが変更した内容を検証・監査する能力",
      "画面設計能力",
      "回路設計能力"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0055",
    "unit": "予想問題（教科書未載）",
    "field": "脳型コンピュータ",
    "difficulty": "★★★★★",
    "question": "人間の神経回路を模倣した脳型コンピュータが普及した場合、従来のプログラムとの違いとして最も考えられるものはどれか。",
    "options": [
      "手続きよりも学習によって動作を変化させる",
      "0と1を使わない",
      "電力を使用しない",
      "ネットワーク接続が不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0056",
    "unit": "予想問題（教科書未載）",
    "field": "AIコード生成",
    "difficulty": "★★★★",
    "question": "AIが生成したプログラムを利用する際、『正しく動く』ことに加えて確認すべき事項として最も適切なものはどれか。",
    "options": [
      "コメントの量",
      "セキュリティや保守性",
      "作成日時",
      "画面の色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0057",
    "unit": "予想問題（教科書未載）",
    "field": "分散AI",
    "difficulty": "★★★★★",
    "question": "数百万台の端末が協力してAIを動作させる社会で、一部の端末が故障してもサービスを継続するために重要な仕組みはどれか。",
    "options": [
      "冗長化",
      "量子化",
      "圧縮",
      "標本化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0058",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙通信網",
    "difficulty": "★★★★★",
    "question": "火星基地と地球の間でインターネット通信を行う際、現在よりも特に深刻となる問題はどれか。",
    "options": [
      "画面解像度",
      "通信遅延",
      "文字コード",
      "音量設定"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0059",
    "unit": "予想問題（教科書未載）",
    "field": "AI防御網",
    "difficulty": "★★★★★",
    "question": "AIによるサイバー攻撃が一般化した社会で、防御システムに最も求められる機能はどれか。",
    "options": [
      "固定的なルールのみで防御する機能",
      "攻撃手法の変化を学習し続ける機能",
      "通信を停止する機能",
      "利用者数を減らす機能"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0060",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル分身社会",
    "difficulty": "★★★★★",
    "question": "個人の『デジタル分身』がネットワーク上で契約を代行する社会では、最も重要となる制度設計上の課題はどれか。",
    "options": [
      "画面サイズの統一",
      "責任の所在の明確化",
      "通信速度の向上",
      "端末価格の低下"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0061",
    "unit": "予想問題（教科書未載）",
    "field": "超分散社会",
    "difficulty": "★★★★",
    "question": "災害時に中央サーバが停止しても地域ごとの通信を維持するために有効な技術として最も適切なものはどれか。",
    "options": [
      "P2P型ネットワーク",
      "単一サーバ方式",
      "スタンドアロン方式",
      "バッチ処理"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0062",
    "unit": "予想問題（教科書未載）",
    "field": "予測社会",
    "difficulty": "★★★★★",
    "question": "AIが『将来犯罪を起こす可能性』を予測するシステムを導入した場合、最も慎重に検討すべき問題はどれか。",
    "options": [
      "記憶容量",
      "予測結果による差別や偏見",
      "通信速度",
      "画像サイズ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0063",
    "unit": "予想問題（教科書未載）",
    "field": "データ経済圏",
    "difficulty": "★★★★★",
    "question": "将来、個人が自分の生活データを企業に販売できる社会が実現した。このとき最も重要となる考え方はどれか。",
    "options": [
      "データの所有権と利用条件の明確化",
      "データの完全公開",
      "データの紙保存",
      "通信速度の高速化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0064",
    "unit": "予想問題（教科書未載）",
    "field": "科学研究AI",
    "difficulty": "★★★★★",
    "question": "AIが新しい物理法則の候補を発見したが、人間にはその理由を説明できなかった。この状況で最も重要となる課題はどれか。",
    "options": [
      "説明可能性",
      "画面解像度",
      "通信量",
      "文字コード"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0065",
    "unit": "予想問題（教科書未載）",
    "field": "シミュレーション社会",
    "difficulty": "★★★★",
    "question": "都市計画のほとんどがシミュレーションによって決定される社会では、シミュレーション結果を利用する際に最も重要なことはどれか。",
    "options": [
      "最も都合の良い結果だけを採用する",
      "前提条件やモデルの限界を理解する",
      "通信速度を確認する",
      "画面表示を改善する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0066",
    "unit": "予想問題（教科書未載）",
    "field": "AI政治",
    "difficulty": "★★★★★",
    "question": "AIが法律案を作成し、国会議員が最終判断を行う社会では、人間に最も求められる役割はどれか。",
    "options": [
      "AIより高速に計算すること",
      "社会的価値観や倫理を判断すること",
      "通信機器を管理すること",
      "データ入力を行うこと"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0067",
    "unit": "予想問題（教科書未載）",
    "field": "気候工学",
    "difficulty": "★★★★★",
    "question": "地球温暖化対策として、AIが気象を制御するシステムを提案した。しかし、一部の地域では干ばつが発生する可能性がある。この問題の特徴として最も適切なものはどれか。",
    "options": [
      "単一の指標で評価できる",
      "複数の利害関係者の間でトレードオフが発生する",
      "データ分析が不要である",
      "解決策は一つしかない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0068",
    "unit": "予想問題（教科書未載）",
    "field": "教育AI",
    "difficulty": "★★★★",
    "question": "AI教師によって個別最適化された学習が普及した結果、生徒同士で議論する機会が減少した。この状況に対する学校の対応として最も適切なものはどれか。",
    "options": [
      "AIの利用を全面禁止する",
      "協働的な学習の場を意図的に設計する",
      "個別学習のみを推進する",
      "評価を廃止する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0069",
    "unit": "予想問題（教科書未載）",
    "field": "未来都市設計",
    "difficulty": "★★★★★",
    "question": "2050年、都市運営AIは『環境負荷』『経済成長』『住民満足度』『災害対策』を同時に最適化しようとしている。この問題の性質として最も適切なものはどれか。",
    "options": [
      "評価基準が一つである",
      "複数の目的を同時に考える必要がある",
      "データは不要である",
      "最適解は必ず一つに決まる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0070",
    "unit": "予想問題（教科書未載）",
    "field": "AIコードレビュー",
    "difficulty": "★★★★★",
    "question": "生成AIが作成した次のプログラムは、1から100までの整数の平均値を求めることを目的としている。しかし、実行結果は期待した値にならなかった。原因として最も適切なものはどれか。",
    "options": [
      "変数sumの初期化を忘れている",
      "ループ回数が不足している",
      "平均を求める際の除数が誤っている",
      "print文が存在しない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0071",
    "unit": "予想問題（教科書未載）",
    "field": "コード読解",
    "difficulty": "★★★★★",
    "question": "AIが『二分探索は高速だから常に線形探索より優れている』と説明した。この説明が不適切である理由として最も適切なものはどれか。",
    "options": [
      "二分探索は文字列を扱えないから",
      "データが整列されている必要があるから",
      "二分探索は配列を使えないから",
      "計算量が大きいから"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0072",
    "unit": "予想問題（教科書未載）",
    "field": "アルゴリズム評価",
    "difficulty": "★★★★★",
    "question": "生成AIが提案した2つのアルゴリズムA、Bについて、Aは高速だが大量のメモリを消費し、Bは低速だが省メモリである。このとき最も適切な考え方はどれか。",
    "options": [
      "常にAを採用する",
      "常にBを採用する",
      "利用目的や制約条件に応じて選択する",
      "どちらも利用しない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0073",
    "unit": "予想問題（教科書未載）",
    "field": "生成AIと情報発信",
    "difficulty": "★",
    "question": "生成AIを利用して作成した文章をSNSに投稿する際、最初に確認すべきこととして最も適切なものはどれか。",
    "options": [
      "通信速度",
      "内容の正確性",
      "画面サイズ",
      "ファイル形式"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0074",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル市民",
    "difficulty": "★★",
    "question": "自治体が行政手続きをオンライン化したとき、誰もが利用できるようにするために重要な考え方はどれか。",
    "options": [
      "圧縮",
      "アクセシビリティ",
      "量子化",
      "キャッシュ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0075",
    "unit": "予想問題（教科書未載）",
    "field": "AIと情報倫理",
    "difficulty": "★★★",
    "question": "AIが作成した画像が本物の写真と区別しにくくなっている。このような社会で最も必要な力はどれか。",
    "options": [
      "高速入力能力",
      "複数の情報源を比較・検証する力",
      "画像編集能力",
      "記憶力"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0076",
    "unit": "予想問題（教科書未載）",
    "field": "推薦アルゴリズム",
    "difficulty": "★★★★",
    "question": "動画配信サービスが利用者の好みに合わせて作品を推薦する仕組みには、興味の偏りを強める可能性がある。この問題として最も適切なものはどれか。",
    "options": [
      "通信遅延",
      "フィルターバブル",
      "バッファオーバーフロー",
      "標本誤差"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0077",
    "unit": "予想問題（教科書未載）",
    "field": "AI社会",
    "difficulty": "★★★★★",
    "question": "AIが求人情報を自動的に推薦する社会では、利用者に最も求められる能力はどれか。",
    "options": [
      "AIより速く検索する能力",
      "AIの判断基準や限界を理解する能力",
      "プログラムを書く能力",
      "データを暗号化する能力"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0078",
    "unit": "予想問題（教科書未載）",
    "field": "マルチデバイス設計",
    "difficulty": "★",
    "question": "スマートフォンやタブレットなど、画面サイズに応じて表示を変えるWebデザインを何というか。",
    "options": [
      "フラットデザイン",
      "レスポンシブWebデザイン",
      "モーションデザイン",
      "ピクトグラム"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0079",
    "unit": "予想問題（教科書未載）",
    "field": "ARデザイン",
    "difficulty": "★★",
    "question": "AR案内アプリを設計する際、利用者が迷わないようにするために最も重要なものはどれか。",
    "options": [
      "情報量を増やす",
      "直感的な表示にする",
      "色数を増やす",
      "文字を小さくする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0080",
    "unit": "予想問題（教科書未載）",
    "field": "AI共同制作",
    "difficulty": "★★★",
    "question": "生成AIで作成したポスターを公開する前に、人間が確認すべきこととして最も適切なものはどれか。",
    "options": [
      "画像の容量",
      "情報の正確性と意図",
      "作成日時",
      "拡張子"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0081",
    "unit": "予想問題（教科書未載）",
    "field": "XR空間設計",
    "difficulty": "★★★★",
    "question": "仮想空間上の授業システムを設計する際、現実の教室以上に重視すべき観点はどれか。",
    "options": [
      "机の素材",
      "利用者の空間認識の差",
      "教室の広さ",
      "黒板の色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0082",
    "unit": "予想問題（教科書未載）",
    "field": "感情認識UI",
    "difficulty": "★★★★★",
    "question": "利用者の表情を分析して画面表示を変える学習システムでは、どのような配慮が最も重要か。",
    "options": [
      "CPU性能の向上",
      "利用者が分析結果を確認・制御できること",
      "画面の大型化",
      "通信量の削減"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0083",
    "unit": "予想問題（教科書未載）",
    "field": "AIコード生成",
    "difficulty": "★",
    "question": "生成AIが作成したプログラムを利用する際、最も重要なことはどれか。",
    "options": [
      "そのまま実行する",
      "内容を確認する",
      "保存しない",
      "印刷する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0084",
    "unit": "予想問題（教科書未載）",
    "field": "コード読解",
    "difficulty": "★★",
    "question": "AIが作成したプログラムの動作を理解するために必要な能力として最も適切なものはどれか。",
    "options": [
      "タイピング速度",
      "アルゴリズムを読む力",
      "画面設計能力",
      "暗号化技術"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0085",
    "unit": "予想問題（教科書未載）",
    "field": "エッジAI",
    "difficulty": "★★★",
    "question": "自動運転車が車内で画像認識を行う利点として最も適切なものはどれか。",
    "options": [
      "通信遅延を小さくできる",
      "電力消費がなくなる",
      "記憶装置が不要になる",
      "プログラムが不要になる"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0086",
    "unit": "予想問題（教科書未載）",
    "field": "AIレビュー",
    "difficulty": "★★★★",
    "question": "AIが生成したプログラムに潜むバグを見つけるために最も重要な能力はどれか。",
    "options": [
      "高速入力",
      "コードの読解と検証",
      "画像編集",
      "表計算"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0087",
    "unit": "予想問題（教科書未載）",
    "field": "自己改良AI",
    "difficulty": "★★★★★",
    "question": "AIが自らプログラムを書き換える社会において、人間に最も求められる役割はどれか。",
    "options": [
      "コードを全て手書きする",
      "AIの変更内容を監査する",
      "CPUを交換する",
      "通信速度を管理する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0088",
    "unit": "予想問題（教科書未載）",
    "field": "IoT社会",
    "difficulty": "★",
    "question": "家電や自動車など、さまざまな機器をインターネットに接続する仕組みを何というか。",
    "options": [
      "LAN",
      "IoT",
      "VPN",
      "DNS"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0089",
    "unit": "予想問題（教科書未載）",
    "field": "スマートホーム",
    "difficulty": "★★",
    "question": "スマートホーム化が進むことで増加する危険として最も適切なものはどれか。",
    "options": [
      "画面の故障",
      "不正アクセス",
      "停電",
      "印刷エラー"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0090",
    "unit": "予想問題（教科書未載）",
    "field": "ゼロトラスト",
    "difficulty": "★★★",
    "question": "『社内ネットワークだから安全』という考え方を見直し、全ての通信を検証する考え方を何というか。",
    "options": [
      "P2P",
      "ゼロトラスト",
      "キャッシュ",
      "プロキシ"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0091",
    "unit": "予想問題（教科書未載）",
    "field": "分散ネットワーク",
    "difficulty": "★★★★",
    "question": "災害時に一部のサーバが停止しても通信を継続できる仕組みとして最も適切なものはどれか。",
    "options": [
      "集中管理方式",
      "P2P型ネットワーク",
      "スタンドアロン方式",
      "バッチ処理"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0092",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙通信",
    "difficulty": "★★★★★",
    "question": "将来、地球と月面基地が常時接続される社会で、現在以上に大きな課題となるものはどれか。",
    "options": [
      "解像度",
      "通信遅延",
      "文字コード",
      "フォント"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0093",
    "unit": "予想問題（教科書未載）",
    "field": "データ共有",
    "difficulty": "★",
    "question": "個人の健康データを研究機関に提供する際、最も重要なことはどれか。",
    "options": [
      "通信速度",
      "利用目的を確認する",
      "画像サイズ",
      "圧縮率"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0094",
    "unit": "予想問題（教科書未載）",
    "field": "AI予測",
    "difficulty": "★★",
    "question": "AIによる売上予測が外れた原因として最も考えられるものはどれか。",
    "options": [
      "ファイル形式",
      "予測に含まれていない要因があった",
      "画面サイズ",
      "電源不足"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0095",
    "unit": "予想問題（教科書未載）",
    "field": "データバイアス",
    "difficulty": "★★★",
    "question": "AI採用システムが特定の応募者を不利に評価していた。この原因として最も考えられるものはどれか。",
    "options": [
      "通信遅延",
      "学習データの偏り",
      "記憶容量",
      "CPU性能"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0096",
    "unit": "予想問題（教科書未載）",
    "field": "説明可能AI",
    "difficulty": "★★★★",
    "question": "AIが病気の診断結果を示したが、その理由を医師が理解できなかった。このとき最も重要な課題はどれか。",
    "options": [
      "圧縮率",
      "説明可能性",
      "画像形式",
      "通信速度"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0097",
    "unit": "予想問題（教科書未載）",
    "field": "データ経済",
    "difficulty": "★★★★★",
    "question": "個人が自分の生活データを企業に提供して報酬を得る社会では、最も重要な考え方はどれか。",
    "options": [
      "データの所有権と利用範囲",
      "データの完全公開",
      "通信速度",
      "画面解像度"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0098",
    "unit": "予想問題（教科書未載）",
    "field": "AI支援",
    "difficulty": "★",
    "question": "AIを利用して問題解決を行う際、人間が担うべき役割として最も適切なものはどれか。",
    "options": [
      "AIを監督する",
      "AIを停止する",
      "AIを交換する",
      "AIを記録する"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0099",
    "unit": "予想問題（教科書未載）",
    "field": "スマートシティ",
    "difficulty": "★★",
    "question": "都市の交通量をAIで分析する主な目的として最も適切なものはどれか。",
    "options": [
      "通信量を増やす",
      "都市運営を改善する",
      "画面を大きくする",
      "電力を減らす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0100",
    "unit": "予想問題（教科書未載）",
    "field": "AI意思決定",
    "difficulty": "★★★",
    "question": "AIが授業時間割を作成したところ、一部の要望が反映されなかった。改善のために最も重要なものはどれか。",
    "options": [
      "CPUの性能",
      "評価基準や制約条件の見直し",
      "通信速度",
      "保存容量"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0101",
    "unit": "予想問題（教科書未載）",
    "field": "都市最適化",
    "difficulty": "★★★★",
    "question": "AIが渋滞緩和のために道路利用を制限したところ、物流企業から反対が起こった。この問題の特徴として最も適切なものはどれか。",
    "options": [
      "単純な計算問題である",
      "複数の利害関係者が存在する",
      "データは不要である",
      "解決策は一つしかない"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0102",
    "unit": "予想問題（教科書未載）",
    "field": "AIエージェント社会",
    "difficulty": "★★★★★",
    "question": "AIエージェントが個人の代わりに契約や予約を行う社会で、人間に最も求められる能力はどれか。",
    "options": [
      "暗算力",
      "AIの目標設定と監督を行う力",
      "タイピング速度",
      "検索速度"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0103",
    "unit": "予想問題（教科書未載）",
    "field": "心理学",
    "difficulty": "★★★★",
    "question": "SNS運営会社が、利用者の滞在時間を延ばすために『通知』の表示タイミングを最適化している。この設計に最も関係の深い学問分野はどれか。",
    "options": [
      "地質学",
      "心理学",
      "天文学",
      "言語学"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0104",
    "unit": "予想問題（教科書未載）",
    "field": "法学",
    "difficulty": "★★★★★",
    "question": "AIが作成した音楽が既存の楽曲と酷似していた場合、最も中心となる議論はどれか。",
    "options": [
      "熱力学",
      "著作権法",
      "進化論",
      "相対性理論"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0105",
    "unit": "予想問題（教科書未載）",
    "field": "認知科学",
    "difficulty": "★★★★",
    "question": "カーナビの案内表示を設計する際、『人間は一度に多くの情報を処理できない』という考え方と最も関係が深い学問はどれか。",
    "options": [
      "認知科学",
      "地理学",
      "化学",
      "経済学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0106",
    "unit": "予想問題（教科書未載）",
    "field": "建築学",
    "difficulty": "★★★★★",
    "question": "大規模な駅の案内表示とWebサイトのメニュー構造に共通する考え方として最も適切なものはどれか。",
    "options": [
      "情報の構造化",
      "暗号化",
      "量子化",
      "標本化"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0107",
    "unit": "予想問題（教科書未載）",
    "field": "生物学",
    "difficulty": "★★★★",
    "question": "ニューラルネットワークが人間の脳の神経細胞を参考に設計されていることから、AI研究と特に関係が深い学問はどれか。",
    "options": [
      "生物学",
      "地学",
      "文学",
      "歴史学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0108",
    "unit": "予想問題（教科書未載）",
    "field": "数学",
    "difficulty": "★★★★",
    "question": "100万件のデータを高速に検索するアルゴリズムを考える際、最も関係が深い学問はどれか。",
    "options": [
      "数学",
      "美術",
      "政治学",
      "音楽"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0109",
    "unit": "予想問題（教科書未載）",
    "field": "物理学",
    "difficulty": "★★★★★",
    "question": "量子コンピュータが従来のコンピュータと異なる計算原理を用いる背景にある学問はどれか。",
    "options": [
      "社会学",
      "心理学",
      "量子力学",
      "経営学"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0110",
    "unit": "予想問題（教科書未載）",
    "field": "防災学",
    "difficulty": "★★★★",
    "question": "豪雨災害時にスマートフォンの位置情報や河川データを分析して避難指示を出すシステムに最も関係する学問はどれか。",
    "options": [
      "防災学",
      "文学",
      "考古学",
      "言語学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0111",
    "unit": "予想問題（教科書未載）",
    "field": "政治学",
    "difficulty": "★★★★★",
    "question": "SNS上の情報拡散が選挙結果に影響を与える現象を分析する際、特に関係が深い学問はどれか。",
    "options": [
      "天文学",
      "政治学",
      "化学",
      "材料工学"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0112",
    "unit": "予想問題（教科書未載）",
    "field": "医学",
    "difficulty": "★★★★",
    "question": "大量のMRI画像をAIに学習させて病気を発見する研究では、特にどの学問との連携が重要か。",
    "options": [
      "医学",
      "建築学",
      "地学",
      "哲学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0113",
    "unit": "予想問題（教科書未載）",
    "field": "スポーツ科学",
    "difficulty": "★★★★",
    "question": "選手の心拍数や移動距離を分析して練習内容を改善する取り組みと最も関係が深い学問はどれか。",
    "options": [
      "スポーツ科学",
      "文学",
      "音楽学",
      "歴史学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0114",
    "unit": "予想問題（教科書未載）",
    "field": "環境科学",
    "difficulty": "★★★★★",
    "question": "都市部の気温上昇を予測するシミュレーションを行う際、最も必要となる学問の組み合わせはどれか。",
    "options": [
      "環境科学と情報科学",
      "法学と文学",
      "歴史学と哲学",
      "音楽学と美術"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0115",
    "unit": "予想問題（教科書未載）",
    "field": "経営学",
    "difficulty": "★★★★",
    "question": "飲食店がAIを用いて仕入れ量を決定する際、利益だけでなく食品ロスも考慮する必要がある。このような問題と関係が深い学問はどれか。",
    "options": [
      "経営学",
      "天文学",
      "考古学",
      "言語学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0116",
    "unit": "予想問題（教科書未載）",
    "field": "教育学",
    "difficulty": "★★★★★",
    "question": "AIが学習計画を提案する学校で、生徒同士の議論の機会が減少した。この課題を検討する際に最も関係が深い学問はどれか。",
    "options": [
      "教育学",
      "地質学",
      "材料工学",
      "薬学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0117",
    "unit": "予想問題（教科書未載）",
    "field": "倫理学",
    "difficulty": "★★★★★",
    "question": "自動運転車が事故を避けられない状況で進路を選択するアルゴリズムを設計する際、特に必要となる学問はどれか。",
    "options": [
      "倫理学",
      "天文学",
      "化学",
      "農学"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0118",
    "unit": "予想問題（教科書未載）",
    "field": "AI×法律×倫理",
    "difficulty": "★★★★★",
    "question": "2035年、生成AIが作成した小説が文学賞を受賞した。しかし、そのAIは大量の既存作品を学習していたことが分かった。この問題を考える上で最も重要な視点はどれか。",
    "options": [
      "通信速度の向上",
      "著作権と創作の定義",
      "記憶装置の容量",
      "画面の解像度"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0119",
    "unit": "予想問題（教科書未載）",
    "field": "心理×デザイン",
    "difficulty": "★★★★",
    "question": "高齢者向けの避難アプリを開発している。開発チームは文字サイズを大きくしたが、利用者から『緊急時には使いにくい』という意見が出た。改善策として最も適切なものはどれか。",
    "options": [
      "情報量を増やす",
      "操作手順を単純化する",
      "色数を増やす",
      "画面を暗くする"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0120",
    "unit": "予想問題（教科書未載）",
    "field": "数学×AI",
    "difficulty": "★★★★★",
    "question": "ある生成AIは、100万件のデータから最適な解を探すアルゴリズムAとBを提案した。Aは計算回数が少ないが大量のメモリを消費し、Bは計算回数が多いが省メモリである。最も適切な考え方はどれか。",
    "options": [
      "常にAを採用する",
      "常にBを採用する",
      "利用環境や制約条件を考慮して選択する",
      "どちらも使用しない"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0121",
    "unit": "予想問題（教科書未載）",
    "field": "地理×防災",
    "difficulty": "★★★★",
    "question": "大規模地震の発生後、一部地域では携帯電話がつながりにくくなった。避難情報を確実に届けるための対策として最も適切なものはどれか。",
    "options": [
      "動画配信サービスを停止する",
      "複数の通信手段を組み合わせる",
      "基地局の名前を変更する",
      "画質を下げる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0122",
    "unit": "予想問題（教科書未載）",
    "field": "医療×統計",
    "difficulty": "★★★★★",
    "question": "新薬Aと新薬Bを比較したところ、全体の治癒率はAの方が高かった。しかし、年代別に分析すると、すべての年代でBの方が高い治癒率を示した。この状況で考えられるものとして最も適切なのはどれか。",
    "options": [
      "測定ミス",
      "集団構成の違いによる見かけ上の逆転",
      "データの重複",
      "通信障害"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0123",
    "unit": "予想問題（教科書未載）",
    "field": "経済×環境",
    "difficulty": "★★★★★",
    "question": "ある都市では、渋滞緩和のため中心部への自家用車の乗り入れに課金する制度を導入しようとしている。制度設計において最も重要な視点はどれか。",
    "options": [
      "交通量だけを最小化する",
      "経済活動や住民生活への影響も考慮する",
      "課金額をできるだけ高くする",
      "AIに全て決定させる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0124",
    "unit": "予想問題（教科書未載）",
    "field": "教育×AI",
    "difficulty": "★★★★",
    "question": "AIが個別に学習内容を提案する学校では、テストの平均点は向上したが、生徒同士の議論が減少した。この結果から最も適切に言えることはどれか。",
    "options": [
      "平均点だけで教育効果を判断できる",
      "教育は複数の観点から評価する必要がある",
      "AI学習は中止すべきである",
      "議論は不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0125",
    "unit": "予想問題（教科書未載）",
    "field": "政治×情報",
    "difficulty": "★★★★★",
    "question": "SNS上で拡散した偽情報が選挙結果に影響を与えた疑いがある。この問題への対策として最も適切なものはどれか。",
    "options": [
      "SNSの利用を全面禁止する",
      "利用者の情報リテラシー向上と情報源の検証を進める",
      "インターネットを停止する",
      "通信速度を制限する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0126",
    "unit": "予想問題（教科書未載）",
    "field": "生物×情報",
    "difficulty": "★★★★",
    "question": "感染症の拡大予測モデルを改良するため、人の移動データを追加した。この変更の目的として最も適切なものはどれか。",
    "options": [
      "データ量を減らすため",
      "現実の状況をより正確にモデル化するため",
      "計算回数を増やすため",
      "通信量を減らすため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0127",
    "unit": "予想問題（教科書未載）",
    "field": "スポーツ×情報",
    "difficulty": "★★★★",
    "question": "あるチームは、選手の走行距離を重視して試合メンバーを決定していた。しかし、勝率は向上しなかった。このことから分かることとして最も適切なものはどれか。",
    "options": [
      "データ分析は意味がない",
      "単一の指標だけでは適切な判断ができない場合がある",
      "走行距離は測定できない",
      "データ量が不足している"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0128",
    "unit": "予想問題（教科書未載）",
    "field": "AI×教育×心理",
    "difficulty": "★★★★",
    "question": "ある高校では、AIが生徒一人ひとりの学習履歴を分析し、最適な教材を推薦している。しかし、成績上位者ほど難しい課題ばかりが提示され、一部の生徒が学習意欲を失ってしまった。学校が最初に検討すべきこととして最も適切なものはどれか。",
    "options": [
      "AIの利用を全面的に禁止する",
      "学習効果だけでなく心理的影響も評価する",
      "教材数を増やす",
      "端末を高性能なものに交換する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0129",
    "unit": "予想問題（教科書未載）",
    "field": "AI×法律×労働",
    "difficulty": "★★★★★",
    "question": "企業が採用試験の一次選考をAIに任せたところ、特定の地域の応募者が不利になる傾向が見つかった。企業が優先して確認すべき事項として最も適切なものはどれか。",
    "options": [
      "サーバの性能",
      "学習データや評価基準に偏りがないか",
      "面接会場の広さ",
      "応募者数の推移"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0130",
    "unit": "予想問題（教科書未載）",
    "field": "メディア×経済×情報",
    "difficulty": "★★★★",
    "question": "動画配信サービスでは、利用者が長時間視聴するほど広告収入が増える。この仕組みが社会にもたらす問題として最も適切なものはどれか。",
    "options": [
      "通信速度が低下する",
      "刺激の強い情報が優先的に表示される可能性がある",
      "記憶装置が不足する",
      "端末価格が上昇する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0131",
    "unit": "予想問題（教科書未載）",
    "field": "防災×地理×デザイン",
    "difficulty": "★★★★",
    "question": "津波発生時の避難アプリを開発している。観光客や外国人も利用することを考えると、地図上の避難経路表示として最も適切なものはどれか。",
    "options": [
      "文章のみで説明する",
      "色だけで危険度を示す",
      "ピクトグラムや多言語表示を組み合わせる",
      "地図を簡略化して文字をなくす"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0132",
    "unit": "予想問題（教科書未載）",
    "field": "医療×認知科学×デザイン",
    "difficulty": "★★★★★",
    "question": "病院で高齢者向けの受付システムを導入したところ、画面の文字は読めるものの、操作手順が複雑で利用しにくいという意見が多く寄せられた。改善策として最も適切なものはどれか。",
    "options": [
      "ボタンの色を増やす",
      "処理速度を上げる",
      "操作の流れを単純化する",
      "画面を大型化する"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0133",
    "unit": "予想問題（教科書未載）",
    "field": "言語×AI×コミュニケーション",
    "difficulty": "★★★★",
    "question": "翻訳AIを利用した国際会議で、発言内容は正しく翻訳されていたが、参加者同士に誤解が生じた。この原因として最も考えられるものはどれか。",
    "options": [
      "通信速度が不足していた",
      "文化や文脈の違いが反映されていなかった",
      "マイクの性能が低かった",
      "画面の解像度が不足していた"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0134",
    "unit": "予想問題（教科書未載）",
    "field": "数学×物流×アルゴリズム",
    "difficulty": "★★★★★",
    "question": "宅配会社が配送ルートをAIで最適化したところ、配送時間は短縮されたが、一部のドライバーの負担が増加した。この結果から分かることとして最も適切なものはどれか。",
    "options": [
      "計算結果は必ず公平である",
      "最適化する指標によって結果が変化する",
      "AIは誤った計算をした",
      "配送データが不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0135",
    "unit": "予想問題（教科書未載）",
    "field": "生物×シミュレーション",
    "difficulty": "★★★★",
    "question": "感染症の拡大予測モデルに『人の移動量』という要素を追加した。この変更の目的として最も適切なものはどれか。",
    "options": [
      "計算量を増やすため",
      "現実の状況をより正確に表現するため",
      "プログラムを短くするため",
      "通信量を削減するため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0136",
    "unit": "予想問題（教科書未載）",
    "field": "経済×プログラミング",
    "difficulty": "★★★★★",
    "question": "株式売買を自動で行うAIプログラムが普及した社会で、同じアルゴリズムを多くの企業が利用した場合に起こりうる問題として最も適切なものはどれか。",
    "options": [
      "通信量の不足",
      "市場の値動きが急激になる可能性がある",
      "画面表示が遅くなる",
      "保存容量が不足する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0137",
    "unit": "予想問題（教科書未載）",
    "field": "防災×社会基盤",
    "difficulty": "★★★★",
    "question": "大規模災害によって携帯電話網の一部が利用できなくなった。避難情報を確実に届けるための方法として最も適切なものはどれか。",
    "options": [
      "一つの通信会社に統一する",
      "複数の通信手段を併用する",
      "動画のみで配信する",
      "高画質化する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0138",
    "unit": "予想問題（教科書未載）",
    "field": "環境×IoT×都市計画",
    "difficulty": "★★★★★",
    "question": "都市全体の電力消費を抑えるため、各家庭の電力使用量をリアルタイムで収集するシステムを導入した。このシステムの課題として最も適切なものはどれか。",
    "options": [
      "文字コードの違い",
      "プライバシー保護との両立",
      "ディスプレイの性能",
      "キーボード配列"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0139",
    "unit": "予想問題（教科書未載）",
    "field": "政治×情報",
    "difficulty": "★★★★★",
    "question": "ある国では、SNS上の偽情報対策として投稿をAIが自動削除する仕組みを導入した。この制度で特に慎重な検討が必要な事項はどれか。",
    "options": [
      "通信速度の向上",
      "表現の自由とのバランス",
      "画面サイズの統一",
      "端末価格の低下"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0140",
    "unit": "予想問題（教科書未載）",
    "field": "医学×統計",
    "difficulty": "★★★★★",
    "question": "ある病院がAI診断システムを導入したところ、全体の診断精度は向上したが、特定の年齢層では誤診率が高いことが分かった。病院が最初に確認すべきことはどれか。",
    "options": [
      "サーバの容量",
      "学習データの偏りや不足",
      "診察室の数",
      "診療時間"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0141",
    "unit": "予想問題（教科書未載）",
    "field": "スポーツ×統計",
    "difficulty": "★★★★",
    "question": "サッカーチームが選手の走行距離だけを分析して戦術を決定したが、成績は向上しなかった。このことから言えることとして最も適切なものはどれか。",
    "options": [
      "データ分析は不要である",
      "単一の指標だけでは十分な判断ができない場合がある",
      "走行距離は意味がない",
      "データ量を減らすべきである"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0142",
    "unit": "予想問題（教科書未載）",
    "field": "気候×シミュレーション",
    "difficulty": "★★★★★",
    "question": "都市の気温上昇を予測するシミュレーションで、樹木の本数や建物の高さなどの条件を変更した。この操作の目的として最も適切なものはどれか。",
    "options": [
      "通信量を増やすため",
      "条件の変化が結果に与える影響を調べるため",
      "データ量を減らすため",
      "計算速度を下げるため"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0143",
    "unit": "予想問題（教科書未載）",
    "field": "教育×経営×情報",
    "difficulty": "★★★★",
    "question": "学校が『授業満足度』『学力』『教員の負担』を同時に改善する計画を立てている。この問題の特徴として最も適切なものはどれか。",
    "options": [
      "一つの指標だけで評価できる",
      "複数の目標の間で調整が必要である",
      "データ分析は不要である",
      "最適解は必ず一つに決まる"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0144",
    "unit": "予想問題（教科書未載）",
    "field": "環境×経済×都市計画",
    "difficulty": "★★★★★",
    "question": "自治体が中心市街地への自動車乗り入れ制限を検討している。環境負荷は減少するが、商店街への来客数が減る可能性もある。この問題を考える上で最も重要な視点はどれか。",
    "options": [
      "環境だけを優先する",
      "複数の利害関係者への影響を比較する",
      "AIに全て任せる",
      "来客数だけを分析する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0145",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙開発×情報",
    "difficulty": "★★★★★",
    "question": "火星基地の建設計画では、『建設コスト』『安全性』『資源消費』『住みやすさ』を同時に考慮する必要がある。このような問題の性質として最も適切なものはどれか。",
    "options": [
      "単純な計算問題である",
      "複数の評価基準をもつ問題である",
      "答えは常に一つである",
      "データは不要である"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0146",
    "unit": "予想問題（教科書未載）",
    "field": "AIと教育",
    "difficulty": "★",
    "question": "AIが学習履歴を分析して生徒ごとに教材を提示するシステムを評価する際、最も重要な観点はどれか。",
    "options": [
      "通信速度",
      "教材の色",
      "学習効果の向上",
      "端末の価格"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0147",
    "unit": "予想問題（教科書未載）",
    "field": "スマートシティ",
    "difficulty": "★",
    "question": "都市全体の信号機をAIが制御するシステムで、混雑緩和の効果を確かめるために比較すべきものはどれか。",
    "options": [
      "導入前後の交通データ",
      "信号機のメーカー",
      "道路標識の数",
      "監視カメラの台数"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0148",
    "unit": "予想問題（教科書未載）",
    "field": "エネルギー",
    "difficulty": "★",
    "question": "家庭の太陽光発電と蓄電池をネットワークで共有する仕組みの目的として最も適切なものはどれか。",
    "options": [
      "発電設備を減らす",
      "電力を安定供給する",
      "電気料金を全国で統一する",
      "停電を完全になくす"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0149",
    "unit": "予想問題（教科書未載）",
    "field": "仮想空間",
    "difficulty": "★",
    "question": "仮想空間上で授業を行う際、学習効果を分析するために最も必要なデータはどれか。",
    "options": [
      "教室の広さ",
      "端末の重さ",
      "背景画像の種類",
      "学習履歴や参加状況"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0150",
    "unit": "予想問題（教科書未載）",
    "field": "生成AI",
    "difficulty": "★★",
    "question": "AIが作成したレポートを生徒が提出することが一般化した社会で、学校が重視すべき能力として最も適切なものはどれか。",
    "options": [
      "AIの出力を評価・改善する能力",
      "タイピング速度",
      "暗記量",
      "手書きの速さ"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0151",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙開発",
    "difficulty": "★★",
    "question": "月面基地の限られた資源を管理するAIに必要な機能として最も重要なものはどれか。",
    "options": [
      "映像編集",
      "資源消費の予測",
      "音声認識",
      "翻訳機能"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0152",
    "unit": "予想問題（教科書未載）",
    "field": "生体情報",
    "difficulty": "★★",
    "question": "健康管理のために常時取得される心拍数や睡眠時間などの情報を扱う際、特に注意すべきことはどれか。",
    "options": [
      "通信量",
      "データの機密性",
      "保存形式",
      "端末の色"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0153",
    "unit": "予想問題（教科書未載）",
    "field": "物流",
    "difficulty": "★★",
    "question": "配送ドローンが普及した社会で、配送ルートを最適化する目的として最も適切なものはどれか。",
    "options": [
      "飛行音を大きくする",
      "機体を大型化する",
      "配送効率を高める",
      "操縦者を増やす"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0154",
    "unit": "予想問題（教科書未載）",
    "field": "AI行政",
    "difficulty": "★★★",
    "question": "自治体の相談窓口をAIが担当するようになった社会で、一部の住民が利用しない理由を調べる方法として最も適切なものはどれか。",
    "options": [
      "広告を増やす",
      "利用者と非利用者の双方を調査する",
      "窓口数を減らす",
      "応答速度だけを測定する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0155",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル民主主義",
    "difficulty": "★★★",
    "question": "オンライン投票の導入後、若年層と高齢層で投票率に差が生じた。この問題を分析する際に必要なものはどれか。",
    "options": [
      "年齢別の利用状況データ",
      "投票所の数",
      "政党数",
      "人口密度"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0156",
    "unit": "予想問題（教科書未載）",
    "field": "AIと芸術",
    "difficulty": "★★★",
    "question": "AIが生成した音楽作品の著作権制度を設計する際、重要な観点はどれか。",
    "options": [
      "再生回数",
      "端末性能",
      "制作過程の記録",
      "楽曲の長さ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0157",
    "unit": "予想問題（教科書未載）",
    "field": "防災",
    "difficulty": "★★★",
    "question": "都市全体のセンサー情報を用いた災害予測システムで、予測精度を高めるために必要なことはどれか。",
    "options": [
      "センサーの色を統一する",
      "職員数を増やす",
      "通信速度だけを上げる",
      "多様なデータを組み合わせる"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0158",
    "unit": "予想問題（教科書未載）",
    "field": "量子技術",
    "difficulty": "★★★★",
    "question": "量子コンピュータが実用化された社会で、現在の暗号技術の見直しが必要になる理由として最も適切なものはどれか。",
    "options": [
      "計算能力が飛躍的に向上するため",
      "画面表示が高速になるため",
      "消費電力が減るため",
      "記憶容量が増えるため"
    ],
    "answer": 1,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0159",
    "unit": "予想問題（教科書未載）",
    "field": "環境問題",
    "difficulty": "★★★★",
    "question": "AIが都市の電力を自動制御している社会で、特定地域だけ停電が多発した。最初に行うべきことはどれか。",
    "options": [
      "発電所を増設する",
      "地域データと制御アルゴリズムを検証する",
      "住民数を減らす",
      "電気料金を変更する"
    ],
    "answer": 2,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0160",
    "unit": "予想問題（教科書未載）",
    "field": "脳科学",
    "difficulty": "★★★★",
    "question": "脳波を利用して機器を操作する技術が普及した社会で、新たに生じる課題として最も考えられるものはどれか。",
    "options": [
      "ディスプレイの大型化",
      "入力速度の低下",
      "脳情報のプライバシー保護",
      "電池交換の頻度"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0161",
    "unit": "予想問題（教科書未載）",
    "field": "未来社会",
    "difficulty": "★★★★",
    "question": "複数都市が医療・交通・教育データを共有する社会において、予想外の問題が発生した。問題解決の出発点として最も適切なものはどれか。",
    "options": [
      "共有を停止する",
      "データ量を減らす",
      "都市数を制限する",
      "関係者ごとに課題を整理する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0162",
    "unit": "予想問題（教科書未載）",
    "field": "AIと心理学",
    "difficulty": "★★",
    "question": "ある高校では、AIが生徒の学習履歴や表情の変化から学習意欲を推定し、学習計画を提案している。しかし、一部の生徒は『自分は勉強が苦手だと決めつけられている』と感じていた。この問題を分析する際、最も重要な視点はどれか。",
    "options": [
      "AIの処理速度",
      "学習端末の性能",
      "AIの判断基準や説明可能性",
      "教室の座席配置"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0163",
    "unit": "予想問題（教科書未載）",
    "field": "情報×法学",
    "difficulty": "★★",
    "question": "将来、AIエージェントが利用者に代わって商品の売買契約を行うようになった。誤った契約が成立した場合、最初に検討すべき事項はどれか。",
    "options": [
      "通信速度",
      "AIの開発費",
      "責任の所在と契約の仕組み",
      "商品の価格"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0164",
    "unit": "予想問題（教科書未載）",
    "field": "情報×医学",
    "difficulty": "★★",
    "question": "AIが患者の遺伝情報を分析し、病気の発症確率を予測する社会では、特に注意すべき課題はどれか。",
    "options": [
      "計算機の消費電力",
      "診察室の広さ",
      "病院の混雑",
      "遺伝情報の管理とプライバシー保護"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0165",
    "unit": "予想問題（教科書未載）",
    "field": "情報×教育学",
    "difficulty": "★★",
    "question": "生徒一人ひとりに最適化されたAI教材が普及した結果、全国共通の試験制度を維持することが難しくなった。制度設計で重要になる観点はどれか。",
    "options": [
      "学校数の調整",
      "教科書のページ数",
      "授業時間の統一",
      "学習機会の公平性"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0166",
    "unit": "予想問題（教科書未載）",
    "field": "情報×経済学",
    "difficulty": "★★★",
    "question": "個人が自分の購買履歴や位置情報を企業に販売できる社会が実現した。この仕組みの問題点として最も重要なものはどれか。",
    "options": [
      "データ容量の増加",
      "通信回線の不足",
      "情報格差の拡大",
      "個人情報の価値の評価基準"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0167",
    "unit": "予想問題（教科書未載）",
    "field": "情報×政治学",
    "difficulty": "★★★",
    "question": "AIが有権者ごとに最適化した政治広告を自動生成するようになった。この技術について議論する際、重要な論点はどれか。",
    "options": [
      "広告制作費",
      "端末の性能",
      "民主的な意思決定への影響",
      "投票所の数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0168",
    "unit": "予想問題（教科書未載）",
    "field": "情報×都市工学",
    "difficulty": "★★★",
    "question": "自動運転車の普及により、都市の道路設計そのものが変化した。新たな道路計画を立案する際に最も必要なものはどれか。",
    "options": [
      "車の色の統一",
      "道路標識の削減",
      "過去の設計図",
      "交通データの継続的な分析"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0169",
    "unit": "予想問題（教科書未載）",
    "field": "情報×スポーツ科学",
    "difficulty": "★★★",
    "question": "AIが選手の動作や体調を分析し、練習内容を決定する部活動が一般化した。この仕組みの課題として考えられるものはどれか。",
    "options": [
      "練習時間の短縮",
      "競技人口の減少",
      "データに基づく判断への過度な依存",
      "用具の価格上昇"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0170",
    "unit": "予想問題（教科書未載）",
    "field": "情報×環境学",
    "difficulty": "★★★★",
    "question": "AIが各家庭の電力消費を予測して自動制御する都市で、一部地域だけ電力不足が続いた。原因究明のために最初に確認すべきものはどれか。",
    "options": [
      "発電所の建設年",
      "住宅の広さ",
      "電気料金",
      "予測モデルと地域特性の関係"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0171",
    "unit": "予想問題（教科書未載）",
    "field": "情報×脳科学",
    "difficulty": "★★★★",
    "question": "脳の活動を読み取るインターフェースが普及した社会で、学校教育に導入するかどうかが議論されている。検討すべき課題として最も適切なものはどれか。",
    "options": [
      "機器の重量",
      "充電時間",
      "学習内容の難易度",
      "思考データの保護と利用範囲"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0172",
    "unit": "予想問題（教科書未載）",
    "field": "情報×宇宙開発",
    "difficulty": "★★★★",
    "question": "月面都市では、水や酸素の消費をAIが予測して管理している。予測精度が低下した場合、最初に見直すべきものはどれか。",
    "options": [
      "居住区の広さ",
      "通信衛星の数",
      "収集するデータとモデルの前提条件",
      "宇宙服の性能"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0173",
    "unit": "予想問題（教科書未載）",
    "field": "情報×哲学",
    "difficulty": "★★★★",
    "question": "高度な対話AIが『自分には意識がある』と主張するようになった。この主張を社会制度に反映させるか議論する際、最も重要な観点はどれか。",
    "options": [
      "AIの外見",
      "計算速度",
      "利用料金",
      "意識や人格をどのように定義するか"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0174",
    "unit": "予想問題（教科書未載）",
    "field": "情報×歴史学",
    "difficulty": "★★★★",
    "question": "AIが過去の文献を大量に分析し、新しい歴史解釈を提示する時代になった。研究者に求められる能力として最も重要なものはどれか。",
    "options": [
      "AIの操作速度を高める能力",
      "古い資料を処分する能力",
      "AIの分析結果を批判的に検討する能力",
      "プログラムを暗記する能力"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0175",
    "unit": "予想問題（教科書未載）",
    "field": "情報×社会学",
    "difficulty": "★★★★",
    "question": "AIによる個別最適化サービスが進んだ結果、人々が自分と似た価値観の情報だけを受け取る傾向が強まった。この問題への対応として重視されるべきものはどれか。",
    "options": [
      "通信量の制限",
      "端末価格の引き下げ",
      "検索速度の向上",
      "多様な情報に触れる機会の確保"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0176",
    "unit": "予想問題（教科書未載）",
    "field": "情報×生物学",
    "difficulty": "★★★★",
    "question": "絶滅危惧種の保護のため、世界中の観測データをAIが分析している。しかし、地域によって観測精度に差があった。まず検討すべきことはどれか。",
    "options": [
      "AIの計算回数",
      "観測機器の色",
      "データ収集方法の偏り",
      "保護区の名称"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0177",
    "unit": "予想問題（教科書未載）",
    "field": "情報×国際関係",
    "difficulty": "★★★★",
    "question": "複数の国が災害データを共有してAIによる予測を行う仕組みを構築した。この仕組みを維持するために最も重要なものはどれか。",
    "options": [
      "高性能な端末の普及",
      "通信速度の向上",
      "衛星の増設",
      "国際的なルールや合意形成"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0178",
    "unit": "予想問題（教科書未載）",
    "field": "生成AIエージェント",
    "difficulty": "★★",
    "question": "複数のAIエージェントが自律的に役割分担を行い、旅行計画を立てるサービスが実用化された。利用者が最も注意すべき課題はどれか。",
    "options": [
      "通信速度の低下",
      "端末の充電時間",
      "AI同士の判断過程の不透明さ",
      "画面表示の遅延"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0179",
    "unit": "予想問題（教科書未載）",
    "field": "自動運転",
    "difficulty": "★★",
    "question": "完全自動運転車が一般化した社会で、事故原因を調査する際に最も重要となるものはどれか。",
    "options": [
      "車体の色",
      "乗客数",
      "道路標識の数",
      "走行データと判断記録"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0180",
    "unit": "予想問題（教科書未載）",
    "field": "脳–コンピュータ接続",
    "difficulty": "★★",
    "question": "脳波によって機器を操作する技術が普及した場合、新たに生じる問題として最も考えられるものはどれか。",
    "options": [
      "機器の重量増加",
      "充電回数の増加",
      "脳活動データの漏えい",
      "通信料金の上昇"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0181",
    "unit": "予想問題（教科書未載）",
    "field": "量子コンピュータ",
    "difficulty": "★★",
    "question": "量子コンピュータの発展に伴い、現在利用されている暗号技術の一部が危険視されている。その理由として最も適切なものはどれか。",
    "options": [
      "消費電力が大きいため",
      "機器が高価なため",
      "通信量が増えるため",
      "従来より高速な計算が可能になるため"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0182",
    "unit": "予想問題（教科書未載）",
    "field": "デジタルツイン",
    "difficulty": "★★★",
    "question": "都市全体を仮想空間上に再現する『デジタルツイン』を用いて災害対策を検討している。シミュレーションの精度を高めるために重要なものはどれか。",
    "options": [
      "建物のデザイン",
      "仮想空間の色彩",
      "現実世界の詳細なデータ",
      "利用者数の増加"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0183",
    "unit": "予想問題（教科書未載）",
    "field": "AI創薬",
    "difficulty": "★★★",
    "question": "AIを用いた新薬開発では、膨大な候補物質を短時間で分析できるようになっている。しかし、最終的に必要となる工程はどれか。",
    "options": [
      "計算機の増設",
      "通信回線の高速化",
      "病院数の増加",
      "実験や臨床試験による検証"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0184",
    "unit": "予想問題（教科書未載）",
    "field": "スマートグラス",
    "difficulty": "★★★",
    "question": "AIを搭載したスマートグラスが普及し、会話相手の情報をリアルタイムで表示できるようになった。この技術について最も懸念されることはどれか。",
    "options": [
      "バッテリー容量",
      "端末価格",
      "プライバシー侵害",
      "画面の明るさ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0185",
    "unit": "予想問題（教科書未載）",
    "field": "配送ドローン",
    "difficulty": "★★★",
    "question": "配送ドローンが都市部で普及した場合、飛行経路を決定するシステムに求められる機能として最も重要なものはどれか。",
    "options": [
      "機体の軽量化",
      "騒音の低減",
      "デザインの統一",
      "周囲の状況に応じた経路最適化"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0186",
    "unit": "予想問題（教科書未載）",
    "field": "核融合発電",
    "difficulty": "★★★★",
    "question": "核融合発電所の運転にAIが利用されるようになった。AIの判断を人間が継続的に監視する理由として最も適切なものはどれか。",
    "options": [
      "設備の老朽化を防ぐため",
      "計算速度を上げるため",
      "予測不能な異常に対応するため",
      "発電量を一定にするため"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0187",
    "unit": "予想問題（教科書未載）",
    "field": "ゲノム編集",
    "difficulty": "★★★★",
    "question": "個人の遺伝情報を基に最適な治療法をAIが提案する医療が普及した。この社会で最も重要になる制度はどれか。",
    "options": [
      "医療機器の規格統一",
      "病院数の増加",
      "通信網の整備",
      "遺伝情報の管理ルール"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0188",
    "unit": "予想問題（教科書未載）",
    "field": "ロボティクス",
    "difficulty": "★★★★",
    "question": "介護ロボットが高齢者施設で広く利用されるようになった。導入効果を評価する際、最も重要な指標はどれか。",
    "options": [
      "ロボットの台数",
      "稼働時間",
      "利用者の生活の質の変化",
      "製造コスト"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0189",
    "unit": "予想問題（教科書未載）",
    "field": "衛星通信",
    "difficulty": "★★★★",
    "question": "低軌道衛星による通信網が世界中に整備された社会で、新たな国際的課題として考えられるものはどれか。",
    "options": [
      "アンテナの小型化",
      "通信速度の向上",
      "衛星の製造費",
      "宇宙空間の利用ルール"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0190",
    "unit": "予想問題（教科書未載）",
    "field": "ヒューマノイドAI",
    "difficulty": "★★★★",
    "question": "人間型ロボットが接客や教育の現場に導入された。ロボットの判断に問題が生じた場合、まず検討すべき事項はどれか。",
    "options": [
      "ロボットの身長",
      "利用料金",
      "責任の所在と意思決定の過程",
      "製造工場の場所"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0191",
    "unit": "予想問題（教科書未載）",
    "field": "XR技術",
    "difficulty": "★★★★",
    "question": "現実空間と仮想空間を融合するXR技術が授業で普及した。この技術の教育効果を検証する際に必要なものはどれか。",
    "options": [
      "教室の広さ",
      "端末の重さ",
      "映像の解像度",
      "学習成果の比較データ"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0192",
    "unit": "予想問題（教科書未載）",
    "field": "汎用人工知能",
    "difficulty": "★★★★",
    "question": "人間に近い汎用人工知能（AGI）の実現が視野に入った社会で、研究開発と並行して必要になるものはどれか。",
    "options": [
      "計算機の小型化",
      "電力供給の増強",
      "安全性や利用範囲に関する議論",
      "ネットワーク速度の向上"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0193",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙インフラ",
    "difficulty": "★★★★",
    "question": "月面基地や宇宙ステーションがネットワークで結ばれた社会で、通信障害が発生した。最優先で確認すべきものはどれか。",
    "options": [
      "基地の人口",
      "居住区の面積",
      "食料備蓄量",
      "通信経路と障害箇所"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0194",
    "unit": "予想問題（教科書未載）",
    "field": "パーソナルAI",
    "difficulty": "★★",
    "question": "将来、個人ごとに専属のAIが、学習履歴、健康状態、購買履歴などを長期間学習し、進学や就職の助言を行うようになった。このような社会で最も重要となる課題はどれか。",
    "options": [
      "AIの音声の自然さ",
      "端末の価格",
      "AIによる判断の偏りや透明性",
      "画面の大きさ"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0195",
    "unit": "予想問題（教科書未載）",
    "field": "パーソナルAI",
    "difficulty": "★★",
    "question": "専属AIが本人に代わって商品の予約や契約を行う社会では、トラブル発生時に最初に確認すべき事項はどれか。",
    "options": [
      "通信量",
      "AIの名称",
      "端末の性能",
      "AIの行動権限の範囲"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0196",
    "unit": "予想問題（教科書未載）",
    "field": "知識管理",
    "difficulty": "★★",
    "question": "人間が一生の経験や学習記録を保存し、AIが必要に応じて整理・要約する技術が普及した。この技術の課題として最も適切なものはどれか。",
    "options": [
      "記憶容量の不足",
      "検索速度の低下",
      "個人の記録の管理方法",
      "端末の重量"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0197",
    "unit": "予想問題（教科書未載）",
    "field": "AIエージェント",
    "difficulty": "★★",
    "question": "複数のAIが自律的に交渉して旅行計画を立てる社会では、利用者が確認すべき点として最も重要なものはどれか。",
    "options": [
      "AIの開発会社",
      "通信速度",
      "利用料金",
      "どのような基準で意思決定したか"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0198",
    "unit": "予想問題（教科書未載）",
    "field": "ロボット社会",
    "difficulty": "★★★",
    "question": "家庭用ロボットが家事や育児を担うようになった社会で、ロボット同士が家庭内の情報を共有していた。新たに生じる問題として最も考えられるものはどれか。",
    "options": [
      "電力消費の増加",
      "部品価格の上昇",
      "家庭内データの漏えいリスク",
      "ロボットの重量増加"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0199",
    "unit": "予想問題（教科書未載）",
    "field": "都市インフラ",
    "difficulty": "★★★",
    "question": "将来の都市では、道路、電力、水道がAIによって統合管理されている。このシステムの障害による影響を小さくするために重要なものはどれか。",
    "options": [
      "道路幅の拡張",
      "職員数の増加",
      "利用料金の変更",
      "複数の代替手段の確保"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0200",
    "unit": "予想問題（教科書未載）",
    "field": "自動研究",
    "difficulty": "★★★",
    "question": "AIが仮説の立案から実験計画の作成まで支援する研究所が登場した。このとき研究者に求められる能力として最も重要なものはどれか。",
    "options": [
      "プログラムを暗記する力",
      "計算速度を高める力",
      "AIの提案を検証する力",
      "機器を操作する力"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0201",
    "unit": "予想問題（教科書未載）",
    "field": "教育技術",
    "difficulty": "★★★",
    "question": "AIが生徒ごとに授業内容や問題の難易度を自動調整する学校では、学校全体として確認すべき事項はどれか。",
    "options": [
      "教科書のページ数",
      "授業時間の長さ",
      "端末の更新時期",
      "学習機会の公平性"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0202",
    "unit": "予想問題（教科書未載）",
    "field": "脳科学",
    "difficulty": "★★★★",
    "question": "脳活動の一部を記録・保存し、後から振り返る技術が実用化された。この技術の利用について議論する際、最も重要な論点はどれか。",
    "options": [
      "機器の大きさ",
      "記録時間",
      "思考や記憶のプライバシー",
      "充電速度"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0203",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙社会",
    "difficulty": "★★★★",
    "question": "地球と月の間で日常的に物流が行われるようになった社会で、AIが輸送計画を立てている。輸送の遅延が頻発した場合、最初に確認すべきものはどれか。",
    "options": [
      "宇宙船の塗装",
      "基地の人口",
      "観光客数",
      "需要予測モデルの妥当性"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0204",
    "unit": "予想問題（教科書未載）",
    "field": "気候技術",
    "difficulty": "★★★★",
    "question": "気候変動対策として、AIが都市ごとにエネルギー消費を制御している。しかし、一部地域で不利益が生じていることが判明した。原因究明のために必要なことはどれか。",
    "options": [
      "発電量の増加",
      "電線の交換",
      "アルゴリズムの公平性の検証",
      "建物の高さの統一"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0205",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル社会",
    "difficulty": "★★★★",
    "question": "個人が『デジタル上の自分』をAIとして残し、家族が会話できるサービスが普及した。このサービスに関する制度設計で最も重要なものはどれか。",
    "options": [
      "通信速度の向上",
      "端末価格の低下",
      "記憶容量の拡張",
      "本人データの利用範囲の明確化"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0206",
    "unit": "予想問題（教科書未載）",
    "field": "生命科学",
    "difficulty": "★★★★",
    "question": "AIとバイオ技術によって、一人ひとりに最適化された食品が自動的に提案される社会になった。この仕組みの課題として最も適切なものはどれか。",
    "options": [
      "流通コスト",
      "店舗数",
      "健康データの管理",
      "商品の種類"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0207",
    "unit": "予想問題（教科書未載）",
    "field": "社会制度",
    "difficulty": "★★★★",
    "question": "AIが多くの行政手続きを代行するようになった社会では、システム障害時に備えて何を準備しておくことが最も重要か。",
    "options": [
      "職員の増員",
      "サーバの大型化",
      "利用時間の制限",
      "人間による代替手段"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0208",
    "unit": "予想問題（教科書未載）",
    "field": "人間拡張",
    "difficulty": "★★★★",
    "question": "身体能力を補助する装置が一般化し、装着者と非装着者の間で能力差が生じるようになった。この社会で議論される課題として最も適切なものはどれか。",
    "options": [
      "装置の重量",
      "電力消費量",
      "利用の公平性",
      "生産台数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0209",
    "unit": "予想問題（教科書未載）",
    "field": "未来社会",
    "difficulty": "★★★★",
    "question": "複数のAIが経済、医療、教育を同時に管理する社会で、予想外の問題が発生した。問題解決の出発点として最も適切なものはどれか。",
    "options": [
      "AIの数を減らす",
      "ネットワークを停止する",
      "データ量を削減する",
      "関係するシステム間の影響を整理する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0210",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル人格",
    "difficulty": "★★★",
    "question": "2055年、亡くなった人の記録や会話履歴を学習した『デジタル人格』が一般家庭で利用されている。ある家庭では、祖父のデジタル人格が孫の進路相談に乗っていた。このサービスについて社会制度として最も重要になるものはどれか。",
    "options": [
      "処理速度の向上",
      "記憶容量の拡張",
      "AIの音声品質の向上",
      "本人の意思や権利の扱いを定める仕組み"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0211",
    "unit": "予想問題（教科書未載）",
    "field": "AI科学者",
    "difficulty": "★★★★",
    "question": "AIが自ら仮説を立て、実験計画を作成し、新しい法則を発見する研究所が登場した。人間の研究者に今後求められる役割として最も適切なものはどれか。",
    "options": [
      "AIより高速に計算すること",
      "実験装置の操作だけを担当すること",
      "AIの発見を検証し社会的影響を評価すること",
      "全ての研究をAIに任せること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0212",
    "unit": "予想問題（教科書未載）",
    "field": "記憶共有社会",
    "difficulty": "★★★★",
    "question": "脳とコンピュータを接続する技術が進歩し、自分の体験の一部を他者と共有できるようになった。学校教育への導入を検討する際、最も重要な論点はどれか。",
    "options": [
      "記憶の転送速度",
      "機器の軽量化",
      "共有できる科目数",
      "個人の経験や感情の保護"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0213",
    "unit": "予想問題（教科書未載）",
    "field": "感情解析",
    "difficulty": "★★★",
    "question": "ウェアラブル端末が心拍や表情を分析し、持ち主の感情を常時推定する社会になった。企業がこの情報を採用活動に利用する場合、最も懸念されることはどれか。",
    "options": [
      "通信量の増加",
      "電池寿命の低下",
      "感情データによる不当な評価",
      "端末価格の上昇"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0214",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙インフラ",
    "difficulty": "★★★★",
    "question": "月や火星への移住が始まり、AIが地球と宇宙都市の物流を管理している。輸送計画の最適化に失敗した場合、最初に確認すべきものはどれか。",
    "options": [
      "宇宙船のデザイン",
      "居住区の人口密度",
      "食料生産設備の規模",
      "需要予測モデルと前提条件"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0215",
    "unit": "予想問題（教科書未載）",
    "field": "AI政治",
    "difficulty": "★★★★",
    "question": "将来、自治体が政策案を作成する際にAIが複数の案を提示するようになった。市民が最も確認すべきことはどれか。",
    "options": [
      "AIのメーカー",
      "AIの消費電力",
      "政策立案の根拠や使用データ",
      "行政職員の人数"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0216",
    "unit": "予想問題（教科書未載）",
    "field": "仮想経済",
    "difficulty": "★★★",
    "question": "仮想空間内での活動が現実の経済活動と同程度の価値を持つようになった。仮想空間で発生した詐欺を防ぐために重要なものはどれか。",
    "options": [
      "高速通信網",
      "高性能端末",
      "利用時間の制限",
      "本人確認と取引記録の仕組み"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0217",
    "unit": "予想問題（教科書未載）",
    "field": "身体拡張",
    "difficulty": "★★★★",
    "question": "視力や筋力を補助する装置が一般化し、装着者と非装着者の間で能力差が広がった。この社会で最も議論される可能性が高い問題はどれか。",
    "options": [
      "装置の重さ",
      "製造コスト",
      "能力拡張の公平性",
      "充電方式"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0218",
    "unit": "予想問題（教科書未載）",
    "field": "気候制御",
    "difficulty": "★★★★",
    "question": "大規模な気候制御システムによって、AIが降水量や気温を調整する技術が実現した。しかし、ある地域だけ予想外の被害が発生した。最初に検討すべき事項はどれか。",
    "options": [
      "発電量の増加",
      "気象観測所の数",
      "システムの稼働時間",
      "予測モデルと地域差の関係"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0219",
    "unit": "予想問題（教科書未載）",
    "field": "デジタルツイン",
    "difficulty": "★★★★",
    "question": "個人の健康状態を再現した『人体デジタルツイン』が普及し、病気の予測に利用されている。診断結果を利用する際に最も注意すべきことはどれか。",
    "options": [
      "処理速度",
      "画面解像度",
      "予測結果の不確実性",
      "保存容量"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0220",
    "unit": "予想問題（教科書未載）",
    "field": "AI教育",
    "difficulty": "★★★★",
    "question": "AI教師が全国の授業を担当するようになったが、地域によって学力差が拡大した。原因を調べるために必要なものはどれか。",
    "options": [
      "教室の面積",
      "教員数の推移",
      "通信速度の比較",
      "学習環境や利用状況の分析"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0221",
    "unit": "予想問題（教科書未載）",
    "field": "知識社会",
    "difficulty": "★★★★",
    "question": "人間が外部記憶装置に知識を保存し、必要なときだけ呼び出せる技術が普及した。この社会で学校教育に最も求められる能力はどれか。",
    "options": [
      "大量の知識を暗記する力",
      "高速入力の技術",
      "必要な情報を評価・活用する力",
      "長時間集中する力"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0222",
    "unit": "予想問題（教科書未載）",
    "field": "生命工学",
    "difficulty": "★★★★",
    "question": "AIによって一人ひとりに最適な遺伝子治療が提案される社会になった。この仕組みについて最も重要な課題はどれか。",
    "options": [
      "治療時間の短縮",
      "医療機器の小型化",
      "病院数の増加",
      "遺伝情報の利用範囲の管理"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0223",
    "unit": "予想問題（教科書未載）",
    "field": "AI司法",
    "difficulty": "★★★★",
    "question": "裁判の判例分析や量刑の予測をAIが補助するようになった。社会が確認すべき点として最も重要なものはどれか。",
    "options": [
      "AIの処理速度",
      "裁判所の数",
      "判断基準の透明性と公平性",
      "サーバの容量"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0224",
    "unit": "予想問題（教科書未載）",
    "field": "未来社会",
    "difficulty": "★★★★",
    "question": "世界中のAIが相互に接続され、エネルギー、物流、医療を同時に最適化する巨大なシステムが構築された。想定外の問題が発生した場合、最初に行うべきことはどれか。",
    "options": [
      "システム全体を停止する",
      "AIの台数を減らす",
      "データを削除する",
      "システム間の依存関係を整理する"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0225",
    "unit": "予想問題（教科書未載）",
    "field": "AIエージェント",
    "difficulty": "★★",
    "question": "2040年ごろ、多くの人が『パーソナルAI』を所有し、予定管理や買い物、情報収集を任せるようになった。利用者がパーソナルAIを安全に活用するために最も重要なことはどれか。",
    "options": [
      "AIの音声を好みに合わせること",
      "処理速度を向上させること",
      "AIの判断基準や権限を理解すること",
      "常に最新機種へ買い替えること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0226",
    "unit": "予想問題（教科書未載）",
    "field": "AIエージェント",
    "difficulty": "★★★",
    "question": "複数のAIエージェントが利用者に代わって旅行計画を立てるサービスが普及した。航空券の予約ミスが発生した場合、最初に確認すべきものはどれか。",
    "options": [
      "AIの消費電力",
      "利用者の年齢",
      "AI間の通信記録と意思決定の過程",
      "航空会社の広告"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0227",
    "unit": "予想問題（教科書未載）",
    "field": "生成AIと学習",
    "difficulty": "★★",
    "question": "学校ではAIが生徒一人ひとりに最適な教材を自動生成している。しかし、学習内容に偏りが生じることが問題となった。学校が確認すべきこととして最も適切なものはどれか。",
    "options": [
      "教室の広さ",
      "生徒の座席配置",
      "端末の価格",
      "学習機会の公平性"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0228",
    "unit": "予想問題（教科書未載）",
    "field": "AI教師",
    "difficulty": "★★★★",
    "question": "AI教師が授業の大部分を担当する社会において、教員に求められる役割として最も適切なものはどれか。",
    "options": [
      "AIより速く計算すること",
      "教材を暗記すること",
      "AIの授業を監視し、学習環境を設計すること",
      "端末の保守だけを行うこと"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0229",
    "unit": "予想問題（教科書未載）",
    "field": "人体デジタルツイン",
    "difficulty": "★★★★",
    "question": "個人の健康状態をコンピュータ上に再現する『人体デジタルツイン』が普及した。この技術を医療に利用する際に最も注意すべきことはどれか。",
    "options": [
      "計算速度",
      "画面の大きさ",
      "通信容量",
      "予測結果の限界や不確実性"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0230",
    "unit": "予想問題（教科書未載）",
    "field": "BCI（脳・コンピュータ接続）",
    "difficulty": "★★★★",
    "question": "脳の活動を読み取って文字入力を行う技術が普及した。この技術を社会に導入する際の課題として最も適切なものはどれか。",
    "options": [
      "機器の重量",
      "入力速度",
      "思考データの管理と保護",
      "電池容量"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0231",
    "unit": "予想問題（教科書未載）",
    "field": "デジタル人格",
    "difficulty": "★★★★",
    "question": "故人の会話履歴や映像を基にした『デジタル人格』が一般化した。サービス提供企業が整備すべき制度として最も重要なものはどれか。",
    "options": [
      "サーバの増設",
      "通信速度の向上",
      "利用料金の統一",
      "本人データの利用範囲の明確化"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0232",
    "unit": "予想問題（教科書未載）",
    "field": "量子コンピュータ",
    "difficulty": "★★★",
    "question": "量子コンピュータの実用化が進み、現在の暗号技術の一部が安全ではなくなった。社会全体として優先的に進めるべきことはどれか。",
    "options": [
      "通信量を減らすこと",
      "コンピュータの台数を増やすこと",
      "新しい暗号技術への移行を進めること",
      "インターネット利用を制限すること"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0233",
    "unit": "予想問題（教科書未載）",
    "field": "スマートシティ",
    "difficulty": "★★★",
    "question": "都市の交通、電力、水道をAIが統合管理する仕組みが普及した。障害が発生した場合の被害を小さくする方法として最も適切なものはどれか。",
    "options": [
      "職員数を増やすこと",
      "都市を小さく分割すること",
      "AIの処理速度を上げること",
      "代替システムを準備すること"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0234",
    "unit": "予想問題（教科書未載）",
    "field": "自動研究",
    "difficulty": "★★★★",
    "question": "AIが仮説の生成から実験計画の立案まで行う研究機関が登場した。研究者に今後求められる能力として最も適切なものはどれか。",
    "options": [
      "プログラムを暗記する能力",
      "高速に計算する能力",
      "AIの提案を検証し評価する能力",
      "実験装置を操作する能力"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0235",
    "unit": "予想問題（教科書未載）",
    "field": "感情認識AI",
    "difficulty": "★★★",
    "question": "ウェアラブル端末が感情の変化を推定し、学習支援に利用されている。学校が導入する際に最も配慮すべき点はどれか。",
    "options": [
      "端末の軽量化",
      "通信速度",
      "バッテリー性能",
      "感情データの適切な利用"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0236",
    "unit": "予想問題（教科書未載）",
    "field": "自動運転社会",
    "difficulty": "★★★",
    "question": "完全自動運転車が普及し、都市部では人間が運転する機会がほとんどなくなった。事故が発生した場合、最初に確認すべき情報はどれか。",
    "options": [
      "乗客数",
      "車体の色",
      "走行記録と制御履歴",
      "タイヤの種類"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0237",
    "unit": "予想問題（教科書未載）",
    "field": "AI政治",
    "difficulty": "★★★★",
    "question": "自治体が複数の政策案をAIに生成させるようになった。市民に求められる能力として最も適切なものはどれか。",
    "options": [
      "AIを開発する能力",
      "統計式を暗記する能力",
      "プログラムを書く能力",
      "政策の根拠を批判的に検討する能力"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0238",
    "unit": "予想問題（教科書未載）",
    "field": "仮想空間経済",
    "difficulty": "★★★★",
    "question": "仮想空間での活動が現実の経済活動と同等の価値を持つようになった。取引の安全性を確保するために重要なものはどれか。",
    "options": [
      "通信速度の向上",
      "端末価格の低下",
      "取引履歴の記録と検証",
      "仮想空間の拡張"
    ],
    "answer": 3,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0239",
    "unit": "予想問題（教科書未載）",
    "field": "宇宙ネットワーク",
    "difficulty": "★★★★",
    "question": "月面基地や宇宙ステーションが高速通信網で結ばれた社会では、通信障害への備えが重要になる。最も必要な対策はどれか。",
    "options": [
      "基地の拡張",
      "ロケットの大型化",
      "観光客の制限",
      "複数経路による通信手段の確保"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  },
  {
    "id": "Q99-0240",
    "unit": "予想問題（教科書未載）",
    "field": "人間拡張",
    "difficulty": "★★★★",
    "question": "身体能力や認知能力を補助する装置が一般化した社会で、新たな社会問題として考えられるものはどれか。",
    "options": [
      "装置の重量増加",
      "充電時間の長期化",
      "端末価格の上昇",
      "能力拡張による公平性の問題"
    ],
    "answer": 4,
    "correctCount": 0,
    "totalCount": 0,
    "explanation": ""
  }
];