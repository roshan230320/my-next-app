export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "The Smile",
    date: "",
    description:
      "One smile that quietly became one of my favorite memories.",
    image: "/images/memories/day1.jpeg",
  },
  {
    id: 2,
    title: "Our First Anniversary",
    date: "1 year Complete",
    description:
      "The beautiful days that I'll never forget.",
    image: "/images/memories/day2.jpeg",
  },
  {
    id: 3,
    title: "Fav Two Ladies in One Frame",
    date: "Our Little World",
    description:
      "Some moments don't need words.",
    image: "/images/memories/day3.jpeg",
  },
  {
    id: 4,
    title: "Random Selfies",
    date: "Just Us",
    description:
      "These little memories mean everything.",
    image: "/images/memories/day4.jpeg",
  },
  {
    id: 5,
    title: "Forever Favorite",
    date: "❤️",
    description:
      "If I had to relive one day again, I'd choose this.",
    image: "/images/memories/day5.jpeg",
  },
];