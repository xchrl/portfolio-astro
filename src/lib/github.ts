import type { Endpoints } from "@octokit/types";
import { type ColorsMap } from "@/types/Colors";
import type { AstroGlobal } from "astro";

export type Repo = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export async function fetchRepos(Astro: AstroGlobal): Promise<Repo[]> {
  const res = await fetch(new URL("/api/github", Astro.url));
  return await res.json();
}

export async function fetchLanguageColors(): Promise<ColorsMap> {
  const res = await fetch(
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
  );
  return await res.json();
}
