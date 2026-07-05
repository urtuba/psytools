import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for phq9. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "phq9",
  "locale": "tr",
  "title": "Hasta Sağlığı Anketi (PHQ-9)",
  "description": "Depresyonu taramak ve şiddetini ölçmek için kullanılan 9 maddelik bir öz bildirim ölçeği.",
  "instructions": "Son 2 hafta içinde, aşağıdaki sorunlardan herhangi biri sizi ne sıklıkta rahatsız etti?",
  "options": [
    "Hiç",
    "Birkaç gün",
    "Günlerin yarısından fazlasında",
    "Hemen hemen her gün"
  ],
  "questions": {
    "phq9-1": {
      "text": "İşleri yapmaya karşı çok az ilgi ya da zevk duyma"
    },
    "phq9-2": {
      "text": "Kendini kederli, çökkün ya da umutsuz hissetme"
    },
    "phq9-3": {
      "text": "Uykuya dalmada ya da uykuyu sürdürmede güçlük ya da çok fazla uyuma"
    },
    "phq9-4": {
      "text": "Kendini yorgun hissetme ya da çok az enerjiye sahip olma"
    },
    "phq9-5": {
      "text": "İştahsızlık ya da aşırı yeme"
    },
    "phq9-6": {
      "text": "Kendiniz hakkında kötü hissetme — kendinizi başarısız biri olarak görme ya da kendinizi veya ailenizi hayal kırıklığına uğrattığınızı düşünme"
    },
    "phq9-7": {
      "text": "Gazete okumak ya da televizyon seyretmek gibi işlere konsantre olmada güçlük"
    },
    "phq9-8": {
      "text": "Diğer insanların fark edebileceği kadar yavaş hareket etme ya da yavaş konuşma? Ya da tam tersi — her zamankinden çok daha fazla hareket edecek kadar kıpır kıpır ya da huzursuz olma"
    },
    "phq9-9": {
      "text": "Ölmüş olmanın ya da kendinize bir şekilde zarar vermenin daha iyi olacağına dair düşünceler"
    }
  },
  "bands": {
    "minimal": "Minimal depresyon",
    "mild": "Hafif depresyon",
    "moderate": "Orta düzeyde depresyon",
    "moderately-severe": "Orta-şiddetli düzeyde depresyon",
    "severe": "Şiddetli depresyon"
  },
  "flags": {
    "suicidality": "Kendine zarar verme ya da intihar düşüncesi bildirildi (9. madde) — klinik değerlendirme gerektirir"
  }
};

export default pack;
