# /public/documents

Place your PDF files here to activate the download buttons across all module pages.

## Naming Convention

Each module expects the following files:

| File | Used in |
|------|---------|
| `module-1-lesson.pdf` | Module 1 lesson section |
| `module-1-activity.pdf` | Module 1 activity section |
| `module-1-assignment.pdf` | Module 1 assessment section |
| `module-1-model-response.pdf` | Module 1 model response section |
| `module-2-lesson.pdf` | Module 2 lesson section |
| `module-2-activity.pdf` | Module 2 activity section |
| `module-2-assignment.pdf` | Module 2 assessment section |
| `module-2-model-response.pdf` | Module 2 model response section |
| `module-3-lesson.pdf` | Module 3 lesson section |
| `module-3-activity.pdf` | Module 3 activity section |
| `module-3-assignment.pdf` | Module 3 assessment section |
| `module-3-model-response.pdf` | Module 3 model response section |
| `module-4-lesson.pdf` | Module 4 lesson section |
| `module-4-activity.pdf` | Module 4 activity section |
| `module-4-assignment.pdf` | Module 4 assessment section |
| `module-4-model-response.pdf` | Module 4 model response section |
| `module-5-lesson.pdf` | Module 5 lesson section |
| `module-5-activity.pdf` | Module 5 activity section |
| `module-5-assignment.pdf` | Module 5 assessment section |
| `module-5-model-response.pdf` | Module 5 model response section |
| `module-6-lesson.pdf` | Module 6 lesson section |
| `module-6-activity.pdf` | Module 6 activity section |
| `module-6-assignment.pdf` | Module 6 assessment section |
| `module-6-model-response.pdf` | Module 6 model response section |
| `module-7-lesson.pdf` | Module 7 lesson section |
| `module-7-activity.pdf` | Module 7 activity section |
| `module-7-assignment.pdf` | Module 7 assessment section |
| `module-7-model-response.pdf` | Module 7 model response section |

## To Activate a Download Button

1. Add your PDF to this folder using the exact filename above.
2. Find the matching `<a href="/documents/...">` tag in the module page.
3. Remove `aria-disabled="true"`, `opacity: 0.45`, `pointerEvents: 'none'`, and `cursor: 'not-allowed'` from the style.
4. The button will become active on the next build/deploy.
