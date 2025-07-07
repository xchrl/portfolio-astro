import type { Endpoints } from "@octokit/types";
import { type ColorsMap } from "@/types/Colors";
import type { AstroGlobal } from "astro";

import { Octokit } from "@octokit/core";

const repos = [
  "portfolio-astro",
  "weather-app",
  "calculator-app",
  "portfolio",
  "event-deadline-viewer",
];

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_AUTH_KEY,
});

export type Repo = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export async function fetchRepos(Astro: AstroGlobal): Promise<Repo[]> {
  const data = await Promise.all(
    repos.map((name) =>
      octokit
        .request("GET /repos/{owner}/{repo}", {
          owner: "xchrl",
          repo: name,
        })
        .then((res) => res.data)
    )
  );
  return data;
}

export async function fetchLanguageColors(): Promise<ColorsMap> {
  const res = await fetch(
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
  );
  return await res.json();
}
