// Auto-generated lesson data
export const stages = [
  {
    "id": "beginner",
    "label": "Days 1–14 · Beginner",
    "range": "1–14",
    "summary": "Build Python fundamentals with simple control flow, functions, and beginner-friendly games."
  },
  {
    "id": "intermediate",
    "label": "Days 15–31 · Intermediate (OOP & GUI)",
    "range": "15–31",
    "summary": "Dive into object-oriented design, GUI programming with turtle and Tkinter, and modular projects."
  },
  {
    "id": "automation",
    "label": "Days 32–45 · APIs, Automation & Scraping",
    "range": "32–45",
    "summary": "Use external APIs, automate workflows, and scrape the web while managing secrets and data."
  },
  {
    "id": "fullstack",
    "label": "Days 46–70 · Selenium, Flask & Databases",
    "range": "46–70",
    "summary": "Automate the browser, build Flask apps, integrate databases, and prepare for deployment."
  },
  {
    "id": "datascience",
    "label": "Days 71–80 · Data Science & Visualisation",
    "range": "71–80",
    "summary": "Analyse datasets with pandas, NumPy, and visualisation libraries to uncover insights."
  },
  {
    "id": "portfolio",
    "label": "Days 81–100 · Portfolio Projects",
    "range": "81–100",
    "summary": "Ship polished apps, automation scripts, and analytical reports to showcase your Python mastery."
  }
];

