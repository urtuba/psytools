import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for ucla-ls3. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "ucla-ls3",
  locale: "tr",
  title: "UCLA Yalnızlık Ölçeği (Versiyon 3)",
  description: "Öznel yalnızlık ve toplumsal yalıtılmışlık duygularını ölçen 20 maddelik bir öz bildirim ölçeği.",
  instructions:
    "Aşağıdaki ifadeler insanların zaman zaman nasıl hissettiğini anlatmaktadır. Her ifade için, anlatılan biçimde ne sıklıkla hissettiğinizi belirtin. Örnek: Ne sıklıkla kendinizi mutlu hissedersiniz? Hiç mutlu hissetmediyseniz “hiçbir zaman”, her zaman mutlu hissediyorsanız “her zaman” yanıtını verirsiniz.",
  options: ["Hiçbir zaman", "Nadiren", "Bazen", "Her zaman"],
  questions: {
    "ucla-ls3-1": { text: "Çevrenizdeki insanlarla ne sıklıkla “aynı frekansta” olduğunuzu hissedersiniz?" },
    "ucla-ls3-2": { text: "Ne sıklıkla arkadaşlıktan yoksun olduğunuzu hissedersiniz?" },
    "ucla-ls3-3": { text: "Ne sıklıkla başvurabileceğiniz hiç kimsenin olmadığını hissedersiniz?" },
    "ucla-ls3-4": { text: "Ne sıklıkla kendinizi yalnız hissedersiniz?" },
    "ucla-ls3-5": { text: "Ne sıklıkla bir arkadaş grubunun parçası olduğunuzu hissedersiniz?" },
    "ucla-ls3-6": {
      text: "Ne sıklıkla çevrenizdeki insanlarla çok ortak yönünüz olduğunu hissedersiniz?",
    },
    "ucla-ls3-7": { text: "Ne sıklıkla artık hiç kimseye yakın olmadığınızı hissedersiniz?" },
    "ucla-ls3-8": {
      text: "Ne sıklıkla ilgi ve düşüncelerinizin çevrenizdekilerce paylaşılmadığını hissedersiniz?",
    },
    "ucla-ls3-9": { text: "Ne sıklıkla kendinizi dışa dönük ve cana yakın hissedersiniz?" },
    "ucla-ls3-10": { text: "Ne sıklıkla insanlara yakın hissedersiniz?" },
    "ucla-ls3-11": { text: "Ne sıklıkla kendinizi dışlanmış hissedersiniz?" },
    "ucla-ls3-12": {
      text: "Ne sıklıkla başkalarıyla ilişkilerinizin anlamlı olmadığını hissedersiniz?",
    },
    "ucla-ls3-13": { text: "Ne sıklıkla sizi gerçekten iyi tanıyan kimse olmadığını hissedersiniz?" },
    "ucla-ls3-14": { text: "Ne sıklıkla kendinizi başkalarından yalıtılmış hissedersiniz?" },
    "ucla-ls3-15": {
      text: "Ne sıklıkla istediğinizde arkadaşlık bulabileceğinizi hissedersiniz?",
    },
    "ucla-ls3-16": { text: "Ne sıklıkla sizi gerçekten anlayan insanlar olduğunu hissedersiniz?" },
    "ucla-ls3-17": { text: "Ne sıklıkla kendinizi utangaç hissedersiniz?" },
    "ucla-ls3-18": {
      text: "Ne sıklıkla insanların çevrenizde olduğunu ama sizinle olmadığını hissedersiniz?",
    },
    "ucla-ls3-19": { text: "Ne sıklıkla konuşabileceğiniz insanlar olduğunu hissedersiniz?" },
    "ucla-ls3-20": { text: "Ne sıklıkla başvurabileceğiniz insanlar olduğunu hissedersiniz?" },
  },
};

export default pack;
