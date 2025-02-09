export type Note = {
  title: string;
  content: string;
  date: Date;
  tags: Array<string>,
  pinned: boolean;
  isFavorite: boolean;
  textColor: string;
  backgroundColor: string;
};
export const notes: Note[] = [
  {
    title: "Note 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis vel lectus consectetur ultricies et vitae turpis. Sed vel turpis vel velit ultricies posuere.",
    date: new Date("July/12/2022"),
    tags: ["Technology", "JavaScript"],
    pinned: false,
    isFavorite: false,
    textColor: "#ffff",
    backgroundColor: "#383D42",
  },
  {
    title: "Note 2",
    content:
      "This is a note about React and its ecosystem. React is a popular JavaScript library for building user interfaces.",
    date: new Date("August 5, 2022"),
    tags: ["React", "Frontend"],
    pinned: true,
    isFavorite: true,
    textColor: "#000000",
    backgroundColor: "#FFD700",
  },
  {
    title: "Note 3",
    content:
      "A note about TypeScript and its benefits for large-scale applications. TypeScript adds static typing to JavaScript.",
    date: new Date("September 20, 2022"),
    tags: ["TypeScript", "JavaScript"],
    pinned: false,
    isFavorite: true,
    textColor: "#ffffff",
    backgroundColor: "#2E8B57",
  },
  {
    title: "Note 4",
    content:
      "Exploring Node.js and its use in building scalable backend systems. Node.js is a runtime environment for executing JavaScript on the server.",
    date: new Date("October 15, 2022"),
    tags: ["Node.js", "Backend"],
    pinned: true,
    isFavorite: false,
    textColor: "#000000",
    backgroundColor: "#87CEEB",
  },
  {
    title: "Note 5",
    content:
      "A note about CSS frameworks like Tailwind CSS and Bootstrap. These frameworks help in building responsive and modern UIs.",
    date: new Date("November 10, 2022"),
    tags: ["CSS", "Tailwind", "Bootstrap"],
    pinned: false,
    isFavorite: false,
    textColor: "#ffffff",
    backgroundColor: "#6A5ACD",
  },
  {
    title: "Note 6",
    content:
      "Understanding state management in React using Redux and Context API. State management is crucial for complex applications.",
    date: new Date("December 1, 2022"),
    tags: ["React", "Redux", "State Management"],
    pinned: true,
    isFavorite: true,
    textColor: "#000000",
    backgroundColor: "#FFA07A",
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