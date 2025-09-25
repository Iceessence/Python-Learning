import { stages, lessons, focusLabels } from "./lessons-data.js";

const storageKey = "python-100-progress";

const state = {
  stage: new Set(),
  focus: new Set(),
  search: "",
  incompleteOnly: false,
  completedDays: new Set(loadProgress()),
};

const stageFiltersContainer = document.querySelector("#stageFilters");
const focusFiltersContainer = document.querySelector("#focusFilters");
const cardsContainer = document.querySelector("#cards");
const cardTemplate = document.querySelector("#cardTemplate");
const searchInput = document.querySelector("#searchInput");
const completedToggle = document.querySelector("#completedToggle");
const completedCountEl = document.querySelector("#completedCount");
const progressPercentEl = document.querySelector("#progressPercent");
const progressBarEl = document.querySelector("#progressBar");
const toggleTimelineBtn = document.querySelector("#toggleTimeline");
const timelineSection = document.querySelector("#timelineSection");
const timelineContainer = document.querySelector("#timeline");
const resetProgressBtn = document.querySelector("#resetProgress");

const allConcepts = Array.from(
  new Set(lessons.flatMap((lesson) => lesson.concepts)),
);
const allStretchIdeas = Array.from(
  new Set(lessons.flatMap((lesson) => lesson.stretch ?? [])),
);
const allFocuses = Array.from(
  new Set(lessons.flatMap((lesson) => lesson.focus)),
);

const stageBlueprints = {
  beginner: {
    setup:
      "Set up a lightweight workspace (IDE, code editor, or mobile-friendly notebook) and practise running scripts from the command line.",
    plan: "Sketch the flow with simple input → processing → output steps so you know where each concept fits.",
    build:
      "Implement the core logic in tiny increments, testing each line with print statements or an interactive shell.",
    test: "Run through at least three scenarios: a happy path, a tricky edge case, and a deliberately broken input.",
    extend:
      "Refactor messy sections into functions and tidy your variable names so the script reads like a story.",
  },
  intermediate: {
    setup:
      "Review the project structure and ensure reusable modules or classes live in their own files for clarity.",
    plan: "Design class relationships or event-driven flows before coding to keep GUI and logic responsibilities separate.",
    build:
      "Implement behaviour in focused methods, leaning on docstrings to explain side-effects and expected inputs.",
    test: "Exercise each method through small driver scripts or GUI interactions, watching for state bugs and side-effects.",
    extend:
      "Tidy the interface, add quality-of-life improvements, and prepare docstrings or README notes for future you.",
  },
  automation: {
    setup:
      "Store secrets in environment variables or config files and verify API keys or credentials before running any script.",
    plan: "Outline each automation step, including error handling and logging, so long-running tasks stay observable.",
    build:
      "Create focused helper functions for requests, parsing, and data transformations to keep side-effects isolated.",
    test: "Run the automation against sandbox data first, adding retries and guards so unexpected responses do not break the flow.",
    extend:
      "Schedule the script, add status notifications, and capture metrics about success or failure for later review.",
  },
  fullstack: {
    setup:
      "Create a virtual environment, install dependencies, and plan how you will manage configuration for local and production runs.",
    plan: "Map each route, template, and data model. Decide where validation, persistence, and authentication will live.",
    build:
      "Implement endpoints or automation flows incrementally, testing each change through the browser or command line.",
    test: "Write smoke tests for critical routes and manually step through authentication, form handling, and database updates.",
    extend:
      "Polish the UX, capture deployment notes, and ensure secrets plus environment variables are well documented.",
  },
  datascience: {
    setup:
      "Spin up a notebook or script with access to the dataset and document the source, schema, and any cleaning assumptions.",
    plan: "Outline questions you want the data to answer and decide which metrics or plots will help you validate the results.",
    build:
      "Transform and analyse the data step by step, committing intermediate results so you can trace back calculations.",
    test: "Validate findings with descriptive statistics and spot-check rows to confirm your assumptions hold.",
    extend:
      "Present insights with narrative text and visuals, and capture follow-up questions for deeper exploration.",
  },
  portfolio: {
    setup:
      "Review previous projects, choose the stack that best highlights your strengths, and gather any reusable components.",
    plan: "Define your project scope, user stories, and success criteria so you stay focused on shipping a polished deliverable.",
    build:
      "Develop iteratively, committing frequently and keeping a changelog of major decisions or trade-offs.",
    test: "Test on multiple devices or environments, collect feedback, and fix critical issues before calling it finished.",
    extend:
      "Package the project for sharing with documentation, screenshots, and notes about lessons learned.",
  },
};

