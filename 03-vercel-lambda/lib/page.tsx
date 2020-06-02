// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://cdn.pika.dev/@pika/react@v16.13.1";
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import * as ReactDOMServer from "https://cdn.pika.dev/react-dom@16.13.1/server.js";

const Home: React.FC = () =>
  <div>Hello from Vercel + Deno + ReactDomServer!</div>;

export default `<!DOCTYPE html>
${
  ReactDOMServer.renderToString(
    <Home />,
  )
}`;
