# CLAUDE.md --- Muhammad Aziz Portfolio Website

## 0. Project Goal

Build a premium personal portfolio website for **Muhammad Aziz**, an
Informatics Engineering student at **Politeknik Negeri Lhokseumawe
(PNL)**.

The visual direction is inspired by the uploaded reference image: -
editorial / streetwear / collectible-magazine aesthetic - dominant black
background - high-contrast white typography - fluorescent
lime/acid-green accent - torn-paper separators - oversized condensed
headlines - collage-style project cards - slightly raw, experimental
composition - modern motion design without looking like generic
AI-generated landing pages

The website should feel like a **personal creative-tech archive**, not a
standard corporate portfolio.

Core stack: - React - TypeScript / TSX - Framer Motion - modern CSS /
Tailwind if already configured - Lucide or another minimal icon library
if needed

Do NOT turn the site into a generic SaaS dashboard.

------------------------------------------------------------------------

# 1. Public Footprint Research

Research performed on 26 September 2026.

## Strong public identity match

A public LinkedIn profile for **Muhammad Aziz** identifies: -
Informatics Engineering student - Politeknik Negeri Lhokseumawe -
Education: 2024--present - Location shown publicly as Aceh, Indonesia -
Experience at Komit PNL since May 2026: - Kadiv Digihub - Pengembang
Web - Publicly listed certifications include: - Web Developer
certification from BNSP - Belajar Dasar Data Science --- Dicoding -
Belajar Dasar Cloud dan Gen AI di AWS --- Dicoding - Belajar Dasar
Manajemen Proyek --- Dicoding - Machine Learning bootcamp certificate
from Kelas Bagus

Source: LinkedIn public profile:
https://id.linkedin.com/in/muhammad-aziz-a67648352

Important: The website should not expose private identifiers such as
student ID/NIM unless explicitly requested.

## PNL / KMIPN VIII 2026

An official PNL article states that six PNL teams reached the final of
KMIPN VIII 2026.

The official PNL report identifies **Muhammad Aziz as the team leader of
TimBerapa** in the E-Government category, together with Amirullah and
Deswita Nazwa Ariani.

A later official PNL article reports that TimBerapa won: **Juara 1
Solusi Inovatif --- Kategori E-Government, KMIPN VIII 2026.**

Official sources:
https://pnl.ac.id/id/detail/enam-tim-pnl-tembus-final-kmipn-viii-2026
https://pnl.ac.id/en/detail/pnl-gemilang-di-panggung-nasional-6-finalis-sapu-bersih-juara-kmipn-viii-2026

Portfolio implication: This should be one of the most visually prominent
achievements on the site.

Suggested display: `01 — NATIONAL ACHIEVEMENT` `KMIPN VIII 2026`
`1ST PLACE · E-GOVERNMENT` `TEAMBERAPA`

Do not invent competition scores, judging criteria, prize amounts, or
technical claims that are not sourced.

------------------------------------------------------------------------

# 2. Personal Brand Positioning

Recommended positioning:

> Muhammad Aziz is an Informatics Engineering student and digital
> builder focused on turning technology into practical products ---
> spanning web development, AI/ML, computer vision, IoT, mobile
> applications, and digital systems.

Alternative short positioning:

> Building useful things with code, AI, and a little obsession with
> details.

Tone: - confident - technical - experimental - youthful - concise -
builder-oriented - not overly corporate - not motivational-poster
language

Avoid: - "I am the best..." - "expert in everything" - inflated claims
such as "world-class" - generic AI buzzword paragraphs - fake metrics -
invented clients - invented employment history

------------------------------------------------------------------------

# 3. Visual Identity

## Main palette

Use the uploaded reference as the visual direction.

### Primary

-   Ink Black: `#050505`
-   Near Black: `#0B0B0B`
-   Paper White: `#F4F4F0`
-   Pure White: `#FFFFFF`
-   Acid Lime: `#B7FF00`
-   Deep Lime: `#8FD600`

The acid lime should be used as an accent, not as the entire interface.

## Texture

Use subtle: - paper grain - noise - halftone - faint typography
fragments - oversized background letters - scanline-like details -
rough/torn edge masks

Keep textures low opacity.

The result must remain readable and performant.

------------------------------------------------------------------------

# 4. Typography System

