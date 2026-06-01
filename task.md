# Summer 2026 Timeline Site

## Goal

Build a static website that displays summer work as a timeline-flow:

- First pass: plan the timeline.
- Second pass: design the UI around that plan.
- Preview locally in browser before deploy.

Public repo: `summer-26`.

Private reference repo: `git@github.com:dafu-zhu/spring-26.git`.

Do not publish private course notes, homework, or copyrighted material. The public site may reference private material by course/code/name only.

## Private Resource Inventory

Base path: `D:\GitHub\spring-26`.

### Planning State

- `post-final-study/plan.md`: existing 21-day post-final study plan.
- `post-final-study/status.md`: current confidence scores and backlog.
- `post-final-study/progress.md`: daily progress log/checkpoints.
- `post-final-study/fluency-rubric.md`: criteria for done/fluent.

### FINM32000: Options: Numerical Methods

Use for active paper blocker.

- Course workflow: `finm32000/README.md`
- Lecture PDFs: `finm32000/context/finm320-26-L2.pdf` through `finm32000/context/finm320-26-L8.pdf`
- Homework prompts: `finm32000/context/homework/hw2` through `finm32000/context/homework/hw7`
- Official solutions: `finm32000/context/solutions/hw2` through `finm32000/context/solutions/hw7`
- Working notebooks: `finm32000/notebooks/finm320-26-hw2.ipynb` through `finm32000/notebooks/finm320-26-hw7*.ipynb`
- Consolidated generated notes: `good-student-note/notes/finm32000/finm32000.pdf`
- Generated note sources: `good-student-note/notes/finm32000/src/lec02.tex` through `lec08.tex`
- Practice/final material: `finm32000/context/practice_exams/final/`
- Exam roadmap: `finm32000/context/finm32000_exam_roadmap.pdf`

### FINM33000: Options

Use as fundamentals support, not the June 1-10 blocker unless needed.

- Consolidated generated notes: `good-student-note/notes/finm33000/finm33000.pdf`
- Generated note sources: `good-student-note/notes/finm33000/src/lec01.tex` through `lec07.tex`

### STAT31511: Monte Carlo Simulation

Use for active paper blocker.

- Main lecture notes: `stat31511/context/LectureNotes.pdf`
- Chapter tutorials already present:
  - `stat31511/context/notes/Chap6_Tutorial-2.pdf`
  - `stat31511/context/notes/chap7/`
  - `stat31511/context/notes/chap8/`
  - `stat31511/context/notes/chap9/`
  - `stat31511/context/notes/chap10/`
- Homework guides: `stat31511/context/hw_guide/chapter6_exercise_guide.tex` through `chapter9_exercise_guide.tex`
- Official solutions found: `stat31511/context/solutions/hw5` through `hw9`
- Working notebooks found: `stat31511/notebooks/hw1.ipynb` through `hw5.ipynb`
- Build scripts found: `stat31511/build/scripts/hw1.py` through `hw4.py`
- Compiled homework appendix: `stat31511/compiled/stat31511_hw_appendix.pdf`
- Course essay template exists at `stat31511/context/Template 10-page essay/`, but is ignored for the new paper.

Open issue:

- Confirm whether STAT31511 HW9 is the chapter 10 homework/solution path.
- No working notebooks found for chapters 6-10; may need to create during relearn.

### STAT31450: Applied PDE

Use after the paper unless needed for option-pricing PDE support.

- Syllabus: `stat31450/context/STAT 31450 Syllabus.md`
- Professor lecture notes: `stat31450/context/lecture_notes/Week1.pdf`, `Week2.1.pdf`, `Weeks3,4.pdf`, `Weeks5,6.pdf`, `Weeks7,8,9.pdf`
- Homework prompts: `stat31450/context/homework/STAT_31450_HW1.pdf` through `STAT_31450_HW7.pdf`
- Tutorial notes: `stat31450/context/notes/hw1` through `hw7`
- Official solutions: `stat31450/context/solutions/hw1` through `hw7`
- Rubrics: `stat31450/context/solutions/rubrics/`
- Compiled previous work: `stat31450/compiled/`
- Textbook LaTeX: `stat31450/context/textbook_latex/ch01` through `ch14`

### Ignored Existing Options + Monte Carlo Paper Work

Found but not used for planning:

