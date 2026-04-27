# Modus Themes for pi

[Modus Operandi](https://protesilaos.com/emacs/modus-themes) (light) and [Modus Vivendi](https://protesilaos.com/emacs/modus-themes) (dark) themes for the [pi coding agent](https://pi.dev).

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
