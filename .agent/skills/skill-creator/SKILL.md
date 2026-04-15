---
name: creating-skills
description: Generates high-quality, predictable, and efficient .agent/skills/ directories based on user requirements. Use this when asked to build or define a new skill.
---

# Antigravity Skill Creator

## When to use this skill
- When the user wants to create a new automated behavior or "skill".
- When defining standard workflows for specific development tasks.

## Workflow
1. [ ] Understand the Task (e.g., automating React component testing).
2. [ ] Identify Core Structural Requirements (scripts/, examples/, resources/).
3. [ ] Generate YAML Frontmatter (gerund name, 3rd-person description).
4. [ ] Write SKILL.md body (Conciseness, Progressive Disclosure, Forward Slashes).
5. [ ] Include Checklists and Validation Loops.
6. [ ] Provide output in the requested format.

## Instructions
### 1. Core Structural Requirements
Every skill generated must follow this folder hierarchy:
- `<skill-name>/`
    - `SKILL.md` (Required: Main logic and instructions)
    - `scripts/` (Optional: Helper scripts)
    - `examples/` (Optional: Reference implementations)
    - `resources/` (Optional: Templates or assets)

### 2. YAML Frontmatter Standards
- **name**: Gerund form. Max 64 chars. Lowercase, numbers, hyphen. No "claude" or "anthropic".
- **description**: Third person. Include triggers/keywords. Max 1024 chars.

### 3. Writing Principles
- **Conciseness**: Assume intelligence. Focus on unique logic.
- **Progressive Disclosure**: Keep SKILL.md < 500 lines. Link to sub-documents if needed.
- **Forward Slashes**: Always `/`.
- **Degrees of Freedom**: Bullet Points (high), Code Blocks (medium), Bash Commands (low).

### 4. Output Template
### [Folder Name]
**Path:** `.agent/skills/[skill-name]/`

### [SKILL.md]
(Markdown content with YAML frontmatter)