export const lessons = [
  {
    "day": 1,
    "title": "Band Name Generator",
    "stage": "beginner",
    "focus": [
      "Python Basics",
      "Strings"
    ],
    "description": "Mix user inputs into fun band names to learn about variables and text.",
    "concepts": [
      "Input & output",
      "Variables",
      "Basic syntax",
      "Concatenation"
    ],
    "stretch": [
      "Handle invalid input",
      "Refactor with functions",
      "Add uppercase/lowercase options"
    ],
    "resources": [
      {
        "label": "Python tutorial",
        "url": "https://docs.python.org/3/tutorial/"
      },
      {
        "label": "String methods",
        "url": "https://docs.python.org/3/library/stdtypes.html#textseq"
      }
    ]
  },
  {
    "day": 2,
    "title": "Tip Calculator",
    "stage": "beginner",
    "focus": [
      "Python Basics",
      "Math"
    ],
    "description": "Split bills and tips with numeric types and rounding practice.",
    "concepts": [
      "Input & output",
      "Variables",
      "Basic syntax",
      "Arithmetic"
    ],
    "stretch": [
      "Handle invalid input",
      "Refactor with functions",
      "Support more operators"
    ],
    "resources": [
      {
        "label": "Python tutorial",
        "url": "https://docs.python.org/3/tutorial/"
      },
      {
        "label": "Numeric types",
        "url": "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex"
      }
    ]
  },
  {
    "day": 3,
    "title": "Treasure Island",
    "stage": "beginner",
    "focus": [
      "Conditionals",
      "Games"
    ],
    "description": "Navigate a choose-your-own adventure using branching logic.",
    "concepts": [
      "if/elif/else",
      "Logical operators",
      "Branching",
      "Game loops"
    ],
    "stretch": [
      "Add more story paths",
      "Track player choices",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "Control flow",
        "url": "https://docs.python.org/3/tutorial/controlflow.html"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 4,
    "title": "Rock–Paper–Scissors",
    "stage": "beginner",
    "focus": [
      "Randomness",
      "Games"
    ],
    "description": "Simulate classic hand battles against the computer.",
    "concepts": [
      "random module",
      "Random choices",
      "Shuffling",
      "Game loops"
    ],
    "stretch": [
      "Seed randomness",
      "Add weighted choices",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "random docs",
        "url": "https://docs.python.org/3/library/random.html"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 5,
    "title": "Password Generator",
    "stage": "beginner",
    "focus": [
      "Randomness",
      "Security"
    ],
    "description": "Create secure passwords using loops and shuffling.",
    "concepts": [
      "random module",
      "Random choices",
      "Shuffling",
      "Password strength"
    ],
    "stretch": [
      "Seed randomness",
      "Add weighted choices",
      "Score password strength"
    ],
    "resources": [
      {
        "label": "random docs",
        "url": "https://docs.python.org/3/library/random.html"
      },
      {
        "label": "OWASP basics",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ]
  },
  {
    "day": 6,
    "title": "Reeborg Maze",
    "stage": "beginner",
    "focus": [
      "Functions",
      "Problem Solving"
    ],
    "description": "Automate maze navigation with reusable helpers.",
    "concepts": [
      "Defining functions",
      "Parameters",
      "Return values",
      "Decomposition"
    ],
    "stretch": [
      "Add default parameters",
      "Compose functions",
      "Create extra challenges"
    ],
    "resources": [
      {
        "label": "Defining functions",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
      },
      {
        "label": "Problem solving patterns",
        "url": "https://realpython.com/python-projects-for-beginners/"
      }
    ]
  },
  {
    "day": 7,
    "title": "Hangman",
    "stage": "beginner",
    "focus": [
      "Loops",
      "Games"
    ],
    "description": "Build a terminal hangman and manage multi-stage state.",
    "concepts": [
      "for loops",
      "while loops",
      "Loop control",
      "Game loops"
    ],
    "stretch": [
      "Add break conditions",
      "Provide loop counters",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "Loop techniques",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#for-statements"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 8,
    "title": "Caesar Cipher",
    "stage": "beginner",
    "focus": [
      "Functions",
      "Security"
    ],
    "description": "Encode and decode messages with shift ciphers.",
    "concepts": [
      "Defining functions",
      "Parameters",
      "Return values",
      "Password strength"
    ],
    "stretch": [
      "Add default parameters",
      "Compose functions",
      "Score password strength"
    ],
    "resources": [
      {
        "label": "Defining functions",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
      },
      {
        "label": "OWASP basics",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ]
  },
  {
    "day": 9,
    "title": "Secret Auction",
    "stage": "beginner",
    "focus": [
      "Dictionaries",
      "CLI"
    ],
    "description": "Collect anonymous bids and determine the winner.",
    "concepts": [
      "Key/value pairs",
      "Updating data",
      "Lookup",
      "User prompts"
    ],
    "stretch": [
      "Persist to JSON",
      "Handle missing keys",
      "Add command history"
    ],
    "resources": [
      {
        "label": "Dictionary how-to",
        "url": "https://realpython.com/python-dicts/"
      },
      {
        "label": "argparse",
        "url": "https://docs.python.org/3/library/argparse.html"
      }
    ]
  },
  {
    "day": 10,
    "title": "Calculator (Functions)",
    "stage": "beginner",
    "focus": [
      "Functions",
      "CLI"
    ],
    "description": "Compose a calculator using functions with return values.",
    "concepts": [
      "Defining functions",
      "Parameters",
      "Return values",
      "User prompts"
    ],
    "stretch": [
      "Add default parameters",
      "Compose functions",
      "Add command history"
    ],
    "resources": [
      {
        "label": "Defining functions",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
      },
      {
        "label": "argparse",
        "url": "https://docs.python.org/3/library/argparse.html"
      }
    ]
  },
  {
    "day": 11,
    "title": "Blackjack",
    "stage": "beginner",
    "focus": [
      "Games",
      "Logic"
    ],
    "description": "Simulate Blackjack with card decks and scoring rules.",
    "concepts": [
      "Game loops",
      "State tracking",
      "User feedback",
      "Boolean expressions"
    ],
    "stretch": [
      "Add scoring",
      "Increase difficulty",
      "Add custom rules"
    ],
    "resources": [
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      },
      {
        "label": "Logic in Python",
        "url": "https://realpython.com/python-boolean/"
      }
    ]
  },
  {
    "day": 12,
    "title": "Number Guessing",
    "stage": "beginner",
    "focus": [
      "Scope",
      "Games"
    ],
    "description": "Guess the number while exploring scope and constants.",
    "concepts": [
      "Local vs global",
      "Constants",
      "Namespaces",
      "Game loops"
    ],
    "stretch": [
      "Refactor to reduce globals",
      "Write helper modules",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "Scope guide",
        "url": "https://realpython.com/python-scope-legb-rule/"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 13,
    "title": "Debugging Day",
    "stage": "beginner",
    "focus": [
      "Debugging",
      "Mindset"
    ],
    "description": "Practise debugging tactics and reading tracebacks.",
    "concepts": [
      "Tracebacks",
      "Print debugging",
      "Mindset",
      "Growth mindset"
    ],
    "stretch": [
      "Use a debugger",
      "Create a checklist",
      "Log lessons learned"
    ],
    "resources": [
      {
        "label": "pdb tutorial",
        "url": "https://realpython.com/python-debugging-pdb/"
      },
      {
        "label": "Learning mindset",
        "url": "https://www.coursera.org/articles/growth-mindset"
      }
    ]
  },
  {
    "day": 14,
    "title": "Higher or Lower",
    "stage": "beginner",
    "focus": [
      "APIs",
      "Games"
    ],
    "description": "Compare celebrity reach using data-driven guessing.",
    "concepts": [
      "HTTP requests",
      "JSON parsing",
      "Endpoints",
      "Game loops"
    ],
    "stretch": [
      "Handle errors",
      "Add retries",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 15,
    "title": "Coffee Machine (Procedural)",
    "stage": "intermediate",
    "focus": [
      "Procedural",
      "CLI"
    ],
    "description": "Model a coffee machine with procedural state logic.",
    "concepts": [
      "State machines",
      "Functions",
      "Refactoring",
      "User prompts"
    ],
    "stretch": [
      "Extract modules",
      "Add test cases",
      "Add command history"
    ],
    "resources": [
      {
        "label": "Procedural patterns",
        "url": "https://realpython.com/python-application-layouts/"
      },
      {
        "label": "argparse",
        "url": "https://docs.python.org/3/library/argparse.html"
      }
    ]
  },
  {
    "day": 16,
    "title": "Coffee Machine (OOP)",
    "stage": "intermediate",
    "focus": [
      "OOP",
      "CLI"
    ],
    "description": "Refactor the machine into collaborating classes.",
    "concepts": [
      "Classes",
      "Instances",
      "Encapsulation",
      "User prompts"
    ],
    "stretch": [
      "Introduce inheritance",
      "Add unit tests",
      "Add command history"
    ],
    "resources": [
      {
        "label": "OOP guide",
        "url": "https://realpython.com/python3-object-oriented-programming/"
      },
      {
        "label": "argparse",
        "url": "https://docs.python.org/3/library/argparse.html"
      }
    ]
  },
  {
    "day": 17,
    "title": "Quiz Game",
    "stage": "intermediate",
    "focus": [
      "OOP",
      "Trivia"
    ],
    "description": "Build a quiz brain class fed by trivia data.",
    "concepts": [
      "Classes",
      "Instances",
      "Encapsulation",
      "Question banks"
    ],
    "stretch": [
      "Introduce inheritance",
      "Add unit tests",
      "Add categories"
    ],
    "resources": [
      {
        "label": "OOP guide",
        "url": "https://realpython.com/python3-object-oriented-programming/"
      },
      {
        "label": "Open Trivia DB",
        "url": "https://opentdb.com/"
      }
    ]
  },
  {
    "day": 18,
    "title": "Hirst Painting",
    "stage": "intermediate",
    "focus": [
      "Turtle",
      "Visualisation"
    ],
    "description": "Paint dot art inspired by Damien Hirst using turtle.",
    "concepts": [
      "Coordinate system",
      "Movement",
      "Screen updates",
      "Charts"
    ],
    "stretch": [
      "Animate shapes",
      "Add collision detection",
      "Add interactivity"
    ],
    "resources": [
      {
        "label": "turtle docs",
        "url": "https://docs.python.org/3/library/turtle.html"
      },
      {
        "label": "Matplotlib",
        "url": "https://matplotlib.org/stable/index.html"
      }
    ]
  },
  {
    "day": 19,
    "title": "Turtle Race",
    "stage": "intermediate",
    "focus": [
      "Turtle",
      "Events"
    ],
    "description": "Race turtles across the screen with event-driven updates.",
    "concepts": [
      "Coordinate system",
      "Movement",
      "Screen updates",
      "Event listeners"
    ],
    "stretch": [
      "Animate shapes",
      "Add collision detection",
      "Add keyboard shortcuts"
    ],
    "resources": [
      {
        "label": "turtle docs",
        "url": "https://docs.python.org/3/library/turtle.html"
      },
      {
        "label": "Event-driven programming",
        "url": "https://realpython.com/event-driven-programming/"
      }
    ]
  },
  {
    "day": 20,
    "title": "Snake Game Pt.1",
    "stage": "intermediate",
    "focus": [
      "Turtle",
      "Games"
    ],
    "description": "Construct snake movement and collision detection.",
    "concepts": [
      "Coordinate system",
      "Movement",
      "Screen updates",
      "Game loops"
    ],
    "stretch": [
      "Animate shapes",
      "Add collision detection",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "turtle docs",
        "url": "https://docs.python.org/3/library/turtle.html"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 21,
    "title": "Snake Game Pt.2",
    "stage": "intermediate",
    "focus": [
      "File I/O",
      "Games"
    ],
    "description": "Persist high scores and polish the snake game.",
    "concepts": [
      "Reading files",
      "Writing files",
      "Paths",
      "Game loops"
    ],
    "stretch": [
      "Use pathlib",
      "Handle missing files",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "File handling",
        "url": "https://docs.python.org/3/tutorial/inputoutput.html"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 22,
    "title": "Pong",
    "stage": "intermediate",
    "focus": [
      "Turtle",
      "Games"
    ],
    "description": "Recreate Pong with paddles, ball physics, and scoring.",
    "concepts": [
      "Coordinate system",
      "Movement",
      "Screen updates",
      "Game loops"
    ],
    "stretch": [
      "Animate shapes",
      "Add collision detection",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "turtle docs",
        "url": "https://docs.python.org/3/library/turtle.html"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 23,
    "title": "Turtle Crossing",
    "stage": "intermediate",
    "focus": [
      "OOP",
      "Games"
    ],
    "description": "Guide a turtle across traffic using classes and collisions.",
    "concepts": [
      "Classes",
      "Instances",
      "Encapsulation",
      "Game loops"
    ],
    "stretch": [
      "Introduce inheritance",
      "Add unit tests",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "OOP guide",
        "url": "https://realpython.com/python3-object-oriented-programming/"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 24,
    "title": "Mail Merge",
    "stage": "intermediate",
    "focus": [
      "File I/O",
      "Automation"
    ],
    "description": "Personalise letters by combining templates and data.",
    "concepts": [
      "Reading files",
      "Writing files",
      "Paths",
      "Scheduling"
    ],
    "stretch": [
      "Use pathlib",
      "Handle missing files",
      "Add logging"
    ],
    "resources": [
      {
        "label": "File handling",
        "url": "https://docs.python.org/3/tutorial/inputoutput.html"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 25,
    "title": "U.S. States Game",
    "stage": "intermediate",
    "focus": [
      "pandas",
      "CSV"
    ],
    "description": "Guess U.S. states with CSV lookups and turtle labels.",
    "concepts": [
      "DataFrame basics",
      "Filtering",
      "Aggregation",
      "CSV parsing"
    ],
    "stretch": [
      "Create charts",
      "Export cleaned data",
      "Support export"
    ],
    "resources": [
      {
        "label": "pandas docs",
        "url": "https://pandas.pydata.org/docs/"
      },
      {
        "label": "CSV module",
        "url": "https://docs.python.org/3/library/csv.html"
      }
    ]
  },
  {
    "day": 26,
    "title": "NATO Alphabet",
    "stage": "intermediate",
    "focus": [
      "Comprehensions",
      "Dictionaries"
    ],
    "description": "Convert words into NATO phonetics with comprehensions.",
    "concepts": [
      "List comprehensions",
      "Dict comprehensions",
      "Iteration",
      "Key/value pairs"
    ],
    "stretch": [
      "Create set comprehension",
      "Refactor loops",
      "Persist to JSON"
    ],
    "resources": [
      {
        "label": "Comprehensions guide",
        "url": "https://realpython.com/list-comprehension-python/"
      },
      {
        "label": "Dictionary how-to",
        "url": "https://realpython.com/python-dicts/"
      }
    ]
  },
  {
    "day": 27,
    "title": "Mile ↔ Km Converter",
    "stage": "intermediate",
    "focus": [
      "Tkinter",
      "GUI"
    ],
    "description": "Convert between units via a simple Tkinter interface.",
    "concepts": [
      "Widgets",
      "Layouts",
      "Callbacks",
      "Layout"
    ],
    "stretch": [
      "Add styling",
      "Support keyboard shortcuts",
      "Add icons"
    ],
    "resources": [
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      },
      {
        "label": "GUI design tips",
        "url": "https://realpython.com/python-gui-tkinter/"
      }
    ]
  },
  {
    "day": 28,
    "title": "Pomodoro Timer",
    "stage": "intermediate",
    "focus": [
      "Tkinter",
      "Productivity"
    ],
    "description": "Create a productivity timer with work/break cycles.",
    "concepts": [
      "Widgets",
      "Layouts",
      "Callbacks",
      "Timers"
    ],
    "stretch": [
      "Add styling",
      "Support keyboard shortcuts",
      "Track sessions"
    ],
    "resources": [
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      },
      {
        "label": "Pomodoro method",
        "url": "https://todoist.com/productivity-methods/pomodoro-technique"
      }
    ]
  },
  {
    "day": 29,
    "title": "Password Manager GUI",
    "stage": "intermediate",
    "focus": [
      "Tkinter",
      "Security"
    ],
    "description": "Store generated passwords with a friendly GUI.",
    "concepts": [
      "Widgets",
      "Layouts",
      "Callbacks",
      "Password strength"
    ],
    "stretch": [
      "Add styling",
      "Support keyboard shortcuts",
      "Score password strength"
    ],
    "resources": [
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      },
      {
        "label": "OWASP basics",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ]
  },
  {
    "day": 30,
    "title": "Password Manager JSON",
    "stage": "intermediate",
    "focus": [
      "Persistence",
      "Tkinter"
    ],
    "description": "Persist credentials safely using JSON storage.",
    "concepts": [
      "File storage",
      "JSON",
      "Data retrieval",
      "Widgets"
    ],
    "stretch": [
      "Encrypt data",
      "Add backups",
      "Add styling"
    ],
    "resources": [
      {
        "label": "JSON guide",
        "url": "https://docs.python.org/3/library/json.html"
      },
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      }
    ]
  },
  {
    "day": 31,
    "title": "Flash Card App",
    "stage": "intermediate",
    "focus": [
      "Learning",
      "Tkinter"
    ],
    "description": "Flip flash cards and track vocabulary progress.",
    "concepts": [
      "Spaced repetition",
      "Flash cards",
      "Progress tracking",
      "Widgets"
    ],
    "stretch": [
      "Add custom decks",
      "Record accuracy",
      "Add styling"
    ],
    "resources": [
      {
        "label": "Learning science",
        "url": "https://www.learningscientists.org/"
      },
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      }
    ]
  },
  {
    "day": 32,
    "title": "Birthday Wisher",
    "stage": "automation",
    "focus": [
      "Automation",
      "Email"
    ],
    "description": "Send automated birthday greetings via SMTP.",
    "concepts": [
      "Scheduling",
      "APIs",
      "Workflows",
      "SMTP"
    ],
    "stretch": [
      "Add logging",
      "Deploy to cloud",
      "Send HTML"
    ],
    "resources": [
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      },
      {
        "label": "smtplib docs",
        "url": "https://docs.python.org/3/library/smtplib.html"
      }
    ]
  },
  {
    "day": 33,
    "title": "ISS Overhead Notifier",
    "stage": "automation",
    "focus": [
      "Automation",
      "APIs"
    ],
    "description": "Alert when the ISS flies above at night.",
    "concepts": [
      "Scheduling",
      "APIs",
      "Workflows",
      "HTTP requests"
    ],
    "stretch": [
      "Add logging",
      "Deploy to cloud",
      "Handle errors"
    ],
    "resources": [
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      },
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      }
    ]
  },
  {
    "day": 34,
    "title": "Quizzler API",
    "stage": "automation",
    "focus": [
      "APIs",
      "Tkinter"
    ],
    "description": "Feed your quiz GUI live questions from an API.",
    "concepts": [
      "HTTP requests",
      "JSON parsing",
      "Endpoints",
      "Widgets"
    ],
    "stretch": [
      "Handle errors",
      "Add retries",
      "Add styling"
    ],
    "resources": [
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      },
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      }
    ]
  },
  {
    "day": 35,
    "title": "Rain Alert SMS",
    "stage": "automation",
    "focus": [
      "Automation",
      "APIs"
    ],
    "description": "Warn yourself about rain using weather data and SMS.",
    "concepts": [
      "Scheduling",
      "APIs",
      "Workflows",
      "HTTP requests"
    ],
    "stretch": [
      "Add logging",
      "Deploy to cloud",
      "Handle errors"
    ],
    "resources": [
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      },
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      }
    ]
  },
  {
    "day": 36,
    "title": "Stock News SMS",
    "stage": "automation",
    "focus": [
      "Finance",
      "APIs"
    ],
    "description": "Monitor stocks and push relevant headlines by text.",
    "concepts": [
      "Market data",
      "Alerts",
      "Percent change",
      "HTTP requests"
    ],
    "stretch": [
      "Track multiple tickers",
      "Send summary reports",
      "Handle errors"
    ],
    "resources": [
      {
        "label": "Alpha Vantage",
        "url": "https://www.alphavantage.co/"
      },
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      }
    ]
  },
  {
    "day": 37,
    "title": "Habit Tracker",
    "stage": "automation",
    "focus": [
      "Automation",
      "Visualisation"
    ],
    "description": "Log daily habits to an external API chart.",
    "concepts": [
      "Scheduling",
      "APIs",
      "Workflows",
      "Charts"
    ],
    "stretch": [
      "Add logging",
      "Deploy to cloud",
      "Add interactivity"
    ],
    "resources": [
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      },
      {
        "label": "Matplotlib",
        "url": "https://matplotlib.org/stable/index.html"
      }
    ]
  },
  {
    "day": 38,
    "title": "Workout Tracker",
    "stage": "automation",
    "focus": [
      "Automation",
      "Google Sheets"
    ],
    "description": "Record workouts from natural language into Sheets.",
    "concepts": [
      "Scheduling",
      "APIs",
      "Workflows",
      "Sheet updates"
    ],
    "stretch": [
      "Add logging",
      "Deploy to cloud",
      "Visualise metrics"
    ],
    "resources": [
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      },
      {
        "label": "Sheety",
        "url": "https://sheety.co/docs"
      }
    ]
  },
  {
    "day": 39,
    "title": "Flight Deal Finder",
    "stage": "automation",
    "focus": [
      "Automation",
      "APIs"
    ],
    "description": "Monitor airfare deals and notify travellers.",
    "concepts": [
      "Scheduling",
      "APIs",
      "Workflows",
      "HTTP requests"
    ],
    "stretch": [
      "Add logging",
      "Deploy to cloud",
      "Handle errors"
    ],
    "resources": [
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      },
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      }
    ]
  },
  {
    "day": 40,
    "title": "Flight Club",
    "stage": "automation",
    "focus": [
      "Automation",
      "Email"
    ],
    "description": "Manage a flight club mailing list with price alerts.",
    "concepts": [
      "Scheduling",
      "APIs",
      "Workflows",
      "SMTP"
    ],
    "stretch": [
      "Add logging",
      "Deploy to cloud",
      "Send HTML"
    ],
    "resources": [
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      },
      {
        "label": "smtplib docs",
        "url": "https://docs.python.org/3/library/smtplib.html"
      }
    ]
  },
  {
    "day": 41,
    "title": "Personal Site",
    "stage": "automation",
    "focus": [
      "HTML/CSS",
      "Portfolio"
    ],
    "description": "Launch a simple personal web page.",
    "concepts": [
      "Semantic HTML",
      "Styling",
      "Layout",
      "Showcasing work"
    ],
    "stretch": [
      "Add responsive design",
      "Use CSS variables",
      "Add case studies"
    ],
    "resources": [
      {
        "label": "MDN HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/HTML"
      },
      {
        "label": "Portfolio tips",
        "url": "https://www.freecodecamp.org/news/portfolio-advice/"
      }
    ]
  },
  {
    "day": 42,
    "title": "HTML Forms & Tables",
    "stage": "automation",
    "focus": [
      "HTML/CSS",
      "Web"
    ],
    "description": "Practise building accessible forms and tables.",
    "concepts": [
      "Semantic HTML",
      "Styling",
      "Layout",
      "Structure"
    ],
    "stretch": [
      "Add responsive design",
      "Use CSS variables",
      "Deploy site"
    ],
    "resources": [
      {
        "label": "MDN HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/HTML"
      },
      {
        "label": "MDN Web",
        "url": "https://developer.mozilla.org/en-US/docs/Learn"
      }
    ]
  },
  {
    "day": 43,
    "title": "CSS Foundations",
    "stage": "automation",
    "focus": [
      "HTML/CSS",
      "Design"
    ],
    "description": "Strengthen CSS fundamentals and selectors.",
    "concepts": [
      "Semantic HTML",
      "Styling",
      "Layout",
      "Colour"
    ],
    "stretch": [
      "Add responsive design",
      "Use CSS variables",
      "Create style guide"
    ],
    "resources": [
      {
        "label": "MDN HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/HTML"
      },
      {
        "label": "Refactoring UI",
        "url": "https://refactoringui.com/book/"
      }
    ]
  },
  {
    "day": 44,
    "title": "CSS Layouts",
    "stage": "automation",
    "focus": [
      "HTML/CSS",
      "Design"
    ],
    "description": "Experiment with flexbox and grid layouts.",
    "concepts": [
      "Semantic HTML",
      "Styling",
      "Layout",
      "Colour"
    ],
    "stretch": [
      "Add responsive design",
      "Use CSS variables",
      "Create style guide"
    ],
    "resources": [
      {
        "label": "MDN HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/HTML"
      },
      {
        "label": "Refactoring UI",
        "url": "https://refactoringui.com/book/"
      }
    ]
  },
  {
    "day": 45,
    "title": "Top 100 Movies Scraper",
    "stage": "automation",
    "focus": [
      "BeautifulSoup",
      "Scraping"
    ],
    "description": "Scrape a movie ranking site into a list.",
    "concepts": [
      "HTML parsing",
      "Selectors",
      "Data extraction",
      "HTTP requests"
    ],
    "stretch": [
      "Handle pagination",
      "Export to CSV",
      "Respect robots.txt"
    ],
    "resources": [
      {
        "label": "BeautifulSoup docs",
        "url": "https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
      },
      {
        "label": "Scraping guide",
        "url": "https://docs.python-guide.org/scenarios/scrape/"
      }
    ]
  },
  {
    "day": 46,
    "title": "Spotify Time Machine",
    "stage": "fullstack",
    "focus": [
      "APIs",
      "Automation"
    ],
    "description": "Build nostalgic Spotify playlists from chart data.",
    "concepts": [
      "HTTP requests",
      "JSON parsing",
      "Endpoints",
      "Scheduling"
    ],
    "stretch": [
      "Handle errors",
      "Add retries",
      "Add logging"
    ],
    "resources": [
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 47,
    "title": "Amazon Price Tracker",
    "stage": "fullstack",
    "focus": [
      "Scraping",
      "Automation"
    ],
    "description": "Track product prices and send alerts.",
    "concepts": [
      "HTTP requests",
      "Parsing",
      "Throttling",
      "Scheduling"
    ],
    "stretch": [
      "Respect robots.txt",
      "Add caching",
      "Add logging"
    ],
    "resources": [
      {
        "label": "Scraping guide",
        "url": "https://docs.python-guide.org/scenarios/scrape/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 48,
    "title": "Selenium Cookie Clicker",
    "stage": "fullstack",
    "focus": [
      "Selenium",
      "Automation"
    ],
    "description": "Automate the cookie-clicker browser game.",
    "concepts": [
      "WebDriver",
      "Locators",
      "Automation",
      "Scheduling"
    ],
    "stretch": [
      "Use explicit waits",
      "Handle errors",
      "Add logging"
    ],
    "resources": [
      {
        "label": "Selenium docs",
        "url": "https://www.selenium.dev/documentation/webdriver/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 49,
    "title": "LinkedIn Auto Apply Bot",
    "stage": "fullstack",
    "focus": [
      "Selenium",
      "Automation"
    ],
    "description": "Autofill job applications with Selenium.",
    "concepts": [
      "WebDriver",
      "Locators",
      "Automation",
      "Scheduling"
    ],
    "stretch": [
      "Use explicit waits",
      "Handle errors",
      "Add logging"
    ],
    "resources": [
      {
        "label": "Selenium docs",
        "url": "https://www.selenium.dev/documentation/webdriver/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 50,
    "title": "Tinder Auto-Swiper",
    "stage": "fullstack",
    "focus": [
      "Selenium",
      "Automation"
    ],
    "description": "Automate swipes while respecting rate limits.",
    "concepts": [
      "WebDriver",
      "Locators",
      "Automation",
      "Scheduling"
    ],
    "stretch": [
      "Use explicit waits",
      "Handle errors",
      "Add logging"
    ],
    "resources": [
      {
        "label": "Selenium docs",
        "url": "https://www.selenium.dev/documentation/webdriver/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 51,
    "title": "Internet-Speed Twitter Bot",
    "stage": "fullstack",
    "focus": [
      "Selenium",
      "APIs"
    ],
    "description": "Tweet complaints when speeds dip below promises.",
    "concepts": [
      "WebDriver",
      "Locators",
      "Automation",
      "HTTP requests"
    ],
    "stretch": [
      "Use explicit waits",
      "Handle errors",
      "Add retries"
    ],
    "resources": [
      {
        "label": "Selenium docs",
        "url": "https://www.selenium.dev/documentation/webdriver/"
      },
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      }
    ]
  },
  {
    "day": 52,
    "title": "Instagram Follower Bot",
    "stage": "fullstack",
    "focus": [
      "Selenium",
      "Automation"
    ],
    "description": "Grow accounts automatically with safe throttling.",
    "concepts": [
      "WebDriver",
      "Locators",
      "Automation",
      "Scheduling"
    ],
    "stretch": [
      "Use explicit waits",
      "Handle errors",
      "Add logging"
    ],
    "resources": [
      {
        "label": "Selenium docs",
        "url": "https://www.selenium.dev/documentation/webdriver/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 53,
    "title": "Data Entry Automation",
    "stage": "fullstack",
    "focus": [
      "Selenium",
      "Automation"
    ],
    "description": "Fill forms from scraped real estate data.",
    "concepts": [
      "WebDriver",
      "Locators",
      "Automation",
      "Scheduling"
    ],
    "stretch": [
      "Use explicit waits",
      "Handle errors",
      "Add logging"
    ],
    "resources": [
      {
        "label": "Selenium docs",
        "url": "https://www.selenium.dev/documentation/webdriver/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 54,
    "title": "Flask Quickstart",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Web"
    ],
    "description": "Spin up routes and templates in Flask.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Structure"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Deploy site"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "MDN Web",
        "url": "https://developer.mozilla.org/en-US/docs/Learn"
      }
    ]
  },
  {
    "day": 55,
    "title": "Flask Higher/Lower",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Games"
    ],
    "description": "Port the higher/lower game to the web.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Game loops"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 56,
    "title": "Name Card Site",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Portfolio"
    ],
    "description": "Serve a personal name card with static assets.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Showcasing work"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add case studies"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Portfolio tips",
        "url": "https://www.freecodecamp.org/news/portfolio-advice/"
      }
    ]
  },
  {
    "day": 57,
    "title": "Blog Capstone Pt.1",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Blog"
    ],
    "description": "Build a dynamic blog with templating.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Posts"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add tags"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Blog tutorial",
        "url": "https://flask.palletsprojects.com/en/2.3.x/tutorial/blog/"
      }
    ]
  },
  {
    "day": 58,
    "title": "TinDog",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Bootstrap"
    ],
    "description": "Create a playful marketing site with Bootstrap.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Components"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Customise theme"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Bootstrap docs",
        "url": "https://getbootstrap.com/docs/5.3/"
      }
    ]
  },
  {
    "day": 59,
    "title": "Blog Capstone Pt.2",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Design"
    ],
    "description": "Polish blog styling and add contact forms.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Colour"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Create style guide"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Refactoring UI",
        "url": "https://refactoringui.com/book/"
      }
    ]
  },
  {
    "day": 60,
    "title": "Flask POST + Email",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Email"
    ],
    "description": "Handle POST requests and send emails from forms.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "SMTP"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Send HTML"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "smtplib docs",
        "url": "https://docs.python.org/3/library/smtplib.html"
      }
    ]
  },
  {
    "day": 61,
    "title": "Flask WTForms",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Forms"
    ],
    "description": "Validate data using Flask-WTF.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Validation"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add file uploads"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "WTForms",
        "url": "https://wtforms.readthedocs.io/"
      }
    ]
  },
  {
    "day": 62,
    "title": "Coffee & Wifi",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "CSV"
    ],
    "description": "Review cafés and wifi speeds with CSV storage.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "CSV parsing"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Support export"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "CSV module",
        "url": "https://docs.python.org/3/library/csv.html"
      }
    ]
  },
  {
    "day": 63,
    "title": "Virtual Bookshelf",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Databases"
    ],
    "description": "Manage books using SQLAlchemy CRUD.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Models"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add migrations"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "SQLAlchemy",
        "url": "https://docs.sqlalchemy.org/"
      }
    ]
  },
  {
    "day": 64,
    "title": "Top 10 Movies",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Databases"
    ],
    "description": "Rank favourite films with API lookups.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Models"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add migrations"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "SQLAlchemy",
        "url": "https://docs.sqlalchemy.org/"
      }
    ]
  },
  {
    "day": 65,
    "title": "Web Design School",
    "stage": "fullstack",
    "focus": [
      "Design",
      "Portfolio"
    ],
    "description": "Refine UX polish across your projects.",
    "concepts": [
      "Colour",
      "Typography",
      "Spacing",
      "Showcasing work"
    ],
    "stretch": [
      "Create style guide",
      "Audit accessibility",
      "Add case studies"
    ],
    "resources": [
      {
        "label": "Refactoring UI",
        "url": "https://refactoringui.com/book/"
      },
      {
        "label": "Portfolio tips",
        "url": "https://www.freecodecamp.org/news/portfolio-advice/"
      }
    ]
  },
  {
    "day": 66,
    "title": "Build a REST API",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "REST APIs"
    ],
    "description": "Expose CRUD endpoints with documentation.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "HTTP verbs"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add docs"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "REST design",
        "url": "https://restfulapi.net/"
      }
    ]
  },
  {
    "day": 67,
    "title": "Blog REST API",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "REST APIs"
    ],
    "description": "Add REST endpoints to your blog.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "HTTP verbs"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add docs"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "REST design",
        "url": "https://restfulapi.net/"
      }
    ]
  },
  {
    "day": 68,
    "title": "Auth with Flask",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Auth"
    ],
    "description": "Secure routes with hashing and sessions.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Hashing"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add roles"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Flask-Login",
        "url": "https://flask-login.readthedocs.io/"
      }
    ]
  },
  {
    "day": 69,
    "title": "Blog Users & Roles",
    "stage": "fullstack",
    "focus": [
      "Flask",
      "Auth"
    ],
    "description": "Add role-based permissions and comments.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Hashing"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add roles"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Flask-Login",
        "url": "https://flask-login.readthedocs.io/"
      }
    ]
  },
  {
    "day": 70,
    "title": "Deploy Flask App",
    "stage": "fullstack",
    "focus": [
      "Deploy",
      "DevOps"
    ],
    "description": "Ship your Flask app to the web.",
    "concepts": [
      "Hosting",
      "Procfile",
      "Environment variables",
      "Automation"
    ],
    "stretch": [
      "Set up CI",
      "Add monitoring",
      "Add Docker"
    ],
    "resources": [
      {
        "label": "Render guide",
        "url": "https://render.com/docs/deploy-flask"
      },
      {
        "label": "CI/CD primer",
        "url": "https://circleci.com/blog/what-is-ci-cd/"
      }
    ]
  },
  {
    "day": 71,
    "title": "College Majors vs Salary",
    "stage": "datascience",
    "focus": [
      "pandas",
      "Visualisation"
    ],
    "description": "Analyse major vs salary relationships.",
    "concepts": [
      "DataFrame basics",
      "Filtering",
      "Aggregation",
      "Charts"
    ],
    "stretch": [
      "Create charts",
      "Export cleaned data",
      "Add interactivity"
    ],
    "resources": [
      {
        "label": "pandas docs",
        "url": "https://pandas.pydata.org/docs/"
      },
      {
        "label": "Matplotlib",
        "url": "https://matplotlib.org/stable/index.html"
      }
    ]
  },
  {
    "day": 72,
    "title": "Matplotlib Languages",
    "stage": "datascience",
    "focus": [
      "Visualisation",
      "Statistics"
    ],
    "description": "Chart language popularity trends.",
    "concepts": [
      "Charts",
      "Colour",
      "Storytelling",
      "Distributions"
    ],
    "stretch": [
      "Add interactivity",
      "Compare categories",
      "Calculate confidence intervals"
    ],
    "resources": [
      {
        "label": "Matplotlib",
        "url": "https://matplotlib.org/stable/index.html"
      },
      {
        "label": "Statistics primer",
        "url": "https://seeing-theory.brown.edu/"
      }
    ]
  },
  {
    "day": 73,
    "title": "LEGO Dataset",
    "stage": "datascience",
    "focus": [
      "pandas",
      "EDA"
    ],
    "description": "Explore the LEGO parts database.",
    "concepts": [
      "DataFrame basics",
      "Filtering",
      "Aggregation",
      "Exploratory analysis",
      "Data profiling",
      "Visualization planning"
    ],
    "stretch": [
      "Create charts",
      "Export cleaned data",
      "Compare metrics across segments",
      "Summarise key findings in a brief report"
    ],
    "resources": [
      {
        "label": "pandas docs",
        "url": "https://pandas.pydata.org/docs/"
      },
      {
        "label": "EDA checklist",
        "url": "https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15"
      }
    ]
  },
  {
    "day": 74,
    "title": "Google Trends",
    "stage": "datascience",
    "focus": [
      "Time Series",
      "pandas"
    ],
    "description": "Resample trends data across years.",
    "concepts": [
      "Resampling",
      "Rolling averages",
      "Trends",
      "DataFrame basics"
    ],
    "stretch": [
      "Forecast future",
      "Compare intervals",
      "Create charts"
    ],
    "resources": [
      {
        "label": "Time series analysis",
        "url": "https://pandas.pydata.org/docs/user_guide/timeseries.html"
      },
      {
        "label": "pandas docs",
        "url": "https://pandas.pydata.org/docs/"
      }
    ]
  },
  {
    "day": 75,
    "title": "Plotly Android Apps",
    "stage": "datascience",
    "focus": [
      "Plotly",
      "Data Viz"
    ],
    "description": "Build interactive app store dashboards.",
    "concepts": [
      "Interactive charts",
      "Dashboards",
      "Styling",
      "Storytelling"
    ],
    "stretch": [
      "Add filters",
      "Embed visuals",
      "Add annotations"
    ],
    "resources": [
      {
        "label": "Plotly docs",
        "url": "https://plotly.com/python/"
      },
      {
        "label": "Data Viz Handbook",
        "url": "https://datavizcatalogue.com/"
      }
    ]
  },
  {
    "day": 76,
    "title": "NumPy & n-D Arrays",
    "stage": "datascience",
    "focus": [
      "NumPy",
      "Arrays"
    ],
    "description": "Practise fast array maths with NumPy.",
    "concepts": [
      "ndarray",
      "Broadcasting",
      "Vectorisation",
      "Indexing"
    ],
    "stretch": [
      "Benchmark operations",
      "Use slicing",
      "Reshape data"
    ],
    "resources": [
      {
        "label": "NumPy quickstart",
        "url": "https://numpy.org/doc/stable/user/quickstart.html"
      },
      {
        "label": "Array operations",
        "url": "https://numpy.org/doc/stable/reference/routines.array-creation.html"
      }
    ]
  },
  {
    "day": 77,
    "title": "Linear Regression + Seaborn",
    "stage": "datascience",
    "focus": [
      "Seaborn",
      "Regression"
    ],
    "description": "Model trends with Seaborn regressions.",
    "concepts": [
      "Statistical plots",
      "Themes",
      "Regression",
      "Linear models"
    ],
    "stretch": [
      "Custom palettes",
      "Facet charts",
      "Add regularisation"
    ],
    "resources": [
      {
        "label": "Seaborn tutorials",
        "url": "https://seaborn.pydata.org/tutorial.html"
      },
      {
        "label": "Regression guide",
        "url": "https://realpython.com/linear-regression-in-python/"
      }
    ]
  },
  {
    "day": 78,
    "title": "Nobel Prize Analysis",
    "stage": "datascience",
    "focus": [
      "Data Viz",
      "Statistics"
    ],
    "description": "Tell stories with Nobel Prize data.",
    "concepts": [
      "Storytelling",
      "Design",
      "Audience",
      "Distributions"
    ],
    "stretch": [
      "Add annotations",
      "Compare categories",
      "Calculate confidence intervals"
    ],
    "resources": [
      {
        "label": "Data Viz Handbook",
        "url": "https://datavizcatalogue.com/"
      },
      {
        "label": "Statistics primer",
        "url": "https://seeing-theory.brown.edu/"
      }
    ]
  },
  {
    "day": 79,
    "title": "Handwashing Discovery",
    "stage": "datascience",
    "focus": [
      "Statistics",
      "Hypothesis Testing"
    ],
    "description": "Investigate Semmelweis' findings.",
    "concepts": [
      "Distributions",
      "Inference",
      "Significance",
      "Null hypothesis"
    ],
    "stretch": [
      "Calculate confidence intervals",
      "Explain findings",
      "Run additional tests"
    ],
    "resources": [
      {
        "label": "Statistics primer",
        "url": "https://seeing-theory.brown.edu/"
      },
      {
        "label": "Hypothesis testing",
        "url": "https://realpython.com/python-hypothesis-testing/"
      }
    ]
  },
  {
    "day": 80,
    "title": "Predict House Prices",
    "stage": "datascience",
    "focus": [
      "Machine Learning",
      "Regression"
    ],
    "description": "Predict housing prices with ML.",
    "concepts": [
      "Modeling",
      "Feature engineering",
      "Evaluation",
      "Linear models"
    ],
    "stretch": [
      "Tune hyperparameters",
      "Compare algorithms",
      "Add regularisation"
    ],
    "resources": [
      {
        "label": "scikit-learn",
        "url": "https://scikit-learn.org/stable/"
      },
      {
        "label": "Regression guide",
        "url": "https://realpython.com/linear-regression-in-python/"
      }
    ]
  },
  {
    "day": 81,
    "title": "Text → Morse Code",
    "stage": "portfolio",
    "focus": [
      "CLI",
      "Strings"
    ],
    "description": "Translate text to Morse code programmatically.",
    "concepts": [
      "User prompts",
      "Program flow",
      "Error handling",
      "Concatenation"
    ],
    "stretch": [
      "Add command history",
      "Style output",
      "Add uppercase/lowercase options"
    ],
    "resources": [
      {
        "label": "argparse",
        "url": "https://docs.python.org/3/library/argparse.html"
      },
      {
        "label": "String methods",
        "url": "https://docs.python.org/3/library/stdtypes.html#textseq"
      }
    ]
  },
  {
    "day": 82,
    "title": "Portfolio Website",
    "stage": "portfolio",
    "focus": [
      "HTML/CSS",
      "Portfolio"
    ],
    "description": "Showcase your projects with flair.",
    "concepts": [
      "Semantic HTML",
      "Styling",
      "Layout",
      "Showcasing work"
    ],
    "stretch": [
      "Add responsive design",
      "Use CSS variables",
      "Add case studies"
    ],
    "resources": [
      {
        "label": "MDN HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/HTML"
      },
      {
        "label": "Portfolio tips",
        "url": "https://www.freecodecamp.org/news/portfolio-advice/"
      }
    ]
  },
  {
    "day": 83,
    "title": "Tic-Tac-Toe",
    "stage": "portfolio",
    "focus": [
      "Games",
      "Algorithms"
    ],
    "description": "Implement Tic-Tac-Toe with simple AI options.",
    "concepts": [
      "Game loops",
      "State tracking",
      "User feedback",
      "Decision trees"
    ],
    "stretch": [
      "Add scoring",
      "Increase difficulty",
      "Implement minimax"
    ],
    "resources": [
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      },
      {
        "label": "Algorithm basics",
        "url": "https://visualgo.net/en"
      }
    ]
  },
  {
    "day": 84,
    "title": "Image Watermarking",
    "stage": "portfolio",
    "focus": [
      "Pillow",
      "Tkinter"
    ],
    "description": "Apply watermarks via a GUI.",
    "concepts": [
      "Image processing",
      "Layers",
      "Saving files",
      "Widgets"
    ],
    "stretch": [
      "Support batch edits",
      "Allow custom fonts",
      "Add styling"
    ],
    "resources": [
      {
        "label": "Pillow docs",
        "url": "https://pillow.readthedocs.io/en/stable/"
      },
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      }
    ]
  },
  {
    "day": 85,
    "title": "Speed Typing Test",
    "stage": "portfolio",
    "focus": [
      "Tkinter",
      "Games"
    ],
    "description": "Measure typing speed with timers.",
    "concepts": [
      "Widgets",
      "Layouts",
      "Callbacks",
      "Game loops"
    ],
    "stretch": [
      "Add styling",
      "Support keyboard shortcuts",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 86,
    "title": "Breakout Game",
    "stage": "portfolio",
    "focus": [
      "Games",
      "Tkinter"
    ],
    "description": "Recreate the classic Breakout arcade.",
    "concepts": [
      "Game loops",
      "State tracking",
      "User feedback",
      "Widgets"
    ],
    "stretch": [
      "Add scoring",
      "Increase difficulty",
      "Add styling"
    ],
    "resources": [
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      },
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      }
    ]
  },
  {
    "day": 87,
    "title": "Cafés & Wifi API",
    "stage": "portfolio",
    "focus": [
      "Flask",
      "REST APIs"
    ],
    "description": "Offer café data via a RESTful API.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "HTTP verbs"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add docs"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "REST design",
        "url": "https://restfulapi.net/"
      }
    ]
  },
  {
    "day": 88,
    "title": "To-Do App",
    "stage": "portfolio",
    "focus": [
      "Flask",
      "Auth"
    ],
    "description": "Build a full-stack to-do manager.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Hashing"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add roles"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Flask-Login",
        "url": "https://flask-login.readthedocs.io/"
      }
    ]
  },
  {
    "day": 89,
    "title": "Disappearing Text App",
    "stage": "portfolio",
    "focus": [
      "Tkinter",
      "Productivity"
    ],
    "description": "Keep typing or watch text vanish.",
    "concepts": [
      "Widgets",
      "Layouts",
      "Callbacks",
      "Timers"
    ],
    "stretch": [
      "Add styling",
      "Support keyboard shortcuts",
      "Track sessions"
    ],
    "resources": [
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      },
      {
        "label": "Pomodoro method",
        "url": "https://todoist.com/productivity-methods/pomodoro-technique"
      }
    ]
  },
  {
    "day": 90,
    "title": "PDF → Audiobook",
    "stage": "portfolio",
    "focus": [
      "Text-to-Speech",
      "Automation"
    ],
    "description": "Turn PDF books into spoken audio.",
    "concepts": [
      "Audio output",
      "Voice engines",
      "File export",
      "Scheduling"
    ],
    "stretch": [
      "Support multiple voices",
      "Add GUI",
      "Add logging"
    ],
    "resources": [
      {
        "label": "pyttsx3",
        "url": "https://pyttsx3.readthedocs.io/en/latest/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 91,
    "title": "Image Colour Palette",
    "stage": "portfolio",
    "focus": [
      "Pillow",
      "Visualisation"
    ],
    "description": "Extract colour palettes from images.",
    "concepts": [
      "Image processing",
      "Layers",
      "Saving files",
      "Charts"
    ],
    "stretch": [
      "Support batch edits",
      "Allow custom fonts",
      "Add interactivity"
    ],
    "resources": [
      {
        "label": "Pillow docs",
        "url": "https://pillow.readthedocs.io/en/stable/"
      },
      {
        "label": "Matplotlib",
        "url": "https://matplotlib.org/stable/index.html"
      }
    ]
  },
  {
    "day": 92,
    "title": "Custom Web Scraper",
    "stage": "portfolio",
    "focus": [
      "Scraping",
      "Automation"
    ],
    "description": "Scrape any site with pagination handling.",
    "concepts": [
      "HTTP requests",
      "Parsing",
      "Throttling",
      "Scheduling"
    ],
    "stretch": [
      "Respect robots.txt",
      "Add caching",
      "Add logging"
    ],
    "resources": [
      {
        "label": "Scraping guide",
        "url": "https://docs.python-guide.org/scenarios/scrape/"
      },
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      }
    ]
  },
  {
    "day": 93,
    "title": "Automate Chrome Dino",
    "stage": "portfolio",
    "focus": [
      "Selenium",
      "Games"
    ],
    "description": "Beat the Chrome Dino using automation.",
    "concepts": [
      "WebDriver",
      "Locators",
      "Automation",
      "Game loops"
    ],
    "stretch": [
      "Use explicit waits",
      "Handle errors",
      "Add scoring"
    ],
    "resources": [
      {
        "label": "Selenium docs",
        "url": "https://www.selenium.dev/documentation/webdriver/"
      },
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      }
    ]
  },
  {
    "day": 94,
    "title": "Space Invaders",
    "stage": "portfolio",
    "focus": [
      "Games",
      "Tkinter"
    ],
    "description": "Create a retro Space Invaders clone.",
    "concepts": [
      "Game loops",
      "State tracking",
      "User feedback",
      "Widgets"
    ],
    "stretch": [
      "Add scoring",
      "Increase difficulty",
      "Add styling"
    ],
    "resources": [
      {
        "label": "Game design basics",
        "url": "https://realpython.com/python-game-programming/"
      },
      {
        "label": "Tkinter reference",
        "url": "https://docs.python.org/3/library/tk.html"
      }
    ]
  },
  {
    "day": 95,
    "title": "Live Data Website",
    "stage": "portfolio",
    "focus": [
      "APIs",
      "Web"
    ],
    "description": "Display live data on a custom site.",
    "concepts": [
      "HTTP requests",
      "JSON parsing",
      "Endpoints",
      "Structure"
    ],
    "stretch": [
      "Handle errors",
      "Add retries",
      "Deploy site"
    ],
    "resources": [
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      },
      {
        "label": "MDN Web",
        "url": "https://developer.mozilla.org/en-US/docs/Learn"
      }
    ]
  },
  {
    "day": 96,
    "title": "eCommerce Demo",
    "stage": "portfolio",
    "focus": [
      "Flask",
      "Payments"
    ],
    "description": "Prototype a checkout flow with Stripe.",
    "concepts": [
      "Routing",
      "Templates",
      "Context",
      "Checkout flow"
    ],
    "stretch": [
      "Add blueprint",
      "Implement tests",
      "Add coupons"
    ],
    "resources": [
      {
        "label": "Flask docs",
        "url": "https://flask.palletsprojects.com/"
      },
      {
        "label": "Stripe docs",
        "url": "https://stripe.com/docs/api"
      }
    ]
  },
  {
    "day": 97,
    "title": "WhatsApp Automation",
    "stage": "portfolio",
    "focus": [
      "Automation",
      "APIs"
    ],
    "description": "Schedule WhatsApp messages programmatically.",
    "concepts": [
      "Scheduling",
      "APIs",
      "Workflows",
      "HTTP requests"
    ],
    "stretch": [
      "Add logging",
      "Deploy to cloud",
      "Handle errors"
    ],
    "resources": [
      {
        "label": "Automate the Boring Stuff",
        "url": "https://automatetheboringstuff.com/"
      },
      {
        "label": "requests docs",
        "url": "https://requests.readthedocs.io/"
      }
    ]
  },
  {
    "day": 98,
    "title": "Space Race Visualisation",
    "stage": "portfolio",
    "focus": [
      "Plotly",
      "Data Viz"
    ],
    "description": "Chart the space race timeline interactively.",
    "concepts": [
      "Interactive charts",
      "Dashboards",
      "Styling",
      "Storytelling"
    ],
    "stretch": [
      "Add filters",
      "Embed visuals",
      "Add annotations"
    ],
    "resources": [
      {
        "label": "Plotly docs",
        "url": "https://plotly.com/python/"
      },
      {
        "label": "Data Viz Handbook",
        "url": "https://datavizcatalogue.com/"
      }
    ]
  },
  {
    "day": 99,
    "title": "Police Violence Analysis",
    "stage": "portfolio",
    "focus": [
      "Data Ethics",
      "pandas"
    ],
    "description": "Analyse police-involved incidents responsibly.",
    "concepts": [
      "Bias",
      "Transparency",
      "Context",
      "DataFrame basics"
    ],
    "stretch": [
      "Add disclaimers",
      "Discuss limitations",
      "Create charts"
    ],
    "resources": [
      {
        "label": "Data ethics",
        "url": "https://datasociety.net/library/data-ethics/"
      },
      {
        "label": "pandas docs",
        "url": "https://pandas.pydata.org/docs/"
      }
    ]
  },
  {
    "day": 100,
    "title": "Predict Earnings",
    "stage": "portfolio",
    "focus": [
      "Machine Learning",
      "Regression"
    ],
    "description": "Model earnings with multivariable regression.",
    "concepts": [
      "Modeling",
      "Feature engineering",
      "Evaluation",
      "Linear models"
    ],
    "stretch": [
      "Tune hyperparameters",
      "Compare algorithms",
      "Add regularisation"
    ],
    "resources": [
      {
        "label": "scikit-learn",
        "url": "https://scikit-learn.org/stable/"
      },
      {
        "label": "Regression guide",
        "url": "https://realpython.com/linear-regression-in-python/"
      }
    ]
  }
];

