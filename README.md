# DemoBlaze Playwright Automation Framework

## Introduction

This project is an end-to-end test automation framework built using
**Playwright with TypeScript**.

The framework automates core user flows of the DemoBlaze application: -
Login functionality - Add to Cart - Place Order

Target Application: https://www.demoblaze.com/

GitHub Repository: https://github.com/luanleb09/demo_blaze

The solution is designed to demonstrate: - Test case design capability -
Scalable automation framework architecture - Cross-browser support -
CI/CD integration readiness - Clean and maintainable test implementation

------------------------------------------------------------------------

## Framework Structure and Rationale

The framework follows the **Page Object Model (POM)** design pattern to
ensure maintainability and scalability.

### Project Structure

    demo_blaze
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

### Rationale

-   **tests/**\
    Contains test specifications separated by feature for better
    modularity.

-   **pages/**\
    Implements Page Object Model.\
    All locators and page interactions are centralized here to:

    -   Reduce duplication
    -   Improve readability
    -   Increase maintainability

-   **utils/**\
    Stores reusable test data and helper utilities.

-   **playwright.config.ts**\
    Central configuration file:

    -   Base URL configuration
    -   Cross-browser setup (Chromium, Firefox, WebKit)
    -   Reporting configuration
    -   Screenshot and video handling on failure

### Key Design Principles

-   Separation of concerns
-   Reusability
-   Scalability
-   CI/CD readiness
-   Cross-browser compatibility

------------------------------------------------------------------------

## Getting Started

### Prerequisites

Ensure the following tools are installed:

-   Node.js (v18 or higher recommended)
-   npm (comes with Node.js)
-   Git
-   VS Code (recommended)

Check installation:

    node -v
    npm -v

------------------------------------------------------------------------

### Steps

1.  Clone the repository:

```{=html}
<!-- -->
```
    git clone https://github.com/luanleb09/demo_blaze.git
    cd demo_blaze

2.  Install dependencies:

```{=html}
<!-- -->
```
    npm install

3.  Install Playwright browsers:

```{=html}
<!-- -->
```
    npx playwright install

The framework is now ready to execute.

------------------------------------------------------------------------

## Test Execution

### Run All Tests

    npx playwright test

### Run in Headed Mode (UI visible)

    npx playwright test --headed

### Run Specific Test File

    npx playwright test tests/login.spec.ts

### Run Tests in Specific Browser

    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit

------------------------------------------------------------------------

## Run Locally

To execute the framework locally:

1.  Ensure dependencies are installed.
2.  Execute:

```{=html}
<!-- -->
```
    npx playwright test

After execution, view the HTML report:

    npx playwright show-report

Reports include: - Test results summary - Execution time - Failure
screenshots - Video recordings (if failed)

------------------------------------------------------------------------

## CI/CD Integration

This project includes GitHub Actions workflow configuration.

Automation is triggered on: - Push to main branch - Pull requests

The pipeline: - Installs dependencies - Installs browsers - Executes
tests - Uploads HTML report as artifact

------------------------------------------------------------------------

## Future Enhancements

-   Allure reporting integration
-   API automation layer
-   Environment-based configuration (dev/staging)
-   Docker containerization
-   Test tagging (smoke, regression)
-   Parallel execution optimization

------------------------------------------------------------------------

## Author
Luan Le

QA Automation Challenge Submission\
Playwright + TypeScript
