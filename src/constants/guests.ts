type Seat = {
  number: number;
};

type Guest = {
  name: string;
  seat: Seat;
  partner?: string;
};

export const weddingGuests: Record<string, Guest> = {
  Alex_Williamson: {
    name: "Alex Williamson",
    seat: { number: 1 },
    partner: "Kirin",
  },
  Alison: {
    name: "Alison",
    seat: { number: 1 },
    partner: "Travis",
  },
  Jeremy: {
    name: "Jeremy",
    seat: { number: 2 },
    partner: "Michelle",
  },
  Michelle: {
    name: "Michelle",
    seat: { number: 2 },
    partner: "Jeremy",
  },
  Travis: {
    name: "Travis",
    seat: { number: 1 },
    partner: "Alison",
  },
  Chloe: {
    name: "Chloe",
    seat: { number: 2 },
    partner: "Cole",
  },
  Cole: {
    name: "Cole",
    seat: { number: 3 },
    partner: "Chloe",
  },
  Elie: {
    name: "Elie",
    seat: { number: 2 },
    partner: "Rachel",
  },
  Kirin: {
    name: "Kirin",
    seat: { number: 1 },
    partner: "Alex_Williamson",
  },
  Rachel: {
    name: "Rachel",
    seat: { number: 2 },
    partner: "Elie",
  },
  Tyya: {
    name: "Tyya",
    seat: { number: 2 },
    partner: "Roy",
  },
  Alexander_Wise: {
    name: "Alexander Wise",
    seat: { number: 3 },
  },
  Charles: {
    name: "Charles",
    seat: { number: 3 },
  },
  Roy: {
    name: "Roy",
    seat: { number: 3 },
    partner: "Tyya",
  },
  Sarah_Collins: {
    name: "Sarah Collins",
    seat: { number: 4 },
    partner: "Yan",
  },
  Stephanie_Valentine: {
    name: "Stephanie Valentine",
    seat: { number: 4 },
    partner: "Mark_Valentine",
  },
  Victoria: {
    name: "Victoria",
    seat: { number: 3 },
  },
  Carolyn_Collins: {
    name: "Carolyn Collins",
    seat: { number: 5 },
    partner: "Billy_Collins",
  },
  Celia: {
    name: "Celia",
    seat: { number: 3 },
  },
  Deeter: {
    name: "Deeter",
    seat: { number: 4 },
  },
  Mark_Valentine: {
    name: "Mark Valentine",
    seat: { number: 4 },
    partner: "Stephanie_Valentine",
  },
  Shelley_Fingerhut: {
    name: "Shelley Fingerhut",
    seat: { number: 5 },
    partner: "Marty_Fingerhut",
  },
  Yan: {
    name: "Yan",
    seat: { number: 4 },
    partner: "Sarah_Collins",
  },
  Billy_Collins: {
    name: "Billy Collins",
    seat: { number: 4 },
    partner: "Carolyn_Collins",
  },
  Cindy_Wise: {
    name: "Cindy Wise",
    seat: { number: 5 },
    partner: "Jerry",
  },
  Jennifer: {
    name: "Jennifer",
    seat: { number: 6 },
    partner: "Ross",
  },
  Jerry: {
    name: "Jerry",
    seat: { number: 6 },
    partner: "Cindy_Wise",
  },
  Marty_Fingerhut: {
    name: "Marty Fingerhut",
    seat: { number: 5 },
    partner: "Shelley_Fingerhut",
  },
  Ross: {
    name: "Ross",
    seat: { number: 5 },
    partner: "Jennifer",
  },
  Doreen: {
    name: "Doreen",
    seat: { number: 6 },
  },
  Jonathan_Wise: {
    name: "Jonathan Wise",
    seat: { number: 5 },
  },
  Jordan: {
    name: "Jordan",
    seat: { number: 6 },
    partner: "Rhonda",
  },
  Mark_Lipson: {
    name: "Mark Lipson",
    seat: { number: 6 },
  },
  Mel: {
    name: "Mel",
    seat: { number: 6 },
  },
  Rhonda: {
    name: "Rhonda",
    seat: { number: 6 },
    partner: "Jordan",
  },
  Alyssa_Zobary: {
    name: "Alyssa Zobary",
    seat: { number: 7 },
    partner: "Shaul",
  },
  David_Lipson: {
    name: "David Lipson",
    seat: { number: 7 },
    partner: "Erez",
  },
  Earl: {
    name: "Earl",
    seat: { number: 7 },
    partner: "Jordanna",
  },
  Erez: {
    name: "Erez",
    seat: { number: 7 },
    partner: "David_Lipson",
  },
  Jordanna: {
    name: "Jordanna",
    seat: { number: 7 },
    partner: "Earl",
  },
  Shaul: {
    name: "Shaul",
    seat: { number: 7 },
    partner: "Alyssa_Zobary",
  },
  Candice: {
    name: "Candice",
    seat: { number: 8 },
    partner: "Jack_Lipson",
  },
  Gili: {
    name: "Gili",
    seat: { number: 8 },
    partner: "Max",
  },
  Jack_Lipson: {
    name: "Jack Lipson",
    seat: { number: 8 },
    partner: "Candice",
  },
  Taiga: {
    name: "Taiga",
    seat: { number: 8 },
    partner: "Simon_Bentley",
  },
  Tali: {
    name: "Tali",
    seat: { number: 8 },
    partner: "Zach",
  },
  Zach: {
    name: "Zach",
    seat: { number: 8 },
    partner: "Tali",
  },
  Galit: {
    name: "Galit",
    seat: { number: 9 },
    partner: "Yoram",
  },
  Max: {
    name: "Max",
    seat: { number: 9 },
    partner: "Gili",
  },
  Naaman: {
    name: "Naaman",
    seat: { number: 9 },
    partner: "Smadar",
  },
  Simon_Bentley: {
    name: "Simon Bentley",
    seat: { number: 9 },
    partner: "Taiga",
  },
  Smadar: {
    name: "Smadar",
    seat: { number: 9 },
    partner: "Naaman",
  },
  Yoram: {
    name: "Yoram",
    seat: { number: 9 },
    partner: "Galit",
  },
  Gabi_Mualem: {
    name: "Gabi Mualem",
    seat: { number: 10 },
    partner: "Karen_Mualem",
  },
  Gaby_Tsubari: {
    name: "Gaby Tsubari",
    seat: { number: 10 },
    partner: "Hadas_Tsubari",
  },
  Hadas_Tsubari: {
    name: "Hadas Tsubari",
    seat: { number: 10 },
    partner: "Gaby_Tsubari",
  },
  Karen_Mualem: {
    name: "Karen Mualem",
    seat: { number: 10 },
    partner: "Gabi_Mualem",
  },
  Naomi_Maron: {
    name: "Naomi Maron",
    seat: { number: 10 },
  },
  Sandra_Cohn: {
    name: "Sandra Cohn",
    seat: { number: 10 },
    partner: "David_Cohn",
  },
  David_Cohn: {
    name: "David Cohn",
    seat: { number: 11 },
    partner: "Sandra_Cohn",
  },
  Ori: {
    name: "Ori",
    seat: { number: 11 },
  },
  Shaked_Ozeri: {
    name: "Shaked Ozeri",
    seat: { number: 11 },
  },
  Tomer: {
    name: "Tomer",
    seat: { number: 11 },
  },
  Yoav: {
    name: "Yoav",
    seat: { number: 11 },
  },
  Aviva_Penn: {
    name: "Aviva Penn",
    seat: { number: 11 },
  },
  Dotan: {
    name: "Dotan",
    seat: { number: 12 },
    partner: "Yarden",
  },
  Nimrod: {
    name: "Nimrod",
    seat: { number: 12 },
    partner: "Shaked_Maron",
  },
  Noam_Ozeri: {
    name: "Noam Ozeri",
    seat: { number: 12 },
  },
  Shaked_Maron: {
    name: "Shaked Maron",
    seat: { number: 12 },
    partner: "Nimrod",
  },
  Yanay: {
    name: "Yanay",
    seat: { number: 12 },
  },
  Yarden: {
    name: "Yarden",
    seat: { number: 12 },
    partner: "Dotan",
  },
  Cory: {
    name: "Cory",
    seat: { number: 1 },
    partner: "Naomi_E",
  },
  Joe: {
    name: "Joe",
    seat: { number: 14 },
    partner: "Ann",
  },
  "Karen R": {
    name: "Karen R",
    seat: { number: 13 },
  },
  Naomi_E: {
    name: "Naomi E",
    seat: { number: 1 },
    partner: "Cory",
  },
  Shaina: {
    name: "Shaina",
    seat: { number: 13 },
  },
  Steven: {
    name: "Steven",
    seat: { number: 13 },
  },
  Alan: {
    name: "Alan",
    seat: { number: 14 },
  },
  Ann: {
    name: "Ann",
    seat: { number: 14 },
    partner: "Joe",
  },
  Cindy: {
    name: "Cindy",
    seat: { number: 14 },
  },
  Laurel_Jackson: {
    name: "Laurel Jackson",
    seat: { number: 14 },
  },
  Ronda: {
    name: "Ronda",
    seat: { number: 14 },
  },
  Stephen: {
    name: "Stephen",
    seat: { number: 15 },
  },
  Alanna_Wronzberg: {
    name: "Alanna Wronzberg",
    seat: { number: 15 },
  },
  Howard: {
    name: "Howard",
    seat: { number: 15 },
  },
  Marlene: {
    name: "Marlene",
    seat: { number: 15 },
  },
  Terri: {
    name: "Terri",
    seat: { number: 15 },
  },
  Tony: {
    name: "Tony",
    seat: { number: 15 },
  },
  Adam_Dunkleman: {
    name: "Adam Dunkleman",
    seat: { number: 16 },
  },
  Donny: {
    name: "Donny",
    seat: { number: 16 },
  },
  Gina: {
    name: "Gina",
    seat: { number: 16 },
  },
  Laurel: {
    name: "Laurel",
    seat: { number: 16 },
  },
  Paul_Godfrey: {
    name: "Paul Godfrey",
    seat: { number: 16 },
  },
  Ros: {
    name: "Ros",
    seat: { number: 16 },
  },
  Adeana: {
    name: "Adeana",
    seat: { number: 17 },
    partner: "Damian",
  },
  Damian: {
    name: "Damian",
    seat: { number: 17 },
    partner: "Adeana",
  },
  Freddi: {
    name: "Freddi",
    seat: { number: 17 },
  },
  Kerry: {
    name: "Kerry",
    seat: { number: 17 },
  },
  "Lee-at": {
    name: "Lee-at",
    seat: { number: 17 },
  },
  Marli: {
    name: "Marli",
    seat: { number: 17 },
  },
  Amy: {
    name: "Amy",
    seat: { number: 18 },
    partner: "Brian_Moss",
  },
  Brian_Moss: {
    name: "Brian Moss",
    seat: { number: 18 },
    partner: "Amy",
  },
  Debra_Libman: {
    name: "Debra Libman",
    seat: { number: 18 },
  },
  Martin_Maskowitz: {
    name: "Martin Maskowitz",
    seat: { number: 18 },
    partner: "Ziva",
  },
  Toby: {
    name: "Toby",
    seat: { number: 18 },
  },
  Ziva: {
    name: "Ziva",
    seat: { number: 18 },
    partner: "Martin_Maskowitz",
  },
  Alex_Young: {
    name: "Alex Young",
    seat: { number: 19 },
  },
  Kristen: {
    name: "Kristen",
    seat: { number: 19 },
    partner: "Sam",
  },
  Laura_Toth: {
    name: "Laura Toth",
    seat: { number: 19 },
    partner: "Scott",
  },
  Noa: {
    name: "Noa",
    seat: { number: 19 },
  },
  Sam: {
    name: "Sam",
    seat: { number: 19 },
    partner: "Kristen",
  },
  Scott: {
    name: "Scott",
    seat: { number: 19 },
    partner: "Laura_Toth",
  },
  Amanda: {
    name: "Amanda",
    seat: { number: 20 },
  },
  Christina_Beckford: {
    name: "Christina Beckford",
    seat: { number: 20 },
  },
  Jasmine: {
    name: "Jasmine",
    seat: { number: 20 },
  },
  Praveeni: {
    name: "Praveeni",
    seat: { number: 20 },
  },
  Sabby: {
    name: "Sabby",
    seat: { number: 20 },
  },
  Sarahlooni: {
    name: "Sarahlooni",
    seat: { number: 20 },
  },
  Alexa: {
    name: "Alexa",
    seat: { number: 21 },
    partner: "Caleb",
  },
  Caleb: {
    name: "Caleb",
    seat: { number: 21 },
    partner: "Alexa",
  },
  Jon_Catanus: {
    name: "Jon Catanus",
    seat: { number: 21 },
  },
  Pat: {
    name: "Pat",
    seat: { number: 21 },
    partner: "Samantha",
  },
  Samantha: {
    name: "Samantha",
    seat: { number: 21 },
    partner: "Pat",
  },
  Sarah_Sawaya: {
    name: "Sarah Sawaya",
    seat: { number: 21 },
    partner: "Kiaran",
  },
  Becky: {
    name: "Becky",
    seat: { number: 22 },
    partner: "Dylan",
  },
  Dylan: {
    name: "Dylan",
    seat: { number: 22 },
    partner: "Becky",
  },
  Kiaran: {
    name: "Kiaran",
    seat: { number: 22 },
    partner: "Sarah_Sawaya",
  },
  Dani: {
    name: "Dani",
    seat: { number: 13 },
  },
  Romi: {
    name: "Romi",
    seat: { number: 22 },
    partner: "Vince",
  },
  Vince: {
    name: "Vince",
    seat: { number: 22 },
    partner: "Romi",
  },
  Carly: {
    name: "Carly",
    seat: { number: 22 },
    partner: "Emily",
  },
  Emily: {
    name: "Emily",
    seat: { number: 23 },
    partner: "Carly",
  },
  Isabelle: {
    name: "Isabelle",
    seat: { number: 23 },
    partner: "Rick",
  },
  Marty_Vishnepolsky: {
    name: "Marty Vishnepolsky",
    seat: { number: 24 },
  },
  Rick: {
    name: "Rick",
    seat: { number: 23 },
    partner: "Isabelle",
  },
  Sam_Pinto: {
    name: "Sam Pinto",
    seat: { number: 23 },
    partner: "Jumana",
  },
  Alyssa: {
    name: "Alyssa",
    seat: { number: 23 },
    partner: "Hannie",
  },
  Elana: {
    name: "Elana",
    seat: { number: 24 },
    partner: "Tyler",
  },
  Hannie: {
    name: "Hannie",
    seat: { number: 23 },
    partner: "Alyssa",
  },
  Jumana: {
    name: "Jumana",
    seat: { number: 24 },
    partner: "Sam_Pinto",
  },
  Leora: {
    name: "Leora",
    seat: { number: 24 },
    partner: "Xander",
  },
  Tyler: {
    name: "Tyler",
    seat: { number: 24 },
    partner: "Elana",
  },
  Xander: {
    name: "Xander",
    seat: { number: 24 },
    partner: "Leora",
  },
  Adina: {
    name: "Adina",
    seat: { number: 25 },
  },
  Brandon: {
    name: "Brandon",
    seat: { number: 25 },
    partner: "Jordi",
  },
  Bryant: {
    name: "Bryant",
    seat: { number: 25 },
    partner: "Esther",
  },
  Erica: {
    name: "Erica",
    seat: { number: 25 },
  },
  "Gabi Malek": {
    name: "Gabi Malek",
    seat: { number: 25 },
  },
  Jordi: {
    name: "Jordi",
    seat: { number: 25 },
    partner: "Brandon",
  },
  Benny: {
    name: "Benny",
    seat: { number: 26 },
    partner: "Noam",
  },
  Christian: {
    name: "Christian",
    seat: { number: 26 },
    partner: "Jacqueline",
  },
  Esther: {
    name: "Esther",
    seat: { number: 26 },
    partner: "Bryant",
  },
  Felicia: {
    name: "Felicia",
    seat: { number: 26 },
    partner: "Aaron",
  },
  Jacqueline: {
    name: "Jacqueline",
    seat: { number: 26 },
    partner: "Christian",
  },
  Noam: {
    name: "Noam",
    seat: { number: 26 },
    partner: "Benny",
  },
  Aaron: {
    name: "Aaron",
    seat: { number: 27 },
    partner: "Felicia",
  },
  Billy_Schwartz: {
    name: "Billy Schwartz",
    seat: { number: 27 },
    partner: "Suzy",
  },
  Maya_Lowenstein: {
    name: "Maya Lowenstein",
    seat: { number: 27 },
    partner: "Solo",
  },
  Simon_Ungar: {
    name: "Simon Ungar",
    seat: { number: 27 },
  },
  Solo: {
    name: "Solo",
    seat: { number: 27 },
    partner: "Maya_Lowenstein",
  },
  Suzy: {
    name: "Suzy",
    seat: { number: 27 },
    partner: "Billy_Schwartz",
  },
  Alanna_Moness: {
    name: "Alanna Moness",
    seat: { number: 28 },
    partner: "Jonathan_Green",
  },
  Alex_Green: {
    name: "Alex Green",
    seat: { number: 28 },
    partner: "Maya_H",
  },
  Erin: {
    name: "Erin",
    seat: { number: 28 },
  },
  Jonathan_Green: {
    name: "Jonathan Green",
    seat: { number: 28 },
  },
  Maya_H: {
    name: "Maya H",
    seat: { number: 28 },
    partner: "Alex_Green",
  },
  David_Yanofsky: {
    name: "David Yanofsky",
    seat: { number: 28 },
  },
  Adam_Eisen: {
    name: "Adam Eisen",
    seat: { number: 29 },
  },
  Adrien: {
    name: "Adrien",
    seat: { number: 29 },
    partner: "Katherine",
  },
  AJ: {
    name: "AJ",
    seat: { number: 29 },
  },
  David_Beallor: {
    name: "David Beallor",
    seat: { number: 29 },
  },
  Katherine: {
    name: "Katherine",
    seat: { number: 29 },
    partner: "Adrien",
  },
  Nate: {
    name: "Nate",
    seat: { number: 29 },
    partner: "Violet",
  },
  Ahsher: {
    name: "Ahsher",
    seat: { number: 30 },
    partner: "Jesse",
  },
  Jesse: {
    name: "Jesse",
    seat: { number: 30 },
    partner: "Ahsher",
  },
  Josh: {
    name: "Josh",
    seat: { number: 30 },
    partner: "Noah",
  },
  Noah: {
    name: "Noah",
    seat: { number: 30 },
    partner: "Josh",
  },
  Slan: {
    name: "Slan",
    seat: { number: 30 },
  },
  Violet: {
    name: "Violet",
    seat: { number: 30 },
    partner: "Nate",
  },
  Cary: {
    name: "Cary",
    seat: { number: 31 },
    partner: "Lisa_Solomon",
  },
  Ellen: {
    name: "Ellen",
    seat: { number: 31 },
    partner: "Lawrie",
  },
  Shell: {
    name: "Shell",
    seat: { number: 13 },
    partner: "Rachel_Isakow",
  },
  Lawrie: {
    name: "Lawrie",
    seat: { number: 31 },
    partner: "Ellen",
  },
  Lisa_Solomon: {
    name: "Lisa Solomon",
    seat: { number: 32 },
    partner: "Cary",
  },
  Rachel_Isakow: {
    name: "Rachel Isakow",
    seat: { number: 13 },
    partner: "Shell",
  },
  Brian_Hanessian: {
    name: "Brian Hanessian",
    seat: { number: 32 },
    partner: "Linda",
  },
  Carole: {
    name: "Carole",
    seat: { number: 31 },
  },
  Jack_Frieberg: {
    name: "Jack Frieberg",
    seat: { number: 31 },
    partner: "Sandra_Herlick",
  },
  Linda: {
    name: "Linda",
    seat: { number: 32 },
    partner: "Brian_Hanessian",
  },
  Lisa_Shiff: {
    name: "Lisa Shiff",
    seat: { number: 32 },
  },
  Sandra_Herlick: {
    name: "Sandra Herlick",
    seat: { number: 31 },
    partner: "Jack_Frieberg",
  },
  Elliot: {
    name: "Elliot",
    seat: { number: 33 },
    partner: "Perri",
  },
  Howard_Ovens: {
    name: "Howard Ovens",
    seat: { number: 33 },
    partner: "Julie",
  },
  Jason: {
    name: "Jason",
    seat: { number: 32 },
    partner: "Karen_Weinstein",
  },
  Julie: {
    name: "Julie",
    seat: { number: 33 },
    partner: "Howard_Ovens",
  },
  Karen_Weinstein: {
    name: "Karen Weinstein",
    seat: { number: 32 },
    partner: "Jason",
  },
  Perri: {
    name: "Perri",
    seat: { number: 33 },
    partner: "Elliot",
  },
  David_Stevens: {
    name: "David Stevens",
    seat: { number: 34 },
    partner: "Susan_Fromer",
  },
  Janice_Margolis: {
    name: "Janice Margolis",
    seat: { number: 33 },
    partner: "Simon_Margolis",
  },
  Keith: {
    name: "Keith",
    seat: { number: 34 },
    partner: "Wendy",
  },
  Simon_Margolis: {
    name: "Simon Margolis",
    seat: { number: 33 },
    partner: "Janice_Margolis",
  },
  Susan_Fromer: {
    name: "Susan Fromer",
    seat: { number: 34 },
    partner: "David_Stevens",
  },
  Wendy: {
    name: "Wendy",
    seat: { number: 34 },
    partner: "Keith",
  },
  Aviva: {
    name: "Aviva",
    seat: { number: 35 },
    partner: "Paul_Eisen",
  },
  Heather: {
    name: "Heather",
    seat: { number: 34 },
    partner: "Todd",
  },
  Marla: {
    name: "Marla",
    seat: { number: 35 },
    partner: "Rob",
  },
  Paul_Eisen: {
    name: "Paul Eisen",
    seat: { number: 35 },
    partner: "Aviva",
  },
  Rob: {
    name: "Rob",
    seat: { number: 35 },
    partner: "Marla",
  },
  Todd: {
    name: "Todd",
    seat: { number: 34 },
    partner: "Heather",
  },
  Debra_Warsh: {
    name: "Debra Warsh",
    seat: { number: 36 },
    partner: "Steven_Warsh",
  },
  Jon_Hussman: {
    name: "Jon Hussman",
    seat: { number: 35 },
    partner: "Sharon",
  },
  Laura: {
    name: "Laura",
    seat: { number: 36 },
    partner: "Ronnie",
  },
  Ronnie: {
    name: "Ronnie",
    seat: { number: 36 },
    partner: "Laura",
  },
  Sharon: {
    name: "Sharon",
    seat: { number: 35 },
    partner: "Jon_Hussman",
  },
  Steven_Warsh: {
    name: "Steven Warsh",
    seat: { number: 36 },
    partner: "Debra_Warsh",
  },
  Alvin: {
    name: "Alvin",
    seat: { number: 37 }, // Vendor 1
  },
  Ben: {
    name: "Ben",
    seat: { number: 37 }, // Vendor 1
  },
  Mikey: {
    name: "Mikey",
    seat: { number: 37 }, // Vendor 1
  },
  Trent: {
    name: "Trent",
    seat: { number: 37 }, // Vendor 1
  },
  Yamil: {
    name: "Yamil",
    seat: { number: 37 }, // Vendor 1
  },
  Christina: {
    name: "Christina",
    seat: { number: 38 }, // Vendor 2
  },
  Liat: {
    name: "Liat",
    seat: { number: 38 }, // Vendor 2
  },
  Reahannon: {
    name: "Reahannon",
    seat: { number: 38 }, // Vendor 2
  },
  Shana: {
    name: "Shana",
    seat: { number: 38 }, // Vendor 2
  },
  Shreya: {
    name: "Shreya",
    seat: { number: 38 }, // Vendor 2
    partner: "Rudy",
  },
  Rudy: {
    name: "Rudy",
    seat: { number: 38 }, // Vendor 2
    partner: "Shreya",
  },
};
