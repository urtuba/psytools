import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for audit. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "audit",
  "locale": "tr",
  "title": "Alkol Kullanım Bozuklukları Tanıma Testi (AUDIT)",
  "description": "Tehlikeli ve zararlı alkol kullanımı ile olası alkol bağımlılığını taramak için DSÖ tarafından geliştirilmiş 10 maddelik bir ölçek.",
  "instructions": "Lütfen aşağıdaki soruları son 12 ay içindeki alkollü içecek kullanımınızı düşünerek yanıtlayın. Bir kadeh, bir standart içkiyi ifade eder (örneğin bir bardak bira ya da şarap veya tek ölçü yüksek alkollü içki).",
  "options": [
    "Hiçbir zaman",
    "Ayda birden az",
    "Ayda bir",
    "Haftada bir",
    "Hemen her gün"
  ],
  "questions": {
    "audit-1": {
      "text": "Ne sıklıkla alkollü içki içersiniz?",
      "options": [
        "Hiçbir zaman",
        "Ayda bir ya da daha az",
        "Ayda 2-4 kez",
        "Haftada 2-3 kez",
        "Haftada 4 ya da daha fazla"
      ]
    },
    "audit-2": {
      "text": "İçki içtiğiniz normal bir günde kaç kadeh içersiniz?",
      "options": [
        "1 ya da 2",
        "3 ya da 4",
        "5 ya da 6",
        "7 ila 9",
        "10 ya da daha fazla"
      ]
    },
    "audit-3": {
      "text": "Bir seferde altı ya da daha fazla kadeh içtiğiniz ne sıklıkla olur?"
    },
    "audit-4": {
      "text": "Geçtiğimiz yıl içinde, içmeye başladıktan sonra kendinizi durduramadığınızı ne sıklıkla fark ettiniz?"
    },
    "audit-5": {
      "text": "Geçtiğimiz yıl içinde, içki yüzünden sizden normalde beklenenleri ne sıklıkla yapamadınız?"
    },
    "audit-6": {
      "text": "Geçtiğimiz yıl içinde, yoğun içilen bir geceden sonra kendinize gelmek için sabah ilk iş olarak bir içkiye ne sıklıkla ihtiyaç duydunuz?"
    },
    "audit-7": {
      "text": "Geçtiğimiz yıl içinde, içki içtikten sonra ne sıklıkla suçluluk ya da pişmanlık duydunuz?"
    },
    "audit-8": {
      "text": "Geçtiğimiz yıl içinde, içki yüzünden bir önceki gece olanları ne sıklıkla hatırlayamadınız?"
    },
    "audit-9": {
      "text": "İçki içmeniz yüzünden siz ya da bir başkası yaralandı mı?",
      "options": [
        "Hayır",
        "Evet, ama geçen yıl içinde değil",
        "Evet, geçen yıl içinde"
      ]
    },
    "audit-10": {
      "text": "Bir yakınınız, arkadaşınız, bir doktor ya da başka bir sağlık çalışanı içki içmenizden kaygı duydu mu ya da azaltmanızı önerdi mi?",
      "options": [
        "Hayır",
        "Evet, ama geçen yıl içinde değil",
        "Evet, geçen yıl içinde"
      ]
    }
  },
  "bands": {
    "zone-1": "Bölge I: düşük risk — alkol konusunda bilgilendirme",
    "zone-2": "Bölge II: tehlikeli içme — basit öneri/danışmanlık önerilir",
    "zone-3": "Bölge III: zararlı içme — kısa danışmanlık ve izlem",
    "zone-4": "Bölge IV: olası bağımlılık — tanısal değerlendirme için yönlendirme"
  }
};

export default pack;
