<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:0f766e&height=170&section=header&text=Browser%20Share%20API%20Lab&fontSize=32&fontColor=ffffff&animation=fadeIn" width="100%" alt="Waving header"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=900&color=14B8A6&center=true&vCenter=true&width=760&lines=A%20local%20browser%20playground%20for%20checking%20Web%20Share%20API%20support%2C%20composing%20sh" alt="Typing title"/>

[![License](https://img.shields.io/github/license/CyberLoop-dev/browser-share-api-lab)](LICENSE)
![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/browser-share-api-lab)
![Stars](https://img.shields.io/github/stars/CyberLoop-dev/browser-share-api-lab?style=flat)
![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/browser-share-api-lab)
<img src="assets/mark.svg" width="112" alt="Browser Share API Lab illustration"/>
</div>

## 🧭 Overview

A local browser playground for checking Web Share API support, composing share payloads, handling cancellation, and using a clipboard fallback.

## ✨ Features

- 📤 Check navigator.share and navigator.canShare support.
- ✍️ Edit title, text, and URL before sharing.
- ↩️ Handle user cancellation and unsupported browsers.
- 📋 Copy the payload when native sharing is unavailable.

## 🎬 Demo

No hosted demo is provided. Start the local server and open the address printed in your terminal. Sharing and clipboard behavior depend on browser support and permissions.

## ⚡ Quick Start

~~~bash
npm start
~~~

## 🧰 Tech Stack

- Node.js 18+ · HTML · CSS · JavaScript
- Node.js built-in HTTP server; no third-party dependencies

## 🗂️ Folder Structure

~~~text
browser-share-api-lab/
├── server.js
├── package.json
├── public/index.html
├── public/styles.css
├── public/app.js
├── assets/mark.svg
├── .gitignore
├── LICENSE
└── README.md
~~~

## 🗺️ Roadmap

- [x] Core browser API interactions
- [x] Local server and custom SVG
- [ ] Add browser compatibility notes from community testing

## 🤝 Contributing

Issues and focused pull requests are welcome. Keep the app local-first and explain browser permission requirements clearly.

## 📄 License

MIT License. See [LICENSE](LICENSE).

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:101827&height=100&section=footer" width="100%" alt="Waving footer"/></div>
