const files = {
  "about.js": {
    type: "javascript",
    content: `<span class="code-key">const</span> developer = {
  name: <span class="code-string">"AKHIL U S"</span>,
  role: <span class="code-string">"Software Developer"</span>,
  location: <span class="code-string">"Trivandrum, Kerala"</span>,
  education: [<span class="code-string">"MCA"</span>, <span class="code-string">"BCA"</span>],
  interests: [
    <span class="code-string">"Full Stack Development"</span>,
    <span class="code-string">"AI"</span>,
    <span class="code-string">"Scalable Applications"</span>
  ]
};`,
  },
  "skills.json": {
    type: "json",
    content: `{
  <span class="code-string">"languages"</span>: [<span class="code-string">"Python"</span>, <span class="code-string">"Java"</span>, <span class="code-string">"C"</span>, <span class="code-string">"C#"</span>, <span class="code-string">"PHP"</span>],
  <span class="code-string">"frameworks"</span>: [<span class="code-string">"Django"</span>, <span class="code-string">"Flask"</span>, <span class="code-string">"React"</span>],
  <span class="code-string">"web"</span>: [<span class="code-string">"HTML"</span>, <span class="code-string">"CSS"</span>, <span class="code-string">"JavaScript"</span>, <span class="code-string">"Bootstrap"</span>, <span class="code-string">"jQuery"</span>],
  <span class="code-string">"database"</span>: [<span class="code-string">"MySQL"</span>, <span class="code-string">"MongoDB"</span>],
  <span class="code-string">"tools"</span>: [<span class="code-string">"Git"</span>, <span class="code-string">"Linux"</span>, <span class="code-string">"VS Code"</span>]
}`,
  },
  "projects.ts": {
    type: "typescript",
    content: `<span class="code-key">type</span> Project = {
  title: string;
  stack: string[];
  description: string;
};

<span class="code-key">export const</span> projects: Project[] = [
  {
    title: <span class="code-string">"Smart Ride"</span>,
    category: <span class="code-string">"React"</span>,
    tech: [<span class="code-string">"React"</span>, <span class="code-string">"Firebase"</span>]
  },
  {
    title: <span class="code-string">"Block Rent"</span>,
    category: <span class="code-string">"Blockchain"</span>,
    tech: [<span class="code-string">"React.js"</span>, <span class="code-string">"Node.js"</span>, <span class="code-string">"SHA-256"</span>]
  }
];`,
  },
  "experience.md": {
    type: "markdown",
    content: `# Python Full Stack Developer Intern

**Quest Innovative Solutions**  
2023-2024

- Developed Django-based applications and REST APIs.
- Worked on frontend-backend integration.
- Built responsive UI, debugged issues, and handled database operations.

## Education

- MCA - APJ Abdul Kalam Technological University | 2024-2026
- BCA - University of Kerala | 2020-2023`,
  },
  "certifications.md": {
    type: "markdown",
    content: `# Elite NPTEL Online Certification in Cloud Computing

IIT Kharagpur  
Score: 71%  
Jan-Apr 2025`,
  },
  "contact.js": {
    type: "javascript",
    content: `<span class="code-key">const</span> contact = {
  phone: <span class="code-string">"+91 9496553323"</span>,
  email: <span class="code-string">"akhilus321@gmail.com"</span>,
  linkedin: <span class="code-string">"linkedin.com/in/akhilus"</span>,
  github: <span class="code-string">"github.com/Akhilus26"</span>
};`,
  },
};

