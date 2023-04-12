// Hello World
// Me as an experimental module
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
const motivation = Math.random(); //let's not be too specific 🤖
const currentInterests = ["Remix", "vitest"]; //👈 👀 TL;DR

// Typed Me
const me: Profile = {
  firstName: "Marc", //👈 👾 TL;DR
  activity: currentActivity(motivation, currentInterests),
};

// Backend Me (IA will never beat this one)
const thinking = async (question: string): Promise<string> => {
  try {
    if (!question || typeof question !== "string") {
      throw new Error("422: Haha!"); //unprocessable content
    }
    const answer = "42";
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(answer);
      }, 3000);
    });
  } catch (error: unknown) {
    // this block might need improvement
    if (error instanceof Error && error.message) throw error; //rethrow
    else throw new Error("500: Brain crash :/");
  }
};

// Frontend interaction with Me
export const askMeAnything = async (
  question: string = "What's the meaning of life?"
): Promise<string | void> => {
  try {
    if (!question || typeof question !== "string") {
      throw new Error("Hmm... It doesn't look like a question...");
    }
    const answer = await thinking(question);
    return answer;
  } catch (error: unknown) {
    if (error instanceof Error && error.message) {
      console.log(error.message);
    } else {
      console.log("You found a bug! Please tell me!");
    }
  }
};

// Frontend Me
export default me;
