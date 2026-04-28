# Modus Themes for pi

[![npm version](https://img.shields.io/npm/v/@starcounter28/pi-modus-themes)](https://www.npmjs.com/package/@starcounter28/pi-modus-themes)

## Previews


### [Modus Operandi](https://protesilaos.com/emacs/modus-themes) (light) 

[![Modus Operandi](https://github.com/hron/pi-modus-themes/raw/refs/heads/main/assets/modus-operandi.png)](https://github.com/hron/pi-modus-themes/raw/refs/heads/main/assets/modus-operandi.png)

### [Modus Vivendi](https://protesilaos.com/emacs/modus-themes) (dark) 

[![Modus Vivendi](https://github.com/hron/pi-modus-themes/raw/refs/heads/main/assets/modus-vivendi.png)](https://github.com/hron/pi-modus-themes/raw/refs/heads/main/assets/modus-vivendi.png)

## Install

```bash
pi install /path/to/this/repo
```

Or from a remote:

```bash
pi install git:github.com/yourname/pi-modus-themes
```

## Select

In pi, run `/settings` and choose `modus-operandi` or `modus-vivendi`.

## Generate

Themes are generated from palette definitions in `src/palettes.js`:

```bash
npm run generate
```

## Colors

Palette colors and semantic mappings are taken from the official [Modus themes](https://github.com/protesilaos/modus-themes) by Protesilaos Stavrou.

## Publishing (for maintainers)

This package is automatically published to npm via GitHub Actions when a new [GitHub Release](https://github.com/hron/pi-modus-themes/releases) is created.

### Steps to publish a new version

1. Run `npm run release -- <bump>` where `<bump>` is `minor`, `patch`, or `major`.
2. Push remote: `git push`.
3. `release-it` creates a GitHub Release, which triggers the [publish workflow](.github/workflows/publish.yml).

### Required setup

- Install dependencies: `npm install`.
- Ensure the repository has an `NPM_TOKEN` secret configured under **Settings → Secrets and variables → Actions**. The token must be an [npm automation token](https://docs.npmjs.com/creating-and-viewing-access-tokens) with publish access to this package (or the scope if the package is scoped).
