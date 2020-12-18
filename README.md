# Marapp-uikit

A fork of Uikit that includes conversion to scss and additional components

Last update with uikit: [75743c3ab8c84f57b7ce3fe91054767ef3c34a50](https://github.com/uikit/uikit/commit/75743c3ab8c84f57b7ce3fe91054767ef3c34a50) ([v2.26.3](https://github.com/uikit/uikit/releases/tag/v2.26.3))

### Setup for Development

**Required: Use node v10.0.0**

1. Clone the repo from GitHub
2. [Install Node](https://nodejs.org/en/download/)
3. Run `npm install` from within the repo directory

### Adding a new icon
1. Paste the svg file in `/src/icons`. The name is important because it will generate the class name based on it. Eg: `home.svg` => `.ng-icon-home`
2. Commit the changes
3. Increment the patch version with `npm version patch`
4. Push the new tag with `git push --tags`
5. Merge the code to master and wait for Jenkins to publish the new package