export function themeComponent(theme) {
    return [
        theme.name,
        {
            subdued: `(#${theme.id})`,
        },
    ];
}
export function themesComponent(themes) {
    const items = themes.map(themeComponent);
    return { list: { items } };
}
//# sourceMappingURL=theme-ui.js.map