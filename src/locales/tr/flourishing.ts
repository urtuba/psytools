import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for flourishing. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "flourishing",
  "locale": "tr",
  "title": "Gelişkinlik Ölçeği (FS)",
  "description": "İlişkiler, öz saygı, amaç ve iyimserlik gibi önemli alanlarda kişinin kendini algıladığı başarıyı değerlendiren 8 maddelik özet bir ölçek.",
  "instructions": "Aşağıda katılabileceğiniz ya da katılmayabileceğiniz sekiz ifade yer almaktadır. Her bir maddeye katılım düzeyinizi belirtiniz.",
  "options": [
    "Kesinlikle katılmıyorum",
    "Katılmıyorum",
    "Biraz katılmıyorum",
    "Ne katılıyorum ne katılmıyorum",
    "Biraz katılıyorum",
    "Katılıyorum",
    "Kesinlikle katılıyorum"
  ],
  "questions": {
    "flourishing-1": {
      "text": "Amaçlı ve anlamlı bir yaşam sürüyorum."
    },
    "flourishing-2": {
      "text": "Sosyal ilişkilerim destekleyici ve tatmin edici."
    },
    "flourishing-3": {
      "text": "Günlük etkinliklerime bağlı ve ilgiliyim."
    },
    "flourishing-4": {
      "text": "Başkalarının mutluluğuna ve iyi oluşuna aktif olarak katkıda bulunuyorum."
    },
    "flourishing-5": {
      "text": "Benim için önemli olan etkinliklerde yetkin ve yetenekliyim."
    },
    "flourishing-6": {
      "text": "İyi bir insanım ve iyi bir yaşam sürüyorum."
    },
    "flourishing-7": {
      "text": "Geleceğim konusunda iyimserim."
    },
    "flourishing-8": {
      "text": "İnsanlar bana saygı duyuyor."
    }
  }
};

export default pack;
