import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for aq10. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "aq10",
  "locale": "tr",
  "title": "Otizm Spektrum Anketi (AQ-10) — Yetişkin",
  "description": "50 maddelik Otizm Spektrum Anketi'nden kısaltılmış, yetişkinlerde otistik özellikleri taramak için 10 maddelik bir ölçek.",
  "instructions": "Her ifade için sizi en iyi tanımlayan yanıtı işaretleyin.",
  "options": [
    "Kesinlikle katılmıyorum",
    "Biraz katılmıyorum",
    "Biraz katılıyorum",
    "Kesinlikle katılıyorum"
  ],
  "questions": {
    "aq10-1": {
      "text": "Başkalarının fark etmediği küçük sesleri sıklıkla fark ederim"
    },
    "aq10-2": {
      "text": "Genellikle küçük ayrıntılardan çok resmin bütününe odaklanırım"
    },
    "aq10-3": {
      "text": "Aynı anda birden fazla iş yapmak benim için kolaydır"
    },
    "aq10-4": {
      "text": "Bir kesinti olursa, yapmakta olduğum işe çok hızlı bir şekilde geri dönebilirim"
    },
    "aq10-5": {
      "text": "Biri benimle konuşurken 'satır aralarını okumak' benim için kolaydır"
    },
    "aq10-6": {
      "text": "Beni dinleyen birinin sıkılmaya başladığını nasıl anlayacağımı bilirim"
    },
    "aq10-7": {
      "text": "Bir öykü okurken karakterlerin niyetlerini anlamakta zorlanırım"
    },
    "aq10-8": {
      "text": "Belirli kategorilerdeki şeyler hakkında bilgi toplamayı severim (örneğin araba türleri, kuş türleri, tren türleri, bitki türleri vb.)"
    },
    "aq10-9": {
      "text": "Sadece yüzüne bakarak birinin ne düşündüğünü ya da hissettiğini anlamak benim için kolaydır"
    },
    "aq10-10": {
      "text": "İnsanların niyetlerini anlamakta zorlanırım"
    }
  },
  "bands": {
    "below-threshold": "Tarama eşiğinin altında",
    "above-threshold": "Eşikte ya da üzerinde — uzman otizm değerlendirmesine yönlendirme düşünülmelidir"
  }
};

export default pack;
