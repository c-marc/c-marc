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
