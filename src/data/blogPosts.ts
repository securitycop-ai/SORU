export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  image: string
  excerpt: string
  content: (string | { type: "image"; src: string; alt: string })[]
  embed?: { type: "iframe"; src: string; height: string; width: string }
  tag?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-are-building-soru",
    title: "Why I Am Building SORU",
    author: "Valli",
    date: "November 2026",
    image: "/images/placeholder.svg",
    tag: "Our Story",
    excerpt: "SORU started with a simple question: why has no one built a modern, scalable Indian food brand the way McDonald's built burgers? This is that story.",
    content: [
      "SORU started with a simple question: why has no one built a modern, scalable Indian food brand the way McDonald's built burgers?",
      "Growing up in Chennai, food was inseparable from daily life. The aromas of filter kaapi in the morning, the rhythm of grinding idli batter, the complex spicing of a Chettinad curry — these were not special occasions. They were just life.",
      "When I moved to the UK, I found myself looking for that food and not finding it in a form that felt right. The Indian food that existed here was either too simplified, too anglicised, or too expensive for everyday eating.",
      "So I started building the brand I wished existed. That brand is SORU.",
    ],
  },
  {
    slug: "real-chennai-food-made-for-the-world",
    title: "Real Chennai Food. Made for the World.",
    author: "Valli",
    date: "November 2026",
    image: "/images/placeholder.svg",
    tag: "Our Values",
    excerpt: "What it means to build a global Indian food brand without losing what makes the food worth eating.",
    content: [
      "What it means to build a global Indian food brand without losing what makes the food worth eating.",
      "Authenticity and scalability are not opposites. McDonald's proved that. What it has not done — what no one has done properly — is apply that model to Indian food with real respect for where the food comes from.",
      "SORU is our answer to that. Chennai food, served consistently, at scale, without compromise.",
    ],
  },
  {
    slug: "the-three-pillars-of-soru",
    title: "SORU Kitchen, Easy Cook, and Naturals: Why Three?",
    author: "Valli",
    date: "November 2026",
    image: "/images/placeholder.svg",
    tag: "Our Story",
    excerpt: "SORU operates across three connected business areas. Here is why that structure makes sense — and how they reinforce each other.",
    content: [
      "SORU operates across three connected business areas: SORU Kitchen, SORU Easy Cook, and SORU Naturals.",
      "SORU Kitchen is the restaurant and delivery side. Fast-casual, counter service, consistent recipes. Chennai food made quickly and affordably.",
      "SORU Easy Cook is the meal kit range for people who want to cook Tamil food at home in 10 to 15 minutes. Bachelor-friendly, clearly instructed, real ingredients.",
      "SORU Naturals is the packaged health food range: sathu maavu, millet products, podis, and spice blends. Rooted in traditional Tamil food knowledge.",
      "Three pillars. One brand. All coming from the same place.",
    ],
  },
];
