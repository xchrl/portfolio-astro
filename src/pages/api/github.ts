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
  "noexistencen-quotedle",
];

export async function GET() {
  const data = await Promise.all(
    repos.map(async (repoName) => {
      const res = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: "xchrl",
        repo: repoName,
      });

      const { full_name, svn_url, name, description, language } = res.data;
      return { full_name, svn_url, name, description, language };
    })
  );

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
