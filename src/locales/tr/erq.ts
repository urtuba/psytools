import type { InventoryLocalePack } from "../../types.ts";

/**
 * Turkish locale pack for erq. AI translation (Anthropic Claude,
 * claude-fable-5), unverified. A validated Turkish adaptation exists
 * (Ulaşan Özgüle, 2011) but uses a 6-point response scale and a
 * different item order, so it cannot be represented as a locale pack of
 * this definition — see SOURCES.md.
 */
const pack: InventoryLocalePack = {
  "id": "erq",
  "locale": "tr",
  "title": "Duygu Düzenleme Anketi (ERQ)",
  "description": "İki duygu düzenleme stratejisinin — bilişsel yeniden değerlendirme ve dışavurumu bastırma — alışkanlık düzeyindeki kullanımını ölçen 10 maddelik bir ölçek.",
  "instructions": "Size duygusal yaşamınızla, özellikle duygularınızı nasıl kontrol ettiğinizle (yani düzenleyip yönettiğinizle) ilgili bazı sorular sormak istiyoruz. Aşağıdaki sorular duygusal yaşamınızın iki ayrı yönüyle ilgilidir. Biri duygusal deneyiminiz, yani içinizde ne hissettiğinizdir. Diğeri ise duygusal ifadeniz, yani duygularınızı konuşmanızla, jestlerinizle ya da davranışlarınızla nasıl gösterdiğinizdir. Aşağıdaki sorulardan bazıları birbirine benzer görünse de önemli açılardan birbirinden farklıdır.",
  "options": [
    "1 — Kesinlikle katılmıyorum",
    "2",
    "3",
    "4 — Kararsızım",
    "5",
    "6",
    "7 — Kesinlikle katılıyorum"
  ],
  "questions": {
    "erq-1": { "text": "Daha fazla olumlu duygu (sevinç ya da eğlence gibi) hissetmek istediğimde, düşündüğüm şeyi değiştiririm." },
    "erq-2": { "text": "Duygularımı kendime saklarım." },
    "erq-3": { "text": "Daha az olumsuz duygu (üzüntü ya da öfke gibi) hissetmek istediğimde, düşündüğüm şeyi değiştiririm." },
    "erq-4": { "text": "Olumlu duygular hissettiğimde, onları ifade etmemeye dikkat ederim." },
    "erq-5": { "text": "Stresli bir durumla karşılaştığımda, sakin kalmama yardımcı olacak bir şekilde düşünmeye çalışırım." },
    "erq-6": { "text": "Duygularımı, onları ifade etmeyerek kontrol ederim." },
    "erq-7": { "text": "Daha fazla olumlu duygu hissetmek istediğimde, içinde bulunduğum durum hakkındaki düşünce biçimimi değiştiririm." },
    "erq-8": { "text": "Duygularımı, içinde bulunduğum durum hakkındaki düşünce biçimimi değiştirerek kontrol ederim." },
    "erq-9": { "text": "Olumsuz duygular hissettiğimde, onları ifade etmediğimden emin olurum." },
    "erq-10": { "text": "Daha az olumsuz duygu hissetmek istediğimde, içinde bulunduğum durum hakkındaki düşünce biçimimi değiştiririm." }
  },
  "subscales": {
    "reappraisal": { "label": "Bilişsel yeniden değerlendirme" },
    "suppression": { "label": "Dışavurumu bastırma" }
  }
};

export default pack;
