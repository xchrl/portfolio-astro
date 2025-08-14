import { useLanyard } from "react-use-lanyard";

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

export default function DiscordPresence() {
  const { loading, status } = useLanyard({
    userId: DISCORD_ID,
    socket: true,
  });

  const badgeURL = `https://cdn.discordapp.com/guild-tag-badges/${status?.discord_user.primary_guild?.identity_guild_id}/${status?.discord_user.primary_guild?.badge}.png`;

  return (
    !loading && (
      <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 p-4 bg-secondary border border-border rounded-xl">
        <div>
          <img
            src={`https://api.lanyard.rest/${status?.discord_user.id}.png`}
            alt="Avatar"
            width={108}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="inline-flex justify-center lg:justify-start items-center gap-2">
            <h3>
              <span>{status?.discord_user.username}</span>
            </h3>
            <span className="px-1.75 py-1/2 rounded-md border border-border text-sm flex items-center gap-1 font-bold">
              <img src={badgeURL} alt="Badge" width={16} />
              {status?.discord_user.primary_guild?.tag}
            </span>
          </div>
          <div className="flex gap-4 items-center">
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
            {status?.activities[1] ? (
              <div className="flex flex-col text-sm">
                <p className="font-bold">{status?.activities[1].name ?? ""}</p>
                <p>{status?.activities[1].details ?? ""}</p>
                <p className="text-muted-foreground">
                  {status?.activities[1].state ?? ""}
                </p>
              </div>
            ) : (
              <>Doing nothing</>
            )}
          </div>
        </div>
      </div>
    )
  );
}
