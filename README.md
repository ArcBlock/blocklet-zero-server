# Blocklet + Zero = <3

This is a simple starter Blocklet, built with **Zero**.

**Zero** is a web server to simplify web development. It allows you to build your application without worrying about package management or routing. It's as simple as writing your code in a mix of **Node.js, React, HTML, MDX, Vue, Svelte, Python, and static files** and putting them all in a folder. Zero will serve them all. Zero abstracts the usual project configuration for routing, bundling, and transpiling to make it easier to get started.

Find out more [about Zero](https://zeroserver.io) or at [GitHub](https://github.com/remoteinterview/zero).

## How to use

To make changes

- edit or add pages in `www/`, in any of the supported frameworks/languages (see above).
- add NPM modules to `www/package.json` instead of the root one. Or just `require()` them in your code and Zero will auto install it.

## Get Started

You can install zero globally by:

```
npm install -g **zero**
```