# Make this site your own

This is a **static portfolio + blog** — plain HTML/CSS/JS, no build step, no
framework. Fork it, edit a few files, drop it on GitHub Pages (or Netlify /
Vercel / Cloudflare Pages), and you have your own branded site.

Everything visual is driven by **one file: [`theme.css`](theme.css)**. Change your
brand there once and it updates every page.

---

## 1. Rebrand the colors & fonts — `theme.css`

Open `theme.css` and edit the CSS variables. This is the whole brand system:

```css
:root{
  --paper:#f5efe1;      /* page background */
  --card:#fbf7ee;       /* cards */
  --ink:#2b395b;        /* headings */
  --graphite:#6b6559;   /* body text */
  --highlight:#f2bd1e;  /* your primary accent */
  --sage:#9cae8f;       /* labels / secondary accent */
  /* …and fonts + layout width */
}
```

- **Colors:** swap the hex values. Start with `--paper`, `--ink`, and `--highlight`
  — those three carry most of the look.
- **Fonts:** change `--serif` / `--sans` / `--mono`, and update the Google Fonts
  `<link>` in each page's `<head>` to load them.

That's the only file you touch for the *look*. Everything below is *content*.

---

## 2. Identity — `index.html`

Edit these in the `<head>` and hero:

| What | Where |
|------|-------|
| Browser tab title + SEO | `<title>` and `<meta name="description">` |
| Nav logo text | `.brand` (`dusty_ai`) — appears on every page |
| Profile photo | replace `assets/profile.png` |
| Hero eyebrow / headline / subtitle | the `.hero__inner` block |
| Résumé file | replace `assets/Dustin-Lin-Resume.pdf` (keep the name or update the links) |

The nav logo text and résumé filename are repeated in `blog.html` and the
`blog-*.html` posts — search-and-replace across files.

## 3. Content — `index.html`

- **Work Experience** → the `#experience` timeline (`.job` blocks).
- **Selected Work** → the `#work` cards (title, `.impact` bullets, `.more` "under
  the hood", chips).
- **Personal Projects** → the `#projects` cards + `.card__badge` (Live / Private / Building).
- **Skills** → the `#skills` rows; mark your top skills with `class="pri"`.

## 4. Links & socials

- **Connect section** (`#connect` in `index.html`) — LinkedIn, GitHub, email, etc.
- **The "Ask me" agent** — its knowledge base is a `KB` array in the `<script>` at
  the bottom of `index.html`. Edit the answers + the `chips` starter prompts.
  It's a **local, scripted agent** (no API key). To wire a real model, replace the
  `answer()` function with a `fetch()` to your own endpoint.

---

## 5. Blog & Playground — `blog.html`

- **Add a post:** copy `post-template.html` to a new file (e.g. `blog-my-post.html`),
  fill in the title/body, then add a matching `<a class="pcard">` card in
  `blog.html`'s `#writing` grid pointing at it.
- **Playground:** the demo lives in the `<script>` in `blog.html`. Add your own by
  dropping another `.demo` block and its JS, or replace the `.slot` placeholder.

---

## 6. Deploy

**GitHub Pages** (what this repo uses):
1. Push to `main`.
2. Repo **Settings → Pages → Deploy from branch → `main` / root**.
3. The included `.nojekyll` file makes Pages serve everything as-is.
4. Your site is live at `https://<username>.github.io/<repo>/`.

Prefer **Netlify / Vercel / Cloudflare Pages**? Point them at the repo — no build
command, publish directory is the repo root.

---

## File map

| File | What it is |
|------|-----------|
| `theme.css` | **Brand tokens — edit to rebrand everything** |
| `index.html` | Home: hero, experience, work, projects, skills, ask-agent, connect |
| `blog.html` | Blog index (post cards) + Playground |
| `blog-*.html` | Individual blog posts |
| `post-template.html` | Blank post to copy for new entries |
| `assets/` | Profile photo, résumé, project images |
| `architecture.html` | Standalone copy of the home design (optional) |
