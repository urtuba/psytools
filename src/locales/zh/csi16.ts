import type { InventoryLocalePack } from "../../types.ts";

/** Chinese locale pack for csi16. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const trueScale = ["完全不符合", "有一点符合", "有些符合", "大致符合", "几乎完全符合", "完全符合"];

// The semantic differentials are numbered positions on the authors' own
// form, identical in every language — restated here because a locale pack
// must cover every per-question scale.
const down = ["5", "4", "3", "2", "1", "0"];
const up = ["0", "1", "2", "3", "4", "5"];

const pack: InventoryLocalePack = {
  id: "csi16",
  locale: "zh",
  title: "伴侣满意度量表（CSI-16）",
  description:
    "一份包含 16 个条目的自评量表，运用项目反应理论编制，用于测量关系满意度，在不满意区间的测量精度尤高。",
  instructions:
    "对于以下每一项，请选择最能描述您对这段关系感受的答案。请依据您对该条目的第一印象和当下的感受作答。",
  options: ["完全没有", "有一点", "有些", "大致上", "几乎完全", "完全"],
  questions: {
    "csi16-1": {
      text: "请指出总体而言您这段关系的幸福程度。",
      options: ["极不幸福", "相当不幸福", "有点不幸福", "幸福", "非常幸福", "极其幸福", "完美"],
    },
    "csi16-2": {
      text: "总的来说，您多久会觉得您和伴侣之间进展顺利？",
      options: ["一直如此", "大多数时候", "多数情况下", "偶尔", "很少", "从不"],
    },
    "csi16-3": { text: "我们的关系很牢固", options: trueScale },
    "csi16-4": { text: "与伴侣的关系让我感到幸福", options: trueScale },
    "csi16-5": { text: "我与伴侣之间的关系温暖而自在", options: trueScale },
    "csi16-6": { text: "我真切地感到自己与伴侣是一个团队", options: trueScale },
    "csi16-7": { text: "您与伴侣的关系带给您多少收获？" },
    "csi16-8": { text: "您的伴侣在多大程度上满足了您的需要？" },
    "csi16-9": { text: "您的这段关系在多大程度上达到了您最初的期望？" },
    "csi16-10": { text: "总的来说，您对这段关系有多满意？" },
    "csi16-11": { text: "有趣 — 乏味", options: down },
    "csi16-12": { text: "糟糕 — 美好", options: up },
    "csi16-13": { text: "充实 — 空虚", options: down },
    "csi16-14": { text: "牢固 — 脆弱", options: down },
    "csi16-15": { text: "令人沮丧 — 充满希望", options: up },
    "csi16-16": { text: "令人愉快 — 令人痛苦", options: down },
  },
  bands: {
    dissatisfied: "存在明显的关系不满",
    satisfied: "无明显的关系不满",
  },
};

export default pack;
