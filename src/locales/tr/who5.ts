import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for who5. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "who5",
  "locale": "tr",
  "title": "WHO-5 İyilik Hali İndeksi",
  "description": "Son iki hafta içindeki öznel psikolojik iyilik halini ölçen 5 maddelik bir öz bildirim ölçeği. Yüksek puan daha iyi bir iyilik haline işaret eder.",
  "instructions": "Lütfen aşağıdaki beş ifadenin her biri için, son iki hafta içinde kendinizi nasıl hissettiğinize en yakın olan seçeneği işaretleyin.",
  "options": [
    "Hiçbir zaman",
    "Bazen",
    "Zamanın yarısından az",
    "Zamanın yarısından çok",
    "Çoğu zaman",
    "Her zaman"
  ],
  "questions": {
    "who5-1": {
      "text": "Kendimi neşeli ve keyifli hissettim"
    },
    "who5-2": {
      "text": "Kendimi sakin ve rahatlamış hissettim"
    },
    "who5-3": {
      "text": "Kendimi aktif ve dinç hissettim"
    },
    "who5-4": {
      "text": "Uyandığımda kendimi dinlenmiş ve zinde hissettim"
    },
    "who5-5": {
      "text": "Günlük yaşamım ilgimi çeken şeylerle doluydu"
    }
  },
  "bands": {
    "low": "Düşük iyilik hali — olası depresyona işaret eder, değerlendirme önerilir",
    "reduced": "Azalmış iyilik hali — depresyon taraması önerilir",
    "good": "İyi düzeyde iyilik hali"
  }
};

export default pack;
