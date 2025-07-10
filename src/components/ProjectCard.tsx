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
import { useEffect, useState } from "react";
import type { Endpoints } from "@octokit/types";
import type { ColorsMap } from "@/types/Colors";

function ProjectCard({ url }: { url: string }) {
  type Repo = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

  const [data, setData] = useState<Repo[]>([]);
  const [colors, setColors] = useState<ColorsMap>();

  async function getData() {
    await fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  async function getLanguageColors() {
    await fetch(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    )
      .then((res) => res.json())
      .then((json) => setColors(json));
  }

  useEffect(() => {
    getData();
    getLanguageColors();
  }, []);

  if (!data || data.length == 0 || !colors)
    return (
      <h4 className="text-muted-foreground">Loading repository data...</h4>
    );

  return data.map(({ full_name, svn_url, name, description, language }) => (
    <Card className="flex hover:scale-110 hover:bg-accent hover:text-background duration-150">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/xchrl.png"
              alt="Avatar"
              width="16"
            />
            <AvatarFallback>X</AvatarFallback>
          </Avatar>
          <span>{full_name}</span>
        </CardTitle>
        <CardAction>
          <a href={svn_url} target="_blank" rel="noopener noreferrer">
            <div className="sr-only">Repository link</div>
            <FaExternalLinkAlt />
          </a>
        </CardAction>
      </CardHeader>
      <CardContent>
        <h4 className="text-xl font-bold">{name}</h4>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="mt-auto flex gap-2">
        <span
          className="size-2 rounded-full"
          style={{
            backgroundColor: colors[language ?? "Ignore List"]?.color ?? "#000",
          }}
        ></span>
        <p>{language}</p>
      </CardFooter>
    </Card>
  ));
}

export default ProjectCard;
