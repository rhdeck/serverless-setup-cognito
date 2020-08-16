import { join } from "path";
import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { getResources } from "@raydeck/serverless-resources";
import { findStage } from "@raydeck/serverless-stage";
import { getServerlessConfig } from "@raydeck/serverless-base";
import type { PromiseValue } from "type-fest";
export async function getConfig({
  region,
  stage,
  path = process.cwd(),
  cognitoPath,
  clientPath,
  clientName,
}: {
  region?: string;
  stage: string;
  path?: string;
  cognitoPath?: string;
  clientPath?: string;
  clientName?: string;
}) {
  const { cognito, client, appsync } = getServerlessConfig();
  if (!stage) stage = findStage() ?? "dev";
  if (!cognitoPath) {
    if (cognito) cognitoPath = cognito;
  }
  const r = await getResources({ region, stage, path: cognitoPath });
  const candidates = Object.entries(r).find(([key, _]) =>
    key.includes("UserPool")
  );
  const userPoolId = candidates && candidates[1];
  if (!clientPath) {
    clientPath = client || appsync;
  }
  const r2 = await getResources({ region, stage, path: clientPath });
  const userPoolWebClientId = clientName
    ? r2[clientName]
    : r2.CognitoClient
    ? r2.CognitoClient
    : (Object.entries(r2).find(
        ([key, value]) => key.endsWith("Client") && !key.startsWith("GraphQ")
        //  &&
        // /^[0-9a-z]*$/.test(key)
      ) ?? [])[1];
  const region2 = userPoolId.split("_").shift();
  return {
    region: region2,
    userPoolId,
    userPoolWebClientId,
    mandatorySignIn: false,
    identityPoolId: "",
  };
}
export function writeConfig(
  config: PromiseValue<ReturnType<typeof getConfig>>,
  path = join(process.cwd(), "config")
) {
  if (!existsSync(path)) mkdirSync(path);
  const fullPath = join(path, "cognito.json");
  writeFileSync(fullPath, JSON.stringify(config, null, 2));
}