const stageNarratives = {
  beginner: {
    deepDive:
      "This stage is about fluency with Python syntax. Prioritise reading and writing code daily so patterns like loops, conditionals, and functions become second nature.",
    reflections: [
      "Which syntax mistakes slowed you down today? Capture them in a troubleshooting log to avoid repeats.",
      "How confidently can you explain the difference between storing data in variables versus calculating it on the fly?",
    ],
  },
  intermediate: {
    deepDive:
      "Intermediate projects highlight modular design. Focus on separating responsibilities and letting your code communicate through clean interfaces.",
    reflections: [
      "Where did encapsulation or separation of concerns simplify today’s refactor?",
      "How could docstrings or comments make this project easier for a teammate to extend?",
    ],
  },
  automation: {
    deepDive:
      "Automation requires careful handling of external systems. Emphasise reliability, retries, and observability as much as the core feature.",
    reflections: [
      "What assumptions about an external API could you harden with validation or fallbacks?",
      "How will you monitor or log this automation once it is running unattended?",
    ],
  },
  fullstack: {
    deepDive:
      "Full-stack lessons weave together front end, back end, and data. Keep configuration tidy and document the journey from request to response.",
    reflections: [
      "Which part of the stack felt most fragile today and how can you reinforce it?",
      "What deployment considerations should you document before handing this project to users?",
    ],
  },
  datascience: {
    deepDive:
      "Data science success comes from rigorous questions and reproducible notebooks. Track every transformation and justify each chart or statistic.",
    reflections: [
      "Which cleaning choices had the biggest impact on your conclusions?",
      "How will you communicate uncertainty or limitations in your analysis?",
    ],
  },
  portfolio: {
    deepDive:
      "Portfolio projects showcase craftsmanship. Polish the UX, write supporting documentation, and gather evidence of the impact you created.",
    reflections: [
      "What story will you tell about this project on your resume or portfolio?",
      "Which reusable component or lesson from today can benefit your next build?",
    ],
  },
};