const projects = [
  {
    title: "Smart Ride",
    category: "React",
    tech: ["React", "Firebase", "Firebase Database"],
    duration: "6 weeks",
    complexity: "Advanced",
    status: "Prototype",
    description:
      "Smart transportation system with real-time tracking, digital ticketing and crowd monitoring.",
    features: [
      "Real-time vehicle tracking",
      "Digital ticket booking",
      "QR ticket validation",
      "Crowd availability monitoring",
      "Live route updates",
      "Firebase realtime data synchronization",
    ],
    screenshots: ["tracking.tsx", "tickets.firebase", "routes.live"],
  },
  {
    title: "Smart Ration Distribution System",
    category: "React",
    tech: ["React", "Firebase", "Firebase Database"],
    duration: "5 weeks",
    complexity: "Advanced",
    status: "Prototype",
    description:
      "Digital platform for secure and transparent ration distribution with quota management.",
    features: [
      "Beneficiary registration",
      "Monthly quota tracking",
      "OTP/QR authentication",
      "Product and stock management",
      "Real-time inventory updates",
      "Admin analytics dashboard",
    ],
    screenshots: ["quota.json", "inventory.tsx", "analytics.panel"],
  },
  {
    title: "College Canteen App",
    category: "Web",
    tech: ["React", "Firebase"],
    duration: "3 weeks",
    complexity: "Intermediate",
    status: "Completed",
    description:
      "Smart canteen ordering platform for students and staff.",
    features: [
      "Food menu display",
      "Online ordering",
      "Order status tracking",
      "Cart management",
      "Admin dashboard",
      "Realtime order updates",
    ],
    screenshots: ["menu.jsx", "cart.state", "orders.live"],
  },
  {
    title: "Block Rent",
    category: "Blockchain",
    tech: ["React.js", "Node.js", "Express.js", "SQLite", "SHA-256"],
    duration: "8 weeks",
    complexity: "High",
    status: "Featured",
    description:
      "Secure digital property rental agreement platform with blockchain-inspired security.",
    features: [
      "Landlord dashboard",
      "Tenant dashboard",
      "Admin panel",
      "Property listing with images and videos",
      "Offer and counter-offer negotiation",
      "Agreement generation",
      "Mock payment workflow",
      "PDF agreement generation",
      "SHA-256 hash-based integrity verification",
      "CRUD operations using SQLite",
    ],
    screenshots: ["agreement.hash", "property.gallery", "tenant.flow"],
  },
  {
    title: "Sudoku Solver",
    category: "Python",
    tech: ["Python", "Tkinter"],
    duration: "2 weeks",
    complexity: "Intermediate",
    status: "Completed",
    description: "Desktop application that automatically solves Sudoku puzzles.",
    features: ["Interactive puzzle input", "Backtracking algorithm", "Instant puzzle solving", "GUI interface", "Error handling"],
    screenshots: ["solver.py", "grid.tk", "backtracking.log"],
  },
  {
    title: "Movie Reservation System",
    category: "Django",
    tech: ["Django", "Python", "MySQL"],
    duration: "4 weeks",
    complexity: "Intermediate",
    status: "Completed",
    description: "Movie ticket reservation and management system.",
    features: ["Movie listing", "Seat selection", "Booking management", "User authentication", "Admin controls"],
    screenshots: ["movies.urls", "seats.model", "booking.view"],
  },
];

const skillGroups = {
  languages: ["Python", "Java", "C", "C#", "PHP"],
  frameworks: ["Django", "Flask", "React"],
  web: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
  database: ["MySQL", "MongoDB"],
  tools: ["Git", "Linux", "VS Code"],
  concepts: ["Data Structures", "OOP", "REST APIs", "Agile", "SDLC"],
};

const commands = {
  whoami: "Software Developer",
  skills: "Python Java Django React JavaScript",
  education: "MCA - APJ Abdul Kalam Technological University | BCA - University of Kerala",
  contact: "akhilus321@gmail.com",
  projects: projects.map((project) => project.title).join(" | "),
  help: "Available commands: whoami, skills, education, contact, projects, clear",
};

const tabs = document.querySelector("#tabs");
const fileView = document.querySelector("#fileView");
const fileButtons = document.querySelectorAll("[data-file]");
const explorer = document.querySelector("#explorer");
const menu = document.querySelector(".menu");
const openedTabs = new Set(["about.js"]);
let activeFile = "about.js";
let activeProjectTitle = "Block Rent";
let activeProjectFilter = "All";
let projectSearchTerm = "";

function renderTabs() {
  tabs.innerHTML = [...openedTabs]
    .map((file) => `<button class="tab ${file === activeFile ? "active" : ""}" data-tab="${file}">${file}<span>x</span></button>`)
    .join("");
}

