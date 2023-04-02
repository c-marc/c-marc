import me, { askMeAnything } from "./profile";

askMeAnything("6*7")
  .then((answer) => {
    console.info(me.firstName + " says: " + answer);
  })
  .then(() => console.info("👋"));
