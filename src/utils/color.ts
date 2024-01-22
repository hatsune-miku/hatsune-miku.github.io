export default class Color {
  static accent(color: "primary" | "neutral"): string {
    return `var(--variant-solidBg, var(--joy-palette-${color}-solidBg))`;
  }
}
