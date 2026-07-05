import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for dass21. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "dass21",
  "locale": "tr",
  "title": "Depresyon Anksiyete Stres Ölçeği (DASS-21)",
  "description": "Geçtiğimiz hafta boyunca depresyon, anksiyete ve stresi ölçen 21 maddelik bir öz bildirim ölçeği.",
  "instructions": "Lütfen her ifadeyi okuyun ve geçtiğimiz hafta boyunca ifadenin size ne kadar uyduğunu gösteren seçeneği işaretleyin. Doğru ya da yanlış cevap yoktur. Herhangi bir ifade üzerinde çok fazla zaman harcamayın.",
  "options": [
    "Bana hiç uymadı",
    "Bana biraz uydu ya da zaman zaman uydu",
    "Bana oldukça uydu ya da zamanın büyük bölümünde uydu",
    "Bana çok uydu ya da hemen hemen her zaman uydu"
  ],
  "questions": {
    "dass21-1": {
      "text": "Sakinleşip yatışmakta zorlandım"
    },
    "dass21-2": {
      "text": "Ağzımın kuruduğunu fark ettim"
    },
    "dass21-3": {
      "text": "Hiç olumlu duygu yaşayamadığımı fark ettim"
    },
    "dass21-4": {
      "text": "Nefes almada zorluk yaşadım (örneğin, fiziksel çaba göstermediğim hâlde aşırı hızlı nefes alma, nefessiz kalma)"
    },
    "dass21-5": {
      "text": "Bir işe başlamak için gereken isteği kendimde bulmakta zorlandım"
    },
    "dass21-6": {
      "text": "Olaylara aşırı tepki verme eğiliminde oldum"
    },
    "dass21-7": {
      "text": "Titreme yaşadım (örneğin ellerde)"
    },
    "dass21-8": {
      "text": "Sinirsel enerjimin çok fazla olduğunu hissettim"
    },
    "dass21-9": {
      "text": "Panikleyip kendimi gülünç duruma düşürebileceğim durumlar nedeniyle endişelendim"
    },
    "dass21-10": {
      "text": "Dört gözle beklediğim hiçbir şey olmadığını hissettim"
    },
    "dass21-11": {
      "text": "Giderek huzursuzlandığımı fark ettim"
    },
    "dass21-12": {
      "text": "Gevşeyip rahatlamakta zorlandım"
    },
    "dass21-13": {
      "text": "Kendimi üzgün ve karamsar hissettim"
    },
    "dass21-14": {
      "text": "Yaptığım işi sürdürmeme engel olan şeylere tahammül edemedim"
    },
    "dass21-15": {
      "text": "Panik olmaya yakın olduğumu hissettim"
    },
    "dass21-16": {
      "text": "Hiçbir şeye karşı heves duyamadım"
    },
    "dass21-17": {
      "text": "Kişi olarak fazla bir değerimin olmadığını hissettim"
    },
    "dass21-18": {
      "text": "Oldukça alıngan olduğumu hissettim"
    },
    "dass21-19": {
      "text": "Fiziksel çaba göstermediğim hâlde kalbimin hareketlerini fark ettim (örneğin, kalp atışının hızlanması, kalbin bir atışı atlaması)"
    },
    "dass21-20": {
      "text": "Geçerli bir neden olmadığı hâlde korktuğumu hissettim"
    },
    "dass21-21": {
      "text": "Yaşamın anlamsız olduğunu hissettim"
    }
  },
  "subscales": {
    "depression": {
      "label": "Depresyon",
      "bands": {
        "normal": "Normal",
        "mild": "Hafif",
        "moderate": "Orta",
        "severe": "Şiddetli",
        "extremely-severe": "Çok şiddetli"
      }
    },
    "anxiety": {
      "label": "Anksiyete",
      "bands": {
        "normal": "Normal",
        "mild": "Hafif",
        "moderate": "Orta",
        "severe": "Şiddetli",
        "extremely-severe": "Çok şiddetli"
      }
    },
    "stress": {
      "label": "Stres",
      "bands": {
        "normal": "Normal",
        "mild": "Hafif",
        "moderate": "Orta",
        "severe": "Şiddetli",
        "extremely-severe": "Çok şiddetli"
      }
    }
  }
};

export default pack;
