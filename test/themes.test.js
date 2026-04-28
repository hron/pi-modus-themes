import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, it } from 'node:test';
import assert from 'node:assert';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const themesDir = path.join(__dirname, '../themes');

// 51 required color tokens as per pi theme specification
const REQUIRED_TOKENS = [
  // Core UI (11)
  'accent', 'border', 'borderAccent', 'borderMuted', 'success', 'error',
  'warning', 'muted', 'dim', 'text', 'thinkingText',
  // Backgrounds & Content (11)
  'selectedBg', 'userMessageBg', 'userMessageText', 'customMessageBg',
  'customMessageText', 'customMessageLabel', 'toolPendingBg', 'toolSuccessBg',
  'toolErrorBg', 'toolTitle', 'toolOutput',
  // Markdown (10)
  'mdHeading', 'mdLink', 'mdLinkUrl', 'mdCode', 'mdCodeBlock',
  'mdCodeBlockBorder', 'mdQuote', 'mdQuoteBorder', 'mdHr', 'mdListBullet',
  // Tool Diffs (3)
  'toolDiffAdded', 'toolDiffRemoved', 'toolDiffContext',
  // Syntax Highlighting (9)
  'syntaxComment', 'syntaxKeyword', 'syntaxFunction', 'syntaxVariable',
  'syntaxString', 'syntaxNumber', 'syntaxType', 'syntaxOperator', 'syntaxPunctuation',
  // Thinking Level Borders (6)
  'thinkingOff', 'thinkingMinimal', 'thinkingLow', 'thinkingMedium',
  'thinkingHigh', 'thinkingXhigh',
  // Bash Mode (1)
  'bashMode'
];

const themeFiles = fs.readdirSync(themesDir).filter(f => f.endsWith('.json'));

describe('Theme validation', { concurrency: true }, () => {
  for (const file of themeFiles) {
    const themePath = path.join(themesDir, file);
    const themeName = file.replace('.json', '');
    let theme;

    describe(themeName, () => {
      it('file is valid JSON', () => {
        const content = fs.readFileSync(themePath, 'utf8');
        theme = JSON.parse(content);
      });

      it('has required "name" field', () => {
        assert.ok(theme.name, 'missing name field');
        assert.strictEqual(theme.name, themeName, `name should be "${themeName}"`);
      });

      it('has required "colors" object', () => {
        assert.ok(theme.colors, 'missing colors object');
        assert.strictEqual(typeof theme.colors, 'object', 'colors must be an object');
      });

      it('has all 51 required color tokens', () => {
        const missing = REQUIRED_TOKENS.filter(t => !(t in theme.colors));
        assert.strictEqual(missing.length, 0, `missing tokens: ${missing.join(', ')}`);
      });

      it('all color tokens have non-empty values', () => {
        const empty = REQUIRED_TOKENS.filter(t => theme.colors[t] === undefined || theme.colors[t] === null);
        assert.strictEqual(empty.length, 0, `empty tokens: ${empty.join(', ')}`);
      });
    });
  }
});
