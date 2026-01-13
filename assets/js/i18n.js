// Internationalization (i18n) script
// Detects browser language and applies translations

(function() {
    'use strict';

    // Get browser language
    function getBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        // Extract language code (e.g., 'vi' from 'vi-VN')
        const langCode = lang.split('-')[0].toLowerCase();
        return langCode;
    }

    // Determine which language to use
    function determineLanguage() {
        const browserLang = getBrowserLanguage();
        
        // Supported languages: 'en' (default), 'vi' (Vietnamese)
        // All other languages fall back to English
        if (browserLang === 'vi') {
            return 'vi';
        }
        return 'en'; // Default to English
    }

    // Apply translations to the page
    function applyTranslations(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Get all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(function(element) {
            const key = element.getAttribute('data-i18n');
            
            // Check if translation exists
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                
                // Handle different element types
                if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
                    // For input and button elements, update value or textContent
                    if (element.hasAttribute('value')) {
                        element.value = translation;
                    } else {
                        element.textContent = translation;
                    }
                } else if (element.tagName === 'IMG') {
                    // For images, update alt text
                    element.alt = translation;
                } else {
                    // For other elements, update textContent or innerHTML
                    element.textContent = translation;
                }
            }
        });

        // Handle elements with data-i18n-html for HTML content
        const htmlElements = document.querySelectorAll('[data-i18n-html]');
        htmlElements.forEach(function(element) {
            const key = element.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Handle elements with data-i18n-placeholder for placeholder attributes
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(function(element) {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Handle elements with data-i18n-title for title attributes
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(function(element) {
            const key = element.getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][key]) {
                element.title = translations[lang][key];
            }
        });
    }

    // Initialize translations when DOM is ready
    function initI18n() {
        const lang = determineLanguage();
        applyTranslations(lang);
    }

    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        // DOM is already loaded
        initI18n();
    }

    // Export for potential manual language switching in the future
    window.i18n = {
        getLanguage: determineLanguage,
        setLanguage: function(lang) {
            if (translations[lang]) {
                applyTranslations(lang);
            }
        },
        getTranslation: function(key) {
            const lang = determineLanguage();
            return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
        }
    };
})();
