import { stages, lessons, focusLabels } from './lessons-data.js';

const storageKey = 'python-100-progress';

const state = {
  stage: new Set(),
  focus: new Set(),
  search: '',
  incompleteOnly: false,
  completedDays: new Set(loadProgress()),
};

const stageFiltersContainer = document.querySelector('#stageFilters');
const focusFiltersContainer = document.querySelector('#focusFilters');
const cardsContainer = document.querySelector('#cards');
const cardTemplate = document.querySelector('#cardTemplate');
const searchInput = document.querySelector('#searchInput');
const completedToggle = document.querySelector('#completedToggle');
const completedCountEl = document.querySelector('#completedCount');
const progressPercentEl = document.querySelector('#progressPercent');
const progressBarEl = document.querySelector('#progressBar');
const toggleTimelineBtn = document.querySelector('#toggleTimeline');
const timelineSection = document.querySelector('#timelineSection');
const timelineContainer = document.querySelector('#timeline');
const resetProgressBtn = document.querySelector('#resetProgress');

renderFilters();
renderTimeline();
renderCards();
updateProgress();

searchInput.addEventListener('input', (event) => {
  state.search = event.target.value.toLowerCase();
  renderCards();
});

completedToggle.addEventListener('change', (event) => {
  state.incompleteOnly = event.target.checked;
  renderCards();
});

toggleTimelineBtn.addEventListener('click', () => {
  const hidden = timelineSection.hasAttribute('hidden');
  if (hidden) {
    timelineSection.removeAttribute('hidden');
    toggleTimelineBtn.textContent = 'Hide Timeline';
  } else {
    timelineSection.setAttribute('hidden', '');
    toggleTimelineBtn.textContent = 'Show Timeline';
  }
});

resetProgressBtn.addEventListener('click', () => {
  if (confirm('Reset all completed days?')) {
    state.completedDays.clear();
    saveProgress();
    renderCards();
    updateProgress();
  }
});

function renderFilters() {
  stages.forEach((stage) => {
    const chip = createChip(stage.label, () => {
      toggleFilter(state.stage, stage.id);
      renderCards();
    });
    chip.dataset.value = stage.id;
    stageFiltersContainer.appendChild(chip);
  });

  const sortedFocus = Object.keys(focusLabels).sort((a, b) =>
    (focusLabels[a] || a).localeCompare(focusLabels[b] || b)
  );

  sortedFocus.forEach((focus) => {
    const chip = createChip(focusLabels[focus] || focus, () => {
      toggleFilter(state.focus, focus);
      renderCards();
    });
    chip.dataset.value = focus;
    focusFiltersContainer.appendChild(chip);
  });
}

function createChip(label, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'chip';
  button.setAttribute('aria-pressed', 'false');
  button.textContent = label;
  button.addEventListener('click', () => {
    const pressed = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', pressed ? 'false' : 'true');
    onClick();
  });
  return button;
}

function toggleFilter(set, value) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

