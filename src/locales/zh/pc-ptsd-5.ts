import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for pc-ptsd-5. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "pc-ptsd-5",
  locale: "zh",
  title: "DSM-5 初级保健创伤后应激障碍筛查（PC-PTSD-5）",
  description:
    "一项针对可能的创伤后应激障碍的简短筛查：先询问一生中是否经历过创伤事件，再用五个是/否问题询问该创伤在过去一个月里对本人的影响。",
  instructions:
    "有时人们会遇到异常或特别可怕、恐怖或具有创伤性的事情。例如：严重的事故或火灾；身体或性方面的攻击或虐待；地震或洪水；战争；目睹有人被杀或受重伤；亲人因他杀或自杀而离世。",
  options: ["是", "否"],
  questions: {
    "pc-ptsd-5-trauma": {
      text: "您是否经历过这类事件？如果否，筛查总分 = 0，请在此停止。如果是，请回答下面的问题。",
    },
    "pc-ptsd-5-1": {
      text: "在过去一个月里，您是否做过与该（些）事件有关的噩梦，或在不愿意的时候想起该（些）事件？",
    },
    "pc-ptsd-5-2": {
      text: "在过去一个月里，您是否极力不去想该（些）事件，或刻意回避会让您想起该（些）事件的情境？",
    },
    "pc-ptsd-5-3": {
      text: "在过去一个月里，您是否一直保持戒备、警觉，或容易受惊吓？",
    },
    "pc-ptsd-5-4": {
      text: "在过去一个月里，您是否感到麻木，或与他人、日常活动或周围环境疏离？",
    },
    "pc-ptsd-5-5": {
      text: "在过去一个月里，您是否因该（些）事件或其可能引起的任何问题而感到内疚，或无法停止责怪自己或他人？",
    },
  },
};

export default pack;
