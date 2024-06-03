# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## automated deploy set up
Step-by-Step Instructions

### Create a Shell Script File:
Open your terminal and navigate to the root directory of your project. Then, create a new shell script file named fast-deploy.sh.
```sh
touch fast-deploy.sh
```
### Edit the Shell Script:
Open the fast-deploy.sh file in a text editor and add the following content:
```sh
#!/bin/bash

# Prompt for a commit message
echo "Enter commit message:"
read commit_message

# Add all changes
git add .

# Commit with the provided message
git commit -m "$commit_message"

# Push changes to the default branch
git push

# Run the build and deploy script

npm run deploy
```
### Make the Shell Script Executable:
Make the script executable by running the following command in your terminal:
```sh
chmod +x fast-deploy.sh
```
### dd a Script in package.json:

In your package.json, add a script to run this shell script.
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "deploy": "npm run build && gh-pages -d dist",
    "fast": "./fast-deploy.sh"
  }
}
```
### Running the Script

To run your custom deploy script with a commit message prompt, use the following command:
```sh
npm run fast
```