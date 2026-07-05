import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for asrs6. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "asrs6",
  "locale": "tr",
  "title": "Erişkin DEHB Kendi Bildirim Ölçeği (ASRS-v1.1) Tarama Formu",
  "description": "DSÖ'nün 18 maddelik tam ASRS ölçeğinden türetilmiş, erişkin dikkat eksikliği/hiperaktivite bozukluğu için 6 maddelik bir tarama aracı.",
  "instructions": "Her soruyu yanıtlarken, son 6 ay içinde kendinizi nasıl hissettiğinizi ve nasıl davrandığınızı en iyi tanımlayan seçeneği işaretleyin.",
  "options": [
    "Hiçbir zaman",
    "Nadiren",
    "Bazen",
    "Sık sık",
    "Çok sık"
  ],
  "questions": {
    "asrs6-1": {
      "text": "Bir işin zor kısımlarını tamamladıktan sonra, son ayrıntıları toparlayıp işi bitirmekte ne sıklıkla güçlük yaşarsınız?"
    },
    "asrs6-2": {
      "text": "Organizasyon gerektiren bir iş yapmanız gerektiğinde, işleri sıraya koymakta ne sıklıkla güçlük çekersiniz?"
    },
    "asrs6-3": {
      "text": "Randevularınızı ya da yükümlülüklerinizi hatırlamakta ne sıklıkla güçlük çekersiniz?"
    },
    "asrs6-4": {
      "text": "Çok fazla düşünmeyi gerektiren bir işiniz olduğunda, başlamayı ne sıklıkla erteler ya da başlamaktan kaçınırsınız?"
    },
    "asrs6-5": {
      "text": "Uzun süre oturmanız gerektiğinde, ne sıklıkla ellerinizi ya da ayaklarınızı kıpırdatır veya yerinizde kımıldanırsınız?"
    },
    "asrs6-6": {
      "text": "Ne sıklıkla, sanki bir motor tarafından sürülüyormuşçasına kendinizi aşırı hareketli ve bir şeyler yapmaya zorlanmış hissedersiniz?"
    }
  },
  "bands": {
    "negative": "Belirtiler erişkin DEHB ile uyumlu değil",
    "positive": "Belirtiler erişkin DEHB ile yüksek düzeyde uyumlu — ileri değerlendirme gerekir"
  }
};

export default pack;
