import type { InventoryLocalePack } from "../../types.ts";

/**
 * Turkish locale pack for cbi. AI translation (Anthropic Claude,
 * claude-opus-5), unverified. Validated Turkish adaptations of the CBI
 * exist (2009 and 2013) but were not consulted — see SOURCES.md.
 */
const pack: InventoryLocalePack = {
  "id": "cbi",
  "locale": "tr",
  "title": "Kopenhag Tükenmişlik Envanteri (CBI)",
  "description": "Tükenmişliği ayrı ayrı puanlanan üç ölçekte ölçen 19 maddelik bir araç: kişisel, işle ilgili ve danışanla ilgili tükenme.",
  "instructions": "Sizi en iyi tanımlayan seçeneği işaretleyin. Sorularda “danışan” geçen yerlerde kendi işinize uyan kelimeyi düşünün — hasta, öğrenci, çocuk ya da kiminle çalışıyorsanız. Danışanla ilgili soruları yalnızca işiniz bunu kapsıyorsa yanıtlayın.",
  "options": [
    "Her zaman",
    "Sık sık",
    "Bazen",
    "Nadiren",
    "Hiç/neredeyse hiç"
  ],
  "questions": {
    "cbi-1": { "text": "Ne sıklıkta yorgun hissediyorsunuz?" },
    "cbi-2": { "text": "Ne sıklıkta fiziksel olarak tükenmiş oluyorsunuz?" },
    "cbi-3": { "text": "Ne sıklıkta duygusal olarak tükenmiş oluyorsunuz?" },
    "cbi-4": { "text": "Ne sıklıkta “artık dayanamıyorum” diye düşünüyorsunuz?" },
    "cbi-5": { "text": "Ne sıklıkta bitkin hissediyorsunuz?" },
    "cbi-6": { "text": "Ne sıklıkta kendinizi güçsüz ve hastalığa yatkın hissediyorsunuz?" },
    "cbi-7": {
      "text": "İşiniz duygusal olarak yorucu mu?",
      "options": [
        "Çok yüksek düzeyde",
        "Yüksek düzeyde",
        "Bir miktar",
        "Düşük düzeyde",
        "Çok düşük düzeyde"
      ]
    },
    "cbi-8": {
      "text": "İşiniz yüzünden tükenmiş hissediyor musunuz?",
      "options": [
        "Çok yüksek düzeyde",
        "Yüksek düzeyde",
        "Bir miktar",
        "Düşük düzeyde",
        "Çok düşük düzeyde"
      ]
    },
    "cbi-9": {
      "text": "İşiniz sizi bunaltıyor mu?",
      "options": [
        "Çok yüksek düzeyde",
        "Yüksek düzeyde",
        "Bir miktar",
        "Düşük düzeyde",
        "Çok düşük düzeyde"
      ]
    },
    "cbi-10": { "text": "İş gününün sonunda bitkin hissediyor musunuz?" },
    "cbi-11": { "text": "Sabah, işte bir gün daha olacağı düşüncesiyle tükenmiş oluyor musunuz?" },
    "cbi-12": { "text": "Her çalışma saatinin size yorucu geldiğini düşünüyor musunuz?" },
    "cbi-13": { "text": "Boş zamanınızda aileniz ve arkadaşlarınız için yeterli enerjiniz oluyor mu?" },
    "cbi-14": {
      "text": "Danışanlarla çalışmayı zor buluyor musunuz?",
      "options": [
        "Çok yüksek düzeyde",
        "Yüksek düzeyde",
        "Bir miktar",
        "Düşük düzeyde",
        "Çok düşük düzeyde"
      ]
    },
    "cbi-15": {
      "text": "Danışanlarla çalışmayı bunaltıcı buluyor musunuz?",
      "options": [
        "Çok yüksek düzeyde",
        "Yüksek düzeyde",
        "Bir miktar",
        "Düşük düzeyde",
        "Çok düşük düzeyde"
      ]
    },
    "cbi-16": {
      "text": "Danışanlarla çalışmak enerjinizi tüketiyor mu?",
      "options": [
        "Çok yüksek düzeyde",
        "Yüksek düzeyde",
        "Bir miktar",
        "Düşük düzeyde",
        "Çok düşük düzeyde"
      ]
    },
    "cbi-17": {
      "text": "Danışanlarla çalışırken aldığınızdan daha çok verdiğinizi düşünüyor musunuz?",
      "options": [
        "Çok yüksek düzeyde",
        "Yüksek düzeyde",
        "Bir miktar",
        "Düşük düzeyde",
        "Çok düşük düzeyde"
      ]
    },
    "cbi-18": { "text": "Danışanlarla çalışmaktan yoruldunuz mu?" },
    "cbi-19": { "text": "Bazen danışanlarla çalışmaya ne kadar devam edebileceğinizi merak ediyor musunuz?" }
  },
  "subscales": {
    "personal": { "label": "Kişisel tükenmişlik" },
    "work": { "label": "İşle ilgili tükenmişlik" },
    "client": { "label": "Danışanla ilgili tükenmişlik" }
  }
};

export default pack;
