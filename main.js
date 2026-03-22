/**
 * El Vestuario — main.js
 * Modo claro / oscuro con [data-theme="dark"] en <html>
 * Funciona en index.html y en todos los artículos.
 */
(function () {
    var STORAGE_KEY = 'ev-theme';
    var html = document.documentElement;

    // Aplica el tema guardado ANTES de que el navegador pinte (evita parpadeo)
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') html.setAttribute('data-theme', 'dark');

    function applyTheme(isDark) {
        if (isDark) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem(STORAGE_KEY, 'dark');
        } else {
            html.removeAttribute('data-theme');
            localStorage.setItem(STORAGE_KEY, 'light');
        }
        // Actualiza todos los botones toggle en la página
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            btn.textContent = isDark ? '☀ Modo Claro' : '🌙 Modo Oscuro';
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var isDark = html.getAttribute('data-theme') === 'dark';

        // Etiqueta inicial de los botones
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            btn.textContent = isDark ? '☀ Modo Claro' : '🌙 Modo Oscuro';
            btn.addEventListener('click', function () {
                var nowDark = html.getAttribute('data-theme') === 'dark';
                applyTheme(!nowDark);
            });
        });

        // Soporte legado: si hay botón con id="dark-mode-toggle" (index.html original)
        var legacy = document.getElementById('dark-mode-toggle');
        if (legacy) {
            legacy.classList.add('theme-toggle');
            legacy.textContent = isDark ? '☀ Modo Claro' : '🌙 Modo Oscuro';
            legacy.addEventListener('click', function () {
                var nowDark = html.getAttribute('data-theme') === 'dark';
                applyTheme(!nowDark);
            });
        }
    });
})();
