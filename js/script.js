const elementsData = {
    H: {
        atomicNumber: 1,
        name: "Hydrogen",
        symbol: "H",
        atomicMass: 1.008,
        category: "Nonmetal",
        electronConfiguration: "1s¹",
        electronegativity: 2.20,
        meltingPoint: "-259.16 °C",
        boilingPoint: "-252.87 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/h.png"
    },
    He: {
        atomicNumber: 2,
        name: "Helium",
        symbol: "He",
        atomicMass: 4.0026,
        category: "Noble Gas",
        electronConfiguration: "1s²",
        electronegativity: "N/A",
        meltingPoint: "-272.2 °C",
        boilingPoint: "-268.93 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/he.png"
    },
    Li: {
        atomicNumber: 3,
        name: "Lithium",
        symbol: "Li",
        atomicMass: 6.94,
        category: "Alkali Metal",
        electronConfiguration: "[He] 2s¹",
        electronegativity: 0.98,
        meltingPoint: "180.5 °C",
        boilingPoint: "1342 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/li.png"
    },
    Be: {
        atomicNumber: 4,
        name: "Beryllium",
        symbol: "Be",
        atomicMass: 9.0122,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[He] 2s²",
        electronegativity: 1.57,
        meltingPoint: "1278 °C",
        boilingPoint: "2469 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/be.png"
    },
    B: {
        atomicNumber: 5,
        name: "Boron",
        symbol: "B",
        atomicMass: 10.81,
        category: "Metalloid",
        electronConfiguration: "[He] 2s² 2p¹",
        electronegativity: 2.04,
        meltingPoint: "2076 °C",
        boilingPoint: "3927 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/b.png"
    },
    C: {
        atomicNumber: 6,
        name: "Carbon",
        symbol: "C",
        atomicMass: 12.011,
        category: "Nonmetal",
        electronConfiguration: "[He] 2s² 2p²",
        electronegativity: 2.55,
        meltingPoint: "3550 °C",
        boilingPoint: "4827 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/c.png"
    },
    N: {
        atomicNumber: 7,
        name: "Nitrogen",
        symbol: "N",
        atomicMass: 14.007,
        category: "Nonmetal",
        electronConfiguration: "[He] 2s² 2p³",
        electronegativity: 3.04,
        meltingPoint: "-210.1 °C",
        boilingPoint: "-195.8 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/n.png"
    },
    O: {
        atomicNumber: 8,
        name: "Oxygen",
        symbol: "O",
        atomicMass: 15.999,
        category: "Nonmetal",
        electronConfiguration: "[He] 2s² 2p⁴",
        electronegativity: 3.44,
        meltingPoint: "-218.79 °C",
        boilingPoint: "-182.96 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/o.png"
    },
    F: {
        atomicNumber: 9,
        name: "Fluorine",
        symbol: "F",
        atomicMass: 18.998,
        category: "Halogen",
        electronConfiguration: "[He] 2s² 2p⁵",
        electronegativity: 3.98,
        meltingPoint: "-219.62 °C",
        boilingPoint: "-188.12 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/f.png"
    },
    Ne: {
        atomicNumber: 10,
        name: "Neon",
        symbol: "Ne",
        atomicMass: 20.180,
        category: "Noble Gas",
        electronConfiguration: "[He] 2s² 2p⁶",
        electronegativity: "N/A",
        meltingPoint: "-248.59 °C",
        boilingPoint: "-246.08 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/ne.png"
    },
    Na: {
        atomicNumber: 11,
        name: "Sodium",
        symbol: "Na",
        atomicMass: 22.990,
        category: "Alkali Metal",
        electronConfiguration: "[Ne] 3s¹",
        electronegativity: 0.93,
        meltingPoint: "97.72 °C",
        boilingPoint: "883 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/na.png"
    },
    Mg: {
        atomicNumber: 12,
        name: "Magnesium",
        symbol: "Mg",
        atomicMass: 24.305,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Ne] 3s²",
        electronegativity: 1.31,
        meltingPoint: "650 °C",
        boilingPoint: "1090 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/mg.png"
    },
    Al: {
        atomicNumber: 13,
        name: "Aluminium",
        symbol: "Al",
        atomicMass: 26.982,
        category: "Post-transition Metal",
        electronConfiguration: "[Ne] 3s² 3p¹",
        electronegativity: 1.61,
        meltingPoint: "660.32 °C",
        boilingPoint: "2519 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/al.png"
    },
    Si: {
        atomicNumber: 14,
        name: "Silicon",
        symbol: "Si",
        atomicMass: 28.085,
        category: "Metalloid",
        electronConfiguration: "[Ne] 3s² 3p²",
        electronegativity: 1.90,
        meltingPoint: "1414 °C",
        boilingPoint: "3265 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/si.png"
    },
    P: {
        atomicNumber: 15,
        name: "Phosphorus",
        symbol: "P",
        atomicMass: 30.974,
        category: "Nonmetal",
        electronConfiguration: "[Ne] 3s² 3p³",
        electronegativity: 2.19,
        meltingPoint: "44.1 °C",
        boilingPoint: "280.5 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/p.png"
    },
    S: {
        atomicNumber: 16,
        name: "Sulfur",
        symbol: "S",
        atomicMass: 32.06,
        category: "Nonmetal",
        electronConfiguration: "[Ne] 3s² 3p⁴",
        electronegativity: 2.58,
        meltingPoint: "115.21 °C",
        boilingPoint: "444.72 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/s.png"
    },
    Cl: {
        atomicNumber: 17,
        name: "Chlorine",
        symbol: "Cl",
        atomicMass: 35.45,
        category: "Halogen",
        electronConfiguration: "[Ne] 3s² 3p⁵",
        electronegativity: 3.16,
        meltingPoint: "-101.5 °C",
        boilingPoint: "-34.04 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/cl.png"
    },
    Ar: {
        atomicNumber: 18,
        name: "Argon",
        symbol: "Ar",
        atomicMass: 39.948,
        category: "Noble Gas",
        electronConfiguration: "[Ne] 3s² 3p⁶",
        electronegativity: "N/A",
        meltingPoint: "-189.3 °C",
        boilingPoint: "-185.8 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/ar.png"
    },
    K: {
        atomicNumber: 19,
        name: "Potassium",
        symbol: "K",
        atomicMass: 39.098,
        category: "Alkali Metal",
        electronConfiguration: "[Ar] 4s¹",
        electronegativity: 0.82,
        meltingPoint: "63.5 °C",
        boilingPoint: "759 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/k.png"
    },
    Ca: {
        atomicNumber: 20,
        name: "Calcium",
        symbol: "Ca",
        atomicMass: 40.078,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Ar] 4s²",
        electronegativity: 1.00,
        meltingPoint: "842 °C",
        boilingPoint: "1484 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ca.webp"
    },
    Sc: {
        atomicNumber: 21,
        name: "Scandium",
        symbol: "Sc",
        atomicMass: 44.956,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d¹ 4s²",
        electronegativity: 1.36,
        meltingPoint: "1541 °C",
        boilingPoint: "2836 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/sc.webp"
    },
    Ti: {
        atomicNumber: 22,
        name: "Titanium",
        symbol: "Ti",
        atomicMass: 47.867,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d² 4s²",
        electronegativity: 1.54,
        meltingPoint: "1668 °C",
        boilingPoint: "3287 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ti.webp"
    },
    V: {
        atomicNumber: 23,
        name: "Vanadium",
        symbol: "V",
        atomicMass: 50.942,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d³ 4s²",
        electronegativity: 1.63,
        meltingPoint: "1910 °C",
        boilingPoint: "3407 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/v.webp"
    },
    Cr: {
        atomicNumber: 24,
        name: "Chromium",
        symbol: "Cr",
        atomicMass: 51.996,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁵ 4s¹",
        electronegativity: 1.66,
        meltingPoint: "1907 °C",
        boilingPoint: "2671 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/cr.webp"
    },
    Mn: {
        atomicNumber: 25,
        name: "Manganese",
        symbol: "Mn",
        atomicMass: 54.938,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁵ 4s²",
        electronegativity: 1.55,
        meltingPoint: "1246 °C",
        boilingPoint: "2061 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/mn.webp"
    },
    Fe: {
        atomicNumber: 26,
        name: "Iron",
        symbol: "Fe",
        atomicMass: 55.845,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁶ 4s²",
        electronegativity: 1.83,
        meltingPoint: "1538 °C",
        boilingPoint: "2862 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/fe.webp"
    },
    Co: {
        atomicNumber: 27,
        name: "Cobalt",
        symbol: "Co",
        atomicMass: 58.933,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁷ 4s²",
        electronegativity: 1.88,
        meltingPoint: "1495 °C",
        boilingPoint: "2927 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/co.webp"
    },
    Ni: {
        atomicNumber: 28,
        name: "Nickel",
        symbol: "Ni",
        atomicMass: 58.693,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d⁸ 4s²",
        electronegativity: 1.91,
        meltingPoint: "1455 °C",
        boilingPoint: "2913 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ni.webp"
    },
    Cu: {
        atomicNumber: 29,
        name: "Copper",
        symbol: "Cu",
        atomicMass: 63.546,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d¹⁰ 4s¹",
        electronegativity: 1.90,
        meltingPoint: "1085 °C",
        boilingPoint: "2562 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/cu.webp"
    },
    Zn: {
        atomicNumber: 30,
        name: "Zinc",
        symbol: "Zn",
        atomicMass: 65.38,
        category: "Transition Metal",
        electronConfiguration: "[Ar] 3d¹⁰ 4s²",
        electronegativity: 1.65,
        meltingPoint: "419.5 °C",
        boilingPoint: "907 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/zn.webp"
    },
    Ga: {
        atomicNumber: 31,
        name: "Gallium",
        symbol: "Ga",
        atomicMass: 69.723,
        category: "Post-transition Metal",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p¹",
        electronegativity: 1.81,
        meltingPoint: "29.76 °C",
        boilingPoint: "2204 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ga.webp"
    },
    Ge: {
        atomicNumber: 32,
        name: "Germanium",
        symbol: "Ge",
        atomicMass: 72.630,
        category: "Metalloid",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p²",
        electronegativity: 2.01,
        meltingPoint: "938.25 °C",
        boilingPoint: "2833 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ge.webp"
    },
    As: {
        atomicNumber: 33,
        name: "Arsenic",
        symbol: "As",
        atomicMass: 74.922,
        category: "Metalloid",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p³",
        electronegativity: 2.18,
        meltingPoint: "817 °C (sublimes)",
        boilingPoint: "613 °C (sublimes)",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/as.webp"
    },
    Se: {
        atomicNumber: 34,
        name: "Selenium",
        symbol: "Se",
        atomicMass: 78.971,
        category: "Nonmetal",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁴",
        electronegativity: 2.55,
        meltingPoint: "221 °C",
        boilingPoint: "685 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/se.webp"
    },
    Br: {
        atomicNumber: 35,
        name: "Bromine",
        symbol: "Br",
        atomicMass: 79.904,
        category: "Halogen",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁵",
        electronegativity: 2.96,
        meltingPoint: "-7.2 °C",
        boilingPoint: "58.8 °C",
        standardState: "Liquid",
        isRadioactive: false,
        image: "images/br.webp"
    },
    Kr: {
        atomicNumber: 36,
        name: "Krypton",
        symbol: "Kr",
        atomicMass: 83.798,
        category: "Noble Gas",
        electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁶",
        electronegativity: 3.00,
        meltingPoint: "-157.36 °C",
        boilingPoint: "-153.22 °C",
        standardState: "Gas",
        isRadioactive: false,
        image: "images/kr.webp"
    },
    Rb: {
        atomicNumber: 37,
        name: "Rubidium",
        symbol: "Rb",
        atomicMass: 85.468,
        category: "Alkali Metal",
        electronConfiguration: "[Kr] 5s¹",
        electronegativity: 0.82,
        meltingPoint: "39.31 °C",
        boilingPoint: "688 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/rb.webp"
    },
    Sr: {
        atomicNumber: 38,
        name: "Strontium",
        symbol: "Sr",
        atomicMass: 87.62,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Kr] 5s²",
        electronegativity: 0.95,
        meltingPoint: "777 °C",
        boilingPoint: "1382 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/sr.webp"
    },
    Y: {
        atomicNumber: 39,
        name: "Yttrium",
        symbol: "Y",
        atomicMass: 88.906,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d¹ 5s²",
        electronegativity: 1.22,
        meltingPoint: "1526 °C",
        boilingPoint: "3336 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/y.webp"
    },
    Zr: {
        atomicNumber: 40,
        name: "Zirconium",
        symbol: "Zr",
        atomicMass: 91.224,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d² 5s²",
        electronegativity: 1.33,
        meltingPoint: "1855 °C",
        boilingPoint: "4409 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/zr.webp"
    },
    Nb: {
        atomicNumber: 41,
        name: "Niobium",
        symbol: "Nb",
        atomicMass: 92.906,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁴ 5s¹",
        electronegativity: 1.6,
        meltingPoint: "2477 °C",
        boilingPoint: "4744 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/nb.webp"
    },
    Mo: {
        atomicNumber: 42,
        name: "Molybdenum",
        symbol: "Mo",
        atomicMass: 95.95,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁵ 5s¹",
        electronegativity: 2.16,
        meltingPoint: "2623 °C",
        boilingPoint: "4639 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/mo.webp"
    },
    Tc: {
        atomicNumber: 43,
        name: "Technetium",
        symbol: "Tc",
        atomicMass: 98,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁵ 5s²",
        electronegativity: 1.9,
        meltingPoint: "2157 °C",
        boilingPoint: "4265 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/tc.webp"
    },
    Ru: {
        atomicNumber: 44,
        name: "Ruthenium",
        symbol: "Ru",
        atomicMass: 101.07,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁷ 5s¹",
        electronegativity: 2.2,
        meltingPoint: "2334 °C",
        boilingPoint: "4150 °C",
        standardState: "Solid",
        image: "images/ru.webp"
    },
    Rh: {
        atomicNumber: 45,
        name: "Rhodium",
        symbol: "Rh",
        atomicMass: 102.91,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d⁸ 5s¹",
        electronegativity: 2.28,
        meltingPoint: "1964 °C",
        boilingPoint: "3695 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/rh.webp"
    },
    Pd: {
        atomicNumber: 46,
        name: "Palladium",
        symbol: "Pd",
        atomicMass: 106.42,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰",
        electronegativity: 2.20,
        meltingPoint: "1554.9 °C",
        boilingPoint: "2963 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/pd.webp"
    },
    Ag: {
        atomicNumber: 47,
        name: "Silver",
        symbol: "Ag",
        atomicMass: 107.87,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰ 5s¹",
        electronegativity: 1.93,
        meltingPoint: "961.8 °C",
        boilingPoint: "2162 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ag.webp"
    },
    Cd: {
        atomicNumber: 48,
        name: "Cadmium",
        symbol: "Cd",
        atomicMass: 112.41,
        category: "Transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰ 5s²",
        electronegativity: 1.69,
        meltingPoint: "321.07 °C",
        boilingPoint: "767 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/cd.webp"
    },
    In: {
        atomicNumber: 49,
        name: "Indium",
        symbol: "In",
        atomicMass: 114.82,
        category: "Post-transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p¹",
        electronegativity: 1.78,
        meltingPoint: "156.6 °C",
        boilingPoint: "2072 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/in.webp"
    },
    Sn: {
        atomicNumber: 50,
        name: "Tin",
        symbol: "Sn",
        atomicMass: 118.71,
        category: "Post-transition Metal",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p²",
        electronegativity: 1.96,
        meltingPoint: "231.93 °C",
        boilingPoint: "2602 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/sn.webp"
    },
    Sb: {
        atomicNumber: 51,
        name: "Antimony",
        symbol: "Sb",
        atomicMass: 121.76,
        category: "Metalloid",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p³",
        electronegativity: 2.05,
        meltingPoint: "630.63 °C",
        boilingPoint: "1587 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/sb.webp"
    },
    Te: {
        atomicNumber: 52,
        name: "Tellurium",
        symbol: "Te",
        atomicMass: 127.60,
        category: "Metalloid",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁴",
        electronegativity: 2.1,
        meltingPoint: "449.51 °C",
        boilingPoint: "988 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/te.webp"
    },
    I: {
        atomicNumber: 53,
        name: "Iodine",
        symbol: "I",
        atomicMass: 126.90,
        category: "Halogen",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁵",
        electronegativity: 2.66,
        meltingPoint: "113.7 °C",
        boilingPoint: "184.3 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/i.webp"
    },
    Xe: {
        atomicNumber: 54,
        name: "Xenon",
        symbol: "Xe",
        atomicMass: 131.29,
        category: "Noble Gas",
        electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁶",
        electronegativity: 2.6,
        meltingPoint: "-111.8 °C",
        boilingPoint: "-108.1 °C",
        standardState: "Gas",
        image: "images/xe.webp"
    },
    Cs: {
        atomicNumber: 55,
        name: "Cesium",
        symbol: "Cs",
        atomicMass: 132.91,
        category: "Alkali Metal",
        electronConfiguration: "[Xe] 6s¹",
        electronegativity: 0.79,
        meltingPoint: "28.44 °C",
        boilingPoint: "671 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/cs.webp"
    },
    Ba: {
        atomicNumber: 56,
        name: "Barium",
        symbol: "Ba",
        atomicMass: 137.33,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Xe] 6s²",
        electronegativity: 0.89,
        meltingPoint: "727 °C",
        boilingPoint: "1870 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ba.webp"
    },
    La: {
        atomicNumber: 57,
        name: "Lanthanum",
        symbol: "La",
        atomicMass: 138.91,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 5d¹ 6s²",
        electronegativity: 1.10,
        meltingPoint: "920 °C",
        boilingPoint: "3464 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/la.webp"
    },
    Ce: {
        atomicNumber: 58,
        name: "Cerium",
        symbol: "Ce",
        atomicMass: 140.12,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹ 5d¹ 6s²",
        electronegativity: 1.12,
        meltingPoint: "798 °C",
        boilingPoint: "3424 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ce.webp"
    },
    Pr: {
        atomicNumber: 59,
        name: "Praseodymium",
        symbol: "Pr",
        atomicMass: 140.91,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f³ 6s²",
        electronegativity: 1.13,
        meltingPoint: "931 °C",
        boilingPoint: "3290 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/pr.webp"
    },
    Nd: {
        atomicNumber: 60,
        name: "Neodymium",
        symbol: "Nd",
        atomicMass: 144.24,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁴ 6s²",
        electronegativity: 1.14,
        meltingPoint: "1024 °C",
        boilingPoint: "3074 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/nd.webp"
    },
    Pm: {
        atomicNumber: 61,
        name: "Promethium",
        symbol: "Pm",
        atomicMass: 145,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁵ 6s²",
        electronegativity: 1.13,
        meltingPoint: "1042 °C",
        boilingPoint: "3000 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/pm.webp"
    },
    Sm: {
        atomicNumber: 62,
        name: "Samarium",
        symbol: "Sm",
        atomicMass: 150.36,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁶ 6s²",
        electronegativity: 1.17,
        meltingPoint: "1072 °C",
        boilingPoint: "1794 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/sm.webp"
    },
    Eu: {
        atomicNumber: 63,
        name: "Europium",
        symbol: "Eu",
        atomicMass: 151.96,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁷ 6s²",
        electronegativity: 1.2,
        meltingPoint: "822 °C",
        boilingPoint: "1529 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/eu.webp"
    },
    Gd: {
        atomicNumber: 64,
        name: "Gadolinium",
        symbol: "Gd",
        atomicMass: 157.25,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁷ 5d¹ 6s²",
        electronegativity: 1.2,
        meltingPoint: "1313 °C",
        boilingPoint: "3273 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/gd.webp"
    },
    Tb: {
        atomicNumber: 65,
        name: "Terbium",
        symbol: "Tb",
        atomicMass: 158.93,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f⁹ 6s²",
        electronegativity: 1.1,
        meltingPoint: "1356 °C",
        boilingPoint: "3230 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/tb.webp"
    },
    Dy: {
        atomicNumber: 66,
        name: "Dysprosium",
        symbol: "Dy",
        atomicMass: 162.50,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹⁰ 6s²",
        electronegativity: 1.22,
        meltingPoint: "1412 °C",
        boilingPoint: "2567 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/dy.webp"
    },
    Ho: {
        atomicNumber: 67,
        name: "Holmium",
        symbol: "Ho",
        atomicMass: 164.93,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹¹ 6s²",
        electronegativity: 1.23,
        meltingPoint: "1474 °C",
        boilingPoint: "2700 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ho.webp"
    },
    Er: {
        atomicNumber: 68,
        name: "Erbium",
        symbol: "Er",
        atomicMass: 167.26,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹² 6s²",
        electronegativity: 1.24,
        meltingPoint: "1529 °C",
        boilingPoint: "2868 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/er.webp"
    },
    Tm: {
        atomicNumber: 69,
        name: "Thulium",
        symbol: "Tm",
        atomicMass: 168.93,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹³ 6s²",
        electronegativity: 1.25,
        meltingPoint: "1545 °C",
        boilingPoint: "1950 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/tm.webp"
    },
    Yb: {
        atomicNumber: 70,
        name: "Ytterbium",
        symbol: "Yb",
        atomicMass: 173.05,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹⁴ 6s²",
        electronegativity: 1.1,
        meltingPoint: "824 °C",
        boilingPoint: "1196 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/yb.webp"
    },
    Lu: {
        atomicNumber: 71,
        name: "Lutetium",
        symbol: "Lu",
        atomicMass: 174.97,
        category: "Lanthanide",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹ 6s²",
        electronegativity: 1.27,
        meltingPoint: "1652 °C",
        boilingPoint: "3402 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/lu.webp"
    },
    Hf: {
        atomicNumber: 72,
        name: "Hafnium",
        symbol: "Hf",
        atomicMass: 178.49,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d² 6s²",
        electronegativity: 1.3,
        meltingPoint: "2233 °C",
        boilingPoint: "4603 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/hf.webp"
    },
    Ta: {
        atomicNumber: 73,
        name: "Tantalum",
        symbol: "Ta",
        atomicMass: 180.95,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d³ 6s²",
        electronegativity: 1.5,
        meltingPoint: "3017 °C",
        boilingPoint: "5458 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ta.webp"
    },
    W: {
        atomicNumber: 74,
        name: "Tungsten",
        symbol: "W",
        atomicMass: 183.84,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁴ 6s²",
        electronegativity: 2.36,
        meltingPoint: "3422 °C",
        boilingPoint: "5555 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/w.webp"
    },
    Re: {
        atomicNumber: 75,
        name: "Rhenium",
        symbol: "Re",
        atomicMass: 186.21,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁵ 6s²",
        electronegativity: 1.9,
        meltingPoint: "3186 °C",
        boilingPoint: "5596 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/re.webp"
    },
    Os: {
        atomicNumber: 76,
        name: "Osmium",
        symbol: "Os",
        atomicMass: 190.23,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁶ 6s²",
        electronegativity: 2.2,
        meltingPoint: "3033 °C",
        boilingPoint: "5012 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/os.webp"
    },
    Ir: {
        atomicNumber: 77,
        name: "Iridium",
        symbol: "Ir",
        atomicMass: 192.22,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁷ 6s²",
        electronegativity: 2.2,
        meltingPoint: "2466 °C",
        boilingPoint: "4428 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/ir.webp"
    },
    Pt: {
        atomicNumber: 78,
        name: "Platinum",
        symbol: "Pt",
        atomicMass: 195.08,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
        electronegativity: 2.28,
        meltingPoint: "1768.3 °C",
        boilingPoint: "3825 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/pt.webp"
    },
    Au: {
        atomicNumber: 79,
        name: "Gold",
        symbol: "Au",
        atomicMass: 196.97,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
        electronegativity: 2.54,
        meltingPoint: "1064.18 °C",
        boilingPoint: "2970 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/au.webp"
    },
    Hg: {
        atomicNumber: 80,
        name: "Mercury",
        symbol: "Hg",
        atomicMass: 200.59,
        category: "Transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
        electronegativity: 2.00,
        meltingPoint: "-38.83 °C",
        boilingPoint: "356.73 °C",
        standardState: "Liquid",
        isRadioactive: false,
        image: "images/hg.webp"
    },
    Tl: {
        atomicNumber: 81,
        name: "Thallium",
        symbol: "Tl",
        atomicMass: 204.38,
        category: "Post-transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
        electronegativity: 1.62,
        meltingPoint: "304 °C",
        boilingPoint: "1473 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/tl.webp"
    },
    Pb: {
        atomicNumber: 82,
        name: "Lead",
        symbol: "Pb",
        atomicMass: 207.2,
        category: "Post-transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
        electronegativity: 2.33,
        meltingPoint: "327.46 °C",
        boilingPoint: "1749 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/pb.webp"
    },
    Bi: {
        atomicNumber: 83,
        name: "Bismuth",
        symbol: "Bi",
        atomicMass: 208.98,
        category: "Post-transition Metal",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
        electronegativity: 2.02,
        meltingPoint: "271.3 °C",
        boilingPoint: "1564 °C",
        standardState: "Solid",
        isRadioactive: false,
        image: "images/bi.webp"
    },
    Po: {
        atomicNumber: 84,
        name: "Polonium",
        symbol: "Po",
        atomicMass: 209,
        category: "Metalloid",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
        electronegativity: 2.0,
        meltingPoint: "254 °C",
        boilingPoint: "962 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/po.webp"
    },
    At: {
        atomicNumber: 85,
        name: "Astatine",
        symbol: "At",
        atomicMass: 210,
        category: "Halogen",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
        electronegativity: 2.2,
        meltingPoint: "302 °C",
        boilingPoint: "337 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/at.webp"
    },
    Rn: {
        atomicNumber: 86,
        name: "Radon",
        symbol: "Rn",
        atomicMass: 222,
        category: "Noble Gas",
        electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
        electronegativity: "N/A",
        meltingPoint: "-71 °C",
        boilingPoint: "-61.7 °C",
        standardState: "Gas",
        isRadioactive: true,
        image: "images/rn.webp"
    },
    Fr: {
        atomicNumber: 87,
        name: "Francium",
        symbol: "Fr",
        atomicMass: 223,
        category: "Alkali Metal",
        electronConfiguration: "[Rn] 7s¹",
        electronegativity: 0.7,
        meltingPoint: "27 °C",
        boilingPoint: "677 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/fr.webp"
    },
    Ra: {
        atomicNumber: 88,
        name: "Radium",
        symbol: "Ra",
        atomicMass: 226,
        category: "Alkaline Earth Metal",
        electronConfiguration: "[Rn] 7s²",
        electronegativity: 0.9,
        meltingPoint: "700 °C",
        boilingPoint: "1737 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/ra.png"
    },
    Ac: {
        atomicNumber: 89,
        name: "Actinium",
        symbol: "Ac",
        atomicMass: 227,
        category: "Actinide",
        electronConfiguration: "[Rn] 6d¹ 7s²",
        electronegativity: 1.1,
        meltingPoint: "1050 °C",
        boilingPoint: "3198 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/ac.webp"
    },
    Th: {
        atomicNumber: 90,
        name: "Thorium",
        symbol: "Th",
        atomicMass: 232.04,
        category: "Actinide",
        electronConfiguration: "[Rn] 6d² 7s²",
        electronegativity: 1.3,
        meltingPoint: "1750 °C",
        boilingPoint: "4788 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/th.webp"
    },
    Pa: {
        atomicNumber: 91,
        name: "Protactinium",
        symbol: "Pa",
        atomicMass: 231.04,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f² 6d¹ 7s²",
        electronegativity: 1.5,
        meltingPoint: "1568 °C",
        boilingPoint: "4027 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/pa.webp"
    },
    U: {
        atomicNumber: 92,
        name: "Uranium",
        symbol: "U",
        atomicMass: 238.03,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f³ 6d¹ 7s²",
        electronegativity: 1.38,
        meltingPoint: "1135 °C",
        boilingPoint: "4131 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/u.webp"
    },
    Np: {
        atomicNumber: 93,
        name: "Neptunium",
        symbol: "Np",
        atomicMass: 237,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁴ 6d¹ 7s²",
        electronegativity: 1.36,
        meltingPoint: "644 °C",
        boilingPoint: "3902 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/np.png"
    },
    Pu: {
        atomicNumber: 94,
        name: "Plutonium",
        symbol: "Pu",
        atomicMass: 244,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁶ 7s²",
        electronegativity: 1.28,
        meltingPoint: "639.4 °C",
        boilingPoint: "3228 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/pu.webp"
    },
    Am: {
        atomicNumber: 95,
        name: "Americium",
        symbol: "Am",
        atomicMass: 243,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁷ 7s²",
        electronegativity: 1.3,
        meltingPoint: "1176 °C",
        boilingPoint: "2011 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/am.png"
    },
    Cm: {
        atomicNumber: 96,
        name: "Curium",
        symbol: "Cm",
        atomicMass: 247,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁷ 6d¹ 7s²",
        electronegativity: 1.3,
        meltingPoint: "1340 °C",
        boilingPoint: "3110 °C",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/cm.png"
    },
    Bk: {
        atomicNumber: 97,
        name: "Berkelium",
        symbol: "Bk",
        atomicMass: 247,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f⁹ 7s²",
        electronegativity: 1.3,
        meltingPoint: "986 °C",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/bk.png"
    },
    Cf: {
        atomicNumber: 98,
        name: "Californium",
        symbol: "Cf",
        atomicMass: 251,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹⁰ 7s²",
        electronegativity: 1.3,
        meltingPoint: "900 °C",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/cf.png"
    },
    Es: {
        atomicNumber: 99,
        name: "Einsteinium",
        symbol: "Es",
        atomicMass: 252,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹¹ 7s²",
        electronegativity: 1.3,
        meltingPoint: "860 °C",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/es.png"
    },
    Fm: {
        atomicNumber: 100,
        name: "Fermium",
        symbol: "Fm",
        atomicMass: 257,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹² 7s²",
        electronegativity: 1.3,
        meltingPoint: "1527 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/fm.png"
    },
    Md: {
        atomicNumber: 101,
        name: "Mendelevium",
        symbol: "Md",
        atomicMass: 258,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹³ 7s²",
        electronegativity: 1.3,
        meltingPoint: "827 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/md.png"
    },
    No: {
        atomicNumber: 102,
        name: "Nobelium",
        symbol: "No",
        atomicMass: 259,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹⁴ 7s²",
        electronegativity: 1.3,
        meltingPoint: "827 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/no.png"
    },
    Lr: {
        atomicNumber: 103,
        name: "Lawrencium",
        symbol: "Lr",
        atomicMass: 262,
        category: "Actinide",
        electronConfiguration: "[Rn] 5f¹⁴ 7s² 7p¹",
        electronegativity: 1.3,
        meltingPoint: "1627 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        image: "images/lr.png"
    },
    Rf: {
        atomicNumber: 104,
        name: "Rutherfordium",
        symbol: "Rf",
        atomicMass: 267,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d² 7s²",
        electronegativity: "N/A",
        meltingPoint: "2400 °C (estimated)",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/rf.png"
    },
    Db: {
        atomicNumber: 105,
        name: "Dubnium",
        symbol: "Db",
        atomicMass: 270,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d³ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/db.png"
    },
    Sg: {
        atomicNumber: 106,
        name: "Seaborgium",
        symbol: "Sg",
        atomicMass: 271,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁴ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/sg.png"
    },
    Bh: {
        atomicNumber: 107,
        name: "Bohrium",
        symbol: "Bh",
        atomicMass: 274,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁵ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/bh.png"
    },
    Hs: {
        atomicNumber: 108,
        name: "Hassium",
        symbol: "Hs",
        atomicMass: 277,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁶ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/hs.png"
    },
    Mt: {
        atomicNumber: 109,
        name: "Meitnerium",
        symbol: "Mt",
        atomicMass: 278,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁷ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/mt.png"
    },
    Ds: {
        atomicNumber: 110,
        name: "Darmstadtium",
        symbol: "Ds",
        atomicMass: 281,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁸ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/ds.png"
    },
    Rg: {
        atomicNumber: 111,
        name: "Roentgenium",
        symbol: "Rg",
        atomicMass: 282,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d⁹ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/rg.png"
    },
    Cn: {
        atomicNumber: 112,
        name: "Copernicium",
        symbol: "Cn",
        atomicMass: 285,
        category: "Transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Gas",
        isRadioactive: true,
        image: "images/cn.png"
    },
    Nh: {
        atomicNumber: 113,
        name: "Nihonium",
        symbol: "Nh",
        atomicMass: 286,
        category: "Post-transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/nh.png"
    },
    Fl: {
        atomicNumber: 114,
        name: "Flerovium",
        symbol: "Fl",
        atomicMass: 289,
        category: "Post-transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/fl.png"
    },
    Mc: {
        atomicNumber: 115,
        name: "Moscovium",
        symbol: "Mc",
        atomicMass: 290,
        category: "Post-transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/mc.png"
    },
    Lv: {
        atomicNumber: 116,
        name: "Livermorium",
        symbol: "Lv",
        atomicMass: 293,
        category: "Post-transition Metal",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/lv.png"
    },
    Ts: {
        atomicNumber: 117,
        name: "Tennessine",
        symbol: "Ts",
        atomicMass: 294,
        category: "Halogen",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Solid",
        isRadioactive: true,
        image: "images/ts.png"
    },
    Og: {
        atomicNumber: 118,
        name: "Oganesson",
        symbol: "Og",
        atomicMass: 294,
        category: "Noble Gas",
        electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
        electronegativity: "N/A",
        meltingPoint: "N/A",
        boilingPoint: "N/A",
        standardState: "Gas",
        isRadioactive: true,
        image: "images/og.png"
    }

};

