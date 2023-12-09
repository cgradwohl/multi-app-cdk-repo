# Welcome to your CDK TypeScript project

This is a monorepo for developing multiple CDK Apps with TypeScript.

## Complete Process to Build, Synth and Deploy CDK App

Build

- `npx tsc -noEmit && npx esbuild --bundle --platform=node src/apps/app-1/index.ts --outdir=dist/app-1`
- `npx tsc -noEmit && npx esbuild --bundle --platform=node src/apps/app-2/index.ts --outdir=dist/app-2`

- TODO: - use build scripts per app: https://esbuild.github.io/getting-started/#build-scripts

Synth

- `npx cdk synth -a dist/apps/app-1/index.js -o cloud-assembly/app-1`
- `npx cdk synth -a dist/apps/app-2/index.js -o cloud-assembly/app-2`

Deploy

- `npx cdk deploy -a cloud-assembly/app-1`
- `npx cdk deploy -a cloud-assembly/app-2`

## Steps to Deploy via npm scripts

Build

- `npm run build:app-1`
- `npm run build:app-2`

Deploy

- `npm run deploy:app-1`
- `npm run deploy:app-2`
