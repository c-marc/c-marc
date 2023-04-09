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
  what: string | string[] = "[un]important stuffs"
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
const thinking = async (question: string): Promise<string> => {
  if (!question || typeof question !== "string") {
    throw new Error("500: brain crash");
  }
  const answer = "42";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(answer);
    }, 3000);
  });
};

// Frontend interaction with Me
export const askMeAnything = async (
  question: string = "What's the meaning of life?"
): Promise<string | void> => {
  try {
    if (!question || typeof question !== "string") {
      throw new Error("400: Haha!");
    }
    const answer = await thinking(question);
    return answer;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = "404: It seems you just managed to 404 me...";
    console.log(message);
  }
};

// Frontend Me
export default me;
