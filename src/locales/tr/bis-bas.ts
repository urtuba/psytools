import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for bis-bas. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "bis-bas",
  "locale": "tr",
  "title": "IPIP BIS/BAS Ölçekleri",
  "description": "Davranışsal ketleme ve harekete geçirme yapılarına göre anahtarlanmış Uluslararası Kişilik Madde Havuzu (IPIP) maddelerinden oluşan, yaklaşma ve kaçınma motivasyonunu ölçen 36 maddelik kamu malı bir ölçek: cezaya duyarlılık (BIS) ve ödüle duyarlılığın üç yönü (BAS dürtü, eğlence arayışı ve ödül tepkiselliği).",
  "instructions": "Kendinizi gelecekte olmak istediğiniz gibi değil, şu anda genel olarak olduğunuz gibi tanımlayın. Her ifadenin sizi ne kadar doğru tanımladığını belirtin.",
  "options": [
    "Bana hiç uymuyor",
    "Bana pek uymuyor",
    "Ne uyuyor ne uymuyor",
    "Bana oldukça uyuyor",
    "Bana tamamen uyuyor"
  ],
  "questions": {
    "bis-bas-1": {
      "text": "İnsanların benim hakkımda ne düşündüğünü merak ederim"
    },
    "bis-bas-2": {
      "text": "Sürekli bir şeyler için endişelenirim"
    },
    "bis-bas-3": {
      "text": "Sonradan önemsiz olduğu ortaya çıkan şeyler için sık sık endişelenirim"
    },
    "bis-bas-4": {
      "text": "Yanlış bir şey yapacağımdan korkarım"
    },
    "bis-bas-5": {
      "text": "Kolayca incinirim"
    },
    "bis-bas-6": {
      "text": "Tehlike olduğunda paniklemeye başlarım"
    },
    "bis-bas-7": {
      "text": "Olayların altında ezilirim"
    },
    "bis-bas-8": {
      "text": "Kolayca strese girerim"
    },
    "bis-bas-9": {
      "text": "Nadiren endişelenirim"
    },
    "bis-bas-10": {
      "text": "Kolay kolay utanmam"
    },
    "bis-bas-11": {
      "text": "Kendiliğinden davranmayı severim"
    },
    "bis-bas-12": {
      "text": "Başkalarını gerçekten maceralı ya da çılgınca bir şey yapmaya ikna ettim"
    },
    "bis-bas-13": {
      "text": "Her şeyi bir kez denemeye razıyım"
    },
    "bis-bas-14": {
      "text": "Bir anlık hevesle hareket etmeyi severim"
    },
    "bis-bas-15": {
      "text": "Heyecan verici biçimde öngörülemez arkadaşları tercih ederim"
    },
    "bis-bas-16": {
      "text": "Çılgınca şeyler yaparım"
    },
    "bis-bas-17": {
      "text": "Pervasız olmaktan hoşlanırım"
    },
    "bis-bas-18": {
      "text": "Asla yamaç paraşütü ya da bungee jumping yapmam"
    },
    "bis-bas-19": {
      "text": "Aptalca davranmaktan nadiren keyif alırım"
    },
    "bis-bas-20": {
      "text": "Tehlikeli durumlardan kaçınırım"
    },
    "bis-bas-21": {
      "text": "Yönetimi elimde tutmak isterim"
    },
    "bis-bas-22": {
      "text": "Başkalarının başarılarını geçmeye çalışırım"
    },
    "bis-bas-23": {
      "text": "Vücudumu göstermeyi severim"
    },
    "bis-bas-24": {
      "text": "Kuralları nasıl aşacağımı bilirim"
    },
    "bis-bas-25": {
      "text": "Güçlü bir güç ihtiyacım vardır"
    },
    "bis-bas-26": {
      "text": "İdareyi ele alırım"
    },
    "bis-bas-27": {
      "text": "Başarmak için kendimi çok zorlarım"
    },
    "bis-bas-28": {
      "text": "Başarmak için pek istekli değilim"
    },
    "bis-bas-29": {
      "text": "Sıra dışı biri değilim"
    },
    "bis-bas-30": {
      "text": "İlgi odağı olmaktan nefret ederim"
    },
    "bis-bas-31": {
      "text": "Belirgin bir sebep olmadan heyecanlı ya da mutlu hissederim"
    },
    "bis-bas-32": {
      "text": "Başkaları kutlama yaparken ben de heyecana kapılırım"
    },
    "bis-bas-33": {
      "text": "İncinmiş duyguları yatıştırmaya can atarım"
    },
    "bis-bas-34": {
      "text": "Öyle mutlu ya da enerjik olurum ki neredeyse başım döner"
    },
    "bis-bas-35": {
      "text": "Nadiren heyecana kapılırım"
    },
    "bis-bas-36": {
      "text": "Bir şeyler için heyecanlanmam"
    }
  },
  "subscales": {
    "bis-anxiety": {
      "label": "BIS — Davranışsal ketleme (kaygı)"
    },
    "bas-fun-seeking": {
      "label": "BAS — Eğlence arayışı"
    },
    "bas-drive": {
      "label": "BAS — Dürtü"
    },
    "bas-reward-responsiveness": {
      "label": "BAS — Ödül tepkiselliği"
    }
  }
};

export default pack;
