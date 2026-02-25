import type { PoolModule } from "../poolTypes";

export const rwM2Easier: PoolModule = {
  id: "rw-m2-easier",
  type: "rw-m2-easier",
  label: "R&W Module 2 — Easier (Shared)",
  questions: [
    {
      id: "rw2e-1",
      passage:
        "The architect's design was remarkably __________, incorporating clean lines and minimal ornamentation to create a sense of calm.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: ["A) austere", "B) ornate", "C) haphazard", "D) volatile"],
      correct: "A",
      explanation:
        "'Austere' means plain and without decoration, which fits the description of clean lines and minimal ornamentation.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2e-2",
      passage:
        "The Rosetta Stone, discovered in 1799, contained the same text in three scripts: Greek, Demotic, and hieroglyphics. This allowed scholars to finally decode Egyptian hieroglyphics by comparing the known Greek text to the unknown symbols.",
      question: "Which choice best states the main idea of the text?",
      options: [
        "A) The Rosetta Stone was found in 1799.",
        "B) Greek was the most important ancient language.",
        "C) The Rosetta Stone enabled the decoding of Egyptian hieroglyphics.",
        "D) Hieroglyphics were used in three different scripts.",
      ],
      correct: "C",
      explanation:
        "The passage explains how the Rosetta Stone's multilingual text allowed scholars to decode hieroglyphics.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2e-3",
      passage:
        "Monarch butterflies travel up to 3,000 miles during their annual migration from Canada to central Mexico. __________, they navigate using a combination of the sun's position and Earth's magnetic field.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) For instance",
        "B) To accomplish this journey",
        "C) In contrast",
        "D) Similarly",
      ],
      correct: "B",
      explanation:
        "'To accomplish this journey' logically connects the migration distance to the navigation methods used.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2e-4",
      passage:
        "The city council voted to allocate additional funds for public parks, the decision was praised by local environmental groups.",
      question:
        "Which choice best fixes the grammatical error in the sentence?",
      options: [
        "A) parks, the decision was praised",
        "B) parks; the decision was praised",
        "C) parks the decision was praised",
        "D) parks. praised",
      ],
      correct: "B",
      explanation:
        "A semicolon correctly joins two independent clauses without creating a comma splice.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2e-5",
      passage:
        "In her study of ancient Mesopotamian trade routes, historian Elara Voss found that merchants regularly exchanged goods over distances exceeding 1,500 miles. These networks connected civilizations that had previously been thought to develop in isolation.",
      question:
        "According to the text, Voss's research suggests that ancient civilizations:",
      options: [
        "A) rarely engaged in long-distance trade.",
        "B) were more interconnected than previously believed.",
        "C) developed writing systems for trade purposes.",
        "D) competed with each other for resources.",
      ],
      correct: "B",
      explanation:
        "The passage states the networks 'connected civilizations that had previously been thought to develop in isolation,' showing greater interconnection.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw2e-6",
      passage:
        "The novelist's latest work has been described as __________, jumping between timelines and perspectives without clear transitions.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) sequential",
        "B) disjointed",
        "C) comprehensive",
        "D) predictable",
      ],
      correct: "B",
      explanation:
        "'Disjointed' means lacking coherent connection, fitting the description of unclear transitions between timelines.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2e-7",
      passage:
        "The Hubble Space Telescope has been orbiting Earth since 1990. During its decades of operation, it has captured images of distant galaxies, nebulae, and other celestial objects that have transformed our understanding of the universe.",
      question: "Which choice best states the main purpose of the text?",
      options: [
        "A) To argue that space exploration is underfunded.",
        "B) To describe the contributions of the Hubble Space Telescope.",
        "C) To compare different types of telescopes.",
        "D) To explain how telescopes are built.",
      ],
      correct: "B",
      explanation:
        "The passage focuses on describing what the Hubble Telescope has accomplished during its operation.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2e-8",
      passage:
        "Neither the teacher nor the students __________ aware of the schedule change until Friday morning.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) was", "B) were", "C) is", "D) has been"],
      correct: "B",
      explanation:
        "With 'neither...nor,' the verb agrees with the nearer subject ('students'), which requires the plural 'were.'",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2e-9",
      passage:
        "Geologist Patricia Alvarez discovered unusual mineral deposits in a remote region of Iceland. The deposits contained trace elements not typically found in volcanic rock, suggesting they may have originated from a meteorite impact millions of years ago.",
      question:
        "Which finding, if true, would most directly support Alvarez's hypothesis?",
      options: [
        "A) Similar minerals are found in other volcanic regions around the world.",
        "B) The trace elements match the chemical composition of known meteorite fragments.",
        "C) Iceland experiences frequent volcanic eruptions that alter rock formations.",
        "D) The region was once covered by a glacier during the last ice age.",
      ],
      correct: "B",
      explanation:
        "Matching the chemical composition of meteorite fragments would directly support the meteorite impact theory.",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw2e-10",
      passage:
        "Voter turnout in local elections tends to be significantly lower than in national elections. __________, a mayoral race might attract only 20 percent of eligible voters, while a presidential election draws 60 percent or more.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Nevertheless",
        "B) For example",
        "C) In addition",
        "D) Consequently",
      ],
      correct: "B",
      explanation:
        "'For example' introduces a specific instance that illustrates the general claim about lower local election turnout.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2e-11",
      passage:
        "The young musician's performance was surprisingly __________; despite having only six months of training, she played the concerto with the confidence of a seasoned professional.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) amateurish",
        "B) accomplished",
        "C) tentative",
        "D) unremarkable",
      ],
      correct: "B",
      explanation:
        "'Accomplished' means highly skilled, consistent with playing with the confidence of a seasoned professional.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2e-12",
      passage:
        "Researchers at a wildlife preserve observed that elephant herds consistently chose longer routes to water sources, bypassing shorter paths. Further investigation revealed that the shorter paths crossed territories of rival herds.",
      question: "Which choice best describes an inference supported by the text?",
      options: [
        "A) Elephants lack the ability to detect the shortest route.",
        "B) Elephants choose routes based partly on social factors.",
        "C) Rival herds are always aggressive toward each other.",
        "D) Water sources are scarce at the wildlife preserve.",
      ],
      correct: "B",
      explanation:
        "The elephants avoided shorter paths through rival territory, indicating social factors influence their route choices.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw2e-13",
      passage:
        "Having finished the experiment, the lab results were recorded by the students in their notebooks.",
      question:
        "Which revision corrects the grammatical error in this sentence?",
      options: [
        "A) Having finished the experiment, the lab results were recorded by the students in their notebooks.",
        "B) Having finished the experiment, the students recorded the lab results in their notebooks.",
        "C) The lab results, having finished the experiment, were recorded by the students.",
        "D) Having finished the experiment and the lab results were recorded.",
      ],
      correct: "B",
      explanation:
        "The original has a dangling modifier. The students, not the lab results, finished the experiment, so 'the students' must follow the introductory phrase.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2e-14",
      passage:
        "In 1854, physician John Snow traced a cholera outbreak in London to a contaminated water pump on Broad Street. By mapping the cases and identifying the common water source, Snow demonstrated that cholera was waterborne — a finding that laid the groundwork for modern epidemiology.",
      question: "Which choice best states the main idea of the text?",
      options: [
        "A) Cholera was the deadliest disease in 19th-century London.",
        "B) John Snow's investigation helped establish the field of epidemiology.",
        "C) Water pumps were the primary source of drinking water in London.",
        "D) Mapping disease cases is no longer used in modern medicine.",
      ],
      correct: "B",
      explanation:
        "The passage describes how Snow's method of tracing the outbreak 'laid the groundwork for modern epidemiology.'",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2e-15",
      passage:
        "The city's new recycling program has been remarkably successful. In its first year, household recycling rates increased by 40 percent, and the amount of waste sent to landfills decreased by 25 percent.",
      question:
        "Which choice best describes the function of the second sentence in the text as a whole?",
      options: [
        "A) It provides specific data to support the claim made in the first sentence.",
        "B) It introduces a new topic unrelated to recycling.",
        "C) It contradicts the claim made in the first sentence.",
        "D) It offers an opinion about the recycling program.",
      ],
      correct: "A",
      explanation:
        "The second sentence provides statistics (40% increase, 25% decrease) that directly support the claim of success.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2e-16",
      passage:
        "The new employee quickly proved herself __________; within her first month, she had streamlined the filing system and reduced processing times by half.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) incompetent",
        "B) indifferent",
        "C) industrious",
        "D) inconspicuous",
      ],
      correct: "C",
      explanation:
        "'Industrious' means hardworking and diligent, matching the description of streamlining systems and reducing processing times.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2e-17",
      passage:
        "The committee members have been debating the proposal for weeks. Each of the members __________ submitted written feedback to the chairperson.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) have", "B) has", "C) are", "D) were"],
      correct: "B",
      explanation:
        "'Each' is a singular indefinite pronoun and requires the singular verb 'has.'",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2e-18",
      passage:
        "Anthropologist David Graeber argued that the traditional narrative of economic history — barter leading to money leading to credit — is largely a myth. He presented evidence that credit systems existed long before coins were invented.",
      question: "Which choice best states the main purpose of the text?",
      options: [
        "A) To explain how coins were invented.",
        "B) To present a challenge to a commonly held belief about economic history.",
        "C) To argue that barter systems never existed.",
        "D) To compare different types of currency.",
      ],
      correct: "B",
      explanation:
        "The passage describes Graeber challenging the 'traditional narrative' with contrary evidence.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2e-19",
      passage:
        "The town's annual harvest festival attracts thousands of visitors. __________, local businesses see a significant boost in revenue during the event.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) However",
        "B) As a result",
        "C) In contrast",
        "D) Meanwhile",
      ],
      correct: "B",
      explanation:
        "'As a result' shows the causal relationship between visitors coming and businesses seeing increased revenue.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2e-20",
      passage:
        "Botanist Kenji Murakami observed that certain desert plants open their stomata only at night. This adaptation allows them to absorb carbon dioxide while losing less water to evaporation in the cool nighttime air.",
      question:
        "According to the text, why do these desert plants open their stomata at night?",
      options: [
        "A) To attract nocturnal pollinators.",
        "B) To reduce water loss while still absorbing carbon dioxide.",
        "C) To increase their exposure to moonlight.",
        "D) To release excess oxygen produced during the day.",
      ],
      correct: "B",
      explanation:
        "The passage directly states the adaptation allows plants to 'absorb carbon dioxide while losing less water to evaporation.'",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2e-21",
      passage:
        "The museum's newest exhibit, which features artifacts from the Inca Empire, __________ drawing record numbers of visitors since it opened last month.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) have been",
        "B) has been",
        "C) were",
        "D) are",
      ],
      correct: "B",
      explanation:
        "The subject is 'exhibit' (singular), so the verb must be singular: 'has been.'",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2e-22",
      passage:
        "When the strategy did not produce the expected results, the team decided to __________ their approach and try a completely different method.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) maintain",
        "B) abandon",
        "C) replicate",
        "D) endorse",
      ],
      correct: "B",
      explanation:
        "'Abandon' means to give up on something, which fits the context of leaving one approach to try a completely different method.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2e-23",
      passage:
        "Sociologist Mina Park studied neighborhood gardens in urban areas and found that residents who participated in community gardening reported higher levels of social trust and lower levels of loneliness compared to non-participants.",
      question:
        "Which choice best states the main finding of Park's study?",
      options: [
        "A) Urban residents prefer gardening to other outdoor activities.",
        "B) Community gardening is associated with improved social well-being.",
        "C) Neighborhood gardens increase property values.",
        "D) Loneliness is the biggest problem in urban areas.",
      ],
      correct: "B",
      explanation:
        "The study found higher social trust and lower loneliness among community gardeners, indicating improved social well-being.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2e-24",
      passage:
        "The poet's early work focused on themes of nature and solitude. Her later collections, __________, explored urban life and social connection.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) similarly",
        "B) by contrast",
        "C) for instance",
        "D) in addition",
      ],
      correct: "B",
      explanation:
        "'By contrast' signals the shift from nature/solitude themes to urban life/social connection themes.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2e-25",
      passage:
        "The ruins of Pompeii, buried by the eruption of Mount Vesuvius in 79 CE, provide a remarkably detailed snapshot of Roman daily life. Preserved homes, shops, and public baths reveal how ordinary citizens lived nearly two thousand years ago.",
      question:
        "Which choice best states the main purpose of the text?",
      options: [
        "A) To explain the cause of the eruption of Mount Vesuvius.",
        "B) To argue that Pompeii was the most important Roman city.",
        "C) To describe how Pompeii's ruins inform our understanding of Roman life.",
        "D) To compare Roman public baths to modern facilities.",
      ],
      correct: "C",
      explanation:
        "The passage focuses on how the preserved ruins provide insight into Roman daily life.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2e-26",
      passage:
        "The survey showed that a majority of respondents supported the new policy, __________ several prominent community leaders voiced strong opposition at the public hearing.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) therefore",
        "B) in other words",
        "C) yet",
        "D) likewise",
      ],
      correct: "C",
      explanation:
        "'Yet' signals a contrast between the majority supporting the policy and leaders opposing it.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2e-27",
      passage:
        "Dr. Samuel Chen's research team developed a new water filtration membrane made from graphene oxide. In laboratory tests, the membrane removed 99.8 percent of contaminants from water samples while using significantly less energy than conventional systems.",
      question:
        "According to the text, what is the primary advantage of Chen's graphene oxide membrane?",
      options: [
        "A) It is less expensive to manufacture than other membranes.",
        "B) It achieves very high contaminant removal with lower energy use.",
        "C) It can filter saltwater into drinkable freshwater.",
        "D) It was the first membrane made from graphene.",
      ],
      correct: "B",
      explanation:
        "The passage specifies both the high removal rate (99.8%) and significantly lower energy use compared to conventional systems.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
  ],
};

