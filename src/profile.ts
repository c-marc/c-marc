// Hello World
// Me as a module
// TL;DR: just scroll down

// Discriminating unions are a powerful pattern
type Activity =
  | {
      status: "procrastinating";
    }
  | {
      status: "learning";
      what: string | string[];
    };

// Interface
interface Profile {
  firstName: string;
  activity: Activity;
}

// Fully typed function
const currentActivity = (
  motivation: number,
  what: string | string[] = "42"
): Activity => {
  return Math.random() > motivation
    ? { status: "procrastinating" }
    : { status: "learning", what: what };
};

// Config Me
const motivation = Math.random(); //this one feels like an interview trap, let's not be too specific 🤖
const currentInterests = ["Remix", "vitest"]; //👈 👀 TL;DR

// Typed Me
const me: Profile = {
  firstName: "Marc", //👈 👾 TL;DR
  activity: currentActivity(motivation, currentInterests),
};

// Backend Me (IA will never beat this one)
const thinking = (question: string): Promise<string> => {
  const answer = question ? "42" : "This deserves a 'void' return ;)";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(answer);
    }, 3000);
  });
};

// Frontend interaction with Me
export const askMeAnything = async (
  question = "What's the meaning of life?"
): Promise<string> => {
  const answer = await thinking(question);
  return answer;
};

// Frontend Me
export default me;

// I also could be an instance of a class, with a method to ask me anything...
// But let's agree it's just a funny personal readme, so I modestly made myself a global entity in that very finite space ;)
