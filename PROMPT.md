# 🤖 The "build my website for me" prompt

Don't want to edit code yourself? Let a free AI assistant do it.

**How to use this:**

1. Open your copy of the repo and click **`index.html`** → the **pencil ✏️** → select all (Ctrl/Cmd+A) → copy.
2. Go to **ChatGPT**, **Claude**, or **Gemini**.
3. Copy the **whole prompt in the box below**, fill in the `[ ]` blanks with your
   info, and paste your copied `index.html` where it says to.
4. The AI returns a finished `index.html`. Copy it, go back to GitHub, delete the
   old text in the editor, paste the new version, and click **Commit changes**.
5. Refresh your live site in a minute — it's yours. 🎉

> Repeat the same trick with **`theme.css`** (for colors) using the shorter prompt
> at the bottom. Your **photo and résumé** you upload yourself — an AI can't do that.

---

## 📋 Prompt 1 — personalize the whole site (`index.html`)

```text
You are helping me customize a personal-website template. I will paste the full
HTML of a page called index.html. Rewrite ONLY the human-readable content so the
site is about ME, and return the COMPLETE updated file, ready to paste back.

RULES:
- Keep every HTML tag, class, structure, <script>, and link working. Do NOT
  remove sections, and do NOT change the layout or CSS.
- Replace the name, headline, intro, work experience, selected work, personal
  projects, skills, and contact/social links with my info below.
- Also update the "Ask me" chat agent: near the bottom there is a `KB` array and
  a `chips` list inside a <script>. Rewrite those answers and starter questions
  to be about me, keeping the exact same code format.
- Write concisely, concretely, and confidently. Lead with real specifics and
  numbers. Avoid clichés like "passionate about," "results-driven," or
  "team player."
- If I leave something blank, keep the template's wording or remove that single
  item cleanly without breaking the page.
- Output ONLY the full updated index.html, nothing else.

HERE IS MY INFO:
- Full name: [ ]
- Headline (what I do, e.g. "Nurse • Educator • Writer"): [ ]
- Short intro (1–2 sentences in my voice): [ ]
- Work experience — for each job: company, role, dates, and 2–3 achievements
  (with numbers if possible):
  [ ]
- Selected work / main projects — for each: name, one-line description, the
  impact/result, and the tools used:
  [ ]
- Personal or side projects — name, one line, status (Live/Private/Building):
  [ ]
- Skills, grouped (e.g. Languages, Tools, Design, Writing…):
  [ ]
- Email: [ ]
- LinkedIn: [ ]
- GitHub or other links: [ ]
- Résumé file name if you renamed it (else leave as is): [ ]

HERE IS index.html:
[PASTE THE ENTIRE CONTENTS OF index.html HERE]
```

---

## 🎨 Prompt 2 — change the colors (`theme.css`)

```text
Here is a CSS file (theme.css) that controls a website's colors and fonts.
Update ONLY the color values so the palette feels [describe the vibe you want,
e.g. "warm and earthy" / "clean and minimal blue" / "bold and dark"]. Keep the
--variable names and structure exactly the same. Make sure text stays easily
readable against the backgrounds. Return the COMPLETE updated file.

[PASTE THE ENTIRE CONTENTS OF theme.css HERE]
```

---

## ✍️ Prompt 3 — write a blog post (optional)

```text
I'm writing a blog post for my personal site. Using this HTML template
(post-template.html), write a complete post about [your topic]. Keep all the
HTML structure and just fill in the title, date, intro, sections, and tags.
Write it in a [casual / professional / friendly] tone. Return the full file.

[PASTE THE ENTIRE CONTENTS OF post-template.html HERE]
```

Then add a card for it in `blog.html` (ask the AI: *"give me a `<a class="pcard">`
card linking to my new post file"*).

---

**New here?** Read **[START-HERE.md](START-HERE.md)** first — it shows how to copy
the template and host it free, step by step.
