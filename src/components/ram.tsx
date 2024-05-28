/* displays the amount of currently installed RAM, with a RAM icon */

import InfoProps from "../module/sysInfoProps";

export default function Ram({ size }: InfoProps) {
  return (
    <div className="h-20">
      <h4 className="mb-6">Installed Ram</h4>
      <div className="flex ml-2">
        <img src="/ram.png" width={120} height={120} alt="RAM Icon" />
        <h1 className="p-3 ml-2 mt-5">{size} GB</h1>
      </div>
    </div>
  );
}
