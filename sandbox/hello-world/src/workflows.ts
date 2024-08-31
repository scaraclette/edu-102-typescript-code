import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';
import { HelloWorldWorkflowOutput, HelloWorldActivityInput, HelloWorldWorkflowInput } from './types';

const { greet } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(input: HelloWorldWorkflowInput): Promise<HelloWorldWorkflowOutput> {
  let greet_message = await greet({
    name: input.name
  });
  let finalMessage = `I said "${greet_message.goodbyeMessage}" before I even said "${greet_message.helloMessage}"`
  return {finalMessage: finalMessage};
}
