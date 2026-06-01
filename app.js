const start = new Date("2026-06-01T00:00:00");
const end = new Date("2026-08-12T00:00:00");
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
        range: "Jun 1 onward",
        start: "2026-06-01",
        end: "2026-08-12",
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
    sub: "FINM + STAT to new paper",
    bars: [
      {
        title: "Parallel relearn",
        range: "Jun 1-6",
        start: "2026-06-01",
        end: "2026-06-06",
        color: colors.blue,
        type: "heavy",
        weight: "heavy",
        detail:
          "One FINM32000 homework and one STAT31511 homework per day. Finish FINM HW2-HW7 and STAT HW5-HW9.",
        items: [
          "Jun 1: FINM L2 + HW2; STAT Ch6 + HW5",
          "Jun 2: FINM L3 + HW3; STAT Ch7 + HW6",
          "Jun 3: FINM L4 + HW4; STAT Ch8 + HW7",
          "Jun 4: FINM L5 + HW5; STAT Ch9 + HW8",
          "Jun 5: FINM L6 + HW6; STAT Ch10 + HW9",
          "Jun 6: FINM L7-L8 + HW7; STAT consolidation",
        ],
      },
      {
        title: "New paper",
        range: "Jun 7-16",
        start: "2026-06-07",
        end: "2026-06-16",
        color: colors.red,
        type: "heavy",
        weight: "heavy",
        detail:
          "Blank topic and blank manuscript. Jun 7 topic search, Jun 8-14 research, Jun 15 draft, Jun 16 finalize.",
        items: [
          "Jun 7: pick research problem and kill criteria",
          "Jun 8-14: one-week research block",
          "Jun 15: full ACM-style draft",
          "Jun 16: final edit and scope lock",
        ],
      },
    ],
  },
  {
    id: "pde",
    label: "STAT31450 PDE",
    sub: "fast intense sprint",
    bars: [
      {
        title: "PDE sprint",
        range: "Jun 17-26",
        start: "2026-06-17",
        end: "2026-06-26",
        color: colors.gold,
        type: "heavy",
        weight: "heavy",
        detail:
          "Intense applied PDE practice right after paper. Redo HW5-HW7, repair beyond homogeneous heat equation, build method decision tree.",
        items: ["HW5 redo", "HW6 redo", "HW7 redo", "PDE method decision tree"],
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
        range: "Jun 17-Aug 12",
        start: "2026-06-17",
        end: "2026-08-12",
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
        range: "Jun 27-Aug 12",
        start: "2026-06-27",
        end: "2026-08-12",
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
        range: "Jun 27-Aug 12",
        start: "2026-06-27",
        end: "2026-08-12",
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
  ["Relearn / methods", colors.blue, "2 lanes"],
  ["PDE sprint", colors.gold, "2 lanes"],
  ["Probability / options", colors.teal, "long"],
  ["Linear algebra", colors.green, "long"],
  ["Econometrics / TSA", colors.violet, "long"],
  ["LeetCode", colors.black, "daily"],
];

const timeline = document.querySelector("#timeline");
const laneKey = document.querySelector("#laneKey");
const currentDateLabel = document.querySelector("#currentDateLabel");
const dateSummary = document.querySelector("#dateSummary");
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

  currentDateLabel.textContent = label;
  agendaTitle.textContent = label;
  dateSummary.textContent = agenda.summary;
  agendaList.innerHTML = agenda.items.map((item) => `<li>${item}</li>`).join("");
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
      el.addEventListener("click", () => {
        selectedIndex = clampDateIndex(daysBetween(start, new Date(`${bar.start}T00:00:00`)));
        renderAgenda();
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
    ["2026-06-01", "Jun 1"],
    ["2026-06-16", "Paper target"],
    ["2026-06-27", "3 lanes"],
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
    "2026-06-01": ["FINM32000 L2 + HW2", "STAT31511 Chapter 6 + HW5", "LeetCode short practice"],
    "2026-06-02": ["FINM32000 L3 + HW3", "STAT31511 Chapter 7 + HW6", "LeetCode short practice"],
    "2026-06-03": ["FINM32000 L4 + HW4", "STAT31511 Chapter 8 + HW7", "LeetCode short practice"],
    "2026-06-04": ["FINM32000 L5 + HW5", "STAT31511 Chapter 9 + HW8", "LeetCode short practice"],
    "2026-06-05": ["FINM32000 L6 + HW6", "STAT31511 Chapter 10 + HW9", "LeetCode short practice"],
    "2026-06-06": ["FINM32000 L7-L8 + HW7", "STAT31511 method-map consolidation", "LeetCode short practice"],
    "2026-06-07": ["Paper topic search", "FINM/STAT method-map cleanup", "LeetCode short practice"],
    "2026-06-15": ["Draft paper", "Reference and format pass", "LeetCode short practice"],
    "2026-06-16": ["Finalize paper", "Submission-readiness checklist", "LeetCode short practice"],
  };

  if (exact[key]) {
    return { summary: summaryForDate(date), items: exact[key] };
  }

  if (within(key, "2026-06-08", "2026-06-14")) {
    const day = daysBetween(new Date("2026-06-08T00:00:00"), date) + 1;
    return {
      summary: `Paper research day ${day}.`,
      items: [`Paper research day ${day}`, "One light support lane", "LeetCode short practice"],
    };
  }

  if (within(key, "2026-06-17", "2026-06-26")) {
    return {
      summary: "PDE sprint with one light probability/stoch/options lane.",
      items: [
        "STAT31450 PDE sprint: HW5-HW7 and method tree",
        "Probability + stochastic calculus + FINM33000 light lane",
        "LeetCode short practice",
      ],
    };
  }

  if (within(key, "2026-06-27", "2026-07-28")) {
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

  if (within(key, "2026-08-03", "2026-08-12")) {
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
  if (within(key, "2026-06-01", "2026-06-06")) return "Paper-critical parallel relearn.";
  if (key === "2026-06-07") return "Protected paper topic-search lane.";
  if (key === "2026-06-15") return "Paper draft day.";
  if (key === "2026-06-16") return "Paper target day.";
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