// script.js

/******************************************
  Mapping of existing "display category" => CSS classes
 ******************************************/
  const categoryToClass = {
    "Alkali Metal": "alkali-metal",
    "Alkaline Earth Metal": "alkaline-earth-metal",
    "Transition Metal": "transition-metal",
    "Lanthanide": "lanthanoid",
    "Lanthanides": "lanthanoid", // Just in case user types plural
    "Actinide": "actinoid",
    "Actinides": "actinoid",
    "Metalloid": "metalloid",
    "Halogen": "halogen",
    "Noble Gas": "noble-gas",
    "Post-transition Metal": "other-metal",
    "Nonmetal": "nonmetal",
  };

  /******************************************
  New "search filters" for states, radioactivity, etc.
  We highlight all elements matching a particular
  function-based filter.
 ******************************************/
const specialFilters = {
    // user types "solid"
    "solid": (data) => data.standardState?.toLowerCase() === "solid",
  
    // user types "liquid"
    "liquid": (data) => data.standardState?.toLowerCase() === "liquid",
  
    // user types "gas"
    "gas": (data) => data.standardState?.toLowerCase() === "gas",
  
    // user types "radioactive"
    // We'll rely on isRadioactive: true in elementsData
    "radioactive": (data) => data.isRadioactive === true,
  
    // user types "metal"
    // We'll consider anything whose `category` includes "Metal" 
    // (this will include Alkali Metal, Alkaline Earth Metal, 
    //  Transition Metal, Post-transition Metal, etc.)
    "metal": (data) => data.category?.toLowerCase().includes("metal"),
  };
  
  
