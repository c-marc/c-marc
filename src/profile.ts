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
/** Fight with heterogenous types of return */
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
const currentInterests = ["Remix", "vitest"];

// Typed Me
const me: Profile = {
  firstName: "Marc", //👈 👾
  activity: currentActivity(motivation, currentInterests),
};

// Backend Me (IA will never beat this one)
/** Mock a server route */
const thinking = async (question: string): Promise<string> => {
  try {
    if (!question || typeof question !== "string" || question === "42?") {
      throw new Error("422: Haha!"); //unprocessable content
    }
    const answer = "42";
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(answer);
      }, 3000);
    });
  } catch (error: unknown) {
    // this block might need improvement (typing error is tricky)
    if (error instanceof Error && error.message) throw error; //rethrow
    else throw new Error("500: Brain crash :/");
  }
};

// Frontend interaction with Me
/** Mock a fetch */
export const askMeAnything = async (
  question: string = "What's the meaning of life?"
): Promise<string | void> => {
  try {
    if (!question || typeof question !== "string") {
      return "Hmm... It doesn't look like a question...";
    }
    const answer = await thinking(question);
    return answer;
  } catch (error: unknown) {
    // this block might need improvement (typing error is tricky)
    if (error instanceof Error && error.message) throw error; //rethrow
    else throw new Error("You found a bug! Please tell me!");
  }
};

// Frontend Me
export default me;
