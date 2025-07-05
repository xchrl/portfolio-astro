import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_AUTH_KEY,
});

const repos = [
  "portfolio-astro",
  "weather-app",
  "calculator-app",
  "portfolio",
  "event-deadline-viewer",
];

export async function GET() {
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

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
