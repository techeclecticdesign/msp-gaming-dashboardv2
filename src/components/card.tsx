/* the card, holds either ram or disk information */

import Disk from "./disk";
import Ram from "./ram";
import InfoProps from "../module/sysInfoProps";
import clsx from "clsx";

export default function Card({ size, free, shorterSpan, label }: InfoProps) {
  return (
    <div
      className={clsx("h-52 rounded-md bg-indigo-50 shadow p-2 w-72 mt-6", {
        "h-44 w-52": shorterSpan === 2,
      })}
    >
      {free !== -1 /* if free is flagged -1, it is ram */ ? (
        <Disk size={size} free={free} label={label} />
      ) : (
        <Ram size={size} label={label} />
      )}
    </div>
  );
}
