# A Monorepo Using Yarn Workspaces and Yarn 2

This is an example repo which uses [Yarn Workspaces](https://yarnpkg.com/features/workspaces) and Yarn 2.

## What's in this?

The repo contains a bunch of example packages:

- **`devtools`** is a fantasy CLI which helps managing node.js projects. It holds a cyclic dependency with `env-manager` to illustrate the use case.
- **`env-manager`** is a simple shared library which only exists to depend on the made-up CLI `devtools`.
- **`greeter-service`** is a very simple backend which runs on Hapi and is used to illustrate how a single service can be released out of a monorepo.
- **`text-lib`** is a plain ol' shared library which is consumed by the `greeter-service`.

## How to run

Only `greeter-service` and `devtools` provide any runnable logic per se. The other two packages just exist in their workspace to show how code interacts in the context of a monorepo.

### Greeter Service

Inside `packages/greeter-service` you can use `make` to run the existent steps:

- `make build` to build the production docker container for the service.
- `make run` to run it on your machine

### Devtools

Since devtools is nothing much but a CLI, it cannot be productionised but only released:

- `make release-minor` to release a new minor and automatically bump the new version on all of its consumers.

- `make release-major` to do the same but with a major version instead.
## Features

This sample monorepo supports a couple of use cases:

- **Install necessary dependencies only**: In docker, only install the dependencies which are strictly needed, thus keeping the production image small.
- **Automatic release and version bumping**: When a new version of a package is released, all consuming workspaces automatically get that version bumped in their deps tree.
- **Cyclic dependencies**: Releases do not get messed up by a cyclic dependency.
## To do: 

There are still a couple of things to be done. Especially these two scenarios deserve a test:

- Showcase the use of different package versions alongside each other, all handled with a central lock file