const focusDescriptions = {
  "Python Basics":
    "Practise reading input, storing data in variables, and tracing each line to understand how Python executes your script.",
  Strings:
    "Review how slicing, formatting, and string methods let you reshape user input into helpful messages.",
  Math: "Work with integers, floats, and rounding so your program handles money, scores, and statistics accurately.",
  Conditionals:
    "Use branching logic to let the computer make decisions based on user choices or computed values.",
  Games:
    "Design simple gameplay loops that balance user feedback with random events and fair win conditions.",
  Randomness:
    "Experiment with the random module to create unpredictability while still keeping your program testable.",
  Security:
    "Analyse how to store secrets safely, validate input, and design features that guard against abuse.",
  Functions:
    "Break work into reusable functions with clear parameters and return values to keep code organised.",
  "Problem Solving":
    "Practise decomposition—break problems into smaller actions and recombine them into a complete solution.",
  Loops:
    "Master for and while loops so you can repeat actions, process collections, and control program flow.",
  Dictionaries:
    "Model structured data with key/value pairs for fast lookups and flexible storage.",
  CLI: "Design helpful prompts and outputs so terminal programs feel intuitive and forgiving.",
  Logic:
    "Combine comparisons and boolean operators to create precise, reliable decisions.",
  Scope:
    "Manage the visibility of variables and constants to avoid name clashes and unintended side effects.",
  Debugging:
    "Adopt a deliberate workflow for reproducing bugs, isolating causes, and verifying fixes.",
  Mindset:
    "Reflect on your learning process, track victories, and treat mistakes as data that help you improve.",
  APIs: "Interact with third-party services by crafting requests, parsing responses, and handling authentication securely.",
  Procedural:
    "Structure programs around sequential steps while keeping your functions focused and easy to follow.",
  OOP: "Model real-world systems with classes, encapsulating behaviour and state in maintainable components.",
  Trivia:
    "Blend knowledge questions with clean data structures to create playful, replayable quizzes.",
  Turtle:
    "Use turtle graphics to practise coordinates, state, and event-driven drawing.",
  Events:
    "React to user input or timers by wiring callbacks that keep interfaces responsive.",
  "File I/O":
    "Read from and write to files carefully so you do not lose data and can resume progress later.",
  pandas:
    "Load, filter, and analyse tabular data with expressive pandas operations and chaining.",
  CSV: "Cleanly parse and generate comma-separated data for integrations or analytics.",
  Comprehensions:
    "Write compact, expressive transformations with list, dict, and set comprehensions.",
  Tkinter:
    "Build desktop interfaces with widgets, layout managers, and event bindings.",
  GUI: "Deliver polished graphical experiences by coordinating visuals, input, and business logic.",
  Productivity:
    "Optimise your workflow with keyboard shortcuts, automation, and prioritisation techniques.",
  Persistence:
    "Save state to files or databases so your programs can restart exactly where they left off.",
  Learning:
    "Experiment with spaced repetition, deliberate practice, and metacognition to accelerate progress.",
  Automation:
    "Combine scheduling, scripts, and integrations to remove repetitive manual work from your day.",
  Email:
    "Send and receive structured messages, accounting for authentication, formatting, and deliverability.",
  HTTP: "Understand requests, responses, headers, and status codes to troubleshoot web interactions.",
  Environment:
    "Control Python environments, dependencies, and configuration across machines.",
  Scheduling:
    "Trigger scripts at the right time using cron, schedulers, or queue-based workflows.",
  BeautifulSoup:
    "Parse HTML predictably to extract structured data from semi-structured pages.",
  Selenium:
    "Drive browsers programmatically, synchronising waits and selectors for stable automation.",
  Testing:
    "Write assertions and automated checks so regressions are caught before users spot them.",
  Flask: "Build web applications with routes, templates, and request handling.",
  Templates:
    "Separate presentation from logic using templating languages and reusable layout blocks.",
  Databases:
    "Design schemas, relationships, and queries to store information reliably.",
  SQL: "Practise writing SELECT, INSERT, UPDATE, and JOIN statements with clarity.",
  Authentication:
    "Protect user accounts with secure login flows, hashing, and session management.",
  Bootstrap:
    "Prototype responsive layouts quickly with reusable components and utility classes.",
  WTForms:
    "Validate and sanitise user input server-side using declarative form definitions.",
  REST: "Design predictable APIs with clear resources, HTTP verbs, and status codes.",
  Deployment:
    "Ship your project to users by configuring servers, environment variables, and monitoring.",
  "CLI Tools":
    "Package scripts with helpful commands, flags, and documentation for power users.",
  NLP: "Clean and analyse text data, transforming it into insights or automation triggers.",
  "Data Visualisation":
    "Tell compelling stories with charts that emphasise the most important trends.",
  "Time Series":
    "Model temporal data, watching for seasonality, trends, and anomalies.",
  Probability:
    "Reason about likelihoods to make simulations and decisions more realistic.",
  Regression:
    "Fit and evaluate predictive models, interpreting coefficients and error metrics.",
  Algorithms:
    "Compare algorithmic strategies and discuss their trade-offs in readability, speed, and memory usage.",
  Arrays:
    "Work with ordered collections efficiently, slicing and mutating them as your program runs.",
  Auth: "Design secure authentication flows with hashing, sessions, and clear feedback for users.",
  Blog: "Create content management features such as drafts, publishing workflows, and archives.",
  "Data Ethics":
    "Pause to examine bias, consent, privacy, and the downstream effects of your data work.",
  "Data Viz":
    "Select chart types that reinforce your message and avoid misleading interpretations.",
  Deploy:
    "Automate deployment pipelines with repeatable scripts, environment variables, and health checks.",
  Design:
    "Apply UX principles so interfaces feel intuitive, accessible, and consistent.",
  DevOps:
    "Close the loop between development and operations with automation, monitoring, and feedback.",
  Finance:
    "Model cash flow, interest, and risk with careful rounding and transparent calculations.",
  Forms:
    "Validate and sanitise user submissions while providing helpful error states.",
  "Google Sheets":
    "Connect spreadsheets to Python so teams can collaborate without manual copying.",
  "HTML/CSS":
    "Craft semantic markup and responsive layouts to support your Python-backed web apps.",
  "Hypothesis Testing":
    "Plan experiments, run statistical tests, and interpret p-values responsibly.",
  "Machine Learning":
    "Train, evaluate, and iterate on predictive models while preventing overfitting.",
  NumPy:
    "Leverage vectorised operations and broadcasting for fast numerical computing.",
  Payments:
    "Integrate payment providers securely, handling retries, receipts, and compliance.",
  Pillow:
    "Manipulate and analyse images with Pillow, focusing on formats, colours, and transformations.",
  Portfolio:
    "Frame your work to highlight outcomes, impact, and the problems you solved.",
  "REST APIs":
    "Design and consume RESTful endpoints with clear resources, verbs, and status codes.",
  Scraping:
    "Collect web data responsibly with respectful delays, error handling, and parsing strategies.",
  Seaborn:
    "Create statistical visualisations quickly with helpful defaults and custom themes.",
  "Text-to-Speech":
    "Transform written content into audio while controlling voice, speed, and clarity.",
  Visualisation:
    "Communicate complex findings with visuals that emphasise clarity over flashiness.",
  Web: "Understand the full request/response cycle, from routing to templates to static assets.",
  Plotly:
    "Build interactive charts that invite exploration and highlight key narratives.",
  Matplotlib:
    "Customise figures meticulously so your visualisations communicate the right story.",
  Statistics:
    "Summarise data with descriptive and inferential statistics to back up your conclusions.",
  "Data Wrangling":
    "Clean and restructure raw data into analysis-ready formats.",
  Exploratory:
    "Ask open-ended questions of the data to uncover hidden structure and surprises.",
  "Data Cleaning":
    "Detect anomalies, fill gaps, and standardise values to trust your downstream analysis.",
  APScheduler:
    "Schedule Python jobs with APScheduler, managing intervals, cron triggers, and persistence.",
  Dashboards:
    "Assemble multi-panel dashboards that update dynamically with the latest data.",
  EDA: "Perform exploratory data analysis to familiarise yourself with distributions and relationships.",
  Etc: "Dive deeper into the bespoke tools highlighted in the lesson and record what you discover.",
};

