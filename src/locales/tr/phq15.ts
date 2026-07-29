import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for phq15. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq15",
  locale: "tr",
  title: "Hasta Sağlık Anketi-15 (PHQ-15)",
  description:
    "Yaygın bedensel belirtilerin şiddetini ölçen, somatizasyon ve somatoform bozuklukların taranmasında kullanılan 15 maddelik bir öz bildirim ölçeği.",
  instructions: "Son 4 hafta içinde aşağıdaki sorunlardan ne kadar rahatsız oldunuz?",
  options: ["Hiç rahatsız olmadım", "Biraz rahatsız oldum", "Çok rahatsız oldum"],
  questions: {
    "phq15-1": { text: "Mide ağrısı" },
    "phq15-2": { text: "Sırt ağrısı" },
    "phq15-3": { text: "Kollarınızda, bacaklarınızda veya eklemlerinizde (dizler, kalçalar vb.) ağrı" },
    "phq15-4": { text: "Adet krampları veya regl dönemine ilişkin diğer sorunlar [yalnızca kadınlar]" },
    "phq15-5": { text: "Baş ağrıları" },
    "phq15-6": { text: "Göğüs ağrısı" },
    "phq15-7": { text: "Baş dönmesi" },
    "phq15-8": { text: "Bayılma nöbetleri" },
    "phq15-9": { text: "Kalbinizin küt küt attığını veya hızlandığını hissetmek" },
    "phq15-10": { text: "Nefes darlığı" },
    "phq15-11": { text: "Cinsel ilişki sırasında ağrı veya sorun" },
    "phq15-12": { text: "Kabızlık, yumuşak dışkılama veya ishal" },
    "phq15-13": { text: "Bulantı, gaz veya hazımsızlık" },
    "phq15-14": { text: "Yorgun hissetmek veya enerjinizin düşük olması" },
    "phq15-15": { text: "Uyku sorunu" },
  },
  bands: {
    minimal: "En az düzeyde bedensel belirti",
    low: "Düşük düzeyde bedensel belirti şiddeti",
    medium: "Orta düzeyde bedensel belirti şiddeti",
    high: "Yüksek düzeyde bedensel belirti şiddeti",
  },
};

export default pack;
