import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for rses. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "rses",
  "locale": "tr",
  "title": "Rosenberg Benlik Saygısı Ölçeği (RSES)",
  "description": "Kişinin kendine yönelik hem olumlu hem de olumsuz duygularını ölçerek genel öz değerini değerlendiren 10 maddelik bir ölçek.",
  "instructions": "Aşağıda kendinize dair genel duygularınızla ilgili bir dizi ifade yer almaktadır. Lütfen her ifadeye ne derece katıldığınızı ya da katılmadığınızı belirtiniz.",
  "options": [
    "Kesinlikle katılmıyorum",
    "Katılmıyorum",
    "Katılıyorum",
    "Kesinlikle katılıyorum"
  ],
  "questions": {
    "rses-1": {
      "text": "Genel olarak kendimden memnunum."
    },
    "rses-2": {
      "text": "Bazen hiç iyi olmadığımı düşünüyorum."
    },
    "rses-3": {
      "text": "Birçok iyi özelliğimin olduğunu düşünüyorum."
    },
    "rses-4": {
      "text": "İşleri çoğu insan kadar iyi yapabiliyorum."
    },
    "rses-5": {
      "text": "Gurur duyacak çok fazla şeyim olmadığını düşünüyorum."
    },
    "rses-6": {
      "text": "Bazen kesinlikle işe yaramaz hissediyorum."
    },
    "rses-7": {
      "text": "En azından başkalarıyla eşit düzeyde, değerli bir insan olduğumu düşünüyorum."
    },
    "rses-8": {
      "text": "Kendime karşı daha fazla saygı duyabilmeyi isterdim."
    },
    "rses-9": {
      "text": "Genel olarak, kendimi başarısız biri olarak görme eğilimindeyim."
    },
    "rses-10": {
      "text": "Kendime karşı olumlu bir tutum sergiliyorum."
    }
  },
  "bands": {
    "low": "Düşük benlik saygısı",
    "normal": "Normal aralıkta",
    "high": "Yüksek benlik saygısı"
  }
};

export default pack;
