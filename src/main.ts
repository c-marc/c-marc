import me, { askMeAnything } from "./profile";

(async () => {
  console.info("Hi 👋");
  try {
    const answer = await askMeAnything("42?");
    console.info(`${me.firstName} says: ${answer}`);
  } catch (error: unknown) {
    console.info("Woops");
    if (error instanceof Error && error.message) {
      console.error(error.message);
    }
  }
  console.info("See you later, Alligator 🐊");
})();
