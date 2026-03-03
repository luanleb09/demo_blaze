# DemoBlaze Playwright Automation Framework

Automation framework built using Playwright + TypeScript.

Target Application:
https://www.demoblaze.com/

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)
- GitHub Actions CI/CD
- Cross-browser testing (Chromium, Firefox, WebKit)

---

## 📂 Project Structure

demoblaze-playwright
│
├── tests
│   ├── login.spec.ts
│   └── cart.spec.ts
│
├── pages
│   ├── login.page.ts
│   ├── home.page.ts
│   └── cart.page.ts
│
├── utils
│   └── test-data.ts
│
├── playwright.config.ts
├── package.json
└── README.md

---

## 🧠 Framework Design

This framework follows:

- Page Object Model for maintainability
- Modular and scalable structure
- Cross-browser execution
- CI/CD ready configuration
- Automatic screenshot & video on failure

---

## 🧪 Test Coverage

### Login
- Valid login
- Invalid login
- Field validation

### Cart
- Add product to cart
- Place order
- Validation scenarios

---

## ⚙️ Installation

Clone repository:
