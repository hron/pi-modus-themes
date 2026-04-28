# [Modus Themes](https://protesilaos.com/emacs/modus-themes) for pi

[![npm version](https://img.shields.io/npm/v/pi-modus-themes)](https://www.npmjs.com/package/pi-modus-themes)

## Previews

### Modus Operandi (light) 

[![Modus Operandi](https://github.com/hron/pi-modus-themes/raw/refs/heads/main/assets/modus-operandi.png)](https://github.com/hron/pi-modus-themes/raw/refs/heads/main/assets/modus-operandi.png)

### Modus Vivendi (dark) 

[![Modus Vivendi](https://github.com/hron/pi-modus-themes/raw/refs/heads/main/assets/modus-vivendi.png)](https://github.com/hron/pi-modus-themes/raw/refs/heads/main/assets/modus-vivendi.png)

## Install

### npm

```bash
pi install npm:pi-modus-themes
```

### git

```bash
pi install git:github.com/hron/pi-modus-themes
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

Add an `NPM_TOKEN` secret in **Settings → Secrets and variables → Actions** with an [npm automation token](https://www.npmjs.com/settings/starcounter28/tokens) that has publish access to `pi-modus-themes`.
