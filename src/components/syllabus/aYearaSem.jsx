import React from "react";

const subjects = [
  {
    semester: 1, // Change this to the desired semester number
    subj: [
      {
        subject: "Engineering Mathematics-I",
        subSubjects: [
          {
            subSubject: "Engineering Mathematics-I",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Matrices",
                  "Engineering Mathematics-I",
                  "Eigen values and Eigen vectors",
                  "Hermitian Matrix",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Differential Calculus – I",
                  "Successive Differentiation (nth order derivatives",
                  "Euler’s Theorem for homogeneous functions",
                  "Leibnitz theorem",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Differential Calculus-II",
                  "Maxima and Minima of functions of several variables",
                  "Lagrange’s method of multipliers",
                  "Expansion of functions by Taylor’s theorem",
                  "Expansion of Maclaurin’s theorem",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Multiple integration",
                  "Double integral",
                  "Triple integral",
                  "Change of order of integration",
                  "Change of variables",
                  "Beta function and their properties",
                  "Gamma function and their properties",
                  "Dirichlet’s integral and its applications",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Vector Calculus",
                  "Vector differentiation",
                  "Curl and Divergence and their Physical interpretation",
                  "Vector Integration",
                  "Gauss’s Divergence theorem",
                  "Green’s theorem and Stoke’s theorem",
                ],
              },
            ],
          },
        ],
      },
      {
        subject: "Quantum Mechanics and Electromagnetic Field Theory",
        subSubjects: [
          {
            subSubject: "Engineering Physics",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Quantum Mechanics",
                  "Planck’s theory of black body radiation (qualitative)",
                  "Compton effect",
                  "de-Broglie concept of matter waves",
                  "Physical interpretation of wave function",
                  "Phase velocity and group velocity",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Electromagnetic Field Theory",
                  "Basic laws of electricity and magnetism",
                  "Maxwell equations in integral and differential form",
                  "Poynting vector and Poynting theorem",
                  "Relation between electric and magnetic fields of an electromagnetic wave",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Wave Optics",
                  "Coherent sources",
                  "Rayleigh’s criterion of resolution",
                  "Introduction to diffraction",
                  "Fraunhofer diffraction at single slit and double slit",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Fiber Optics & Laser",
                  "Principle and construction of optical fiber",
                  "Spontaneous and stimulated emission of radiation",
                  "Principles of laser action",
                  "Laser: Absorption of radiation",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Superconductors and Nano-Materials",
                  "Temperature dependence of resistivity in superconducting materials",
                  "Introduction and properties of nano materials",
                  "Fabrication of nano materials - Top Down approach (CVD) and Bottom Up approach (Sol Gel)",
                  "Properties and Application of nano materials",
                  "Meissner effect",
                ],
              },
            ],
          },
          {
            subSubject: "Engineering Chemistry",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Atomic and Molecular Structure",
                  "Molecular orbital’s of diatomic molecule",
                  "Bond Order",
                  "Types and Applications of liquid crystals",
                  "Structure and applications of Nanomaterials",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Spectroscopic Techniques and Applications",
                  "Elementary idea and simple applications of UV, IR and NMR",
                  "Stereochemistry: Optical isomerism in compounds without chiral carbon",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Electrochemistry and Batteries",
                  "Introduction to corrosion",
                  "Corrosion issues in specific industries",
                  "Chemistry of Engineering Materials",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Water Technology",
                  "Sources and impurities of water",
                  "Determination of Hardness and alkalinity",
                  "Fuels and Combustion",
                  "Determination of calorific value by Bomb Calorimeter",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Materials Chemistry",
                  "Polymers",
                  "Thermosetting and Thermoplastic Polymers",
                  "General methods of preparation and applications of Organometallic compounds",
                  "Conducting and Biodegradable polymers",
                  "Polymer Blends and Composites",
                ],
              },
            ],
          },
        ],
      },
      {
        subject:
          "Programming and Problem Solving / Fundamentals of Mechanical Engineering",
        subSubjects: [
          {
            subSubject: "Programming and Problem Solving",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Introduction to Computers",
                  "Characteristics and classifications of computers",
                  "Memory and its types",
                  "Operating systems",
                  "Algorithms and flowcharts",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Starting C",
                  "Variables",
                  "Operators and Expressions",
                  "Decision Making Statements",
                  "Loops",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Introduction to pointers",
                  "Pointer arithmetic",
                  "Introduction to functions",
                  "Call by value and call by reference",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Array",
                  "One Dimensional and Multi Dimensional Arrays",
                  "Searching in array",
                  "Sorting in array",
                  "Character array and strings",
                  "Arithmetic operations on characters",
                  "String handling functions",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Structures",
                  "Union",
                  "Difference between structure and union",
                  "Introduction of Static and Dynamic Memory Allocation",
                ],
              },
            ],
          },
          {
            subSubject: "Fundamentals of Mechanical Engineering",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Introduction to Mechanics",
                  "Force moment and couple",
                  "Hookes’s law",
                  "Resultant of force system - concurrent and non-concurrent coplanar forces",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Introduction to IC Engines and Electric Vehicles",
                  "Electric vehicles",
                  "Electric vehicles and hybrid vehicles",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Introduction to Refrigeration and Air-Conditioning",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Introduction to Fluid Mechanics and Applications",
                  "Pascal’s Law and Continuity Equation",
                  "Working principles of hydraulic turbines",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Introduction to Measurement and Mechatronics",
                  "Error in measurements",
                  "Industrial applications of Mechatronics",
                  "Types of sensors",
                ],
              },
            ],
          },
        ],
      },
      {
        subject: "Basic Electrical Engineering / Basic Electronics Engineering",
        subSubjects: [
          {
            subSubject: "Basic Electrical Engineering",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "DC Circuits",
                  "Electrical circuit elements (R, L and C)",
                  "Voltage and current sources",
                  "Unilateral and bilateral elements",
                  "Kirchhoff’s laws",
                  "Mesh and nodal methods of analysis",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Steady State Analysis of Single Phase AC Circuits",
                  "Representation of Sinusoidal waveforms",
                  "Circuits consisting R-L-C combination",
                  "Voltage and current relations in star and delta connections",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Transformers",
                  "Magnetic circuits",
                  "Losses in transformers",
                  "Regulation and Efficiency",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Electrical machines",
                  "DC machines",
                  "EMF equation of generator and torque equation of motor",
                  "Three Phase Induction Motor: Principle & Construction",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Electrical Installations",
                  "Introduction of Switch Fuse Unit (SFU), MCB, ELCB, MCCB, ACB",
                  "Types of Wires",
                  "Fundamentals of earthing and lightning protection",
                  "Types of Batteries",
                ],
              },
            ],
          },
          {
            subSubject: "Basic Electronics Engineering",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Electrical",
                  "Ideal and practical Diodes",
                  "Zener Diodes breakdown mechanism (Zener and avalanche)",
                  "Half Wave rectification",
                  "Full Wave rectification",
                  "Light-Emitting Diodes",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Bipolar Junction Transistor",
                  "Amplification action",
                  "Construction and Characteristic of JFETs",
                  "MOSFET (MOS) (Depletion and Enhancement) Type",
                  "Difference between JFET and MOSFET",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Operational Amplifiers",
                  "Op-Amp Circuits (Inverting Amplifier, Non-inverting Amplifier)",
                  "Comparators",
                  "Summing Amplifier",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Digital Electronics",
                  "Introduction of Basic and Universal Gates",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Fundamentals of Communication Engineering",
                  "Electromagnetic spectrum",
                  "Fundamentals of amplitude modulation",
                ],
              },
            ],
          },
        ],
      },
      {
        subject: "Workshop Practice / Engineering Graphics",
        subSubjects: [
          {
            subSubject: "",
            units: [
              {
                unitNo: 0,
                chapters: ["", ""],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    semester: 2,
    subj: [
      {
        subject: "Engineering Mathematics-II",
        subSubjects: [
          {
            subSubject: "Engineering Mathematics-II",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Ordinary Differential Equation of Higher Order",
                  "Linear differential equation of nth order",
                  "Cauchy-Euler equation",
                  "Application of differential equations in solving engineering problems",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Laplace Transform",
                  "Laplace transform of derivates and integrals",
                  "Application of Laplace",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Sequence and Series",
                  "Convergence of series",
                  "D’ Alembert’s test",
                  "Fourier series",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Complex Variable",
                  "Cauchy-Riemann equations",
                  "Method to find Analytic functions",
                  "Mobius transformation and their properties",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Complex Variable –Integration",
                  "Complex integration",
                  "Cauchy integral formula",
                  "Taylor’s and Laurent’s series",
                  "Cauchy’s Residue theorem and its application",
                ],
              },
            ],
          },
        ],
      },
      {
        subject: "Engineering Physics/ Engineering Chemistry",
        subSubjects: [
          {
            subSubject: "Engineering Physics",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Quantum Mechanics",
                  "Planck’s theory of black body radiation (qualitative)",
                  "Compton effect",
                  "de-Broglie concept of matter waves",
                  "Physical interpretation of wave function",
                  "Phase velocity and group velocity",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Electromagnetic Field Theory",
                  "Basic laws of electricity and magnetism",
                  "Maxwell equations in integral and differential form",
                  "Poynting vector and Poynting theorem",
                  "Relation between electric and magnetic fields of an electromagnetic wave",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Wave Optics",
                  "Coherent sources",
                  "Rayleigh’s criterion of resolution",
                  "Introduction to diffraction",
                  "Fraunhoffer diffraction at single slit and double slit",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Fiber Optics & Laser",
                  "Principle and construction of optical fiber",
                  "Spontaneous and stimulated emission of radiation",
                  "Principles of laser action",
                  "Laser: Absorption of radiation",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Superconductors and Nano-Materials",
                  "Temperature dependence of resistivity in superconducting materials",
                  "Introduction and properties of nano materials",
                  "Fabrication of nano materials - TopDown approach (CVD) and Bottom-Up approach (Sol Gel)",
                  "Properties and Application of nano materials",
                  "Meissner effect",
                ],
              },
            ],
          },
          {
            subSubject: "Engineering Chemistry",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Atomic and Molecular Structure",
                  "Molecular orbitals of diatomic molecule",
                  "Bond Order",
                  "Types and Applications of liquid crystals",
                  "Structure and applications of Nanomaterials",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Spectroscopic Techniques and Applications",
                  "Elementary idea and simple applications of UV, IR and NMR",
                  "Stereochemistry: Optical isomerism in compounds without chiral carbon",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Electrochemistry and Batteries",
                  "Introduction to corrosion",
                  "Corrosion issues in specific industries",
                  "Chemistry of Engineering Materials",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Water Technology",
                  "Sources and impurities of water",
                  "Determination of Hardness and alkalinity",
                  "Fuels and Combustion",
                  "Determination of calorific value by Bomb Calorimeter",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Materials Chemistry",
                  "Polymers",
                  "Thermosetting and Thermoplastic Polymers",
                  "General methods of preparation and applications of Organometallic compounds",
                  "Conducting and Biodegradable polymers",
                  "Polymer Blends and Composites",
                ],
              },
            ],
          },
        ],
      },
      {
        subject: "Basic Electrical Engineering/Basic Electronics Engineering",
        subSubjects: [
          {
            subSubject: "Basic Electrical Engineering",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "DC Circuits",
                  "Electrical circuit elements (R, L and C)",
                  "Voltage and current sources",
                  "Unilateral and bilateral elements",
                  "Kirchhoff‟s laws",
                  "Mesh and nodal methods of analysis",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Steady State Analysis of Single Phase AC Circuits",
                  "Representation of Sinusoidal waveforms",
                  "Circuits consisting R-L-C combination",
                  "Voltage and current relations in star and delta connections",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Transformers",
                  "Magnetic circuits",
                  "losses in transformers",
                  "Regulation and Efficiency",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Electrical machines",
                  "DC machines",
                  "EMF equation of generator and torque equation of motor",
                  "Three Phase Induction Motor: Principle & Construction",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Electrical Installations",
                  "Introduction of Switch Fuse Unit (SFU), MCB, ELCB, MCCB, ACB",
                  "Types of Wires",
                  "Fundamentals of earthing and lightning protection",
                  "Types of Batteries",
                ],
              },
            ],
          },
          {
            subSubject: "Basic Electronics Engineering",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Semiconductor Diode",
                  "Ideal and practical Diodes",
                  "Zener Diodes breakdown mechanism (Zener and avalanche)",
                  "Half Wave rectification",
                  "Full Wave rectification",
                  "Light-Emitting Diodes",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Bipolar Junction Transistor",
                  "Amplification action",
                  "Construction and Characteristic of JFETs",
                  "MOSFET (MOS) (Depletion and Enhancement) Type",
                  "Difference between JFET and MOSFET",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Operational Amplifiers",
                  "Op-Amp Circuits (Inverting Amplifier, Non-inverting Amplifier)",
                  "Comparators",
                  "Summing Amplifier",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Digital Electronics",
                  "Introduction of Basic and Universal Gates",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Fundamentals of Communication Engineering",
                  "Electromagnetic spectrum",
                  "Fundamentals of amplitude modulation",
                ],
              },
            ],
          },
        ],
      },

      {
        subject:
          "Programming and Problem Solving/Fundamentals of Mechanical Engineering",
        subSubjects: [
          {
            subSubject: "Programming and Problem Solving",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Introduction to Computers",
                  "Characteristics and classifications of computers",
                  "Memory and its types",
                  "Operating systems",
                  "Algorithms and flowcharts",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Starting C",
                  "Variables",
                  "Operators and Expressions",
                  "Decision Making Statements",
                  "Loops",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Introduction to pointers",
                  "Pointer arithmetic",
                  "Introduction to functions",
                  "Call by value and call by reference",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Array",
                  "One Dimensional and Multi Dimensional Arrays",
                  "Searching in array",
                  "Sorting in array",
                  "Character array and strings",
                  "Arithmetic operations on characters",
                  "String handling functions",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Structures",
                  "Union",
                  "Difference between structure and union",
                  "Introduction of Static and Dynamic Memory Allocation",
                ],
              },
            ],
          },
          {
            subSubject: "Fundamentals of Mechanical Engineering",
            units: [
              {
                unitNo: 1,
                chapters: [
                  "Introduction to Mechanics",
                  "Force moment and couple",
                  "Hookes’s law",
                  "Resultant of force system- concurrent and non-concurrent coplanar forces",
                ],
              },
              {
                unitNo: 2,
                chapters: [
                  "Introduction to IC Engines and Electric Vehicles",
                  "Electric vehicles",
                  "Electric vehicles and hybrid vehicles",
                ],
              },
              {
                unitNo: 3,
                chapters: [
                  "Introduction to Refrigeration and Air-Conditioning",
                ],
              },
              {
                unitNo: 4,
                chapters: [
                  "Introduction to Fluid Mechanics and Applications",
                  "Pascal’s Law and Continuity Equation",
                  "Working principles of hydraulic turbines",
                ],
              },
              {
                unitNo: 5,
                chapters: [
                  "Introduction to Measurement and Mechatronics",
                  "Error in measurements",
                  "Industrial applications of Mechatronics",
                  "Types of sensors",
                ],
              },
            ],
          },
        ],
      },

      {
        subject:
          "Programming and Problem Solving/Fundamentals of Mechanical Engineering",
        subSubjects: [
          {
            subSubject: "",
            units: [
              {
                unitNo: 0,
                chapters: ["", ""],
              },
            ],
          },
        ],
      },
      {
        subject: "Project-Based Learning",
        subSubjects: [
          {
            subSubject: "",
            units: [
              {
                unitNo: 0,
                chapters: ["", ""],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    semester: 3,
    subj: [
      {
        subject: "Data Structures and Algorithms",
        subSubjects: [
          {
            subSubject: "Data Structures",
            units: [
              {
                unitNo: "1",
                chapters: [
                  "Introduction to Data Structures",
                  "Time and Space Complexity",
                  "Asymptotic Notations",
                  "Arrays",
                  "Linked List",
                ],
              },
              {
                unitNo: "2",
                chapters: ["Stacks", "Queues"],
              },
              {
                unitNo: "3",
                chapters: [
                  "Searching",
                  "Sorting",
                  "Array Representation and Pointer (Linked List)",
                ],
              },
              {
                unitNo: "4",
                chapters: [
                  "Binary Tree",
                  "Tree Traversal Algorithms",
                  "AVL Tree",
                  "Huffman Coding using Binary Tree",
                  "Binary Heaps",
                ],
              },
              {
                unitNo: "5",
                chapters: [
                  "Graphs",
                  "Adjacency Matrix and Adjacency List",
                  "Depth First Search",
                  "Breadth First Search",
                  "Prim's Algorithm",
                  "Kruskal's Algorithm",
                  "Warshall's Algorithm",
                  "Dijkstra's Algorithm",
                ],
              },
            ],
          },
        ],
      },
      {
        subject: "Computer Organization and Architecture",
        subSubjects: [
          {
            subSubject: "Computer Organization",
            units: [
              {
                unitNo: "1",
                chapters: [
                  "Introduction",
                  "Bus Architecture",
                  "Bus Arbitration",
                  "Register",
                  "Addressing Modes",
                ],
              },
              {
                unitNo: "2",
                chapters: [
                  "Arithmetic and Logic Unit",
                  "Booth's Algorithm and Array Multiplier",
                  "IEEE Standard for Floating Point Numbers",
                ],
              },
              {
                unitNo: "3",
                chapters: [
                  "Control Unit",
                  "Instruction Types",
                  "Program Control",
                  "Micro Program Sequencing",
                  "Pipelining",
                ],
              },
              {
                unitNo: "4",
                chapters: [
                  "Memory",
                  "Basic Concept and Hierarchy",
                  "Auxiliary Memories",
                ],
              },
              {
                unitNo: "5",
                chapters: [
                  "Input/Output",
                  "Peripheral Devices",
                  "Modes of Data Transfer",
                  "Serial Communication: Synchronous & Asynchronous Communication",
                ],
              },
            ],
          },
        ],
      },
      {
        subject: "Project-Based Learning",
        subSubjects: [
          {
            subSubject: "Discrete Mathematics",
            units: [
              {
                unitNo: "1",
                chapters: [
                  "Set Theory & Relation",
                  "Relations: Definition, Operations on Relations",
                ],
              },
              {
                unitNo: "2",
                chapters: [
                  "Functions",
                  "Boolean Algebra",
                  "Simplification of Boolean Functions",
                  "Karnaugh Maps",
                ],
              },
              {
                unitNo: "3",
                chapters: [
                  "Proposition",
                  "Theory of Inference",
                  "Predicate Logic",
                ],
              },
              {
                unitNo: "4",
                chapters: [
                  "Algebraic Structures",
                  "Lagrange’s Theorem",
                  "Definition and Elementary Properties of Rings and Fields",
                ],
              },
              {
                unitNo: "5",
                chapters: [
                  "Graphs",
                  "Representation of Graphs",
                  "Bipartite Graphs",
                  "Euler and Hamiltonian Paths",
                  "Graph Coloring",
                ],
              },
            ],
          },
        ],
      },
      {
        subject: "Project-Based Learning",
        subSubjects: [
          {
            subSubject: "Python Programming",
            units: [
              {
                unitNo: "1",
                chapters: [
                  "Introduction",
                  "Expressions",
                  "Operators in Python",
                  "Type Conversion",
                ],
              },
              {
                unitNo: "2",
                chapters: [
                  "Conditional Statements in Python",
                  "Loops in Python",
                  "Break and Continue",
                ],
              },
              {
                unitNo: "3",
                chapters: [
                  "Functions",
                  "Scope and Rule",
                  "Strings in Python",
                  "Python Data Structures",
                  "Tuples",
                  "Lists",
                  "Sets",
                  "Dictionaries",
                  "File I/O",
                ],
              },
              {
                unitNo: "4",
                chapters: ["Modules", "Classes"],
              },
              {
                unitNo: "5",
                chapters: [
                  "Iterators in Python",
                  "Recursion in Python",
                  "Searching Algorithms",
                  "Sorting Algorithms",
                ],
              },
            ],
          },
        ],
      },

      {
        subject: "Project-Based Learning",
        subSubjects: [
          {
            subSubject: "Universal Human Values",
            units: [
              {
                unitNo: "1",
                chapters: [
                  "Need, Basic Guidelines, Content and Process for Value Education"
                ]
              },
              {
                unitNo: "2",
                chapters: [
                  "Understanding Harmony in the Human Being – Harmony in Myself"
                ]
              },
              {
                unitNo: "3",
                chapters: [
                  "Understanding Harmony in the Family and Society – Harmony in Human-Human Relationship"
                ]
              },
              {
                unitNo: "4",
                chapters: [
                  "Understanding Harmony in the Nature and Existence – Whole Existence as Co-existence"
                ]
              },
              {
                unitNo: "5",
                chapters: [
                  "Implications of the Above Holistic Understanding of Harmony on Professional Ethics"
                ]
              }
            ]
          },
          {
            subSubject: "Technical Communication",
            units: [
              {
                unitNo: "1",
                chapters: [
                  "Fundamentals of Technical Communication"
                ]
              },
              {
                unitNo: "2",
                chapters: [
                  "Forms of Technical Communication"
                ]
              },
              {
                unitNo: "3",
                chapters: [
                  "Technical Presentation: Strategies & Techniques"
                ]
              },
              {
                unitNo: "4",
                chapters: [
                  "Technical Communication Skills"
                ]
              },
              {
                unitNo: "5",
                chapters: [
                  "Kinesis & Voice Dynamics"
                ]
              }
            ]
          }
        ]
      },
      
    ],
  },
  {
    semester: 4,
    subj: [
      
    ]}
];

const aYearaSem = ({ semester }) => {
  // console.log( subjects[semester].subj);

  return (
    <>
      <div className="text-center text-2xl">
        {" "}
        Syllabus Of semester {semester + 1}
      </div>
      <div className="w-[95vw] md:w-[80vw] mx-auto bgleft my-2 rounded-xl md:rounded-2xl overflow-hidden">
        <div className="flex  flex-row justify-center items-center border-b-2 border-[#828080]">
          <div className="text-xl md:text-3xl SubHead1 pl-3 md:pl-10 md:py-7 b">
            Subject List
          </div>
          <div className="text-xl md:text-3xl SubHead md:py-7">
            Detailed Subject-wise Syllabus
          </div>
        </div>
        {semester == 0 || semester == 1 || semester == 2 ? (
          subjects[semester].subj.map((sub, i1) => (
            <div
              key={i1}
              className="flex  flex-row justify-center items-start border-b-2 border-[#828080]"
            >
              <div className="text-white SubHead1 text-base md:text-[22px] pl-3 md:pl-10">
                {sub.subject}
              </div>
              <div className="SubHead ">
                {sub.subSubjects.map((sub2, i2) => (
                  <div key={i2} className="text-white text-center text-2xl">
                    <div className="text-white pb-[15px] text-base md:text-[20px]">
                      {sub2.subSubject}
                    </div>
                    <div className="text-white flex flex-col border-b-2 border-[#828080] py-3">
                      {sub2.units.map((sub3, i3) => (
                        <div
                          key={i3}
                          className="text-white flex flex-col md:flex-row justify-start "
                        >
                          <div className="text-white min-w-fit flex px-3 pt-3 items-start text-sm md:text-lg">
                            {`${
                              sub3.unitNo == 0 ? "" : `Unit  ${sub3.unitNo}`
                            }`}
                          </div>
                          <div className="text-white w-full p-3 ">
                            {sub3.chapters.map((sub4, i4) => (
                              <div
                                key={i4}
                                className="text-white text-left py-2 text-xs md:text-lg pl-3 md:pl-0 "
                              >
                                {sub4}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-white text-base md:text-xl py-6">{`The syllabus for Semester ${
            semester + 1
          } will be made available shortly.`}</h1>
        )}
      </div>
    </>
  );
};

export default aYearaSem;