Use a strong condensed display font for headlines.

Recommended combinations: - Display: Anton / Bebas Neue / Oswald /
Archivo Narrow - Body: Inter / Geist / DM Sans - Mono metadata:
JetBrains Mono / IBM Plex Mono

Hierarchy:

### Display XL

Huge uppercase: `BUILDING DIGITAL SYSTEMS`

### Display L

`SELECTED WORK`

### Section label

Small mono uppercase: `/ 03 — PROJECTS`

### Body

Short paragraphs with generous line-height.

### Metadata

Tiny uppercase mono labels: `ROLE` `STACK` `YEAR` `STATUS`

Rules: - Headlines mostly uppercase. - Avoid too many font sizes. - Use
very large type to create visual rhythm. - Do not center every
section. - Use asymmetrical editorial layouts.

------------------------------------------------------------------------

# 5. Site Architecture

Use multiple navigation tabs / pages or clearly separated route
sections.

Preferred routes:

`/` `/about` `/work` `/projects` `/achievements` `/experience` `/skills`
`/contact`

If the project should remain technically single-page, simulate the same
architecture with scroll-linked sections and URL hash navigation.

Navbar:

`AZIZ` `ABOUT` `WORK` `ACHIEVEMENTS` `EXPERIENCE` `CONTACT`

Desktop navbar: - sticky - black - thin white/lime borders - active tab
indicated with lime - subtle Framer Motion transition

Mobile: - compact top bar - full-screen menu - staggered menu reveal

------------------------------------------------------------------------

# 6. Homepage Structure

## HERO

Large statement:

`MUHAMMAD` `AZIZ`

Subheadline:

`INFORMATICS ENGINEERING STUDENT` `DIGITAL BUILDER · AI · WEB · IOT`

Short copy:

> I build practical digital products across web development, artificial
> intelligence, computer vision, mobile applications, and IoT.

Visual: - large portrait/profile visual if an approved photo is
available - otherwise use abstract graphic treatment - oversized AZIZ
typography in background - acid-green accent block - animated cursor /
marker / label

CTA: `VIEW WORK` `LET'S CONNECT`

Do not create fake social links.

------------------------------------------------------------------------

# 7. About Section

Title:

`WHO IS AZIZ?`

Content:

Muhammad Aziz is an Informatics Engineering student at Politeknik Negeri
Lhokseumawe, combining software development with experimentation in AI,
machine learning, computer vision, IoT, and digital product design.

He has worked on projects ranging from web platforms and mobile
applications to AI-powered systems, IoT monitoring, server
infrastructure, and competition prototypes.

Current public experience includes web development and Digihub
leadership/activity at Komit PNL.

Source for education / public experience: LinkedIn public profile:
https://id.linkedin.com/in/muhammad-aziz-a67648352

Use short paragraphs, not a giant biography.

------------------------------------------------------------------------

# 8. Featured Achievement

Make this section visually dramatic.

## KMIPN VIII 2026

`1ST PLACE` `SOLUSI INOVATIF` `E-GOVERNMENT`

Team: `TIMBERAPA`

Role: `TEAM LEADER`

Members: - Muhammad Aziz - Amirullah - Deswita Nazwa Ariani

Official PNL source:
https://pnl.ac.id/en/detail/pnl-gemilang-di-panggung-nasional-6-finalis-sapu-bersih-juara-kmipn-viii-2026

Use: - huge `01` - torn-paper separator - lime highlight - project
visual - animated medal/trophy treatment - horizontal ticker

------------------------------------------------------------------------

# 9. Featured Project --- PETROCHAIN

Project title:

`PETROCHAIN`

Subtitle:

`INTELLIGENT VERIFICATION & AUDIT FOR SUBSIDIZED FUEL DISTRIBUTION`

Description:

A prototype concept for making subsidized-fuel distribution more
targeted, transparent, and auditable.

Core system: 1. Vehicle pre-registration 2. Economic eligibility
filtering 3. Vehicle detection 4. License plate / STNK OCR validation 5.
QR validation 6. Audit trail 7. Monitoring dashboard

Technologies / concepts: - YOLO - OCR - XGBoost - blockchain audit
trail - dashboard - IoT prototype

Important: Treat exact model versions, dataset sizes, thresholds, and
hardware specifications as project-development details, not official
claims, unless the final portfolio has verified project documentation.