/******************************************
  Remove all .highlight from the document
 ******************************************/
  function removeAllHighlights() {
    document.querySelectorAll('.highlight').forEach(el => {
      el.classList.remove('highlight');
    });
  }


  
  /******************************************
  The main search function
 ******************************************/
function handleSearch(query) {
    const searchQuery = query.trim().toLowerCase();
    if (!searchQuery) return;
  
    // 1) Check if numeric => atomic number
    if (!isNaN(searchQuery)) {
      const atomicNum = parseInt(searchQuery);
      for (const [symbol, data] of Object.entries(elementsData)) {
        if (data.atomicNumber === atomicNum) {
          openElementModal(symbol);
          return;
        }
      }
      alert(`No element found with atomic number: ${atomicNum}`);
      return;
    }
  
    // 2) Check if user typed a known "categoryToClass" (e.g. "Alkali Metal")
    //    We'll do a case-insensitive match
    for (const catName of Object.keys(categoryToClass)) {
      if (catName.toLowerCase() === searchQuery) {
        highlightCategory(categoryToClass[catName]);
        return;
      }
    }
  
    // 3) Check if user typed a special filter key (solid, liquid, gas, metal, radioactive, etc.)
    //    We'll do a case-insensitive match
    for (const filterKey of Object.keys(specialFilters)) {
      if (filterKey.toLowerCase() === searchQuery) {
        highlightByFilter(specialFilters[filterKey]);
        return;
      }
    }
  
    // 4) Check exact match for element name
    for (const [symbol, data] of Object.entries(elementsData)) {
      if (data.name.toLowerCase() === searchQuery) {
        openElementModal(symbol);
        return;
      }
    }
  
    // 5) Check exact match for element symbol
    for (const [symbol, data] of Object.entries(elementsData)) {
      if (symbol.toLowerCase() === searchQuery) {
        openElementModal(symbol);
        return;
      }
    }
  
    // 6) No match
    alert(
      `No match found for: "${query}".\n` +
      `Try atomic number, symbol, full name, ` +
      `or these categories: ${Object.keys(categoryToClass).join(", ")}, ` +
      `${Object.keys(specialFilters).join(", ")}.`
    );
  }
  
