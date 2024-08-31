// TODO: Learn setting up typescript monorepos
export const TASK_QUEUE_NAME = 'hello-world';

export interface HelloWorldWorkflowInput {
    name: string
}

export interface HelloWorldWorkflowOutput {
    finalMessage: string
}

export interface HelloWorldActivityInput {
    name: string
}

export interface HelloWorldActivityOutput {
    helloMessage: string,
    goodbyeMessage: string
}