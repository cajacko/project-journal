# Commit CLI 💻

A personal git commit template command line tool. Helps me to add emojis 😀 to commits and format according to [Conventional Commits](https://www.conventionalcommits.org/)

Find the project on [GitHub](https://github.com/cajacko/commit).

## Next Steps ⏭

- Strange bug that happens when you don't use tab to select a scope suggestion
- Remember failed commits
- Better search/order for emojis
- Default emojis for each type (So force to always have one)
- Automate deployment

## Updates 🔼

---

### 2019-09-03 - 2019-09-06

This sprint was initially focussed on having global shared scope suggestions. It then ended up being a migration into commitizen as well. Which meant the original goals in this sprint weren't all relevant anymore. The stretch goals then got made and represented the main goals for this sprint. Which all got done 👍

#### Goals 🥅

- [x] All scopes shared globally
- [x] No comment by default
- [ ] Smart get JIRA issue ID and add as meta data
- [ ] Emojis ordered by use
- [x] Remove the validation for new projects
- [x] Ensure can be installed and used by anyone
- [x] Ensure valid commit type, if used for changelog
- [ ] Type ordered by use

#### Stretch Goals 🥅

- [x] Use commitizen if suitable
- [x] Add suggestions for scope
- [x] Add emoji suggestion
- [x] Save suggestions on commit
- [x] Original branch
- [x] @cajacko/commit package just installs and sets up globally
- [x] Document how to setup, globally and for project
