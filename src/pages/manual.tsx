/* The manual page, with general instructions on using game system */

export default function Page() {
  const gamepadImages: string[] = [
    "ps2",
    "gamecube",
    "n64",
    "wii",
    "snes",
    "sega",
  ];
  return (
    <div className="w-3/4">
      <h1>Game System Guide</h1>
      <h2>Setting Up Your Game System</h2>
      <ul>
        <li>
          Place your game system on a stable, flat surface. Make sure there is
          nothing blocking any of its vents. Do not place papers, books or etc.
          on top of system, as this will trap more heat inside the system.
        </li>
        <li>
          Plug the HDMI cord into your game system. If there is more than one
          HDMI slot, you can use either. (If you use both slots, the same image
          will be shown on both attached TV&apos;s).
        </li>
        <li>
          Plug the other end of the HDMI cord into your TV. On some TV&apos;s
          this is a tight fit. It is best to bend the cord slightly so that the
          connector lines up straight with the slot on TV before attempting to
          plug it in.
        </li>
        <li>
          The controller(s) plug into one of the rectangular USB ports on the
          game system. It doesn&apos;t matter which you use. Be mindful that
          there is a right side up and an upside down with the connector. Check
          the end of the connector and the port on the system to make sure you
          are putting it in right side up.
        </li>
        <li>
          To use the game system you will need to set your TV to HDMI mode.
        </li>
        <li>
          While using the gaming PC it will get quite warm. This is normal. The
          game system can handle temperatures of up to 240F degrees. When it
          gets hot, you should hear the fans on.
        </li>
      </ul>
      <h2>Using the HyperSpin frontend</h2>
      <ul>
        <li>
          The HyperSpin frontend is the program you use to browse and launch
          games.
        </li>
        <li>
          Up and down on the left analog stick and the d-pad will move from one
          game to another.
        </li>
        <li>
          Push <b>A</b> on the controller to make a selection. Do not hold the
          button down, as this will cause it to not register your press.
        </li>
        <li>
          Push <b>B</b> to back out of your current game system. If you push{" "}
          <b>B</b> in the main menu, you will be asked if you want to shut down
          the system.
        </li>
        <li>
          When you are in a game and want to go back to the HyperSpin frontend,
          press <b>home</b> and <b>select</b> together. On same games or
          emulated systems, you may need to use <b>select</b> and <b>start</b>{" "}
          instead.
        </li>
        <li>
          If a game ever freezes and you cannot exit by holding down{" "}
          <b>select</b>, press the power button on the game system. The system
          should begin shutting down shortly after.
        </li>
        <li>
          If pressing the power button does not cause the computer to shut down,
          as a last resort hold the power button down until the game system
          turns off. This should only be done when computer is completely
          frozen; shutting down this way can corrupt the system.
        </li>
      </ul>
      <h2>Game System Controller</h2>
      <img
        src="/ifyoo.png"
        width={300}
        height={240}
        alt="An image of one of the controllers available for the game system."
      />
      <ul>
        <li>
          <b>Turbo button:</b> Some controllers have a turbo button, often
          labeled &quot;T&quot;. Holding it down and pressing another button
          will make that button go into turbo mode. When a button is in turbo
          mode, holding it down will behave like you are pressing and releasing
          it rapidly. To disable, hold down T and push the other button again.
          If a button suddenly stops working as expected, check to make sure
          turbo is not enabled on that button.
        </li>
        <li>
          <b>Pointer Support</b>: For DS, 3DS, Wii, and some PC/PS4 games, the
          right analog stick behaves like a pointing device. You can push R3 to
          click or tap, and the current position of the pointer will be pressed.
        </li>
      </ul>
      <h2>Controller Mappings</h2>
      <div className="grid grid-cols-3 gap 2">
        {gamepadImages.map((name, i) => {
          return (
            <img
              src={"/" + name + ".png"}
              width={300}
              height={240}
              alt={"A controller for the " + name + "."}
              key={i /* safe use of i as key */}
            />
          );
        })}
      </div>
      <ul>
        <li>
          <b>Nintendo Systems</b>: A and B are in reverse order compared to game
          system controller.
        </li>
        <li>
          <b>3DS</b>: L3 toggles the view layout of the two screens.
        </li>
      </ul>
      <h2>Important Notes</h2>
      <ul>
        <li>
          In games where there is a menu that requires a mouse, such as the Tomb
          Raider games, use the start button to progress further.
        </li>
        <li>
          In games where a keyboard is needed, such as when entering characters
          name, press the <b>select</b> button to enter a preset name and
          progress further. Some games use the <b>home</b> button instead.
        </li>
        <li>
          In games that are mouse driven, the <b>left analog stick</b> moves the
          mouse, the <b>a button</b> is the left mouse click, and the{" "}
          <b>b button</b> is the right mouse click. Other controls are mapped
          individually as convenient for the game.
        </li>
        <li>
          You must have at least 20 GB free space to prevent system corruption.
          Game system workers cannot install games past this limit
        </li>
      </ul>
    </div>
  );
}
