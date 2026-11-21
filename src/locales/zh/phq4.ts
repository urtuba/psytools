import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for phq4. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq4",
  locale: "zh",
  title: "患者健康问卷-4（PHQ-4）",
  description: "一份由 GAD-2 和 PHQ-2 组成的 4 题超简短焦虑与抑郁筛查工具。",
  instructions: "在过去 2 周里，以下问题困扰您的频率如何？",
  options: ["完全没有", "有几天", "超过一半的天数", "几乎每天"],
  questions: {
    "phq4-1": { text: "感到紧张、焦虑或心神不宁" },
    "phq4-2": { text: "无法停止或控制担忧" },
    "phq4-3": { text: "做事情时缺乏兴趣或乐趣" },
    "phq4-4": { text: "感到情绪低落、抑郁或绝望" },
  },
  subscales: {
    anxiety: {
      label: "焦虑（GAD-2）",
      bands: {
        "below-cutoff": "低于筛查临界值",
        positive: "筛查阳性：请用 GAD-7 和临床访谈进一步评估",
      },
    },
    depression: {
      label: "抑郁（PHQ-2）",
      bands: {
        "below-cutoff": "低于筛查临界值",
        positive: "筛查阳性：请用 PHQ-9 和临床访谈进一步评估",
      },
    },
    total: { label: "总分（PHQ-4）" },
  },
};

export default pack;
