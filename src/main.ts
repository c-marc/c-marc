import me, { askMeAnything } from "./profile";

askMeAnything()
  .then((answer) => {
    console.info(me.firstName + " says: " + answer);
  })
  .then(() => console.info("👋"));
