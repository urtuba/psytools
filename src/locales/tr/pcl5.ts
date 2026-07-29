import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for pcl5. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "pcl5",
  locale: "tr",
  title: "DSM-5 için TSSB Kontrol Listesi (PCL-5)",
  description:
    "Travma sonrası stres bozukluğunun DSM-5 belirtilerini son bir ay üzerinden ölçen 20 maddelik bir öz bildirim ölçeği.",
  instructions:
    "Aşağıda, insanların çok stresli bir yaşantıya tepki olarak zaman zaman yaşadığı sorunların bir listesi vardır. En kötü yaşantınızı aklınızda tutarak her bir sorunu dikkatle okuyun ve son bir ay içinde o sorunun sizi ne kadar rahatsız ettiğini sağdaki sayılardan birini seçerek belirtin.",
  options: ["Hiç", "Biraz", "Orta derecede", "Oldukça", "Aşırı derecede"],
  questions: {
    "pcl5-1": { text: "Stresli yaşantıya ilişkin tekrarlayan, rahatsız edici ve istenmeyen anılar?" },
    "pcl5-2": { text: "Stresli yaşantıya ilişkin tekrarlayan, rahatsız edici rüyalar?" },
    "pcl5-3": {
      text: "Stresli yaşantı sanki yeniden yaşanıyormuş gibi ani bir his ya da davranış (sanki gerçekten oraya dönüp onu yeniden yaşıyormuşsunuz gibi)?",
    },
    "pcl5-4": { text: "Bir şey size stresli yaşantıyı hatırlattığında çok üzülmek?" },
    "pcl5-5": {
      text: "Bir şey size stresli yaşantıyı hatırlattığında güçlü bedensel tepkiler vermek (örneğin kalp çarpıntısı, nefes almakta güçlük, terleme)?",
    },
    "pcl5-6": { text: "Stresli yaşantıyla ilgili anılardan, düşüncelerden ya da duygulardan kaçınmak?" },
    "pcl5-7": {
      text: "Stresli yaşantıyı hatırlatan dış uyaranlardan kaçınmak (örneğin insanlar, yerler, konuşmalar, etkinlikler, nesneler ya da durumlar)?",
    },
    "pcl5-8": { text: "Stresli yaşantının önemli bölümlerini hatırlamakta güçlük?" },
    "pcl5-9": {
      text: "Kendiniz, diğer insanlar ya da dünya hakkında güçlü olumsuz inançlar taşımak (örneğin şu tür düşünceler: ben kötüyüm, bende ciddi bir şeyler yanlış, hiç kimseye güvenilmez, dünya tümüyle tehlikeli)?",
    },
    "pcl5-10": {
      text: "Stresli yaşantı ya da sonrasında olanlar için kendinizi ya da bir başkasını suçlamak?",
    },
    "pcl5-11": {
      text: "Korku, dehşet, öfke, suçluluk ya da utanç gibi güçlü olumsuz duygular yaşamak?",
    },
    "pcl5-12": { text: "Eskiden zevk aldığınız etkinliklere karşı ilgi kaybı?" },
    "pcl5-13": { text: "Diğer insanlara uzak ya da onlardan kopmuş hissetmek?" },
    "pcl5-14": {
      text: "Olumlu duygular yaşamakta güçlük (örneğin mutluluk hissedememek ya da yakınlarınıza karşı sevgi duyamamak)?",
    },
    "pcl5-15": { text: "Sinirli davranışlar, öfke patlamaları ya da saldırgan davranmak?" },
    "pcl5-16": { text: "Aşırı risk almak ya da size zarar verebilecek şeyler yapmak?" },
    "pcl5-17": { text: "Aşırı tetikte, dikkat kesilmiş ya da tedbirde olmak?" },
    "pcl5-18": { text: "Ürkek hissetmek ya da kolayca irkilmek?" },
    "pcl5-19": { text: "Odaklanmakta güçlük çekmek?" },
    "pcl5-20": { text: "Uykuya dalmakta ya da uykuyu sürdürmekte güçlük?" },
  },
};

export default pack;
