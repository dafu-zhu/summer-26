const start = new Date("2026-06-03T00:00:00");
const end = new Date("2026-08-14T00:00:00");
const totalDays = daysBetween(start, end) + 1;

const colors = {
  blue: "#2866c7",
  red: "#c3472f",
  gold: "#a36b13",
  teal: "#18756d",
  green: "#4f7d33",
  violet: "#6a4aa3",
  black: "#111315",
};

const lanes = [
  {
    id: "daily",
    label: "LeetCode",
    sub: "must do daily",
    bars: [
      {
        title: "Daily coding practice",
        range: "Jun 3 onward",
        start: "2026-06-03",
        end: "2026-08-14",
        color: colors.black,
        type: "daily",
        weight: "thin",
        detail:
          "Short LeetCode practice every day. Continuity matters more than long sessions.",
        items: ["Daily: one problem, review, or short redo. Do not skip."],
      },
    ],
  },
  {
    id: "paper",
    label: "Paper Critical",
    sub: "FINM + STAT + PDE to new paper",
    bars: [
      {
        title: "Spring-26 core relearn",
        range: "Jun 3-13",
        start: "2026-06-03",
        end: "2026-06-13",
        color: colors.blue,
        type: "heavy",
        weight: "heavy",
        detail:
          "Relearn all three spring courses before choosing the paper topic: FINM32000, STAT31511, and STAT31450 PDE.",
        items: [
          "Jun 3: FINM L2 + HW2; STAT Ch6 + HW5; PDE Laplace's Equation",
          "Jun 4: FINM L3 + HW3; STAT Ch7 + HW6; PDE Homework 4 Laplace practice + Solvability Condition",
          "Jun 5: FINM L4 + HW4; STAT Ch8 + HW7; PDE Wave Equation",
          "Jun 6: FINM L5 + HW5; STAT Ch9 + HW8; PDE Homework 4 wave practice + Sturm--Liouville",
          "Jun 7: FINM L6 + HW6; STAT Ch10 + HW9; PDE Homework 5 practice + Self-Adjoint Operators",
          "Jun 8: FINM L7-L8 + HW7; STAT consolidation; PDE Homework 5 practice + Green's Function",
          "Jun 9: FINM map; STAT method review; PDE Homework 6 practice + Green's Functions and Source Terms",
          "Jun 10: FINM variants; STAT coding repairs; PDE Homework 6 practice + Fourier Transforms",
          "Jun 11: cross-course synthesis; PDE Fourier transform applications",
          "Jun 12: FINM/STAT checkpoint; PDE wave/half-line + HW7 A",
          "Jun 13: PDE strip Laplace + HW7 strip practice",
        ],
      },
      {
        title: "New paper",
        range: "Jun 14-21",
        start: "2026-06-14",
        end: "2026-06-21",
        color: colors.red,
        type: "heavy",
        weight: "heavy",
        detail:
          "Blank topic and blank manuscript. Jun 14 topic search, Jun 15-19 research, Jun 20 draft, Jun 21 finalize.",
        items: [
          "Jun 14: pick research problem and kill criteria",
          "Jun 15-19: compressed research block",
          "Jun 20: full ACM-style draft",
          "Jun 21: final edit and scope lock",
        ],
      },
    ],
  },
  {
    id: "prob",
    label: "Probability + Stoch + FINM33000",
    sub: "long daily lane",
    bars: [
      {
        title: "Probability / stoch / options",
        range: "Jun 22-Aug 14",
        start: "2026-06-22",
        end: "2026-08-14",
        color: colors.teal,
        type: "study",
        weight: "thin",
        detail:
          "Daily low-dose lane: ReviewProbNotes, Notes340, finbook chapters 2-6, and FINM33000 options fundamentals.",
        items: ["ReviewProbNotes", "Notes340", "finbook chapters 2-6", "FINM33000 fundamentals"],
      },
    ],
  },
  {
    id: "linear",
    label: "Linear Algebra + Matrix Computation",
    sub: "NLA + dcam",
    bars: [
      {
        title: "NLA / matrix computation",
        range: "Jun 22-Aug 14",
        start: "2026-06-22",
        end: "2026-08-14",
        color: colors.green,
        type: "study",
        weight: "thin",
        detail:
          "Linear algebra resource: D:\\XMU\\25Spring\\baruch-premfe-nla. Matrix computation resource: dcam. Target: 100 selected exercises and OLS projection derivation.",
        items: ["Linear algebra source: D:\\XMU\\25Spring\\baruch-premfe-nla", "Matrix computation source: dcam", "100 selected exercises", "OLS projection derivation"],
      },
    ],
  },
  {
    id: "econ",
    label: "Econometrics + Time Series",
    sub: "BUSN41902 + undergrad TSA",
    bars: [
      {
        title: "Econometrics / time series",
        range: "Jun 22-Aug 14",
        start: "2026-06-22",
        end: "2026-08-14",
        color: colors.violet,
        type: "study",
        weight: "thin",
        detail:
          "Econometrics from BUSN41902 under good-student-note. Time series from undergrad materials. Target: OLS assumptions, bias, standard errors, ARMA/ARIMA, forecasts, diagnostics.",
        items: ["BUSN41902 econometrics", "Undergrad time-series notes", "OLS and standard errors", "ARMA/ARIMA and diagnostics"],
      },
    ],
  },
  {
    id: "gate",
    label: "ICAIF Gate",
    sub: "conditional",
    bars: [
      {
        title: "Submit decision",
        range: "Jul 29-Aug 2",
        start: "2026-07-29",
        end: "2026-08-02",
        color: colors.red,
        type: "heavy",
        weight: "thin",
        detail:
          "Only interrupts the three-lane plan if the June paper has a clear claim, clean evidence, and realistic 8-page ACM submission path.",
        items: ["Check claim", "Check evidence", "Check 8-page ACM fit", "Submit only if viable"],
      },
    ],
  },
];

