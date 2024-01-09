let lang_flag = 0;
let changeLan = document.getElementById("changeLan");
changeLan.onclick = () => {
  switch (lang_flag) {
    case 0:
      lang_flag = 1;
      break;
    case 1:
      lang_flag = 2;
      break;
    case 2:
      lang_flag = 0;
      break;
    default:
      lang_flag = 0;
      break;
  }
  toggleLan();
};

const switchAllLan = (lanList) => {
  for (let i = 0; i < lanList.length; i++) {
    document.getElementById(lanList[i].name).innerHTML =
      lanList[i].value[lang_flag];
  }
};

const toggleLan = () => {
  switchAllLan(lanList);
};

const lanList = [
  {
    name: "changeLan",
    value: [`lan: 中文`, `lan: Eng`, `lan: 日本語`],
  },
  {
    name: "introTitle",
    value: [
      `我目前在Cienet擔任前端工程師 ...`,
      `I am currently working as a Front-end Engineer at Cienet ...`,
      `Cienetで勤務中のフロントエンドエンジニア ... `,
    ],
  },
  {
    name: "introContent",
    value: [
      `於2023年起在Cienet擔任前端工程師，參與的工作內容包含既有網頁系統的維護以及網頁功能的開發與測試。熟悉的基礎技術包含HTML, CSS, JS, TS，其中JS Library與Frame work主要使用Angular以及React，CSS框架則以BootStrap為主。<br>
        此外，因應嵌入式AI的發展與趨勢，近期亦研究VSCode Extension的開發，並且實際應用至工作內容中協助團隊操作自動化流程之業務，因此亦熟悉VSCode API, VSCode Extension Development之技術，並足以依相關需求獨立開發VSCode擴展應用程式。<br><br>
        在擔任軟體工程師以前，曾任職於AECOM都市設計師，並於第二年起擔任Key Designer。<br>
        工作的內容主要帶領團隊成員共同執行專案，管理專案進度執行以及業主(/客戶)的溝通協調，確保項目進度穩定執行。這樣的工作經歷下，使我熟悉與他人共同工作，與團隊共同為目標一起精進技術與前進。`,

      `I am a Front-End Engineer at Cienet since 2023, skilled in HTML, CSS, JavaScript, and TypeScript, with a focus on Angular and React. My work involves enhancing web systems and developing new functionalities. Recently, I've expanded my expertise to include VSCode Extension development, aligning with emerging AI trends. This has enabled me to contribute to automating and optimizing team workflows.<br>
      Before software engineering, I was an Urban Designer at AECOM, evolving into a Key Designer. This experience honed my skills in project management and team leadership, valuable in my current tech role. My career combines technical prowess with a flair for innovative solutions, aiming to continually advance the field of web development.`,

      `私は2023年以来Cienetのフロントエンドエンジニアで、HTML、CSS、JavaScript、TypeScriptに熟練しており、AngularとReactに焦点を当てています。私の仕事は、Webシステムの強化と新機能の開発に関わっています。最近では、VSCodeエクステンション開発にも知識を広げ、新興のAIトレンドに沿った取り組みをしています。これにより、チームのワークフローの自動化と最適化に貢献することができました。<br>

      ソフトウェアエンジニアリングの前は、AECOMでアーバンデザイナー、そして主要デザイナーに進化しました。この経験は、プロジェクト管理とチームリーダーシップのスキルを磨くのに役立ち、現在の技術的な役割においても価値があります。私のキャリアは、技術的な力量と革新的なソリューションへの才能を組み合わせており、Web開発の分野を常に前進させることを目指しています。`,
    ],
  },
  {
    name: "skillLang",
    value: [`技術`, `Skill`, `スキル`],
  },
  {
    name: "skillLang1",
    value: [`技術`, `Skill`, `スキル`],
  },
  {
    name: "frontEndRelatedLan",
    value: [`前端相關技術`, `Front-end Related`, `フロントエンド関連`],
  },
  {
    name: "backEndRelatedLan",
    value: [`後端相關技術`, `Back-end Related`, `バックエンド関連`],
  },
  {
    name: "otherSkillLan",
    value: [`其他技術`, `Others`, `その他の技術`],
  },
  {
    name: "lanSkillLan",
    value: [`語言能力`, `Language Ability`, `言語能力`],
  },
  {
    name: "chineseLan",
    value: [`中文`, `Chinese`, `中国語`],
  },
  {
    name: "englishLan",
    value: [`英文`, `English`, `英語`],
  },
  {
    name: "eduLan",
    value: [`學歷`, `Education`, `学歴`],
  },
  {
    name: "bachelorLan",
    value: [
      `2017 都市計劃學系學士, 國立成功⼤學, 臺灣`,
      `Bachelor of Urban Planning, 2017,<br> National Cheng Kung University, Taiwan`,
      `2017年 都市計画学士、国立成功大学、台湾`,
    ],
  },
  {
    name: "masterLan",
    value: [
      `2020 城市設計碩士, 紐卡斯爾大學, 英國`,
      `MA in Urban Design, 2020,<br> Newcastle University, UK`,
      `2020年 都市デザイン修士、ニューカッスル大学、英国`,
    ],
  },
  {
    name: "homePageLang",
    value: [`首頁`, `Home`, `ホーム`],
  },
  {
    name: "portfolioLang",
    value: [`作品集`, `Portfolio`, `ポートフォリオ`],
  },
  {
    name: "portfolioLang1",
    value: [`作品集`, `Portfolio`, `ポートフォリオ`],
  },
  {
    name: "pjIntroLan",
    value: [`專案介紹 : `, `Intro : `, `プロジェクト紹介 : `],
  },
  {
    name: "pjIntroContentLan",
    value: [
      `danilo-shop是以ReactJs + GoogleFireBase製作的Single web app 網購平台Demo，用戶在web app上可以註冊或登入帳號，將不同類別的產品放置購物車，然後進行結帳。設計此網站的動機是為了實踐對於ReactJS熟悉度並架設相對功能複雜的網站應用程式的能力。`,
      `Danilo-shop is a demo e-commerce web app built with ReactJs and GoogleFirebase, where users can register, log in, add diverse products to their cart, and checkout. This site was designed to showcase proficiency in ReactJS and the ability to create complex web applications.`,
      `Danilo-shopは、ReactJsとGoogleFirebaseを使用して構築されたデモ電子商取引ウェブアプリです。ユーザーはアプリでアカウント登録やログインを行い、さまざまな商品をカートに追加してチェックアウトできます。このサイトはReactJSに精通していることを示すとともに、複雑なウェブアプリケーションを作成する能力を披露するために設計されました。`,
    ],
  },
  {
    name: "pjLinkLan",
    value: ["專案連結 : ", "Project Link : ", "プロジェクトリンク : "],
  },
  {
    name: "pjToolsLan",
    value: [
      `專案涉及工具 : `,
      `Project Tools Involved : `,
      `プロジェクトで使用されるツール : `,
    ],
  },
  {
    name: "pjMethodLan",
    value: ["專案方法 : ", "Project Method : ", "プロジェクト方法 : "],
  },
  {
    name: "pjMethodLi1Lan",
    value: [
      `透過react-router建構web app url route關係，並透過import "Outlet" 將nav bar 固定於網頁置頂`,
      `Constructing web app URL route relationships through react-router, and fixing the nav bar at the top of the page via import "Outlet"`,
      `react-routerを通じてweb appのURLルート関係を構築し、"Outlet"をインポートしてナビゲーションバーをページのトップに固定する`,
    ],
  },
  {
    name: "pjMethodLi2Lan",
    value: [
      `以noSQL系統的Google FireBase做為網頁數據庫，應用該數據庫製作網站的登入及註冊系統 (包含Google登入系統)`,
      `Using Google Firebase, a NoSQL system, as the web database to create login and registration systems for the website (including Google login system)`,
      `NoSQLシステムのGoogle Firebaseをウェブデータベースとして使用し、そのデータベースを利用してウェブサイトのログインおよび登録システム（Googleログインシステムを含む）を作成する`,
    ],
  },
  {
    name: "pjMethodLi3Lan",
    value: [
      `專案前期以Context, 後期改以Redux建立全域性資料(包含用戶, 商品以及購物車產品資料), 避免prop drilling的問題`,
      `Initially using Context and later switching to Redux for establishing global data (including user, product, and shopping cart information) in the project, to avoid the issue of prop drilling`,
      `プロジェクトの初期段階でContextを使用し、後期にはReduxを使用してグローバルデータ（ユーザー、商品、ショッピングカートの情報を含む）を設定し、prop drillingの問題を回避する`,
    ],
  },
  {
    name: "pjMethodLi4Lan",
    value: [
      `以Nested Route 建立不同類型商品的網頁 (ex: shop/hats, shop/jackets ...)`,
      `Creating web pages for different types of products using Nested Route (e.g., shop/hats, shop/jackets ...)`,
      `Nested Routeを使用して、異なるタイプの商品のウェブページを作成する（例：shop/hats, shop/jacketsなど）`,
    ],
  },
  {
    name: "pjMethodLi5Lan",
    value: [
      `透過styled component建立CSSinJS，將過程中的scss style改成styled jsx，避免style重複的課題`,
      `Creating CSS-in-JS using styled components, transforming SCSS style into styled JSX to avoid style duplication issues`,
      `styled componentを用いてCSS-in-JSを作成し、プロセス中のSCSSスタイルをstyled JSXに変換して、スタイルの重複問題を回避する`,
    ],
  },

  {
    name: "pjIntroLan1",
    value: [`專案介紹 : `, `Intro : `, `プロジェクト紹介 : `],
  },
  {
    name: "pjIntroContentLan1",
    value: [
      `Camp.Info是一個用戶可以瀏覽台灣各地露營地的網站，透過註冊一個新的帳戶，用戶可以創建、評論露營地的資訊與體驗心得，並且可以修改該用戶創建的露營地資訊。設計此網站的動機是為了實踐透過Node.js來架設完善功能的能力。`,
      `Camp.Info is a website where users can explore various camping sites across Taiwan. By registering a new account, users can create, comment on, and modify information and experiences about camping sites. The motivation behind designing this website was to demonstrate the ability to set up a fully-functional site using Node.js.`,
      `Camp.Infoは台湾各地のキャンプ場を閲覧できるウェブサイトです。新しいアカウントを登録することで、ユーザーはキャンプ場の情報を作成、コメント、編集することができます。このウェブサイトを設計する動機は、Node.jsを使用して機能的なサイトを構築する能力を実践するためでした。`,
    ],
  },
  {
    name: "pjLinkLan1",
    value: ["專案連結 : ", "Project Link : ", "プロジェクトリンク : "],
  },
  {
    name: "pjToolsLan1",
    value: [
      `專案涉及工具 : `,
      `Project Tools Involved : `,
      `プロジェクトで使用されるツール : `,
    ],
  },
  {
    name: "pjMethodLan1",
    value: ["專案方法 : ", "Project Method : ", "プロジェクト方法 : "],
  },
  {
    name: "pjMethodLi1Lan1",
    value: [
      `以fullCRUD建立網頁系統, 建構網頁新增, 瀏覽, 編輯和刪除露營區的功能`,
      `Establishing a web system with full CRUD, allowing for the addition, browsing, editing, and deletion of camping area information on the website`,
      `フルCRUDを用いてウェブシステムを構築し、ウェブサイト上でキャンプエリアの情報を追加、閲覧、編集、削除する機能を実現`,
    ],
  },
  {
    name: "pjMethodLi2Lan1",
    value: [
      `以noSQL系統的MongoDB做為網頁數據庫，透過一對多關係模式將Campgrounds, User, Review三種collections的數據進行連結`,
      `Using MongoDB, a NoSQL system, as the web database, linking data among Campgrounds, User, and Review collections through a one-to-many relationship model`,
      `NoSQLシステムのMongoDBをウェブデータベースとして使用し、一対多の関係モデルを通じてCampgrounds、User、Reviewの三つのコレクションのデータを連携する`,
    ],
  },
  {
    name: "pjMethodLi3Lan1",
    value: [
      `以PassportJS工具建立網頁的用戶註冊/登入的驗證系統，並將用戶密碼透過該工具導入的Hash Function與 Salting提供用戶密碼基礎的保護措施`,
      `Using PassportJS to establish a web-based user registration/login authentication system, and providing basic password protection through hashing and salting functions incorporated by this tool`,
      `PassportJSを使用してウェブサイトのユーザー登録/ログイン認証システムを構築し、このツールに組み込まれているハッシュ関数とソルティングにより、ユーザーパスワードの基本的な保護措置を提供する`,
    ],
  },
  {
    name: "pjMethodLi4Lan1",
    value: [
      `透過Cloudinary提供用戶新增露營區相片的雲端儲存`,
      `Using Cloudinary to provide cloud storage for users to upload photos of camping areas`,
      `Cloudinaryを使用して、ユーザーがキャンプ場の写真をアップロードするためのクラウドストレージを提供`,
    ],
  },
  {
    name: "pjMethodLi5Lan1",
    value: [
      `透過MapBox提供用戶瀏覽露營區位置時更佳的空間視覺化體驗`,
      `Using MapBox to offer users an improved spatial visualization experience when viewing camping site locations`,
      `MapBoxを使用して、ユーザーがキャンプ場の位置を閲覧する際の空間視覚体験を向上させる`,
    ],
  },

  {
    name: "gizmo1Intro",
    value: [
      `該裝置模擬公司成員介紹清單 : 可透過搜尋功能過濾成員，並顯示詳細的成員資訊。網頁同時以ReactJS Class以及Functional (Hook)邏輯編程；風格以手刻CSS進行animate的渲染。`,
      `Device simulating a company member list with search and detail display, using ReactJS Class and Hooks, styled with animated custom CSS.`,
      `検索機能と詳細表示を備えた会社メンバーリストをシミュレートする装置。ReactJSクラスとフックを使用し、アニメーション付きカスタムCSSでスタイル設定。`,
    ],
  },
  {
    name: "gizmo2Intro",
    value: [
      `透過async fetch reqest 從 web API中抓取隨機的名言與其作者資訊。並從Tweet及Meta的開發者平台中擷取相關指令製作可將名言即時分享到動態中的DOM練習項目。`,
      `Fetch random quotes and author info from a web API using async fetch. Create a practice project to instantly share quotes in the dynamic DOM using commands from Tweet and Meta developer platforms.`,
      `Web APIからランダムな引用文とその著者情報を非同期fetchリクエストで取得します。TweetおよびMetaの開発者プラットフォームから関連するコマンドを抽出し、ダイナミックなDOMに引用文を即座に共有する練習プロジェクトを作成します。`,
    ],
  },
  {
    name: "gizmo3Intro",
    value: [
      `該裝置提供用戶計算桌球比賽的比分。透過設定比賽總分，當其中一方玩家達到分數時，顯示勝利玩家。網頁以Bootstrap框架設計網頁的風格，並以該框架的flex box進行切版，是一個結合styling跟JS DOM的練習項目。`,
      `This device tracks table tennis scores and displays the winner when a player reaches the set score. It uses the Bootstrap framework for styling and is a practice project combining styling and JavaScript DOM manipulation.`,
      `このデバイスは卓球のスコアを追跡し、プレイヤーが設定された得点に達したときに勝者を表示します。スタイリングにはBootstrapフレームワークを使用し、スタイリングとJavaScript DOM操作を組み合わせた練習プロジェクトです。`,
    ],
  },
  {
    name: "gizmo4Intro",
    value: [
      `Infinite Scroll 是利用unsplash api 隨機生成圖片，並使其在網頁上進行無限的loading，是一個結合styling跟JS DOM的練習項目。`,
      `Infinite Scroll uses the Unsplash API to display randomly generated images on a webpage with endless loading. It's a practice project that combines styling with JavaScript DOM manipulation.`,
      `Infinite Scroll はUnsplash APIを使用してランダムに生成された画像をウェブページに無限に読み込むプロジェクトです。スタイリングとJavaScript DOM操作を組み合わせた練習プロジェクトです。`,
    ],
  },
  {
    name: "gizmo5Intro",
    value: [
      `Auth Exercise 是利用Google FireBase中的auth跟firestore SDK透過ReactJS搭建的用戶的註冊與登入系統，用戶除了email註冊外，也可透過google與facebook的第三方帳戶登入系統。`,
      `Auth Exercise is a user registration and login system built with Google Firebase's auth and Firestore SDKs using ReactJS. Users can register with email or log in using third-party Google and Facebook accounts.`,
      `Auth Exerciseは、Google FirebaseのauthとFirestore SDKを使用してReactJSで構築されたユーザー登録およびログインシステムです。ユーザーはメールで登録するか、サードパーティのGoogleやFacebookアカウントを使用してログインできます。`,
    ],
  },
  {
    name: "otherLang",
    value: [`其他`, `Others`, `その他`],
  },
  {
    name: "otherLang1",
    value: [`其他`, `Others`, `その他`],
  },
  {
    name: "workExpLan",
    value: [`工作經歷`, `Work Experiences`, `職歴`],
  },
  {
    name: "workExpSubLan",
    value: [
      `我是一名IDE擴展和前端開發人員`,
      `I am a IDE Extension and Front-end Developer`,
      `私はIDE拡張およびフロントエンド開発者です`,
    ],
  },
  {
    name: "workExp1",
    value: [
      `Cienet, 前端開發工程師`,
      `Cienet, Front-end Developer`,
      `Cienet、フロントエンド開発者`,
    ],
  },
  {
    name: "workExpSub2Lan",
    value: [
      `我曾是城市設計師`, // Translation in Traditional Chinese
      `I was an Urban Designer`, // Original English
      `私は都市デザイナーでした`, // Translation in Japanese
    ],
  },
  {
    name: "work2Exp1",
    value: [
      `AECOM，城市設計師 II`, // Translation in Traditional Chinese
      `AECOM, Urban Designer II`, // Original English
      `AECOM、都市デザイナー II`, // Translation in Japanese
    ],
  },
  {
    name: "work2Exp2",
    value: [
      `國泰人壽不動產投資部，不動產實習生`,
      `Cathay Life Insurance Real Estate Investment Department, Real Estate Intern`, // Original English
      `國泰生命保険不動産投資部門、不動産インターン`, // Translation in Japanese
    ],
  },
  {
    name: "work2Exp3",
    value: [
      `FAP+DA，都市計畫實習生`,
      `FAP+DA, Urban Planning Intern`, // Translation in English
      `FAP+DA、都市計画インターン`,
    ],
  },
  {
    name: "otherPjTitleLan",
    value: [
      `參與過的專案`,
      `Projects I've Participated In`,
      `参加したプロジェクト`,
    ],
  },
  {
    name: "otherPjSubLan",
    value: [
      `當我是一名城市設計師的時候`, // Translation in Traditional Chinese
      `when I was an Urban Designer`, // Original English
      `私が都市デザイナーだった時`, // Translation in Japanese
    ],
  },
  {
    name: "otherPjSubLan1",
    value: [
      `作為一名IDE Extension開發與前端工程師`, // Translation in Traditional Chinese
      `As an IDE Extension Developer and Front-end Engineer`, // Original English
      `IDEエクステンション開発者およびフロントエンドエンジニアとして`, // Translation in Japanese
    ],
  },
  {
    name: "otherPjLan",
    value: [
      `與<span style="color: rgb(255, 150, 80);">Google</span>合作，不斷提高其產品的品質`, // Translation in Traditional Chinese
      `Cooperate with <span style="color: rgb(255, 150, 80);">Google</span> team and keep improving their product's quality`, // Original English
      `<span style="color: rgb(255, 150, 80);">Google</span>と協力し、彼らの製品の品質を向上させ続ける`, // Translation in Japanese
    ],
  },
  {
    name: "otherPj2Lan",
    value: [
      `依據團隊與客戶需求，於前期獨立開發<span style="color: rgb(255, 150, 80);">VSCode Extension</span>，達成<span style="color: rgb(255, 150, 80);">嵌入式擴展app</span>的<span style="color: rgb(255, 150, 80);">自動化測試系統</span>`,
      `Based on team and client requirements, independently developed a <span style="color: rgb(255, 150, 80);">VSCode Extension</span> in the early stages, achieving an <span style="color: rgb(255, 150, 80);">automated testing system</span> for <span style="color: rgb(255, 150, 80);">embedded extension apps</span>.`,
      `チームとクライアントの要件に基づき、初期段階で<span style="color: rgb(255, 150, 80);">VSCode拡張機能</span>を独自に開発し、<span style="color: rgb(255, 150, 80);">埋め込み拡張アプリ</span>向けの<span style="color: rgb(255, 150, 80);">自動化テストシステム</span>を実現しました。`,
    ],
  },
  {
    name: "otherExpTitleLan",
    value: [`其他經歷`, `Other Experiences`, `その他の経験`],
  },
  {
    name: "otherExpSubLan",
    value: [`更多關於我`, `More About Me`, `私についてもっと詳しく`],
  },
  {
    name: "otherExp1Lan",
    value: [
      `第九屆台灣景觀大獎 佳作獎 : 大嵙崁計畫`,
      `9th Taiwan Landscape Awards, Excellence Award: Da Kekan Project`,
      `第9回台湾ランドスケープアワード、優秀賞：大嵙崁プロジェクト`,
    ],
  },
  {
    name: "otherExp2Lan",
    value: [
      `ATCC全國大專院生商業個案大賽 企業第三名 : ROOT`,
      `ATCC National College Student Business Case Competition, 3rd Place in the Corporate Category: ROOT`,
      `ATCC全国大学生ビジネスケースコンペティション、企業カテゴリーで3位：ROOT`,
    ],
  },
  {
    name: "otherExp3Lan",
    value: [
      `台灣設計展-南風館策展助理`,
      `Taiwan Design Exhibition - Curatorial Assistant for the Southern Pavilion`,
      `台湾デザイン展 - 南館キュレーションアシスタント`,
    ],
  },
  {
    name: "otherExp4Lan",
    value: [
      `TEDxTainan 設計部`,
      `TEDxTainan Design Team`,
      `TEDxTainan デザインチーム`,
    ],
  },
  {
    name: "otherExp5Lan",
    value: [
      `成大學生會 公關部副部長`,
      `Vice Director of the Public Relations Department, NCKU Student Association`,
      `NCKU学生会公共関係部副部長`,
    ],
  },
  {
    name: "otherExp6Lan",
    value: [
      `臺南海安商圈微電影競賽銅獎`,
      `Bronze Award in the Tainan Hai An Business District Microfilm Competition`,
      `台南海安ビジネス地区マイクロフィルムコンペティションでの銅賞`,
    ],
  },
  {
    name: "otherExp7Lan",
    value: [
      `2015成大都計人生職涯博覽會 公關`,
      `2015 NCKU Urban Planning Career Expo, Public Relations`,
      `2015年NCKU都市計画キャリアエキスポ、パブリックリレーションズ`,
    ],
  },
  {
    name: "otherExp8Lan",
    value: [
      `美國遊學與打工 (聖地牙哥與紐約)`,
      `Study and Part Time Work in the United States (San Diego and New York)`,
      `アメリカ留学と仕事 (サンディエゴとニューヨーク)`,
    ],
  },
  {
    name: "contactLang",
    value: [`聯繫我`, `Contact`, `連絡先`],
  },
  {
    name: "contact1Lang",
    value: [`您好`, `Hi, there`, `こんにちは、`],
  },
  {
    name: "contact2Lang",
    value: [
      `謝謝您造訪我的個人網站。`,
      `Thank you for visiting my personal website.`,
      `私の個人ウェブサイトを訪れていただき、ありがとうございます。`,
    ],
  },
  {
    name: "contact3Lang",
    value: [
      `如果您正在尋找前端工程師夥伴`,
      `If you are looking for a frontend engineer partner,`,
      `フロントエンドエンジニアのパートナーをお探しの場合、`,
    ],
  },
  {
    name: "contact4Lang",
    value: [
      `請不吝與我聯繫洽談更多的細節`,
      `please feel free to contact me to discuss more details.`,
      `詳細についてご相談いただくためにお気軽にお問い合わせください。`,
    ],
  },
  {
    name: "contact5Lang",
    value: [
      `祝您有個愉快的一天`,
      `Wishing you a pleasant day.`,
      `素敵な一日をお過ごしください。`,
    ],
  },
  {
    name: "contactLang1",
    value: [`聯繫我`, `Contact`, `連絡先`],
  },
  {
    name: "contactLang2",
    value: [`我的電子信箱`, `My Email`, `私のメールアドレス`],
  },
];
