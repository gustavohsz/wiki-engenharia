---
title: How to create a page in this wiki
description: Step-by-step guide to creating a new page, in Portuguese and English, and publishing it.
sidebar_position: 10
---

## Purpose

Standardize page creation so every new page has the same format, exists in both languages and does not break the site.

## When to use

- **Use it** for any new page in any section: BIM/CAD Library sheet, Catalog sheet, lesson, standard summary, procedure or calculation.
- **Do not use it** for changes to the site code (navbar, components, calculators). Those follow the repository's `AGENTS.md`.

## Prerequisites

- A local copy of the [repository](https://github.com/gustavohsz/wiki-engenharia), cloned with GitHub Desktop.
- Node.js 20 or later, with `npm install` already run inside the `site/` folder.
- A text editor, such as VS Code.

## Steps

1. **Pick the template.** The `templates/` folder (at the repository root, outside the site) has one template per page type. Examples: `normas-resumo.md` for standards and `calculos-pagina.md` for calculations.
2. **Copy the template into the section.** The destination is `site/docs/<section>/`. Name the file in lowercase, without accents, with hyphens. Example: `site/docs/normas/abnt-nbr-5419.md`.
3. **Fill in the header.** The lines between `---` at the top of the file are the header. Set:
   - `title`: the title shown on the page and in the menu;
   - `description`: a one-line summary;
   - `sidebar_position`: the menu order, where lower numbers come first.
4. **Write the content.** Replace everything in `[brackets]` and delete sections that do not apply.
5. **Images.** Put the files in `site/static/img/<section>/` and use `![Image description](/img/<section>/file.png)`. The description (alt text) is mandatory.
6. **Links to other pages.** Use the `.md` file path, as in `[voltage drop](../calculos/queda-de-tensao.md)`. That way the build warns you if a link breaks.
7. **Create the English mirror.** Copy the file to the same path under `site/i18n/en/docusaurus-plugin-content-docs/current/` and translate it. It can start as a summary, but the file must exist.
8. **Test the build.** In a terminal, inside `site/`, run the command below:

   ```bash
   npm run build
   ```

   To preview the page while writing, run `npm start` and open http://localhost:3000/wiki-engenharia/. For the English version, run `npm start -- --locale en`.
9. **Publish.** In GitHub Desktop, review the changed files, write a short commit message, then commit and push. The site republishes itself in 2 to 3 minutes, and progress shows in the repository's **Actions** tab.

## Verification

- `npm run build` ended with `[SUCCESS]` for both `build` and `build\en`.
- After pushing, the latest run in the **Actions** tab is green.
- The page appears on the published site in Portuguese and in English (via the language selector).

## Common problems

| Symptom | Likely cause | Fix |
|---|---|---|
| Build fails with "Broken link" | Link to a page that does not exist or has the wrong path | Check the `.md` path in the link. The build names the page with the broken link |
| English page shows Portuguese text | The mirror in `site/i18n/en/...` is missing | Create the file at the same relative path |
| Page missing from the menu | File outside `site/docs/` or not a `.md` file | Move the file into the section folder |
| Section shows a folder name in the menu | New folder without an `index.md` | Create an `index.md` with a `title`. Do not use `label` in `_category_.json` |
| Image does not show | Wrong path or image outside `site/static/` | Use the path starting at `/img/`, without `static` |
| "Publicar" job fails in Actions | Pages disabled on GitHub | Check that Settings › Pages uses "GitHub Actions" as the source |

## See also

- [ABNT NBR 5410 summary](../normas/abnt-nbr-5410.md): example of a standard summary.
- [Voltage drop in conductors](../calculos/queda-de-tensao.md): example of a calculation page.
