#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MultiAppCdkRepoStack } from "../lib/multi-app-cdk-repo-stack";

const app = new cdk.App();
new MultiAppCdkRepoStack(app, "MultiAppCdkRepoStack", {});

app.synth();