function openFile(file) {
  if (!files[file]) return;
  activeFile = file;
  openedTabs.add(file);
  fileView.innerHTML = `<div class="file-header">${file}</div><pre><code>${files[file].content}</code></pre>`;
  document.querySelectorAll(".file").forEach((button) => button.classList.toggle("active", button.dataset.file === file));
  renderTabs();
}

tabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-tab]");
  if (!tab) return;
  if (event.target.tagName === "SPAN" && openedTabs.size > 1) {
    openedTabs.delete(tab.dataset.tab);
    activeFile = [...openedTabs].at(-1);
  } else {
    activeFile = tab.dataset.tab;
  }
  openFile(activeFile);
});

fileButtons.forEach((button) => button.addEventListener("click", () => openFile(button.dataset.file)));

document.querySelector("#hamburger").addEventListener("click", () => {
  explorer.classList.toggle("open");
  menu.classList.toggle("open");
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const typingTarget = document.querySelector("#typing");
const typingWords = ["Software Developer", "Python Full Stack Developer", "Django Developer", "AI Curious Builder"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const word = typingWords[wordIndex];
  typingTarget.textContent = word.slice(0, charIndex) + "|";
  charIndex += deleting ? -1 : 1;
  if (charIndex === word.length + 1) {
    deleting = true;
    setTimeout(typeLoop, 900);
    return;
  }
  if (charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
  }
  setTimeout(typeLoop, deleting ? 42 : 80);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (match) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[match]));
}

function projectFileName(project) {
  return `${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}.ts`;
}

function getVisibleProjects() {
  return projects.filter((project) => {
    const categoryMatch =
      activeProjectFilter === "All" ||
      project.category === activeProjectFilter ||
      project.tech.some((tech) => tech.toLowerCase().includes(activeProjectFilter.toLowerCase()));
    const search = projectSearchTerm.trim().toLowerCase();
    const searchMatch =
      !search ||
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.tech.some((tech) => tech.toLowerCase().includes(search));
    return categoryMatch && searchMatch;
  });
}

function renderProjectStats(project) {
  return `<div class="project-stats">
    <article><span>Duration</span><strong>${project.duration}</strong></article>
    <article><span>Technologies</span><strong>${project.tech.length}</strong></article>
    <article><span>Complexity</span><strong>${project.complexity}</strong></article>
    <article><span>Status</span><strong>${project.status}</strong></article>
  </div>`;
}

function renderCodePreview(project) {
  const feature = project.features[0] || "Build feature";
  return `<pre class="code-preview"><code><span class="code-key">const</span> project = {
  title: <span class="code-string">"${escapeHtml(project.title)}"</span>,
  category: <span class="code-string">"${escapeHtml(project.category)}"</span>,
  mainFeature: <span class="code-string">"${escapeHtml(feature)}"</span>,
  status: <span class="code-string">"${escapeHtml(project.status)}"</span>
};</code></pre>`;
}

function renderProjectDetail(project) {
  document.querySelector("#projectDetail").innerHTML = `<article class="project-panel">
    <div class="panel-title">
      <div>
        <p>${projectFileName(project)}</p>
        <h3>${project.title}</h3>
      </div>
      <button data-open-modal="${project.title}">Open Preview</button>
    </div>
    ${renderProjectStats(project)}
    <details open>
      <summary>Overview</summary>
      <p>${project.description}</p>
    </details>
    <details>
      <summary>Features</summary>
      <ul>${project.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
    </details>
    <details>
      <summary>Technologies Used</summary>
      <div class="tags">${project.tech.map((tech) => `<span>${tech}</span>`).join("")}</div>
    </details>
    <details>
      <summary>Screenshots</summary>
      <div class="screenshot-strip">${project.screenshots.map((shot) => `<span>${shot}</span>`).join("")}</div>
    </details>
    <div class="project-actions">
      <a href="https://github.com/Akhilus26" target="_blank" rel="noreferrer">GitHub</a>
      <a href="#contact">Live Demo</a>
    </div>
    ${renderCodePreview(project)}
  </article>`;
}

