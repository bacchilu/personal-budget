# Personal Budget

Personal Budget is a week-oriented budgeting app focused exclusively on
expenses. It is designed around a Monday-to-Sunday budget cycle, helping users
understand how much they can still spend, where their money went, and which
expenses are coming up.

The project is currently a responsive UI prototype. It uses hardcoded mock data
to explore the layout and product direction; buttons, navigation, persistence,
and authentication are not implemented yet.

## Current mock

The dashboard currently explores:

- a weekly spending limit and remaining budget;
- the amount spent and number of transactions;
- spending pace and suggested daily allowance;
- every expense recorded during the current week;
- category-specific weekly limits;
- upcoming expenses and budget warnings; and
- responsive desktop and mobile layouts.

All transaction amounts are expenses and are displayed as positive values. The
app does not track income.

## Technology

- React
- TypeScript
- Vite
- Material UI
- Emotion

## Getting started

### Requirements

- Node.js `20.19+` or `22.12+`
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.