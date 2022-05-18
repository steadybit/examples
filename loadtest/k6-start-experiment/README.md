# K6 starting experiment in load test

This example demonstrates how you can trigger some chaos experiment from your load test.

To run the load test you need to create a access key in steadybit first and then pass it via environment variable to the load test:

```
STEADYBIT_ACCESS_KEY="39rTxhsl.******" k6 run --vus=1 --duration=60s script.js
```

Inside the [script.js](./script.js) you can see that we are using the `setup` and `teardown` methods to start and verify the chaos experiment.