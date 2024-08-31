import { HelloWorldActivityInput, HelloWorldActivityOutput } from "./types";

export async function greet(input: HelloWorldActivityInput): Promise<HelloWorldActivityOutput> {
  let helloMessage = `Hello, ${input.name}`;
  let goodbyeMessage = `Goodbye, ${input.name}`;

  return { helloMessage: helloMessage, goodbyeMessage: goodbyeMessage};
}
