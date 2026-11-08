// NEON ECOSYSTEM - Sandboxels Mod

elements.neon_slime = {
    color: ["#39ffb6", "#16d9c5", "#7dffef"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1080,
    viscosity: 18000,
    temp: 22,
    reactions: {
        "water": {
            elem1: "glow_water",
            elem2: null,
            chance: 0.08
        },
        "sand": {
            elem1: "glow_sand",
            elem2: null,
            chance: 0.04
        },
        "salt": {
            elem1: "neon_slime",
            elem2: "glow_crystal",
            chance: 0.015
        }
    }
};

elements.glow_water = {
    color: ["#65f7ff", "#39c9ff", "#a2ffff"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1005,
    viscosity: 2,
    temp: 22,
    reactions: {
        "plant": {
            elem1: "glow_water",
            elem2: "glow_moss",
            chance: 0.12
        },
        "wood": {
            elem1: "glow_water",
            elem2: "glow_moss",
            chance: 0.015
        },
        "dirt": {
            elem1: "glow_water",
            elem2: "glow_moss",
            chance: 0.025
        }
    }
};

elements.glow_moss = {
    color: ["#65ff72", "#2bdc83", "#a3ff4f"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 900
};

elements.glow_crystal = {
    color: ["#b56bff", "#8c45e8", "#e1a1ff"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 2600,
    hardness: 0.95
};

elements.glow_sand = {
    color: ["#e4a7ff", "#bd82ff", "#f4c4ff"],
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 1550
};

elements.aurora_gas = {
    color: ["#67ffdb", "#6b8dff", "#d18cff"],
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 0.9,
    temp: 80,
    tempLow: -80,
    stateLow: "aurora_ice"
};

elements.aurora_ice = {
    color: "#a8dfff",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 920,
    temp: -100
};

// Custom tool
elements.crystal_painter = {
    color: "#c477ff",
    tool: function(pixel) {
        if (pixel && pixel.element !== "crystal_painter") {
            pixel.element = "glow_crystal";
            pixel.color = pixelColorPick(
                pixel,
                elements.glow_crystal.color
            );
        }
    },
    category: "tools"
};

// Reactions with existing elements
if (!elements.water.reactions) {
    elements.water.reactions = {};
}

elements.water.reactions.neon_slime = {
    elem1: "glow_water",
    elem2: null,
    chance: 0.08
};

if (!elements.sand.reactions) {
    elements.sand.reactions = {};
}

elements.sand.reactions.neon_slime = {
    elem1: "glow_sand",
    elem2: null,
    chance: 0.04
};
