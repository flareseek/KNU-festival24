/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

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