// logic of opening the modal
function openElementModal(symbol) {
    const elementData = elementsData[symbol];
    if (!elementData) {
        alert(`No data found for symbol: ${symbol}`);
        return;
    }

    // Update modal header with name and symbol
    document.getElementById('elementModalLabel').textContent = `${elementData.name} (${elementData.symbol})`;

    const elementImage = document.getElementById('elementImage');
    elementImage.src = elementData.image || '';
    elementImage.alt = `${elementData.name} Image`;

    // Populate other modal fields as before
    document.getElementById('elementAtomicNumber').textContent = elementData.atomicNumber || '--';
    document.getElementById('elementAtomicMass').textContent = elementData.atomicMass || '--';
    document.getElementById('elementCategory').textContent = elementData.category || '--';
    document.getElementById('elementElectronConfiguration').textContent = elementData.electronConfiguration || '--';
    document.getElementById('elementElectronegativity').textContent = elementData.electronegativity || '--';
    document.getElementById('elementMeltingPoint').textContent = elementData.meltingPoint || '--';
    document.getElementById('elementBoilingPoint').textContent = elementData.boilingPoint || '--';
    document.getElementById('elementStandardState').textContent = elementData.standardState || '--';
    document.getElementById('elementRadioactive').textContent = elementData.isRadioactive ? 'Yes' : 'No';
    document.getElementById('learnMoreLink').href = `details/${elementData.name.toLowerCase()}.html`;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('elementModal'));
    modal.show();
}


  function fadeOutAndRedirect(destinationUrl) {
    document.body.classList.add('fade-out');
  
    // When transition finishes, redirect
    document.body.addEventListener('transitionend', function onTransitionEnd() {
      document.body.removeEventListener('transitionend', onTransitionEnd);
      window.location.href = destinationUrl; 
    });
  }

  function fadeOutAndOpenInNewTab(destinationUrl) {
    document.body.classList.add('fade-out');
    document.body.addEventListener('transitionend', function onTransitionEnd() {
      document.body.removeEventListener('transitionend', onTransitionEnd);
      window.open(destinationUrl, '_blank');
    });
  }
  

  /******************************************
  Highlight elements via a function-based filter
  (used for "radioactive", "solid", "metal", etc.)
 ******************************************/
