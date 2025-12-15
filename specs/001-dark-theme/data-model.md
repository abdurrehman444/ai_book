# Data Model: Dark Color Theme

## Theme Preference Entity

**Entity Name**: ThemePreference
**Description**: Represents a user's theme selection preference

**Attributes**:
- themeType: String (Values: "light", "dark", "system")
- timestamp: DateTime (When the preference was last updated)
- userId: String (Optional - for logged-in users, null for anonymous)

**Validation Rules**:
- themeType must be one of the allowed values: "light", "dark", "system"
- timestamp must be in ISO 8601 format
- For anonymous users, preference is stored in browser's localStorage

**State Transitions**:
- Initial state: themeType = "system" (respects user's system preference)
- User can transition to: "light" or "dark" based on selection
- System preference change may influence default but doesn't override user selection

## Theme Configuration Entity

**Entity Name**: ThemeConfiguration
**Description**: Defines the color palette and styling properties for each theme

**Attributes**:
- themeName: String (Values: "light", "dark")
- colors: Object (Contains key-value pairs for CSS variables)
  - backgroundColor: String (Hex or RGB value)
  - textColor: String (Hex or RGB value)
  - accentColor: String (Hex or RGB value)
  - linkColor: String (Hex or RGB value)
  - borderColors: Object (Various border color values)
  - codeBlockColors: Object (Syntax highlighting colors)

**Validation Rules**:
- All color values must meet WCAG AA contrast ratios when combined
- Required color properties must be defined for each theme
- Color values must be in valid CSS format (hex, rgb, rgba, hsl, etc.)

## Relationships

- ThemePreference references ThemeConfiguration to apply the selected theme
- Multiple UI components consume ThemeConfiguration values for consistent styling