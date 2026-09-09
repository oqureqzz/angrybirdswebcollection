/**
 * Ruffle Setup Script for Angry Birds Flash Games
 * This script configures and initializes Ruffle as a Flash Player emulator
 */

// Ruffle configuration
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
    // Show all messages (polite, warn, error)
    logLevel: "info",
    // Show a "Click to unmute" button instead of muting audio
    autoplay: "on",
    // Allow fullscreen for the game
    allowFullscreen: true,
    // Handle right-click context menu
    contextMenu: true,
    // Show a link to Ruffle when right-clicked
    showRuffleMenu: true,
    // Preload all external files
    preloadStrategy: "progressive"
};

// Initialize Ruffle when page loads
document.addEventListener("DOMContentLoaded", function() {
    // If Ruffle is available, it will automatically run
    if (typeof window.RufflePlayer !== "undefined") {
        // Ruffle is loaded and ready
        console.log("Ruffle player initialized successfully");
    } else {
        console.warn("Ruffle player not found. Flash content may not work.");
    }
});
