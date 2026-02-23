import React, { useState, useEffect } from "react";

export default function App() {
  // Reading and Writing Questions - Module 1 (27 questions)
  const readingWritingModule1 = [
    {
      id: "rw1-1",
      passage:
        "Marine biologist Sylvia Earle has spent over 7,000 hours underwater studying ocean ecosystems. Her research has been _____ in documenting the rapid decline of coral reefs worldwide.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) pivotal", "B) suspicious", "C) reluctant", "D) arbitrary"],
      correct: "A",
      explanation:
        '"Pivotal" means crucial or important, which fits the context of significant research.',
    },
    {
      id: "rw1-2",
      passage:
        "The ancient city of Petra, carved into rose-red cliffs in Jordan, _____ by the Nabataeans around 300 BCE and served as a major trading hub.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) was founded",
        "B) founding",
        "C) were founded",
        "D) has founded",
      ],
      correct: "A",
      explanation:
        'Passive voice "was founded" is correct; singular subject "city" requires "was."',
    },
    {
      id: "rw1-3",
      passage:
        "While researching jazz history, Kenji discovered that Louis Armstrong's innovative trumpet playing _____ the genre's development in the 1920s.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) shaped", "B) shapes", "C) will shape", "D) is shaping"],
      correct: "A",
      explanation: 'Past tense "shaped" is correct for events in the 1920s.',
    },
    {
      id: "rw1-4",
      passage:
        "Text 1: Some scientists argue that dreams serve primarily as a mechanism for processing emotions and consolidating memories.\n\nText 2: Recent neuroscience research suggests that dreams may help the brain problem-solve by creating novel connections between unrelated concepts.",
      question:
        "Based on the texts, how would the author of Text 2 most likely respond to Text 1?",
      options: [
        "A) By agreeing that emotional processing is the sole function",
        "B) By suggesting dreams serve an additional cognitive function",
        "C) By rejecting the idea that dreams have any purpose",
        "D) By confirming memory consolidation is impossible",
      ],
      correct: "B",
      explanation:
        "Text 2 presents problem-solving as an additional function beyond emotional processing.",
    },
    {
      id: "rw1-5",
      passage:
        'In "Silent Spring," Rachel Carson documented how pesticides _____ devastating effects on bird populations and other wildlife.',
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) were having", "B) have had", "C) had", "D) will have"],
      correct: "A",
      explanation:
        'Past progressive "were having" indicates ongoing effects during Carson\'s documentation.',
    },
    {
      id: "rw1-6",
      passage:
        "The playwright's use of dramatic irony creates _____ tension; the audience knows crucial information that the characters do not.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) palpable", "B) indifferent", "C) redundant", "D) obsolete"],
      correct: "A",
      explanation:
        '"Palpable" means tangible or intense, accurately describing dramatic tension.',
    },
    {
      id: "rw1-7",
      passage:
        "Photosynthesis is the process by which plants convert light energy into chemical energy. _____ this process, plants produce oxygen as a byproduct.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: ["A) Despite", "B) During", "C) Instead of", "D) Without"],
      correct: "B",
      explanation:
        '"During" correctly indicates when oxygen production occurs.',
    },
    {
      id: "rw1-8",
      passage:
        "The scientist's hypothesis was supported by extensive data; _____ she acknowledged that further research would be needed to confirm the findings.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) therefore,",
        "B) however,",
        "C) for example,",
        "D) similarly,",
      ],
      correct: "B",
      explanation:
        '"However" correctly shows contrast between support and need for more research.',
    },
    {
      id: "rw1-9",
      passage:
        "The museum's new exhibit features artifacts from ancient Egypt, _____ pottery, jewelry, and sculptures dating back thousands of years.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) including:",
        "B) including",
        "C) including;",
        "D) including,",
      ],
      correct: "B",
      explanation:
        'No punctuation is needed before a list introduced by "including."',
    },
    {
      id: "rw1-10",
      passage:
        "Neuroplasticity refers to the brain's ability to reorganize itself by forming new neural connections. This capacity _____ throughout life, though it is especially pronounced during childhood.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) persists",
        "B) deteriorates",
        "C) vanishes",
        "D) stagnates",
      ],
      correct: "A",
      explanation:
        '"Persists" means continues, fitting the context that it lasts throughout life.',
    },
    {
      id: "rw1-11",
      passage:
        "The architect designed the building to maximize natural light; large windows _____ on the southern face to capture sunlight throughout the day.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) was positioned",
        "B) were positioned",
        "C) positioning",
        "D) to position",
      ],
      correct: "B",
      explanation:
        'Plural subject "windows" requires plural verb "were positioned."',
    },
    {
      id: "rw1-12",
      passage:
        "Climate scientists have observed that Arctic sea ice _____ at an unprecedented rate over the past several decades.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) has been melting",
        "B) had melted",
        "C) melts",
        "D) will melt",
      ],
      correct: "A",
      explanation:
        'Present perfect progressive "has been melting" indicates ongoing action continuing to present.',
    },
    {
      id: "rw1-13",
      passage:
        "The novel's protagonist faces a moral _____ she must choose between loyalty to her family and adherence to her personal principles.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) dilemma:", "B) dilemma;", "C) dilemma,", "D) dilemma"],
      correct: "A",
      explanation: "A colon introduces the explanation of what the dilemma is.",
    },
    {
      id: "rw1-14",
      passage:
        "Marie Curie's groundbreaking research on radioactivity _____ her two Nobel Prizes, making her the first person to win the award in two different sciences.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) earned her",
        "B) earning her",
        "C) to earn her",
        "D) earns her",
      ],
      correct: "A",
      explanation:
        'Past tense "earned her" correctly describes the completed action.',
    },
    {
      id: "rw1-15",
      passage:
        "The committee reviewed the proposal _____ ultimately decided to postpone the vote until more information could be gathered.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) and", "B) but", "C) so", "D) or"],
      correct: "A",
      explanation: '"And" connects two sequential actions by the committee.',
    },
    {
      id: "rw1-16",
      passage:
        "Recent archaeological discoveries suggest that trade networks in the ancient world were far more _____ than previously believed.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) extensive", "B) limited", "C) primitive", "D) isolated"],
      correct: "A",
      explanation:
        '"Extensive" means widespread, contrasting with previous beliefs.',
    },
    {
      id: "rw1-17",
      passage:
        "The musician's latest album, _____ was released last month, has already topped the charts in multiple countries.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) that", "B) which", "C) who", "D) where"],
      correct: "B",
      explanation:
        '"Which" is correct for non-essential clauses set off by commas.',
    },
    {
      id: "rw1-18",
      passage:
        "The experiment yielded unexpected results, _____ the researchers to reconsider their initial hypothesis.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) prompted", "B) prompting", "C) prompts", "D) to prompt"],
      correct: "B",
      explanation:
        'Present participle "prompting" correctly shows the consequence of the results.',
    },
    {
      id: "rw1-19",
      passage:
        "The Renaissance was a period of great cultural and intellectual _____ it saw revolutionary developments in art, literature, and science.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) flourishing;",
        "B) flourishing,",
        "C) flourishing:",
        "D) flourishing",
      ],
      correct: "A",
      explanation: "Semicolon correctly joins two related independent clauses.",
    },
    {
      id: "rw1-20",
      passage:
        "After years of careful observation, Jane Goodall revolutionized our understanding of chimpanzee behavior by documenting their use of tools, complex social structures, and _____ emotions.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) displaying",
        "B) display of",
        "C) displayed",
        "D) displays of",
      ],
      correct: "B",
      explanation:
        '"Display of" maintains parallel structure with "use of" and "social structures."',
    },
    {
      id: "rw1-21",
      passage:
        "The author's argument is _____ she provides compelling evidence from multiple reliable sources to support her claims.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) persuasive;",
        "B) dubious;",
        "C) ambiguous;",
        "D) irrelevant;",
      ],
      correct: "A",
      explanation:
        '"Persuasive" fits the context of compelling evidence supporting claims.',
    },
    {
      id: "rw1-22",
      passage:
        "Bioluminescence, the production of light by living organisms, _____ in various species including fireflies, certain fish, and some fungi.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) occur", "B) occurs", "C) occurring", "D) to occur"],
      correct: "B",
      explanation:
        'Singular subject "Bioluminescence" requires singular verb "occurs."',
    },
    {
      id: "rw1-23",
      passage:
        "The study examined the relationship between sleep duration and cognitive performance, _____ that participants who slept seven to eight hours performed significantly better on memory tasks.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) found", "B) finding", "C) finds", "D) to find"],
      correct: "B",
      explanation:
        'Present participle "finding" shows the result of the examination.',
    },
    {
      id: "rw1-24",
      passage:
        "The Great Barrier Reef, _____ stretches for over 2,300 kilometers along Australia's coast, is the world's largest coral reef system.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) that", "B) which", "C) who", "D) where"],
      correct: "B",
      explanation: '"Which" is correct for non-essential clauses about things.',
    },
    {
      id: "rw1-25",
      passage:
        "The economist's predictions proved _____ when market conditions changed unexpectedly, highlighting the challenges of economic forecasting.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) accurate", "B) inaccurate", "C) prescient", "D) prophetic"],
      correct: "B",
      explanation:
        '"Inaccurate" fits the context of unexpected changes making predictions wrong.',
    },
    {
      id: "rw1-26",
      passage:
        "Astronomers using the James Webb Space Telescope _____ evidence of galaxies that formed much earlier than previously thought possible.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) has discovered",
        "B) have discovered",
        "C) discovers",
        "D) discovering",
      ],
      correct: "B",
      explanation:
        'Plural subject "Astronomers" requires plural verb "have discovered."',
    },
    {
      id: "rw1-27",
      passage:
        "The researcher's findings were compelling; _____ they needed to be replicated by other labs before drawing definitive conclusions.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) however,",
        "B) therefore,",
        "C) for example,",
        "D) in addition,",
      ],
      correct: "A",
      explanation:
        '"However" shows contrast between compelling and needing replication.',
    },
  ];

  // Reading and Writing Questions - Module 2 (27 questions)
  const readingWritingModule2 = [
    {
      id: "rw2-1",
      passage:
        "The politician's speech was filled with _____ statements that appealed to voters' emotions rather than presenting concrete policy proposals.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) rhetorical", "B) empirical", "C) technical", "D) literal"],
      correct: "A",
      explanation:
        '"Rhetorical" refers to language designed to persuade through emotion.',
    },
    {
      id: "rw2-2",
      passage:
        "The invention of the printing press in the 15th century _____ the spread of knowledge and contributed to major social and cultural changes.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) facilitate",
        "B) facilitates",
        "C) facilitated",
        "D) facilitating",
      ],
      correct: "C",
      explanation:
        'Past tense "facilitated" matches the 15th century timeframe.',
    },
    {
      id: "rw2-3",
      passage:
        "Unlike traditional batteries that store energy chemically, supercapacitors store energy _____ making them capable of charging and discharging much more rapidly.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) physically,",
        "B) physically;",
        "C) physically:",
        "D) physically",
      ],
      correct: "A",
      explanation: 'Comma before the participial phrase "making them capable."',
    },
    {
      id: "rw2-4",
      passage:
        "The artist's work explores themes of identity and belonging, _____ drawing on her experiences as an immigrant to create powerful visual narratives.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) often", "B) often,", "C) often;", "D) often:"],
      correct: "A",
      explanation:
        'No comma needed before "drawing" as it\'s part of the same clause.',
    },
    {
      id: "rw2-5",
      passage:
        "The discovery of penicillin by Alexander Fleming was largely _____ occurring when he noticed that mold had contaminated one of his bacterial cultures.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) intentional",
        "B) accidental",
        "C) systematic",
        "D) planned",
      ],
      correct: "B",
      explanation:
        '"Accidental" fits the context of an unplanned discovery through contamination.',
    },
    {
      id: "rw2-6",
      passage:
        'Coral reefs, _____ are often called the "rainforests of the sea," support approximately 25% of all marine species despite covering less than 1% of the ocean floor.',
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) that", "B) which", "C) who", "D) where"],
      correct: "B",
      explanation:
        '"Which" is correct for non-essential clauses set off by commas.',
    },
    {
      id: "rw2-7",
      passage:
        "The physicist's theory was initially met with _____ from the scientific community, but subsequent experiments confirmed her predictions.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) enthusiasm",
        "B) skepticism",
        "C) acceptance",
        "D) indifference",
      ],
      correct: "B",
      explanation:
        '"Skepticism" contrasts with later confirmation and makes logical sense.',
    },
    {
      id: "rw2-8",
      passage:
        "The Amazon rainforest plays a crucial role in regulating global climate patterns; _____ its rapid deforestation poses a significant threat to environmental stability.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) similarly,",
        "B) for instance,",
        "C) consequently,",
        "D) in addition,",
      ],
      correct: "C",
      explanation:
        '"Consequently" shows that deforestation is a result of its importance.',
    },
    {
      id: "rw2-9",
      passage:
        "The composer's symphony, which premiered in 1824, _____ audiences with its innovative use of choral voices in the final movement.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) astounded",
        "B) astounding",
        "C) astounds",
        "D) to astound",
      ],
      correct: "A",
      explanation: 'Past tense "astounded" matches the 1824 timeframe.',
    },
    {
      id: "rw2-10",
      passage:
        "Quantum mechanics describes the behavior of matter and energy at the atomic scale, _____ classical physics fails to accurately predict phenomena at this level.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: ["A) because", "B) although", "C) unless", "D) where"],
      correct: "D",
      explanation:
        '"Where" indicates the scale at which classical physics fails.',
    },
    {
      id: "rw2-11",
      passage:
        "The novelist's prose style is characterized by long, complex sentences and elaborate metaphors, _____ some critics find overly ornate while others praise as richly poetic.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) which", "B) that", "C) who", "D) where"],
      correct: "A",
      explanation:
        '"Which" correctly refers to the style in a non-essential clause.',
    },
    {
      id: "rw2-12",
      passage:
        "The anthropologist spent three years living with the community, carefully documenting their customs, beliefs, and _____ practices.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) social", "B) socially", "C) society", "D) societies"],
      correct: "A",
      explanation:
        'Adjective "social" maintains parallel structure with the list.',
    },
    {
      id: "rw2-13",
      passage:
        "Mitochondria, often described as the powerhouses of the cell, _____ the majority of the cell's energy through cellular respiration.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) generates",
        "B) generate",
        "C) generating",
        "D) to generate",
      ],
      correct: "B",
      explanation:
        'Plural subject "Mitochondria" requires plural verb "generate."',
    },
    {
      id: "rw2-14",
      passage:
        "The historian's interpretation of events has been _____ by the discovery of new primary sources that contradict her earlier conclusions.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) validated",
        "B) supported",
        "C) challenged",
        "D) confirmed",
      ],
      correct: "C",
      explanation: '"Challenged" fits the context of contradictory evidence.',
    },
    {
      id: "rw2-15",
      passage:
        "The Civil Rights Movement of the 1950s and 1960s _____ significant legislative changes, including the Civil Rights Act of 1964 and the Voting Rights Act of 1965.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) produced", "B) producing", "C) produces", "D) to produce"],
      correct: "A",
      explanation: 'Past tense "produced" matches the historical timeframe.',
    },
    {
      id: "rw2-16",
      passage:
        "The glacier's retreat over the past century has been well-documented through photographs, satellite imagery, and _____ measurements.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) directly", "B) direct", "C) direction", "D) directing"],
      correct: "B",
      explanation:
        'Adjective "direct" maintains parallel structure with the list.',
    },
    {
      id: "rw2-17",
      passage:
        'The concept of natural selection, _____ Darwin outlined in "On the Origin of Species," fundamentally changed our understanding of biological diversity.',
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) that", "B) which", "C) who", "D) where"],
      correct: "B",
      explanation:
        '"Which" is correct for non-essential clauses about concepts.',
    },
    {
      id: "rw2-18",
      passage:
        "The company's new sustainability initiative aims to reduce carbon emissions by 50% over the next decade, _____ transitioning to renewable energy sources.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) primarily through",
        "B) primarily, through",
        "C) primarily; through",
        "D) primarily: through",
      ],
      correct: "A",
      explanation:
        'No punctuation needed; "primarily through" flows naturally.',
    },
    {
      id: "rw2-19",
      passage:
        "The psychologist's research revealed a strong correlation between social media usage and anxiety levels in teenagers, _____ causation could not be definitively established.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: ["A) and", "B) but", "C) so", "D) for"],
      correct: "B",
      explanation:
        '"But" shows contrast between correlation and inability to prove causation.',
    },
    {
      id: "rw2-20",
      passage:
        "Photosynthesis and cellular respiration are _____ processes: photosynthesis converts light energy into chemical energy, while cellular respiration releases that energy for use by the cell.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) identical",
        "B) complementary",
        "C) contradictory",
        "D) unrelated",
      ],
      correct: "B",
      explanation:
        '"Complementary" fits as they work together in opposite directions.',
    },
    {
      id: "rw2-21",
      passage:
        "The archaeological site, _____ has been continuously excavated for over 50 years, continues to yield artifacts that shed light on ancient civilizations.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) that", "B) which", "C) where", "D) who"],
      correct: "B",
      explanation:
        '"Which" is correct for non-essential clauses about places/things.',
    },
    {
      id: "rw2-22",
      passage:
        "The mathematician's proof was remarkably _____ requiring only a few lines of elegant reasoning to solve a problem that had puzzled researchers for decades.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) convoluted", "B) elaborate", "C) succinct", "D) verbose"],
      correct: "C",
      explanation:
        '"Succinct" means brief and clear, fitting "a few lines of elegant reasoning."',
    },
    {
      id: "rw2-23",
      passage:
        'The Supreme Court\'s decision in Brown v. Board of Education (1954) declared that racial segregation in public schools was unconstitutional, _____ overturning the "separate but equal" doctrine established in Plessy v. Ferguson.',
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) thereby", "B) thereby,", "C) thereby;", "D) thereby:"],
      correct: "A",
      explanation: '"Thereby" needs no punctuation before a participle.',
    },
    {
      id: "rw2-24",
      passage:
        "Artificial intelligence systems have become increasingly _____ capable of performing complex tasks that once required human intelligence.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) sophisticated,",
        "B) primitive,",
        "C) rudimentary,",
        "D) obsolete,",
      ],
      correct: "A",
      explanation:
        '"Sophisticated" means advanced, fitting the context of complex tasks.',
    },
    {
      id: "rw2-25",
      passage:
        "The ecosystem's delicate balance _____ when an invasive species was introduced, leading to the decline of several native populations.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) disrupted",
        "B) was disrupted",
        "C) disrupting",
        "D) disrupts",
      ],
      correct: "B",
      explanation:
        'Passive voice "was disrupted" shows the balance received the action.',
    },
    {
      id: "rw2-26",
      passage:
        "The poet's imagery is vivid and evocative, _____ readers to experience the landscape through multiple senses.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) allowed", "B) allowing", "C) allows", "D) to allow"],
      correct: "B",
      explanation:
        'Present participle "allowing" shows the effect of vivid imagery.',
    },
    {
      id: "rw2-27",
      passage:
        "The geologist's analysis indicated that the rock formation was approximately 2.5 billion years old, making it one of the _____ structures on Earth.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) newest", "B) youngest", "C) oldest", "D) recent"],
      correct: "C",
      explanation: '"Oldest" fits the context of 2.5 billion years old.',
    },
  ];

  // Math Questions - Module 1 (22 questions)
  const mathModule1 = [
    {
      id: "m1-1",
      question: "If 3x + 7 = 22, what is the value of x?",
      options: ["A) 3", "B) 5", "C) 7", "D) 15"],
      correct: "B",
      explanation: "Subtract 7: 3x = 15. Divide by 3: x = 5.",
    },
    {
      id: "m1-2",
      question:
        "A rectangle has length 12 inches and width 5 inches. What is its perimeter?",
      options: ["A) 17 inches", "B) 34 inches", "C) 60 inches", "D) 68 inches"],
      correct: "B",
      explanation: "Perimeter = 2(12 + 5) = 2(17) = 34 inches.",
    },
    {
      id: "m1-3",
      question: "If y = 2x - 3 and x = 4, what is the value of y?",
      options: ["A) 1", "B) 5", "C) 8", "D) 11"],
      correct: "B",
      explanation: "y = 2(4) - 3 = 8 - 3 = 5.",
    },
    {
      id: "m1-4",
      question: "What is 30% of 80?",
      options: ["A) 24", "B) 26", "C) 28", "D) 30"],
      correct: "A",
      explanation: "0.30 × 80 = 24.",
    },
    {
      id: "m1-5",
      question: "Which expression is equivalent to 4(x + 3) - 2x?",
      options: ["A) 2x + 3", "B) 2x + 12", "C) 6x + 3", "D) 6x + 12"],
      correct: "B",
      explanation: "4x + 12 - 2x = 2x + 12.",
    },
    {
      id: "m1-6",
      question:
        "If a store sells notebooks for $3 each and Sarah buys n notebooks, which expression represents the total cost?",
      options: ["A) 3 + n", "B) 3n", "C) n/3", "D) n - 3"],
      correct: "B",
      explanation: "Total cost = price × quantity = 3n.",
    },
    {
      id: "m1-7",
      question:
        "A number increased by 25% equals 75. What was the original number?",
      options: ["A) 50", "B) 55", "C) 60", "D) 65"],
      correct: "C",
      explanation: "1.25x = 75, so x = 60.",
    },
    {
      id: "m1-8",
      question:
        "What is the slope of a line passing through points (2, 3) and (6, 11)?",
      options: ["A) 1", "B) 2", "C) 4", "D) 8"],
      correct: "B",
      explanation: "Slope = (11-3)/(6-2) = 8/4 = 2.",
    },
    {
      id: "m1-9",
      question: "If x² = 49, what are all possible values of x?",
      options: ["A) 7 only", "B) -7 only", "C) 7 and -7", "D) 49"],
      correct: "C",
      explanation: "x² = 49 means x = ±7.",
    },
    {
      id: "m1-10",
      question:
        "A circle has a radius of 5 cm. What is its circumference? (Use π ≈ 3.14)",
      options: ["A) 15.7 cm", "B) 31.4 cm", "C) 78.5 cm", "D) 157 cm"],
      correct: "B",
      explanation: "C = 2πr = 2(3.14)(5) = 31.4 cm.",
    },
    {
      id: "m1-11",
      question: "If 5x - 3 = 2x + 9, what is x?",
      options: ["A) 2", "B) 3", "C) 4", "D) 6"],
      correct: "C",
      explanation: "5x - 2x = 9 + 3, so 3x = 12, x = 4.",
    },
    {
      id: "m1-12",
      question: "The average of five numbers is 20. What is their sum?",
      options: ["A) 4", "B) 25", "C) 100", "D) 120"],
      correct: "C",
      explanation: "Sum = average × count = 20 × 5 = 100.",
    },
    {
      id: "m1-13",
      question:
        "A triangle has angles measuring 45° and 60°. What is the measure of the third angle?",
      options: ["A) 65°", "B) 70°", "C) 75°", "D) 80°"],
      correct: "C",
      explanation: "180° - 45° - 60° = 75°.",
    },
    {
      id: "m1-14",
      question: "If 2x + y = 10 and x = 3, what is y?",
      options: ["A) 2", "B) 4", "C) 6", "D) 7"],
      correct: "B",
      explanation: "2(3) + y = 10, so 6 + y = 10, y = 4.",
    },
    {
      id: "m1-15",
      question: "What is the value of 3² + 4²?",
      options: ["A) 7", "B) 14", "C) 25", "D) 49"],
      correct: "C",
      explanation: "9 + 16 = 25.",
    },
    {
      id: "m1-16",
      question:
        "A shirt originally costs $40 and is on sale for 20% off. What is the sale price?",
      options: ["A) $8", "B) $20", "C) $32", "D) $38"],
      correct: "C",
      explanation: "20% off means pay 80%: 0.80 × $40 = $32.",
    },
    {
      id: "m1-17",
      question: "If f(x) = 2x + 5, what is f(3)?",
      options: ["A) 8", "B) 10", "C) 11", "D) 13"],
      correct: "C",
      explanation: "f(3) = 2(3) + 5 = 6 + 5 = 11.",
    },
    {
      id: "m1-18",
      question:
        "What is the area of a triangle with base 8 cm and height 6 cm?",
      options: ["A) 14 cm²", "B) 24 cm²", "C) 28 cm²", "D) 48 cm²"],
      correct: "B",
      explanation: "Area = ½ × base × height = ½ × 8 × 6 = 24 cm².",
    },
    {
      id: "m1-19",
      question: "If x/4 = 7, what is x?",
      options: ["A) 3", "B) 11", "C) 28", "D) 32"],
      correct: "C",
      explanation: "Multiply both sides by 4: x = 28.",
    },
    {
      id: "m1-20",
      question: "What is the median of the set {3, 7, 2, 9, 5}?",
      options: ["A) 3", "B) 5", "C) 6", "D) 7"],
      correct: "B",
      explanation: "Ordered: {2, 3, 5, 7, 9}. Middle value is 5.",
    },
    {
      id: "m1-21",
      question: "If 3(x - 2) = 15, what is x?",
      options: ["A) 5", "B) 7", "C) 9", "D) 11"],
      correct: "B",
      explanation: "3x - 6 = 15, so 3x = 21, x = 7.",
    },
    {
      id: "m1-22",
      question:
        "A rectangle has area 48 square meters and width 6 meters. What is its length?",
      options: ["A) 6 m", "B) 8 m", "C) 10 m", "D) 12 m"],
      correct: "B",
      explanation: "Area = length × width, so 48 = length × 6, length = 8 m.",
    },
  ];

  // Math Questions - Module 2 (22 questions) - Due to character limit, I'll continue with remaining code
  const mathModule2 = [
    {
      id: "m2-1",
      question: "If f(x) = x² - 4x + 3, what is f(5)?",
      options: ["A) 4", "B) 8", "C) 12", "D) 18"],
      correct: "B",
      explanation: "f(5) = 25 - 20 + 3 = 8.",
    },
    {
      id: "m2-2",
      question:
        "In a right triangle, one leg is 6 and the hypotenuse is 10. What is the other leg?",
      options: ["A) 4", "B) 6", "C) 8", "D) 12"],
      correct: "C",
      explanation: "6² + b² = 10², so 36 + b² = 100, b² = 64, b = 8.",
    },
    {
      id: "m2-3",
      question: "If (x - 3)(x + 2) = 0, what are all possible values of x?",
      options: ["A) -3 and 2", "B) 3 and -2", "C) -3 and -2", "D) 3 and 2"],
      correct: "B",
      explanation: "x - 3 = 0 gives x = 3; x + 2 = 0 gives x = -2.",
    },
    {
      id: "m2-4",
      question: "A line passes through (2, 5) and (4, 11). What is its slope?",
      options: ["A) 2", "B) 3", "C) 4", "D) 6"],
      correct: "B",
      explanation: "Slope = (11-5)/(4-2) = 6/2 = 3.",
    },
    {
      id: "m2-5",
      question: "If 2ˣ = 32, what is x?",
      options: ["A) 4", "B) 5", "C) 6", "D) 16"],
      correct: "B",
      explanation: "2⁵ = 32, so x = 5.",
    },
    {
      id: "m2-6",
      question: "What is the solution to |x - 3| = 7?",
      options: [
        "A) x = 10 only",
        "B) x = -4 only",
        "C) x = 10 or x = -4",
        "D) x = 4 or x = -10",
      ],
      correct: "C",
      explanation: "x - 3 = 7 gives x = 10; x - 3 = -7 gives x = -4.",
    },
    {
      id: "m2-7",
      question: "If x² + 6x + 9 = 0, what is x?",
      options: ["A) -3", "B) 3", "C) -9", "D) 9"],
      correct: "A",
      explanation: "(x + 3)² = 0, so x = -3.",
    },
    {
      id: "m2-8",
      question:
        "A cylinder has radius 3 cm and height 5 cm. What is its volume? (Use π ≈ 3.14)",
      options: ["A) 47.1 cm³", "B) 94.2 cm³", "C) 141.3 cm³", "D) 188.4 cm³"],
      correct: "C",
      explanation: "V = πr²h = 3.14 × 9 × 5 = 141.3 cm³.",
    },
    {
      id: "m2-9",
      question: "If log₂(x) = 4, what is x?",
      options: ["A) 2", "B) 8", "C) 16", "D) 32"],
      correct: "C",
      explanation: "2⁴ = 16, so x = 16.",
    },
    {
      id: "m2-10",
      question: "What is the distance between points (1, 2) and (4, 6)?",
      options: ["A) 3", "B) 4", "C) 5", "D) 7"],
      correct: "C",
      explanation: "d = √[(4-1)² + (6-2)²] = √[9+16] = √25 = 5.",
    },
    {
      id: "m2-11",
      question: "If sin(θ) = 0.5 and 0° < θ < 90°, what is θ?",
      options: ["A) 15°", "B) 30°", "C) 45°", "D) 60°"],
      correct: "B",
      explanation: "sin(30°) = 0.5.",
    },
    {
      id: "m2-12",
      question: "What is the sum of the first 10 positive integers?",
      options: ["A) 45", "B) 50", "C) 55", "D) 60"],
      correct: "C",
      explanation: "Sum = n(n+1)/2 = 10(11)/2 = 55.",
    },
    {
      id: "m2-13",
      question: "If 2x + 3y = 12 and x = 3, what is y?",
      options: ["A) 1", "B) 2", "C) 3", "D) 4"],
      correct: "B",
      explanation: "2(3) + 3y = 12, so 6 + 3y = 12, 3y = 6, y = 2.",
    },
    {
      id: "m2-14",
      question:
        "A sequence follows the pattern: 2, 6, 18, 54, ... What is the next term?",
      options: ["A) 108", "B) 126", "C) 162", "D) 216"],
      correct: "C",
      explanation: "Each term is multiplied by 3: 54 × 3 = 162.",
    },
    {
      id: "m2-15",
      question: "If x⁴ = 81, what is x (considering only positive values)?",
      options: ["A) 2", "B) 3", "C) 9", "D) 27"],
      correct: "B",
      explanation: "3⁴ = 81, so x = 3.",
    },
    {
      id: "m2-16",
      question:
        "The ratio of boys to girls in a class is 3:5. If there are 15 boys, how many girls are there?",
      options: ["A) 9", "B) 18", "C) 20", "D) 25"],
      correct: "D",
      explanation: "3/5 = 15/x, so 3x = 75, x = 25.",
    },
    {
      id: "m2-17",
      question: "If a² + b² = 25 and a = 3, what is b (positive value)?",
      options: ["A) 2", "B) 4", "C) 5", "D) 16"],
      correct: "B",
      explanation: "9 + b² = 25, so b² = 16, b = 4.",
    },
    {
      id: "m2-18",
      question: "What is the y-intercept of the line 3x + 4y = 12?",
      options: ["A) 3", "B) 4", "C) 12", "D) -3"],
      correct: "A",
      explanation: "When x = 0: 4y = 12, so y = 3.",
    },
    {
      id: "m2-19",
      question:
        "If x varies inversely with y and x = 4 when y = 6, what is x when y = 8?",
      options: ["A) 2", "B) 3", "C) 5", "D) 6"],
      correct: "B",
      explanation: "xy = k, so 4×6 = 24. When y = 8: x×8 = 24, x = 3.",
    },
    {
      id: "m2-20",
      question:
        "A sphere has a radius of 3 cm. What is its surface area? (Use π ≈ 3.14)",
      options: [
        "A) 28.26 cm²",
        "B) 56.52 cm²",
        "C) 113.04 cm²",
        "D) 226.08 cm²",
      ],
      correct: "C",
      explanation: "Surface area = 4πr² = 4 × 3.14 × 9 = 113.04 cm².",
    },
    {
      id: "m2-21",
      question: "If f(x) = 3x - 2 and g(x) = x + 4, what is f(g(2))?",
      options: ["A) 10", "B) 12", "C) 14", "D) 16"],
      correct: "D",
      explanation: "g(2) = 6, then f(6) = 3(6) - 2 = 16.",
    },
    {
      id: "m2-22",
      question:
        "In a geometric sequence, the first term is 5 and the common ratio is 2. What is the 4th term?",
      options: ["A) 20", "B) 30", "C) 40", "D) 50"],
      correct: "C",
      explanation: "4th term = 5 × 2³ = 5 × 8 = 40.",
    },
  ];

  // --- PASTE THIS OVER THE DELETED LINES ---
  const [view, setView] = React.useState("start");
  const [section, setSection] = React.useState("reading");
  const [module, setModule] = React.useState(1);
  const [qIdx, setQIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = React.useState(32 * 60);

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (view === "test" && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  // Point to the correct list of questions based on where the student is
  let currentQuestions: Array<{ id: string; question?: string; options?: string[]; passage?: string; image?: string }> = [];
  if (section === "reading" && module === 1)
    currentQuestions = readingWritingModule1;
  else if (section === "reading" && module === 2)
    currentQuestions = readingWritingModule2;
  else if (section === "math" && module === 1) currentQuestions = mathModule1;
  else if (section === "math" && module === 2) currentQuestions = mathModule2;

  const q = currentQuestions[qIdx];

  const handleNext = () => {
    if (qIdx < currentQuestions.length - 1) {
      setQIdx(qIdx + 1);
    } else {
      if (module === 1) {
        setModule(2);
        setQIdx(0);
        setTimeLeft(section === "reading" ? 32 * 60 : 35 * 60);
      } else if (section === "reading") {
        setSection("math");
        setModule(1);
        setQIdx(0);
        setTimeLeft(35 * 60);
      } else {
        setView("results");
      }
    }
  };

  if (view === "start")
    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Digital SAT Practice Test</h1>
        <button
          onClick={() => setView("test")}
          style={{
            padding: "15px 50px",
            fontSize: "20px",
            background: "#0052cc",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          START TEST
        </button>
      </div>
    );

  if (view === "results")
    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h2>Test Complete!</h2>
        <button
          onClick={() =>
            (window.location.href = `mailto:YOUR_EMAIL@gmail.com?subject=Results`)
          }
          style={{
            padding: "20px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          SUBMIT TO TEACHER
        </button>
      </div>
    );

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>
          {section.toUpperCase()} - Module {module}
        </h2>
        <h2 style={{ color: "red" }}>
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </h2>
      </div>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div
          style={{
            flex: 1,
            padding: "40px",
            overflowY: "auto",
            borderRight: "1px solid #ccc",
            background: "#fafafa",
          }}
        >
          {q?.passage && (
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{q.passage}</p>
          )}
          {q?.image && (
            <img
              src={q.image}
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
              alt="Visual"
            />
          )}
        </div>
        <div style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            {qIdx + 1}. {q?.question}
          </p>
          {q?.options?.map((opt: string) => (
            <button
              key={opt}
              onClick={() => setAnswers({ ...answers, [q.id]: opt.charAt(0) })}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "15px",
                margin: "10px 0",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background:
                  answers[q.id] === opt.charAt(0) ? "#e8f0fe" : "white",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          textAlign: "right",
          borderTop: "1px solid #ccc",
        }}
      >
        <button
          onClick={handleNext}
          style={{
            padding: "15px 40px",
            background: "black",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
