// We'll use the public folder images instead of imports
// This allows us to access all the new images

export const ScentFamily = {
  Citrus: "Citrus",
  Floral: "Floral",
  Woody: "Woody",
  Oriental: "Oriental",
  Fresh: "Fresh",
};

// Function to get image path from public folder
const imagePath = (name) => `/assets/images/${name.toLowerCase()}.png`;

export const scents = [
  // Citrus Family
  {
    id: "bergamot",
    name: "Bergamot",
    description: "Bright, zesty citrus with a subtle floral undertone.",
    family: ScentFamily.Citrus,
    image: imagePath("bergamot"),
  },
  {
    id: "grapefruit",
    name: "Grapefruit",
    description: "Tangy, bitter-sweet citrus with a refreshing zing.",
    family: ScentFamily.Citrus,
    image: imagePath("grapefruit"),
  },
  {
    id: "lemon",
    name: "Lemon",
    description: "Bright, sharp citrus with a clean, refreshing quality.",
    family: ScentFamily.Citrus,
    image: imagePath("lemon"),
  },
  {
    id: "lime",
    name: "Lime",
    description: "Vibrant, tangy citrus with a sharp, invigorating character.",
    family: ScentFamily.Citrus,
    image: imagePath("lime"),
  },
  {
    id: "mandarin",
    name: "Mandarin",
    description: "Sweet, juicy citrus with a honeyed warmth and gentle acidity.",
    family: ScentFamily.Citrus,
    image: imagePath("madarin"),
  },

  // Floral Family
  {
    id: "jasmine",
    name: "Jasmine",
    description: "Rich, sweet, and intensely floral with a hint of fruit.",
    family: ScentFamily.Floral,
    image: imagePath("jasmine"),
  },
  {
    id: "rose",
    name: "Rose",
    description: "Rich, sweet, and deeply floral with a hint of honey.",
    family: ScentFamily.Floral,
    image: imagePath("rose"),
  },
  {
    id: "lavender",
    name: "Lavender",
    description: "Herbal, floral, and slightly sweet with a clean, calming aroma.",
    family: ScentFamily.Floral,
    image: imagePath("lavender"),
  },
  {
    id: "lillyofthevalley",
    name: "Lily of the Valley",
    description: "Delicate, green, and sweetly floral with a dewy freshness.",
    family: ScentFamily.Floral,
    image: imagePath("lillyofthevalley"),
  },
  {
    id: "tuberose",
    name: "Tuberose",
    description: "Intensely sweet, creamy floral with a heady, narcotic quality.",
    family: ScentFamily.Floral,
    image: imagePath("tuberose"),
  },
  {
    id: "orangeblossom",
    name: "Orange Blossom",
    description: "Bright, honeyed floral with a delicate citrus undertone.",
    family: ScentFamily.Floral,
    image: imagePath("orangeblossom"),
  },
  {
    id: "peony",
    name: "Peony",
    description: "Fresh, airy floral with a slightly sweet and rosy character.",
    family: ScentFamily.Floral,
    image: imagePath("peony"),
  },
  {
    id: "gardenia",
    name: "Gardenia",
    description: "Creamy, opulent white floral with a tropical sweetness.",
    family: ScentFamily.Floral,
    image: imagePath("gardenia"),
  },
  {
    id: "violet",
    name: "Violet",
    description: "Delicate, powdery floral with a slightly sweet and green character.",
    family: ScentFamily.Floral,
    image: imagePath("violet"),
  },
  {
    id: "ylangylang",
    name: "Ylang Ylang",
    description: "Exotic, sweet floral with a creamy, banana-like richness.",
    family: ScentFamily.Floral,
    image: imagePath("ylangylang"),
  },

  // Woody Family
  {
    id: "cedarwood",
    name: "Cedarwood",
    description: "Dry, woody, and slightly sweet with a hint of pencil shavings.",
    family: ScentFamily.Woody,
    image: imagePath("cedarwood"),
  },
  {
    id: "sandalwood",
    name: "Sandalwood",
    description: "Creamy, woody, and slightly sweet with a milky softness.",
    family: ScentFamily.Woody,
    image: imagePath("sandalwood"),
  },
  {
    id: "vetiver",
    name: "Vetiver",
    description: "Earthy, woody, and slightly smoky with a hint of citrus.",
    family: ScentFamily.Woody,
    image: imagePath("vetiver"),
  },
  {
    id: "patchouli",
    name: "Patchouli",
    description: "Earthy, woody, and slightly sweet with a hint of spice.",
    family: ScentFamily.Woody,
    image: imagePath("patchouli"),
  },
  {
    id: "oud",
    name: "Oud",
    description: "Rich, complex woody note with animalic, balsamic, and smoky facets.",
    family: ScentFamily.Woody,
    image: imagePath("oud"),
  },
  {
    id: "oakmoss",
    name: "Oakmoss",
    description: "Earthy, green, and slightly musty with a forest-like character.",
    family: ScentFamily.Woody,
    image: imagePath("oakmoss"),
  },

  // Oriental Family
  {
    id: "amber",
    name: "Amber",
    description: "Warm, rich, and slightly sweet with a hint of vanilla and powder.",
    family: ScentFamily.Oriental,
    image: imagePath("amber"),
  },
  {
    id: "vanilla",
    name: "Vanilla",
    description: "Sweet, warm, and comforting with a hint of bakery goods.",
    family: ScentFamily.Oriental,
    image: imagePath("vanilla"),
  },
  {
    id: "musk",
    name: "Musk",
    description: "Warm, sensual, and slightly animalic with a powdery softness.",
    family: ScentFamily.Oriental,
    image: imagePath("musk"),
  },
  {
    id: "tonkabean",
    name: "Tonka Bean",
    description: "Sweet, warm, and almond-like with hints of vanilla and tobacco.",
    family: ScentFamily.Oriental,
    image: imagePath("tonkabean"),
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    description: "Warm, spicy, and sweet with a comforting, familiar quality.",
    family: ScentFamily.Oriental,
    image: imagePath("cinnamon"),
  },
  {
    id: "cardamom",
    name: "Cardamom",
    description: "Warm, spicy, and aromatic with a bright, citrusy undertone.",
    family: ScentFamily.Oriental,
    image: imagePath("cardamom"),
  },
  {
    id: "clove",
    name: "Clove",
    description: "Intense, warm spice with a sweet, slightly medicinal character.",
    family: ScentFamily.Oriental,
    image: imagePath("clove"),
  },
  {
    id: "nutmeg",
    name: "Nutmeg",
    description: "Warm, spicy, and slightly sweet with a woody, earthy quality.",
    family: ScentFamily.Oriental,
    image: imagePath("nutmeg"),
  },
  {
    id: "frankincense",
    name: "Frankincense",
    description: "Resinous, woody, and slightly citrusy with a spiritual, meditative quality.",
    family: ScentFamily.Oriental,
    image: imagePath("frankincense"),
  },
  {
    id: "myrrh",
    name: "Myrrh",
    description: "Warm, balsamic resin with a slightly medicinal, earthy character.",
    family: ScentFamily.Oriental,
    image: imagePath("myrrh"),
  },
  {
    id: "benzoin",
    name: "Benzoin",
    description: "Sweet, balsamic resin with vanilla-like warmth and a hint of cinnamon.",
    family: ScentFamily.Oriental,
    image: imagePath("benzoin"),
  },
  {
    id: "labdanum",
    name: "Labdanum",
    description: "Rich, ambery resin with leathery, animalic, and honeyed facets.",
    family: ScentFamily.Oriental,
    image: imagePath("labdanum"),
  },
  {
    id: "ambergris",
    name: "Ambergris",
    description: "Marine, sweet, and animalic with a unique salty-sweet character.",
    family: ScentFamily.Oriental,
    image: imagePath("ambergris"),
  },

  // Fresh Family
  {
    id: "seasalt",
    name: "Sea Salt",
    description: "Clean, ozonic, and mineral with a hint of fresh air.",
    family: ScentFamily.Fresh,
    image: imagePath("seasalt"),
  },
  {
    id: "mint",
    name: "Mint",
    description: "Cool, refreshing, and invigorating with a clean, aromatic quality.",
    family: ScentFamily.Fresh,
    image: imagePath("mint"),
  },
  {
    id: "greentea",
    name: "Green Tea",
    description: "Fresh, slightly bitter, and delicately aromatic with a calming character.",
    family: ScentFamily.Fresh,
    image: imagePath("greentea"),
  },
  {
    id: "galbanum",
    name: "Galbanum",
    description: "Intensely green, sharp, and slightly bitter with a natural, earthy quality.",
    family: ScentFamily.Fresh,
    image: imagePath("galbanum"),
  },
  {
    id: "tomatoleaf",
    name: "Tomato Leaf",
    description: "Green, sharp, and slightly spicy with a distinctive garden-fresh character.",
    family: ScentFamily.Fresh,
    image: imagePath("tomatoleaf"),
  },
  {
    id: "calone",
    name: "Calone",
    description: "Fresh, aquatic, and ozonic with a distinctive sea breeze character.",
    family: ScentFamily.Fresh,
    image: imagePath("calone"),
  },
  {
    id: "ozonic",
    name: "Ozonic",
    description: "Clean, airy, and electric with the scent of fresh air after a thunderstorm.",
    family: ScentFamily.Fresh,
    image: imagePath("ozonic"),
  },

  // Gourmand (subset of Oriental)
  {
    id: "caramel",
    name: "Caramel",
    description: "Sweet, rich, and buttery with a cooked sugar warmth.",
    family: ScentFamily.Oriental,
    image: imagePath("caramel"),
  },
  {
    id: "chocolate",
    name: "Chocolate",
    description: "Rich, sweet, and slightly bitter with a deep, comforting character.",
    family: ScentFamily.Oriental,
    image: imagePath("chocolate"),
  },
  {
    id: "coffee",
    name: "Coffee",
    description: "Rich, roasted, and slightly bitter with a warm, energizing quality.",
    family: ScentFamily.Oriental,
    image: imagePath("coffee"),
  },
  {
    id: "praline",
    name: "Praline",
    description: "Sweet, nutty, and caramelized with a rich, gourmand character.",
    family: ScentFamily.Oriental,
    image: imagePath("praline"),
  },
  {
    id: "toffee",
    name: "Toffee",
    description: "Sweet, buttery, and caramelized with a rich, creamy quality.",
    family: ScentFamily.Oriental,
    image: imagePath("toffee"),
  },
  {
    id: "almond",
    name: "Almond",
    description: "Sweet, nutty, and slightly cherry-like with a comforting warmth.",
    family: ScentFamily.Oriental,
    image: imagePath("almond"),
  },
  {
    id: "coconut",
    name: "Coconut",
    description: "Creamy, sweet, and tropical with a milky, slightly woody character.",
    family: ScentFamily.Oriental,
    image: imagePath("coconut"),
  },

  // Fruity (can be part of various families)
  {
    id: "apple",
    name: "Apple",
    description: "Crisp, juicy, and slightly sweet with a fresh, orchard-like quality.",
    family: ScentFamily.Fresh,
    image: imagePath("apple"),
  },
  {
    id: "pear",
    name: "Pear",
    description: "Juicy, sweet, and slightly floral with a delicate, fresh character.",
    family: ScentFamily.Fresh,
    image: imagePath("pear"),
  },
  {
    id: "peach",
    name: "Peach",
    description: "Sweet, juicy, and slightly fuzzy with a warm, summery character.",
    family: ScentFamily.Fresh,
    image: imagePath("peach"),
  },
  {
    id: "berries",
    name: "Berries",
    description: "Sweet, juicy, and slightly tart with a vibrant, jammy quality.",
    family: ScentFamily.Fresh,
    image: imagePath("berries"),
  },
  {
    id: "plum",
    name: "Plum",
    description: "Sweet, juicy, and slightly wine-like with a rich, fruity depth.",
    family: ScentFamily.Fresh,
    image: imagePath("plum"),
  },
  {
    id: "fig",
    name: "Fig",
    description: "Sweet, jammy, and slightly green with a unique, creamy character.",
    family: ScentFamily.Fresh,
    image: imagePath("fig"),
  },

  // Spicy (can be part of Oriental or Woody)
  {
    id: "blackpepper",
    name: "Black Pepper",
    description: "Sharp, spicy, and slightly woody with a dry, aromatic bite.",
    family: ScentFamily.Woody,
    image: imagePath("blackpepper"),
  },
  {
    id: "pinkpepper",
    name: "Pink Pepper",
    description: "Spicy, fruity, and slightly rosy with a bright, energetic character.",
    family: ScentFamily.Woody,
    image: imagePath("pinkpepper"),
  },
  {
    id: "ginger",
    name: "Ginger",
    description: "Spicy, warm, and slightly citrusy with a fresh, invigorating quality.",
    family: ScentFamily.Fresh,
    image: imagePath("ginger"),
  },

  // Powdery
  {
    id: "talc",
    name: "Talc",
    description: "Soft, clean, and comforting with a nostalgic, baby-powder quality.",
    family: ScentFamily.Oriental,
    image: imagePath("talc"),
  },

  // Miscellaneous
  {
    id: "cacao",
    name: "Cacao",
    description: "Rich, bitter, and earthy with a raw, unprocessed chocolate character.",
    family: ScentFamily.Oriental,
    image: imagePath("cacao"),
  }
];