export const rwM2Harder: PoolModule = {
  id: "rw-m2-harder",
  type: "rw-m2-harder",
  label: "R&W Module 2 — Harder (Shared)",
  questions: [
    {
      id: "rw2h-1",
      passage:
        "Although the governor publicly championed transparency in government, her administration's approach to freedom-of-information requests was notably __________: delays, redactions, and denials became routine.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) forthcoming",
        "B) opaque",
        "C) meticulous",
        "D) equitable",
      ],
      correct: "B",
      explanation:
        "'Opaque' means not transparent, creating an ironic contrast with the governor's public support for transparency.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2h-2",
      passage:
        "Text 1:\nEconomist Yael Stern argues that universal basic income (UBI) would reduce poverty and stimulate consumer spending, creating a virtuous cycle of economic growth. She points to pilot programs in Finland and Stockton, California, where recipients reported improved well-being without significant reductions in workforce participation.\n\nText 2:\nEconomist Raj Patel counters that UBI, while appealing in theory, fails to address structural inequalities. He argues that targeted programs — such as affordable housing, job training, and healthcare — more effectively allocate resources to those who need them most, rather than distributing funds universally regardless of need.",
      question:
        "Based on the texts, how would Patel most likely respond to Stern's argument?",
      options: [
        "A) By agreeing that UBI pilot programs show promise but need more data.",
        "B) By arguing that UBI's universal distribution is less efficient than need-based programs.",
        "C) By suggesting that UBI should be combined with targeted programs.",
        "D) By questioning the reliability of the Finland and Stockton pilot studies.",
      ],
      correct: "B",
      explanation:
        "Patel's core argument is that targeted programs 'more effectively allocate resources to those who need them most' versus universal distribution.",
      domain: "information_ideas",
      subdomain: "cross_text",
    },
    {
      id: "rw2h-3",
      passage:
        "The literary critic's assessment of the novel was deliberately __________: rather than offering a definitive judgment, she presented multiple interpretive frameworks and left readers to draw their own conclusions.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) didactic",
        "B) ambivalent",
        "C) dismissive",
        "D) effusive",
      ],
      correct: "B",
      explanation:
        "'Ambivalent' means having mixed or uncertain feelings, fitting the critic's approach of presenting multiple frameworks rather than a definitive judgment.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2h-4",
      passage:
        "In a 2023 study, neuroscientist Dr. Amara Osei examined how bilingual individuals switch between languages during conversation. She found that the prefrontal cortex — the brain region associated with executive function — showed heightened activity during language switching. Osei hypothesized that this constant cognitive exercise strengthens executive function over time, potentially delaying the onset of age-related cognitive decline. However, she cautioned that her study's cross-sectional design could not establish a causal relationship between bilingualism and cognitive resilience.",
      question:
        "Which choice best describes the overall structure of the text?",
      options: [
        "A) A hypothesis is proposed and immediately refuted by contradictory evidence.",
        "B) A research finding is presented, a hypothesis is offered, and a methodological limitation is acknowledged.",
        "C) Two competing theories are compared and one is shown to be superior.",
        "D) A scientist's career achievements are summarized in chronological order.",
      ],
      correct: "B",
      explanation:
        "The passage presents Osei's finding (heightened prefrontal activity), offers a hypothesis (strengthened executive function), and acknowledges a limitation (cross-sectional design).",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2h-5",
      passage:
        "The Harlem Renaissance of the 1920s and 1930s was not merely an artistic movement; it was a profound reimagining of African American identity. Writers such as Langston Hughes and Zora Neale Hurston drew on Black vernacular traditions — spirituals, blues, and everyday speech — to craft literature that was both aesthetically innovative and politically charged. Their work challenged the prevailing notion that serious literature required adherence to European formal conventions.",
      question:
        "According to the text, Hughes and Hurston's literary approach was significant because it:",
      options: [
        "A) introduced African American readers to European literary traditions.",
        "B) demonstrated that vernacular sources could produce artistically and politically important literature.",
        "C) focused exclusively on the political struggles of African Americans.",
        "D) was widely accepted by contemporary literary critics as superior to European forms.",
      ],
      correct: "B",
      explanation:
        "The passage states they used 'Black vernacular traditions' to create work that was 'aesthetically innovative and politically charged,' challenging the idea that serious literature required European conventions.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2h-6",
      passage:
        "Recent archaeological evidence suggests that the construction of Göbekli Tepe, a monumental site in southeastern Turkey dating to approximately 9600 BCE, preceded the development of agriculture in the region. This finding challenges the long-held assumption that complex architectural projects required the surplus food production associated with farming communities. __________, it raises the possibility that the social organization needed for monumental construction may have actually driven the transition to agriculture.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) Nevertheless",
        "B) In other words",
        "C) Furthermore",
        "D) Alternatively",
      ],
      correct: "C",
      explanation:
        "'Furthermore' introduces an additional, deeper implication: not only does the finding challenge one assumption, it also suggests a reversal of the assumed causal direction.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2h-7",
      passage:
        "The playwright's dialogue has been praised for its verisimilitude — characters speak in fragmented, overlapping sentences that mirror the rhythms of actual conversation. Critics note, however, that this commitment to realism occasionally undermines dramatic clarity, as audiences may struggle to follow the narrative thread amid the naturalistic chaos.",
      question:
        "Which choice best describes the function of the second sentence in the text as a whole?",
      options: [
        "A) It provides an example that supports the claim in the first sentence.",
        "B) It qualifies the praise described in the first sentence by identifying a drawback.",
        "C) It contradicts the first sentence by arguing the dialogue is unrealistic.",
        "D) It shifts the focus from the playwright's dialogue to audience preferences.",
      ],
      correct: "B",
      explanation:
        "The second sentence uses 'however' to introduce a limitation: the realism praised in sentence one can undermine dramatic clarity.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2h-8",
      passage:
        "The CEO's memo to employees, which outlined the company's new strategic direction and __________ the timeline for implementing organizational changes, was distributed to all departments on Monday.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) detailing",
        "B) detailed",
        "C) having detailed",
        "D) to detail",
      ],
      correct: "B",
      explanation:
        "'Detailed' is parallel with 'outlined' — both are past-tense verbs in the relative clause 'which outlined...and detailed.'",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2h-9",
      passage:
        "Text 1:\nHistorian Elena Vasquez argues that the decline of the Roman Republic was primarily driven by economic inequality. As wealth concentrated among a small elite, she contends, the Republic's political institutions lost legitimacy in the eyes of ordinary citizens, making authoritarian alternatives increasingly attractive.\n\nText 2:\nHistorian Marcus Liu maintains that military expansion was the central factor in the Republic's decline. As Rome's territory grew, professional armies became loyal to their generals rather than to the state. Liu argues that this shift in military allegiance, not economic grievances, ultimately enabled figures like Caesar to seize power.",
      question:
        "Which choice best describes a key difference between Vasquez's and Liu's arguments?",
      options: [
        "A) Vasquez focuses on internal social dynamics while Liu emphasizes the role of external military campaigns.",
        "B) Vasquez attributes the decline to institutional weakness caused by inequality, while Liu attributes it to changes in military loyalty structure.",
        "C) Vasquez believes the Republic declined gradually while Liu argues it collapsed suddenly.",
        "D) Vasquez emphasizes the role of ordinary citizens while Liu focuses on the Senate's failures.",
      ],
      correct: "B",
      explanation:
        "Vasquez points to economic inequality undermining institutional legitimacy; Liu points to military allegiance shifting from the state to individual generals.",
      domain: "information_ideas",
      subdomain: "cross_text",
    },
    {
      id: "rw2h-10",
      passage:
        "Ecologist Dr. Fiona Greenwald's longitudinal study of wolf reintroduction in Yellowstone National Park revealed a phenomenon she termed a 'trophic cascade of behavior.' After wolves returned, elk herds not only decreased in number but fundamentally altered their grazing patterns, avoiding open riverbanks where they were vulnerable to predation. This behavioral shift allowed willow and aspen trees to regenerate along waterways, which in turn stabilized stream banks and created new habitat for beaver, songbird, and fish populations.",
      question:
        "Which choice best states the main idea of the text?",
      options: [
        "A) Wolf reintroduction caused elk populations to decline dramatically in Yellowstone.",
        "B) Behavioral changes in elk triggered by wolf reintroduction produced cascading ecological benefits.",
        "C) Beaver and songbird populations in Yellowstone depend primarily on willow trees.",
        "D) Trophic cascades occur only when apex predators are reintroduced to an ecosystem.",
      ],
      correct: "B",
      explanation:
        "The passage traces a chain of effects: wolves changed elk behavior, which allowed tree regeneration, which created habitat for other species — a behavioral trophic cascade.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2h-11",
      passage:
        "The philosopher's argument, though internally consistent and rigorously __________, rested on premises that many of her colleagues considered unverifiable and therefore outside the scope of empirical inquiry.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) specious",
        "B) cogent",
        "C) superficial",
        "D) erratic",
      ],
      correct: "B",
      explanation:
        "'Cogent' means clear, logical, and convincing — consistent with 'internally consistent and rigorously' constructed. The tension is that despite logical rigor, the premises are unverifiable.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2h-12",
      passage:
        "In her analysis of Renaissance patronage, art historian Dr. Lucia Feretti argues that the relationship between artists and their wealthy sponsors was far more collaborative than the traditional patron-as-employer model suggests. Feretti presents evidence that artists like Titian and Raphael actively negotiated the subjects, compositions, and symbolic content of their commissions, sometimes refusing or modifying requests that conflicted with their artistic vision.",
      question:
        "Which statement, if true, would most weaken Feretti's argument?",
      options: [
        "A) Some Renaissance patrons displayed commissioned artworks in private galleries rather than public spaces.",
        "B) Surviving contracts between patrons and artists typically specified exact subjects, dimensions, materials, and completion dates with little room for deviation.",
        "C) Titian and Raphael were among the most famous artists of their era.",
        "D) Renaissance artists often trained in workshops where they learned established techniques.",
      ],
      correct: "B",
      explanation:
        "If contracts specified exact details with little room for deviation, this would contradict Feretti's claim that artists 'actively negotiated' and had significant creative input.",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw2h-13",
      passage:
        "The senator's proposed amendment would require all government contractors to disclose their environmental impact assessments publicly; __________, it would establish an independent review board to verify the accuracy of those disclosures.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) by contrast",
        "B) for instance",
        "C) in addition",
        "D) as a result",
      ],
      correct: "C",
      explanation:
        "'In addition' introduces a second, complementary provision of the same amendment — both disclosure and verification.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2h-14",
      passage:
        "The research team found that participants who were shown images of natural landscapes before taking a creativity test scored, on average, 23 percent higher than those shown images of urban environments. The team's lead researcher, Dr. Hana Johansson, suggested that natural settings may activate diffuse attention — a state in which the mind wanders freely — whereas urban scenes promote focused attention directed at potential threats and navigation demands.",
      question:
        "According to the text, Johansson's explanation assumes that:",
      options: [
        "A) creativity tests are more valid when administered in outdoor settings.",
        "B) diffuse attention is more conducive to creative thinking than focused attention.",
        "C) urban environments are inherently more stressful than natural environments.",
        "D) participants who prefer nature would perform better on all types of cognitive tests.",
      ],
      correct: "B",
      explanation:
        "Johansson's explanation links natural settings to diffuse attention and higher creativity scores, implying diffuse attention supports creative thinking more than focused attention does.",
      domain: "information_ideas",
      subdomain: "inference",
    },
    {
      id: "rw2h-15",
      passage:
        "Among the most __________ aspects of Octavia Butler's science fiction is her refusal to offer utopian solutions; instead, her novels depict characters navigating deeply flawed societies with resourcefulness and moral complexity.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) conventional",
        "B) derivative",
        "C) distinctive",
        "D) predictable",
      ],
      correct: "C",
      explanation:
        "'Distinctive' means characteristic and unique, appropriate for describing a notable quality that sets Butler's work apart.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2h-16",
      passage:
        "The International Space Station (ISS) orbits Earth at approximately 17,500 miles per hour, completing one full orbit every 90 minutes. At this speed, astronauts aboard the station witness 16 sunrises and sunsets each day. Despite this disorienting schedule, crew members maintain a 24-hour routine synchronized with Coordinated Universal Time (UTC) to preserve their circadian rhythms and ensure coordination with ground control teams in multiple time zones.",
      question:
        "Which choice best describes the overall structure of the text?",
      options: [
        "A) A problem is identified and a technological solution is described.",
        "B) A physical phenomenon is described, a resulting challenge is presented, and an operational accommodation is explained.",
        "C) Two competing approaches to a problem are compared.",
        "D) A common misconception about space travel is corrected.",
      ],
      correct: "B",
      explanation:
        "The passage describes the ISS's orbital speed (phenomenon), the resulting 16 sunrises/sunsets (challenge), and the UTC-based schedule (accommodation).",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2h-17",
      passage:
        "The archival documents that the historian cited as evidence for her thesis — letters exchanged between diplomats during the 1884 Berlin Conference — __________ only recently been declassified by the German Federal Archives.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) has", "B) had", "C) having", "D) have"],
      correct: "D",
      explanation:
        "The subject is 'documents' (plural), requiring the plural verb 'have.' The intervening clause about the letters does not change the subject.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2h-18",
      passage:
        "Geneticist Dr. Priya Nair discovered that a specific gene variant, found in approximately 12 percent of the population, significantly increases the efficiency of vitamin D synthesis in skin cells. Nair hypothesized that this variant was naturally selected in populations living at high latitudes, where reduced sunlight exposure makes efficient vitamin D production advantageous. Subsequent analysis of ancient DNA samples from Scandinavian archaeological sites confirmed that the variant's frequency increased markedly over the past 5,000 years in northern European populations.",
      question:
        "Which choice best describes how the ancient DNA evidence relates to Nair's hypothesis?",
      options: [
        "A) It disproves Nair's hypothesis by showing the variant existed before humans migrated to high latitudes.",
        "B) It supports Nair's hypothesis by showing the variant became more common in a population where it would be advantageous.",
        "C) It is unrelated to Nair's hypothesis because ancient DNA cannot reveal gene function.",
        "D) It challenges Nair's hypothesis by revealing the variant is equally common across all populations.",
      ],
      correct: "B",
      explanation:
        "The increased frequency of the variant in northern European populations over time is consistent with natural selection favoring it in low-sunlight environments.",
      domain: "information_ideas",
      subdomain: "command_of_evidence",
    },
    {
      id: "rw2h-19",
      passage:
        "While some critics have dismissed the composer's late symphonies as overly __________, defenders argue that their complexity rewards repeated listening, revealing layers of thematic development that are not immediately apparent.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) accessible",
        "B) abstruse",
        "C) melodious",
        "D) derivative",
      ],
      correct: "B",
      explanation:
        "'Abstruse' means difficult to understand, fitting the critics' complaint and the defenders' counterargument that complexity rewards repeated listening.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2h-20",
      passage:
        "Text 1:\nUrban planner Sasha Reeves advocates for 'complete streets' — roads redesigned to safely accommodate pedestrians, cyclists, and public transit alongside cars. She cites data from cities like Copenhagen and Bogotá showing that complete streets reduce traffic fatalities, improve air quality, and increase retail activity in surrounding businesses.\n\nText 2:\nTransportation analyst Derek Huang cautions that complete streets designs, while beneficial in dense urban cores, may be impractical in suburban and rural contexts where car dependency is deeply embedded in infrastructure and land-use patterns. He argues that imposing urban design principles on these areas without adaptation risks creating streets that serve no constituency well.",
      question:
        "Based on the texts, Huang would most likely agree with which statement about Reeves's position?",
      options: [
        "A) Reeves's data from Copenhagen and Bogotá is unreliable.",
        "B) Complete streets are harmful even in urban settings.",
        "C) Reeves's approach may be sound in some contexts but insufficiently attentive to geographic variation.",
        "D) Complete streets would be more effective if they excluded public transit.",
      ],
      correct: "C",
      explanation:
        "Huang acknowledges complete streets are 'beneficial in dense urban cores' but argues they may be 'impractical in suburban and rural contexts,' suggesting Reeves's approach needs geographic nuance.",
      domain: "information_ideas",
      subdomain: "cross_text",
    },
    {
      id: "rw2h-21",
      passage:
        "The dancer's movements were characterized by a paradoxical combination of precision and __________: every gesture was technically exact yet seemed entirely spontaneous, as though the choreography were being invented in the moment of performance.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) rigidity",
        "B) abandon",
        "C) lethargy",
        "D) uniformity",
      ],
      correct: "B",
      explanation:
        "'Abandon' (noun) means a lack of inhibition or restraint, creating the paradox with precision: technically exact yet seemingly spontaneous.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2h-22",
      passage:
        "Psychologist Dr. Leon Whitfield conducted a meta-analysis of 47 studies on the 'spacing effect' — the finding that information studied in distributed sessions is retained better than information studied in a single concentrated session. Whitfield's analysis confirmed the effect's robustness but revealed an important nuance: the optimal spacing interval varies significantly depending on the desired retention period. For material that needs to be recalled after one week, study sessions spaced one day apart were most effective; for material needed after one month, sessions spaced one week apart yielded the best results.",
      question:
        "According to the text, what was the key nuance Whitfield's meta-analysis revealed?",
      options: [
        "A) The spacing effect only works for certain types of information.",
        "B) Distributed study sessions are always superior to concentrated sessions regardless of timing.",
        "C) The ideal interval between study sessions depends on how long the information needs to be remembered.",
        "D) Students who space their study sessions one week apart always outperform those who space them one day apart.",
      ],
      correct: "C",
      explanation:
        "The passage states 'the optimal spacing interval varies significantly depending on the desired retention period,' with different intervals ideal for different timeframes.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
    {
      id: "rw2h-23",
      passage:
        "The nonprofit organization, along with its network of regional affiliates, __________ launched a campaign to increase voter registration among first-generation college students.",
      question:
        "Which choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) have", "B) has", "C) are", "D) were"],
      correct: "B",
      explanation:
        "The subject is 'organization' (singular). The phrase 'along with its network of regional affiliates' is a parenthetical addition and does not make the subject plural.",
      domain: "craft_structure",
      subdomain: "boundaries",
    },
    {
      id: "rw2h-24",
      passage:
        "In her memoir, the journalist reflected on the ethical tensions inherent in war reporting. She wrote: 'To document suffering without intervening feels like complicity; to intervene undermines the impartiality on which journalistic credibility depends. Every assignment forced me to navigate this impossible calculus.'",
      question:
        "Which choice best describes the rhetorical function of the journalist's quoted statement?",
      options: [
        "A) It presents a personal anecdote to entertain the reader.",
        "B) It articulates an ethical dilemma in which both available courses of action carry significant costs.",
        "C) It argues that journalists should always prioritize intervention over impartiality.",
        "D) It criticizes other journalists for failing to document suffering adequately.",
      ],
      correct: "B",
      explanation:
        "The quote presents two options (documenting without intervening vs. intervening) and shows that each carries a cost (complicity vs. lost impartiality) — a classic ethical dilemma.",
      domain: "craft_structure",
      subdomain: "purpose",
    },
    {
      id: "rw2h-25",
      passage:
        "Marine chemist Dr. Tomoko Ishida found that microplastic concentrations in deep-ocean sediments were three to four times higher than surface-water measurements had predicted. Her findings suggest that previous estimates of ocean plastic pollution, which relied primarily on surface sampling, significantly underestimated the total volume of microplastics in the marine environment. __________, Ishida's work implies that the ecological impact on deep-sea organisms — many of which filter-feed on sediment particles — may be far more severe than currently understood.",
      question:
        "Which choice completes the text with the most logical transition?",
      options: [
        "A) In contrast",
        "B) Similarly",
        "C) By extension",
        "D) To illustrate",
      ],
      correct: "C",
      explanation:
        "'By extension' signals that the next idea is a logical further implication of the research — moving from underestimated pollution volumes to underestimated ecological impacts.",
      domain: "craft_structure",
      subdomain: "transitions",
    },
    {
      id: "rw2h-26",
      passage:
        "The biographer portrayed her subject not as the infallible visionary of popular legend but as a deeply conflicted figure whose greatest innovations emerged from periods of personal crisis and professional failure. In doing so, the biographer sought to replace hagiography with a more __________ account — one that acknowledged both the subject's brilliance and her significant limitations.",
      question:
        "Which choice completes the text with the most logical and precise word?",
      options: [
        "A) laudatory",
        "B) nuanced",
        "C) cursory",
        "D) partisan",
      ],
      correct: "B",
      explanation:
        "'Nuanced' means characterized by subtle distinctions, fitting the biographer's aim to present both brilliance and limitations rather than one-sided praise.",
      domain: "craft_structure",
      subdomain: "words_in_context",
    },
    {
      id: "rw2h-27",
      passage:
        "Climate scientist Dr. Akira Tanaka's model predicts that the Atlantic Meridional Overturning Circulation (AMOC) — the system of ocean currents that carries warm water from the tropics to the North Atlantic — could weaken by 30 to 50 percent by 2100 if greenhouse gas emissions continue at current rates. A weakened AMOC would paradoxically cause parts of Western Europe to experience cooler temperatures even as global average temperatures rise, because less tropical heat would be transported northward. Tanaka emphasizes that while complete AMOC collapse remains unlikely within this century, even a partial weakening could disrupt weather patterns, fisheries, and agriculture across the Northern Hemisphere.",
      question:
        "Which choice best describes the main purpose of the text?",
      options: [
        "A) To argue that AMOC collapse is imminent and irreversible.",
        "B) To present a model's predictions about AMOC weakening and explain its potential regional and global consequences.",
        "C) To compare Tanaka's climate model with competing models of ocean circulation.",
        "D) To explain the mechanism by which greenhouse gases cause global warming.",
      ],
      correct: "B",
      explanation:
        "The passage presents Tanaka's predictions (30-50% weakening), explains a paradoxical consequence (European cooling), and notes broader impacts — all without claiming collapse is certain or comparing to other models.",
      domain: "information_ideas",
      subdomain: "central_idea",
    },
  ],
};
