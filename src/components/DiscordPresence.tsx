import { useEffect, useRef, useState } from "react";
import { useLanyard } from "react-use-lanyard";
import { Progress } from "./ui/progress";

const DISCORD_ID = "329597208494211073";

const getAssetUrl = (appId: string, assetId: string) => {
  if (assetId.startsWith("mp:")) {
    let url = assetId.substring(assetId.indexOf("https"));
    // Fix missing colon in protocol
    if (url.startsWith("https/")) {
      url = url.replace("https/", "https://");
    }
    return url;
  }
  return `https://cdn.discordapp.com/app-assets/${appId}/${assetId}.png`;
};

const getBorderColorFromStatus = (
  status: "online" | "idle" | "dnd" | "offline" | undefined
) => {
  switch (status) {
    case "online":
      return "border-green-500";
    case "idle":
      return "border-yellow-500";
    case "dnd":
      return "border-red-400";
    case "offline":
    case undefined:
      return "border-gray-500";
  }
};

export default function DiscordPresence() {
  const { loading, status } = useLanyard({
    userId: DISCORD_ID,
    socket: true,
  });

  const badgeURL = `https://cdn.discordapp.com/guild-tag-badges/${status?.discord_user.primary_guild?.identity_guild_id}/${status?.discord_user.primary_guild?.badge}.png`;

  const [timeIntoSong, setTimeIntoSong] = useState<number>(0);
  const songDuration = useRef<number>(0);
  const [songProgress, setSongProgress] = useState<number>(0);

  console.log(status);

  useEffect(() => {
    function updateSongTime() {
      const activities = status?.activities;
      const ytMusicActivity = activities?.find(
        (activity) => activity.name === "YouTube Music"
      );

      if (!ytMusicActivity?.timestamps) {
        setTimeIntoSong(0);
        return;
      }

      const { start, end } = ytMusicActivity.timestamps;
      const now = Date.now();
      const elapsed = Math.max(0, now - start);
      const duration = end - start;
      const clampedElapsed = Math.min(elapsed, duration);

      setTimeIntoSong(clampedElapsed);
      songDuration.current = end - start;
      setSongProgress((clampedElapsed / duration) * 100);
    }

    updateSongTime();
    const interval = setInterval(updateSongTime, 1000);

    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 1000 / 60);
    const seconds = Math.floor((ms / 1000) % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    !loading && (
      <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 p-4 bg-secondary border border-border rounded-xl">
        <div>
          <img
            src={`https://api.lanyard.rest/${status?.discord_user.id}.png`}
            alt="Avatar"
            width={108}
            className={`rounded-lg border-2 ${getBorderColorFromStatus(
              status?.discord_status
            )}`}
          />
        </div>
        <div className="flex flex-col w-full lg:w-fit lg:flex-1 gap-2">
          <div className="inline-flex justify-center lg:justify-start items-center gap-2">
            <h3>
              <span>{status?.discord_user.username}</span>
            </h3>
            <span className="px-1.75 py-1/2 rounded-md border border-border text-sm flex items-center gap-1 font-bold">
              <img src={badgeURL} alt="Badge" width={16} />
              {status?.discord_user.primary_guild?.tag}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {status?.discord_status === "offline" ? (
              <p>Currently offline</p>
            ) : (
              status?.activities[1] && (
                <div className="relative w-fit">
                  {status?.activities[1].assets &&
                    status.activities[1].assets.large_image && (
                      <img
                        src={getAssetUrl(
                          status!.activities[1].application_id!,
                          status!.activities[1].assets!.large_image
                        )}
                        alt="Activity large image"
                        className="size-16 rounded-lg"
                      />
                    )}
                  {status?.activities[1].assets &&
                    status.activities[1].assets.small_image && (
                      <img
                        src={getAssetUrl(
                          status!.activities[1].application_id!,
                          status!.activities[1].assets!.small_image
                        )}
                        alt="Activity small image"
                        className="size-6 rounded-full border border-black absolute -bottom-1 -right-1"
                      />
                    )}
                </div>
              )
            )}
            {status?.activities[1] && (
              <div className="flex flex-col w-full text-sm text-center lg:text-start">
                <p className="font-bold">{status?.activities[1].name ?? ""}</p>
                <p>{status?.activities[1].details ?? ""}</p>
                <p className="text-muted-foreground">
                  {status?.activities[1].state ?? ""}
                </p>
                {status?.activities[1].name == "YouTube Music" && (
                  <div className="flex items-center gap-2">
                    <span>{formatTime(timeIntoSong)}</span>
                    <Progress value={songProgress} />
                    <span>{formatTime(songDuration.current)}</span>
                  </div>
                )}
              </div>
            )}
            {!status?.activities[1] && status?.discord_status !== "offline" && (
              <p>Doing nothing</p>
            )}
          </div>
        </div>
      </div>
    )
  );
}
