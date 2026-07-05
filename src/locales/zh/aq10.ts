import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for aq10. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "aq10",
  "locale": "zh",
  "title": "自闭症谱系商数问卷（AQ-10）— 成人版",
  "description": "一份用于筛查成人自闭症特质的10条目问卷，由50条目的自闭症谱系商数量表精简而成。",
  "instructions": "请针对每条陈述，选择最符合您情况的答案。",
  "options": [
    "完全不同意",
    "有点不同意",
    "有点同意",
    "完全同意"
  ],
  "questions": {
    "aq10-1": {
      "text": "我经常注意到别人注意不到的微小声音"
    },
    "aq10-2": {
      "text": "我通常更关注事情的整体，而不是小细节"
    },
    "aq10-3": {
      "text": "我觉得同时做几件事情很容易"
    },
    "aq10-4": {
      "text": "如果被打断，我能很快回到原来正在做的事情上"
    },
    "aq10-5": {
      "text": "当别人和我说话时，我觉得'听出言外之意'很容易"
    },
    "aq10-6": {
      "text": "我知道如何判断听我说话的人是否开始感到厌烦"
    },
    "aq10-7": {
      "text": "读故事时，我很难弄清人物的意图"
    },
    "aq10-8": {
      "text": "我喜欢收集各类事物的信息（例如汽车的类型、鸟的种类、火车的类型、植物的种类等）"
    },
    "aq10-9": {
      "text": "我觉得只看别人的脸就能轻松看出对方在想什么或有什么感受"
    },
    "aq10-10": {
      "text": "我很难弄清别人的意图"
    }
  },
  "bands": {
    "below-threshold": "低于筛查阈值",
    "above-threshold": "达到或超过阈值——建议考虑转介进行自闭症专科评估"
  }
};

export default pack;