function renderProjectTabs(visible) {
  document.querySelector("#projectTabs").innerHTML = visible
    .map(
      (project) =>
        `<button class="${project.title === activeProjectTitle ? "active" : ""}" data-project-tab="${project.title}">${projectFileName(project)}</button>`
    )
    .join("");
}

function renderFeaturedProjects() {
  const featured = ["Block Rent", "Smart Ride", "Smart Ration Distribution System"];
  document.querySelector("#featuredProjects").innerHTML = `<div class="featured-head">
      <p>Featured Projects</p>
      <span>priority workspace</span>
    </div>
    <div class="featured-grid">
      ${projects
        .filter((project) => featured.includes(project.title))
        .map(
          (project) => `<button class="featured-card" data-project-card="${project.title}">
            <span>${project.category}</span>
            <strong>${project.title}</strong>
            <small>${project.tech.slice(0, 3).join(" / ")}</small>
          </button>`
        )
        .join("")}
    </div>`;
}

function renderProjectTimeline() {
  document.querySelector("#projectTimeline").innerHTML = `<div class="timeline-rail"></div>${projects
    .map(
      (project, index) => `<button class="${project.title === activeProjectTitle ? "active" : ""}" data-project-card="${project.title}">
        <span>0${index + 1}</span>
        <strong>${project.title}</strong>
        <small>${project.category}</small>
      </button>`
    )
    .join("")}`;
}

function renderTechFloat() {
  const icons = ["React", "Django", "Python", "SHA-256", "Firebase", "SQLite", "Node"];
  document.querySelector("#techFloat").innerHTML = icons.map((icon, index) => `<span style="--i:${index}">${icon}</span>`).join("");
}

function renderProjects() {
  const projectGrid = document.querySelector("#projectGrid");
  const visible = getVisibleProjects();
  const activeProject = visible.find((project) => project.title === activeProjectTitle) || visible[0] || projects[0];
  activeProjectTitle = activeProject.title;
  renderProjectTabs(visible);
  renderProjectDetail(activeProject);
  renderProjectTimeline();
  projectGrid.innerHTML =
    visible
      .map(
        (project) => `<article class="project-card ${project.title === activeProjectTitle ? "active" : ""}" data-project-card="${project.title}">
          <div class="project-card-top">
            <span>${project.category}</span>
            <small>${project.status}</small>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          ${renderProjectStats(project)}
          <div class="tags">${project.tech.map((tech) => `<span>${tech}</span>`).join("")}</div>
        </article>`
      )
      .join("") || `<p class="empty-projects">No project files match this search.</p>`;
}

function renderFilters() {
  const filters = document.querySelector("#filters");
  const tech = ["All", "Web", "AI", "Blockchain", "Python", "React", "Django"];
  filters.innerHTML = tech.map((item) => `<button class="${item === activeProjectFilter ? "active" : ""}" data-filter="${item}">${item}</button>`).join("");
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeProjectFilter = button.dataset.filter;
    filters.querySelectorAll("button").forEach((filterButton) => filterButton.classList.remove("active"));
    button.classList.add("active");
    renderProjects();
  });
}

function initProjectWorkspace() {
  const projectSearch = document.querySelector("#projectSearch");
  const projectsSection = document.querySelector("#projects");
  projectSearch.addEventListener("input", () => {
    projectSearchTerm = projectSearch.value;
    renderProjects();
  });
  projectsSection.addEventListener("click", (event) => {
    const projectButton = event.target.closest("[data-project-card], [data-project-tab], [data-featured]");
    const modalButton = event.target.closest("[data-open-modal]");
    if (projectButton) {
      activeProjectTitle = projectButton.dataset.projectCard || projectButton.dataset.projectTab || projectButton.dataset.featured;
      renderProjects();
    }
    if (modalButton) openProjectModal(modalButton.dataset.openModal);
  });
  document.querySelector("#modalClose").addEventListener("click", closeProjectModal);
  document.querySelector("#projectModal").addEventListener("click", (event) => {
    if (event.target.id === "projectModal") closeProjectModal();
  });
  renderFeaturedProjects();
  renderTechFloat();
}

