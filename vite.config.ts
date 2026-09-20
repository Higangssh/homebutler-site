import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

// The install commands name a version, because `go install …@latest` fetches
// whatever is newest and a scanner is right to call that an unpinned install.
// A version typed into a component rots at the next release, so it is read
// from the newest release at build time instead. FALLBACK is what ships if
// GitHub cannot be reached — an older version installs fine, it is only behind.
const FALLBACK = "v0.36.1";

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
