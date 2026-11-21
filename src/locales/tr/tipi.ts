import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for tipi. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "tipi",
  locale: "tr",
  title: "On Maddelik Kişilik Envanteri (TIPI)",
  description:
    "Çok kısa bir ölçüm gereken durumlar için Beş Faktör kişilik boyutlarını ölçen 10 maddelik bir araç.",
  instructions:
    "Aşağıda size uyabilecek ya da uymayabilecek bazı kişilik özellikleri yer alıyor. Her ifadeye ne ölçüde katıldığınızı ya da katılmadığınızı belirtmek için ifadenin yanına bir sayı yazın. Özelliklerden biri size daha çok uysa bile, iki özelliğin birlikte size ne ölçüde uyduğunu değerlendirin. Kendimi şöyle görüyorum:",
  options: [
    "Kesinlikle katılmıyorum",
    "Orta derecede katılmıyorum",
    "Biraz katılmıyorum",
    "Ne katılıyorum ne katılmıyorum",
    "Biraz katılıyorum",
    "Orta derecede katılıyorum",
    "Kesinlikle katılıyorum",
  ],
  questions: {
    "tipi-1": { text: "Dışa dönük, coşkulu." },
    "tipi-2": { text: "Eleştirel, kavgacı." },
    "tipi-3": { text: "Güvenilir, öz disiplinli." },
    "tipi-4": { text: "Kaygılı, kolay üzülen." },
    "tipi-5": { text: "Yeni deneyimlere açık, çok yönlü." },
    "tipi-6": { text: "Çekingen, sessiz." },
    "tipi-7": { text: "Anlayışlı, sıcak." },
    "tipi-8": { text: "Dağınık, dikkatsiz." },
    "tipi-9": { text: "Sakin, duygusal olarak dengeli." },
    "tipi-10": { text: "Geleneksel, yaratıcı olmayan." },
  },
  subscales: {
    extraversion: { label: "Dışa dönüklük" },
    agreeableness: { label: "Uyumluluk" },
    conscientiousness: { label: "Sorumluluk" },
    "emotional-stability": { label: "Duygusal denge" },
    openness: { label: "Deneyime açıklık" },
  },
};

export default pack;
