// Gerenciador de configurações globais
class SettingsManager {
    constructor() {
        this.settings = {
            theme: 'tema-padrao',
            darkMode: false,
            readingMode: false,
            fontSize: 'normal',
            highContrast: false
        };
        this.loadSettings();
        this.applySettings();
    }

    // Carregar configurações do localStorage
    loadSettings() {
        const savedSettings = {
            theme: localStorage.getItem('tema'),
            darkMode: localStorage.getItem('modoEscuro') === 'true',
            readingMode: localStorage.getItem('modoLeitura') === 'true',
            fontSize: localStorage.getItem('tamanhoFonte'),
            highContrast: localStorage.getItem('contrasteAlto') === 'true'
        };

        // Atualizar apenas as configurações que existem no localStorage
        Object.keys(savedSettings).forEach(key => {
            if (savedSettings[key] !== null) {
                this.settings[key] = savedSettings[key];
            }
        });
    }

    // Salvar configurações no localStorage
    saveSettings() {
        localStorage.setItem('tema', this.settings.theme);
        localStorage.setItem('modoEscuro', this.settings.darkMode);
        localStorage.setItem('modoLeitura', this.settings.readingMode);
        localStorage.setItem('tamanhoFonte', this.settings.fontSize);
        localStorage.setItem('contrasteAlto', this.settings.highContrast);
    }

    // Aplicar todas as configurações
    applySettings() {
        // Aplicar tema
        document.body.className = this.settings.theme;

        // Aplicar modo escuro
        document.documentElement.setAttribute('data-theme', this.settings.darkMode ? 'dark' : 'light');

        // Aplicar modo leitura
        document.documentElement.setAttribute('data-reading', this.settings.readingMode ? 'true' : 'false');

        // Aplicar tamanho da fonte
        const validSizes = ['small', 'normal', 'large', 'extra-large'];
        const fontSize = validSizes.includes(this.settings.fontSize) ? this.settings.fontSize : 'normal';
        document.documentElement.setAttribute('data-font-size', fontSize);

        // Aplicar contraste alto
        document.documentElement.setAttribute('data-contrast', this.settings.highContrast ? 'high' : 'normal');

        // Atualizar elementos da interface, se existirem
        this.updateUIElements();
    }

    // Atualizar elementos da interface
    updateUIElements() {
        // Atualizar select de tema
        const themeSelect = document.getElementById('temaSelecionado');
        if (themeSelect) {
            themeSelect.value = this.settings.theme;
        }

        // Atualizar toggle de modo escuro
        const darkModeToggle = document.getElementById('modoEscuroToggle');
        if (darkModeToggle) {
            darkModeToggle.checked = this.settings.darkMode;
        }

        // Atualizar toggle de modo leitura
        const readingModeToggle = document.getElementById('modoLeituraToggle');
        if (readingModeToggle) {
            readingModeToggle.checked = this.settings.readingMode;
        }

        // Atualizar select de tamanho da fonte
        const fontSizeSelect = document.getElementById('fonteSelecionada');
        if (fontSizeSelect) {
            fontSizeSelect.value = this.settings.fontSize;
        }

        // Atualizar toggle de contraste alto
        const contrastToggle = document.getElementById('contrasteToggle');
        if (contrastToggle) {
            contrastToggle.checked = this.settings.highContrast;
        }
    }

    // Métodos para atualizar configurações individuais
    setTheme(theme) {
        this.settings.theme = theme;
        this.saveSettings();
        this.applySettings();
    }

    setDarkMode(enabled) {
        this.settings.darkMode = enabled;
        this.saveSettings();
        this.applySettings();
    }

    setReadingMode(enabled) {
        this.settings.readingMode = enabled;
        this.saveSettings();
        this.applySettings();
    }

    setFontSize(size) {
        this.settings.fontSize = size;
        this.saveSettings();
        this.applySettings();
    }

    setHighContrast(enabled) {
        this.settings.highContrast = enabled;
        this.saveSettings();
        this.applySettings();
    }
}

// Criar instância global do gerenciador de configurações
const settingsManager = new SettingsManager();

// Aplicar configurações quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    settingsManager.applySettings();
});

// Atualizar configurações quando alteradas em outras abas
window.addEventListener('storage', (e) => {
    if (e.key && (e.key.startsWith('tema') || e.key.startsWith('modo') || 
        e.key === 'tamanhoFonte' || e.key === 'contrasteAlto')) {
        settingsManager.loadSettings();
        settingsManager.applySettings();
    }
});