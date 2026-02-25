import type { PoolModule } from "../poolTypes";

export const rwM1C: PoolModule = {
  id: "rw-m1-c",
  type: "rw-m1",
  label: "R&W Module 1 (Set C)",
  questions: [
    {
      id: "rw1c-1",
      passage:
        "Rosalind Franklin's X-ray diffraction images of DNA, particularly the famous Photo 51, provided critical evidence for the molecule's helical structure. Though her contributions were largely __________ during her lifetime, historians of science now recognize Franklin's experimental work as indispensable to one of the twentieth century's greatest discoveries.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) celebrated",
        "B) exaggerated",
        "C) overlooked",
        "D) fabricated",
      ],
      correct: "C",
      explanation:
        "\"Overlooked\" means not given proper attention or recognition, which fits the contrast between Franklin's treatment during her lifetime and the current historical recognition of her work.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw1c-2",
      passage:
        "The philosophical tradition known as Stoicism, which originated in Athens around 300 BCE and later flourished in Rome through thinkers such as Seneca and Marcus Aurelius, __________ that individuals should focus on what they can control and accept external events with equanimity.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) holds",
        "B) hold",
        "C) are holding",
        "D) have held",
      ],
      correct: "A",
      explanation:
        "The subject is \"The philosophical tradition,\" which is singular. The intervening relative clause does not change the number of the subject, so the singular verb \"holds\" is correct.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-3",
      passage:
        "Anthropologist Margaret Mead's fieldwork in Samoa during the 1920s challenged prevailing Western assumptions about adolescence by suggesting that the emotional turbulence American teenagers experienced was culturally specific rather than biologically universal. Her findings were __________, sparking debates that continued for decades about the relative influence of culture versus biology on human development.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) unremarkable",
        "B) unanimous",
        "C) redundant",
        "D) contentious",
      ],
      correct: "D",
      explanation:
        "\"Contentious\" means causing or likely to cause disagreement, which fits the description of findings that \"sparked debates that continued for decades.\"",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw1c-4",
      passage:
        "CRISPR-Cas9 gene editing technology allows scientists to make precise modifications to an organism's DNA __________ the technique has raised ethical questions about its potential use in human germline editing, which would produce heritable genetic changes passed to future generations.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) however",
        "B) however,",
        "C) , however,",
        "D) ; however,",
      ],
      correct: "D",
      explanation:
        "A semicolon before \"however\" and a comma after it is the standard way to join two independent clauses with a conjunctive adverb.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-5",
      passage:
        "The Silk Road was not a single route but a network of interconnected trade paths stretching from China to the Mediterranean. While often associated primarily with the exchange of luxury goods like silk, spices, and precious metals, the routes also facilitated the transmission of religious ideas, artistic techniques, scientific knowledge, and even diseases between civilizations that might otherwise have had little contact with one another.",
      question: "Which choice best states the main idea of the text?",
      options: [
        "A) The Silk Road was primarily responsible for spreading diseases between distant civilizations.",
        "B) The Silk Road was used exclusively for transporting silk and spices from China to Europe.",
        "C) The Silk Road functioned as a broad network for exchanging not only goods but also ideas and knowledge across civilizations.",
        "D) The Silk Road's influence on religious transmission has been exaggerated by modern historians.",
      ],
      correct: "C",
      explanation:
        "The passage emphasizes that the Silk Road facilitated exchange of goods, ideas, religion, science, and more, making C the best summary of its central point.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw1c-6",
      passage:
        "By the time the research team publishes its findings next spring, the longitudinal study on childhood bilingualism __________ data from over three thousand participants across twelve countries for nearly a decade.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) collected",
        "B) will collect",
        "C) has been collecting",
        "D) will have been collecting",
      ],
      correct: "D",
      explanation:
        "The future perfect progressive \"will have been collecting\" is needed to describe an action that will have been ongoing up to a specific point in the future (\"by the time... next spring\").",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-7",
      passage:
        "The concept of supply and demand is foundational to microeconomics. When the supply of a good increases while demand remains constant, the price typically falls. __________ when demand rises while supply stays fixed, prices tend to increase as consumers compete for limited goods.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Conversely,",
        "B) Therefore,",
        "C) In addition,",
        "D) For instance,",
      ],
      correct: "A",
      explanation:
        "\"Conversely\" signals an opposite scenario: the first case describes rising supply (prices fall), while the second describes rising demand (prices rise). These are contrasting situations.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw1c-8",
      passage:
        "Nikola Tesla's alternating current (AC) motor design proved more __________ than Thomas Edison's direct current (DC) system for long-distance electrical transmission, as AC voltage could be easily stepped up for efficient travel across power lines and then stepped down for safe household use.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) hazardous",
        "B) practical",
        "C) ornamental",
        "D) controversial",
      ],
      correct: "B",
      explanation:
        "\"Practical\" means useful and effective for real-world application, which fits the passage's explanation of AC's advantages for long-distance transmission.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw1c-9",
      passage:
        "Although the ancient Polynesian navigators who first settled the Hawaiian Islands left no written records, __________ oral traditions, preserved across generations by specialized chanters, provide detailed accounts of voyaging techniques, celestial navigation methods, and the genealogies of the earliest settlers.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) its",
        "B) his or her",
        "C) their",
        "D) ones",
      ],
      correct: "C",
      explanation:
        "The plural possessive pronoun \"their\" correctly refers to the plural antecedent \"navigators.\"",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-10",
      passage:
        "The French Impressionists of the late nineteenth century broke from academic painting traditions by working outdoors and capturing the transient effects of natural light on landscapes, water, and urban scenes. Rather than blending colors smoothly on a palette, painters like Claude Monet applied short, visible brushstrokes of pure color side by side, allowing the viewer's eye to blend them at a distance. This technique gave Impressionist canvases their characteristic vibrancy and sense of movement.",
      question:
        "According to the text, which choice best describes the Impressionists' primary artistic innovation?",
      options: [
        "A) They developed a brushwork technique that produced vibrant visual effects through optical color mixing.",
        "B) They were the first European painters to depict landscapes rather than historical or religious subjects.",
        "C) They rejected the use of color in favor of monochromatic compositions.",
        "D) They focused exclusively on urban scenes rather than natural landscapes.",
      ],
      correct: "A",
      explanation:
        "The passage describes how Impressionists used visible brushstrokes of pure color side by side, allowing optical mixing by the viewer, creating vibrancy and movement. A captures this innovation.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw1c-11",
      passage:
        "Marine biologists have observed that coral species in warmer equatorial waters tend to bleach more frequently than those in cooler subtropical regions, are more susceptible to disease outbreaks, __________ recover more slowly after thermal stress events.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) or",
        "B) but",
        "C) so",
        "D) and",
      ],
      correct: "D",
      explanation:
        "The sentence lists three parallel observations about coral in warmer waters. The conjunction \"and\" is needed before the final item in the series.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-12",
      passage:
        "Archaeologist Howard Carter spent years searching the Valley of the Kings before discovering the nearly intact tomb of Tutankhamun in 1922. The passage notes that Carter's team cataloged over five thousand artifacts from the tomb, a process that took nearly a decade to complete. Among the most significant finds were the pharaoh's golden death mask and a series of nested coffins, the innermost of which was made of solid gold.",
      question:
        "Which choice best describes the function of the second sentence in the text as a whole?",
      options: [
        "A) It challenges the significance of Carter's discovery.",
        "B) It illustrates the scale and complexity of the archaeological find described in the first sentence.",
        "C) It argues that Carter's methods were inefficient.",
        "D) It shifts the focus from archaeology to art history.",
      ],
      correct: "B",
      explanation:
        "The second sentence (over 5,000 artifacts, a decade to catalog) demonstrates how extensive the discovery was, illustrating the scale mentioned in the first sentence.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw1c-13",
      passage:
        "Literary critic Edward Said's concept of Orientalism argues that Western representations of Eastern societies have historically been shaped by imperial power dynamics rather than by objective observation. Said contended that these representations were not merely __________ but actively constructed a framework that justified colonial domination by depicting Eastern cultures as exotic, irrational, and in need of Western governance.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) inaccurate",
        "B) flattering",
        "C) spontaneous",
        "D) inconsequential",
      ],
      correct: "A",
      explanation:
        "\"Inaccurate\" sets up the escalation: the representations were not merely wrong (inaccurate) but actively harmful in constructing justifications for colonialism. The sentence structure \"not merely X but Y\" requires X to be a lesser version of Y.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw1c-14",
      passage:
        "The Inca Empire, which at its peak stretched over 2,500 miles along the western coast of South America, maintained administrative control through an extensive road __________ runners called chasquis relayed messages and goods across mountainous terrain with remarkable speed.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) system where,",
        "B) system, where",
        "C) system; where",
        "D) system. Where",
      ],
      correct: "B",
      explanation:
        "A comma after \"system\" properly separates the main clause from the nonrestrictive relative clause beginning with \"where.\" No comma should follow \"where\" itself.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-15",
      passage:
        "Circadian rhythm researchers have found that exposure to blue-wavelength light in the hours before sleep suppresses the production of melatonin, a hormone that signals the body to prepare for rest. A 2021 study demonstrated that participants who used blue-light-emitting screens for two hours before bedtime took an average of 23 minutes longer to fall asleep and experienced less restorative deep sleep compared to participants who read printed material under warm-toned lighting.",
      question:
        "Which choice best describes an inference supported by the text?",
      options: [
        "A) Melatonin supplements can fully counteract the effects of blue light exposure before bed.",
        "B) Reading printed material is always preferable to using electronic devices.",
        "C) All wavelengths of light equally suppress melatonin production.",
        "D) Reducing evening screen time could improve both the speed of falling asleep and the quality of sleep.",
      ],
      correct: "D",
      explanation:
        "The study showed screen users took longer to fall asleep and had less deep sleep. The logical inference is that reducing screen time could improve both sleep onset and quality.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw1c-16",
      passage:
        "To better understand how tropical forests recover after disturbance, ecologists __________ the regrowth patterns of secondary forests in Costa Rica have tracked changes in tree species composition, canopy height, and soil carbon levels over a fifteen-year period.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) who are studying",
        "B) studying",
        "C) that study",
        "D) studies",
      ],
      correct: "B",
      explanation:
        "The participial phrase \"studying the regrowth patterns\" correctly modifies \"ecologists\" and maintains the sentence structure where \"ecologists... have tracked\" is the main clause.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-17",
      passage:
        "In a review of recent scholarship on the Harlem Renaissance, a cultural historian writes: \"While earlier accounts tended to frame the Harlem Renaissance primarily as a literary movement centered on a handful of prominent poets and novelists, recent research has revealed a far more expansive cultural phenomenon. Scholars now emphasize the movement's deep connections to visual art, theater, political activism, and the development of new musical forms that would shape American culture for generations.\"",
      question:
        "Which choice best describes the function of the first sentence in the text as a whole?",
      options: [
        "A) It establishes an older interpretation that the second sentence revises and expands.",
        "B) It presents a claim that the second sentence supports with specific evidence.",
        "C) It describes a historical event that the second sentence places in a broader context.",
        "D) It raises a question that the second sentence attempts to answer.",
      ],
      correct: "A",
      explanation:
        "The first sentence presents the older, narrower view (primarily literary); the second sentence revises it by showing the movement was much broader, making A correct.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw1c-18",
      passage:
        "Ocean currents play a critical role in regulating global climate by redistributing thermal energy from equatorial regions toward the poles. The Gulf Stream, for example, transports vast quantities of warm water northward across the Atlantic, moderating the climate of Western Europe and making it significantly milder than regions at comparable latitudes in North America. Scientists describe these currents as __________ forces in the global climate system.",
      question:
        "Which choice completes the text with the most logical and precise word or phrase?",
      options: [
        "A) negligible",
        "B) decorative",
        "C) stabilizing",
        "D) unpredictable",
      ],
      correct: "C",
      explanation:
        "\"Stabilizing\" means making something steady or consistent, which matches the passage's description of currents that regulate climate by redistributing heat and moderating temperatures.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw1c-19",
      passage:
        "A recent meta-analysis of studies on the Mediterranean diet found that participants who adhered closely to the diet's emphasis on olive oil, whole grains, fish, and vegetables __________ 25 percent less likely to develop cardiovascular disease than those following a typical Western diet.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) is",
        "B) was",
        "C) are",
        "D) were",
      ],
      correct: "D",
      explanation:
        "The subject \"participants\" is plural and the sentence describes completed research findings (past tense), so \"were\" is the correct choice.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-20",
      passage:
        "Text 1: Technology ethicist Shannon Vallor argues that artificial intelligence systems should be designed with built-in mechanisms for human oversight and intervention. She contends that as AI systems become more autonomous, maintaining meaningful human control becomes essential to ensuring that these systems act in alignment with human values and can be corrected when they produce harmful outcomes.\n\nText 2: Computer scientist Yann LeCun suggests that excessive regulatory constraints on AI development could stifle innovation and delay beneficial applications in healthcare, climate science, and education. LeCun argues that the risks of AI are often overstated and that the technology's enormous potential benefits justify a more permissive approach to its development, with regulation focused on specific harmful applications rather than the technology itself.",
      question:
        "Based on the texts, how would Vallor (Text 1) most likely respond to LeCun's position in Text 2?",
      options: [
        "A) By arguing that AI has no beneficial applications in healthcare or education.",
        "B) By contending that human oversight mechanisms need not slow innovation but are necessary to ensure AI systems remain aligned with human values.",
        "C) By agreeing that regulation should focus only on specific applications rather than broad oversight.",
        "D) By suggesting that AI development should be halted entirely until all risks are eliminated.",
      ],
      correct: "B",
      explanation:
        "Vallor advocates for human oversight, not a ban on AI. She would likely respond to LeCun by arguing that oversight mechanisms are necessary safeguards that can coexist with innovation, making B the best answer.",
    },
    {
      id: "rw1c-21",
      passage:
        "The discovery of high-temperature superconductors in the 1980s generated enormous excitement among physicists. __________ practical applications have been slow to materialize because even these \"high-temperature\" superconductors must be cooled to extremely low temperatures, making widespread commercial use prohibitively expensive.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Furthermore,",
        "B) As a result,",
        "C) Yet",
        "D) Similarly,",
      ],
      correct: "C",
      explanation:
        "\"Yet\" signals a contrast between the excitement generated by the discovery and the disappointment that practical applications have been slow, making it the best transition.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw1c-22",
      passage:
        "Gothic architecture, which emerged in twelfth-century France, was characterized by innovations such as the pointed arch, the ribbed vault, and the flying buttress. Together, these structural elements allowed builders to distribute the weight of stone ceilings more efficiently, enabling the construction of thinner walls punctuated by large stained-glass windows that flooded church interiors with colored light. The result was a style of sacred architecture that emphasized verticality and luminosity, qualities intended to direct worshippers' thoughts heavenward.",
      question:
        "According to the text, what was the primary architectural significance of Gothic structural innovations?",
      options: [
        "A) They allowed for thinner walls and larger windows by improving how structural weight was distributed.",
        "B) They made churches less expensive to construct than Romanesque buildings.",
        "C) They eliminated the need for exterior supports in large stone buildings.",
        "D) They were developed primarily for secular buildings before being adapted for churches.",
      ],
      correct: "A",
      explanation:
        "The passage directly states that Gothic elements \"allowed builders to distribute the weight... more efficiently, enabling the construction of thinner walls punctuated by large stained-glass windows.\"",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw1c-23",
      passage:
        "Neither the initial soil analysis nor the follow-up water quality assessment __________ evidence of contamination at levels exceeding federal safety thresholds, leading regulators to conclude that the former industrial site poses minimal risk to nearby residents.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) reveal",
        "B) revealed",
        "C) have revealed",
        "D) are revealing",
      ],
      correct: "B",
      explanation:
        "With \"neither... nor,\" the verb agrees with the nearer subject (\"assessment,\" singular). The past tense \"revealed\" fits the completed actions described, making B correct.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw1c-24",
      passage:
        "Geologists have long understood that Earth's outer shell is divided into tectonic plates that move slowly over the semi-fluid asthenosphere below. Where these plates converge, one plate may be forced beneath another in a process called subduction. A 2023 study using seismic imaging revealed that subducted plates can descend to depths of over 1,500 miles, far deeper than previously confirmed, where they may influence mantle convection patterns that ultimately drive plate movement at the surface.",
      question:
        "Which choice best describes an inference supported by the text?",
      options: [
        "A) Tectonic plates remain stationary once they reach the mantle.",
        "B) Seismic imaging technology is too imprecise to study deep-earth processes.",
        "C) Subduction only occurs where oceanic plates meet continental plates.",
        "D) Processes deep within Earth's interior may have a greater influence on surface geology than previously understood.",
      ],
      correct: "D",
      explanation:
        "The study revealed subducted plates go far deeper than expected and may influence mantle convection that drives surface plate movement, supporting the inference that deep processes have a greater influence than previously understood.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw1c-25",
      passage:
        "Psychologist Daniel Kahneman's research distinguishes between two modes of thinking: System 1, which operates quickly and intuitively, and System 2, which is slower and more deliberate. Kahneman argues that while System 1 is efficient for routine decisions, it is also prone to systematic errors called cognitive biases. Research on loss aversion, for example, shows that people tend to weigh potential losses more heavily than equivalent gains when making financial decisions.",
      question:
        "Which choice best describes the overall structure of the text?",
      options: [
        "A) It introduces a theoretical framework and then illustrates its real-world implications.",
        "B) It compares two competing psychological theories and evaluates which is more valid.",
        "C) It describes an experiment and then questions the reliability of its results.",
        "D) It presents a historical narrative and then analyzes its cultural significance.",
      ],
      correct: "A",
      explanation:
        "The text first introduces Kahneman's dual-system framework, then applies it to real-world financial decision-making, making A (framework → implications) the best description.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw1c-26",
      passage:
        "Text 1: Conservation biologist E.O. Wilson proposed that at least half of Earth's land surface should be set aside as protected habitat to prevent a catastrophic loss of biodiversity. Wilson argued that interconnected reserves, rather than isolated parks, would be necessary to maintain viable populations of large mammals, migratory birds, and other species that require extensive ranges.\n\nText 2: Geographer Erle Ellis contends that Wilson's \"Half-Earth\" proposal, while well-intentioned, underestimates the role that human-managed landscapes can play in supporting biodiversity. Ellis points to evidence that many species thrive in agricultural mosaics, urban green spaces, and other landscapes shaped by human activity, suggesting that conservation strategies should integrate human land use rather than exclude it.",
      question:
        "Based on the texts, which choice best describes a key difference between Wilson's and Ellis's approaches to conservation?",
      options: [
        "A) Wilson focuses on marine ecosystems while Ellis focuses on terrestrial ecosystems.",
        "B) Wilson believes biodiversity loss is inevitable while Ellis believes it can be prevented.",
        "C) Wilson emphasizes separating human activity from natural habitats, while Ellis argues for integrating conservation into human-managed landscapes.",
        "D) Wilson advocates for urban green spaces while Ellis opposes them.",
      ],
      correct: "C",
      explanation:
        "Wilson proposes large protected reserves (separating humans from nature), while Ellis argues species can thrive in human-managed landscapes (integrating conservation with human activity). C captures this key difference.",
      domain: "information_ideas",
      subdomain: "cross_text",
    },
    {
      id: "rw1c-27",
      passage:
        "The Industrial Revolution, which began in Britain in the late eighteenth century, fundamentally transformed manufacturing by replacing hand production with machine-based processes powered first by water and then by steam. Factories concentrated workers in urban centers, creating new forms of labor organization and social stratification. While the revolution dramatically increased the production of goods and eventually raised living standards, it also produced significant environmental degradation and harsh working conditions that prompted early reform movements and labor organizing.",
      question: "Which choice best states the main idea of the text?",
      options: [
        "A) The Industrial Revolution had exclusively negative consequences for workers and the environment.",
        "B) The Industrial Revolution's transformation of manufacturing brought both increased productivity and significant social and environmental costs.",
        "C) The Industrial Revolution began in Britain because of the country's unique access to water power.",
        "D) Labor reform movements during the Industrial Revolution were largely unsuccessful.",
      ],
      correct: "B",
      explanation:
        "The passage presents both sides: increased production and living standards alongside environmental degradation and harsh conditions. B captures this balanced central idea.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw1c-27e",
      passage:
        "The spread of public libraries in the United States during the late nineteenth and early twentieth centuries was closely tied to the belief that access to books would improve civic participation and reduce social inequality. Philanthropists such as Andrew Carnegie funded the construction of thousands of library buildings on the condition that local governments would maintain and operate them. Library advocates argued that self-education through reading could help working-class Americans advance economically and participate more fully in democratic life.",
      question:
        "Which choice best supports the claim that library advocates linked reading to democratic participation?",
      options: [
        "A) The spread of public libraries in the United States during the late nineteenth and early twentieth centuries was closely tied to the belief that access to books would improve civic participation and reduce social inequality.",
        "B) Philanthropists such as Andrew Carnegie funded the construction of thousands of library buildings on the condition that local governments would maintain and operate them.",
        "C) Library advocates argued that self-education through reading could help working-class Americans advance economically and participate more fully in democratic life.",
        "D) Public libraries were built in both urban and rural areas across the United States.",
      ],
      correct: "C",
      explanation:
        "Sentence C directly states that advocates argued reading could help Americans 'participate more fully in democratic life,' supporting the claim linking reading to democratic participation.",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw1c-28",
      passage:
        "A survey recorded the number of hours per week that students spent on homework:\n\nGrade level | Average hours\n9           | 8\n10          | 9\n11          | 10\n12          | 11\n\nResearchers noted that participation was voluntary and that not all students in each grade responded.",
      question:
        "According to the table, which grade level reported the highest average weekly homework hours?",
      options: [
        "A) 9",
        "B) 10",
        "C) 11",
        "D) 12",
      ],
      correct: "D",
      explanation:
        "The table shows grade 12 with 11 hours, which is the highest average among the four grade levels.",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw1c-29",
      passage:
        "The infographic above summarizes the results of a 2022 survey about where adults in the United States get their news. The chart shows the percentage of respondents who reported using each source at least once per week.",
      question:
        "Based on the infographic, which of the following is best supported about news consumption?",
      options: [
        "A) Television was the most commonly used news source among respondents.",
        "B) Social media was used by a larger share of respondents than print newspapers.",
        "C) Radio was the least used news source overall.",
        "D) Online news sites were used by more than half of all respondents.",
      ],
      correct: "B",
      explanation:
        "The infographic compares multiple sources; the correct answer is the claim best supported by the data shown (e.g., social media versus print).",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
      image: "/infographic_news_sources.png",
    },
  ],
  m2EasierModuleId: "rw-m2-easier",
  m2HarderModuleId: "rw-m2-harder",
};