function openProjectModal(title) {
  const project = projects.find((item) => item.title === title);
  if (!project) return;
  document.querySelector("#modalContent").innerHTML = `<p class="crumb">${projectFileName(project)}</p>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    ${renderProjectStats(project)}
    <div class="tags">${project.tech.map((tech) => `<span>${tech}</span>`).join("")}</div>
    ${renderCodePreview(project)}`;
  document.querySelector("#projectModal").classList.add("open");
  document.querySelector("#projectModal").setAttribute("aria-hidden", "false");
}

function closeProjectModal() {
  document.querySelector("#projectModal").classList.remove("open");
  document.querySelector("#projectModal").setAttribute("aria-hidden", "true");
}

function renderSkills() {
  document.querySelector("#skillsGrid").innerHTML = Object.entries(skillGroups)
    .map(
      ([group, skills]) => `<article class="skill-card">
        <h3>${group}.json</h3>
        <ul>${skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
}

function renderContributions() {
  const grid = document.querySelector("#contribGrid");
  grid.innerHTML = Array.from({ length: 168 }, (_, index) => {
    const level = (index * 7 + index % 5) % 4;
    return `<span class="level-${level}" title="activity level ${level}"></span>`;
  }).join("");
}

function renderLines() {
  const lineNumbers = document.querySelector(".line-numbers");
  lineNumbers.innerHTML = Array.from({ length: 180 }, (_, index) => `<span>${index + 1}</span>`).join("");
}

function initTerminal() {
  const form = document.querySelector("#terminalForm");
  const input = document.querySelector("#terminalInput");
  const body = document.querySelector("#terminalBody");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = input.value.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      body.innerHTML = "";
      input.value = "";
      return;
    }
    body.insertAdjacentHTML("beforeend", `<p><span>&gt;</span> ${command}</p><p>${commands[command] || commands.help}</p>`);
    body.scrollTop = body.scrollHeight;
    input.value = "";
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.count);
      let current = 0;
      const timer = setInterval(() => {
        current += Math.ceil(target / 30);
        entry.target.textContent = Math.min(current, target);
        if (current >= target) clearInterval(timer);
      }, 38);
      observer.unobserve(entry.target);
    });
  });
  counters.forEach((counter) => observer.observe(counter));
}

function initCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  window.addEventListener("mousemove", (event) => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ring.style.left = `${event.clientX}px`;
    ring.style.top = `${event.clientY}px`;
  });
  document.querySelectorAll("a, button, input, textarea").forEach((item) => {
    item.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
    item.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
  });
}

function initParallax() {
  const target = document.querySelector("[data-parallax]");
  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 16;
    const y = (event.clientY / window.innerHeight - 0.5) * 16;
    target.style.transform = `translate(${x}px, ${y}px)`;
  });
}

function initParticles() {
  const canvas = document.querySelector("#particles");
  const context = canvas.getContext("2d");
  const glyphs = ["0", "1", "{", "}", "<", "/", ">", "const", "=>"];
  const particles = Array.from({ length: 76 }, () => ({
    x: Math.random(),
    y: Math.random(),
    s: Math.random() * 1.8 + 0.4,
    v: Math.random() * 0.0008 + 0.0003,
    glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
  }));

  function size() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function frame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
      particle.y += particle.v;
      if (particle.y > 1) particle.y = 0;
      const x = particle.x * canvas.width;
      const y = particle.y * canvas.height;
      context.fillStyle = index % 3 === 0 ? "rgba(78,201,176,.55)" : "rgba(0,122,204,.35)";
      if (index % 4 === 0) {
        context.font = `${10 + particle.s * 3}px Consolas, monospace`;
        context.fillText(particle.glyph, x, y);
      } else {
        context.fillRect(x, y, particle.s, particle.s);
      }
    });
    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", size);
  size();
  frame();
}

window.addEventListener("load", () => {
  setTimeout(() => document.querySelector("#loader").classList.add("hidden"), 550);
});

openFile("about.js");
renderLines();
renderFilters();
initProjectWorkspace();
renderProjects();
renderSkills();
renderContributions();
initTerminal();
initReveal();
initCounters();
initCursor();
initParallax();
initParticles();
typeLoop();
