document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const savePrefsBtn = document.getElementById('savePrefs');
    const animateBtn = document.getElementById('animateBtn');
    const targetElement = document.getElementById('targetElement');
    const usernameInput = document.getElementById('username');
    const themeSelect = document.getElementById('theme');
    
    // Loads saved preferences
    loadPreferences();
    
    // Saves preferences to localStorage
    savePrefsBtn.addEventListener('click', function() {
        const preferences = {
            username: usernameInput.value,
            theme: themeSelect.value
        }; 
        
        alert('Preferences saved successfully!');
        
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        
        // Applies theme immediately
        applyTheme(preferences.theme);
        
        // Adds bounce animation to the save button
        this.classList.add('bounce');
        setTimeout(() => {
            this.classList.remove('bounce');
        }, 500);
    });
    
    // Trigger animation
    animateBtn.addEventListener('click', function() {
        // Adds animation class
        targetElement.classList.add('animate');
        
        // Removes animation class after it completes to allow re-triggering
        setTimeout(() => {
            targetElement.classList.remove('animate');
        }, 1500);
    });
    
    // Loads preferences from localStorage
    function loadPreferences() {
        const savedPrefs = localStorage.getItem('userPreferences');
        if (savedPrefs) {
            const preferences = JSON.parse(savedPrefs);
            
            // Sets form values
            usernameInput.value = preferences.username || '';
            themeSelect.value = preferences.theme || 'light';
            
            // Applies theme
            applyTheme(preferences.theme);
        }
    }
    
    // Applies selected theme
    function applyTheme(theme) {
        // Remove all theme classes first
        document.body.classList.remove('light', 'dark', 'blue');
        
        // Add the selected theme class
        if (theme) {
            document.body.classList.add(theme);
        } else {
            document.body.classList.add('light');
        }
    }
    
    // transition effect for theme change
    themeSelect.addEventListener('change', function() {
        applyTheme(this.value);
    });
});