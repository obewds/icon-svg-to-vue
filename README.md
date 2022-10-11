# icon-svg-to-vue

Tiny node-based utility scripts to convert icon svg markup to vue/typescript components

![GitHub package.json version](https://img.shields.io/github/package-json/v/obewds/icon-svg-to-vue?label=Github&logo=github&style=for-the-badge) &nbsp; ![npm](https://img.shields.io/npm/v/@obewds/icon-svg-to-vue?color=%23cc3534&logo=npm&style=for-the-badge)

<br>

Check out the [CHANGELOG](https://github.com/obewds/icon-svg-to-vue/blob/main/CHANGELOG.md)

---
## Documentation

A quick overview of the package functionality.


### Installation

```bash
npm install @obewds/icon-svg-to-vue
```

### Use

Use [npx](https://docs.npmjs.com/cli/v8/commands/npx) to run the script from your project's root directory via a command line with something like this:

```bash
npx icon-svg-to-vue path/to/icon-file.svg path/to/IconFile.vue
```

### Arguments

The command requires two arguments.

| Argument | Description |
|:--------:| ----------- |
| 1st      | The path from the root directory (no leading dots or slashes) to the source path-based SVG file. |
| 2nd      | The path from the root directory (no leading dots or slashes) to the output destination for the Vue component version of the icon SVG to end up. |

### Examples

Let's say you have some icon SVG markup from free icon providers like [FontAwesome](https://fontawesome.com/) or [Heroicons](https://heroicons.com/). For this example, we'll use FontAwesome's free `home.svg` and Heroicons' `backspace.svg` icons.

Now let's assume you've brought them into your Vue project (along with any licensing files 😉), giving you the following hierarchy:

```bash
.
├─ node_modules
├─ iconSvgs
│  ├─ fontAwesome
│  │  └─ free
│  │     └─ house.svg
│  ├─ heroicons
│  │  └─ outline
│  │     └─ backspace.svg
├─ src
│  ├─ components
│  │  ├─ HelloWorld.vue
│  │  └─ SomeComponent.vue
│  ├─ App.vue
│  ├─ main.ts
│  ├─ index.ts
│  └─ ...
├─ package-lock.json
├─ package.json
├─ vite.config.ts
├─ vitest.config.ts
└─ ...

```

#### SVG Paths and Files

If we wanted to convert the `home.svg` and `backspace.svg` icons to Vue files using this package, we'd want to construct our two paths to the SVG files (without any leading dots or slashes).

So for the `house.svg` icon, we'd get:

```bash
iconSvgs/fontAwesome/free/house.svg
```

And for the `backspace.svg` icon, we'd get:

```bash
iconSvgs/heroicons/outline/backspace.svg
```

#### Vue Paths and Files

Next up we'll want to figure out the other argument, mainly where the new Vue version of the file should go!

So for the `house.svg` icon, we'd want something like:

```bash
src/components/fontAwesome/free/FaFreeHouse.vue
```

And for the `backspace.svg` icon, we'd get:

```bash
src/components/heroicons/outline/HiOutlineBackspace.vue
```

#### Finished Commands

Now we can put things together to run this package's script.

So for the `house.svg` icon:

```bash
npx icon-svg-to-vue iconSvgs/fontAwesome/free/house.svg src/components/fontAwesome/free/FaFreeHouse.vue
```

And for the `backspace.svg` icon:

```bash
npx icon-svg-to-vue iconSvgs/heroicons/outline/backspace.svg src/components/heroicons/outline/HiOutlineBackspace.vue
```

#### Final Output

Running those finished commands would change your files to now look like this:

```bash
.
├─ node_modules
├─ iconSvgs
│  ├─ fontAwesome
│  │  └─ free
│  │     └─ FaFreeHouse.vue
│  ├─ heroicons
│  │  └─ outline
│  │     └─ HiOutlineBackspace.vue
├─ src
│  ├─ components
│  │  ├─ fontAwesome
│  │  │  └─ free
│  │  │     └─ house.svg
│  │  ├─ heroicons
│  │  │  └─ outline
│  │  │     └─ backspace.svg
│  │  ├─ HelloWorld.vue
│  │  └─ SomeComponent.vue
│  ├─ App.vue
│  ├─ main.ts
│  ├─ index.ts
│  └─ ...
├─ package-lock.json
├─ package.json
├─ vite.config.ts
├─ vitest.config.ts
└─ ...

```

This means you could call your new components in a Vue and Tailwind CSS project for example, like this:

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">
    import FaFreeHouse from './fontAwesome/free/FaFreeHouse.vue'
    import HiOutlineBackspace from './heroicons/outline/HiOutlineBackspace.vue'
</script>

<template>
    <div class="flex justify-center items-center gap-10">
        <FaFreeHouse
            class="w-20"
            fill-classes="fill-blue-700 dark:fill-blue-300"
        />
        <HiOutlineBackspace
            class="w-20"
            fill-classes="fill-blue-700 dark:fill-blue-300"
        />
    </div>
</template>
```

#### Mutations

This package does mutates the source SVG code a tiny bit. Right now this mutation mainly focuses on the removing some downstream use blocking defaults from typical SVG icons from the two sets of icons in the examples above - IE FontAwesome and Heroicons.

* In the case of the former, this package's command line script will change the characters `!--!` to just `!--`.
* In the case of the latter, it will remove the strings ` class="w-6 h-6"` and ` class="w-5 h-5"`.
* In both cases, the icon SVG's child node `path` elements will each have a Vue prop-driven `:class="fillClasses"` string added to them.

All together this means you can control the sizing for your new SVG Vue components using the `class` attribute on the component instance itself, and can control the color of the icon itself using the Vue prop `fill-classes="..."` on the same component instance (yay one-liners).

#### Moving Forward

> This package came to be after one too many issues from icon providers, even with their awesome JavaScript integrations. So this package essentially allows for Vue-ifying a couple of the major icon providers' icons in a very fast, easy and specific way so coders can get back to coding and stop losing time to icons libraries.

That said, it'd be interesting to over time find out how this basic idea can be adapted to most of the free SVG icon providers out there!

So feel free to make a PR and maybe down the road and if needed we can simply add another argument to specify a type of icon to strip down and convert to Vue.js goodness!

<br>
