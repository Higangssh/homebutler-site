import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

// The install commands name a version, because `go install …@latest` fetches
// whatever is newest and a scanner is right to call that an unpinned install.
// A version typed into a component rots at the next release, so it is read
// from the newest release here instead.
//
// This is the first of three readings, not the only one. A build runs when
// somebody pushes to this repository, which has nothing to do with when a
// release ships: 0.38.0 went out and the page kept offering 0.37.0 because no
// site change happened in between. So the page asks GitHub again when it
// loads (Install.tsx), and this value is what it starts from.
//
// FALLBACK is the last of the three, for a build that cannot reach GitHub at
// all. It is allowed to be old — being a release behind installs fine, and a
// build that stops is worse than a version that lags.
const FALLBACK = "v0.38.0";

async function latestRelease(): Promise<string> {
  try {
    const res = await fetch("https://api.github.com/repos/Higangssh/homebutler/releases/latest", {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "homebutler-site-build" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`GitHub answered ${res.status}`);
    const tag = (await res.json() as { tag_name?: string }).tag_name;
    if (!tag || !/^v\d+\.\d+\.\d+$/.test(tag)) throw new Error(`unexpected tag ${tag}`);
    console.log(`[version] install commands will say ${tag}`);
    return tag;
  } catch (err) {
    console.warn(`[version] falling back to ${FALLBACK}: ${(err as Error).message}`);
    return FALLBACK;
  }
}

export default defineConfig(async () => ({
  plugins: [react(), tailwindcss(), cloudflare()],
  define: {
    __HOMEBUTLER_VERSION__: JSON.stringify(await latestRelease()),
  },
}))
