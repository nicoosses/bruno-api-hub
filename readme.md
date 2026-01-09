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

<img width="1383" height="426" alt="image" src="https://github.com/user-attachments/assets/b6ae2977-3efb-44b5-b69c-d8ff0c902db8" />

<img width="1396" height="530" alt="image" src="https://github.com/user-attachments/assets/19d43273-e238-4b86-ad05-054c56e6a79c" />

<img width="1401" height="789" alt="image" src="https://github.com/user-attachments/assets/c89b21ea-feb2-44dd-a50d-4e84cadadf66" />

<img width="1393" height="435" alt="image" src="https://github.com/user-attachments/assets/681f5417-bce3-44c2-a066-3068dd54e5d6" />

<img width="1397" height="697" alt="image" src="https://github.com/user-attachments/assets/15594784-1e99-4b5d-9e98-7c611f350348" />

<img width="1400" height="814" alt="image" src="https://github.com/user-attachments/assets/29b5188b-50e6-4035-93f4-050c7184df6b" />

