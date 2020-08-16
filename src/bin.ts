#!/usr/bin/env node
import commander from "commander";
import { getConfig, writeConfig } from "./";

commander.option(
  "-s --stage [stage]",
  "Stage for the stack we are examining (default from monorepo root)"
);
commander.option(
  "-r --region [region]",
  "Region for the stack (default us-east-1)"
);
commander.option(
  "-p --cognitoPath [path]",
  "Path to the cognito serverless package"
);
commander.option(
  "-c --clientPath [path]",
  "Path to the package defining the app client"
);
commander.option(
  "-k --clientName [resourceName]",
  "Logical name of the cognito client name resource (e.g. CounselorClient)"
);
commander.parse(process.argv);

export { commander };
const { region, stage, cognitoPath, clientPath, clientName } = commander;

if (!commander.isDocumenting)
  (async () => {
    try {
      writeConfig(
        await getConfig({ region, stage, cognitoPath, clientPath, clientName })
      );
    } catch (e) {
      console.error("Could not generate cognito config:", e);
    }
  })();
