# Repair Genius Landing Page

A responsive Next.js + TypeScript landing page concept inspired by the section flow of iSmash, using Repair Genius' existing public-facing details as the content source.

## Run locally
1. Install Node.js 20 or later.
2. In this folder run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000`

## Deploy a live preview with Vercel
1. Create a GitHub repository and push this folder.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository. Vercel detects Next.js automatically.
4. Click **Deploy**. Share the generated preview URL with the client.

## Before production
- Replace the typographic RG mark with the client's official logo asset if they supply the original file.
- Review all copy and brand colours with the client.
- The enquiry form currently uses a mailto demo action; connect a secure server endpoint or form provider before accepting real customer details.
- The review block is clearly labelled as a layout preview, not verified customer testimony. Connect the client's real review source before publishing.
- Confirm address, phone numbers and opening hours.
- Add analytics, consent controls, accessibility review, metadata/social image, and production monitoring as appropriate.

## Stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4 (CSS is custom-authored for this concept)
- No database required for this landing page. Add a backend/database only when booking, customer records, pricing, inventory, or repair tracking become real functionality.
