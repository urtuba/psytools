import type { InventoryLocalePack } from "../../types.ts";

/**
 * Turkish locale pack for hsps — items, title and option anchors
 * reproduced from the published, validated Turkish adaptation
 * (Duyusal İşleme Hassasiyeti Ölçeği; Şengül-İnal & Sümer, 2017), as
 * distributed at nebisumer.com. The description and instructions are
 * adapted for on-screen rendering. See SOURCES.md.
 */
const pack: InventoryLocalePack = {
  "id": "hsps",
  "locale": "tr",
  "title": "Duyusal İşleme Hassasiyeti Ölçeği",
  "description": "Duyusal işleme hassasiyetini — iç ve dış uyaranların ne kadar güçlü algılanıp işlendiğini — ölçen 27 maddelik bir öz bildirim ölçeği.",
  "instructions": "Her bir maddeyi okuyun ve size ne kadar uyduğunu aşağıdaki ölçeği kullanarak belirtin.",
  "options": [
    "1 — Bana hiç uymuyor",
    "2",
    "3",
    "4 — Kısmen uyuyor",
    "5",
    "6",
    "7 — Bana tamamen uyuyor"
  ],
  "questions": {
    "hsps-1": { "text": "Güçlü uyarıcılardan (örneğin parlak ışık, yüksek ses, yoğun koku) hemen rahatsız olurum." },
    "hsps-2": { "text": "Çevremdeki fark etmesi zor detayları hemen fark ederim." },
    "hsps-3": { "text": "Etrafımdaki insanların ruh hali beni etkiler." },
    "hsps-4": { "text": "Acı veya ağrıya karşı fazla duyarlıyımdır." },
    "hsps-5": { "text": "Yoğun günlerimdeyken; yatağımda, karanlık bir odada veya yalnız kalabileceğim ve huzur bulabileceğim herhangi bir yerde kabuğuma çekilme ihtiyacı hissederim." },
    "hsps-6": { "text": "Kafeinin etkilerine karşı çok hassasımdır." },
    "hsps-7": { "text": "Parlak ışıklar, yoğun kokular, kaba kumaşlar ya da yakınımda çalan bir siren gibi şeylerden anında rahatsız olurum." },
    "hsps-8": { "text": "Zengin ve karmaşık bir iç dünyam var." },
    "hsps-9": { "text": "Şiddetli gürültüden/sesten çok çabuk rahatsız olurum." },
    "hsps-10": { "text": "Sanat ya da müzik beni derinden etkiler." },
    "hsps-11": { "text": "Bazen sinir sistemim o kadar yıpranır ki kendimi toplamak için hemen başımı alıp gitmek zorunda kalırım." },
    "hsps-12": { "text": "Dikkatli ve özenliyimdir." },
    "hsps-13": { "text": "Beklenmedik ses ve hareketlerde kolayca irkilirim." },
    "hsps-14": { "text": "Kısa zamanda çok iş yapmam gerektiğinde elim ayağıma dolanır." },
    "hsps-15": { "text": "İnsanlar bulundukları fiziksel ortamdan rahatsız olduklarında, ortamı rahat hale getirmek için ne yapılması gerektiğini tahmin ederim (ışıkları ayarlamak ya da oturma yerlerini değiştirmek gibi)." },
    "hsps-16": { "text": "İnsanlar beni aynı anda birçok şey yapmaya zorladıklarında sinirlenirim." },
    "hsps-17": { "text": "Hata yapmamak veya bir şeyleri unutmamak için çok çabalarım." },
    "hsps-18": { "text": "Şiddet içerikli filmleri ve TV programlarını izlemekten özellikle kaçınırım." },
    "hsps-19": { "text": "Etrafımda aynı anda birçok şey birden olduğunda fena halde rahatsız olurum." },
    "hsps-20": { "text": "Çok aç olmak bende konsantrasyonumun düşmesi veya ruh halimin bozulması gibi güçlü tepkilere yol açar." },
    "hsps-21": { "text": "Hayatımda değişiklik olması beni fazlasıyla etkiler/sarsar." },
    "hsps-22": { "text": "Güzel kokuları, tatları, sesleri ve sanat eserlerini hemen fark eder ve bunlardan keyif alırım." },
    "hsps-23": { "text": "Aynı anda birçok şeyin olmasından hoşlanmam." },
    "hsps-24": { "text": "Hayatımı, üzüntü veren ve beni bunaltan durumlardan kaçınacak şekilde düzenlemeye öncelik veririm." },
    "hsps-25": { "text": "Yüksek ses ya da karmaşık ortamlar gibi kuvvetli uyarıcılardan rahatsız olurum." },
    "hsps-26": { "text": "Bir yarışmada olduğumda ya da bir görevi yaparken gözlemlendiğimde, o kadar gerilir ve etkilenirim ki normalde yapacağımdan daha kötü performans sergilerim." },
    "hsps-27": { "text": "Ben çocukken, ailem veya öğretmenlerim beni hassas ya da utangaç biri olarak görürlerdi." }
  }
};

export default pack;