Visual treatment: - black background - giant PETROCHAIN title - lime
data labels - technical diagrams - card collage - animated pipeline

------------------------------------------------------------------------

# 10. Selected Projects

Use project cards with filters.

Categories: `ALL` `AI / ML` `WEB` `MOBILE` `IOT` `SYSTEM` `DESIGN`

## ByteShield

Title: `BYTESHIELD`

Subtitle: `STATIC MALWARE ANALYSIS WITH DEEP LEARNING`

Concept: Analyze Windows executable files statically without executing
them, using byte-level representation / byteplot and deep learning.

Known development stack: - React JSX frontend - FastAPI backend - CNN /
deep learning experimentation - byteplot visualization

Visual: black + green cybersecurity aesthetic.

------------------------------------------------------------------------

## POS Application

Title: `POINT OF SALE`

Stack: - Flutter - Firebase - React.js

Features: - product/category management - real-time transactions -
automated reports - authentication - web dashboard - mobile cashier
application

This project is publicly described on the user's LinkedIn activity.

------------------------------------------------------------------------

## Aqua Sentinel

Title: `AQUA SENTINEL`

Description: IoT-based river water-level monitoring and flood
early-warning concept.

Stack: - Flutter - Firebase - Cloud Functions - Firebase Cloud
Messaging - IoT water-level sensors

Features: - real-time monitoring - Normal / Alert / Danger
classification - push notifications - historical visualization - planned
dashboard / analytics

This project is publicly described on LinkedIn.

------------------------------------------------------------------------

## SDG Sentiment Analysis

Title: `SDG SENTIMENT ANALYSIS`

Stack: - Python - Streamlit - Pandas - Plotly - NLP / sentiment analysis

Concept: Analyze public conversations related to SDGs and brand
sustainability.

This was associated with Hackathon Bagus#3 Machine Learning Practically.

------------------------------------------------------------------------

## Automatic Trash Bin

Title: `AUTOMATIC TRASH BIN`

Stack: - Arduino - ultrasonic sensor

Concept: A touchless smart trash bin that automatically opens when an
object is detected.

Publicly listed as a project on LinkedIn.

------------------------------------------------------------------------

## Server Infrastructure Lab

Title: `MULTI-SERVER INFRASTRUCTURE`

Environment: - VMware Workstation - Windows Server - Ubuntu Server

Windows-side topics: - AD DS - Domain Controller - DNS - DHCP - ADFS -
RDP - user/group administration - DFS - FSRM - RRAS / VPN - IIS FTP -
IIS HTTP/HTTPS - NTP

Ubuntu-side topics: - Apache / Nginx - Laravel hosting - SQLite -
OpenSSH - FTP - NTP - SSL/TLS - firewall / network management

Use this project to show systems/networking capability.

------------------------------------------------------------------------

## CocoCarbone Website

Title: `COCOCARBONE`

Description: A company-profile / export-focused website for a
coconut-products and carbon-charcoal business.

Known stack: - React - TypeScript - responsive/mobile-first UI -
bilingual presentation - WhatsApp inquiry integration

Public LinkedIn post describes this as a web development project.

Do not claim ownership of the company; describe Aziz's role as web
developer/contributor if the final project record confirms it.

------------------------------------------------------------------------

# 11. Experience

## Komit PNL

`MAY 2026 — PRESENT`

Public profile lists: - Pengembang Web - Kadiv Digihub

Location: Lhokseumawe, Aceh, Indonesia

Keep description concise: \> Contributing to web development and digital
initiatives within Komit PNL.

Do not invent exact responsibilities until verified.

Source: https://id.linkedin.com/in/muhammad-aziz-a67648352

------------------------------------------------------------------------

# 12. Achievements

Display as an editorial timeline rather than a generic card grid.

Known achievements / public claims:

### 2026

`1ST PLACE — KMIPN VIII 2026` E-Government / Solusi Inovatif TeamBerapa
Role: Team Leader

Official PNL source:
https://pnl.ac.id/en/detail/pnl-gemilang-di-panggung-nasional-6-finalis-sapu-bersih-juara-kmipn-viii-2026

### 2025

`1ST PLACE — HACKATHON BAGUS#3` Machine Learning Practically