- Project root: `stat31511/project/american_etf_pmcmc/`
- Paper draft: `stat31511/project/american_etf_pmcmc/paper/main.tex`
- Current compiled paper: `stat31511/project/american_etf_pmcmc/paper/particle_mcmc_pricing_american_etf_options_with_dividends.pdf`
- Outline/drafting plan: `stat31511/project/american_etf_pmcmc/paper/imrad_outline_and_drafting_plan.md`
- References: `stat31511/project/american_etf_pmcmc/paper/references.bib`
- Code: `benchmarks.py`, `diagnostics.py`, `experiments.py`, `filters.py`, `pmcmc.py`, `pricing.py`, `synthetic.py`
- Results: `stat31511/project/american_etf_pmcmc/results/`

Decision:

- Ignore this project for the new paper.
- Ignore the STAT31511 course essay/template as a paper target.
- Write a new paper from scratch after relearning FINM32000 and STAT31511.
- Keep only the private paths as optional background reference inventory.

Ignored related proposal/archive material:

- `stat31511/project/Proposal.md`
- `stat31511/project/Options Pricing and Particle Markov Chain Monte Carlo.md`
- `stat31511/project/archive/`

### Academic Recovery Blocks From Local PDF

Source PDF read: `C:\Users\dafuz\Downloads\tier1_academic_recovery_schedule.pdf`.

Decision:

- Ignore the PDF's 84-day recovery schedule and original day allocations.
- Keep only these blocks:
  - Linear Algebra + Matrix Computation
  - Econometrics + Time Series
- Do not import the other recovery blocks into this project.

Linear Algebra + Matrix Computation:

- Keywords: vector space, basis, rank, linear map, eigenvalue, eigenvector, diagonalization, orthogonality, projection, least squares, positive definiteness, SVD, PCA, conditioning.
- Output: topic cards, selected exercises, OLS derivation sheet.
- Exercise anchor from PDF: 100 selected exercises; 40 routine/computational, 20 conceptual, 20 proof/derivation, 10 mixed, 10 delayed redo.
- Linear Algebra source: `D:\XMU\25Spring\baruch-premfe-nla`
- Matrix Computation source: `dcam`

Econometrics + Time Series:

- Keywords: OLS assumptions, bias, omitted variable, standard error, heteroskedasticity, autocorrelation, stationarity, ACF, AR, MA, ARMA, ARIMA, forecast, residual diagnostics.
- Output: exercise set and concept map.
- Exercise anchor from PDF: 80 selected exercises; 32 routine/computational, 16 conceptual, 16 proof/derivation, 8 mixed, 8 delayed redo.
- Econometrics source: `D:\GitHub\spring-26\good-student-note\notes\busn41902\`
- Econometrics compiled notes: `D:\GitHub\spring-26\good-student-note\notes\busn41902\busn41902.pdf`
- Econometrics source notes: `D:\GitHub\spring-26\good-student-note\notes\busn41902\src\lec01.tex` through `lec08.tex`
- Time-series source: `C:\Users\dafuz\Downloads\时间序列分析-20260526T063157Z-3-001\时间序列分析\`
- Time-series materials include lecture notes `N1...N10`, homework files `HW1...HW5`, exams/solutions, Tsay-related notes, GARCH notes, seasonal notes, and outline/questions files.

## Current Date And Paper Target

Today: 2026-06-01.

Original desired paper date: 2026-06-10.

Revised constraint:

- A solid new paper requires finishing relearn of FINM32000 and STAT31511 first.
- A protected topic-selection lane is mandatory after relearn and before research.
- A real one-week research block is mandatory after topic selection.
- FINM32000 and STAT31511 relearning can run in parallel because one homework from each course can be completed per day.
- Therefore 2026-06-10 is still too early, but the earliest solid target moves from 2026-06-21 to 2026-06-16.

Earliest solid paper target:

- Target complete draft: 2026-06-16.
- Stretch target if research and drafting overlap unusually well: 2026-06-15.
- Paper can continue after that if research quality requires it, but the timeline site should show the earliest defensible path.

The paper is blocked by:

- FINM32000, Options: Numerical Methods
- STAT31511, Monte Carlo Simulation
- One protected main lane for finding an interesting research problem

Probability review track is postponed until after the paper is complete.

## Paper Format Constraints

Source: ICAIF 2026 Call for Papers, `https://icaif2026.org/call-for-papers.html`, checked 2026-06-01.

Submission target:

- Conference: ACM International Conference on AI in Finance 2026, Milan, 2026-11-14 to 2026-11-17.
- Submission deadline: 2026-08-02 AOE.
- Submission system: CMT.

Format:

- PDF submission.
- Latest ACM article template.
- LaTeX preferred.
- Use ACM `sigconf` two-column format.
- Use anonymous submission parameter for double-blind review.
- Maximum length: 8 total pages, including figures and references.
- No supplementary materials or appendices.
- Paper must be self-contained.
- Over-length papers are rejected without review.

Review/policy implications:

