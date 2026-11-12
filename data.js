/* ============================================================
   吉隆坡米其林散步指南 — 資料檔
   維護說明：
   - zones[].stops   每區店家（s: 'full' 詳細卡 / 'mini' 精簡卡）
   - zones[].legacy  「老店情懷」曾入選店家（自動用虛線徽章）
   - zones[].map     手繪示意圖節點（x/y 為 SVG 座標，微調即可）
   - dishes: [名稱, 補充說明(可空), 價格/註記]
   - q: Google Maps 搜尋字串
   ============================================================ */
var GUIDE = {
  meta: {
    title: "米其林散步指南 — 吉隆坡街頭小吃・六大區域",
    kicker: "最新版精選・26 家必比登推介 BIB GOURMAND",
    h1: '吉隆坡米其林<em>街頭小吃</em>指南<br>六大區域全吃遍',
    sub: "從市中心步行圈到 Damansara、Kepong、Cheras——六張區域地圖、26 家必比登推介與 4 家老店情懷，每家都有 Google Maps 連結與推薦餐點。走路能到的用走的，遠一點的 Grab 一跳就到。",
    stats: [
      ["26", "家必比登推介"],
      ["+4", "家老店情懷"],
      ["6", "大區域"],
      ["6", "張手繪地圖"],
    ],
    marquee: [
      "牛腩麵 BEEF NOODLES", "海南雞飯 CHICKEN RICE", "啦啦米粉 LALA BIHUN",
      "琵琶鴨 PEI PA DUCK", "砂煲雞飯 CLAYPOT RICE", "燒肉 SIEW YOK",
      "肉骨茶 BAK KUT TEH", "NASI AMBENG", "魚頭米粉 FISH HEAD NOODLE", "擂茶 LUI CHA",
    ],
    footer: {
      left: `<b>米其林散步指南 — 吉隆坡街頭小吃六大區域</b><br>
      站點、地址與營業時間整理自 MICHELIN Guide Kuala Lumpur &amp; Penang 官網現行清單（必比登推介 26 家＋老店情懷 4 家）。<br>
      價格與營業時間可能隨季節與店家調整，出發前請以 Google Maps 與官網最新資訊為準。`,
      right: `6 張區域地圖・30 家店家・每家都有地圖連結<br>敬這座城市的鑊氣與炭火 — Selamat Jalan &amp; 慢慢吃`,
    },
  },

  tips: [
    ["現金為王", "老攤位與街邊檔口多收現金，備妥 RM1–20 小鈔；部分店家已收電子支付，但現金最穩。"],
    ["交通策略", "Z1 老城區全程步行；Z2 走路＋Grab；Z3–Z6 建議 LRT/MRT 加 Grab 接駁（市區車程多在 RM10–20）。MRT Putrajaya 線涵蓋北區。"],
    ["營業時間是地圖", "本指南多數店家營業時段刁鑽：黃美記只有三天中午、新九記下午四點半收攤、Hing Kee 下午三點才開。規劃順序請以「時段」優先於「區域」。"],
    ["吃法心法", "每站只點一道招牌、與同行者分食；一天抓 2–3 區就夠。熱帶午後常有雷陣雨，12:00–15:00 安排室內休息。"],
    ["清真與素食", "豬肉攤集中在 Z1、Z2、Z5、Z6 的華人店；穆斯林旅人可主攻 Congkak、Anak Baba、MTR 1924、Chee Meng 與 Z3 西區。素食者 MTR 1924 全素可吃。"],
    ["認證狀態", "必比登清單每年更新（2027 版已新增 16 家入選店家）；本頁「必比登」狀態依官網現行清單，「老店情懷」四家為 2023–25 版曾入選。出行前建議再查 guide.michelin.com。"],
  ],

  zones: [
    /* ============ Z1 老城區 ============ */
    {
      id: "zone1", num: "Z1", alt: false,
      zh: "老城區・茨廠街與半山芭", en: "Old City Centre — Walkable",
      chip: "LRT Pasar Seni / Masjid Jamek 站・全程可步行",
      brief: "步行圈：新九記牛腩麵、南香雞飯、來發啦啦麵、黃美記燒肉、方蓮砂煲、適苑酒家＋4 家老店情懷。",
      map: {
        vb: "0 0 900 430",
        decor: [
          { k: "road", d: "M40 380 C 220 350, 420 390, 620 355 C 740 335, 820 360, 880 345", label: "巴生河 KLANG RIVER", lx: 450, ly: 412 },
          { k: "road", d: "M150 90 L 300 180 L 470 210 L 640 250", label: "JALAN KAMUNTING", lx: 150, ly: 72 },
          { k: "road", d: "M470 210 L 640 250", label: "JALAN PUDU", lx: 620, ly: 232 },
          { k: "text", x: 120, y: 330, t: "MASJID JAMEK" },
          { k: "text", x: 480, y: 120, t: "茨廠街 CHINATOWN" },
          { k: "text", x: 740, y: 180, t: "半山芭 PUDU" },
        ],
        nodes: [
          { x: 150, y: 100, n: "L1", t: "legacy", l: "鎰記茶餐室", d: "below" },
          { x: 390, y: 180, n: "L2", t: "legacy", l: "冠記雲吞麵", d: "below" },
          { x: 470, y: 150, n: "L3", t: "legacy", l: "金蓮記", d: "above" },
          { x: 330, y: 245, n: "1", t: "bib", l: "新九記牛腩麵", d: "below" },
          { x: 430, y: 265, n: "2", t: "bib", l: "南香雞飯", d: "below" },
          { x: 530, y: 250, n: "3", t: "bib", l: "來發啦啦麵", d: "above" },
          { x: 640, y: 290, n: "4", t: "bib", l: "黃美記燒肉", d: "below" },
          { x: 730, y: 250, n: "5", t: "bib", l: "方蓮炭火砂煲", d: "above" },
          { x: 800, y: 300, n: "6", t: "bib", l: "適苑酒家", d: "below" },
          { x: 700, y: 375, n: "L4", t: "legacy", l: "獻記砂煲雞飯", d: "below" },
        ],
      },
      stops: [
        { s: "full", num: "01", zh: "新九記牛腩麵", en: "Sin Kiew Yee Shin Kee Beef Noodles・1949", badge: "bib",
          addr: "7a, Jalan Tun Tan Cheng Lock", hours: "10:30–16:30（週三休）", price: "$",
          q: "Sin Kiew Yee Shin Kee Beef Noodles Jalan Tun Tan Cheng Lock Kuala Lumpur",
          dishes: [["牛腩湯麵／乾撈牛腩麵", "湯或乾拌二選一", "入口等級"], ["彈牙牛肉丸＋切片牛肉", "", "招牌組合"], ["厚切牛肚", "軟嫩入味・老饕指定", "人氣第一"]],
          story: "1949 年路邊攤起家的金字招牌。麵條三選一：闊條河粉、米粉或客家細麵，蘸上自製辣椒醬。牛肚切得厚，口感柔軟而味道濃郁——這碗是茨廠街街口的日常傳奇。",
          tip: "只開到下午四點半，週三休息；傍晚來會撲空。" },
        { s: "full", num: "02", zh: "南香海南雞飯", en: "Nam Heong Chicken Rice・1938", badge: "bib",
          addr: "56, Jalan Sultan", hours: "10:00–22:00", price: "$",
          q: "Nam Heong Chicken Rice Jalan Sultan Kuala Lumpur",
          dishes: [["海南雞飯", "菜園雞（瘦實）或甘榜雞（肥嫩）二選一", "招牌"], ["燒肉／燒鴨", "脆皮與肥瘦相間的經典廣式燒味", "熱賣"], ["怡保芽菜", "爽脆多汁・配雞飯天作之合", "必加"]],
          story: "1938 年開業的海南雞飯名店。雞肉兩種風格任選，雞油香飯是靈魂；燒肉皮脆、肥瘦層次分明。老店位於茨廠街旁的蘇丹街，與新九記步行兩分鐘可達。",
          tip: "中午常客滿，可先外帶芽菜與雞飯到隔壁茶室坐。" },
        { s: "full", num: "03", zh: "來發啦啦麵", en: "Lai Foong Lala Noodles", badge: "bib",
          addr: "99, Jalan Sultan", hours: "09:00–22:00", price: "$",
          q: "Lai Foong Lala Noodles Jalan Sultan Kuala Lumpur",
          dishes: [["啦啦米粉", "花甲＋鮮蝦・黃酒薑湯頭", "必點"], ["炸雲吞", "酥脆配湯", "加點"], ["龍眼豆腐", "清甜甜點收尾", "飯後"]],
          story: "路邊攤起家的家族店，如今佔下街角兩層樓面：紅燈籠、老算盤與滿牆舊照片。啦啦米粉的湯頭以花甲、薑絲與黃酒熬出，鮮味與酒香在尾韻交錯——雨天吃它、想念吉隆坡時更要想它。",
          tip: "份量大方，兩人一碗加小點剛剛好。" },
        { s: "full", num: "04", zh: "黃美記燒肉", en: "Wong Mei Kee・Pudu", badge: "bib",
          addr: "30, Jalan Nyonya（Pudu）", hours: "僅週一・二・日 12:00–15:00", price: "$",
          q: "Wong Mei Kee Jalan Nyonya Pudu Kuala Lumpur",
          dishes: [["脆皮燒肉 Siew Yok", "皮如餅乾脆・肉汁滿盈", "鎮店之王"], ["中午十二時正出爐", "搶第一輪最脆的皮", "關鍵情報"]],
          story: "一天只開幾小時的半山芭傳奇。燒肉皮脆得會發出聲響，肉層多汁不膩，被老饕稱為吉隆坡最強燒肉。週一、二、日中午開賣——排隊是這裡的儀式。",
          tip: "準時 12:00 抵達等出爐；週三至六全休，排錯天就白跑了。" },
        { s: "full", num: "05", zh: "方蓮炭火砂煲飯", en: "Foong Lian・1986", badge: "bib",
          addr: "55, Jalan Yew（Pudu）", hours: "11:30–15:30 / 17:30–21:00（週二休）", price: "$",
          q: "Foong Lian Claypot Jalan Yew Pudu Kuala Lumpur",
          dishes: [["炭火砂煲雞飯", "1986 年至今・雙種米調配", "招牌"], ["臘腸＋肝腸版", "油脂香氣滲進飯粒", "人氣"], ["加雞腿與鹹魚", "鹹香升級", "老饕"]],
          story: "1986 年至今的炭火砂煲飯老攤。老師傅對火候的控制近乎偏執，每一煲都有完美的金黃鍋巴。腐皮卷與湯品也值得一併點上——就位於老店獻記的同一條 Jalan Yew 上。",
          tip: "與獻記相距僅數百公尺，砂煲控可以兩家連吃比一比。" },
        { s: "full", num: "06", zh: "適苑酒家", en: "Sek Yuen Restaurant・1948", badge: "bib",
          addr: "313, Jalan Pudu", hours: "11:00–14:30 / 17:00–21:30（週一休）", price: "$$",
          q: "Sek Yuen Restaurant Jalan Pudu Kuala Lumpur",
          dishes: [["琵琶鴨 Pei Pa Duck", "皮脆如玻璃・肉嫩多汁", "鎮店招牌"], ["燒乳豬", "需提前兩天預訂", "隱藏王者"], ["古早味廣式熱炒", "柴火灶風味", "配菜"]],
          story: "1948 年開業、吉隆坡現存最老的廣東酒家，三間相連老店屋中間那棟最有味道。柴火灶燒出的琵琶鴨皮脆肉嫩，是整個半山芭的味覺地標；老服務生與鐵窗花讓人一腳踏進 1948 年。",
          tip: "週一休；乳豬與宴客菜需預訂，散客傍晚五點開市前到最從容。" },
      ],
      legacyIntro: "這四家是 2023–25 版指南的必比登人氣老店；最新版清單未再列入，但味道依舊，散步路線經過時值得一試。",
      legacy: [
        { num: "L1", zh: "鎰記茶餐室", en: "Yut Kee Restaurant・1928・Jalan Kamunting", badge: "legacy",
          q: "Yut Kee Restaurant Jalan Kamunting Kuala Lumpur",
          dishes: [["豬肉包 Roti Babi", "", "≈ RM14"], ["海南雞扒", "", "≈ RM16"], ["咖椰土司＋白咖啡", "", "≈ RM8"]] },
        { num: "L2", zh: "冠記雲吞麵", en: "Koon Kee Wantan Mee・茨廠街", badge: "legacy",
          q: "Koon Kee Wantan Mee Jalan Petaling Kuala Lumpur",
          dishes: [["乾撈雲吞麵", "", "≈ RM7"], ["水餃雲吞湯", "", "≈ RM6"], ["叉燒撈麵", "", "≈ RM9"]] },
        { num: "L3", zh: "金蓮記", en: "Kim Lian Kee・1927・Jalan Hang Lekir", badge: "legacy",
          q: "Kim Lian Kee Jalan Hang Lekir Kuala Lumpur",
          dishes: [["福建炒麵", "", "≈ RM12"], ["滷麵 Loh Mee", "", "≈ RM10"], ["腐皮卷", "", "≈ RM8"]] },
        { num: "L4", zh: "獻記砂煲雞飯", en: "Heun Kee Claypot Chicken Rice・9, Jalan Yew, Pudu", badge: "legacy",
          q: "Heun Kee Claypot Chicken Rice Jalan Yew Pudu Kuala Lumpur",
          dishes: [["炭火砂煲雞飯", "", "≈ RM16"], ["加臘腸＋鹹魚", "", "＋RM4"], ["海鮮豆腐", "", "≈ RM15"]] },
      ],
    },

    /* ============ Z2 武吉免登・TRX ============ */
    {
      id: "zone2", num: "Z2", alt: true,
      zh: "武吉免登・TRX・安邦", en: "Bukit Bintang — TRX — Ampang",
      chip: "MRT Bukit Bintang / Conlay（TRX）站・步行＋Grab",
      brief: "Congkak 馬來料理、Coast by Kayra 喀拉拉魚咖哩、Sao Nam 越南河粉、阿希與 De Wan 1958。",
      map: {
        vb: "0 0 900 400",
        decor: [
          { k: "road", d: "M80 120 L 320 180 L 560 170 L 800 240", label: "JALAN BUKIT BINTANG", lx: 90, ly: 100 },
          { k: "road", d: "M560 170 L 700 90 L 820 60", label: "JALAN AMPANG →", lx: 720, ly: 48 },
          { k: "rect", x: 480, y: 80, w: 60, h: 60, rot: 12, label: "TRX", lx: 510, ly: 116, sub: "敦拉薩金融中心", slx: 510, sly: 165 },
          { k: "text", x: 510, y: 165, t: "" },
        ],
        nodes: [
          { x: 300, y: 185, n: "1", t: "bib", l: "Congkak 馬來家常菜", s: "JALAN BEREMI・TRX 步行圈", d: "below" },
          { x: 420, y: 235, n: "2", t: "bib", l: "Coast by Kayra 南印度海味", s: "THE STARHILL", d: "below" },
          { x: 360, y: 290, n: "3", t: "bib", l: "Sao Nam 越南河粉", s: "TENGKAT TONG SHIN", d: "below" },
          { x: 560, y: 255, n: "4", t: "bib", l: "阿希肉骨茶", s: "MEDAN IMBI", d: "below" },
          { x: 700, y: 110, n: "5", t: "bib", l: "De Wan 1958 馬來主廚菜", s: "THE LINC KL・JALAN TUN RAZAK", d: "below" },
          { x: 820, y: 70, n: "6", t: "bib", l: "Roti by d'Tandoor 北印度", s: "KAMPUNG DATUK KERAMAT", d: "below" },
        ],
      },
      stops: [
        { s: "mini", num: "1", zh: "Congkak", en: "Malaysian・24 Jalan Beremi, Bukit Bintang", badge: "bib", hours: "每日 12:00–22:00（五六至 23:00）",
          q: "Congkak Jalan Beremi Bukit Bintang Kuala Lumpur",
          dishes: [["Nasi Ambeng 共享拼盤", "", "鎮店"], ["馬來經典小食組合", "", "人多必點"]],
          note: "以馬來傳統遊戲「congkak」命名，位於住宅巷內；nasi ambeng 一盤吃盡甜、辣、鹹的層次，份量可依人數調整。從 TRX 步行即達。" },
        { s: "mini", num: "2", zh: "Coast by Kayra", en: "Kerala Indian・The Starhill, 181 Jalan Bukit Bintang", badge: "bib", hours: "12:00–22:00（二 12:30 起）",
          q: "Coast by Kayra The Starhill Jalan Bukit Bintang",
          dishes: [["喀拉拉魚咖哩", "生芒果＋優格酸香・家族配方", "必點"], ["Naan 沾醬神搭", "", "主食"]],
          note: "Kayra 姊妹店，海洋主題裝潢；海鮮與食材向本地小農漁家採購，把南印度喀拉拉的傳統菜重新演繹。" },
        { s: "mini", num: "3", zh: "Sao Nam", en: "Vietnamese・25 Tengkat Tong Shin", badge: "bib", hours: "12:00–14:30 / 18:00–22:00",
          q: "Sao Nam Tengkat Tong Shin Kuala Lumpur",
          dishes: [["Phở Bò 生牛肉河粉", "湯頭熬 10 小時以上", "招牌"], ["山竹鮮蝦沙拉", "", "開胃"]],
          note: "黃色洋房裡的道地越南菜，廚師來自越南本土；法式影響菜色也值得探索。武吉免登巷內的清涼休息站。" },
        { s: "mini", num: "4", zh: "阿希肉骨茶", en: "Ah Hei Bak Kut Teh・33A Medan Imbi", badge: "bib", hours: "08:30–15:30（週三休）",
          q: "Ah Hei Bak Kut Teh Medan Imbi Kuala Lumpur",
          dishes: [["藥材肉骨茶", "16 種草藥・每日清晨五點熬湯", "招牌"], ["豬肚／炸豆腐皮", "", "加料"]],
          note: "三十年老店，湯色深卻湯頭溫潤，藥材香濃；砂煲上桌保溫剛好。武吉免登鬧區旁的早午餐場。" },
        { s: "mini", num: "5", zh: "De Wan 1958", en: "Malaysian・The LINC KL, 360 Jalan Tun Razak", badge: "bib", hours: "11:00–15:30 / 18:00–21:30",
          q: "De Wan 1958 The LINC KL Jalan Tun Razak",
          dishes: [["柚子脆蝦頰沙拉", "kerabu 酸柑醬＋魚露", "前菜"], ["Bakar Bakar 炭烤海鮮／肉類", "自選主廚醬汁", "主打"]],
          note: "國民主廚 Chef Wan 的馬來料理旗艦，位於 Jalan Tun Razak 的 The LINC KL——離 TRX 車程五分鐘的東道菜。" },
        { s: "mini", num: "6", zh: "Roti by d'Tandoor", en: "North Indian・82 Jalan Damai, Keramat", badge: "bib", hours: "11:00–15:00 / 18:00–22:30",
          q: "Roti by dTandoor Jalan Damai Kuala Lumpur",
          dishes: [["Butter Chicken Masala", "", "招牌"], ["Naan 麵包", "鬆軟帶嚼勁", "必點"], ["Kulfi 冰淇淋", "", "甜點"]],
          note: "1990 年創立的 d'Tandoor 家族品牌，在 Keramat 洋房裡供應家傳配方北印度菜；部分菜色需預訂。" },
      ],
    },

    /* ============ Z3 西區 ============ */
    {
      id: "zone3", num: "Z3", alt: false,
      zh: "西區・Damansara・TTDI・Mont Kiara・Bangsar", en: "The West Side",
      chip: "MRT（Semantan / Phileo Damansara）＋ Grab 轉乘",
      brief: "Aliyaa 斯里蘭卡蟹、Gulainya 娘惹、Leen's 敘利亞菜、Lama 娘惹小盅、Nirwana 香蕉葉。",
      map: {
        vb: "0 0 900 400",
        decor: [
          { k: "road", d: "M60 300 C 260 280, 480 300, 700 260 C 790 245, 850 250, 880 245", label: "SPRINT HIGHWAY 一帶", lx: 400, ly: 345 },
          { k: "text", x: 130, y: 120, t: "MID VALLEY" },
          { k: "text", x: 820, y: 330, t: "PUSAT BANDAR DAMANSARA" },
        ],
        nodes: [
          { x: 200, y: 300, n: "1", t: "bib", l: "Nirwana 香蕉葉印度菜", s: "BANGSAR・JALAN TELAWI 3", d: "below" },
          { x: 420, y: 230, n: "2", t: "bib", l: "Aliyaa 斯里蘭卡料理", s: "BUKIT DAMANSARA", d: "below" },
          { x: 520, y: 200, n: "3", t: "bib", l: "Gulainya 娘惹家常菜", s: "PLAZA DAMANSARA", d: "above" },
          { x: 660, y: 150, n: "4", t: "bib", l: "Leen's 敘利亞／中東菜", s: "TTDI", d: "above" },
          { x: 790, y: 110, n: "5", t: "bib", l: "Lama 娘惹私房菜", s: "MONT KIARA", d: "above" },
        ],
      },
      stops: [
        { s: "mini", num: "1", zh: "Nirwana", en: "Indian・43 Jalan Telawi 3, Bangsar Baru", badge: "bib", hours: "週四–日 11:30–23:00（一至三休）",
          q: "Nirwana Jalan Telawi 3 Bangsar Kuala Lumpur",
          dishes: [["香蕉葉套餐", "白飯＋蔬菜咖哩・自由加魚/雞/羊", "招牌"], ["雞肉 Briyani", "肉嫩飯香", "熱門"]],
          note: "Bangsar 老字號香蕉葉飯，區域性印度菜道地到位；營業日有限，去之前先看日期。" },
        { s: "mini", num: "2", zh: "Aliyaa", en: "Sri Lankan・48 Jalan Medan Setia 2, Bukit Damansara", badge: "bib", hours: "12:00–15:00 / 18:00–23:00",
          q: "Aliyaa Jalan Medan Setia 2 Bukit Damansara",
          dishes: [["整隻斯里蘭卡蟹咖哩", "", "鎮店"], ["Negombo 鳳梨蝦", "", "人氣"], ["Kuliyal 香蕉葉焗飯", "", "特色"]],
          note: "Plaza Damansara 裡的斯里蘭卡名店，香料大膽直接；辣度可請廚師調整。" },
        { s: "mini", num: "3", zh: "Gulainya", en: "Peranakan・44-G Plaza Damansara, Jalan Medan Setia 2", badge: "bib", hours: "11:00–15:00 / 17:00–21:30（週一休）",
          q: "Gulainya Plaza Damansara Kuala Lumpur",
          dishes: [["羅勒奶油無骨雞", "奶油醬＋香草氣", "必點"], ["自家製醬料家常菜", "", "任選"]],
          note: "老闆親手調製所有醬料的娘惹家常菜，家族配方經過微調升級；晚上可在戶外座位吹風。" },
        { s: "mini", num: "4", zh: "Leen's", en: "Middle Eastern・136A Jalan Burhanuddin Helmi, TTDI", badge: "bib", hours: "一至五僅晚市 18:00–22:00・六日加開 12:00–15:00",
          q: "Leens Jalan Burhanuddin Helmi TTDI Kuala Lumpur",
          dishes: [["燻製鷹嘴豆泥 Smoked Hummus", "焦香辣椒油", "招牌"], ["烤羊肉串 Khashkhash", "罌粟籽辛香醬", "人氣"]],
          note: "敘利亞主廚的家庭料理店，剛出爐麵包的香氣滿室；適合多人分食。" },
        { s: "mini", num: "5", zh: "Lama", en: "Peranakan・Steppes, 32 Jalan Kiara 3, Mont Kiara", badge: "bib", hours: "11:00–21:00",
          q: "Lama Peranakan Jalan Kiara 3 Mont Kiara",
          dishes: [["Pie Tee 娘惹小盅", "脆殼＋蔬菜蝦仁＋手作辣醬", "必點"], ["斑蘭香茅茶", "免費無限續杯", "驚喜"]],
          note: "父女檔經營的娘惹私房菜，古董收藏把店裡妝成小博物館；菜色以分享為主。" },
      ],
    },

    /* ============ Z4 小印度 ============ */
    {
      id: "zone4", num: "Z4", alt: true,
      zh: "小印度・Brickfields", en: "Little India",
      chip: "KTM / LRT Tun Sambanthan 站・步行圈",
      brief: "Anak Baba 椰漿飯配薑黃炸雞、MTR 1924 南印素食百年老號。",
      map: {
        vb: "0 0 900 340",
        decor: [
          { k: "road", d: "M100 170 L 500 190 L 840 160", label: "JALAN TUN SAMBANTHAN", lx: 520, ly: 235 },
          { k: "rect", x: 110, y: 80, w: 70, h: 70, rot: 10, label: "KL SENTRAL", lx: 145, ly: 121 },
        ],
        nodes: [
          { x: 300, y: 150, n: "1", t: "bib", l: "Anak Baba 娘惹馬來菜", s: "JALAN SULTAN ABDUL SAMAD", d: "above" },
          { x: 560, y: 200, n: "2", t: "bib", l: "MTR 1924 南印素食", s: "JALAN THAMBIPILLAY", d: "below" },
        ],
      },
      stops: [
        { s: "mini", num: "1", zh: "Anak Baba", en: "Malaysian・Peranakan・159 Jalan Sultan Abdul Samad", badge: "bib", hours: "07:00–22:00",
          q: "Anak Baba Jalan Sultan Abdul Samad Brickfields",
          dishes: [["椰漿飯配薑黃炸雞", "ayam goreng kunyit＋參巴＋蕹菜", "必點"], ["南洋娘惹家常菜", "", "任選"]],
          note: "2018 年開業的小娘惹食堂，藏在小印度巷內；椰漿飯的椰香與炸雞的薑黃香是官方指南認證的國民早餐。" },
        { s: "mini", num: "2", zh: "MTR 1924", en: "South Indian Vegetarian・69 Jalan Thambipillay", badge: "bib", hours: "08:00–22:30",
          q: "MTR 1924 Jalan Thambipillay Brickfields Kuala Lumpur",
          dishes: [["Rava Idli", "粗米粉蒸糕＋馬鈴薯咖哩", "招牌"], ["Masala Dosa", "脆餅包馬鈴薯咖哩", "經典"], ["Uddin Vada", "黑扁豆炸餅", "加點"]],
          note: "近百年歷史的南印素食連鎖（源自班加羅爾 MTR），Brickfields 分店 2017 年開業即成排隊名店。" },
      ],
    },

    /* ============ Z5 北區 ============ */
    {
      id: "zone5", num: "Z5", alt: false,
      zh: "北區・Jalan Ipoh・Segambut・Kepong", en: "The North",
      chip: "Grab 為主・MRT Putrajaya 線（Jinjang / Sri Delima）可達",
      brief: "Jalan Ipoh 炭火砂煲、Hor Poh 擂茶、Hing Kee 肉骨茶（開到凌晨兩點半的宵夜場）。",
      map: {
        vb: "0 0 900 340",
        decor: [
          { k: "road", d: "M150 300 C 350 260, 550 240, 780 190", label: "JALAN KEPONG → JALAN IPOH 軸線", lx: 400, ly: 320 },
          { k: "text", x: 820, y: 260, t: "市中心 ↓" },
        ],
        nodes: [
          { x: 300, y: 180, n: "1", t: "bib", l: "Jalan Ipoh 炭火砂煲雞飯", s: "TAMAN KOK LIAN", d: "below" },
          { x: 470, y: 150, n: "2", t: "bib", l: "Hor Poh 客家擂茶", s: "SEGAMBUT", d: "above" },
          { x: 680, y: 110, n: "3", t: "bib", l: "Hing Kee 肉骨茶", s: "KEPONG・開到凌晨", d: "above" },
        ],
      },
      stops: [
        { s: "mini", num: "1", zh: "Jalan Ipoh 砂煲雞飯", en: "Street Food・7 Jalan Batu Ambar, Taman Kok Lian", badge: "bib", hours: "10:00–17:00（週三休）",
          q: "Jalan Ipoh Claypot Chicken Rice Taman Kok Lian Kuala Lumpur",
          dishes: [["炭火砂煲雞飯", "廣式臘腸＋薑", "招牌"], ["加鹹魚", "香氣升級", "老饕"]],
          note: "三十年炭火老攤，鍋底鍋巴是靈魂；白天場，與市中心砂煲雙雄各據一方。" },
        { s: "mini", num: "2", zh: "Hor Poh Cuisine", en: "Hakkanese・36 Jalan 6/38D, Taman Sri Sinar, Segambut", badge: "bib", hours: "11:00–15:00 / 17:00–21:00（週二休）",
          q: "Hor Poh Cuisine Taman Sri Sinar Segambut",
          dishes: [["客家擂茶 Hor Poh Lui Cha", "芝麻花生薄荷研磨湯", "必點"], ["荷婆餃", "豆乾蒜苗酸菜薄皮餃", "人氣"]],
          note: "二十年以上老店，把客家擂茶做得堅果香撲鼻；價格親民、天天客滿。" },
        { s: "mini", num: "3", zh: "Hing Kee 肉骨茶", en: "Malaysian・121 Jalan Kepong, Taman Usahawan", badge: "bib", hours: "15:00–02:30（周日 14:30 起）",
          q: "Hing Kee Bakuteh 121 Jalan Kepong Kuala Lumpur",
          dishes: [["清湯藥材肉骨茶", "湯頭清甜平衡", "招牌"], ["乾版辣味肉骨茶", "濃稠醬香", "雙味必點"]],
          note: "四間店屋的大排場，傍晚三點才開門、一路賣到凌晨——吉隆坡宵夜肉骨茶的代表。" },
      ],
    },

    /* ============ Z6 東南區 ============ */
    {
      id: "zone6", num: "Z6", alt: true,
      zh: "東南區・Cheras・Pandan・舊巴生路", en: "South & East",
      chip: "Grab 為主・MRT Kajang 線（Taman Connaught / Maluri）可達",
      brief: "Hai Kah Lang 海鮮米粉、7 Chai 怡保河粉、Chee Meng 海南雞飯、Minji 肉骨茶。",
      map: {
        vb: "0 0 900 340",
        decor: [
          { k: "road", d: "M700 80 C 560 160, 400 220, 180 280", label: "JALAN CHERAS ← JALAN KELANG LAMA", lx: 560, ly: 120 },
          { k: "text", x: 800, y: 60, t: "市中心 ↑" },
        ],
        nodes: [
          { x: 640, y: 110, n: "1", t: "bib", l: "Hai Kah Lang 海鮮米粉", s: "TAMAN CHERAS", d: "above" },
          { x: 500, y: 170, n: "2", t: "bib", l: "7 Chai 怡保河粉", s: "PANDAN PERDANA", d: "below" },
          { x: 240, y: 170, n: "3", t: "bib", l: "Chee Meng 海南雞飯", s: "JALAN KELANG LAMA・1965", d: "above" },
          { x: 330, y: 240, n: "4", t: "bib", l: "Minji 肉骨茶", s: "JALAN SUNGAI BESI", d: "below" },
        ],
      },
      stops: [
        { s: "mini", num: "1", zh: "Hai Kah Lang", en: "Seafood Noodles・44 Jalan Kaskas 2, Taman Cheras", badge: "bib", hours: "08:00–17:00",
          q: "Hai Kah Lang Jalan Kaskas 2 Taman Cheras Kuala Lumpur",
          dishes: [["什錦海鮮米粉湯", "老闆自家海鮮攤直供", "招牌"], ["奶白魚頭米粉湯", "", "人氣"]],
          note: "8 種麵 × 5 種湯底的自由組合；選擇困難就點人氣組合。海鮮新鮮度是本店信仰。" },
        { s: "mini", num: "2", zh: "7 Chai 怡保河粉", en: "Street Food・33 Jalan Perdana 4/1, Pandan Perdana", badge: "bib", hours: "06:30–14:30",
          q: "7 Chai Ipoh Hor Fun Pandan Perdana Kuala Lumpur",
          dishes: [["雞絲怡保河粉", "雞骨蝦頭熬湯", "招牌"], ["蝦雲吞", "", "加點"]],
          note: "清湯系河粉專門店，湯頭以雞骨與蝦頭熬成；只開上午，錯過要等明天。" },
        { s: "mini", num: "3", zh: "Chee Meng 海南雞飯", en: "Malaysian・Batu 4¼, Jalan Kelang Lama", badge: "bib", hours: "10:00–19:00",
          q: "Nasi Ayam Hainan Chee Meng Jalan Kelang Lama Kuala Lumpur",
          dishes: [["海南雞飯（白切／炸）", "1965 年家族老店", "招牌"], ["單人套餐＋花生湯", "雞油飯＋湯品", "划算"]],
          note: "第二、三代接手的舊巴生路老店；雞脂肪香飯與清甜花生湯是組合記憶點。" },
        { s: "mini", num: "4", zh: "Minji 肉骨茶", en: "Malaysian・7-6 Jalan Sungai Besi", badge: "bib", hours: "10:30–15:00 / 18:00–21:00（週二休）",
          q: "Minji Bak Kut Teh Jalan Sungai Besi Kuala Lumpur",
          dishes: [["80 年配方肉骨茶", "藥香圓潤・自然回甘", "招牌"], ["排骨／五花／肚綜合", "", "全料"]],
          note: "1940 年代路邊攤起家、三代相傳；配方八十年不變，蘸蒜蓉辣椒醬更有勁。" },
      ],
    },
  ],
};

if (typeof module !== "undefined") module.exports = GUIDE;
