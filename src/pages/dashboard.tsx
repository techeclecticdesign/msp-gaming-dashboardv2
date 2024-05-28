/* the container that holds dashboard components and passes them the props they need */

import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Card from "../components/card";

export default function Dashboard() {
  let shorterSpan: number;
  const [memory, setMemory] = useState(0);
  const [drive_c_size, set_drive_c_size] = useState(0);
  const [drive_c_free, set_drive_c_free] = useState(0);
  const [drive_d_size, set_drive_d_size] = useState(0);
  const [drive_d_free, set_drive_d_free] = useState(0);

  useEffect(() => {
    let drivesTotal, drivesFree;

    invoke("getSystemMemory").then((data: any) => {
      setMemory(data);
    });

    invoke("getFreeDiskSpace").then((data: any) => {
      //drivesFree = data;
      set_drive_c_free(500);
    });

    invoke("getTotalDiskSpace").then((data: any) => {
      //drivesTotal = data;
      set_drive_c_size(1000);
    });

    /* TODO */
    console.log(drivesTotal);
  }, []);

  if (drive_d_size) shorterSpan = 2;
  else shorterSpan = 0;

  return (
    <>
      <h1>Game System Dashboard</h1>
      <div className="flex flex-row gap-4">
        <Card free={-1} size={memory} shorterSpan={shorterSpan} label={"RAM"} />
        <Card
          free={drive_c_free}
          size={drive_c_size - drive_c_free}
          shorterSpan={shorterSpan}
          label={"Disk 1"}
        />
        {shorterSpan ? (
          <Card
            free={drive_d_free}
            size={drive_d_size - drive_d_free}
            shorterSpan={shorterSpan}
            label={"Disk 2"}
          />
        ) : null}
      </div>
      <h1 className="mt-16">Directions:</h1>
      <h3>
        Move Cursor - <b>Right Analog Stick</b>
      </h3>
      <h3>
        Mouse Click - <b>Right Trigger</b>
      </h3>
      <h3>
        Scrolling - <b>Left and Right Bumpers</b>
      </h3>
    </>
  );
}
