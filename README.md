# 🎭 Playwright POC – Automation Framework

This project is a Proof of Concept (POC) to demonstrate end-to-end test automation using **Playwright** with **TypeScript**. It includes basic UI test cases, Page Object Model, and configurations for scalable test automation.

---

## 📦 Tech Stack

- **Playwright** (Chromium, Firefox, WebKit)
- **TypeScript**
- **Test Runner**: Playwright Test
- **Page Object Model**
- **CI Ready**: GitHub Actions / Jenkins integration
- **Reports**: HTML report (built-in)

---

## 📁 Project Structure

playwright-poc/
│
├── tests/ # Test specs
├── pages/ # Page objects
├── utils/ # Config / constants
├── playwright.config.ts # Playwright configuration
├── package.json # Dependencies & scripts
└── README.md


---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/playwright-poc.git
cd playwright-poc

2. Install dependencies

npm install
npx playwright install

3. Run tests

npx playwright test

4. View test report

npx playwright show-report

🧪 Sample Test Scenario

    Login flow: Automates login form validation using page object model.

    Reusable functions: Helps create scalable and maintainable test code.

🛠️ Future Enhancements

    API testing with Playwright's request context

    Integration with Allure reports

    Parallel cross-browser execution

    GitHub Actions CI pipeline

    Environment-specific config management
