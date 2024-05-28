/* list games currently installed on the system */

import { XMLParser } from "fast-xml-parser";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { bundledSystems, gameSystems } from "../module/gameSystemArrays";

function parseXml(system: string, installMap: any) {
  const parser = new XMLParser();
  const parsed = parser.parse(installMap[system]);
  let gameObjs: any = [];
  if (parsed.menu.game) {
    gameObjs = parsed.menu.game;
  } else {
    return [];
  }
  /* if only one game in database, fast-xml-parser will not put it into array automatically */
  if (parsed.menu.game.constructor === Object) {
    return [parsed.menu.game.description];
  }
  return gameObjs.map((ob: any) => ob.description);
}

function buildList(installMap: any) {
  let installedBundles: string[] = [];
  let installed: any = {};

  /* installed bundles get special treatment */
  bundledSystems.map((system) => {
    if (parseXml(system, installMap).length) {
      installedBundles.push(system);
    }
  });

  if (installedBundles.length) installed["Bundles"] = installedBundles;

  /* now for individually installed games */
  gameSystems.map((system) => {
    let games = parseXml(system, installMap);
    if (games.length) {
      installed[system] = games;
    }
  });
  return installed;
}

export default function Page() {
  const [installed, setInstalled] = useState();

  useEffect(() => {
    invoke("getInstalled").then((data: any) => {
      setInstalled(buildList(data));
    });
  }, []);

  if (!installed) return <h1>Loading...</h1>;
  else
    return (
      <>
        <h1>Installed Games</h1>
        <div className="columns-2">
          {Object.keys(installed).map((system) => {
            return (
              <div className="break-inside-avoid" key={system}>
                <h3 className="my-2">{system}</h3>
                {installed[system].map((item: string) => {
                  return <p key={item}>{item}</p>;
                })}
              </div>
            );
          })}
        </div>
      </>
    );
}
