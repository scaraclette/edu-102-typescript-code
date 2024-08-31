import { TestWorkflowEnvironment } from '@temporalio/testing';
import { after, before, it } from 'mocha';
import { Worker } from '@temporalio/worker';
import { example } from '../workflows';
import assert from 'assert';

describe('Example workflow with mocks', () => {
  let testEnv: TestWorkflowEnvironment;

  before(async () => {
    testEnv = await TestWorkflowEnvironment.createLocal();
  });

  after(async () => {
    await testEnv?.teardown();
  });

  it('successfully completes the Workflow with a mocked Activity', async () => {
    const { client, nativeConnection } = testEnv;
    const taskQueue = 'test';

    const worker = await Worker.create({
      connection: nativeConnection,
      taskQueue,
      workflowsPath: require.resolve('../workflows'),
      activities: {
        greet: async () => {
          return {
            helloMessage: "Hello, Tempura",
            goodbyeMessage: "Goodbye, Tempura" 
          }
        },
      },
    });

    const name = "Tempura";
    const input = { name: name };

    const result = await worker.runUntil(
      client.workflow.execute(example, {
        args: [input],
        workflowId: 'test',
        taskQueue,
      })
    );
    const expected = `I said "Goodbye, ${name}" before I even said "Hello, ${name}"`
    assert.equal(result.finalMessage, expected);
  });
});
