import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for flourishing. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "flourishing",
  "locale": "zh",
  "title": "蓬勃发展量表（FS）",
  "description": "一份包含8个条目的综合量表，用于测量个体在人际关系、自尊、人生目标和乐观等重要领域的自我认知成功感。",
  "instructions": "以下是八条陈述，您可能同意或不同意。请对每个条目表明您的同意程度。",
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
    "flourishing-1": {
      "text": "我过着有目标、有意义的生活"
    },
    "flourishing-2": {
      "text": "我的社会关系给我支持，也让我感到有收获"
    },
    "flourishing-3": {
      "text": "我投入并关注自己的日常活动"
    },
    "flourishing-4": {
      "text": "我积极为他人的幸福和福祉做出贡献"
    },
    "flourishing-5": {
      "text": "在对我重要的活动中，我表现得有能力、有胜任力"
    },
    "flourishing-6": {
      "text": "我是一个好人，过着良好的生活"
    },
    "flourishing-7": {
      "text": "我对自己的未来感到乐观"
    },
    "flourishing-8": {
      "text": "人们尊重我"
    }
  }
};

export default pack;
