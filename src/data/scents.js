// Import all images directly
import amberImg from '../assets/images/amber.png';
import bergamotImg from '../assets/images/bergamot.png';
import cedarwoodImg from '../assets/images/cedarwood.png';
import grapefruitImg from '../assets/images/grapefruit.png';
import jasmineImg from '../assets/images/jasmine.png';
import lavenderImg from '../assets/images/lavender.png';
import lemonImg from '../assets/images/lemon.png';
import muskImg from '../assets/images/musk.png';
import patchouliImg from '../assets/images/patchouli.png';
import roseImg from '../assets/images/rose.png';
import sandalwoodImg from '../assets/images/sandalwood.png';
import seasaltImg from '../assets/images/seasalt.png';
import vanillaImg from '../assets/images/vanilla.png';
import vetiverImg from '../assets/images/vetiver.png';

export const ScentFamily = {
  Citrus: "Citrus",
  Floral: "Floral",
  Woody: "Woody",
  Oriental: "Oriental",
  Fresh: "Fresh",
};

// Map of image names to imported images
const imageMap = {
  amber: amberImg,
  bergamot: bergamotImg,
  cedarwood: cedarwoodImg,
  grapefruit: grapefruitImg,
  jasmine: jasmineImg,
  lavender: lavenderImg,
  lemon: lemonImg,
  musk: muskImg,
  patchouli: patchouliImg,
  rose: roseImg,
  sandalwood: sandalwoodImg,
  seasalt: seasaltImg,
  vanilla: vanillaImg,
  vetiver: vetiverImg,
};

// Function to get image path
const imagePath = (name) => imageMap[name.toLowerCase()] || '';

export const scents = [
  {
    id: "amber",
    name: "Amber",
    description: "Warm, rich, and slightly sweet with a hint of vanilla and powder.",
    family: ScentFamily.Oriental,
    image: imagePath("amber"),
  },
  {
    id: "bergamot",
    name: "Bergamot",
    description: "Bright, zesty citrus with a subtle floral undertone.",
    family: ScentFamily.Citrus,
    image: imagePath("bergamot"),
  },
  {
    id: "cedarwood",
    name: "Cedarwood",
    description: "Dry, woody, and slightly sweet with a hint of pencil shavings.",
    family: ScentFamily.Woody,
    image: imagePath("cedarwood"),
  },
  {
    id: "grapefruit",
    name: "Grapefruit",
    description: "Tangy, bitter-sweet citrus with a refreshing zing.",
    family: ScentFamily.Citrus,
    image: imagePath("grapefruit"),
  },
  {
    id: "jasmine",
    name: "Jasmine",
    description: "Rich, sweet, and intensely floral with a hint of fruit.",
    family: ScentFamily.Floral,
    image: imagePath("jasmine"),
  },
  {
    id: "lavender",
    name: "Lavender",
    description: "Herbal, floral, and slightly sweet with a clean, calming aroma.",
    family: ScentFamily.Fresh,
    image: imagePath("lavender"),
  },
  {
    id: "lemon",
    name: "Lemon",
    description: "Bright, sharp citrus with a clean, refreshing quality.",
    family: ScentFamily.Citrus,
    image: imagePath("lemon"),
  },
  {
    id: "musk",
    name: "Musk",
    description: "Warm, sensual, and slightly animalic with a powdery softness.",
    family: ScentFamily.Oriental,
    image: imagePath("musk"),
  },
  {
    id: "patchouli",
    name: "Patchouli",
    description: "Earthy, woody, and slightly sweet with a hint of spice.",
    family: ScentFamily.Woody,
    image: imagePath("patchouli"),
  },
  {
    id: "rose",
    name: "Rose",
    description: "Rich, sweet, and deeply floral with a hint of honey.",
    family: ScentFamily.Floral,
    image: imagePath("rose"),
  },
  {
    id: "sandalwood",
    name: "Sandalwood",
    description: "Creamy, woody, and slightly sweet with a milky softness.",
    family: ScentFamily.Woody,
    image: imagePath("sandalwood"),
  },
  {
    id: "seasalt",
    name: "Sea Salt",
    description: "Clean, ozonic, and mineral with a hint of fresh air.",
    family: ScentFamily.Fresh,
    image: imagePath("seasalt"),
  },
  {
    id: "vanilla",
    name: "Vanilla",
    description: "Sweet, warm, and comforting with a hint of bakery goods.",
    family: ScentFamily.Oriental,
    image: imagePath("vanilla"),
  },
  {
    id: "vetiver",
    name: "Vetiver",
    description: "Earthy, woody, and slightly smoky with a hint of citrus.",
    family: ScentFamily.Woody,
    image: imagePath("vetiver"),
  },
];
