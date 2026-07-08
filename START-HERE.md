# 👋 Build your own website — no coding experience needed

This guide is for people who have **never written code**. You don't need to
install anything. Everything happens in your web browser, and you can ask a
free AI assistant (ChatGPT, Claude, Gemini…) to do the tricky parts for you.

**What you'll end up with:** your own personal website, with your own web
address, hosted for **free** — something like `https://yourname.github.io/website/`.

**Time:** about 30–45 minutes the first time. ☕

> **Is this right for me?** This template is free and fully yours, but you *do*
> edit text files (with an AI's help). If you'd rather never see a file at all
> and don't mind paying monthly, a drag-and-drop builder like Wix or Squarespace
> is easier. If "free + mine forever + a little copy-pasting" sounds good — keep reading.

---

## Step 1 — Make a free GitHub account

GitHub is the free service that will store and host your website.

1. Go to **[github.com](https://github.com)** and click **Sign up**.
2. Pick a username — **this becomes part of your web address**, so choose well
   (e.g. `janedoe` → `janedoe.github.io`).

---

## Step 2 — Copy this template into your account

1. Open the template repository in your browser.
2. Click the green **“Use this template”** button (top right) → **Create a new repository**.
   - *No “Use this template” button? Click **Fork** instead — it does the same thing.*
3. Name the repository **`website`** (or anything you like) and click **Create**.

🎉 You now have your **own copy** of the whole website in your account.

---

## Step 3 — Turn your website ON (do this first!)

Let's get it live *before* changing anything, so you can see it working.

1. In your new repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **“Build and deployment” → Source**, choose **Deploy from a branch**.
4. Set the branch to **`main`** and the folder to **`/ (root)`**, then click **Save**.
5. Wait ~1 minute, refresh the page. GitHub shows you a link like
   **`https://yourname.github.io/website/`**. Click it — **that's your live site!** 🚀

Right now it still says "Dustin Lin." Next we make it yours.

---

## Step 4 — The easy way to change the words: let an AI help you

The homepage text lives in a file called **`index.html`**. It looks like code,
but you don't have to understand it. Here's the trick:

1. In your repository, click on **`index.html`** to open it.
2. Click the **pencil ✏️ icon** (top right) to edit it.
3. Select **all** the text (Ctrl+A / Cmd+A) and copy it.
4. Go to a free AI assistant (**ChatGPT**, **Claude**, or **Gemini**) and paste this:

   > *"This is the HTML for a personal website. Please rewrite it with my
   > information and give me back the full file. Here's about me: [your name,
   > your job, your experience, your projects, your skills, your email and
   > social links]. Keep everything else the same."*
   >
   > *(then paste the code you copied)*

5. The AI gives you back the updated file. **Copy it**, go back to GitHub, delete
   the old text in the editor, and **paste the new version**.
6. Scroll down, click the green **“Commit changes”** button. ✅

> 📋 **Shortcut:** **[PROMPT.md](PROMPT.md)** has a ready-made, fill-in-the-blank
> version of this prompt (plus ones for colors and blog posts) — just copy, fill in
> your details, and paste your file in.

Within a minute, refresh your live site — it now says **your** name and story.

> 💡 **You can't break anything permanently.** Every change is saved as a version.
> If something looks wrong, GitHub lets you undo it (see "Oops?" below).

---

## Step 5 — Change the colors (optional)

1. Open the file **`theme.css`** and click the **pencil ✏️**.
2. Near the top you'll see lines like `--highlight:#f2bd1e;` — these are colors.
   `#f2bd1e` is a color code.
3. Pick new colors at **[coolors.co](https://coolors.co)** or just search
   *"color picker"* — copy the `#xxxxxx` codes.
4. Replace the codes (keep the `--names` the same), then **Commit changes**.

Change `--highlight` first — it's the main accent color and has the biggest effect.

---

## Step 6 — Add your photo, images, résumé & social links

All your pictures and files live in the **`assets`** folder. Click it, then
**Add file → Upload files** to add yours.

- **Profile photo (the round avatar):** upload your photo and **name it exactly
  `profile.png`**.
- **Project / work card images** (the pictures on the cards): these live in
  **`assets/work`**. Upload yours there. Easiest is to give them the **same names**
  as the ones already inside (like `snowflake-migration.jpg`) so nothing else needs
  changing — or upload with your own names and ask the AI to update the picture
  links in `index.html`. No images handy? Ask the AI to remove the pictures from
  the cards, or grab free ones from **unsplash.com**.
- **Résumé:** upload your PDF and match the old file name, or ask the AI to point
  the "Résumé" links to your file name.
- **Social links** (LinkedIn, GitHub, Instagram, email): these are in the
  **Connect** part of `index.html`. If you gave them to the AI back in Step 4,
  they're already updated — otherwise open `index.html`, click the pencil ✏️, and
  search for the old link to replace it.

> Anything you upload to a public repo is publicly downloadable — which is fine
> for a résumé you *want* people to see, just good to know.

---

## Step 7 — (Optional) Write a blog post

1. Open **`post-template.html`**, copy everything.
2. Use **Add file → Create new file**, name it something like `blog-my-first-post.html`,
   and paste. Ask the AI to fill in your post.
3. Open **`blog.html`** and copy one of the existing "card" blocks so your new
   post shows up in the list. (Ask the AI: *"add a card linking to
   blog-my-first-post.html"*.)

---

## Oops? How to undo a change

Nothing you do is permanent — every save is a version you can roll back to.

1. In your repository, click **“commits”** (or the clock 🕐 icon).
2. Find the change you want to undo, click the **“…”** menu → **Revert**.
3. Confirm. Your site goes back to how it was. 😌

---

## You're done! 🎊

Share your link (`https://yourname.github.io/website/`) on LinkedIn, your résumé,
your email signature — anywhere.

**Want to change something later?** Just open the file, click the pencil ✏️,
make (or AI-assist) the edit, and **Commit changes**. Your live site updates in
about a minute, every time.

---

### Cheat sheet: which file holds what

| I want to change… | Open this file |
|---|---|
| My name, story, jobs, projects, skills, links | `index.html` |
| Colors and fonts | `theme.css` |
| Profile photo / résumé | the `assets` folder |
| Blog posts | `blog.html` + copy `post-template.html` |

*(For a more technical breakdown, see `TEMPLATE.md`.)*
