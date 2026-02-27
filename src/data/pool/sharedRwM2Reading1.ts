import type { PoolModule } from "../poolTypes";

export const rwM2Reading1Harder: PoolModule = {
  id: "rw-m2-reading1-harder",
  type: "rw-m2-harder",
  label: "R&W Module 2 — Hard (Digital SAT Reading_1)",
  questions: [
    {
      id: "rw2r1-1",
      passage:
        "Though contemporary 19th-century critics dismissed Gregor Mendel's findings on plant hybridization as a mere curiosity, modern geneticists recognize that his foundational experiments were remarkably ______, anticipating complex biological discoveries that would not be formally articulated for decades.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) prescient",
        "B) redundant",
        "C) orthodox",
        "D) incidental",
      ],
      correct: "A",
      explanation:
        "\"Prescient\" means having knowledge of events before they take place. Mendel's experiments \"anticipated\" discoveries decades later.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2r1-2",
      passage:
        "Eager to maintain a facade of diplomatic composure during the televised debate, the senator attempted to ______ her visible frustration when her opponent interrupted, though her tightly clenched jaw betrayed her true feelings.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) foster",
        "B) express",
        "C) check",
        "D) validate",
      ],
      correct: "C",
      explanation:
        "In this context, \"check\" means to restrain, slow, or stop an impulse or emotion. She had to restrain her visible frustration.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2r1-3",
      passage:
        "The philosopher's latest treatise was famously difficult to navigate, characterized by highly ______ arguments that twisted back on themselves, utilized exhausting tangents, and frequently obscured his central thesis.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) lucid",
        "B) dogmatic",
        "C) empirical",
        "D) tortuous",
      ],
      correct: "D",
      explanation:
        "\"Tortuous\" means full of twists and turns, or excessively lengthy and complex. This perfectly matches arguments that \"twisted back on themselves.\"",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2r1-4",
      passage:
        "The following text is adapted from Henry James's 1881 novel, The Portrait of a Lady.\n\nIsabel Archer was a young person of many theories; her imagination was remarkably active. It had been her fortune to possess a finer mind than most of the persons among whom her lot was cast; to have a larger perception of surrounding facts and to care for knowledge that was tinged with the unfamiliar. It is true that among her contemporaries she passed for a young woman of extraordinary profundity; for these excellent people never pitied a fault that they had not the cleverness to see.",
      question: "Which choice best states the main purpose of the text?",
      options: [
        "A) To criticize Isabel for her intellectual arrogance and dismissive attitude toward her peers.",
        "B) To establish Isabel's intellectual curiosity and highlight the gap in perception between her and her contemporaries.",
        "C) To contrast Isabel's vibrant imagination with her complete lack of practical, real-world experience.",
        "D) To suggest that Isabel's complex theories about the world are fundamentally flawed and naive.",
      ],
      correct: "B",
      explanation:
        "The text praises Isabel's active imagination and \"finer mind,\" while noting that her peers don't possess the \"cleverness to see\" her nuances, highlighting the gap between them.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2r1-5",
      passage:
        "Text 1\n\nMany historians assert that the invention of the mechanical printing press in the 15th century immediately democratized knowledge in Europe. By drastically reducing the cost of book production, the printing press dismantled the intellectual monopoly held by the elite, allowing revolutionary ideas to spread rapidly among the common people and directly paving the way for the Enlightenment.\n\nText 2\n\nWhile the printing press exponentially increased the volume of texts in circulation, its immediate democratizing effect is often vastly overstated. For centuries following its invention, the overwhelming majority of the European population remained entirely illiterate. Books were cheaper, but they were still primarily purchased and consumed by the same educated, aristocratic circles that had always possessed them.",
      question:
        "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 regarding the democratization of knowledge?",
      options: [
        "A) By agreeing that the printing press immediately democratized knowledge, but arguing that it did not cause the Enlightenment.",
        "B) By suggesting that the Enlightenment was actually caused by public education reforms rather than the invention of the printing press.",
        "C) By asserting that the immediate intellectual benefits of the printing press were restricted to an already-educated elite rather than the general public.",
        "D) By arguing that the printing press played absolutely no role in the spread of revolutionary ideas during the 15th century.",
      ],
      correct: "C",
      explanation:
        "Text 1 claims the press immediately democratized knowledge. Text 2 points out that because of massive illiteracy, the press initially only benefited the elite who could already read.",
      domain: "craft_structure",
      subdomain: "cross_text",
    },
    {
      id: "rw2r1-6",
      passage:
        "Epigenetics is the study of how behaviors and environment can cause changes that affect the way genes work. Unlike genetic changes, epigenetic changes are reversible and do not alter an organism's underlying DNA sequence. Instead, chemical tags, such as methyl groups, attach to the DNA strand and influence whether specific genes are \"turned on\" or \"turned off.\" These epigenetic modifications can be influenced by environmental factors like severe stress or malnutrition. Remarkably, biological studies have demonstrated that some of these acquired chemical tags can be passed down to subsequent generations, suggesting that an organism's life experiences can directly impact the biological traits of its offspring.",
      question: "Which choice best states the main idea of the text?",
      options: [
        "A) Epigenetics proves that an organism's underlying DNA sequence is constantly mutating in response to environmental stressors.",
        "B) Chemical tags attached to DNA prevent organisms from adapting biologically to severe stress and malnutrition.",
        "C) Epigenetic modifications allow environmental factors to alter gene expression in a way that can sometimes be inherited.",
        "D) Severe stress and malnutrition are the only environmental factors capable of permanently altering an organism's genetic code.",
      ],
      correct: "C",
      explanation:
        "The paragraph focuses on defining epigenetics: environmental factors changing how genes are expressed (without changing the DNA itself) in ways that can be passed to offspring.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2r1-7",
      passage:
        "A literary critic is analyzing a poem about the subtle, steady decay of a grand, ancestral estate. The critic argues that the poet uses personification to emphasize that the house's decline is a gradual, insidious process that is largely unnoticed by the people living inside it.",
      question:
        "Which quotation from the poem best supports the critic's claim?",
      options: [
        "A) \"The great oak doors shattered outward / under the fierce, sudden blow of the winter storm.\"",
        "B) \"Silent dust gathers on the sill, / a slow, quiet thief stealing the polished gleam.\"",
        "C) \"We fled the echoing halls into the night / when the deep foundations began to violently groan.\"",
        "D) \"Bright banners waved proudly from the high turrets, / fiercely defying the cruel passage of time.\"",
      ],
      correct: "B",
      explanation:
        "The prompt asks for evidence of gradual, unnoticed decline. \"Silent dust... a slow, quiet thief\" perfectly captures an insidious, slow decay.",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw2r1-8",
      passage:
        "Astronomers studying exoplanets have noted that planets orbiting red dwarf stars in the \"habitable zone\" are frequently tidally locked, meaning one side of the planet permanently faces the star while the other side faces deep space. This results in a blisteringly hot day side and a permanently frozen night side, conditions generally considered inhospitable to life. However, advanced climate models suggest that if a tidally locked planet possesses a sufficiently thick atmosphere, fierce atmospheric currents could effectively distribute the heat from the day side to the night side. Therefore, ______",
      question: "Which choice most logically completes the text?",
      options: [
        "A) red dwarf stars are highly unlikely to host planets capable of maintaining thick atmospheres.",
        "B) tidally locked planets will eventually break their orbital lock and begin to rotate normally.",
        "C) the presence of a thick atmosphere might allow moderate, potentially habitable conditions to exist on these planets.",
        "D) it is physically impossible for tidally locked planets to support any form of liquid water.",
      ],
      correct: "C",
      explanation:
        "The text sets up a problem (locked planets are too hot/cold) but introduces a mechanism (thick atmosphere distributing heat) that solves it. Therefore, such planets might be habitable.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw2r1-9",
      passage:
        "The intricate beadwork of the Maasai people serves as much more than mere ______ each specific color and complex pattern conveys precise information about the wearer's social status, age, and marital situation.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) adornment,",
        "B) adornment",
        "C) adornment;",
        "D) adornment: and",
      ],
      correct: "C",
      explanation:
        "The clauses before and after the blank are both independent sentences. A semicolon correctly joins two related independent clauses without a conjunction.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2r1-10",
      passage:
        "The phenomenon of quantum entanglement, despite decades of rigorous testing by some of the most brilliant minds in the fields of theoretical and applied physics, ______ to baffle scientists who seek to reconcile it with classical mechanics.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) continue",
        "B) continuing",
        "C) continues",
        "D) have continued",
      ],
      correct: "C",
      explanation:
        "The subject is \"The phenomenon\" (singular). The phrase bounded by commas (\"despite... physics\") is an interrupting modifier. Therefore, the singular verb \"continues\" is required.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2r1-11",
      passage:
        "Biologist Lynn Margulis faced intense professional skepticism in the 1960s when she first proposed the endosymbiotic theory, which posits that certain vital organelles within eukaryotic cells, such as mitochondria and chloroplasts, ______ once free-living, independent bacteria.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) was",
        "B) were",
        "C) has been",
        "D) is",
      ],
      correct: "B",
      explanation:
        "The subject of the dependent clause is \"organelles\" (plural). The phrase \"such as mitochondria and chloroplasts\" is an interrupting modifier. A plural, past-tense verb (\"were\") is required.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2r1-12",
      passage:
        "Classical economic models often operate on the assumption that consumers are perfectly rational actors who consistently make decisions designed to maximize their own financial utility. ______ behavioral economists have repeatedly demonstrated that human decision-making is heavily influenced by cognitive biases and emotional factors, frequently leading to highly irrational choices.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) In contrast,",
        "B) Accordingly,",
        "C) Subsequently,",
        "D) Furthermore,",
      ],
      correct: "A",
      explanation:
        "The first sentence presents the classical view (humans are perfectly rational). The second presents the opposing behavioral view (humans are highly irrational). \"In contrast\" sets this up.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2r1-13",
      passage:
        "The city council's new zoning laws were designed to encourage the construction of affordable housing by offering massive tax incentives to urban developers. ______ the number of new affordable units built in the downtown area actually decreased by 15% in the year following the policy's implementation, frustrating local housing advocates.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Therefore,",
        "B) Paradoxically,",
        "C) In addition,",
        "D) By comparison,",
      ],
      correct: "B",
      explanation:
        "The policy was designed to increase housing. The result was a 15% decrease. \"Paradoxically\" perfectly introduces an outcome that is counterintuitive or contrary to expectation.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2r1-14",
      passage:
        "While researching a topic, a student has taken the following notes:\n\n• Marie Tharp was an American geologist and oceanographic cartographer.\n• In the 1950s, she meticulously mapped the ocean floor using raw sonar data.\n• Through this work, she discovered the Mid-Atlantic Ridge, a massive underwater mountain range.\n• Her discovery provided the very first physical evidence for the theory of continental drift.\n• Because she was a woman in a male-dominated field, her colleagues initially dismissed her groundbreaking findings as \"girl talk.\"\n\nThe student wants to emphasize the immense scientific significance of Tharp's discovery in the face of professional adversity. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      question: "",
      options: [
        "A) American geologist Marie Tharp discovered the Mid-Atlantic Ridge in the 1950s by meticulously analyzing raw sonar data.",
        "B) Although initially dismissed by her male colleagues as \"girl talk,\" Marie Tharp's discovery of the Mid-Atlantic Ridge provided crucial physical evidence for the theory of continental drift.",
        "C) Marie Tharp mapped the ocean floor, discovering a massive underwater mountain range that her male colleagues unfairly called \"girl talk.\"",
        "D) The theory of continental drift is a scientific concept that was significantly supported by the discovery of the Mid-Atlantic Ridge by cartographer Marie Tharp.",
      ],
      correct: "B",
      explanation:
        "The prompt requires emphasizing both scientific significance and professional adversity. Only choice B includes both the dismissal by colleagues (\"girl talk\") and the major scientific impact (evidence for continental drift).",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2r1-15",
      passage:
        "The following text is adapted from Thomas Hardy's 1886 novel, The Mayor of Casterbridge.\n\nMichael Henchard's laugh was not encouraging to strangers, for it lacked all the spontaneous warmth that typically accompanies such an expression. It was a laugh that seemed governed entirely by his own severe, internal metrics of amusement, completely divorced from the convivial atmosphere of the room. When he did emit a sudden, booming chuckle, it was less a shared communication with his guests and more a solitary judgment upon the absurdity of their conversation, leaving the other men at the table shifting uncomfortably in their seats.",
      question: "Which choice best states the main purpose of the text?",
      options: [
        "A) To illustrate how Henchard's physical appearance makes him intimidating to those who do not know him well.",
        "B) To describe a specific mannerism of Henchard's that reveals his arrogant and alienated disposition.",
        "C) To contrast the joyful atmosphere of the dinner party with Henchard's deep-seated depression.",
        "D) To suggest that Henchard is deliberately trying to offend the other men at the table out of spite.",
      ],
      correct: "B",
      explanation:
        "The passage focuses entirely on Henchard's laugh to reveal his inner character: it lacks warmth, is governed by his own \"severe\" metrics, and feels like a \"solitary judgment,\" emphasizing his arrogant and alienated nature.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2r1-16",
      passage:
        "In a study of urban ecology, researchers measured the population density of the Eastern gray squirrel (Sciurus carolinensis) in two distinct environments: large, unbroken tracts of rural forest and highly fragmented urban parks. The researchers hypothesized that despite the abundance of human food waste in urban parks, the squirrels would exhibit lower overall fitness and lower population densities in these fragmented habitats due to a lack of continuous canopy cover, which makes them vulnerable to predators.",
      question:
        "Which finding, if true, would most directly undermine the researchers' hypothesis?",
      options: [
        "A) Squirrels in urban parks were observed spending more time foraging on the ground than squirrels in rural forests.",
        "B) The population density of squirrels in highly fragmented urban parks was found to be nearly double that of squirrels in continuous rural forests.",
        "C) Avian predators, such as hawks and owls, were found to be significantly more common in rural forests than in urban areas.",
        "D) Urban squirrels were found to have a less varied diet compared to their rural counterparts, relying heavily on discarded human food.",
      ],
      correct: "B",
      explanation:
        "The researchers hypothesized lower density and fitness in urban parks. Finding double the density in those exact parks directly contradicts and undermines their core hypothesis.",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw2r1-17",
      passage:
        "Text 1\n\nAdvocates for the widespread adoption of universal basic income (UBI) argue that providing a guaranteed, unconditional stipend to all citizens would eradicate extreme poverty and drastically reduce wealth inequality. Furthermore, they contend that a UBI would liberate individuals from the necessity of taking dangerous or exploitative jobs merely to survive, thereby sparking a renaissance of entrepreneurial and creative endeavors.\n\nText 2\n\nWhile the utopian vision of a universal basic income is appealing, its implementation on a national scale would be economically disastrous. Funding such a program would require crippling tax increases that would stifle corporate growth and drive capital overseas. Moreover, untethering financial security from employment ignores the fundamental reality that economic productivity relies heavily on the necessity of work; a guaranteed income could disincentivize labor participation, leading to a catastrophic drop in national output.",
      question:
        "Based on the texts, how would the author of Text 2 most likely respond to the assertion in Text 1 that UBI would spark a \"renaissance of entrepreneurial and creative endeavors\"?",
      options: [
        "A) By agreeing that entrepreneurship would increase, but arguing that it would not generate enough tax revenue to fund the UBI program.",
        "B) By suggesting that extreme poverty is a more pressing issue than the lack of creative endeavors.",
        "C) By asserting that without the financial pressure to work, individuals are more likely to withdraw from productive labor entirely rather than start new businesses.",
        "D) By arguing that dangerous and exploitative jobs are necessary for the maintenance of a stable national economy.",
      ],
      correct: "C",
      explanation:
        "Text 1 says UBI frees people from bad jobs so they can be creative. Text 2 says taking away the necessity of work disincentivizes labor participation (people will just stop working). Therefore, Author 2 would predict a withdrawal from labor, not a burst of new businesses.",
      domain: "craft_structure",
      subdomain: "cross_text",
    },
    {
      id: "rw2r1-18",
      passage:
        "Enrico Fermi famously articulated what is now known as the \"Fermi Paradox\": the apparent contradiction between the high probability of extraterrestrial life existing elsewhere in the vast universe and the complete lack of evidence for, or contact with, such civilizations. Given that the universe is roughly 13.8 billion years old, any technologically advanced civilization that emerged even a few million years before humanity would have had ample time to traverse the galaxy. Therefore, if the emergence of intelligent life is not an extraordinarily rare fluke, ______",
      question: "Which choice most logically completes the text?",
      options: [
        "A) humanity must be the oldest and most technologically advanced civilization in the universe.",
        "B) some other profound barrier must exist that prevents advanced civilizations from expanding across the galaxy or communicating with us.",
        "C) astronomers should focus their search exclusively on planets that orbit red dwarf stars.",
        "D) the age of the universe has likely been grossly overestimated by modern astrophysicists.",
      ],
      correct: "B",
      explanation:
        "The text establishes that aliens should be here given the vast time they've had, yet they are not. Logically, if life isn't just a fluke, something else (a profound barrier) must be stopping them.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw2r1-19",
      passage:
        "Nestled deep within the rugged, densely forested mountains of the Pacific Northwest ______ a rare species of lichen that scientists believe could hold the key to synthesizing new, powerful antibiotics.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) grow",
        "B) grows",
        "C) are growing",
        "D) have grown",
      ],
      correct: "B",
      explanation:
        "Inverted syntax. The subject is not \"mountains\" (plural); the subject comes after the verb: \"a rare species\" (singular). Therefore, the singular verb \"grows\" is required.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2r1-20",
      passage:
        "The international committee of leading climatologists, after reviewing decades of core samples extracted from the Greenland ice sheet, concluded that the rate of global warming is ______ some delegates still argued that the proposed carbon regulations were too stringent.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) accelerating, however,",
        "B) accelerating; however,",
        "C) accelerating, however",
        "D) accelerating however,",
      ],
      correct: "B",
      explanation:
        "\"concluded that the rate of global warming is accelerating\" is an independent clause. \"some delegates still argued...\" is also an independent clause. They must be joined by a semicolon before the conjunctive adverb \"however,\" and a comma after it.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2r1-21",
      passage:
        "Fascinated by the intricate social hierarchy of the naked mole-rat, ______ several months living near their subterranean colonies in East Africa, carefully documenting their highly unusual reproductive habits.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) the burrows were closely monitored by the biologist for",
        "B) the biologist's time was spent for",
        "C) the biologist spent",
        "D) it took the biologist",
      ],
      correct: "C",
      explanation:
        "Dangling modifier. \"Fascinated by the intricate social hierarchy...\" describes the person experiencing the fascination. The noun immediately following the comma must be \"the biologist.\"",
      domain: "craft_structure",
      subdomain: "form_structure",
    },
    {
      id: "rw2r1-22",
      passage:
        "Although the critically acclaimed film Citizen Kane is widely considered by modern critics to be a masterpiece of American cinema, ______ financial failure at the box office upon its initial release in 1941, largely due to a coordinated smear campaign by a powerful newspaper magnate.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) its a",
        "B) it was a",
        "C) its",
        "D) it's a",
      ],
      correct: "B",
      explanation:
        "The sentence requires a subject and a verb for the independent clause following the dependent clause. \"it\" (the film) is the subject, and \"was\" is the verb. \"its\" and \"it's\" do not fit the grammatical structure.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2r1-23",
      passage:
        "Dr. Aris Thorne's revolutionary new theory regarding the formation of black holes was met with deep skepticism by his peers. The mathematical proofs he provided were highly unorthodox; ______ the fundamental assumptions underlying his models contradicted a century of established relativistic physics.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) nevertheless,",
        "B) moreover,",
        "C) alternatively,",
        "D) thus,",
      ],
      correct: "B",
      explanation:
        "The first clause states the proofs were unorthodox. The second clause adds another layer of severity: the fundamental assumptions contradicted established physics. \"Moreover\" correctly builds upon the first point.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2r1-24",
      passage:
        "During the 19th century, the construction of the transcontinental railroad drastically reduced the time it took to travel from New York to California. ______ the journey, which previously took up to six months by wagon, could now be completed in roughly one week, revolutionizing American commerce and westward expansion.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Regardless,",
        "B) Specifically,",
        "C) Conversely,",
        "D) In summary,",
      ],
      correct: "B",
      explanation:
        "The first sentence introduces a general claim (drastically reduced travel time). The second sentence provides the exact, specific details of that reduction (six months down to one week).",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2r1-25",
      passage:
        "Many urban planners advocate for the implementation of \"green roofs\"—roofs covered with vegetation—to mitigate the urban heat island effect and manage stormwater runoff. ______ installing and maintaining green roofs can be prohibitively expensive for many building owners, leading some cities to explore cheaper alternatives like highly reflective \"cool roofs.\"",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Consequently,",
        "B) For example,",
        "C) Nevertheless,",
        "D) Similarly,",
      ],
      correct: "C",
      explanation:
        "The first sentence provides the positive benefits of green roofs. The second sentence pivots to the negative reality (prohibitive expense). \"Nevertheless\" signals this shift from a positive ideal to a negative practical constraint.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2r1-26",
      passage:
        "While researching a topic, a student has taken the following notes:\n\n• The mantis shrimp is a highly aggressive marine crustacean.\n• It possesses club-like appendages called dactyls.\n• It uses these dactyls to smash open the hard shells of its prey, such as clams and crabs.\n• The strike of a mantis shrimp's dactyl is incredibly fast, reaching speeds of up to 50 mph (80 km/h).\n• The acceleration of the strike creates \"cavitation bubbles\" in the water that collapse with the force of a small bullet, generating light and heat.\n\nThe student wants to emphasize the destructive power of the mantis shrimp's strike. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      question: "",
      options: [
        "A) The mantis shrimp is a marine crustacean that uses its dactyls to hunt hard-shelled prey like clams and crabs.",
        "B) Reaching speeds of up to 50 mph, the strike of a mantis shrimp is so fast that it creates cavitation bubbles that collapse with the force of a bullet.",
        "C) A highly aggressive crustacean, the mantis shrimp possesses club-like appendages called dactyls that it uses to smash open its prey.",
        "D) The mantis shrimp strikes its prey at high speeds, creating cavitation bubbles in the water that generate both light and heat.",
      ],
      correct: "B",
      explanation:
        "The prompt asks to emphasize destructive power. Choice B is the only one that includes the specific details about the 50 mph speed and the bubbles that \"collapse with the force of a bullet.\"",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2r1-27",
      passage:
        "While researching a topic, a student has taken the following notes:\n\n• The Voynich Manuscript is an illustrated codex hand-written in an unknown writing system.\n• Carbon dating places the creation of the manuscript in the early 15th century.\n• It features bizarre illustrations of non-existent plants, astrological charts, and naked women bathing in strange plumbing systems.\n• Cryptographers, linguists, and computer scientists have attempted to decode the text for over a century.\n• To date, no one has successfully translated a single word of the manuscript.\n\nThe student wants to introduce the Voynich Manuscript to an audience unfamiliar with it, highlighting its central mystery. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      question: "",
      options: [
        "A) Created in the early 15th century, the Voynich Manuscript features bizarre illustrations of non-existent plants and unusual plumbing systems.",
        "B) Despite over a century of effort by experts, the Voynich Manuscript—a 15th-century illustrated codex—remains entirely undeciphered due to its unknown writing system.",
        "C) Cryptographers and computer scientists have spent decades trying to translate the Voynich Manuscript, which was carbon-dated to the 1400s.",
        "D) The Voynich Manuscript is an illustrated text written in an unknown language that contains drawings of plants, astrological charts, and bathing women.",
      ],
      correct: "B",
      explanation:
        "The prompt asks to introduce it to an unfamiliar audience AND highlight its central mystery. Choice B defines what it is (a 15th-century codex) and explicitly emphasizes the mystery (remains entirely undeciphered despite a century of expert effort).",
      domain: "craft_structure",
      subdomain: "purpose",
    },
  ],
};
