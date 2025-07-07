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

export default function ProjectCard({
  id,
  fullName,
  url,
  name,
  description,
  language,
  color,
}: {
  id: number;
  fullName: string;
  url: string;
  name: string;
  description: string | null;
  language: string | null;
  color: string;
}) {
  return (
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
          <span>{fullName}</span>
        </CardTitle>
        <CardAction>
          <a href={url} target="_blank" rel="noopener noreferrer">
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
            backgroundColor: color,
          }}
        ></span>
        <p>{language}</p>
      </CardFooter>
    </Card>
  );
}