- Double blind: do not reveal authors.
- Cite own work in third person only if needed.
- Author list cannot change after initial CMT submission.
- Full paper cannot be under review at another archival venue during ICAIF review.
- Accepted papers appear in ACM proceedings and are expected to be presented in person.

Working implication for the new paper:

- Use ICAIF format as the long-run target for the new paper.
- Start the new paper from a blank topic and blank manuscript.
- Do not use the existing STAT31511 essay as the paper base.
- Keep scope narrow enough for an 8-page all-in ICAIF paper.

## Tracks

### Track 1: Quant Interview Probability

Status: postponed until after paper.

Inputs:

- `ReviewProbNotes`: undergrad probability lecture notes
- `Notes340`: random processes
- `finbook`: stochastic calculus, chapters 2-6

Purpose:

- Probability side of quant job interview preparation.

Ordering:

- Does not need to exactly follow source image.
- Can be sequenced after paper deadline.

### Track 2: Options, Numerical Methods, Monte Carlo, PDE

Status: active critical path.

Nodes:

- FINM33000, Options: fundamentals
- FINM32000, Options: Numerical Methods
- STAT31511, Monte Carlo Simulation
- STAT31450, Applied PDE
- Paper 1: Options + Monte Carlo paper
- Paul Wilmott reading

Known details:

- FINM32000 was wrapped up last week.
- FINM32000 relearn starts at HW2.
- FINM32000 homework gap: HW2-HW7.
- FINM32000 lecture gap: lectures 2-8.
- Lecture 8 has no corresponding homework.
- STAT31511 range: chapters 2-10.
- STAT31511 current strength: chapters 2-5.
- STAT31511 work needed: chapters 6-10 plus homework.
- STAT31511 homework is coding heavy.
- STAT31450 was recently wrapped up but needs relearn.
- STAT31450 strong area: homogeneous heat equation.
- STAT31450 shaky areas: everything else.
- STAT31450 professor follows handwritten notes and jumps across reference textbook chapters.

## First Pass Planning

First pass has two phases:

- Phase 1A: plan the paper-critical timeline in detail.
- Phase 1B: plan the rest of summer after the paper is complete.

UI design starts only after Phase 1A and Phase 1B are coherent.

## Scheduling Model

Default rule:

- Do not allocate a whole day to only one task unless there is an unavoidable deadline.
- Most days should carry 2 or 3 parallel lanes.
- If one lane is intense/heavy, run 2 lanes total: one heavy lane plus one lighter support or maintenance lane.
- If lanes are similarly difficult, run 3 lanes total with smaller daily increments.
- Prefer learning a little every day over sprinting one subject and dropping it.
- LeetCode is a must-do daily maintenance task. Keep it short if needed, but do it every day.

Exceptions:

- Paper research is heavy, so it uses 2-lane days: paper as the main lane plus one light maintenance/support lane.
- STAT31450 Applied PDE should be a fast intense sprint, but only with one other simultaneous lane.
- Homework completion nodes remain hard outputs, but they can share the day with another course.

UI implication:

- The site should show daily lanes, not only date ranges.
- The site should show LeetCode as an always-on daily thread.
- Long subjects should appear as thin continuous bands across many days.
- Heavy subjects should appear as thicker bands with fewer simultaneous companions.

## Phase 1A: Paper-Critical Timeline

Assumption:

- Full-time work every day.
- Each homework is a real completion node, not a vague review block.
- Complete one FINM32000 homework and one STAT31511 homework per day while both queues are active.
- FINM32000 and STAT31511 must be relearned before choosing the paper topic.
- One protected main lane is reserved for finding a research problem.
- One week is reserved for research after topic selection, with paper as the heavy lane.
- Paper period still keeps one light support/maintenance lane each day.

Done means:

- Attempt before reading solution.
- Repair against notes/solutions.
- Produce runnable code/notebook where relevant.
- Write a short recall sheet or method map.
- Update confidence evidence in private study state.

### Parallel Relearn

Assumed mapping from local resources:

- Chapter 6 -> HW5
- Chapter 7 -> HW6
- Chapter 8 -> HW7
- Chapter 9 -> HW8
- Chapter 10 -> HW9

