import type { InventoryLocalePack } from "../../types.ts";

/**
 * Turkish locale pack for ecr-r — reproduced from the published, validated
 * Turkish adaptation (YİYE-II; Selçuk, Günaydın, Sümer & Uysal, 2005), as
 * distributed at nebisumer.com. The Turkish source presents the same 36
 * items interleaved (odd = anxiety, even = avoidance); here each wording
 * is attached to its matching item in the original English order. Title,
 * items and option anchors are reproduced; the description and the final
 * instruction sentence are adapted for on-screen rendering. See SOURCES.md.
 */
const pack: InventoryLocalePack = {
  "id": "ecr-r",
  "locale": "tr",
  "title": "Yakın İlişkilerde Yaşantılar Envanteri-II (YİYE-II)",
  "description": "Yetişkin romantik bağlanmayı kaygı ve kaçınma boyutlarında ölçen 36 maddelik bir öz bildirim envanteri.",
  "instructions": "Aşağıdaki maddeler romantik ilişkilerinizde hissettiğiniz duygularla ilgilidir. Bu araştırmada sizin ilişkinizde yalnızca şu anda değil, genel olarak neler olduğuyla ya da neler yaşadığınızla ilgilenmekteyiz. Maddelerde sözü geçen \"birlikte olduğum kişi\" ifadesi ile romantik ilişkide bulunduğunuz kişi kastedilmektedir. Eğer halihazırda bir romantik ilişki içerisinde değilseniz, aşağıdaki maddeleri bir ilişki içinde olduğunuzu varsayarak cevaplandırınız. Her bir maddenin ilişkilerinizdeki duygu ve düşüncelerinizi ne oranda yansıttığını belirtiniz.",
  "options": [
    "1 — Hiç katılmıyorum",
    "2",
    "3",
    "4 — Kararsızım / fikrim yok",
    "5",
    "6",
    "7 — Tamamen katılıyorum"
  ],
  "questions": {
    "ecr-r-1": { "text": "Birlikte olduğum kişinin sevgisini kaybetmekten korkarım." },
    "ecr-r-2": { "text": "Sıklıkla, birlikte olduğum kişinin artık benimle olmak istemeyeceği korkusuna kapılırım." },
    "ecr-r-3": { "text": "Sıklıkla, birlikte olduğum kişinin beni gerçekten sevmediği kaygısına kapılırım." },
    "ecr-r-4": { "text": "Romantik ilişkide olduğum kişilerin beni, benim onları önemsediğim kadar önemsemeyeceklerinden endişe duyarım." },
    "ecr-r-5": { "text": "Sıklıkla, birlikte olduğum kişinin bana duyduğu hislerin benim ona duyduğum hisler kadar güçlü olmasını isterim." },
    "ecr-r-6": { "text": "İlişkilerimi kafama çok takarım." },
    "ecr-r-7": { "text": "Benden uzakta olduğunda, birlikte olduğum kişinin başka birine ilgi duyabileceği korkusuna kapılırım." },
    "ecr-r-8": { "text": "Romantik ilişkide olduğum kişilere duygularımı gösterdiğimde, onların benim için aynı şeyleri hissetmeyeceğinden korkarım." },
    "ecr-r-9": { "text": "Birlikte olduğum kişinin beni terk edeceğinden pek endişe duymam." },
    "ecr-r-10": { "text": "Romantik ilişkide olduğum kişi kendimden şüphe etmeme neden olur." },
    "ecr-r-11": { "text": "Terk edilmekten pek korkmam." },
    "ecr-r-12": { "text": "Birlikte olduğum kişinin, bana benim istediğim kadar yakınlaşmak istemediğini düşünürüm." },
    "ecr-r-13": { "text": "Romantik ilişkide olduğum kişiler bazen bana olan duygularını sebepsiz yere değiştirirler." },
    "ecr-r-14": { "text": "Çok yakın olma arzum bazen insanları korkutup uzaklaştırır." },
    "ecr-r-15": { "text": "Romantik ilişkide olduğum bir kişi beni yakından tanıdıkça, \"gerçek ben\"den hoşlanmayacağından korkarım." },
    "ecr-r-16": { "text": "Birlikte olduğum kişiden ihtiyaç duyduğum şefkat ve desteği görememek beni öfkelendirir." },
    "ecr-r-17": { "text": "Başka insanlara denk olamamaktan endişe duyarım." },
    "ecr-r-18": { "text": "Birlikte olduğum kişi beni sadece kızgın olduğumda önemser." },
    "ecr-r-19": { "text": "Gerçekte ne hissettiğimi birlikte olduğum kişiye göstermemeyi tercih ederim." },
    "ecr-r-20": { "text": "Özel duygu ve düşüncelerimi birlikte olduğum kişiyle paylaşmak konusunda kendimi rahat hissederim." },
    "ecr-r-21": { "text": "Romantik ilişkide olduğum kişilere güvenip inanmak konusunda kendimi rahat bırakmakta zorlanırım." },
    "ecr-r-22": { "text": "Romantik ilişkide olduğum kişilere yakın olma konusunda çok rahatımdır." },
    "ecr-r-23": { "text": "Romantik ilişkide olduğum kişilere açılma konusunda kendimi rahat hissetmem." },
    "ecr-r-24": { "text": "Romantik ilişkide olduğum kişilere fazla yakın olmamayı tercih ederim." },
    "ecr-r-25": { "text": "Romantik ilişkide olduğum kişi benimle çok yakın olmak istediğinde rahatsızlık duyarım." },
    "ecr-r-26": { "text": "Birlikte olduğum kişiyle kolayca yakınlaşabilirim." },
    "ecr-r-27": { "text": "Birlikte olduğum kişiyle yakınlaşmak bana zor gelmez." },
    "ecr-r-28": { "text": "Genellikle, birlikte olduğum kişiyle sorunlarımı ve kaygılarımı tartışırım." },
    "ecr-r-29": { "text": "Zor zamanlarımda, romantik ilişkide olduğum kişiden yardım istemek bana iyi gelir." },
    "ecr-r-30": { "text": "Birlikte olduğum kişiye hemen hemen her şeyi anlatırım." },
    "ecr-r-31": { "text": "Başımdan geçenleri birlikte olduğum kişiyle konuşurum." },
    "ecr-r-32": { "text": "Birlikte olduğum kişiler benimle çok yakınlaştığında gergin hissederim." },
    "ecr-r-33": { "text": "Romantik ilişkide olduğum kişilere güvenip inanma konusunda rahatımdır." },
    "ecr-r-34": { "text": "Romantik ilişkide olduğum kişiye güvenip inanmak benim için kolaydır." },
    "ecr-r-35": { "text": "Birlikte olduğum kişiye şefkat göstermek benim için kolaydır." },
    "ecr-r-36": { "text": "Birlikte olduğum kişi beni ve ihtiyaçlarımı gerçekten anlar." }
  },
  "subscales": {
    "anxiety": { "label": "Kaygılı bağlanma" },
    "avoidance": { "label": "Kaçınmacı bağlanma" }
  }
};

export default pack;
