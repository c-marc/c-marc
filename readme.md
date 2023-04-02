## Hello World

Jump to [More Readable Readme](#human-readable) or to [Contact Me](#contact-me)

## Me as a module

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
```

```typescript
// main.ts
import me, { askMeAnything } from "./profile";

askMeAnything()
  .then((answer) => {
    console.info(me.firstName + " says: " + answer);
  })
  .then(() => console.info("👋"));
```

## More Readable Readme <a id="human-readable></a>

Hi! I'm Marc,

Here I'm a software engineer, learning fullstack development, web & mobile.

```javascript
// TODO: landing page and/or portfolio
```

What I'm into:

- Languages: HTML5, CSS and javascript/typescript (I learnt Python in another life, but right now I'm into JS/TS for backend too)
- Frontend libs: React, React Router
- Fullstack frameworks: I'm into Remix. I like their approach.
- Pretty stuffs: I'm a little bit versatile with this subject: Tailwind-CSS, plain CSS, classless or minimalistic CSS approches...
- DB: MongoDB, SQlite, Prisma (ORM), BAAS
- Backend: (Remix), Express, BAAS
- DevOps: I'm fine with simple deployment, but this is not something I'm fluent with in a production environment where you cannot mess with migrations, security...
- Mobile: React Native
- UX/UI: some knowledge of concepts and Figma

What I'm interested in learning right now:

- sharpen my skills with the already mentionned tech;
- get a better workflow and get better at choosing and leveraging the right tools (frameworks, 3rd-party libs or services... ); and at focusing my learning and expertise on these...
- get better at testing: Vitest, cypress;
- maybe a UI library; maybe Storybook;
- maybe a headless-CMS

I've also got a statistical background and a solid experience with `R`. Even though, I've recently been spending more time on web development, that might be useful...

## Contact Me <a id="contacf-me"></a>

Feel free to:

- Post an issue
- Find my e-mail around here if you're a `git` ninja
- Use the following form:

```javascript
//TODO: try to insert form and test whether safe-rendering from GH is throwing it away...
```

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmyFu69z6uW5NCthyDgYdp9gBESK-GErWL6AW589uApaweAg/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
