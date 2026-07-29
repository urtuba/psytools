import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for bis-bas. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "bis-bas",
  "locale": "zh",
  "title": "IPIP BIS/BAS 量表",
  "description": "一个由国际人格条目库（IPIP）条目构成的36项公共领域量表，用于测量趋近与回避动机：对惩罚的敏感性（BIS）以及对奖赏敏感性的三个方面（BAS 驱力、寻求乐趣和奖赏反应性）。这些条目对应行为抑制与行为激活的相关构念。",
  "instructions": "请按照您现在通常的样子来描述自己，而不是您希望将来成为的样子。请指出每个陈述对您的描述有多准确。",
  "options": [
    "非常不符合",
    "比较不符合",
    "既非符合也非不符合",
    "比较符合",
    "非常符合"
  ],
  "questions": {
    "bis-bas-1": {
      "text": "我在意别人怎么看我"
    },
    "bis-bas-2": {
      "text": "我总是为某些事情担心"
    },
    "bis-bas-3": {
      "text": "我常常为后来证明并不重要的事情担心"
    },
    "bis-bas-4": {
      "text": "我害怕自己会做错事"
    },
    "bis-bas-5": {
      "text": "我很容易受伤害"
    },
    "bis-bas-6": {
      "text": "遇到危险时我会开始惊慌"
    },
    "bis-bas-7": {
      "text": "我会被各种事情压得喘不过气"
    },
    "bis-bas-8": {
      "text": "我很容易感到有压力"
    },
    "bis-bas-9": {
      "text": "我很少担心"
    },
    "bis-bas-10": {
      "text": "我不容易感到难堪"
    },
    "bis-bas-11": {
      "text": "我喜欢随性而为"
    },
    "bis-bas-12": {
      "text": "我曾说服别人去做非常冒险或疯狂的事"
    },
    "bis-bas-13": {
      "text": "我愿意什么都尝试一次"
    },
    "bis-bas-14": {
      "text": "我喜欢一时兴起就行动"
    },
    "bis-bas-15": {
      "text": "我更喜欢那些让人捉摸不透、充满刺激的朋友"
    },
    "bis-bas-16": {
      "text": "我会做疯狂的事"
    },
    "bis-bas-17": {
      "text": "我享受无所顾忌的感觉"
    },
    "bis-bas-18": {
      "text": "我绝不会去玩滑翔翼或蹦极"
    },
    "bis-bas-19": {
      "text": "我很少享受举止傻气的乐趣"
    },
    "bis-bas-20": {
      "text": "我会避开危险的处境"
    },
    "bis-bas-21": {
      "text": "我想要掌控局面"
    },
    "bis-bas-22": {
      "text": "我努力超越别人的成就"
    },
    "bis-bas-23": {
      "text": "我喜欢展示自己的身材"
    },
    "bis-bas-24": {
      "text": "我知道如何绕开规则"
    },
    "bis-bas-25": {
      "text": "我对权力有强烈的需求"
    },
    "bis-bas-26": {
      "text": "我会主动挑起责任"
    },
    "bis-bas-27": {
      "text": "为了成功我会拼命鞭策自己"
    },
    "bis-bas-28": {
      "text": "我并不特别渴望成功"
    },
    "bis-bas-29": {
      "text": "我不是一个出众的人"
    },
    "bis-bas-30": {
      "text": "我讨厌成为众人注目的焦点"
    },
    "bis-bas-31": {
      "text": "我会毫无缘由地感到兴奋或快乐"
    },
    "bis-bas-32": {
      "text": "别人庆祝时我也会被那份兴奋感染"
    },
    "bis-bas-33": {
      "text": "我急切地想抚慰他人受伤的感情"
    },
    "bis-bas-34": {
      "text": "我会高兴或亢奋到几乎忘乎所以"
    },
    "bis-bas-35": {
      "text": "我很少被兴奋的气氛感染"
    },
    "bis-bas-36": {
      "text": "我对事情提不起兴奋劲"
    }
  },
  "subscales": {
    "bis-anxiety": {
      "label": "BIS — 行为抑制（焦虑）"
    },
    "bas-fun-seeking": {
      "label": "BAS — 寻求乐趣"
    },
    "bas-drive": {
      "label": "BAS — 驱力"
    },
    "bas-reward-responsiveness": {
      "label": "BAS — 奖赏反应性"
    }
  }
};

export default pack;
