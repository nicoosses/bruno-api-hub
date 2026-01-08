# API Test Automation Hub with Bruno + TeamCity (CI/CD)
![CI Status](http://localhost:8111/app/rest/builds/buildType:id:BrunoApiHub_FreeCocktailAPI/statusIcon.svg)

## Executive Summary

This repository showcases a **production‑ready API test automation setup** built with **Bruno (GUI + CLI)** and integrated into a **local CI/CD pipeline using TeamCity Professional**.

The project was designed from the perspective of a **QA Engineer Specialist in API Automation**, prioritizing correctness, reproducibility, and long‑term scalability. It demonstrates how to build a **clean automation HUB** capable of hosting multiple APIs in a single repository while executing them independently in CI.

All decisions, configurations, and fixes included here are **validated end‑to‑end**. Only approaches that proved stable and reproducible were kept; experimental or failing paths were deliberately discarded.

---

## API Test Automation Hub with Bruno + TeamCity (CI/CD)

This repository demonstrates a **production‑ready API test automation setup** built with **Bruno CLI**, designed and implemented from a **QA Engineer Specialist perspective**.

The project follows a **clean, scalable HUB architecture**, allowing multiple APIs to coexist in a single repository while being executed independently in CI.

### Key highlights

* API automation using **Bruno (GUI + CLI)** with filesystem‑driven test discovery
* **Node.js project baseline** (`package.json`, `package-lock.json`) for reproducible CI builds
* **Bruno CLI installed as a project dependency** (`@usebruno/cli`)
* Local **CI/CD integration with TeamCity Professional (trial)**
* Fully validated build pipeline using:

  * `npm ci`
  * `npx bru run <path> --env <env>`
* Proper environment handling via `environments/` (Bruno‑compliant naming and syntax)
* Secure GitHub integration using **fine‑grained Personal Access Tokens**
* **Java 17** correctly configured for TeamCity agents

### What this project proves

* Deep understanding of **Bruno internals** (CLI vs GUI behavior, filesystem discovery, minimal configs)
* Strong knowledge of **CI/CD fundamentals** and common failure points (Node, Java, lockfiles, agents)
* Ability to design **automation baselines suitable for real companies**, not demos
* QA mindset focused on **risk prevention, reproducibility, and long‑term maintainability**

The CI pipeline executes real API test suites successfully (validated with multiple passing tests) and is designed to be easily extended with additional APIs, build configurations, triggers, and quality gates.

This repository reflects **real‑world QA automation practices**, emphasizing correctness and reliability over shortcuts or assumptions.

---

**Status:** CI build validated successfully using TeamCity local agent
**Scope:** API Testing · Automation Architecture · CI/CD Integration · QA Best Practices


### Teamcity Integration

<img width="1397" height="609" alt="image" src="https://github.com/user-attachments/assets/1c7b8163-10f4-464f-a7bf-119c5fdf50d0" />

<img width="1463" height="784" alt="image" src="https://github.com/user-attachments/assets/4407f96b-b1cc-4dfc-adb7-19e6ca586cd2" />

<img width="1434" height="812" alt="image" src="https://github.com/user-attachments/assets/33a264a7-c6c7-45e9-87d3-259c4e7f7fe5" />

<img width="1447" height="727" alt="image" src="https://github.com/user-attachments/assets/f4028bcc-d8ee-4904-aa38-b77aa6680d5e" />


