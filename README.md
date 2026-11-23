# Shinobi Chess

Playable 3D chess where every piece is a Naruto-inspired character and captures trigger a duel.
Models are original stylized stand-ins, not official assets.

## Run
    npm ci && npm run dev      # dev server
    npm test                   # Vitest
    npm run build              # production build in dist/
    docker compose up --build  # http://localhost:8080

## Deploy
Push to `main`. GitHub Actions runs typecheck, tests, build and Docker build, then deploys to GitHub Pages
(enable it in Settings > Pages > Source: GitHub Actions). No secrets are needed for Pages.

## Roadmap
React/TypeScript/R3F port, skeletal models, music, Playwright tests, split the game into modules.
