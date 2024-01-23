export default class Color {
  static accent(color: "primary" | "neutral"): string {
    return `var(--variant-solidBg, var(--joy-palette-${color}-solidBg))`;
  }

  static text(isDarkMode: boolean): string {
    return isDarkMode ? `rgb(224, 224, 224)` : `#242424`;
  }
}
