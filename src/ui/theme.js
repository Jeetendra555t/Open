(function () {
    const applyTheme = (theme) => {
        document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';
    };

    applyTheme('dark');

    if (window.electronAPI) {
        window.electronAPI.getSettings?.().then((settings) => {
            applyTheme(settings?.theme);
        }).catch(() => {});

        window.electronAPI.receive?.('theme-changed', (_event, data) => {
            applyTheme(data?.theme);
        });
    }
})();