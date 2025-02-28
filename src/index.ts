import { createApp } from "./app";

createApp().listen(3001, "0.0.0.0", () => {
  console.log(`Server started on http://0.0.0.0:3001.`);
});
