import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for asrs6. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "asrs6",
  "locale": "zh",
  "title": "成人ADHD自评量表（ASRS-v1.1）筛查问卷",
  "description": "一份包含6个条目的成人注意缺陷/多动障碍筛查问卷，摘自世界卫生组织完整的18条目ASRS量表。",
  "instructions": "回答每个问题时，请选择最能描述您在过去6个月中的感受和行为表现的选项。",
  "options": [
    "从不",
    "很少",
    "有时",
    "经常",
    "非常频繁"
  ],
  "questions": {
    "asrs6-1": {
      "text": "在完成一项工作中最具挑战性的部分之后，您在收尾处理最后细节时遇到困难的频率有多高？"
    },
    "asrs6-2": {
      "text": "当您需要完成一项讲求条理的任务时，您在把事情安排得井井有条方面遇到困难的频率有多高？"
    },
    "asrs6-3": {
      "text": "您忘记约会或应办事项的频率有多高？"
    },
    "asrs6-4": {
      "text": "当您有一项需要动很多脑筋的任务时，您回避或拖延着手去做的频率有多高？"
    },
    "asrs6-5": {
      "text": "当您必须长时间坐着时，您手脚不停地动、坐立不安的频率有多高？"
    },
    "asrs6-6": {
      "text": "您感到自己过度活跃、不得不做些什么、就像被马达驱动着一样的频率有多高？"
    }
  },
  "bands": {
    "negative": "症状与成人ADHD不相符",
    "positive": "症状与成人ADHD高度相符——建议作进一步评估"
  }
};

export default pack;
