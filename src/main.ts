import me, { askMeAnything } from "./profile";

(async () => {
  console.info("Hi 👋");
  try {
    const answer = await askMeAnything("42?");
    console.info(`${me.firstName} says: ${answer}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
  console.info("See you later, Alligator 🐊");
})();
