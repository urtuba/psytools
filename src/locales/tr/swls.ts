import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for swls. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "swls",
  "locale": "tr",
  "title": "Yaşam Doyumu Ölçeği (SWLS)",
  "description": "Genel yaşam doyumunu değerlendiren 5 maddelik bir ölçek.",
  "instructions": "Aşağıda katılabileceğiniz ya da katılmayabileceğiniz beş ifade yer almaktadır. Her bir maddeye katılım düzeyinizi belirtiniz. Lütfen yanıtlarınızda açık ve dürüst olunuz.",
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
    "swls-1": {
      "text": "Yaşamım çoğu bakımdan ideallerime yakındır."
    },
    "swls-2": {
      "text": "Yaşam koşullarım mükemmeldir."
    },
    "swls-3": {
      "text": "Yaşamımdan memnunum."
    },
    "swls-4": {
      "text": "Şimdiye kadar yaşamda istediğim önemli şeylere ulaştım."
    },
    "swls-5": {
      "text": "Yaşamımı yeniden yaşayabilseydim, hemen hemen hiçbir şeyi değiştirmezdim."
    }
  },
  "bands": {
    "extremely-dissatisfied": "Son derece memnuniyetsiz",
    "dissatisfied": "Memnuniyetsiz",
    "slightly-dissatisfied": "Hafif düzeyde memnuniyetsiz",
    "neutral": "Nötr",
    "slightly-satisfied": "Hafif düzeyde memnun",
    "satisfied": "Memnun",
    "extremely-satisfied": "Son derece memnun"
  }
};

export default pack;
