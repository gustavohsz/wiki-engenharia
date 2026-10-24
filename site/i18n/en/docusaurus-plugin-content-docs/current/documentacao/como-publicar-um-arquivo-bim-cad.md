---
title: How to publish a BIM/CAD Library file
description: Step-by-step guide to publishing Revit families, DWG blocks and templates on GitHub Releases and creating the sheet.
sidebar_position: 20
---

## Purpose

Publish a downloadable file (Revit family, DWG block, template) so that its link is permanent and the file version is tied to its sheet. The rule comes from decision `decisions/0003` in the repository: **downloadable files go to GitHub Releases, never into the repository.**

## When to use

- **Use it** for an item's first publication and for each new version.
- **Do not use it** for preview images: those stay in the repository, in `site/static/img/biblioteca-bim-cad/`.

## Prerequisites

- An original file, or a third-party file whose license allows redistribution (see the content license in `LICENSE-CONTENT.md`).
- Access to the repository on the GitHub website, signed in. GitHub Desktop cannot create releases.
- Files already named by the convention:

| Type | Name format | Example |
|---|---|---|
| Revit (`.rfa`, `.rte`) | `<item>_v<version>_r<Revit year>.<ext>` | `tomada-2p-t-10a_v1.0_r2022.rfa` |
| AutoCAD (`.dwg`) | `<item>_v<version>_dwg<format year>.dwg` | `quadro-distribuicao_v1.0_dwg2018.dwg` |

The item identifier (`<item>`) is lowercase, without accents, with hyphens, and matches the sheet's file name. The Revit year is the version the file was **saved** in, which is also the minimum version that can open it.

## Steps

1. **Prepare the files.** For each Revit version you want to offer, open the family in that version, use "Save As" and apply the naming convention. Purge the family first ("Purge Unused") to reduce its size.
2. **Open the releases page.** On the GitHub website, go to the repository, click **Releases** (right-hand column), then **Draft a new release**.
3. **Create the tag.** In **Choose a tag**, type `<item>-v<version>` (example: `tomada-2p-t-10a-v1.0`) and click **Create new tag … on publish**. Leave *Target* as `main`.
4. **Fill in the title and description.**
   - Title: `<Item name> v<version>` (example: "Tomada 2P+T 10 A v1.0").
   - Description: one line about the item, what changed in this version and the link to its sheet on the site.
5. **Attach the files.** Drag the files onto **Attach binaries by dropping them here**. Wait for all uploads to finish.
6. **Uncheck "Set as the latest release".** The "Latest" badge is for project versions, not library items.
7. **Publish.** Click **Publish release**.
8. **Copy the links.** On the published release, right-click each file and copy the link address. The format is `https://github.com/gustavohsz/wiki-engenharia/releases/download/<tag>/<file>`.
9. **Create or update the sheet.** Use the `templates/biblioteca-bim-cad-ficha.md` template, add the links to the Download table and record the version in the History. Follow [How to create a page in this wiki](./como-criar-uma-pagina.md) for the English mirror, build and push.

## Rules

- **Never replace a file in a published release.** To fix something, create the next version (`v1.1`) in a new release. That way, anyone who downloaded or linked the old version still gets the same file.
- Bump the **major** version (`v2.0`) when the change breaks projects already using the item, for example renaming or removing parameters. Otherwise, bump the **minor** version.
- Keep working files (originals, drafts) in OneDrive, not in the repository.

## Verification

- The copied link, opened in a private browser window, downloads the file directly.
- The downloaded file opens in the Revit version stated in its name.
- The published sheet shows the links and they work.

## Common problems

| Symptom | Likely cause | Fix |
|---|---|---|
| Link returns 404 | Tag or file name typed differently in the link | Copy the link from the release page instead of typing it |
| The family does not open in the user's Revit | File saved in a newer Revit version | Also offer a file saved in the oldest supported version |
| The release shows as "Latest" | "Set as the latest release" was left checked | Edit the release and uncheck the option |
| File larger than expected | Family was not purged before saving | "Purge Unused" in Revit and save again, as a new version |

## See also

- [How to create a page in this wiki](./como-criar-uma-pagina.md)
- [BIM/CAD Library](../biblioteca-bim-cad/index.md)