function renderCards() {
  cardsContainer.innerHTML = '';

  const filtered = lessons.filter((lesson) => {
    const matchesStage = state.stage.size === 0 || state.stage.has(lesson.stage);
    const matchesFocus =
      state.focus.size === 0 || lesson.focus.some((focus) => state.focus.has(focus));
    const matchesSearch =
      state.search === '' ||
      [lesson.title, lesson.description, ...lesson.focus]
        .join(' ')
        .toLowerCase()
        .includes(state.search);
    const isCompleted = state.completedDays.has(String(lesson.day));
    const matchesIncomplete = !state.incompleteOnly || !isCompleted;

    return matchesStage && matchesFocus && matchesSearch && matchesIncomplete;
  });

  if (filtered.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'No lessons match your filters. Try adjusting the criteria.';
    empty.className = 'empty';
    cardsContainer.appendChild(empty);
    return;
  }

  filtered.forEach((lesson) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    const dayEl = card.querySelector('.card__day');
    const titleEl = card.querySelector('.card__title');
    const metaEl = card.querySelector('.card__meta');
    const descriptionEl = card.querySelector('.card__description');
    const conceptsEl = card.querySelector('.card__concepts');
    const resourcesEl = card.querySelector('.card__resources');
    const checkbox = card.querySelector("input[type='checkbox']");
    const toggleButton = card.querySelector('.card__toggle');
    const body = card.querySelector('.card__body');

    dayEl.textContent = `Day ${lesson.day}`;
    titleEl.textContent = lesson.title;
    metaEl.innerHTML = '';
    metaEl.appendChild(createMetaTag(getStageLabel(lesson.stage)));
    lesson.focus.forEach((focus) => {
      metaEl.appendChild(createMetaTag(focusLabels[focus] || focus));
    });

    descriptionEl.textContent = lesson.description;

    conceptsEl.innerHTML = '';
    lesson.concepts.forEach((concept) => {
      const li = document.createElement('li');
      li.textContent = concept;
      conceptsEl.appendChild(li);
    });

    resourcesEl.innerHTML = '';
    lesson.resources.forEach((resource) => {
      const link = document.createElement('a');
      link.href = resource.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = resource.label;
      resourcesEl.appendChild(link);
    });

    if (lesson.stretch?.length) {
      const stretchHeading = document.createElement('p');
      stretchHeading.className = 'card__stretch-heading';
      stretchHeading.textContent = 'Stretch ideas:';
      body.appendChild(stretchHeading);

      const stretchList = document.createElement('ul');
      stretchList.className = 'card__stretch';
      lesson.stretch.forEach((idea) => {
        const li = document.createElement('li');
        li.textContent = idea;
        stretchList.appendChild(li);
      });
      body.appendChild(stretchList);
    }

    const isCompleted = state.completedDays.has(String(lesson.day));
    checkbox.checked = isCompleted;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        state.completedDays.add(String(lesson.day));
      } else {
        state.completedDays.delete(String(lesson.day));
      }
      saveProgress();
      updateProgress();
      if (state.incompleteOnly && checkbox.checked) {
        card.remove();
        updateEmptyState();
      }
    });

    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      body.hidden = expanded;
    });

    cardsContainer.appendChild(card);
  });

  updateEmptyState();
}

function createMetaTag(text) {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

function getStageLabel(stageId) {
  return stages.find((stage) => stage.id === stageId)?.label || stageId;
}

function renderTimeline() {
  timelineContainer.innerHTML = '';
  stages.forEach((stage) => {
    const section = document.createElement('div');
    section.className = 'timeline__stage';

    const heading = document.createElement('h3');
    heading.textContent = stage.label;
    section.appendChild(heading);

    const summary = document.createElement('p');
    summary.textContent = stage.summary;
    section.appendChild(summary);

    const range = document.createElement('p');
    range.innerHTML = `<strong>Days:</strong> ${stage.range}`;
    section.appendChild(range);

    const highlights = document.createElement('p');
    const highlightsText = lessons
      .filter((lesson) => lesson.stage === stage.id)
      .slice(0, 3)
      .map((lesson) => lesson.title)
      .join(', ');
    highlights.innerHTML = `<strong>Highlights:</strong> ${highlightsText}...`;
    section.appendChild(highlights);

    timelineContainer.appendChild(section);
  });
}

function updateProgress() {
  const completed = state.completedDays.size;
  const total = lessons.length;
  const percent = Math.round((completed / total) * 100);

  completedCountEl.textContent = completed;
  progressPercentEl.textContent = `${percent}%`;
  progressBarEl.style.width = `${percent}%`;

  saveProgress();
}

function updateEmptyState() {
  if (cardsContainer.children.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'All matching lessons are complete. Great job!';
    empty.className = 'empty';
    cardsContainer.appendChild(empty);
  }
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.warn('Failed to load progress', error);
    return [];
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(Array.from(state.completedDays)));
}
