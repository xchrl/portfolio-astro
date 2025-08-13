import { useLanyard } from "react-use-lanyard";

const DISCORD_ID = "329597208494211073";

const getAssetUrl = (appId: string, assetId: string) => {
  if (assetId.startsWith("mp:"))
    return assetId.substring(assetId.indexOf("https"));
  return `https://cdn.discordapp.com/app-assets/${appId}/${assetId}.png`;
};

export default function DiscordPresence() {
  const { loading, status } = useLanyard({
    userId: DISCORD_ID,
    socket: true,
  });

  /*
        <div class="flex">
        <Image src={avatar} alt="Avatar" loading="eager" />
        <div class="flex flex-col"></div>
      </div>
      */

  console.log(status);

  return (
    !loading && (
      <div className="flex gap-6 p-4 bg-secondary border border-border rounded-xl">
        <div>
          <img
            src={`https://api.lanyard.rest/${status?.discord_user.id}.png`}
            alt="Avatar"
            width={108}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3>{status?.discord_user.username}</h3>
          <div className="flex gap-4">
            {status?.discord_status === "offline" ? (
              <p>Currently offline</p>
            ) : (
              status?.activities[1] && (
                <div className="relative w-fit">
                  {status?.activities[1].assets && (
                    <img
                      src={getAssetUrl(
                        status!.activities[1].application_id!,
                        status!.activities[1].assets!.large_image
                      )}
                      alt="Activity large image"
                      className="size-16 rounded-lg"
                    />
                  )}
                  <img
                    src={getAssetUrl(
                      status!.activities[1].application_id!,
                      status!.activities[1].assets!.small_image
                    )}
                    alt="Activity small image"
                    className="size-6 rounded-full border border-black absolute -bottom-1 -right-1"
                  />
                </div>
              )
            )}
            {status?.activities[1] ? (
              <div className="flex flex-col text-sm">
                <p className="font-bold">{status?.activities[1].name}</p>
                <p>{status?.activities[1].details}</p>
                <p className="text-muted-foreground">
                  {status?.activities[1].state}
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
