import type { PoolModule } from "../poolTypes";

export const rwM1F: PoolModule = {
  id: "rw-m1-f",
  type: "rw-m1",
  label: "R&W Module 1 (Set F — Digital SAT Reading_1)",
  m2EasierModuleId: "rw-m2-easier",
  m2HarderModuleId: "rw-m2-reading1-harder",
  questions: [
    {
      id: "rw1f-1",
      passage:
        "Many art historians argue that the street art of the 1980s was inherently ______, as the murals and tags were constantly painted over by city officials or weathered away by the elements within weeks of their creation.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) prominent",
        "B) ephemeral",
        "C) derivative",
        "D) lucrative",
      ],
      correct: "B",
      explanation:
        "\"Ephemeral\" means lasting for a very short time, which fits murals that are \"constantly painted over... within weeks.\"",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw1f-2",
      passage:
        "To successfully engineer crops capable of surviving prolonged droughts, botanists must identify specific genetic markers that ______ the effects of dehydration, allowing the plants to retain moisture even in arid conditions.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) exacerbate",
        "B) simulate",
        "C) mitigate",
        "D) isolate",
      ],
      correct: "C",
      explanation:
        "\"Mitigate\" means to make less severe. Botanists want to lessen (mitigate) the negative effects of dehydration.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw1f-3",
      passage:
        "In his political essays, George Orwell frequently criticized authors who used overly complex jargon and passive voice. He argued that such stylistic choices do not clarify the author's intent, but rather ______ it, hiding weak arguments behind a veil of intellectualism.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) obfuscate",
        "B) elucidate",
        "C) corroborate",
        "D) transcend",
      ],
      correct: "A",
      explanation:
        "\"Obfuscate\" means to make obscure, unclear, or unintelligible. This directly contrasts with \"clarify.\"",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw1f-4",
      passage:
        "The following text is adapted from Nathaniel Hawthorne's 1850 novel, The Scarlet Letter.\n\nThe founders of a new colony, whatever Utopia of human virtue and happiness they might originally project, have invariably recognized it among their earliest practical necessities to allot a portion of the virgin soil as a cemetery, and another portion as the site of a prison.",
      question: "Which choice best states the main purpose of the text?",
      options: [
        "A) To criticize the founders of the colony for abandoning their utopian ideals so quickly.",
        "B) To illustrate the architectural priorities of early colonists in North America.",
        "C) To suggest that human mortality and moral failure are inevitable realities of any society.",
        "D) To contrast the beauty of the virgin soil with the grim reality of the colonial prison.",
      ],
      correct: "C",
      explanation:
        "The text argues that no matter how \"utopian\" an ideal society is, they immediately recognize the need for a cemetery (death) and a prison (crime/moral failure).",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw1f-5",
      passage:
        "Text 1\n\nFor decades, historians attributed the collapse of the Classic Maya civilization (circa 900 CE) primarily to prolonged periods of severe drought. The Yucatan Peninsula lacks surface water, making its inhabitants highly vulnerable to shifts in rainfall. Ice core samples from the era show a distinct decrease in precipitation, leading many to conclude that agricultural failure drove the population out of the cities.\n\nText 2\n\nRecent archaeological excavations have complicated the \"drought\" narrative of the Maya collapse. While climatic shifts certainly occurred, researchers have discovered evidence of massive defensive walls and burned structures dating to the same period, suggesting that internal warfare and the breakdown of trade routes may have played a far more direct role in the civilization's fracturing than environmental factors alone.",
      question:
        "Based on the texts, how would the author of Text 2 most likely respond to the conclusion reached by the \"historians\" in Text 1?",
      options: [
        "A) By agreeing that drought was the sole cause of the collapse, but arguing that it was a local, rather than regional, phenomenon.",
        "B) By arguing that archaeological evidence from ice cores is an unreliable method for determining historical weather patterns.",
        "C) By asserting that agricultural failure was actually caused by warfare rather than by a lack of rainfall.",
        "D) By emphasizing that environmental factors represent only a partial explanation for a collapse that was also driven by societal conflict.",
      ],
      correct: "D",
      explanation:
        "Text 2 agrees climate shifts occurred but introduces warfare/trade breakdown, showing that the single-cause drought theory (Text 1) is only part of the story.",
      domain: "craft_structure",
      subdomain: "cross_text",
    },
    {
      id: "rw1f-6",
      passage:
        "Tardigrades, also known as water bears, are microscopic animals famous for their extreme resilience. When faced with life-threatening environmental conditions—such as extreme heat, freezing temperatures, or severe dehydration—tardigrades enter a state of suspended animation known as cryptobiosis. During cryptobiosis, a tardigrade's metabolism lowers to less than 0.01% of its normal rate, and its water content drops to 1%. Only when favorable conditions return will the tardigrade rehydrate and resume its normal biological functions.",
      question: "Which choice best states the main idea of the text?",
      options: [
        "A) Tardigrades are the only animals capable of surviving extreme dehydration.",
        "B) Tardigrades survive harsh environments by drastically reducing their metabolic activity.",
        "C) Cryptobiosis is a process that permanently alters the cellular structure of tardigrades.",
        "D) A tardigrade's metabolism is directly dependent on the amount of water in its environment.",
      ],
      correct: "B",
      explanation:
        "The paragraph focuses on how tardigrades survive extreme conditions by entering cryptobiosis, a state of drastically lowered metabolism.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw1f-7",
      passage:
        "A team of marine biologists is studying the vocalizations of humpback whales. The researchers hypothesize that male humpback whales alter the frequency of their songs depending on the density of the whale population in their immediate vicinity, singing at a higher pitch when in crowded waters to ensure their songs stand out against the ambient noise of other whales.",
      question:
        "Which finding, if true, would most directly support the researchers' hypothesis?",
      options: [
        "A) Male whales sing louder, but not at a higher pitch, when female whales are present.",
        "B) Recordings taken in sparsely populated waters feature male songs with significantly lower frequencies than those recorded in densely populated waters.",
        "C) The ambient noise in crowded ocean waters is primarily composed of high-frequency sounds from marine life other than whales.",
        "D) Both male and female humpback whales increase the length of their songs when the local population density increases.",
      ],
      correct: "B",
      explanation:
        "If the hypothesis is that whales sing at a higher pitch in crowded waters, then sparsely populated waters should show the opposite (lower frequencies).",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw1f-8",
      passage:
        "In the late 19th century, the introduction of the Bessemer process revolutionized the steel industry by making the mass production of steel drastically cheaper and more efficient. Prior to this, iron was the primary structural material for bridges and buildings, despite being brittle and prone to structural failure under heavy loads. Because the Bessemer process made durable steel widely accessible, ______",
      question: "Which choice most logically completes the text?",
      options: [
        "A) the use of iron in construction completely ceased by the turn of the 20th century.",
        "B) architects were able to design taller, more structurally sound buildings than was previously possible.",
        "C) the cost of constructing bridges became the primary concern for urban planners.",
        "D) the Bessemer process was quickly replaced by even more advanced manufacturing techniques.",
      ],
      correct: "B",
      explanation:
        "If steel was durable and accessible (unlike brittle iron), it logically follows that builders could construct taller, stronger buildings.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw1f-9",
      passage:
        "The Venus flytrap is a carnivorous plant native to the subtropical wetlands on the East Coast of the United States. Unlike most plants, which rely solely on soil and sunlight for ______ the Venus flytrap obtains essential nutrients by trapping and digesting insects.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) sustenance,",
        "B) sustenance;",
        "C) sustenance:",
        "D) sustenance",
      ],
      correct: "A",
      explanation:
        "\"Unlike most plants, which rely solely on soil and sunlight for sustenance\" is an introductory dependent clause. It must be followed by a comma.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1f-10",
      passage:
        "In an effort to reduce the city's carbon footprint, the mayor, along with several prominent members of the city council, ______ a new initiative to heavily subsidize public transportation over the next five years.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) propose",
        "B) proposes",
        "C) proposing",
        "D) have proposed",
      ],
      correct: "B",
      explanation:
        "The subject is \"the mayor\" (singular). The phrase \"along with...\" is an interrupting modifier and does not make the subject plural. Therefore, the singular verb \"proposes\" is required.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1f-11",
      passage:
        "Recognized as one of the most influential figures in modern dance, ______ choreography revolutionized the way movement was used to express psychological complexity on stage.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) Martha Graham's",
        "B) the performances of Martha Graham's",
        "C) Martha Graham, whose",
        "D) Martha Graham and her",
      ],
      correct: "A",
      explanation:
        "The introductory modifier describes the choreography (the work). The possessive \"Martha Graham's\" correctly links the modifier to \"choreography\" as the subject that revolutionized.",
      domain: "craft_structure",
      subdomain: "form_structure",
    },
    {
      id: "rw1f-12",
      passage:
        "During the Industrial Revolution, the advent of steam-powered machinery led to a massive increase in factory production. ______ traditional artisans and craftspeople found themselves unable to compete with the speed and cost-effectiveness of these new manufacturing methods.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Consequently,",
        "B) Furthermore,",
        "C) Nevertheless,",
        "D) In contrast,",
      ],
      correct: "A",
      explanation:
        "The first sentence presents a cause (advent of machinery = mass production). The second presents the effect (traditional artisans couldn't compete). \"Consequently\" means as a result.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw1f-13",
      passage:
        "Many tech companies offer their employees unlimited paid time off, hoping that this perk will increase job satisfaction and prevent burnout. ______ internal surveys often reveal that employees with unlimited policies actually take fewer vacation days than those with a traditional, fixed number of days off.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Similarly,",
        "B) For example,",
        "C) However,",
        "D) Therefore,",
      ],
      correct: "C",
      explanation:
        "The first sentence states the expected positive outcome of a policy. The second states the opposite reality. \"However\" indicates this contrast.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw1f-14",
      passage:
        "While researching a topic, a student has taken the following notes:\n\n• Octavia Butler was an American science fiction author.\n• Her 1979 novel \"Kindred\" blends elements of science fiction and historical fiction.\n• The novel follows a modern African American woman who repeatedly travels back in time to a pre-Civil War Maryland plantation.\n• Butler used the time-travel narrative to explore the enduring legacy of slavery in the United States.\n• She won the Hugo Award for her work in the science fiction genre.\n\nThe student wants to emphasize the thematic purpose of the time-travel element in Kindred. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      question: "",
      options: [
        "A) Octavia Butler, an award-winning science fiction author, wrote the novel Kindred in 1979.",
        "B) In Kindred, the protagonist repeatedly travels back in time to a Maryland plantation prior to the Civil War.",
        "C) Blending science fiction and historical fiction, Kindred follows a modern African American woman's experiences.",
        "D) Octavia Butler utilized time travel in her novel Kindred as a mechanism to examine the lasting impacts of slavery.",
      ],
      correct: "D",
      explanation:
        "The prompt specifically asks to emphasize the thematic purpose of time travel. Only choice D mentions time travel used as a \"mechanism to examine the lasting impacts of slavery.\"",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw1f-15",
      passage:
        "The following text is adapted from Edith Wharton's 1920 novel, The Age of Innocence.\n\nNewland Archer, during this brief episode, had been thrown into a strange state of embarrassment. It was annoying that the box which was thus attracting the undivided attention of masculine New York should be that in which his betrothed was seated between her mother and aunt; and for a moment he could not identify the lady in the Empire dress, nor imagine why her presence created such excitement among the initiated. Then light dawned on him, and with it came a momentary rush of indignation. No, indeed; no one would have guessed the truth.",
      question:
        "Which choice best describes the function of the underlined sentence in the text as a whole?",
      options: [
        "A) It indicates a sudden shift in the protagonist's emotional state from confusion to anger.",
        "B) It reveals the protagonist's realization that his betrothed has been deceiving him.",
        "C) It highlights the protagonist's deep knowledge of New York high society.",
        "D) It introduces a flashback that explains the origins of the protagonist's current dilemma.",
      ],
      correct: "A",
      explanation:
        "The underlined sentence describes \"light dawned\" (realization) and \"a momentary rush of indignation\"—a shift from confusion to anger.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw1f-16",
      passage:
        "Text 1\n\nFor many years, paleontologists assumed that dinosaurs, like modern reptiles, were ectothermic (cold-blooded). Ectotherms rely on environmental heat sources to regulate their body temperature. However, the discovery of feathered dinosaurs and evidence of rapid growth rates in many species led a new wave of researchers to argue that dinosaurs must have been endothermic (warm-blooded), generating their own internal heat like modern birds and mammals.\n\nText 2\n\nRecent analyses of dinosaur bone growth rings suggest a more nuanced picture of their metabolism. John Grady and his team propose that dinosaurs were neither fully ectothermic nor fully endothermic, but rather \"mesothermic.\" Mesotherms can generate metabolic heat, but they do not maintain the strict, constant body temperature seen in mammals. This intermediate strategy would have allowed dinosaurs to grow quickly and move rapidly without the massive caloric demands of true endothermy.",
      question:
        "Based on the texts, how would the author of Text 2 most likely respond to the \"new wave of researchers\" mentioned in Text 1?",
      options: [
        "A) By agreeing that dinosaurs generated internal heat, but arguing that their metabolic system was less demanding than that of modern mammals.",
        "B) By rejecting the idea that dinosaurs could generate any internal heat, arguing instead that rapid growth was due to environmental factors.",
        "C) By asserting that only feathered dinosaurs were capable of endothermy, while the rest remained strictly ectothermic.",
        "D) By suggesting that bone growth rings are an unreliable method for determining the metabolic rates of extinct species.",
      ],
      correct: "A",
      explanation:
        "Text 2 agrees dinosaurs could generate metabolic heat (mesotherms) but argues they did not maintain the strict constant temperature of mammals—so less demanding than true endothermy.",
      domain: "craft_structure",
      subdomain: "cross_text",
    },
    {
      id: "rw1f-17",
      passage:
        "The introduction of the commercial telegraph in the mid-19th century profoundly altered the nature of journalism. Before the telegraph, news traveled at the speed of ships and horses, meaning that reports from distant events were often weeks or months old by the time they reached readers. The telegraph allowed for the near-instantaneous transmission of information across vast distances. Consequently, newspapers shifted their focus from publishing lengthy, delayed essays and partisan commentary to providing timely, objective reports of daily events.",
      question: "Which choice best states the main idea of the text?",
      options: [
        "A) The telegraph was initially rejected by journalists who preferred writing lengthy, partisan essays.",
        "B) The invention of the telegraph caused a shift in journalism toward faster, more fact-based reporting.",
        "C) Prior to the telegraph, newspapers were unable to publish any news from outside their local communities.",
        "D) The telegraph remains the most significant technological advancement in the history of communication.",
      ],
      correct: "B",
      explanation:
        "The passage describes how the telegraph enabled timely transmission and led newspapers to shift from lengthy, partisan essays to timely, objective reports.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw1f-18",
      passage:
        "A marine biologist is studying the effects of ocean acidification on the shell thickness of a specific species of marine snail (Pteropod limacina). The biologist claims that as the acidity of the ocean water increases (indicated by a lower pH level), the average shell thickness of the snails decreases.",
      question:
        "Which finding from a recent field study, if true, would most directly support the biologist's claim?",
      options: [
        "A) Snails collected from a region with a pH of 8.1 had an average shell thickness of 0.15 mm, while those from a region with a pH of 7.9 had an average shell thickness of 0.12 mm.",
        "B) Snails collected from a region with a pH of 7.9 had an average shell thickness of 0.15 mm, while those from a region with a pH of 8.1 had an average shell thickness of 0.12 mm.",
        "C) The population size of Pteropod limacina was significantly lower in regions with a pH of 7.9 than in regions with a pH of 8.1.",
        "D) Laboratory-raised snails exhibited a wider variation in shell thickness than snails collected from the wild, regardless of the water's pH.",
      ],
      correct: "A",
      explanation:
        "Lower pH (7.9) corresponds to lower shell thickness (0.12 mm); higher pH (8.1) to higher thickness (0.15 mm). This supports the claim that increased acidity (lower pH) decreases shell thickness.",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw1f-19",
      passage:
        "In many ancient Roman cities, the forum served as the primary center of public life. While it functioned as a bustling marketplace, its significance extended far beyond commerce. The forum was the site of important religious temples, government buildings where magistrates held court, and open spaces where citizens gathered for political rallies and public speeches. By centralizing these various institutions in one location, ______",
      question: "Which choice most logically completes the text?",
      options: [
        "A) the Romans ensured that commercial activities were strictly separated from religious and political affairs.",
        "B) the forum effectively integrated the economic, civic, and spiritual activities of the community.",
        "C) city planners were forced to build residential neighborhoods at a great distance from the city center.",
        "D) ancient magistrates were able to completely eliminate the need for specialized marketplaces elsewhere in the city.",
      ],
      correct: "B",
      explanation:
        "The passage describes the forum as combining marketplace, religious, and political functions in one place—integrating economic, civic, and spiritual activities.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw1f-20",
      passage:
        "While studying the migratory patterns of Monarch butterflies, researchers discovered that the insects rely on a time-compensated sun compass in their ______ allows them to navigate thousands of miles to their wintering grounds in Mexico.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) brains, this",
        "B) brains this",
        "C) brains, which",
        "D) brains. Which",
      ],
      correct: "C",
      explanation:
        "A relative clause is needed to modify \"brains.\" \"Which\" introduces the clause that explains what in their brains allows navigation. A comma before \"which\" is correct.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1f-21",
      passage:
        "The extensive collection of rare manuscripts, which includes several original drafts of poems by Emily Dickinson and a previously unknown letter written by Walt Whitman, ______ recently acquired by the university's archives.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) were",
        "B) was",
        "C) have been",
        "D) are",
      ],
      correct: "B",
      explanation:
        "The subject is \"The extensive collection\" (singular). The \"which\" clause is an interrupting modifier. The singular verb \"was\" is required.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1f-22",
      passage:
        "Recognizing the need for a more durable building material, ______ a process for creating a type of concrete that could cure underwater, an innovation that revolutionized the construction of bridges and ports.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) the Roman engineers developed",
        "B) the development of Roman engineers was",
        "C) a process was developed by Roman engineers for",
        "D) it was Roman engineers who developed",
      ],
      correct: "A",
      explanation:
        "The introductory participle \"Recognizing...\" must modify the subject that follows. \"The Roman engineers\" correctly identifies who recognized and who developed.",
      domain: "craft_structure",
      subdomain: "form_structure",
    },
    {
      id: "rw1f-23",
      passage:
        "During the 1920s, the Harlem Renaissance fostered a vibrant explosion of African American art, literature, and music in New York City. ______ figures like Langston Hughes and Zora Neale Hurston gained national prominence, challenging racial stereotypes through their powerful creative works.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) In contrast,",
        "B) Consequently,",
        "C) During this time,",
        "D) Previously,",
      ],
      correct: "B",
      explanation:
        "The first sentence describes the Renaissance fostering an explosion of art; the second describes a result—figures gaining prominence. \"Consequently\" signals this cause-effect.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw1f-24",
      passage:
        "Many companies have implemented mandatory \"return-to-office\" policies, arguing that in-person collaboration fosters innovation and strengthens company culture. ______ numerous studies have shown that employees who are allowed to work remotely often report higher levels of productivity and job satisfaction.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Furthermore,",
        "B) Similarly,",
        "C) Conversely,",
        "D) For instance,",
      ],
      correct: "C",
      explanation:
        "The first sentence states the companies' preference for in-office work; the second presents opposing evidence (remote workers more productive). \"Conversely\" signals this contrast.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw1f-25",
      passage:
        "To ensure the survival of the endangered snow leopard, conservationists are working with local herders to build predator-proof corrals for their livestock. ______ herders are less likely to hunt the snow leopards in retaliation for lost sheep and goats.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) By doing so,",
        "B) In spite of this,",
        "C) Earlier,",
        "D) Alternatively,",
      ],
      correct: "A",
      explanation:
        "Building corrals protects livestock, so herders have less reason to retaliate against leopards. \"By doing so\" links the conservation action to this result.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw1f-26",
      passage:
        "While researching a topic, a student has taken the following notes:\n\n• The Great Red Spot is a massive storm on the planet Jupiter.\n• It is an anticyclonic storm, meaning it rotates counterclockwise.\n• Astronomers have been observing the storm continuously since 1830.\n• Recent measurements show that the storm has been shrinking in size over the last century.\n• At its widest point, it is currently large enough to swallow the Earth.\n\nThe student wants to emphasize the immense scale of the Great Red Spot despite its changing size. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      question: "",
      options: [
        "A) Continuously observed since 1830, the Great Red Spot is an anticyclonic storm on Jupiter that rotates counterclockwise.",
        "B) Although the Great Red Spot on Jupiter has been shrinking over the last century, the storm remains massive enough to swallow the Earth.",
        "C) Astronomers have noted that the massive storm on Jupiter, known as the Great Red Spot, has been steadily decreasing in size.",
        "D) The Great Red Spot is a massive storm on Jupiter that has been observed continuously by astronomers since the year 1830.",
      ],
      correct: "B",
      explanation:
        "The prompt asks to emphasize immense scale despite changing size. Only B contrasts shrinking with the fact that it remains massive enough to swallow Earth.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw1f-27",
      passage:
        "While researching a topic, a student has taken the following notes:\n\n• Kintsugi is a traditional Japanese art form used to repair broken pottery.\n• Instead of hiding the cracks, the artisan uses a lacquer mixed with powdered gold, silver, or platinum.\n• The philosophy behind kintsugi is to treat the breakage and repair as part of the object's history, rather than something to disguise.\n• It is closely related to the Japanese concept of wabi-sabi, which embraces flaws and imperfections.\n\nThe student wants to explain the philosophical purpose of kintsugi to an audience unfamiliar with the practice. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      question: "",
      options: [
        "A) The Japanese art of kintsugi involves repairing broken pottery with lacquer mixed with powdered precious metals like gold or silver.",
        "B) Rooted in the concept of embracing imperfections, the Japanese art of kintsugi uses gold-laced lacquer to repair pottery, treating the visible cracks as a valuable part of the object's history rather than flaws to hide.",
        "C) Kintsugi is related to the concept of wabi-sabi and uses powdered gold, silver, or platinum to fix broken objects.",
        "D) When repairing pottery, kintsugi artisans do not hide the cracks, choosing instead to use a special lacquer mixed with powdered gold.",
      ],
      correct: "B",
      explanation:
        "The prompt asks for the philosophical purpose for an unfamiliar audience. B explains the philosophy (embracing imperfections), the method (gold-laced lacquer), and the purpose (treating cracks as part of history).",
      domain: "craft_structure",
      subdomain: "purpose",
    },
  ],
};
