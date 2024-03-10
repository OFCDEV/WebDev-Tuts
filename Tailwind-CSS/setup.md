## How to setup Tailwind CSS

Step-1: Run the following commands

```
npm install -D tailwindcss

npx tailwindcss init
```

Step-2: Install NPM and Update tailwind.config file to include this line:
```
content: ["./src/**/*.{html,js}"],
```

Step-3: create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Step-4: Link the src/output.css file to the html

Step-5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```