# A Monorepo Using Yarn Workspaces and Yarn 2

This is an example repo which uses [Yarn Workspaces](https://yarnpkg.com/features/workspaces) and Yarn 2.

## What's in this?

The repo contains three packages, two of which are services and the third one (`text-lib`) is a shared library consumed by both.

There is also a Dockerfile for the `greeter-service` which illustrates how a container can be build from source.

You can use `make` to run the existent steps.

## How to run

- `make build` - builds the docker container
- `make run` - runs it in deteached mode

## Features

- Only installs the dependencies which are strictly needed, thus keeping the production image small.
## To do: 

There are still a couple of things to be done. Especially these two scenarios deserve a test:

- Circular dependencies
- Showcase the use of different package versions alongside each other, all handled with a central lock file
- Release script
