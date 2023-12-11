#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MultiAppCdkRepoStack } from "./stacks/multi-app-cdk-repo-stack";
import { HelloCdkStack } from "./stacks/hello-stack";

const app = new cdk.App();
new MultiAppCdkRepoStack(app, "MultiAppCdkRepoStack", {});
new HelloCdkStack(app, "HelloCdkStack", {});
app.synth();
