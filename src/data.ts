export type Note = {
  id:number
  title: string;
  content: string;
  date: Date;
  tags: Array<string>,
  pinned: boolean;
  isFavorite: boolean;
  textColor: string;
  backgroundColor: string;
};
export const notes:Note[] = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    content:
      "JavaScript is a versatile programming language used for web development. It allows developers to create dynamic and interactive web pages.",
    date: new Date("2023-01-15"),
    tags: ["JavaScript", "Web Development", "Programming"],
    pinned: true,
    isFavorite: true,
    textColor: "#ffffff",
    backgroundColor: "#2E8B57",
  },
  {
    id: 2,
    title: "Understanding Cybersecurity",
    content:
      "Cybersecurity involves protecting systems, networks, and data from digital attacks. Common practices include using firewalls, encryption, and multi-factor authentication.",
    date: new Date("2023-02-10"),
    tags: ["Cybersecurity", "Networking", "Encryption"],
    pinned: false,
    isFavorite: true,
    textColor: "#000000",
    backgroundColor: "#FFD700",
  },
  {
    id: 3,
    title: "Cloud Computing Basics",
    content:
      "Cloud computing allows users to access and store data over the internet instead of on local hardware. Popular cloud providers include AWS, Google Cloud, and Microsoft Azure.",
    date: new Date("2023-03-05"),
    tags: ["Cloud Computing", "AWS", "Google Cloud"],
    pinned: true,
    isFavorite: false,
    textColor: "#ffffff",
    backgroundColor: "#87CEEB",
  },
  {
    id: 4,
    title: "Getting Started with Python",
    content:
      "Python is a high-level programming language known for its simplicity and readability. It is widely used in data science, machine learning, and web development.",
    date: new Date("2023-04-20"),
    tags: ["Python", "Programming", "Data Science"],
    pinned: false,
    isFavorite: false,
    textColor: "#000000",
    backgroundColor: "#FFA07A",
  },
  {
    id: 5,
    title: "Introduction to Machine Learning",
    content:
      "Machine learning is a subset of artificial intelligence that enables systems to learn from data and improve over time. Common algorithms include linear regression and neural networks.",
    date: new Date("2023-05-12"),
    tags: ["Machine Learning", "AI", "Data Science"],
    pinned: true,
    isFavorite: true,
    textColor: "#ffffff",
    backgroundColor: "#6A5ACD",
  },
  {
    id: 6,
    title: "Database Management with SQL",
    content:
      "SQL (Structured Query Language) is used to manage and manipulate relational databases. It is essential for tasks like querying, updating, and deleting data.",
    date: new Date("2023-06-18"),
    tags: ["SQL", "Database", "Backend"],
    pinned: false,
    isFavorite: false,
    textColor: "#ffffff",
    backgroundColor: "#383D42",
  },
  {
    id: 7,
    title: "DevOps Principles",
    content:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and deliver high-quality software.",
    date: new Date("2023-07-25"),
    tags: ["DevOps", "CI/CD", "Automation"],
    pinned: true,
    isFavorite: true,
    textColor: "#000000",
    backgroundColor: "#FF6347",
  },
  {
    id: 8,
    title: "Blockchain Technology",
    content:
      "Blockchain is a decentralized digital ledger used to record transactions across multiple computers. It is the underlying technology behind cryptocurrencies like Bitcoin.",
    date: new Date("2023-08-30"),
    tags: ["Blockchain", "Cryptocurrency", "Decentralization"],
    pinned: false,
    isFavorite: false,
    textColor: "#ffffff",
    backgroundColor: "#2F4F4F",
  },
  {
    id: 9,
    title: "Web Development with React",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and build single-page applications.",
    date: new Date("2023-09-14"),
    tags: ["React", "Web Development", "JavaScript"],
    pinned: true,
    isFavorite: true,
    textColor: "#000000",
    backgroundColor: "#00CED1",
  },
  {
    id: 10,
    title: "Introduction to Docker",
    content:
      "Docker is a platform for developing, shipping, and running applications in containers. It simplifies deployment and ensures consistency across environments.",
    date: new Date("2023-10-05"),
    tags: ["Docker", "Containers", "DevOps"],
    pinned: false,
    isFavorite: false,
    textColor: "#ffffff",
    backgroundColor: "#8A2BE2",
  },
];


export const colors:{textColor:string,backgroundColor:string}[]=[
  { textColor: "#ffffff", backgroundColor: "#383D42" },
  { textColor: "#000000", backgroundColor: "#FFD700" },
  { textColor: "#ffffff", backgroundColor: "#2E8B57" },
  { textColor: "#000000", backgroundColor: "#87CEEB" },
  { textColor: "#ffffff", backgroundColor: "#FF4500" },
  { textColor: "#000000", backgroundColor: "#FF69B4" },
  { textColor: "#ffffff", backgroundColor: "#800080" },
  { textColor: "#000000", backgroundColor: "#00FF7F" },
  { textColor: "#ffffff", backgroundColor: "#1E90FF" },
  { textColor: "#000000", backgroundColor: "#FFA500" },
  { textColor: "#ffffff", backgroundColor: "#8B0000" },
  { textColor: "#000000", backgroundColor: "#F0E68C" },
  { textColor: "#ffffff", backgroundColor: "#4B0082" },
  { textColor: "#000000", backgroundColor: "#7FFFD4" },
  { textColor: "#ffffff", backgroundColor: "#DC143C" },
  { textColor: "#000000", backgroundColor: "#ADFF2F" }
]