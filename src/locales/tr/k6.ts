import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for k6. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "k6",
  "locale": "tr",
  "title": "Kessler Psikolojik Sıkıntı Ölçeği (K6)",
  "description": "Son 30 gün içindeki özgül olmayan psikolojik sıkıntıyı tarayan 6 maddelik bir ölçek.",
  "instructions": "Aşağıdaki sorular son 30 gün içinde kendinizi nasıl hissettiğinizle ilgilidir.",
  "options": [
    "Hiçbir zaman",
    "Nadiren",
    "Bazen",
    "Çoğunlukla",
    "Her zaman"
  ],
  "questions": {
    "k6-1": {
      "text": "Son 30 gün içinde ne sıklıkla kendinizi gergin hissettiniz?"
    },
    "k6-2": {
      "text": "Son 30 gün içinde ne sıklıkla kendinizi umutsuz hissettiniz?"
    },
    "k6-3": {
      "text": "Son 30 gün içinde ne sıklıkla huzursuz ya da kıpır kıpır hissettiniz?"
    },
    "k6-4": {
      "text": "Son 30 gün içinde ne sıklıkla hiçbir şeyin sizi neşelendiremeyeceği kadar çökkün hissettiniz?"
    },
    "k6-5": {
      "text": "Son 30 gün içinde ne sıklıkla her şeyin bir çaba gerektirdiğini hissettiniz?"
    },
    "k6-6": {
      "text": "Son 30 gün içinde ne sıklıkla kendinizi değersiz hissettiniz?"
    }
  },
  "bands": {
    "low": "Düşük düzeyde psikolojik sıkıntı",
    "moderate": "Orta düzeyde psikolojik sıkıntı",
    "serious": "Ciddi düzeyde psikolojik sıkıntı"
  }
};

export default pack;
