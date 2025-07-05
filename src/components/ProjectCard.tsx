import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Octokit } from "@octokit/core";
import type { Endpoints } from "@octokit/types";
import { type ColorsMap } from "@/types/Colors";

export default function ProjectCard() {
  type Repo = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
  const [repoData, setRepoData] = useState<Repo[]>([]);
  const [colors, setColors] = useState<ColorsMap>({});

  useEffect(() => {
    const repos = [
      "portfolio-astro",
      "weather-app",
      "calculator-app",
      "portfolio",
      "event-deadline-viewer",
    ];

    const octokit = new Octokit({
      auth: "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",
    });

    async function fetchRepos() {
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
      const colors = await fetch(
        "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
      )
        .then((res) => res.json())
        .then((json) => setColors(json));
      setRepoData(data);
    }

    fetchRepos();
  }, []);

  return (
    <>
      {repoData.map((data) => {
        return (
          <Card
            key={data.id}
            className="flex hover:scale-110 hover:bg-accent border-accent/40 hover:text-background duration-150"
          >
            <CardHeader>
              <CardTitle className="flex gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/xchrl.png" width="16" />
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <span>{data.full_name}</span>
              </CardTitle>
              <CardAction>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </CardAction>
            </CardHeader>
            <CardContent>
              <h4 className="text-xl font-bold">{data.name}</h4>
              <p>{data.description}</p>
            </CardContent>
            <CardFooter className="mt-auto flex gap-2">
              <span
                className="size-2 rounded-full"
                style={{
                  backgroundColor: colors[data.language ?? "Ignore List"].color,
                }}
              ></span>
              <p>{data.language}</p>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}