| Date | FINM32000 Output | STAT31511 Output |
| --- | --- | --- |
| 2026-06-01 | L2 + HW2; HW2 notebook runs; variance/numerical method notes | Chapter 6 + HW5; finish chapter 6 gap; repair final weak question |
| 2026-06-02 | L3 + HW3; HW3 notebook runs; changed-input variant | Chapter 7 + HW6; annealing/tempering implementation |
| 2026-06-03 | L4 + HW4; HW4 notebook runs; convergence/diagnostic notes | Chapter 8 + HW7; HMC implementation and tuning log |
| 2026-06-04 | L5 + HW5; notebook runs; coding-heavy pieces repaired | Chapter 9 + HW8; particle filter implementation and ESS/resampling diagnostics |
| 2026-06-05 | L6 + HW6; both HW6 notebooks run end to end | Chapter 10 + HW9; EM or VI implementation and objective notes |
| 2026-06-06 | L7-L8 + HW7; both HW7 notebooks run; L8 reviewed | STAT31511 consolidation; chapters 6-10 method map; repair any failed node |

Daily maintenance during relearn:

- LeetCode short daily practice.

Parallel relearn checkpoint on 2026-06-06:

- FINM32000 HW2-HW7 all attempted and runnable.
- STAT31511 HW5-HW9 all attempted, repaired, and linked in private state.
- FINM32000 variance and convergence gaps no longer confidence 0.
- STAT31511 chapters 6-10 all have code/apply evidence.
- One-page FINM map: pricing method, estimator, convergence claim, variance control, failure modes.
- One-page STAT map: Monte Carlo method, target distribution/model, estimator, diagnostics, failure modes.

### Topic And Paper

Paper is the heavy lane from 2026-06-07 through 2026-06-16. Each day keeps one light lane for maintenance or support, not a third major task.

| Date | Heavy Lane | Light Lane | Required Output |
| --- | --- | --- | --- |
| 2026-06-07 | Research problem search | FINM/STAT method-map cleanup | Pick one interesting Options + Monte Carlo problem; write research question, novelty angle, minimal experiment, and kill criteria |
| 2026-06-08 | Research day 1 | Literature note cleanup | Literature skim and baseline method; decide exact model/data/simulation setup |
| 2026-06-09 | Research day 2 | FINM numerical-method recall | Build minimal experiment or replication scaffold |
| 2026-06-10 | Research day 3 | STAT Monte Carlo diagnostic recall | Run first meaningful experiment; log failures |
| 2026-06-11 | Research day 4 | Citation and figure hygiene | Improve experiment; generate first usable table/figure |
| 2026-06-12 | Research day 5 | One delayed redo from relearn queue | Robustness or comparison result |
| 2026-06-13 | Research day 6 | Claims/limitations notes | Finish evidence package; freeze scope |
| 2026-06-14 | Research day 7 | Figure/table cleanup | Write result narrative and final figures/tables |
| 2026-06-15 | Draft paper | Reference and format pass | Full 8-page-or-less ACM-style draft with placeholders resolved |
| 2026-06-16 | Finalize paper | Submission-readiness checklist | Tighten claims, references, formatting, figures, and self-contained story |

Daily maintenance during paper period:

- LeetCode short daily practice.

Paper checkpoint on 2026-06-16:

- New topic, not old `spring-26` paper.
- New manuscript, not STAT31511 essay.
- ICAIF-style structure and 8-page discipline.
- Clear claim, minimal experiment, evidence, limitations, and next-step submission path.

## Phase 1B: Rest Of Summer Timeline

This is the second phase of first-pass planning. It starts after the paper timeline is accepted.

Phase 1B should stretch subjects over many days. The table below defines lanes, not exclusive full-day blocks.

### Phase 1B Subject Lanes

| Lane | Span | Daily Style | Output |
| --- | --- | --- | --- |
| LeetCode | 2026-06-01 onward | Short daily practice, no long-hour requirement | Daily continuity for coding interviews |
| STAT31450 Applied PDE | 2026-06-17 to 2026-06-26 | Intense sprint with only one other light lane | HW5-HW7 redo, method decision tree, beyond homogeneous heat equation |
| Probability + Stochastic Calculus + FINM33000 | 2026-06-17 to 2026-08-23 | Daily low-dose probability/stochastic/options work | Quant probability map, `finbook` chapters 2-6 cards, FINM33000 fundamentals repair |
| Linear Algebra + Matrix Computation | 2026-06-27 to 2026-08-23 | Small daily topic card + exercises | 100 selected exercises, OLS projection derivation, SVD/PCA/conditioning cards |
| Econometrics + Time Series | 2026-06-27 to 2026-08-23 | BUSN41902 plus undergrad time-series notes, one concept/model per day | OLS/econometrics concept map; stationarity/ACF/ARMA/ARIMA/forecast diagnostics |
| ICAIF Submission Decision | 2026-07-29 to 2026-08-02 | Conditional paper lane, only if draft is viable | Decide whether June paper should become an ICAIF 2026 submission; if yes, temporarily prioritize formatting/submission work before Aug 2 |
| Interview Synthesis | 2026-08-24 onward | Three balanced maintenance lanes plus daily LeetCode | Mixed probability/options/MC/PDE practice, project polish, maintenance review |

