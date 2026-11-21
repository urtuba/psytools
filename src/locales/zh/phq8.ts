import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for phq8. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq8",
  locale: "zh",
  title: "患者健康问卷-8（PHQ-8）",
  description: "一份用于测量抑郁严重程度的 8 题自评问卷：即去掉自伤想法条目的 PHQ-9。",
  instructions: "在过去 2 周里，以下任何问题困扰您的频率如何？",
  options: ["完全没有", "有几天", "超过一半的天数", "几乎每天"],
  questions: {
    "phq8-1": { text: "做事情时缺乏兴趣或乐趣" },
    "phq8-2": { text: "感到情绪低落、抑郁或绝望" },
    "phq8-3": { text: "难以入睡或难以保持睡眠，或睡得太多" },
    "phq8-4": { text: "感到疲倦或缺乏精力" },
    "phq8-5": { text: "食欲不振或吃得过多" },
    "phq8-6": { text: "对自己感觉很糟，或觉得自己很失败，或让自己或家人失望" },
    "phq8-7": { text: "难以集中注意力做事，例如读报纸或看电视" },
    "phq8-8": {
      text: "动作或说话慢到别人可能已经察觉？或者相反：坐立不安、烦躁，以致比平时活动多得多",
    },
  },
  bands: {
    minimal: "极轻微抑郁",
    mild: "轻度抑郁",
    moderate: "中度抑郁",
    "moderately-severe": "中重度抑郁",
    severe: "重度抑郁",
  },
};

export default pack;
