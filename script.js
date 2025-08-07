const genreSelect = document.getElementById('genre');
const generateBtn = document.getElementById('generateBtn');
const storyBox = document.getElementById('storyBox');

// Stories: one per genre, each includes character name + 5–7 lines
const stories = {
  "fantasy": {
    name: "Elowen the Enchanter",
    story: `Elowen the Enchanter wandered through the Whispering Woods, her staff humming softly.\nShe followed the glowing trail left by the moon moths.\nAt the forest’s heart, a forgotten temple rose from the moss.\nA voice from the shadows called her name in a language only dreams remembered.\nElowen raised her hand, and the stars blinked in response.\nShe had arrived where magic was born.\nAnd now, it would be reborn.`
  },

  "sci-fi": {
    name: "Zion Vega",
    story: `Zion Vega zipped through space aboard the solar-glider *Orion Drift*.\nHe received a transmission from a planet that shouldn't exist.\nThe signal spoke of hope… and danger.\nLanding on the glowing sands, he met a creature made of sound.\nIt whispered secrets of the galaxy’s true origin.\nZion’s mission was no longer to explore.\nIt was to protect the universe from forgetting itself.`
  },

  "romance": {
    name: "Clara Winters",
    story: `Clara Winters always took the 5:17 train, alone.\nBut one rainy evening, a man sat beside her—smiling, reading the same book.\nHis name was Jules, and he had her favorite poem tattooed on his arm.\nThey talked until the train emptied and the rain stopped.\nA week passed. Then a month. Then, they met again.\nLove, they learned, is often a series of small coincidences.\nAnd theirs had just begun.`
  },

  "comedy": {
    name: "Leo Bumble",
    story: `Leo Bumble tried baking banana bread but exploded the microwave instead.\nHis dog, Waffles, was now wearing a flour hat.\nRunning late for a Zoom meeting, Leo put on a suit—and bunny slippers.\nHe didn’t notice until his boss asked, “Nice ears?”\nWaffles barked in agreement.\nLeo gave up, grabbed toast, and stepped on a Lego.\nMondays should be banned, he decided.`
  },

  "mystery": {
    name: "Raya Knox",
    story: `Raya Knox found an old photograph in a secondhand book.\nThe woman in the picture was her—but it was dated 1943.\nShe traced the photo to a shuttered library in a forgotten town.\nInside, dusty journals whispered her name across time.\nA stranger with her eyes appeared and vanished.\nWas she solving a mystery—or becoming one?\nThe answer lay in the mirror’s reflection.`
  },

  "horror": {
    name: "Silas Crow",
    story: `Silas Crow woke up to footsteps on the ceiling.\nThe house, once abandoned, now breathed with life.\nHe followed the whispers to the attic, where a mirror bled shadows.\nHis reflection smiled, but he did not.\nA cold voice asked, "Why did you come back?"\nThe door locked behind him.\nSilas was never seen again—only heard.`
  },

  "adventure": {
    name: "Ivy Reyes",
    story: `Ivy Reyes stole the king’s map and leapt off the waterfall.\nShe swam to a cave where the walls glowed like stars.\nEach symbol told of trials only the brave could pass.\nShe crossed fire vines and solved riddles of stone frogs.\nAt the summit, a feathered lion waited.\n"Are you the chosen one?" it roared.\n"I chose myself," Ivy answered.`
  },

  "historical": {
    name: "Nicolette de Vaux",
    story: `Nicolette de Vaux scribbled letters at dusk while cannons echoed.\nEach word she wrote could spark a revolution.\nShe smuggled them in loaves of bread, cloaked in innocence.\nThe queen's men hunted her, never knowing the baker's daughter was their ghost.\nHer parchment carried power, her pen a sword.\nHistory remembered kings.\nBut legends whispered her name.`
  },

  "slice-of-life": {
    name: "Jay Patel",
    story: `Jay Patel’s mornings began with chai and crossword puzzles.\nHis cat, Momo, preferred to nap on the newspaper.\nOn Sundays, he played chess at the park and always lost with grace.\nHe kept a notebook of poems he never showed anyone.\nLife wasn’t loud—but it was full.\nAnd on Tuesdays, he always smiled at strangers.\nBecause kindness, he believed, echoed.`
  },

  "surreal": {
    name: "Nova Bloom",
    story: `Nova Bloom painted clouds with thoughts and bottled starlight tears.\nOne night, her clock reversed and time rewound her dreams.\nShe met a boy made of leaves who hummed forgotten lullabies.\nThey danced on invisible bridges above sleeping whales.\nWhen she awoke, her hands were stained with galaxies.\n"Reality is overrated," she whispered.\nAnd went back to sleep.`
  }
};

generateBtn.addEventListener('click', () => {
  const genre = genreSelect.value;

  if (!genre) {
    storyBox.innerText = 'Please select a genre.';
    storyBox.classList.remove('hidden');
    return;
  }

  const entry = stories[genre];
  if (entry) {
    storyBox.innerText = `👤 ${entry.name}\n\n${entry.story}`;
    storyBox.classList.remove('hidden');
  } else {
    storyBox.innerText = 'No story available for this genre.';
    storyBox.classList.remove('hidden');
  }
});
