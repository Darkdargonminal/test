# Agent Instructions

## Tech Stack
- **Frontend**: Vanilla HTML/CSS/JS
- **Backend/Auth**: Firebase (Compatibility SDK v10.8.0)
- **Deployment**: Manual push to GitHub

## Critical Configuration
- **Firebase**: `auth.js` contains the Firebase configuration object. You **must** replace the placeholder values with actual project credentials from the Firebase Console to make Authentication work.
- **Auth Flow**: `auth.js` handles both login and registration. It uses `onAuthStateChanged` to update the UI (User status and Logout button) in `index.html`.

## Development Commands
- This is a static site. No build step is required.
- **Verification**: Open `index.html` in a browser to test the gallery and auth flow.
- **Git Workflow**: Commit changes to `main` branch.

## Project Structure
- `index.html`: Main gallery page with Lightbox logic.
- `login.html`: Entry point for existing users.
- `register.html`: Entry point for new users.
- `style.css`: Unified styling for gallery, lightbox, and auth pages.
- `auth.js`: Firebase initialization and auth state management.

## Conventions & Quirks
- **Lightbox**: Implemented via inline `onclick` handlers calling `openLightbox(src)` in `index.html`.
- **CSS**: Uses a rainbow linear gradient background with `background-attachment: fixed`.
- **Dependencies**: Loads Firebase SDKs via CDN (compat mode) in each HTML file.
