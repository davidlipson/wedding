type Trivia = {
  question: string;
  openEnded?: boolean;
  keywords?: string[];
  answer?: string;
};

export const trivia: Trivia[] = [
  {
    question:
      "On a Tuesday in March, Erez professed her love to David in a store on Dundas West. What was the name of the store?",
    keywords: ["Dollarama", "Dollar", "Doll-o-rama"],
    answer: "it was in Dollarama",
  },
  {
    question:
      "What is the first song that Erez and David wrote together and released?",
    keywords: ["Jupiter Time", "Jupiter", "3AM", "3 AM"],
    answer: "it was Jupiter Time",
  },
  {
    question:
      "What do Erez's dad and David's mom have in common other than their charm and good looks?",
    keywords: ["camp", "director", "directed"],
    answer: "they were both camp directors",
  },
  {
    question: "What does Erez's family call David?",
    keywords: ["Dudu", "דודו", "Doodoo"],
    answer: "they call him Dudu",
  },
  {
    question: "Where did Erez and David first meet?",
    keywords: ["Basement", "Eisens", "Deloraine", "Adam"],
    answer: "at the Eisens' House",
  },
  {
    question:
      "If 4 men can build 2 houses in 1 day, how many days will it take for 5 men to build 5 houses?",
    keywords: ["2", "two"],
    answer: "it would take 2 days",
  },
  {
    question:
      "What is one thing you want to tell Erez and David on their wedding?",
    openEnded: true,
  },
];
