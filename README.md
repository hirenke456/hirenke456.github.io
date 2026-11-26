# Hiren Patel's portfolio

Open `index.html` in a browser to preview. The website uses plain HTML, CSS, and JavaScript and needs no build step.

## Editing

- Update your bio, experience, and toolkit in `index.html`.
- To add a personal project, paste the example below inside `#project-list` in `index.html` and replace the example text. Remove an article to take a project off the site. The placeholder disappears when the first article is added.
- The existing filter categories are `engineering`, `documentation`, and `community`. To add one, duplicate a button in `#project-filters` and give its `data-filter` the same value as the new project's `data-category`.
- For planned work, add a project when you're ready to share it and include “Planned” or “In progress” in its metadata line.
- To add GitHub, LinkedIn, or a public contact address, add verified links in the footer.

```html
<article class="project" data-category="engineering">
  <p class="meta">C++ · In progress</p>
  <h3>Project title</h3>
  <p>Describe what you are building and why.</p>
</article>
```

## Publishing on GitHub Pages

1. Create a repository named `YOUR-USERNAME.github.io` for a site at the root of your GitHub Pages domain, or use a project repository to host the site under its repository name.
2. Put the extracted files, including `.nojekyll`, at the repository root and commit them to `main`.
3. In the repository, go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
4. Use the URL shown in Pages settings after deployment. Commit later edits to `main` to update the site.

[GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
