import { defineConfig, searchForWorkspaceRoot } from "vite";
import pugPlugin from "vite-plugin-pug";

const options = {};
const locals = { name: "My Pug" };

export default defineConfig({
    plugins: [pugPlugin(options, locals)],
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            strict: false,
        },
    },
});