const keyItems = [
  ["Paper / heavy", colors.red, "2 lanes"],
  ["Spring-26 relearn", colors.blue, "3 lanes"],
  ["Probability / options", colors.teal, "long"],
  ["Linear algebra", colors.green, "long"],
  ["Econometrics / TSA", colors.violet, "long"],
  ["LeetCode", colors.black, "daily"],
];

const timeline = document.querySelector("#timeline");
const laneKey = document.querySelector("#laneKey");
const currentDateLabel = document.querySelector("#currentDateLabel");
const dateSummary = document.querySelector("#dateSummary");
const agendaMode = document.querySelector("#agendaMode");
const agendaTitle = document.querySelector("#agendaTitle");
const agendaList = document.querySelector("#agendaList");
const segments = document.querySelectorAll(".segment");
let activeFilter = "all";
let selectedIndex = clampDateIndex(chicagoTodayIndex());
let isSelectingDate = false;
let cursorVisible = false;

renderLaneKey();
renderAgenda();
renderTimeline(activeFilter);
bindFilters();
window.addEventListener("resize", () => renderTimeline(activeFilter));

function renderLaneKey() {
  laneKey.innerHTML = keyItems
    .map(
      ([label, color, tag]) => `
        <div class="lane-key__item" style="--lane-color:${color}">
          <span class="lane-key__swatch" aria-hidden="true"></span>
          <strong>${label}</strong>
          <span>${tag}</span>
        </div>
      `,
    )
    .join("");
}

function renderAgenda() {
  const date = addDays(start, selectedIndex);
  const label = formatShortDate(date);
  const agenda = agendaForDate(date);

  agendaMode.textContent = "Selected date";
  currentDateLabel.textContent = label;
  agendaTitle.textContent = label;
  dateSummary.textContent = agenda.summary;
  agendaList.innerHTML = agenda.items.map((item) => `<li>${item}</li>`).join("");
}

function renderLaneAgenda(bar) {
  agendaMode.textContent = "Selected lane";
  agendaTitle.textContent = bar.title;
  dateSummary.textContent = bar.detail;
  agendaList.innerHTML = (bar.items || [bar.detail]).map((item) => `<li>${item}</li>`).join("");
}

