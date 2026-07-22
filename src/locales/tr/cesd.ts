import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for cesd. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "cesd",
  "locale": "tr",
  "title": "Epidemiyolojik Araştırmalar Merkezi Depresyon Ölçeği (CES-D)",
  "description": "Genel nüfusta depresif belirtileri ölçmek için geliştirilmiş 20 maddelik bir öz bildirim ölçeği.",
  "instructions": "Lütfen her ifadeyi dikkatlice okuyun ve geçtiğimiz hafta boyunca (bugün dahil) kendinizi ne sıklıkta böyle hissettiğinizi ya da böyle davrandığınızı belirtin.",
  "options": [
    "Nadiren ya da hiçbir zaman (1 günden az)",
    "Bazen ya da az bir süre (1-2 gün)",
    "Ara sıra ya da zamanın önemli bir bölümünde (3-4 gün)",
    "Çoğu zaman ya da her zaman (5-7 gün)"
  ],
  "questions": {
    "cesd-1": { "text": "Genellikle beni rahatsız etmeyen şeyler beni rahatsız etti" },
    "cesd-2": { "text": "Canım yemek yemek istemedi; iştahım azalmıştı" },
    "cesd-3": { "text": "Ailemin ve arkadaşlarımın yardımıyla bile üzüntümden kurtulamayacağımı hissettim" },
    "cesd-4": { "text": "Kendimi diğer insanlar kadar iyi hissettim" },
    "cesd-5": { "text": "Yaptığım işe zihnimi vermekte zorlandım" },
    "cesd-6": { "text": "Kendimi çökkün hissettim" },
    "cesd-7": { "text": "Yaptığım her şey bana güç geldi" },
    "cesd-8": { "text": "Gelecek hakkında umutlu hissettim" },
    "cesd-9": { "text": "Hayatımın bir başarısızlık olduğunu düşündüm" },
    "cesd-10": { "text": "Korku duydum" },
    "cesd-11": { "text": "Uykum huzursuzdu" },
    "cesd-12": { "text": "Mutluydum" },
    "cesd-13": { "text": "Her zamankinden daha az konuştum" },
    "cesd-14": { "text": "Kendimi yalnız hissettim" },
    "cesd-15": { "text": "İnsanlar dostça davranmıyordu" },
    "cesd-16": { "text": "Hayattan keyif aldım" },
    "cesd-17": { "text": "Ağlama nöbetlerim oldu" },
    "cesd-18": { "text": "Kendimi üzgün hissettim" },
    "cesd-19": { "text": "İnsanların benden hoşlanmadığını hissettim" },
    "cesd-20": { "text": "Kendimi bir türlü harekete geçiremedim" }
  },
  "bands": {
    "below-cutoff": "Klinik eşiğin altında",
    "elevated": "Yüksek depresif belirtiler (klinik eşik olan 16'da veya üzerinde)"
  }
};

export default pack;
