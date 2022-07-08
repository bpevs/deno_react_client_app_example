bundle:
	deno bundle main.tsx dist/main.js

watch:
	deno bundle main.tsx dist/main.js --watch

serve:
	open http://localhost:4507/ && deno run --allow-net --allow-read https://deno.land/std@0.125.0/http/file_server.ts
