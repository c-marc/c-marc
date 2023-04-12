## Hello World 👋

Jump to [More Readable Readme](#human-readable) or to [Contact Me](#contact-me)

## Me as an experimental module 🤖

TL;DR: just [scroll down](#human-readable).

```typescript
// profile.ts

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
const motivation = Math.random(); // let's not be too specific
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
```

Hello world:

```typescript
// main.ts
import me, { askMeAnything } from "./profile";

(async () => {
  try {
    const answer = await askMeAnything("6*7");
    console.info(`${me.firstName} says: ${answer}`);
  } catch (error: unknown) {
    console.info("Woops");
    if (error instanceof Error && error.message) {
      console.log(error.message);
    }
  }
  console.info("👋");
})();
```

## More Readable Readme 🙂 <a id="human-readable"></a>

Hi 👋, I'm Marc,

Here I'm still studying, now learning fullstack development, web & mobile.

```javascript
// TODO: landing page and/or portfolio
```

### What I'm into ⚡

- Languages: HTML5, CSS and javascript/typescript (I learnt Python in another life, but right now I'm into JS/TS for backend too)
- Frontend libs: React, React Router
- Fullstack frameworks: I'm into Remix right now
- Pretty stuffs: I'm a little bit versatile with this subject: plain CSS, TailwindCSS, classless or minimalistic CSS approches...
- ODM/ORM: mongoose, Prisma, BaaS
- Backend: (Remix), Express, BaaS
- DevOps: I'm fine with simple deployment, CI/CD concepts, but this is not something I'm fluent with in a production environment where you cannot mess with migrations, security...
- Mobile: React Native
- UX/UI: some knowledge of concepts and some knowledge of Figma

### What I'm interested in learning right now 🌱

- sharpen my skills with the already mentionned tech;
- get a better workflow and get better at choosing and leveraging the right tools (frameworks, 3rd-party libs or services... ); and at focusing my learning and expertise on these...
- get better at testing: Vitest, cypress;
- maybe a UI library
- maybe Storybook;
- maybe a headless-CMS

### Worth mentioning 🔧

I've also got a statistical background and a solid experience with `R`. Even though I've recently been spending more time on web development, you may be here because of that... Want to talk about causality, misconceptions about _p-values_ or confidence intervals, or the `Tidyverse`?

## Contact Me 💬 <a id="contact-me"></a>

Feel free to contact me the way you want:

- Use the following form: [Get in Touch](https://docs.google.com/forms/d/e/1FAIpQLSfmyFu69z6uW5NCthyDgYdp9gBESK-GErWL6AW589uApaweAg/viewform?usp=sf_link)
- Post an issue
- Find my e-mail around here if you're a `git` ninja
