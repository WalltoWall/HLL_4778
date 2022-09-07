# Developer Documentation

If you feel anything is missing, please contribute to the
`WalltoWall/nextjs-ww-starter` repository to ensure future projects benefit from
the additions.

## Project Specifics

### Redirects

Currently this site is configured via `netlify.toml` to redirect all visitors
back to the Hawaii LGBT Legacy Foundation website. To undo this redirect, remove
the `[[redirects]]` blocks from the `netlify.toml` file.

The following collection of documents aims to provide an overview of development
on this project.

### Deployments

Since Netlify's pricing changes, deploys need to be done manually.

```bash
curl -X POST -d {} https://api.netlify.com/build_hooks/61575f06877b7428cf2e89c1
```

## Basics

#### [Quick Start](./basics/quick-start.md)

A quick guide to start development on this project.

#### [Development Environment](./basics/development-environment.md)

System requirements to run this project on your machine.

#### [Common Issues](./basics/common-issues.md)

Troubleshooting steps for common issues.

## Concepts

#### [Tech Stack](./concepts/tech-stack.md)

Describes which services and libraries are used for this project.

#### [Architecture](./concepts/architecture.md)

Ideas for organizing and strategizing development.

#### [Blocks](./concepts/blocks.md)

Blocks are the basic building blocks for all pages.

#### [Client Reference](concept-client-reference.md)

Providing clients with a complete reference of the system.

## Guides

#### [Bootstrap a New Project](./guides/bootstrap-a-new-project.md)

How to start a new client project with GitHub, Netlify, and Prismic.

#### [Styling with Ease](./guides/styling.md)

How to style React components using props and atomic CSS.

#### [Create a Block](./guides/create-a-block.md)

How to create a Block, the basic building block for all pages.

#### [Overriding Pages and Blocks](./guides/overriding-pages-and-blocks.md)

How to override pages and block data with precision.
