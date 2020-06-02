// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://cdn.pika.dev/@pika/react@v16.13.1";
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import * as ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";
import { GuessSafeEnum } from "./misc.ts";

interface HomeProps {
  isRedirect?: boolean;
  win?: boolean;
  hint?: string;
  from?: string;
  guess?: number;
}

const Home = ({ hint, guess, win, from }: HomeProps) => (
  <div>
    <div>Deno - Guess A Number</div>
    <div>Between 0 and 10</div>
    {
      hint !== "" && <div>Guess again! It's {hint} than {guess}</div>
    }
    {win
      ? <div style={{ color: "red" }}>You WIN! The number to guess was {guess}.</div>
      : <form action="guess" method="get">
        <input type="number" name="val" min="0" max="10" autoFocus/>
      </form>
    }
    <a href="/reset">Reset</a>

    {from === "/reset" && !win && guess === GuessSafeEnum.RESET && <div>You cannot reset until you win!</div>}
  </div>
);

const Debug = (props: any) => (
  <pre>
    {JSON.stringify(props, null, 2)}
  </pre>
)

export default (props: HomeProps = {}) => `<!DOCTYPE html>
  ${ReactDOMServer.renderToString((
  <>
    <Home {...props} />
    <hr />
    <Debug {...props} />
  </>
))}`;
