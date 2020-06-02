import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";
import { RequestBody } from "../lib/types.ts";
import page from "../lib/page.tsx";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context,
  req: RequestBody = JSON.parse(event.body ?? "{}"),
): Promise<APIGatewayProxyResult> {
  return {
    body: page,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
    statusCode: 302,
  };
}
