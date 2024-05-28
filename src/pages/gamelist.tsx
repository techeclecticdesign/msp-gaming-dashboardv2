"use client";

/* Displays a list of all games, filtered by system selected by buttons */

import {
  gameSystems,
  shortSystemNames,
  bundledSystems,
} from "../module/gameSystemArrays";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function Page() {
  const [system, setSystem] = useState("Bundled Systems");
  const [gamelistOb, setGamelistOb] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  /* saleCategories is gameSystems, with addition of 'Bundled Systems' */
  const saleCategories = ["Bundled Systems", ...gameSystems];
  let loc = saleCategories.findIndex((val) => val === system);

  var promises = gameSystems.map((sys) => {
    return fetch(`/text/${sys}.txt`)
      .then((x) => x.text())
      .then((text) => {
        return { system: sys, text: text };
      });
  });

  useEffect(() => {
    Promise.all(promises).then(function (results) {
      let result: any = { "Bundled Systems": bundledSystems };
      results.forEach((gameSystem: any) => {
        result[gameSystem.system] = gameSystem.text.split("\n");
      });
      setGamelistOb(result);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!gamelistOb) return <p>Error</p>;
  else console.log(gamelistOb);
  return (
    <div tabIndex={1}>
      <h1>Master Game List</h1>
      <div className="grid grid-cols-7">
        {shortSystemNames.map((item: string, i: number) => {
          return (
            <button
              onClick={() => {
                setSystem(saleCategories[i]);
                loc = i;
              }}
              className={clsx("text-xs font-bold h-8 w-16 rounded-md mb-2", {
                "bg-blue-300": shortSystemNames[loc] === item,
                "cursor-pointer bg-sky-100": shortSystemNames[loc] !== item,
              })}
            >
              {item}
            </button>
          );
        })}
      </div>
      <h2>{system}</h2>
      <div className="columns-2">
        {console.log(gamelistOb, system)}
        {gamelistOb[system].map((game: string) => {
          return <p key={game}>{game}</p>;
        })}
      </div>
    </div>
  );
}
