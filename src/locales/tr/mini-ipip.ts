import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for mini-ipip. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "mini-ipip",
  "locale": "tr",
  "title": "Mini-IPIP Beş Faktör Kişilik Ölçeği",
  "description": "Uluslararası Kişilik Madde Havuzu'ndan (IPIP) türetilmiş, Beş Faktör kişilik özelliklerini (dışadönüklük, uyumluluk, sorumluluk, duygusal dengesizlik, deneyime açıklık) ölçen 20 maddelik kamu malı bir ölçek.",
  "instructions": "Kendinizi gelecekte olmak istediğiniz gibi değil, şu anda genel olarak olduğunuz gibi tanımlayın. Her ifadenin sizi ne kadar doğru tanımladığını belirtin.",
  "options": [
    "Bana hiç uymuyor",
    "Bana pek uymuyor",
    "Ne uyuyor ne uymuyor",
    "Bana oldukça uyuyor",
    "Bana tamamen uyuyor"
  ],
  "questions": {
    "mini-ipip-1": {
      "text": "Bulunduğum ortamın neşe kaynağıyımdır"
    },
    "mini-ipip-2": {
      "text": "Başkalarının duygularını paylaşırım"
    },
    "mini-ipip-3": {
      "text": "Günlük işlerimi hemen hallederim"
    },
    "mini-ipip-4": {
      "text": "Ruh halim sık sık değişir"
    },
    "mini-ipip-5": {
      "text": "Canlı bir hayal gücüm vardır"
    },
    "mini-ipip-6": {
      "text": "Çok konuşmam"
    },
    "mini-ipip-7": {
      "text": "Başkalarının sorunlarıyla ilgilenmem"
    },
    "mini-ipip-8": {
      "text": "Eşyaları yerine koymayı sık sık unuturum"
    },
    "mini-ipip-9": {
      "text": "Çoğu zaman rahat ve sakinimdir"
    },
    "mini-ipip-10": {
      "text": "Soyut fikirlerle ilgilenmem"
    },
    "mini-ipip-11": {
      "text": "Sosyal ortamlarda birçok farklı insanla konuşurum"
    },
    "mini-ipip-12": {
      "text": "Başkalarının duygularını hissederim"
    },
    "mini-ipip-13": {
      "text": "Düzeni severim"
    },
    "mini-ipip-14": {
      "text": "Kolayca keyfim kaçar"
    },
    "mini-ipip-15": {
      "text": "Soyut fikirleri anlamakta zorlanırım"
    },
    "mini-ipip-16": {
      "text": "Arka planda kalmayı tercih ederim"
    },
    "mini-ipip-17": {
      "text": "Başkalarıyla pek ilgilenmem"
    },
    "mini-ipip-18": {
      "text": "Ortalığı dağınık bırakırım"
    },
    "mini-ipip-19": {
      "text": "Nadiren hüzünlenirim"
    },
    "mini-ipip-20": {
      "text": "İyi bir hayal gücüm yoktur"
    }
  },
  "subscales": {
    "extraversion": {
      "label": "Dışadönüklük"
    },
    "agreeableness": {
      "label": "Uyumluluk"
    },
    "conscientiousness": {
      "label": "Sorumluluk"
    },
    "neuroticism": {
      "label": "Duygusal Dengesizlik"
    },
    "openness": {
      "label": "Deneyime Açıklık"
    }
  }
};

export default pack;
