<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Portfolio conventions
- All portfolio content (projects, skills, certifications, profiles, contact) lives in `src/lib/portfolio-data.ts` — edit data there, never hardcode content in components.
- Dark-only theme: tokens defined in `src/styles.css` :root; components use semantic tokens only.