function renderTimeline(filter) {
  timeline.innerHTML = "";
  timeline.appendChild(renderAxis());

  const cursor = document.createElement("div");
  cursor.className = "date-cursor";
  if (!cursorVisible) cursor.classList.add("is-hidden");
  if (selectedIndex <= 1) cursor.classList.add("is-edge-start");
  if (selectedIndex >= totalDays - 2) cursor.classList.add("is-edge-end");
  cursor.style.left = `${cursorPixel(formatDate(addDays(start, selectedIndex)))}px`;
  cursor.innerHTML = `<span>${formatShortDate(addDays(start, selectedIndex))}</span>`;
  timeline.appendChild(cursor);

  lanes.forEach((lane) => {
    const row = document.createElement("div");
    row.className = "lane-row";

    const label = document.createElement("div");
    label.className = "lane-label";
    label.innerHTML = `${lane.label}<small>${lane.sub}</small>`;

    const track = document.createElement("div");
    track.className = "lane-track";

    lane.bars.forEach((bar) => {
      const el = document.createElement("button");
      el.type = "button";
      el.className = `bar bar--${bar.weight}`;
      if (filter !== "all" && bar.type !== filter) el.classList.add("is-muted");
      el.style.left = `${dateToPercent(bar.start)}%`;
      el.style.width = `${barWidth(bar.start, bar.end)}%`;
      el.style.setProperty("--bar-color", bar.color);
      el.innerHTML = `<strong>${bar.title}</strong><span>${bar.range}</span>`;
      el.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      });
      el.addEventListener("click", () => {
        selectedIndex = clampDateIndex(daysBetween(start, new Date(`${bar.start}T00:00:00`)));
        cursorVisible = false;
        renderLaneAgenda(bar);
        renderTimeline(activeFilter);
      });
      track.appendChild(el);
    });

    row.append(label, track);
    timeline.appendChild(row);
  });
}

function renderAxis() {
  const axis = document.createElement("div");
  axis.className = "timeline-axis";

  [
    ["2026-06-03", "Jun 3"],
    ["2026-06-21", "Jun 21"],
    ["2026-07-29", "ICAIF"],
  ].forEach(([date, label]) => {
    const tick = document.createElement("div");
    tick.className = "axis-tick";
    tick.style.left = `${dateToPercent(date)}%`;
    tick.innerHTML = `<span>${label}</span>`;
    axis.appendChild(tick);
  });

  return axis;
}

function bindFilters() {
  timeline.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".bar")) return;
    event.stopPropagation();
    isSelectingDate = true;
    cursorVisible = true;
    timeline.setPointerCapture(event.pointerId);
    selectDateFromTimeline(event);
  });

  timeline.addEventListener("pointermove", (event) => {
    if (!isSelectingDate) return;
    selectDateFromTimeline(event);
  });

  timeline.addEventListener("pointerup", (event) => {
    isSelectingDate = false;
    if (timeline.hasPointerCapture(event.pointerId)) {
      timeline.releasePointerCapture(event.pointerId);
    }
  });

  timeline.addEventListener("pointercancel", (event) => {
    isSelectingDate = false;
    if (timeline.hasPointerCapture(event.pointerId)) {
      timeline.releasePointerCapture(event.pointerId);
    }
  });

  segments.forEach((button) => {
    button.addEventListener("click", () => {
      segments.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      activeFilter = button.dataset.filter;
      renderTimeline(activeFilter);
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".timeline-panel")) return;
    cursorVisible = false;
    isSelectingDate = false;
    renderTimeline(activeFilter);
  });
}

function selectDateFromTimeline(event) {
  const labelWidth = 146;
  const rect = timeline.getBoundingClientRect();
  const x = event.clientX - rect.left - labelWidth;
  const trackWidth = Math.max(rect.width - labelWidth, 1);
  const ratio = Math.min(Math.max(x / trackWidth, 0), 1);
  selectedIndex = Math.round(ratio * (totalDays - 1));
  renderAgenda();
  renderTimeline(activeFilter);
}

