# Random Number Generator

Simple random number generator that can be used for raffles etc. 

![demo](./assets/demo-run.png)


## Build it yourself

```bash
docker build -t random-number-generator .
docker run -p 8080:8080 random-number-generator
```

## Demo run

For demo purposes, a demo run is available at:

```bash
docker run -p 8080:8080 jetzlstorfer/random-number-generator
```