import { createId } from "@paralleldrive/cuid2";

// Placeholder projects - replace with your own projects
export const projects = [
  {
    id: createId(),
    title: "Sample Project 1",
    description: "This is a placeholder project. Replace with your own project details.",
    stacks: ["React", "TypeScript", "Next.js"],
    repoUrl: "https://github.com/your-username/project-1", // Update with your repo
    deployedURL: "", // Add your deployed URL if available
    cover: "", // Add your project cover image URL here
    isRepo: true,
    Icon: null, // Add your project icon component if needed
  },
  {
    id: createId(),
    title: "Sample Project 2", 
    description: "Another placeholder project. Add your own project information here.",
    stacks: ["Node.js", "Express", "MongoDB"],
    repoUrl: "https://github.com/your-username/project-2", // Update with your repo
    deployedURL: "", // Add your deployed URL if available
    cover: "", // Add your project cover image URL here
    isRepo: true,
    Icon: null, // Add your project icon component if needed
  },
  // Add more of your projects here
];

export default projects;
export type TProject = (typeof projects)[0];