function dateToPercent(dateString) {
  const day = daysBetween(start, new Date(`${dateString}T00:00:00`));
  return (day / (totalDays - 1)) * 100;
}

function trackPixel(dateString) {
  const labelWidth = 146;
  const trackWidth = Math.max(timeline.clientWidth - labelWidth, 1);
  return labelWidth + trackWidth * (dateToPercent(dateString) / 100);
}

function cursorPixel(dateString) {
  return Math.min(trackPixel(dateString), Math.max(timeline.clientWidth - 2, 0));
}

function barWidth(startDate, endDate) {
  const days = daysBetween(new Date(`${startDate}T00:00:00`), new Date(`${endDate}T00:00:00`)) + 1;
  const proposed = Math.max((days / totalDays) * 100, 2.8);
  return Math.min(proposed, 100 - dateToPercent(startDate));
}

function agendaForDate(date) {
  const key = formatDate(date);
  const exact = {
    "2026-06-03": ["FINM32000 L2 + HW2", "STAT31511 Chapter 6 + HW5", "STAT31450: Laplace's Equation", "STAT31450: Rectangle Problems for Laplace's Equation", "STAT31450: Laplace's Equation Inside a Circular Disk", "LeetCode short practice"],
    "2026-06-04": ["FINM32000 L3 + HW3", "STAT31511 Chapter 7 + HW6", "STAT31450: Homework 4 Laplace practice", "STAT31450: Solvability Condition", "STAT31450: Neumann Solvability and Flux Balance", "LeetCode short practice"],
    "2026-06-05": ["FINM32000 L4 + HW4", "STAT31511 Chapter 8 + HW7", "STAT31450: Wave Equation", "STAT31450: Wave Equation Derivation", "STAT31450: Backward heat equation and ill-posedness", "LeetCode short practice"],
    "2026-06-06": ["FINM32000 L5 + HW5", "STAT31511 Chapter 9 + HW8", "STAT31450: Homework 4 wave/backward-heat practice", "STAT31450: Sturm--Liouville Eigenvalue Problems", "STAT31450: Sturm--Liouville Conversions", "LeetCode short practice"],
    "2026-06-07": ["FINM32000 L6 + HW6", "STAT31511 Chapter 10 + HW9", "STAT31450: Homework 5 Sturm--Liouville practice", "STAT31450: Sturm--Liouville Proof Details", "STAT31450: Self-Adjoint Operators & Sturm--Liouville Problems", "LeetCode short practice"],
    "2026-06-08": ["FINM32000 L7-L8 + HW7", "STAT31511 method-map consolidation", "STAT31450: Adjoints and the Fredholm alternative", "STAT31450: Homework 5 adjoint/Fredholm practice", "STAT31450: Green's Function", "STAT31450: Green identities and symmetry", "LeetCode short practice"],
    "2026-06-09": ["FINM method map", "STAT method review", "STAT31450: Green's Function Boundary Reduction", "STAT31450: Homework 6 Green-identity practice", "STAT31450: Green's Functions and Source Terms", "STAT31450: Nonhomogeneous Heat Equations and Duhamel's Principle", "LeetCode short practice"],
    "2026-06-10": ["FINM changed-input variants", "STAT coding repairs", "STAT31450: Wave Green function by eigenfunction expansion", "STAT31450: Direct construction and resonance", "STAT31450: Homework 6 source/resonance practice", "STAT31450: Fourier Transforms", "LeetCode short practice"],
    "2026-06-11": ["Cross-course option-pricing synthesis", "Monte Carlo evidence standards", "STAT31450: Fourier Transform Applications", "STAT31450: Heat equation on the real line", "STAT31450: Fourier transform properties used in the examples", "LeetCode short practice"],
    "2026-06-12": ["Final FINM recall sheet", "Final STAT recall sheet", "STAT31450: Wave equation on the real line", "STAT31450: Heat equation on a half-line", "STAT31450: Homework 7 transform practice A", "LeetCode short practice"],
    "2026-06-13": ["FINM light recall maintenance", "STAT light recall maintenance", "STAT31450: Laplace's equation on a semi-infinite strip", "STAT31450: Laplace's equation on an infinite strip", "STAT31450: Homework 7 strip practice", "LeetCode short practice"],
    "2026-06-14": ["Paper topic search", "Three-course method-map cleanup", "STAT31450: Laplace's equation on a half-plane", "STAT31450: Convection--diffusion and bounded multidimensional domains", "STAT31450: Homework 7 half-plane/convection practice", "LeetCode short practice"],
    "2026-06-15": ["Paper research day 1", "Literature note cleanup", "STAT31450: Introduction & Review", "STAT31450: Heat Equation", "LeetCode short practice"],
    "2026-06-16": ["Paper research day 2", "FINM numerical-method recall", "STAT31450: Homework 1 heat-equation practice", "STAT31450: Separation of Variables", "LeetCode short practice"],
    "2026-06-17": ["Paper research day 3", "STAT Monte Carlo diagnostic recall", "STAT31450: Fourier Series", "LeetCode short practice"],
    "2026-06-18": ["Paper research day 4", "PDE method recall", "STAT31450: Homework 2 Fourier-series practice", "STAT31450: Term-by-Term Differentiation", "LeetCode short practice"],
    "2026-06-19": ["Paper research day 5", "Claims/limitations notes", "STAT31450: Back to Solving PDEs Using Separation of Variables", "STAT31450: Homework 3 eigenfunction-expansion practice", "STAT31450: Final PDE recall sheet", "LeetCode short practice"],
    "2026-06-20": ["Draft paper", "Reference and format pass", "LeetCode short practice"],
    "2026-06-21": ["Finalize paper", "Submission-readiness checklist", "LeetCode short practice"],
  };

  if (exact[key]) {
    return { summary: summaryForDate(date), items: exact[key] };
  }

  if (within(key, "2026-06-22", "2026-07-28")) {
    return {
      summary: "Three balanced study lanes.",
      items: [
        "Linear Algebra + Matrix Computation",
        "Probability + Stochastic Calculus + FINM33000",
        "Econometrics + Time Series",
        "LeetCode short practice",
      ],
    };
  }

  if (within(key, "2026-07-29", "2026-08-02")) {
    return {
      summary: "Three lanes continue unless ICAIF submission is viable.",
      items: [
        "Default: three balanced study lanes",
        "Conditional: ICAIF submission prep if paper is viable",
        "LeetCode short practice",
      ],
    };
  }

  if (within(key, "2026-08-03", "2026-08-14")) {
    return {
      summary: "Three balanced study lanes continue.",
      items: [
        "Linear Algebra + Matrix Computation",
        "Probability + Stochastic Calculus + FINM33000",
        "Econometrics + Time Series",
        "LeetCode short practice",
      ],
    };
  }

  return {
    summary: "Interview synthesis and maintenance.",
    items: ["Interview problem practice", "Project/paper polish", "Weak-area maintenance", "LeetCode short practice"],
  };
}

function summaryForDate(date) {
  const key = formatDate(date);
  if (key === "2026-06-14") return "Protected paper topic-search lane.";
  if (within(key, "2026-06-15", "2026-06-19")) return "Paper research with STAT31450 support.";
  if (key === "2026-06-20") return "Paper draft day.";
  if (key === "2026-06-21") return "Paper target day.";
  if (within(key, "2026-06-03", "2026-06-13")) return "Spring-26 parallel relearn.";
  return "Selected daily plan.";
}

function within(dateString, left, right) {
  return dateString >= left && dateString <= right;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function formatShortDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "America/Chicago",
  });
}

function chicagoTodayIndex() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const today = new Date(`${values.year}-${values.month}-${values.day}T00:00:00`);
  return daysBetween(start, today);
}

function clampDateIndex(index) {
  return Math.min(Math.max(index, 0), totalDays - 1);
}

function daysBetween(a, b) {
  return Math.round((b - a) / 86_400_000);
}
