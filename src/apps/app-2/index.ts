#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MultiAppCdkRepoStack } from "../app-1/stacks/multi-app-cdk-repo-stack";
import { isEven } from "../../libs/is-even";

const app = new cdk.App();
new MultiAppCdkRepoStack(app, "MultiAppCdkRepoStack", {});

if (isEven(2)) {
  app.synth();
}
