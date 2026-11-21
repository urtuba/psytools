import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for gds15. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "gds15",
  locale: "zh",
  title: "老年抑郁量表简版（GDS-15）",
  description: "一份用于筛查老年人抑郁的 15 题是/否量表。",
  instructions: "请根据您过去一周的感受，选择最合适的答案：",
  options: ["是", "否"],
  questions: {
    "gds15-1": { text: "您对自己的生活基本满意吗？" },
    "gds15-2": { text: "您是否放弃了许多活动和兴趣？" },
    "gds15-3": { text: "您是否觉得生活很空虚？" },
    "gds15-4": { text: "您是否常常感到无聊？" },
    "gds15-5": { text: "您大部分时间心情都很好吗？" },
    "gds15-6": { text: "您是否害怕会有不好的事情发生在自己身上？" },
    "gds15-7": { text: "您大部分时间都感到快乐吗？" },
    "gds15-8": { text: "您是否常常感到无助？" },
    "gds15-9": { text: "您是否宁愿待在家里，也不愿出门做些新的事情？" },
    "gds15-10": { text: "您是否觉得自己的记忆问题比大多数人多？" },
    "gds15-11": { text: "您是否觉得现在活着是一件很美好的事？" },
    "gds15-12": { text: "您是否觉得现在的自己相当没有价值？" },
    "gds15-13": { text: "您是否感到精力充沛？" },
    "gds15-14": { text: "您是否觉得自己的处境没有希望？" },
    "gds15-15": { text: "您是否认为大多数人的境况都比您好？" },
  },
  bands: {
    "below-cutoff": "低于需要随访的阈值",
    suggestive: "提示存在抑郁：需要进行随访访谈",
    likely: "几乎总是抑郁",
  },
};

export default pack;