Public LinkedIn post says the team won 1st place and names: - Muhammad
Aziz - Tata Aditya Pamungkas - Rafa Haris

Treat this as a public LinkedIn claim unless an official competition
page/certificate is added.

------------------------------------------------------------------------

# 13. Certifications

Create a compact certification wall.

Publicly listed: - BNSP --- Web Developer - Dicoding --- Belajar Dasar
Data Science - Dicoding --- Belajar Dasar Cloud dan Gen AI di AWS -
Dicoding --- Belajar Dasar Manajemen Proyek - Kelas Bagus --- Machine
Learning bootcamp / certificate

Do not show credential IDs publicly unless the user wants them
displayed.

------------------------------------------------------------------------

# 14. Skills

Group skills by domain.

## DEVELOPMENT

-   React
-   TypeScript
-   JavaScript
-   Laravel
-   PHP
-   Flutter
-   Firebase
-   FastAPI
-   MySQL
-   PostgreSQL

## AI / DATA

-   Python
-   Machine Learning
-   Deep Learning
-   Computer Vision
-   NLP
-   YOLO
-   OCR
-   XGBoost
-   Pandas
-   Plotly

## SYSTEM / NETWORK

-   Windows Server
-   Ubuntu Server
-   VMware
-   Active Directory
-   DNS
-   DHCP
-   IIS
-   Nginx / Apache
-   VPN
-   SSL/TLS

## IOT

-   ESP32
-   Arduino
-   Firebase
-   Sensors
-   Real-time monitoring

Only present technologies that are actually used or meaningfully
explored. Avoid turning every technology into an "expertise" claim.

------------------------------------------------------------------------

# 15. Design Language From Reference Image

The uploaded reference should influence the entire site.

## Layout rules

Use: - asymmetric grids - oversized typography - magazine-style
captions - torn horizontal separators - overlapping cards - rotated
project screenshots - lime labels - black negative space - white
editorial text - large background typography

Avoid: - symmetrical SaaS cards everywhere - excessive rounded
rectangles - purple-blue gradients - glassmorphism everywhere -
excessive shadows - generic "AI portfolio" aesthetics

------------------------------------------------------------------------

# 16. Framer Motion Rules

Motion is a major part of the experience.

Use Framer Motion for:

### Page transitions

-   opacity
-   y-axis movement
-   clip-path reveal

### Navigation

-   active indicator
-   menu stagger
-   hover underline / lime marker

### Hero

-   text reveal
-   character/word stagger
-   floating metadata
-   subtle parallax

### Project cards

-   image scale
-   tilt on pointer
-   metadata slide-in
-   hover crop
-   stack separation

### Scroll

-   section reveal
-   horizontal marquee
-   progress indicator
-   parallax typography
-   image drift

### Achievement

-   giant number reveal
-   lime accent expansion
-   trophy/project visual entrance

Motion should feel intentional.

Avoid: - constant bouncing - excessive rotation - slow animations that
block navigation - animation on every tiny element - motion that hurts
accessibility

Respect `prefers-reduced-motion`.

------------------------------------------------------------------------

# 17. Navigation Interaction

The navigation should feel like a printed magazine index.

Example:

`00 HOME` `01 ABOUT` `02 WORK` `03 ACHIEVEMENTS` `04 EXPERIENCE`
`05 SKILLS` `06 CONTACT`

On active section: - number remains white - label gets acid-lime
highlight - tiny animated line expands

Add a small scroll progress indicator.

------------------------------------------------------------------------

# 18. Contact Section

Headline:

`LET'S BUILD SOMETHING.`

Supporting text:

> Open to collaboration, technology projects, creative development, and
> opportunities to build useful digital products.

Buttons: - LinkedIn - GitHub - Email

Only use real URLs when provided/verified.

Do not fabricate: - GitHub usernames - email addresses - phone numbers -
social accounts

------------------------------------------------------------------------

# 19. Footer

Minimal:

`MUHAMMAD AZIZ` `INFORMATICS ENGINEERING · PNL`

Then: `© 2026 MUHAMMAD AZIZ`

Optional: `BUILT WITH REACT + TYPESCRIPT + FRAMER MOTION`

------------------------------------------------------------------------

# 20. Content Hierarchy

The website should communicate this story:

`STUDENT` → `BUILDER` → `EXPERIMENTER` → `COMPETITOR` → `PROJECT LEADER`
→ `DIGITAL CREATOR`

The visitor should understand within the first 10 seconds: 1. who Aziz
is 2. what he builds 3. what technologies he works with 4. that he has
competition/project experience 5. where to see his work

------------------------------------------------------------------------

# 21. Important Fact-Checking Rules

Use three confidence levels internally:

### VERIFIED PUBLIC

Supported by an official institution or public profile.

Examples: - PNL education - Komit PNL experience listed publicly - KMIPN
VIII 2026 TeamBerapa / Muhammad Aziz / Juara 1 E-Government - public
LinkedIn project descriptions

### USER-PROVIDED PROJECT DETAIL

Details supplied directly by Muhammad Aziz during project development.

Examples: - PETROCHAIN architecture - ByteShield implementation
details - YOLO/OCR pipeline experiments - IoT hardware MVP details -
Smartkey - Suara Mata - other prototypes discussed privately

These may be used as portfolio content, but should not be presented as
externally verified awards or official statistics.

### DO NOT CLAIM WITHOUT PROOF

Never invent: - client names - revenue - number of users - accuracy
percentages - funding - awards - rankings - employment
responsibilities - publication status - production deployment - dataset
ownership - patents

------------------------------------------------------------------------

# 22. Recommended Homepage Copy

## Hero

`MUHAMMAD AZIZ`

`DIGITAL BUILDER` `AI · WEB · IOT · SOFTWARE`

> Informatics Engineering student building practical digital systems
> through code, AI, and experimentation.

CTA: `EXPLORE WORK`

Secondary: `ABOUT AZIZ`

## Featured achievement

`01` `KMIPN VIII 2026` `1ST PLACE` `E-GOVERNMENT`

## Featured work

`SELECTED WORK`

> From AI-powered prototypes to web platforms, mobile applications, IoT
> systems, and infrastructure labs.

------------------------------------------------------------------------

# 23. UI Components

Create reusable components:

``` text
Navbar
PageTransition
SectionLabel
Hero
Marquee
ProjectCard
ProjectGrid
AchievementCard
AchievementTimeline
SkillGroup
CertificationCard
ExperienceCard
ImageCollage
TornDivider
NoiseOverlay
CursorLabel
ScrollProgress
Footer
```

Use data-driven arrays for projects, skills, achievements, and
certifications.

Do not hard-code repeated markup.

------------------------------------------------------------------------

# 24. Responsive Behavior

Desktop: - editorial asymmetric layout - large typography - overlapping
imagery

Tablet: - reduce overlap - maintain strong type

Mobile: - stack content - keep oversized type but prevent overflow -
simplify collage - make navigation easy to use - preserve lime accents -
maintain strong visual identity

Test at: - 1440px - 1280px - 1024px - 768px - 390px - 375px

------------------------------------------------------------------------

# 25. Performance

Despite heavy motion: - lazy-load project images - use optimized
WebP/AVIF - avoid huge background videos - use CSS textures instead of
large image textures where possible - use transform/opacity for
animations - avoid layout-thrashing animations - respect
reduced-motion - keep first paint fast

------------------------------------------------------------------------

# 26. Anti-AI-Slop Rules

The design must NOT look like a generated portfolio template.

Avoid: - random gradient blobs - purple/blue neon - excessive
glassmorphism - generic 3D floating cubes - meaningless tech buzzwords -
giant "HELLO WORLD" - endless rounded cards - fake statistics - generic
stock illustrations - excessive emoji

Instead: - strong editorial typography - deliberate asymmetry - real
project artifacts - real screenshots - real achievement evidence -
technical labels - visual storytelling - restrained but bold motion

------------------------------------------------------------------------

# 27. Final Creative Direction

Think:

`ACID LIME` + `BLACK EDITORIAL` + `TECHNICAL ARCHIVE` +
`STREETWEAR LOOKBOOK` + `ENGINEERING NOTEBOOK`

Not:

`GENERIC DEVELOPER PORTFOLIO`

The final experience should feel like someone opened a physical design
magazine documenting Muhammad Aziz's work --- then rebuilt it as an
interactive digital experience.

Primary visual reference: the uploaded image in this conversation.
