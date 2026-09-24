export function renderErrorPage(error?: unknown): string {
  const message = error instanceof Error ? error.message : String(error ?? "Unknown error");
  const stack = error instanceof Error ? error.stack : "";
  const encoded = (message + (stack ? `\n\n${stack}` : "")).slice(0, 4000);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fdf8ee; color: #5c5044; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 36rem; width: 100%; text-align: center; padding: 2rem; background: #fff; border: 1px solid #e7ddd0; border-radius: 4px; box-shadow: 0 18px 40px -24px rgba(92,80,68,0.3); }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; color: #5c5044; }
      p { color: #7a6e5d; margin: 0 0 1rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #cfa96e; color: #fff; border-color: #cfa96e; }
      .secondary { background: #fff; color: #5c5044; border-color: #d1d5db; }
      details { margin-top: 1rem; text-align: left; background: #fdf8ee; border: 1px solid #e7ddd0; border-radius: 4px; padding: 0.75rem; }
      summary { cursor: pointer; font-size: 12px; font-weight: 600; color: #7a6e5d; }
      pre { margin: 0.5rem 0 0; max-height: 18rem; overflow: auto; white-space: pre-wrap; word-break: break-word; font: 11px/1.4 ui-monospace, monospace; color: #5c5044; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <details open>
        <summary>Error details (for debugging — will be hidden after fix)</summary>
        <pre>${encoded.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
      </details>
      <div class="actions" style="margin-top:1rem">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
