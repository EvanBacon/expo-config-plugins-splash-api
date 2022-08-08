# Expo Config Plugins: `expo-splash-screen` internal API

> TL;DR: [start here](https://github.com/EvanBacon/expo-config-plugins-splash-api/blob/e4cc176cbc5923ded71349d70d66f5ba73bb4c8d/withSplash.ts#L16).

Example of using the internal `expo-splash-screen` config plugin API to modify the interface builder file directly as JSON. This would in theory enable users to add things like `UILabel`s to the bottom of the splash screen. 

The API is unexposed since the iOS format is not very user friendly. Developers could potentially refer to my work on [react-xib](https://github.com/EvanBacon/react-xib/blob/main/demo/) to better understand the format.

The API is a safe modifier so it can be introspected with `npx expo config --type introspect` to generate changes without persisting anything.
