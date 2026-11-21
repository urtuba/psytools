import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for pc-ptsd-5. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "pc-ptsd-5",
  locale: "tr",
  title: "DSM-5 için Birinci Basamak TSSB Taraması (PC-PTSD-5)",
  description:
    "Olası travma sonrası stres bozukluğu için kısa bir tarama: yaşam boyu travmatik bir olay yaşanıp yaşanmadığına dair bir soru, ardından bu olayın son bir ayda kişiyi nasıl etkilediğine dair beş evet/hayır sorusu.",
  instructions:
    "Bazen insanların başına alışılmadık ölçüde ya da özellikle korkutucu, dehşet verici veya travmatik olaylar gelir. Örneğin: ciddi bir kaza ya da yangın; fiziksel ya da cinsel saldırı veya istismar; deprem ya da sel; savaş; birinin öldürüldüğünü ya da ağır yaralandığını görmek; bir yakınını cinayet ya da intihar sonucu kaybetmek.",
  options: ["Evet", "Hayır"],
  questions: {
    "pc-ptsd-5-trauma": {
      text: "Hiç bu türden bir olay yaşadınız mı? Yanıtınız hayır ise tarama puanı 0'dır. Lütfen burada durun. Yanıtınız evet ise lütfen aşağıdaki soruları yanıtlayın.",
    },
    "pc-ptsd-5-1": {
      text: "Son bir ay içinde olay(lar)la ilgili kâbuslar gördünüz mü ya da istemediğiniz hâlde olay(lar)ı düşündünüz mü?",
    },
    "pc-ptsd-5-2": {
      text: "Son bir ay içinde olay(lar)ı düşünmemek için çok çaba gösterdiniz mi ya da size olay(lar)ı hatırlatan durumlardan kaçınmak için özellikle uğraştınız mı?",
    },
    "pc-ptsd-5-3": {
      text: "Son bir ay içinde sürekli tetikte ya da diken üstünde oldunuz mu, kolayca irkildiniz mi?",
    },
    "pc-ptsd-5-4": {
      text: "Son bir ay içinde insanlara, etkinliklere ya da çevrenize karşı duygusuzlaşmış ya da kopmuş hissettiniz mi?",
    },
    "pc-ptsd-5-5": {
      text: "Son bir ay içinde olay(lar) ya da olay(lar)ın yol açmış olabileceği sorunlar yüzünden suçluluk duydunuz mu ya da kendinizi veya başkalarını suçlamayı bırakamadınız mı?",
    },
  },
};

export default pack;
