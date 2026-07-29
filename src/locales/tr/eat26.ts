import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for eat26. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const frequency = ["Her zaman", "Çoğunlukla", "Sıklıkla", "Bazen", "Nadiren", "Hiçbir zaman"];

const pack: InventoryLocalePack = {
  id: "eat26",
  locale: "tr",
  title: "Yeme Tutum Testi (EAT-26)",
  description:
    "Yeme bozukluklarına özgü belirti ve kaygıları tarayan 26 maddelik bir öz bildirim ölçeği.",
  instructions:
    "Bu ölçek, profesyonel destek gerektirebilecek bir yeme bozukluğunuz olup olmadığını değerlendirmenize yardımcı olmak için hazırlanmış bir tarama aracıdır. Bir yeme bozukluğu tanısı koymak ya da profesyonel bir görüşmenin yerini almak için tasarlanmamıştır. Lütfen aşağıdaki formu olabildiğince doğru, dürüst ve eksiksiz doldurun. Doğru ya da yanlış yanıt yoktur. Verdiğiniz tüm yanıtlar gizlidir.",
  options: frequency,
  questions: {
    "eat26-1": { text: "Kilolu olmaktan ödüm kopuyor." },
    "eat26-2": { text: "Acıktığımda yemek yemekten kaçınıyorum." },
    "eat26-3": { text: "Kendimi yemek düşüncesine kaptırmış buluyorum." },
    "eat26-4": { text: "Durduramayacağımı hissettiğim tıkınma nöbetleri geçirdim." },
    "eat26-5": { text: "Yiyeceğimi küçük parçalara ayırıyorum." },
    "eat26-6": { text: "Yediğim yiyeceklerin kalori içeriğinin farkındayım." },
    "eat26-7": {
      text: "Karbonhidrat içeriği yüksek yiyeceklerden özellikle kaçınıyorum (ekmek, pirinç, patates vb.)",
    },
    "eat26-8": { text: "Başkalarının daha çok yememi tercih ettiğini hissediyorum." },
    "eat26-9": { text: "Yemek yedikten sonra kusuyorum." },
    "eat26-10": { text: "Yemek yedikten sonra aşırı suçluluk duyuyorum." },
    "eat26-11": { text: "Daha zayıf olma isteği aklımdan çıkmıyor." },
    "eat26-12": { text: "Egzersiz yaparken yaktığım kalorileri düşünüyorum." },
    "eat26-13": { text: "Başkaları çok zayıf olduğumu düşünüyor." },
    "eat26-14": { text: "Vücudumda yağ olduğu düşüncesi aklımdan çıkmıyor." },
    "eat26-15": { text: "Yemeklerimi başkalarından daha uzun sürede yiyorum." },
    "eat26-16": { text: "Şeker içeren yiyeceklerden kaçınıyorum." },
    "eat26-17": { text: "Diyet yiyecekleri tüketiyorum." },
    "eat26-18": { text: "Yemeğin hayatımı kontrol ettiğini hissediyorum." },
    "eat26-19": { text: "Yemek konusunda kendimi denetleyebiliyorum." },
    "eat26-20": { text: "Başkalarının bana yemem için baskı yaptığını hissediyorum." },
    "eat26-21": { text: "Yemeğe gereğinden fazla zaman ve düşünce ayırıyorum." },
    "eat26-22": { text: "Tatlı yedikten sonra huzursuz oluyorum." },
    "eat26-23": { text: "Diyet yapma davranışında bulunuyorum." },
    "eat26-24": { text: "Midemin boş olmasından hoşlanıyorum." },
    "eat26-25": { text: "Yemeklerden sonra kusma dürtüsü duyuyorum." },
    "eat26-26": { text: "Yeni ve ağır yiyecekleri denemekten hoşlanıyorum.", options: frequency },
  },
  bands: {
    "below-cutoff": "Yönlendirme eşiğinin altında",
    "at-or-above-cutoff":
      "Yönlendirme eşiğinde ya da üzerinde — yetkin bir uzman tarafından değerlendirilmeniz önerilir",
  },
};

export default pack;
