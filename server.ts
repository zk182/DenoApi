import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import { port } from './config.ts';

for await (const req of serve({ port })) {
  req.respond({ body: "Hello World\n" });
}