import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for tipi. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "tipi",
  locale: "zh",
  title: "十项人格量表（TIPI）",
  description: "一份测量大五人格维度的 10 题工具，适用于需要非常简短测量的场合。",
  instructions:
    "以下是一些可能适合也可能不适合您的人格特质。请在每项描述旁写下一个数字，表示您同意或不同意该描述的程度。即使其中一个特点比另一个更符合您，也请评价这一对特质整体上在多大程度上符合您。我认为自己是：",
  options: ["非常不同意", "比较不同意", "有点不同意", "既不同意也不反对", "有点同意", "比较同意", "非常同意"],
  questions: {
    "tipi-1": { text: "外向的，热情的。" },
    "tipi-2": { text: "爱挑剔的，好争吵的。" },
    "tipi-3": { text: "可靠的，自律的。" },
    "tipi-4": { text: "焦虑的，容易心烦的。" },
    "tipi-5": { text: "乐于接受新体验的，复杂的。" },
    "tipi-6": { text: "矜持的，安静的。" },
    "tipi-7": { text: "富有同情心的，温暖的。" },
    "tipi-8": { text: "缺乏条理的，粗心的。" },
    "tipi-9": { text: "冷静的，情绪稳定的。" },
    "tipi-10": { text: "守旧的，缺乏创造力的。" },
  },
  subscales: {
    extraversion: { label: "外向性" },
    agreeableness: { label: "宜人性" },
    conscientiousness: { label: "尽责性" },
    "emotional-stability": { label: "情绪稳定性" },
    openness: { label: "经验开放性" },
  },
};

export default pack;
