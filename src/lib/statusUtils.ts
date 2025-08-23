type Status = "online" | "idle" | "dnd" | "offline" | undefined;

const getBorderColorFromStatus = (status: Status) => {
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

const getColorFromStatus = (status: Status) => {
  switch (status) {
    case "online":
      return "text-green-500";
    case "idle":
      return "text-yellow-500";
    case "dnd":
      return "text-red-400";
    case "offline":
    case undefined:
      return "text-gray-500";
  }
};

const getBeforeColorFromStatus = (status: Status) => {
  switch (status) {
    case "online":
      return "before:bg-green-500";
    case "idle":
      return "before:bg-yellow-500";
    case "dnd":
      return "before:bg-red-400";
    case "offline":
    case undefined:
      return "before:bg-gray-500";
  }
};

const mapStatusToString = (status: Status) => {
  switch (status) {
    case "online":
      return "Online";
    case "idle":
      return "Idle";
    case "dnd":
      return "Do not disturb";
    case "offline":
    case undefined:
      return "Offline";
  }
};

export {
  getBorderColorFromStatus,
  getColorFromStatus,
  getBeforeColorFromStatus,
  mapStatusToString,
};
