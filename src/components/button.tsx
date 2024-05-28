/* Button used on gamelist page to filter games by category */

import clsx from "clsx";

interface IButtonProps {
  label: string;
  selected: string;
}

export default function Button({ label, selected }: IButtonProps) {
  return (
    <button
      className={clsx(
        "text-xs font-bold h-8 \
                w-16 rounded-md mb-2",
        {
          "bg-blue-300": selected === label,
          "cursor-pointer bg-sky-100": selected !== label,
        }
      )}
    >
      {label}
    </button>
  );
}
