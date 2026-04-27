const fs = require('fs');
const path = require('path');
const { operandi, vivendi } = require('./palettes');

const SCHEMA = 'https://raw.githubusercontent.com/badlogic/pi-mono/main/packages/coding-agent/src/modes/interactive/theme/theme-schema.json';
const OUT_DIR = path.join(__dirname, '..', 'themes');

function makeTheme(name, p) {
  return {
    $schema: SCHEMA,
    name,
    vars: {
      bgMain: p.bg_main,
      bgDim: p.bg_dim,
      fgMain: p.fg_main,
      fgDim: p.fg_dim,
      fgAlt: p.fg_alt,
      borderColor: p.border,
      red: p.red,
      green: p.green,
      yellow: p.yellow,
      blue: p.blue,
      magenta: p.magenta,
      cyan: p.cyan,
      blueWarmer: p.blue_warmer,
      bgBlueSubtle: p.bg_blue_subtle,
      bgGreenSubtle: p.bg_green_subtle,
      bgYellowSubtle: p.bg_yellow_subtle,
      bgRedSubtle: p.bg_red_subtle,
      bgBlueNuanced: p.bg_blue_nuanced,
      bgGreenNuanced: p.bg_green_nuanced,
      bgYellowNuanced: p.bg_yellow_nuanced,
      bgRedNuanced: p.bg_red_nuanced,
      bgCyanNuanced: p.bg_cyan_nuanced,
    },
    colors: {
      accent: 'blue',
      border: 'borderColor',
      borderAccent: 'blue',
      borderMuted: p.bg_inactive,
      success: 'green',
      error: 'red',
      warning: 'yellow',
      muted: 'fgDim',
      dim: p.fg_dim === '#595959' ? '#767676' : '#646464',
      text: '',
      thinkingText: 'fgDim',

      selectedBg: 'bgBlueSubtle',
      userMessageBg: 'bgDim',
      userMessageText: '',
      customMessageBg: 'bgBlueNuanced',
      customMessageText: '',
      customMessageLabel: p.magenta_cooler,
      toolPendingBg: 'bgCyanNuanced',
      toolSuccessBg: 'bgGreenNuanced',
      toolErrorBg: 'bgRedNuanced',
      toolTitle: '',
      toolOutput: 'fgDim',

      mdHeading: p.fg_heading_2,
      mdLink: p.fg_link,
      mdLinkUrl: 'fgDim',
      mdCode: 'cyan',
      mdCodeBlock: p.string,
      mdCodeBlockBorder: 'fgDim',
      mdQuote: 'fgDim',
      mdQuoteBorder: 'borderColor',
      mdHr: 'borderColor',
      mdListBullet: 'cyan',

      toolDiffAdded: 'green',
      toolDiffRemoved: 'red',
      toolDiffContext: 'fgDim',

      syntaxComment: p.comment,
      syntaxKeyword: p.keyword,
      syntaxFunction: p.fnname,
      syntaxVariable: p.variable,
      syntaxString: p.string,
      syntaxNumber: p.number,
      syntaxType: p.type,
      syntaxOperator: p.operator,
      syntaxPunctuation: p.punctuation,

      thinkingOff: p.bg_inactive,
      thinkingMinimal: p.fg_dim === '#595959' ? '#767676' : '#646464',
      thinkingLow: p.blue_warmer,
      thinkingMedium: 'cyan',
      thinkingHigh: p.magenta,
      thinkingXhigh: p.red,

      bashMode: 'green',
    },
    export: {
      pageBg: p.bg_dim,
      cardBg: p.bg_main,
      infoBg: p.bg_yellow_subtle,
    },
  };
}

const themes = [
  { name: 'modus-operandi', palette: operandi },
  { name: 'modus-vivendi', palette: vivendi },
];

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

for (const { name, palette } of themes) {
  const theme = makeTheme(name, palette);
  const outPath = path.join(OUT_DIR, `${name}.json`);
  fs.writeFileSync(outPath, JSON.stringify(theme, null, 2) + '\n');
  console.log(`Generated ${outPath}`);
}