renderFilters();
renderTimeline();
renderCards();
updateProgress();

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.toLowerCase();
  renderCards();
});

completedToggle.addEventListener("change", (event) => {
  state.incompleteOnly = event.target.checked;
  renderCards();
});

toggleTimelineBtn.addEventListener("click", () => {
  const hidden = timelineSection.hasAttribute("hidden");
  if (hidden) {
    timelineSection.removeAttribute("hidden");
    toggleTimelineBtn.textContent = "Hide Timeline";
  } else {
    timelineSection.setAttribute("hidden", "");
    toggleTimelineBtn.textContent = "Show Timeline";
  }
});

resetProgressBtn.addEventListener("click", () => {
  if (confirm("Reset all completed days?")) {
    state.completedDays.clear();
    saveProgress();
    renderCards();
    updateProgress();
  }
});

function renderFilters() {
  stages.forEach((stage) => {
    const chip = createChip(stage.label, () => {
      toggleFilter(state.stage, stage.id);
      renderCards();
    });
    chip.dataset.value = stage.id;
    stageFiltersContainer.appendChild(chip);
  });

  const sortedFocus = Object.keys(focusLabels).sort((a, b) =>
    (focusLabels[a] || a).localeCompare(focusLabels[b] || b),
  );

  sortedFocus.forEach((focus) => {
    const chip = createChip(focusLabels[focus] || focus, () => {
      toggleFilter(state.focus, focus);
      renderCards();
    });
    chip.dataset.value = focus;
    focusFiltersContainer.appendChild(chip);
  });
}

function createChip(label, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "chip";
  button.setAttribute("aria-pressed", "false");
  button.textContent = label;
  button.addEventListener("click", () => {
    const pressed = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", pressed ? "false" : "true");
    onClick();
  });
  return button;
}

function toggleFilter(set, value) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

