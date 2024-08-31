import { MockActivityEnvironment } from '@temporalio/testing';
import { describe, it } from 'mocha';
import * as activities from '../activities';
import assert from 'assert';

describe('greet activity', async () => {
  it('successfully greets the user', async () => {
    const env = new MockActivityEnvironment();
    const name = 'Temporal';
    const result = await env.run(activities.greet, {name: name});

    // TODO: Understand different types of chai assertions
    assert.deepEqual(result, { helloMessage: `Hello, ${name}`, goodbyeMessage: `Goodbye, ${name}`});
  });
});
