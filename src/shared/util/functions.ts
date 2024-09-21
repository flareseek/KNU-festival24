import { Asset } from "../types/asset_types";

export const availableAsset = <T extends Asset>(assets: T[]) => {
  if (assets.length === 0) throw new Error("No assets");
  if (assets.find((v) => v.date === undefined)) return assets[0];

  const START_DATE = 23;
  const END_DATE = 25;
  const now = new Date();
  const options = { timeZone: "Asia/Seoul" };
  const seoulDate = new Date(now.toLocaleString("en-US", options));
  const curDay = seoulDate.getDate();

  if (curDay < START_DATE) {
    return assets.sort((a, b) => a.date![0] - b.date![0])[0];
  } else if (curDay > END_DATE) {
    return assets.sort((a, b) => b.date![0] - a.date![0])[0];
  }
  return assets.find((v) => v.date!.includes(curDay)) ?? assets[0];
};