function highlightByFilter(filterFn) {
    removeAllHighlights();
  
    // Gather all elements on the table
    const allElementDivs = document.querySelectorAll('.element');
    let foundAny = false;
  
    allElementDivs.forEach(el => {
      const symbol = el.querySelector('.symbol')?.textContent.trim();
      if (!symbol) return;
  
      // Check if this element's data matches the filter
      const data = elementsData[symbol];
      if (data && filterFn(data)) {
        el.classList.add('highlight');
        foundAny = true;
      }
    });
  
    if (!foundAny) {
      alert("No elements matched your filter.");
      return;
    }
  
    // Remove after 3 seconds
    setTimeout(() => {
      allElementDivs.forEach(el => el.classList.remove('highlight'));
    }, 3000);
  }

  /******************************************
  Attach event to the form submission
 ******************************************/
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value;
    handleSearch(query);
  });
  
  /******************************************
    Add click listeners to each element card
   ******************************************/
  document.querySelectorAll('.element').forEach(el => {
    el.addEventListener('click', () => {
      const symbol = el.querySelector('.symbol').textContent.trim();
      openElementModal(symbol);
    });
  });
  
  // Attach click listeners to category buttons
document.querySelectorAll('.category-highlight').forEach(button => {
    button.addEventListener('click', () => {
        const categoryClass = button.getAttribute('data-category');
        highlightCategory(categoryClass);
    });
});