function renderCards() {
  cardsContainer.innerHTML = "";

  const filtered = lessons.filter((lesson) => {
    const matchesStage =
      state.stage.size === 0 || state.stage.has(lesson.stage);
    const matchesFocus =
      state.focus.size === 0 ||
      lesson.focus.some((focus) => state.focus.has(focus));
    const matchesSearch =
      state.search === "" ||
      [lesson.title, lesson.description, ...lesson.focus]
        .join(" ")
        .toLowerCase()
        .includes(state.search);
    const isCompleted = state.completedDays.has(String(lesson.day));
    const matchesIncomplete = !state.incompleteOnly || !isCompleted;

    return matchesStage && matchesFocus && matchesSearch && matchesIncomplete;
  });

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.textContent =
      "No lessons match your filters. Try adjusting the criteria.";
    empty.className = "empty";
    cardsContainer.appendChild(empty);
    return;
  }

  filtered.forEach((lesson) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    const dayEl = card.querySelector(".card__day");
    const titleEl = card.querySelector(".card__title");
    const metaEl = card.querySelector(".card__meta");
    const descriptionEl = card.querySelector(".card__description");
    const conceptsEl = card.querySelector(".card__concepts");
    const sectionsEl = card.querySelector(".card__sections");
    const checkbox = card.querySelector("input[type='checkbox']");
    const toggleButton = card.querySelector(".card__toggle");
    const body = card.querySelector(".card__body");

    dayEl.textContent = `Day ${lesson.day}`;
    titleEl.textContent = lesson.title;
    metaEl.innerHTML = "";
    metaEl.appendChild(createMetaTag(getStageLabel(lesson.stage)));
    lesson.focus.forEach((focus) => {
      metaEl.appendChild(createMetaTag(focusLabels[focus] || focus));
    });

    descriptionEl.textContent = buildDetailedDescription(lesson);

    conceptsEl.innerHTML = "";
    conceptsEl.classList.add("card__concepts-list");
    lesson.concepts.forEach((concept) => {
      const li = document.createElement("li");
      li.textContent = concept;
      conceptsEl.appendChild(li);
    });

    sectionsEl.innerHTML = "";
    buildLessonSections(lesson).forEach((section) => {
      sectionsEl.appendChild(section);
    });

    const isCompleted = state.completedDays.has(String(lesson.day));
    checkbox.checked = isCompleted;

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        state.completedDays.add(String(lesson.day));
      } else {
        state.completedDays.delete(String(lesson.day));
      }
      saveProgress();
      updateProgress();
      if (state.incompleteOnly && checkbox.checked) {
        card.remove();
        updateEmptyState();
      }
    });

    toggleButton.addEventListener("click", () => {
      const expanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", expanded ? "false" : "true");
      body.hidden = expanded;
      if (!expanded) {
        toggleButton.textContent = "Hide details";
      } else {
        toggleButton.textContent = "Show details";
      }
    });

    cardsContainer.appendChild(card);
  });

  updateEmptyState();
}

function createMetaTag(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}

function getStageLabel(stageId) {
  return stages.find((stage) => stage.id === stageId)?.label || stageId;
}

function renderTimeline() {
  timelineContainer.innerHTML = "";
  stages.forEach((stage) => {
    const section = document.createElement("div");
    section.className = "timeline__stage";

    const heading = document.createElement("h3");
    heading.textContent = stage.label;
    section.appendChild(heading);

    const summary = document.createElement("p");
    summary.textContent = stage.summary;
    section.appendChild(summary);

    const range = document.createElement("p");
    range.innerHTML = `<strong>Days:</strong> ${stage.range}`;
    section.appendChild(range);

    const masteryHeading = document.createElement("p");
    masteryHeading.innerHTML = "<strong>Mastery Checklist:</strong>";
    section.appendChild(masteryHeading);

    const masteryList = document.createElement("ul");
    masteryList.className = "timeline__mastery";
    buildStageMastery(stage.id).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      masteryList.appendChild(li);
    });
    section.appendChild(masteryList);

    const highlights = document.createElement("p");
    const highlightsText = lessons
      .filter((lesson) => lesson.stage === stage.id)
      .slice(0, 3)
      .map((lesson) => lesson.title)
      .join(", ");
    highlights.innerHTML = `<strong>Highlights:</strong> ${highlightsText}...`;
    section.appendChild(highlights);

    timelineContainer.appendChild(section);
  });
}

function updateProgress() {
  const completed = state.completedDays.size;
  const total = lessons.length;
  const percent = Math.round((completed / total) * 100);

  completedCountEl.textContent = completed;
  progressPercentEl.textContent = `${percent}%`;
  progressBarEl.style.width = `${percent}%`;

  saveProgress();
}