### Phase 1B Daily Lane Groups

| Dates | Lane Count | Daily Lanes |
| --- | ---: | --- |
| 2026-06-01 to 2026-06-16 | 2 plus LeetCode | Paper-critical lane plan above; daily LeetCode |
| 2026-06-17 to 2026-06-26 | 2 plus LeetCode | STAT31450 Applied PDE intense sprint; Probability + Stochastic Calculus + FINM33000 light lane; daily LeetCode |
| 2026-06-27 to 2026-07-28 | 3 plus LeetCode | Linear Algebra + Matrix Computation; Probability + Stochastic Calculus + FINM33000; Econometrics + Time Series; daily LeetCode |
| 2026-07-29 to 2026-08-02 | 3 plus LeetCode, or 2 if ICAIF viable | Default: three study lanes continue. If paper is viable for ICAIF, temporarily switch to paper submission lane plus one light maintenance lane; daily LeetCode |
| 2026-08-03 to 2026-08-23 | 3 plus LeetCode | Linear Algebra + Matrix Computation; Probability + Stochastic Calculus + FINM33000; Econometrics + Time Series; daily LeetCode |
| 2026-08-24 onward | 3 plus LeetCode | Interview problem practice; project/paper polish; weak-area maintenance; daily LeetCode |

Phase 1B still needs a second pass with:

- Exact daily micro-milestones inside each lane.
- Quant interview problem sets.
- Probability resource paths once added.
- Exact exercise selections for Linear Algebra + Matrix Computation and Econometrics + Time Series.
- Maintenance cadence for FINM32000 and STAT31511 after the paper.
- ICAIF viability rule: only interrupt the three-lane plan during 2026-07-29 to 2026-08-02 if the June paper has a clear claim, clean evidence, and realistic 8-page ACM submission path.

## Timeline UI Requirements

Initial UI should show:

- Two high-level tracks: Probability and Options/Monte Carlo/PDE.
- Daily lane count: 2 lanes for heavy periods, 3 lanes for balanced periods.
- LeetCode as a must-do daily maintenance thread from 2026-06-01 onward.
- Long thin bands for daily low-dose subjects.
- Thicker bands for heavy paper and PDE periods.
- Paper target date as a visible fixed milestone.
- Blocked dependencies from FINM32000 and STAT31511 into Paper 1.
- Postponed probability track after 2026-06-16.
- Probability + stochastic calculus + FINM33000 lane starts with PDE on 2026-06-17 and continues long.
- Status labels: active, blocked, postponed, done, shaky, strong.
- Course nodes with compact metadata: lectures, chapters, homework, confidence.

Preferred first design:

- Dense timeline-flow, not landing page.
- Usable as planning dashboard first screen.
- Local browser preview before deploy.

## Remaining Open Questions

Resolved from `spring-26`:

- FINM32000 lecture/HW paths for lectures 2-8 and HW2-HW7.
- STAT31511 chapter paths for chapters 6-10.
- STAT31450 lecture notes, homework, tutorial notes, solutions, rubrics, and textbook paths.
- ICAIF paper format constraints.
- June 10 target revised to earliest solid paper target of 2026-06-16.
- FINM33000 placed after the paper unless needed as support.
- Recovery PDF read; only Linear Algebra + Matrix Computation and Econometrics + Time Series retained.
- Linear Algebra source path found.
- Matrix Computation source set to `dcam`.
- BUSN41902 econometrics source path found.
- Undergrad time-series source path found.
- Scheduling model updated: no default single-task days; 2 lanes for heavy work, 3 lanes for balanced work.
- Daily LeetCode added as always-on maintenance.
- Probability + stochastic calculus + FINM33000 moved earlier to start on 2026-06-17.
- After PDE sprint, three study lanes run together: linear algebra/matrix computation, probability/stochastic/options, econometrics/time series.

Still unresolved:

- Confirm STAT31511 chapter-to-homework mapping: chapter 6 -> HW5 through chapter 10 -> HW9.
- STAT31511 working notebooks or scripts for chapters 6-10, if separate from current notes/solutions.
- Phase 1B exact daily milestones after paper target is accepted.
- Probability resource paths for `ReviewProbNotes`, `Notes340`, and `finbook`.
- Whether Paul Wilmott reading is paper-critical or post-paper enrichment.

## Next Step

After confirming this planning structure:

1. Create structured timeline data.
2. Build static UI.
3. Start local server.
4. Open browser for design review.
