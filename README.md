# Bhim Majhi — Next.js + React website

Same design as the original site (CSS copied unchanged), rebuilt with Next.js, React and Firebase.

## Run locally
    npm install
    npm run dev          # http://localhost:3000

## Build for GitHub Pages
    npm run build        # creates the static site in ./out

Push the contents of `out/` to the `Bhimmajhi.github.io` repo (or use a GitHub Actions workflow that runs `npm run build` and deploys `out/`).

## Structure
- app/           Next.js App Router pages, layout, sitemap, robots, global CSS
- components/    Header, Hero, Gallery, PhotoCard, LikeButton, FirebasePosts, Particles, Testimonial
- lib/firebase.js  Firebase setup
- public/        images, fonts, favicon (served from site root)

## Not yet ported
- admin.html upload page (Firebase Auth + upload) — next step