function updateEmptyState() {
  if (cardsContainer.children.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "All matching lessons are complete. Great job!";
    empty.className = "empty";
    cardsContainer.appendChild(empty);
  }
}

function buildLessonSections(lesson) {
  const sections = [];

  sections.push(
    createSection("Learning Objectives", (container) => {
      container.appendChild(createList(generateLearningObjectives(lesson)));
    }),
  );

  sections.push(
    createSection("Step-by-Step Walkthrough", (container) => {
      container.appendChild(
        createList(generateWalkthroughSteps(lesson), { ordered: true }),
      );
    }),
  );

  sections.push(createPracticeSection(lesson));

  sections.push(
    createSection("Deepen Your Understanding", (container) => {
      generateDeepDiveNotes(lesson).forEach((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        container.appendChild(p);
      });
    }),
  );

  sections.push(
    createSection("Reflection Prompts", (container) => {
      container.appendChild(createList(generateReflectionPrompts(lesson)));
    }),
  );

  sections.push(createQuizSection(lesson));

  return sections;
}

function createSection(title, buildContent) {
  const section = document.createElement("section");
  section.className = "card__section";
  const heading = document.createElement("h4");
  heading.textContent = title;
  section.appendChild(heading);
  buildContent(section);
  return section;
}

function createList(items, options = {}) {
  const { ordered = false, className = "" } = options;
  const list = document.createElement(ordered ? "ol" : "ul");
  list.className = `card__list ${className}`.trim();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  return list;
}

function createPracticeSection(lesson) {
  const section = createSection("Practice Lab", (container) => {
    const intro = document.createElement("p");
    intro.textContent =
      "Work through the core build, then use the stretch ideas as optional missions. Check items off as you finish them.";
    container.appendChild(intro);

    const coreTasks = [
      `Sketch the data flow for "${lesson.title}" highlighting where ${lesson.focus
        .map((focus) => focusLabels[focus] || focus)
        .join(" and ")} show up.`,
      `Implement the main feature focusing on ${lesson.concepts.slice(0, 2).join(" and ")}.`,
      `Test at least three inputs, including an edge case that could break ${lesson.title.toLowerCase()}.`,
    ];

    const coreList = createChecklist(coreTasks, `${lesson.day}-core`);
    container.appendChild(coreList);

    if (lesson.stretch?.length) {
      const stretchHeading = document.createElement("h5");
      stretchHeading.textContent = "Stretch Experiments";
      container.appendChild(stretchHeading);
      const stretchList = createChecklist(
        lesson.stretch.map((idea) => `Stretch: ${idea}.`),
        `${lesson.day}-stretch`,
      );
      container.appendChild(stretchList);
    }
  });

  return section;
}

