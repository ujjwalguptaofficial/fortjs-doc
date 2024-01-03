---
title: "Cron"
description: "Learn how to seamlessly integrate and manage cron jobs using Fortjs. Create, start, stop, and configure cron tasks effortlessly."
keywords: [Fortjs, Cron, ScheduleTask, Job Scheduling, Task Scheduler, Documentation]
---

# Cron: Simplifying Recurrent Job Execution with Fortjs

Cron is a crucial process for running jobs at regular intervals, and Fortjs makes it remarkably easy to create and manage cron jobs.

## Create Cron Job

Let's create a cron job that increments a counter every second. To create the job, follow these steps:

1. Create a class that extends the `ScheduleTask` from Fortjs.
2. Implement the `execute` method and include your task inside it. In our case, the task is to increment the `counter` value.

```js
import { ScheduleTask } from "fortjs";

export class CounterScheduler extends ScheduleTask {
    counter = 0;

    async execute() {
        this.counter++;
    }
}
```

## Use Cron Job

In the previous section, we defined the cron job, but now we need to instruct Fortjs to execute this cron job based on a cron expression.

In your bootstrap file (`index.ts`), add the following code:

```js
import { CounterScheduler } from "./crons/counter";

Fort.scheduler.add({
    expression: "*/1 * * * * *", // run every 1 second
    task: CounterScheduler,
    name: "Counter"
});

// Start all cron jobs
Fort.scheduler.startAll();
```

## Start Cron Job

The Fortjs scheduler provides two methods to initiate the cron job:

1. startAll
2. start

### startAll

`startAll` initiates all registered cron jobs.

```js
// start all cron job
Fort.scheduler.startAll();
```

### start

`start` takes the cron name and starts the specified cron.

```js
Fort.scheduler.start("Counter");
```

## Stop cron job

The Fortjs scheduler provides two methods to halt the execution of cron jobs:

1. stopAll
2. stop

### stopAll

`stopAll` stops all registered cron jobs.

```js
// stop all cron job
Fort.scheduler.stopAll();
```

### stop

`stop` takes the cron name and stops the specified cron.

```js
Fort.scheduler.stop("Counter");
```

:::tip
Fortjs utilizes the [cron](https://www.npmjs.com/package/cron) package under the hood to execute cron tasks. However, it can be configured to use any alternative package. For more details, refer to the documentation - [Cron Scheduler](/docs/advanced/task_scheduler.md).
:::
