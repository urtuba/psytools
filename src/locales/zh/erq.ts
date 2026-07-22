import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for erq. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "erq",
  "locale": "zh",
  "title": "情绪调节问卷（ERQ）",
  "description": "测量两种情绪调节策略——认知重评与表达抑制——习惯性使用程度的10个条目量表。",
  "instructions": "我们想了解您的情绪生活，特别是您如何控制（即调节和管理）自己的情绪。以下问题涉及您情绪生活的两个不同方面。一个是情绪体验，即您内心的感受；另一个是情绪表达，即您通过言谈、姿态或行为表现情绪的方式。虽然下面有些问题看起来彼此相似，但它们在重要方面有所不同。",
  "options": [
    "1 — 完全不同意",
    "2",
    "3",
    "4 — 中立",
    "5",
    "6",
    "7 — 完全同意"
  ],
  "questions": {
    "erq-1": { "text": "当我想感受更多积极情绪（如快乐或愉悦）时，我会改变自己正在想的事情。" },
    "erq-2": { "text": "我把情绪藏在心里。" },
    "erq-3": { "text": "当我想减少消极情绪（如悲伤或愤怒）时，我会改变自己正在想的事情。" },
    "erq-4": { "text": "当我产生积极情绪时，我会小心不把它们表现出来。" },
    "erq-5": { "text": "面对有压力的情境时，我会让自己以一种有助于保持冷静的方式去思考它。" },
    "erq-6": { "text": "我通过不表达情绪来控制自己的情绪。" },
    "erq-7": { "text": "当我想感受更多积极情绪时，我会改变自己对所处情境的看法。" },
    "erq-8": { "text": "我通过改变对所处情境的看法来控制自己的情绪。" },
    "erq-9": { "text": "当我产生消极情绪时，我会确保不把它们表现出来。" },
    "erq-10": { "text": "当我想减少消极情绪时，我会改变自己对所处情境的看法。" }
  },
  "subscales": {
    "reappraisal": { "label": "认知重评" },
    "suppression": { "label": "表达抑制" }
  }
};

export default pack;