function createChecklist(items, idPrefix) {
  const list = document.createElement("ul");
  list.className = "card__checklist";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.className = "card__checklist-item";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${idPrefix}-${index}`;
    const span = document.createElement("span");
    span.textContent = item;
    label.appendChild(checkbox);
    label.appendChild(span);
    li.appendChild(label);
    list.appendChild(li);
  });
  return list;
}

function generateLearningObjectives(lesson) {
  const stageInfo = getStageNarrative(lesson.stage);
  const focusText = lesson.focus
    .map((focus) => focusLabels[focus] || focus)
    .join(", ");
  const additionalConcepts = lesson.concepts.slice(1);
  const additionalText =
    additionalConcepts.length > 0
      ? additionalConcepts.join(", ")
      : lesson.concepts[0];
  const conceptCount =
    additionalConcepts.length > 0 ? additionalConcepts.length : 1;
  return [
    `Describe how the ${focusText} skills power the "${lesson.title}" project from start to finish.`,
    `Implement ${lesson.concepts[0]} confidently and explain why it matters for this build.`,
    `Trace the program line by line to prove you understand control flow and data transformations.`,
    `Apply the ${additionalText} concept${conceptCount > 1 ? "s" : ""} to solve similar challenges on your own.`,
    stageInfo.deepDive,
  ];
}

function generateWalkthroughSteps(lesson) {
  const blueprint = stageBlueprints[lesson.stage];
  const focusText = lesson.focus
    .map((focus) => focusLabels[focus] || focus)
    .join(" and ");
  return [
    blueprint.setup,
    `${blueprint.plan} Document how ${focusText} will appear in your solution.`,
    `${blueprint.build} Prioritise the part that demonstrates ${lesson.concepts[0]}.`,
    `${blueprint.test} Capture notes about what passed or failed.`,
    `${blueprint.extend} Celebrate by writing a short summary of what ${lesson.title} taught you.`,
  ];
}

function createQuizSection(lesson) {
  const questions = buildQuizQuestions(lesson);
  return createSection("Quick Quiz", (container) => {
    const intro = document.createElement("p");
    intro.className = "card__section-intro";
    intro.textContent =
      "Choose the best answer for each question, then check your understanding.";
    container.appendChild(intro);

    questions.forEach((question, questionIndex) => {
      const questionEl = document.createElement("div");
      questionEl.className = "quiz-question";
      const prompt = document.createElement("p");
      prompt.className = "quiz-question__prompt";
      prompt.textContent = question.prompt;
      questionEl.appendChild(prompt);

      const optionsContainer = document.createElement("div");
      optionsContainer.className = "quiz-question__options";

      const name = `quiz-${lesson.day}-${questionIndex}`;
      question.options.forEach((option, optionIndex) => {
        const optionId = `${name}-${optionIndex}`;
        const label = document.createElement("label");
        label.className = "quiz-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = name;
        input.value = option.text;
        input.id = optionId;
        label.htmlFor = optionId;
        const span = document.createElement("span");
        span.textContent = option.text;
        label.appendChild(input);
        label.appendChild(span);
        optionsContainer.appendChild(label);
      });
      questionEl.appendChild(optionsContainer);

      const feedback = document.createElement("p");
      feedback.className = "quiz-question__feedback";
      questionEl.appendChild(feedback);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-question__button";
      button.textContent = "Check answer";
      button.addEventListener("click", () => {
        const selected = questionEl.querySelector(
          `input[name='${name}']:checked`,
        );
        if (!selected) {
          feedback.textContent = "Select an option first.";
          feedback.dataset.state = "warning";
          return;
        }
        const correct = question.options.find((option) => option.correct)?.text;
        if (selected.value === correct) {
          feedback.textContent = question.successMessage;
          feedback.dataset.state = "success";
        } else {
          feedback.textContent = `Not quite. Revisit the lesson notes and remember: ${question.hint}`;
          feedback.dataset.state = "error";
        }
      });
      questionEl.appendChild(button);

      container.appendChild(questionEl);
    });
  });
}

function buildQuizQuestions(lesson) {
  const correctConcept = lesson.concepts[0];
  const conceptDistractors = pickAlternatives(
    correctConcept,
    allConcepts,
    2,
    lesson.day,
    lesson.concepts,
  );

  const stretchIdea =
    lesson.stretch?.[0] ?? "Review your code style and document one insight.";
  const stretchDistractors = pickAlternatives(
    stretchIdea,
    allStretchIdeas,
    2,
    lesson.day + 17,
    lesson.stretch ?? [],
  );

  const correctFocus = lesson.focus[0];
  const focusDistractors = pickAlternatives(
    correctFocus,
    allFocuses,
    2,
    lesson.day + 33,
    lesson.focus,
  );

  return [
    {
      prompt: `Which concept is essential when building "${lesson.title}"?`,
      options: arrangeOptions(correctConcept, conceptDistractors, lesson.day),
      successMessage:
        "Exactly—mastering that concept makes the project much easier to reason about.",
      hint: `Focus on how ${correctConcept.toLowerCase()} keeps the program organised.`,
    },
    {
      prompt: `When extending "${lesson.title}", which enhancement should you attempt?`,
      options: arrangeOptions(stretchIdea, stretchDistractors, lesson.day + 5),
      successMessage:
        "Great choice! Experimenting with that stretch goal deepens your understanding.",
      hint: `Try the enhancement that most closely mirrors the lesson goals.`,
    },
    {
      prompt: `This day reinforces which focus area the most?`,
      options: arrangeOptions(
        focusLabels[correctFocus] || correctFocus,
        focusDistractors,
        lesson.day + 11,
      ),
      successMessage: "Correct—lean into that focus while you practise.",
      hint: `Look back at the focus tags at the top of the card.`,
    },
  ];
}

function arrangeOptions(correct, distractors, seed) {
  const options = [
    { text: correct, correct: true },
    ...distractors.map((text) => ({ text, correct: false })),
  ];
  const offset = seed % options.length;
  return options.map((_, index) => options[(index + offset) % options.length]);
}

function pickAlternatives(correct, pool, count, seed, exclusions = []) {
  const results = [];
  const exclusionSet = new Set([correct, ...exclusions]);
  for (
    let attempt = 0;
    results.length < count && attempt < pool.length * 2;
    attempt += 1
  ) {
    const candidate = pool[(seed + attempt * 3) % pool.length];
    if (!candidate || exclusionSet.has(candidate)) {
      continue;
    }
    exclusionSet.add(candidate);
    results.push(candidate);
  }
  while (results.length < count) {
    results.push("Review previous lessons for contrast.");
  }
  return results;
}

function generateDeepDiveNotes(lesson) {
  const stageInfo = getStageNarrative(lesson.stage);
  const notes = [stageInfo.deepDive];
  lesson.focus.forEach((focus) => {
    const label = focusLabels[focus] || focus;
    const lower = label.toLowerCase();
    let description =
      focusDescriptions[focus] || focusDescriptions[label] || "";
    if (!description) {
      if (lower.includes("data")) {
        description = `Explore how ${label.toLowerCase()} helps you make evidence-based decisions.`;
      } else if (lower.includes("web")) {
        description = `Practise tracing each web request so you understand the full client/server exchange.`;
      } else if (lower.includes("design")) {
        description = `Reflect on how design choices influence usability and maintainability.`;
      } else {
        description = `Deepen your understanding of ${label.toLowerCase()} by building a mini demo in the REPL.`;
      }
    }
    notes.push(description);
  });
  notes.push(
    "Summarise the two biggest insights from today in your journal or README so you can refer back later.",
  );
  return notes;
}

function generateReflectionPrompts(lesson) {
  const stageInfo = getStageNarrative(lesson.stage);
  const focusText = lesson.focus
    .map((focus) => focusLabels[focus] || focus)
    .join(" and ");
  return [
    `Where did you rely on ${focusText} most, and how could you make that part of the program clearer?`,
    stageInfo.reflections[lesson.day % stageInfo.reflections.length],
    `What is one question you still have about ${lesson.concepts[0]}? Plan how you will answer it tomorrow.`,
  ];
}

function getStageNarrative(stageId) {
  return stageNarratives[stageId] ?? stageNarratives.beginner;
}

function buildStageMastery(stageId) {
  const stageLessons = lessons.filter((lesson) => lesson.stage === stageId);
  const conceptCounts = new Map();
  const focusCounts = new Map();
  stageLessons.forEach((lesson) => {
    lesson.concepts.forEach((concept) => {
      conceptCounts.set(concept, (conceptCounts.get(concept) ?? 0) + 1);
    });
    lesson.focus.forEach((focus) => {
      const label = focusLabels[focus] || focus;
      focusCounts.set(label, (focusCounts.get(label) ?? 0) + 1);
    });
  });

  const topConcepts = Array.from(conceptCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([concept]) => `Be confident using ${concept.toLowerCase()}.`);

  const topFocus = Array.from(focusCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([label]) => `Apply ${label.toLowerCase()} skills in new contexts.`);

  const narrative = getStageNarrative(stageId);
  return [
    ...topConcepts,
    ...topFocus,
    "Document your progress and track wins in a learning log.",
    narrative.reflections[0],
  ];
}

function buildDetailedDescription(lesson) {
  const stageLabel = getStageLabel(lesson.stage);
  const focuses = lesson.focus
    .map((focus) => focusLabels[focus] || focus)
    .join(", ");
  const relatedLesson = lessons[(lesson.day + 5) % lessons.length];
  const keyConcepts = lesson.concepts.slice(0, 2).join(" and ");
  const comparisonDay = ((lesson.day + 5) % lessons.length) + 1;
  return `Day ${lesson.day} anchors the ${stageLabel} stage. You will combine ${focuses.toLowerCase()} with ${keyConcepts} to deliver "${lesson.title}". Compare your approach with the guidance from Day ${comparisonDay} ("${relatedLesson.title}") to reinforce transferable skills.`;
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.warn("Failed to load progress", error);
    return [];
  }
}

function saveProgress() {
  localStorage.setItem(
    storageKey,
    JSON.stringify(Array.from(state.completedDays)),
  );
}
