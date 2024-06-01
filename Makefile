build:
	npm install
	npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --minify
	hugo -b $CF_PAGES_URL --minify
