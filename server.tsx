import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import express from "express";
import { readdirSync } from "fs";
import { join } from "path";

const app = express();

app.use(express.static("./dist"));

const pages = readdirSync(join(process.cwd(), "pages")).map(
  (p) => p.split(".")[0]
);

pages.forEach((page) => {
  app.get(`/${page}`, async (req, res) => {
    const file = await import(`./pages/${page}`);
    const Component = file.default;
    let props = {};
    if (file.gSSP) {
      props = await file.gSSP({ query: req.query });
    }
    const { pipe } = renderToPipeableStream(
      <body>
        <div id="root">
          <Component {...props} />
        </div>
        {/* <script src="/client.js"></script> */}
      </body>,
      { bootstrapScripts: ["/client.js"] }
    );

    pipe(res);
  });
});

app.listen(3000, () => {
  console.info("App is live on :3000!");
});
