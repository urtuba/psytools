import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for gad7. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "gad7",
  "locale": "tr",
  "title": "Yaygın Anksiyete Bozukluğu Ölçeği (GAD-7)",
  "description": "Yaygın anksiyeteyi taramak ve şiddetini ölçmek için kullanılan 7 maddelik bir öz bildirim ölçeği.",
  "instructions": "Son 2 hafta içinde, aşağıdaki sorunlardan herhangi biri sizi ne sıklıkta rahatsız etti?",
  "options": [
    "Hiç",
    "Birkaç gün",
    "Günlerin yarısından fazlasında",
    "Hemen hemen her gün"
  ],
  "questions": {
    "gad7-1": {
      "text": "Sinirli, kaygılı ya da çok gergin hissetme"
    },
    "gad7-2": {
      "text": "Endişelenmeyi durduramama ya da kontrol edememe"
    },
    "gad7-3": {
      "text": "Farklı konular hakkında çok fazla endişelenme"
    },
    "gad7-4": {
      "text": "Gevşeyip rahatlamada güçlük"
    },
    "gad7-5": {
      "text": "Yerinde duramayacak kadar huzursuz olma"
    },
    "gad7-6": {
      "text": "Çabuk kızma ya da kolayca sinirlenir olma"
    },
    "gad7-7": {
      "text": "Sanki çok kötü bir şey olacakmış gibi korkuya kapılma"
    }
  },
  "bands": {
    "minimal": "Minimal anksiyete",
    "mild": "Hafif anksiyete",
    "moderate": "Orta düzeyde anksiyete",
    "severe": "Şiddetli anksiyete"
  }
};

export default pack;
