import type { InventoryLocalePack } from "../../types.ts";

/** Chinese locale pack for ucla-ls3. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "ucla-ls3",
  locale: "zh",
  title: "UCLA 孤独量表（第 3 版）",
  description: "一份包含 20 个条目的自评量表，测量主观的孤独感与社会隔离感。",
  instructions:
    "下面这些陈述描述了人们有时会有的感受。请针对每一条陈述，指出您有多经常产生所描述的那种感受。例如：您多经常感到快乐？如果您从未感到快乐，就回答“从不”；如果您总是感到快乐，就回答“总是”。",
  options: ["从不", "很少", "有时", "总是"],
  questions: {
    "ucla-ls3-1": { text: "您多经常觉得自己与身边的人“合得来”？" },
    "ucla-ls3-2": { text: "您多经常觉得自己缺少人陪伴？" },
    "ucla-ls3-3": { text: "您多经常觉得自己没有人可以求助？" },
    "ucla-ls3-4": { text: "您多经常感到孤单？" },
    "ucla-ls3-5": { text: "您多经常觉得自己是某个朋友圈子的一员？" },
    "ucla-ls3-6": { text: "您多经常觉得自己与身边的人有很多共同之处？" },
    "ucla-ls3-7": { text: "您多经常觉得自己已经跟谁都不亲近了？" },
    "ucla-ls3-8": { text: "您多经常觉得身边的人并不认同您的兴趣和想法？" },
    "ucla-ls3-9": { text: "您多经常觉得自己开朗友善？" },
    "ucla-ls3-10": { text: "您多经常觉得自己与他人亲近？" },
    "ucla-ls3-11": { text: "您多经常觉得自己被冷落？" },
    "ucla-ls3-12": { text: "您多经常觉得自己与他人的关系没有意义？" },
    "ucla-ls3-13": { text: "您多经常觉得没有人真正了解您？" },
    "ucla-ls3-14": { text: "您多经常觉得自己与他人隔绝？" },
    "ucla-ls3-15": { text: "您多经常觉得只要自己想要，就能找到人陪伴？" },
    "ucla-ls3-16": { text: "您多经常觉得有人是真正理解您的？" },
    "ucla-ls3-17": { text: "您多经常感到害羞？" },
    "ucla-ls3-18": { text: "您多经常觉得人虽然在您身边，心却不在？" },
    "ucla-ls3-19": { text: "您多经常觉得有人可以跟您谈心？" },
    "ucla-ls3-20": { text: "您多经常觉得有人是您可以求助的？" },
  },
};

export default pack;
