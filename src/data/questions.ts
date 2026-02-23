export type Difficulty = '初级' | '中级' | '高级';

export interface Question {
  id: number;
  sentenceParts: [string, string];
  options: string[];
  correctAnswer: string;
  difficulty: Difficulty;
  category: string;
  explanation: {
    rule: string;
    example: string;
    analysis: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    sentenceParts: ["", " tired, she still finished the report."],
    options: ["Although", "Because", "Unless", "Despite"],
    correctAnswer: "Although",
    difficulty: "初级",
    category: "状语从句",
    explanation: {
      rule: "Although 引导让步状语从句，意为“虽然，尽管”。这里虽然省略了主语和系动词 (Although she was tired)，但逻辑上是让步关系。",
      example: "Although it was raining, we went out.",
      analysis: "Because 表原因；Unless 表条件（除非）；Despite 是介词，后面只能跟名词或动名词，不能直接跟形容词。"
    }
  },
  {
    id: 2,
    sentenceParts: ["The book ", " you lent me is very interesting."],
    options: ["what", "who", "which", "whose"],
    correctAnswer: "which",
    difficulty: "初级",
    category: "定语从句",
    explanation: {
      rule: "which 引导定语从句修饰物（The book），并在从句中作宾语（lent me the book）。",
      example: "The car which I bought yesterday is blue.",
      analysis: "what 不能引导定语从句；who 修饰人；whose 表所属关系。"
    }
  },
  {
    id: 3,
    sentenceParts: ["", " from the top of the tower, the city looks beautiful."],
    options: ["Seen", "Seeing", "To see", "See"],
    correctAnswer: "Seen",
    difficulty: "中级",
    category: "非谓语动词",
    explanation: {
      rule: "过去分词作状语表被动。城市是被看的，所以用 Seen (When it is seen...)。",
      example: "Built in 1990, the bridge is still in good condition.",
      analysis: "Seeing 表主动；To see 表目的；See 是谓语动词原形，不能直接作状语。"
    }
  },
  {
    id: 4,
    sentenceParts: ["I will go to the park with you ", " it rains tomorrow."],
    options: ["if", "unless", "because", "since"],
    correctAnswer: "unless",
    difficulty: "中级",
    category: "状语从句",
    explanation: {
      rule: "unless 引导条件状语从句，意为“除非，如果不”。句意：除非明天下雨，否则我会和你去公园。",
      example: "You will fail the exam unless you study hard.",
      analysis: "if 意为“如果”，代入后句意不合逻辑（如果下雨我还去公园）；because/since 表原因。"
    }
  },
  {
    id: 5,
    sentenceParts: ["The teacher demanded that the homework ", " handed in tomorrow."],
    options: ["is", "was", "be", "will be"],
    correctAnswer: "be",
    difficulty: "高级",
    category: "虚拟语气",
    explanation: {
      rule: "demand, suggest, order 等表示命令、建议、要求的动词，其宾语从句需用虚拟语气 (should) + 动词原形，should 可以省略。",
      example: "He suggested that we (should) start early.",
      analysis: "is/was/will be 都是陈述语气，不符合 demand 后的虚拟语气规则。"
    }
  },
  {
    id: 6,
    sentenceParts: ["It was not until midnight ", " he finished his work."],
    options: ["when", "that", "which", "since"],
    correctAnswer: "that",
    difficulty: "中级",
    category: "强调句型",
    explanation: {
      rule: "强调句型结构为 It is/was + 被强调部分 + that/who + 其他部分。这里强调的是时间状语 not until midnight。",
      example: "It was yesterday that I met him.",
      analysis: "when/which/since 都不能用于构成强调句型的固定搭配。"
    }
  },
  {
    id: 7,
    sentenceParts: ["With his homework ", ", the boy went out to play."],
    options: ["doing", "done", "to do", "did"],
    correctAnswer: "done",
    difficulty: "高级",
    category: "独立主格",
    explanation: {
      rule: "with + 宾语 + 宾补 结构中，homework 与 do 之间是被动关系，且动作已完成，故用过去分词 done。",
      example: "With the problem solved, we felt relaxed.",
      analysis: "doing 表主动/进行；to do 表将要发生；did 是谓语动词过去式，不能作宾补。"
    }
  },
  {
    id: 8,
    sentenceParts: ["I have no idea ", " he will come back."],
    options: ["where", "when", "that", "which"],
    correctAnswer: "when",
    difficulty: "中级",
    category: "同位语从句",
    explanation: {
      rule: "when 引导同位语从句，解释说明 idea 的具体内容。句意：我不知道他什么时候回来。",
      example: "I have no idea when the meeting will start.",
      analysis: "where 表地点；that 引导同位语从句时不充当成分，但这里从句缺时间状语；which 在从句中需充当主语或宾语。"
    }
  },
  {
    id: 9,
    sentenceParts: ["She is the only one of the students who ", " passed the exam."],
    options: ["have", "has", "had", "having"],
    correctAnswer: "has",
    difficulty: "高级",
    category: "主谓一致",
    explanation: {
      rule: "在 'one of + 复数名词 + 定语从句' 结构中，从句谓语动词通常用复数；但当 one 前有 the only, the very 等修饰时，从句谓语动词用单数。",
      example: "He is the only one of the boys who plays the piano.",
      analysis: "have 是复数；had 是过去式，时态不符；having 是非谓语动词。"
    }
  },
  {
    id: 10,
    sentenceParts: ["Hardly ", " the station when the train left."],
    options: ["I had reached", "had I reached", "I reached", "did I reach"],
    correctAnswer: "had I reached",
    difficulty: "高级",
    category: "倒装句",
    explanation: {
      rule: "Hardly... when... 意为“一……就……”。当 hardly 位于句首时，主句需要部分倒装，且主句通常用过去完成时，从句用一般过去时。",
      example: "Hardly had she spoken when the audience cheered.",
      analysis: "I had reached 未倒装；I reached 时态和语序都不对；did I reach 时态不对。"
    }
  }
];
