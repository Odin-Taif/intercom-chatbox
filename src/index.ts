import { createApp } from "./app";

createApp().listen(3001, "localhost", () => {
  console.log(`Server started on http://localhost:3001.`);
});