export const focusLabels = {
  "Python Basics": "Python Basics",
  "Strings": "Strings & Text",
  "Math": "Math & Numbers",
  "Conditionals": "Control Flow",
  "Games": "Game Dev",
  "Randomness": "Randomness",
  "Security": "Security",
  "Functions": "Functions",
  "Problem Solving": "Problem Solving",
  "Loops": "Loops",
  "Dictionaries": "Dictionaries",
  "CLI": "Command Line",
  "Logic": "Logic",
  "Scope": "Scope & Constants",
  "Debugging": "Debugging",
  "Mindset": "Mindset",
  "APIs": "APIs",
  "Procedural": "Procedural Design",
  "OOP": "Object-Oriented",
  "Trivia": "Trivia",
  "Turtle": "Turtle Graphics",
  "Events": "Events",
  "File I/O": "File I/O",
  "pandas": "pandas",
  "CSV": "CSV & Data",
  "Comprehensions": "Comprehensions",
  "Tkinter": "Tkinter GUI",
  "GUI": "GUI",
  "Productivity": "Productivity",
  "Persistence": "Persistence",
  "Learning": "Learning",
  "Automation": "Automation",
  "Email": "Email",
  "Google Sheets": "Google Sheets",
  "Finance": "Finance",
  "Visualisation": "Visualisation",
  "HTML/CSS": "HTML & CSS",
  "Web": "Web",
  "Design": "Design",
  "BeautifulSoup": "BeautifulSoup",
  "Scraping": "Scraping",
  "Selenium": "Selenium",
  "Flask": "Flask",
  "Blog": "Blog",
  "Bootstrap": "Bootstrap",
  "Design Systems": "Design Systems",
  "Deploy": "Deployment",
  "DevOps": "DevOps",
  "Databases": "Databases",
  "REST APIs": "REST APIs",
  "Auth": "Authentication",
  "Forms": "Forms",
  "Portfolio": "Portfolio",
  "Pillow": "Pillow",
  "Text-to-Speech": "Text-to-Speech",
  "Plotly": "Plotly",
  "Machine Learning": "Machine Learning",
  "Regression": "Regression",
  "Data Viz": "Data Visualisation",
  "Statistics": "Statistics",
  "Hypothesis Testing": "Hypothesis Testing",
  "NumPy": "NumPy",
  "Arrays": "Arrays",
  "Seaborn": "Seaborn",
  "Time Series": "Time Series",
  "Data Ethics": "Data Ethics",
  "Algorithms": "Algorithms",
  "Payments": "Payments",
  "EDA": "Exploratory Data Analysis"
};
