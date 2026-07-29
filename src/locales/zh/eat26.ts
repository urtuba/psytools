import type { InventoryLocalePack } from "../../types.ts";

/** Chinese locale pack for eat26. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const frequency = ["总是", "通常", "经常", "有时", "很少", "从不"];

const pack: InventoryLocalePack = {
  id: "eat26",
  locale: "zh",
  title: "饮食态度测验（EAT-26）",
  description: "一份包含 26 个条目的自评筛查量表，用于评估进食障碍所特有的症状与担忧。",
  instructions:
    "这是一份筛查量表，用于帮助您判断自己是否可能存在需要专业关注的进食障碍。本量表并非用于诊断进食障碍，也不能替代专业咨询。请尽可能准确、诚实、完整地填写下表。答案没有对错之分。您的所有回答都将保密。",
  options: frequency,
  questions: {
    "eat26-1": { text: "我非常害怕体重超标。" },
    "eat26-2": { text: "我饿的时候也避免进食。" },
    "eat26-3": { text: "我发现自己满脑子都是食物。" },
    "eat26-4": { text: "我曾经暴食，而且觉得自己可能停不下来。" },
    "eat26-5": { text: "我把食物切成小块吃。" },
    "eat26-6": { text: "我很清楚自己所吃食物的热量。" },
    "eat26-7": { text: "我特别避免高碳水化合物的食物（如面包、米饭、土豆等）" },
    "eat26-8": { text: "我觉得别人希望我多吃一些。" },
    "eat26-9": { text: "我在进食后呕吐。" },
    "eat26-10": { text: "我进食后感到极度内疚。" },
    "eat26-11": { text: "我一心想着要更瘦。" },
    "eat26-12": { text: "我运动时会想着消耗掉多少热量。" },
    "eat26-13": { text: "别人认为我太瘦了。" },
    "eat26-14": { text: "我总想着身上有脂肪这件事。" },
    "eat26-15": { text: "我吃饭比别人花的时间更长。" },
    "eat26-16": { text: "我避免含糖的食物。" },
    "eat26-17": { text: "我吃减肥食品。" },
    "eat26-18": { text: "我觉得食物控制着我的生活。" },
    "eat26-19": { text: "我在食物面前能够自我控制。" },
    "eat26-20": { text: "我觉得别人在逼我进食。" },
    "eat26-21": { text: "我在食物上花了过多的时间和心思。" },
    "eat26-22": { text: "吃完甜食后我感到不舒服。" },
    "eat26-23": { text: "我在节食。" },
    "eat26-24": { text: "我喜欢让自己的胃空着。" },
    "eat26-25": { text: "饭后我有想呕吐的冲动。" },
    "eat26-26": { text: "我喜欢尝试新的、油腻丰盛的食物。", options: frequency },
  },
  bands: {
    "below-cutoff": "低于转介临界值",
    "at-or-above-cutoff": "达到或超过转介临界值 —— 建议由合格的专业人员进行评估",
  },
};

export default pack;
