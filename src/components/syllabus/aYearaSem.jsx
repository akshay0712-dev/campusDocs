import React from "react";

const subjects = [
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
            chapters: ["Introduction to Refrigeration and Air-Conditioning"],
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
            unitNo: "",
            chapters: ["", ""],
          },
        
        ],
      },
    ],
  },
  // {
  //   subject: "",
  //   subSubjects: [
  //     {
  //       subSubject: "",
  //       units: [
  //         {
  //           unitNo: 1,
  //           chapters: ["", ""],
  //         },
  //         {
  //           unitNo: 2,
  //           chapters: ["", ""],
  //         },
  //       ],
  //     },
  //   ],
  // },
];

const aYearaSem = () => {
  return (
    <>
      <div className="w-[95vw] md:w-[80vw] mx-auto bgleft my-2 rounded-xl md:rounded-2xl overflow-hidden">
        <div className="flex  flex-row justify-center items-center border-b-2 border-[#828080]">
          <div className="text-xl md:text-3xl SubHead1 pl-3 md:pl-10 md:py-7 b">Subject List</div>
          <div className="text-xl md:text-3xl SubHead md:py-7">Detailed Subject-wise Syllabus</div>
        </div>
        {subjects.map((sub, i1) => (
          <div key={i1} className="flex  flex-row justify-center items-start border-b-2 border-[#828080]">
            <div className="text-white SubHead1 text-base md:text-[22px] pl-3 md:pl-10">{sub.subject}</div>
            <div className="SubHead ">
              {sub.subSubjects.map((sub2, i2) => (
                <div key={i2} className="text-white text-center text-2xl">
                  <div className="text-white pb-[15px] text-base md:text-[20px]">{sub2.subSubject}</div>
                  <div className="text-white flex flex-col border-b-2 border-[#828080] py-3">
                    {sub2.units.map((sub3, i3) => (
                      <div
                        key={i3}
                        className="text-white flex flex-col md:flex-row justify-start "
                      >
                        <div className="text-white min-w-fit flex px-3 pt-3 items-start text-sm md:text-lg">
                          {`Unit ${sub3.unitNo}`}
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
        ))}
      </div>
    </>
  );
};

export default aYearaSem;
