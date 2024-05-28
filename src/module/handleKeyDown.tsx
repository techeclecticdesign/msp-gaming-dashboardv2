/* shared code that handles pushing the w and s keys for navigation.  The a and
 * d keys are handled in the gamelist page, as they are only used there. */

const pages = ['', 'installed', 'gamelist', 'manual'];

/* cycle pages on keystroke, based on index of pages.  hookVal is returned value from useRouter or
 * the setState func from useState.  The inputs vary on the keypress (and expected behavior) */
export default function handleKeyDown(e: any, router: any) {
    const page = window.location.href.split('/').slice(-1)[0];
    let loc = pages.findIndex( (val) => val === page);
    const len = pages.length;

    /* sidebar button navigation with 'w' and 's' */
    if(e.key === 's') {
        loc += 1;
        if(loc >= len) {
          loc = 0;
        }
    } else if(e.key === 'w') {
      loc -= 1;
      if(loc < 0) {
        loc = len - 1;
      }
    } else return;
    router.push('http://127.0.0.1:3000/' + pages[loc]);
  }