// Function to highlight elements by category
function highlightCategory(categoryClass) {
    // Remove previous highlights
    removeAllHighlights();

    // Find all elements with the specified category class
    const elementsToHighlight = document.querySelectorAll(`.${categoryClass}`);
    if (elementsToHighlight.length === 0) {
        alert(`No elements found for category: ${categoryClass}`);
        return;
    }

    // Add the highlight class
    elementsToHighlight.forEach(el => el.classList.add('highlight'));

    // Remove the highlight after 3 seconds
    setTimeout(() => {
        elementsToHighlight.forEach(el => el.classList.remove('highlight'));
    }, 3000);
}


const searchInput = document.getElementById("searchInput");
const searchRecommendations = document.getElementById("searchRecommendations");
let activeIndex = -1; // For keyboard navigation

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Highlight matching text
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<strong>$1</strong>");
}

// Render recommendations
function renderRecommendations(query) {
    searchRecommendations.innerHTML = ""; // Clear previous recommendations
    if (!query) {
        searchRecommendations.style.display = "none";
        activeIndex = -1;
        return;
    }

    const filteredElements = Object.values(elementsData).filter(element => {
        return (
            element.name.toLowerCase().includes(query) ||
            element.symbol.toLowerCase().includes(query) ||
            element.atomicNumber.toString().startsWith(query)
        );
    });

    if (filteredElements.length === 0) {
        const noResultItem = document.createElement("a");
        noResultItem.className = "dropdown-item disabled";
        noResultItem.textContent = "No results found";
        searchRecommendations.appendChild(noResultItem);
        searchRecommendations.style.display = "block";
        return;
    }

    filteredElements.forEach((element, index) => {
        const recommendationItem = document.createElement("a");
        recommendationItem.className = "dropdown-item";
        recommendationItem.href = "#";
        recommendationItem.innerHTML = `${highlightMatch(element.name, query)} (${highlightMatch(element.symbol, query)}) : ${highlightMatch(element.atomicNumber.toString(), query)}`;

        // Handle click on a recommendation
        recommendationItem.addEventListener("click", (e) => {
            e.preventDefault();
            searchInput.value = element.name; // Populate the input with the clicked item
            searchRecommendations.innerHTML = ""; // Clear recommendations
            searchRecommendations.style.display = "none";
        });

        searchRecommendations.appendChild(recommendationItem);
    });

    searchRecommendations.style.display = "block";
    activeIndex = -1; // Reset active index for keyboard navigation
}

// Debounced input event listener
searchInput.addEventListener(
    "input",
    debounce(() => {
        const query = searchInput.value.trim().toLowerCase();
        renderRecommendations(query);
    }, 300)
);

// Keyboard navigation for recommendations
searchInput.addEventListener("keydown", (e) => {
    const items = Array.from(searchRecommendations.querySelectorAll(".dropdown-item:not(.disabled)"));
    if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % items.length;
        items.forEach((item, index) => {
            item.classList.toggle("active", index === activeIndex);
        });
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        items.forEach((item, index) => {
            item.classList.toggle("active", index === activeIndex);
        });
    } else if (e.key === "Enter" && activeIndex >= 0) {
        e.preventDefault();
        items[activeIndex].click();
    }
});
