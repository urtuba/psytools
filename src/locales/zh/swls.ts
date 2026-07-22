import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for swls. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "swls",
  "locale": "zh",
  "title": "生活满意度量表（SWLS）",
  "description": "一份包含5个条目的量表，用于测量总体生活满意度。",
  "instructions": "以下是五条陈述，您可能同意或不同意。请对每个条目表明您的同意程度。请如实、坦诚地作答。",
  "options": [
    "非常不同意",
    "不同意",
    "有点不同意",
    "既不同意也不反对",
    "有点同意",
    "同意",
    "非常同意"
  ],
  "questions": {
    "swls-1": {
      "text": "在大多数方面，我的生活都接近我理想的状态"
    },
    "swls-2": {
      "text": "我的生活条件非常好"
    },
    "swls-3": {
      "text": "我对自己的生活感到满意"
    },
    "swls-4": {
      "text": "到目前为止，我已经得到了我人生中想要的重要东西"
    },
    "swls-5": {
      "text": "如果能重新来过，我几乎不会做任何改变"
    }
  },
  "bands": {
    "extremely-dissatisfied": "极度不满意",
    "dissatisfied": "不满意",
    "slightly-dissatisfied": "略微不满意",
    "neutral": "中等",
    "slightly-satisfied": "略微满意",
    "satisfied": "满意",
    "extremely-satisfied": "极度满意"
  }
};

export default pack;
