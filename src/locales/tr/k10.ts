import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for k10. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "k10",
  "locale": "tr",
  "title": "Kessler Psikolojik Sıkıntı Ölçeği (K10)",
  "description": "Son 30 gün içindeki özgül olmayan psikolojik sıkıntıyı tarayan 10 maddelik bir ölçek.",
  "instructions": "Aşağıdaki sorular son 30 gün içinde kendinizi nasıl hissettiğinizle ilgilidir.",
  "options": [
    "Hiçbir zaman",
    "Nadiren",
    "Bazen",
    "Çoğunlukla",
    "Her zaman"
  ],
  "questions": {
    "k10-1": {
      "text": "Yeterli bir sebep olmaksızın ne sıklıkla kendinizi bitkin hissettiniz?"
    },
    "k10-2": {
      "text": "Ne sıklıkla kendinizi gergin hissettiniz?"
    },
    "k10-3": {
      "text": "Ne sıklıkla hiçbir şeyin sizi sakinleştiremeyeceği kadar gergin hissettiniz?"
    },
    "k10-4": {
      "text": "Ne sıklıkla kendinizi umutsuz hissettiniz?"
    },
    "k10-5": {
      "text": "Ne sıklıkla huzursuz ya da kıpır kıpır hissettiniz?"
    },
    "k10-6": {
      "text": "Ne sıklıkla yerinizde duramayacak kadar huzursuz hissettiniz?"
    },
    "k10-7": {
      "text": "Ne sıklıkla kendinizi çökkün hissettiniz?"
    },
    "k10-8": {
      "text": "Ne sıklıkla her şeyin bir çaba gerektirdiğini hissettiniz?"
    },
    "k10-9": {
      "text": "Ne sıklıkla hiçbir şeyin sizi neşelendiremeyeceği kadar üzgün hissettiniz?"
    },
    "k10-10": {
      "text": "Ne sıklıkla kendinizi değersiz hissettiniz?"
    }
  },
  "bands": {
    "low": "İyi olma olasılığı yüksek",
    "mild": "Hafif düzeyde psikolojik sıkıntı",
    "moderate": "Orta düzeyde psikolojik sıkıntı",
    "severe": "Şiddetli düzeyde psikolojik sıkıntı"
  }
};

export default pack;
