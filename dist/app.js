const TYPE_META = {
  name: { symbol: "◆", label: "Name", className: "type-name" },
  action: { symbol: "⚡", label: "Action (verb)", className: "type-action" },
  modifier: { symbol: "✦", label: "Modifier (adj.)", className: "type-modifier" },
  misc: { symbol: "●", label: "Misc.", className: "type-misc" },
};

const fallbackNames = [
  "Captain Pickles",
  "Professor Waffles",
  "DJ Noodle",
  "Auntie Zoom",
  "Sir Bubbles",
];

const stories = [
  {
    id: "beach",
    theme: "Beach",
    icon: "🏖️",
    color: "#9de6ef",
    title: "The Great Sandcastle Emergency",
    template:
      "{name1} arrived at the beach carrying a {modifier1} umbrella and one {misc1}, because normal packing is boring. Before anyone could unpack, {name1} {action1} straight toward the biggest sandcastle. “Stop!” yelled {name2}, who had already filled out the proper sandcastle paperwork. Too late. A {modifier2} wave swept in, spun the lifeguard’s chair backward, and left behind the strangest treasure of all—a {misc2}. Three seagulls immediately claimed it. Nobody argued. Best beach day ever.",
    blanks: [
      { id: "name1", type: "name", prompt: "Who leads the beach adventure?", hint: "Choose somebody from your character list." },
      { id: "modifier1", type: "modifier", prompt: "What kind of umbrella?", hint: "An adjective that makes an umbrella much more interesting.", kid: ["gigantic", "sparkly", "striped", "wobbly", "rainbow", "tiny", "fluffy", "squeaky"], adult: ["architecturally dubious", "neon-striped", "wind-battered", "aggressively floral", "absurdly tiny", "solar-powered", "overengineered", "regal"] },
      { id: "misc1", type: "misc", prompt: "What did they bring?", hint: "A noun—useful, surprising, or completely ridiculous.", kid: ["rubber duck", "watermelon", "treasure map", "tuba", "spatula", "pillow", "kite", "fish bowl"], adult: ["espresso machine", "leaf blower", "taxidermy penguin", "folding throne", "traffic cone", "karaoke machine", "briefcase of cheese", "fog machine"] },
      { id: "action1", type: "action", prompt: "What did they suddenly do?", hint: "Pick a past-tense action that can happen across the sand.", kid: ["cartwheeled", "skipped", "zoomed", "tiptoed", "waddled", "rolled", "danced", "sprinted"], adult: ["power-walked", "somersaulted", "moonwalked", "dramatically lunged", "barrel-rolled", "sauntered", "crab-walked", "stampede-waddled"] },
      { id: "name2", type: "name", prompt: "Who tries to warn them?", hint: "Choose another character—or the same one for extra confusion." },
      { id: "modifier2", type: "modifier", prompt: "What kind of wave?", hint: "Describe the wave before it crashes into the story.", kid: ["foamy", "sneaky", "enormous", "glittery", "ticklish", "bouncy", "icy", "purple"], adult: ["suspiciously punctual", "froth-crowned", "ankle-annihilating", "cinematic", "misdirected", "bioluminescent", "bureaucratic", "melodramatic"] },
      { id: "misc2", type: "misc", prompt: "What treasure washed ashore?", hint: "A thing worth finding—or definitely not worth finding.", kid: ["golden flip-flop", "talking coconut", "pirate sock", "tiny piano", "message in a bottle", "giant pearl", "robot crab", "birthday cake"], adult: ["laminated treasure map", "haunted AirPod", "antique waffle iron", "municipal key", "championship belt", "bottle of hot sauce", "perfectly dry newspaper", "miniature fax machine"] },
    ],
  },
  {
    id: "school",
    theme: "School",
    icon: "🎒",
    color: "#ffd86b",
    title: "The Substitute Surprise",
    template:
      "When {name1} walked into class, the substitute teacher was a {modifier1} {misc1}. It wrote one rule on the board: “Everyone must {action1} before lunch.” {name2} offered a {misc2}, which the substitute accepted as homework and legal tender. It became so {modifier2} that it declared the whole class honorary principals. Recess was extended to four hours, broccoli was banned from backpacks, and the actual principal quietly joined the sticker line.",
    blanks: [
      { id: "name1", type: "name", prompt: "Who walks into class first?", hint: "Choose from your character list." },
      { id: "modifier1", type: "modifier", prompt: "Describe the substitute teacher", hint: "An adjective that sets up a very unusual school day.", kid: ["fuzzy", "gigantic", "invisible", "sleepy", "sparkly", "three-headed", "bouncy", "polka-dotted"], adult: ["chronically late", "overqualified", "mildly haunted", "impeccably dressed", "holographic", "caffeine-powered", "philosophical", "alarmingly cheerful"] },
      { id: "misc1", type: "misc", prompt: "What was the substitute?", hint: "A person, animal, or thing that should not be teaching class.", kid: ["llama", "robot", "dragon", "hamster", "pirate", "banana", "astronaut", "snowman"], adult: ["tax accountant", "sentient projector", "retired pirate", "committee of raccoons", "opera singer", "time traveler", "vending machine", "disgraced magician"] },
      { id: "action1", type: "action", prompt: "What must everyone do?", hint: "Use an action that works after the word “must.”", kid: ["hop", "sing", "whisper", "juggle", "dance", "crawl", "giggle", "draw"], adult: ["debate a pigeon", "alphabetize lunch", "levitate quietly", "negotiate with chalk", "conduct an orchestra", "speed-read backward", "mime a volcano", "apologize to gravity"] },
      { id: "name2", type: "name", prompt: "Who saves the lesson?", hint: "Choose the brave student with an idea." },
      { id: "misc2", type: "misc", prompt: "What did they offer?", hint: "A noun that might—or might not—impress a substitute.", kid: ["juice box", "gold star", "cupcake", "crayon", "sticker", "rubber chicken", "paper airplane", "dinosaur eraser"], adult: ["strongly worded memo", "cold brew", "parking voucher", "tiny charcuterie board", "performance review", "museum membership", "spreadsheet", "coupon for soup"] },
      { id: "modifier2", type: "modifier", prompt: "How did the substitute feel?", hint: "Choose an adjective for its dramatic reaction.", kid: ["happy", "excited", "surprised", "proud", "dizzy", "grateful", "confused", "jolly"], adult: ["emotionally transformed", "professionally validated", "wildly impressed", "unreasonably grateful", "existentially confused", "ceremonially delighted", "visibly relieved", "academically energized"] },
    ],
  },
  {
    id: "math",
    theme: "Math",
    icon: "➗",
    color: "#b9a5ff",
    title: "The Equation Escape",
    template:
      "During math time, the number {misc1} became {modifier1} and {action1} right off the page. It knocked over three fractions and told zero to stop following it. {name1} chased it through the hallway using a {misc2}, while {name2} shouted, “Try dividing by something {modifier2}!” Naturally, everyone tried it. The runaway number finally returned—only after being promised it could be the answer. It now signs every worksheet with tiny sunglasses.",
    blanks: [
      { id: "misc1", type: "misc", prompt: "Which number escaped?", hint: "Any number works. The stranger the better.", kid: ["7", "42", "100", "3½", "0", "11", "1,000", "8"], adult: ["π", "−273.15", "6.022×10²³", "i", "9¾", "2.71828", "a googol", "0.0001"] },
      { id: "modifier1", type: "modifier", prompt: "What did the number become?", hint: "An adjective for a number with a new attitude.", kid: ["gigantic", "grumpy", "bouncy", "invisible", "hungry", "sparkly", "wild", "sneaky"], adult: ["irrationally confident", "dimensionally unstable", "statistically significant", "infinitely smug", "non-Euclidean", "wildly derivative", "prime and prickly", "computationally feral"] },
      { id: "action1", type: "action", prompt: "How did it leave the page?", hint: "Pick a past-tense escape action.", kid: ["bounced", "flew", "wiggled", "jumped", "rolled", "slid", "danced", "popped"], adult: ["factorized itself", "teleported", "differentiated wildly", "sauntered", "spiraled", "phase-shifted", "moonwalked", "exited asymptotically"] },
      { id: "name1", type: "name", prompt: "Who chases the number?", hint: "Choose your most mathematical character." },
      { id: "misc2", type: "misc", prompt: "What did they use for the chase?", hint: "A noun that makes a questionable pursuit vehicle.", kid: ["scooter", "ruler", "skateboard", "shopping cart", "pogo stick", "giant pencil", "wagon", "unicycle"], adult: ["rolling whiteboard", "graphing calculator", "office chair", "borrowed Segway", "treadmill desk", "laser pointer", "conference table", "statistical model"] },
      { id: "name2", type: "name", prompt: "Who gives the math advice?", hint: "Pick the character yelling from the hallway." },
      { id: "modifier2", type: "modifier", prompt: "Divide by something… what?", hint: "An adjective after “something.”", kid: ["tiny", "fuzzy", "purple", "friendly", "round", "loud", "sticky", "smelly"], adult: ["conceptually elegant", "oddly specific", "tax-deductible", "mathematically fashionable", "suspiciously prime", "emotionally available", "peer-reviewed", "perfectly spherical"] },
    ],
  },
  {
    id: "pets",
    theme: "Pets",
    icon: "🐾",
    color: "#91e3bb",
    title: "The Midnight Pet Parade",
    template:
      "At midnight, {name1} discovered the pets holding a {modifier1} parade. The leader wore a {misc1} and {action1} past the couch while the cat played a saucepan with toothbrushes. {name2} tried to restore order with a {misc2}, but the pets looked too {modifier2}. By breakfast, every sock had won a medal, the sofa had been elected mayor, and the pets were demanding a second parade with better snacks.",
    blanks: [
      { id: "name1", type: "name", prompt: "Who discovers the parade?", hint: "Choose the character who is still awake." },
      { id: "modifier1", type: "modifier", prompt: "What kind of pet parade?", hint: "An adjective for the midnight celebration.", kid: ["noisy", "tiny", "fancy", "rainbow", "wobbly", "sleepy", "super-fast", "sparkly"], adult: ["highly choreographed", "neighborhood-disrupting", "black-tie", "surprisingly disciplined", "union-approved", "moonlit", "avant-garde", "logistically complex"] },
      { id: "misc1", type: "misc", prompt: "What did the parade leader wear?", hint: "A noun that can sit on a pet—more or less.", kid: ["crown", "cape", "sock", "party hat", "bow tie", "tutu", "backpack", "sunglasses"], adult: ["bespoke tuxedo", "tiny hard hat", "ceremonial sash", "velvet smoking jacket", "bike helmet", "opera cape", "fitness tracker", "fake mustache"] },
      { id: "action1", type: "action", prompt: "How did the leader pass the couch?", hint: "Choose a past-tense parade move.", kid: ["pranced", "zoomed", "waddled", "hopped", "danced", "skated", "crawled", "marched"], adult: ["processed solemnly", "strutted", "power-slid", "tap-danced", "swaggered", "levitated", "trotted imperiously", "sashayed"] },
      { id: "name2", type: "name", prompt: "Who tries to restore order?", hint: "Pick the character with the impossible job." },
      { id: "misc2", type: "misc", prompt: "What did they use?", hint: "A noun for extremely unofficial pet-parade control.", kid: ["treat bag", "whistle", "blanket", "squeaky toy", "flashlight", "spoon", "bubble wand", "laundry basket"], adult: ["color-coded agenda", "megaphone", "noise complaint", "cheese board", "traffic baton", "project plan", "robot vacuum", "formal invitation"] },
      { id: "modifier2", type: "modifier", prompt: "How did the pets look?", hint: "An adjective that explains why nobody stopped them.", kid: ["cute", "proud", "happy", "silly", "fancy", "determined", "fluffy", "excited"], adult: ["professionally fulfilled", "magnificently fluffy", "politically organized", "deeply committed", "unreasonably elegant", "morally certain", "photogenic", "victoriously smug"] },
    ],
  },
  {
    id: "space",
    theme: "Space",
    icon: "🚀",
    color: "#80a6ff",
    title: "The Moon’s Missing Sandwich",
    template:
      "Mission Commander {name1} landed on a {modifier1} moon and immediately lost the ship’s {misc1}. A nearby alien {action1} from behind a crater. “Earthling,” it said, “I will trade your lunch for one {misc2}.” Luckily, {name2} had packed something {modifier2}. The alien accepted, stamped everyone’s passport with a potato, and threw in free moon parking. Galactic disaster avoided. Lunch, unfortunately, was still missing.",
    blanks: [
      { id: "name1", type: "name", prompt: "Who commands the mission?", hint: "Choose a fearless space traveler." },
      { id: "modifier1", type: "modifier", prompt: "What kind of moon?", hint: "An adjective for a very unusual world.", kid: ["cheesy", "bouncy", "purple", "frozen", "tiny", "glowing", "squishy", "gigantic"], adult: ["tidally confused", "artisan-cheese", "poorly mapped", "tax-free", "mildly radioactive", "gravity-optional", "corporate-sponsored", "eerily fashionable"] },
      { id: "misc1", type: "misc", prompt: "What went missing?", hint: "A noun the spaceship absolutely needed—or absolutely did not.", kid: ["sandwich", "spacesuit", "teddy bear", "toothbrush", "map", "banana", "helmet", "snack box"], adult: ["emergency espresso", "navigation manual", "liability waiver", "freeze-dried burrito", "parking validation", "mission spreadsheet", "backup monocle", "orbital charcuterie"] },
      { id: "action1", type: "action", prompt: "How did the alien appear?", hint: "Choose a past-tense action from behind the crater.", kid: ["popped", "bounced", "floated", "tiptoed", "zoomed", "danced", "waved", "tumbled"], adult: ["materialized", "emerged theatrically", "hovered", "sauntered", "phase-shifted", "somersaulted", "glided ominously", "appeared apologetically"] },
      { id: "misc2", type: "misc", prompt: "What does the alien demand?", hint: "A noun to complete the strangest trade in the galaxy.", kid: ["red sock", "jellybean", "moon rock", "rubber duck", "pancake", "yo-yo", "comic book", "spoon"], adult: ["signed headshot", "decent password", "tiny houseplant", "quarterly report", "vintage cassette", "espresso coupon", "left-handed wrench", "well-written apology"] },
      { id: "name2", type: "name", prompt: "Who packed the solution?", hint: "Choose the mission’s most prepared character." },
      { id: "modifier2", type: "modifier", prompt: "What kind of backup item?", hint: "An adjective for the secret thing in the luggage.", kid: ["sparkly", "extra-large", "smelly", "magic", "fuzzy", "rainbow", "super-sticky", "delicious"], adult: ["diplomatically useful", "vacuum-sealed", "deeply unnecessary", "intergalactically rare", "surprisingly legal", "meticulously labeled", "luxury-grade", "ethically sourced"] },
    ],
  },
  {
    id: "dinosaurs",
    theme: "Dinosaurs",
    icon: "🦖",
    color: "#b8e56c",
    title: "The Polite T-Rex",
    template:
      "{name1} opened the door and found a {modifier1} T-Rex holding a {misc1}. Instead of roaring, the dinosaur wiped its feet and politely asked to {action1}. {name2} agreed, but only if the T-Rex brought a {misc2}. It nodded with a {modifier2} smile. Tea time became louder after that. The T-Rex broke six chairs, complimented the curtains, and ate only tiny sandwiches because it had “already spoiled dinner with a mammoth.”",
    blanks: [
      { id: "name1", type: "name", prompt: "Who opens the door?", hint: "Choose the first person to meet the dinosaur." },
      { id: "modifier1", type: "modifier", prompt: "Describe the T-Rex", hint: "An adjective that makes it much less ordinary.", kid: ["tiny", "fancy", "friendly", "purple", "muddy", "sleepy", "feathery", "sparkly"], adult: ["impeccably mannered", "chronically anxious", "bow-tied", "freshly moisturized", "historically inaccurate", "tea-obsessed", "self-conscious", "magnificently feathered"] },
      { id: "misc1", type: "misc", prompt: "What was it holding?", hint: "A noun in those very short dinosaur arms.", kid: ["teacup", "balloon", "flower", "toothbrush", "cupcake", "library book", "umbrella", "tiny gift"], adult: ["formal invitation", "espresso cup", "parking ticket", "bouquet of kale", "legal brief", "folding fan", "charcuterie board", "business card"] },
      { id: "action1", type: "action", prompt: "What did the dinosaur ask to do?", hint: "Use an action that fits after “asked to.”", kid: ["dance", "have tea", "play soccer", "bake cookies", "sing", "build a fort", "take a nap", "learn to knit"], adult: ["discuss zoning", "join book club", "negotiate brunch", "practice mindfulness", "audit the fridge", "host a podcast", "renew its library card", "redecorate"] },
      { id: "name2", type: "name", prompt: "Who sets one condition?", hint: "Choose the character making the house rules." },
      { id: "misc2", type: "misc", prompt: "What must the T-Rex bring?", hint: "A noun that improves any dinosaur visit.", kid: ["pizza", "party hat", "board game", "blanket", "giant cookie", "soccer ball", "storybook", "bucket of bubbles"], adult: ["proof of insurance", "focaccia", "neighbor references", "playlist", "folding chair", "dessert wine", "completed survey", "noise-canceling headphones"] },
      { id: "modifier2", type: "modifier", prompt: "What kind of smile?", hint: "An adjective for the dinosaur’s happy agreement.", kid: ["toothy", "gigantic", "goofy", "shy", "proud", "sparkly", "sweet", "crooked"], adult: ["prehistorically charming", "mildly terrifying", "camera-ready", "contractually binding", "unreasonably toothy", "grateful", "self-satisfied", "diplomatic"] },
    ],
  },
  {
    id: "sports",
    theme: "Sports",
    icon: "🏆",
    color: "#ffb27d",
    title: "The Championship Mix-Up",
    template:
      "With one second left, Coach {name1} handed the team a {modifier1} {misc1} instead of the game ball. Nobody had practiced for this. {name2} {action1} onto the field anyway. The crowd became {modifier2}, the mascot dropped its {misc2}, and the scoreboard displayed a soup recipe. Somehow the team won by three snacks. During the trophy ceremony, both coaches pretended this was the strategy all along.",
    blanks: [
      { id: "name1", type: "name", prompt: "Who is the coach?", hint: "Choose the person holding the clipboard." },
      { id: "modifier1", type: "modifier", prompt: "Describe the wrong object", hint: "An adjective before the surprise equipment.", kid: ["squishy", "giant", "frozen", "sparkly", "smelly", "tiny", "wobbly", "rainbow"], adult: ["regulation-adjacent", "ceremonial", "deeply impractical", "vaguely aerodynamic", "sponsor-branded", "antique", "structurally unsound", "luxury"] },
      { id: "misc1", type: "misc", prompt: "What replaced the game ball?", hint: "A noun nobody trained with.", kid: ["watermelon", "pillow", "rubber chicken", "donut", "backpack", "pumpkin", "beach ball", "meatball"], adult: ["conference microphone", "artisan sourdough", "bowling trophy", "desk lamp", "cantaloupe", "foam roller", "tax document", "office plant"] },
      { id: "name2", type: "name", prompt: "Who takes it onto the field?", hint: "Choose the player willing to try anything." },
      { id: "action1", type: "action", prompt: "How did the player enter?", hint: "Choose a past-tense sports entrance.", kid: ["zoomed", "hopped", "danced", "rolled", "skipped", "waddled", "flipped", "slid"], adult: ["sprinted heroically", "jogged reluctantly", "power-slid", "sauntered", "vaulted", "moonwalked", "charged ceremonially", "entered via cartwheel"] },
      { id: "modifier2", type: "modifier", prompt: "How did the crowd become?", hint: "An adjective for thousands of confused fans.", kid: ["wild", "silent", "excited", "giggle-happy", "sleepy", "bouncy", "confused", "hungry"], adult: ["collectively baffled", "philosophically divided", "unreasonably invested", "snack-deprived", "electrified", "ritually ecstatic", "deeply concerned", "instantaneously loyal"] },
      { id: "misc2", type: "misc", prompt: "What did the mascot drop?", hint: "A noun that makes the victory even stranger.", kid: ["giant shoe", "hot dog", "flag", "popcorn", "drum", "trophy", "megaphone", "sandwich"], adult: ["expense report", "nacho platter", "ceremonial wig", "mascot résumé", "wireless microphone", "giant foam eyebrow", "parking pass", "emergency lasagna"] },
    ],
  },
  {
    id: "magic",
    theme: "Magic",
    icon: "🪄",
    color: "#efa3de",
    title: "The Wand With Opinions",
    template:
      "Wizard {name1} waved a {modifier1} wand and tried to summon a {misc1}. The wand refused. It {action1} and announced, “I only make things for {name2} now. Respect my creative process.” One {modifier2} puff later, the room filled with {misc2}. A nearby broom requested hazard pay. The wand awarded itself Employee of the Month. There were no other employees, but it still demanded a ceremony.",
    blanks: [
      { id: "name1", type: "name", prompt: "Who owns the opinionated wand?", hint: "Choose a character with questionable magical training." },
      { id: "modifier1", type: "modifier", prompt: "What kind of wand?", hint: "An adjective for a magical tool with attitude.", kid: ["glittery", "bent", "gigantic", "tiny", "striped", "fuzzy", "golden", "squeaky"], adult: ["unionized", "temperamental", "heirloom-quality", "ethically sourced", "overclocked", "passive-aggressive", "self-updating", "artisanal"] },
      { id: "misc1", type: "misc", prompt: "What did the wizard request?", hint: "A noun worth summoning—or maybe not.", kid: ["dragon", "pizza", "castle", "rainbow", "puppy", "treasure chest", "flying carpet", "giant cookie"], adult: ["competent assistant", "tax refund", "quiet espresso bar", "parking space", "minor celebrity", "reasonable mortgage", "perfect sourdough", "board-approved dragon"] },
      { id: "action1", type: "action", prompt: "How did the wand refuse?", hint: "A past-tense action before its dramatic announcement.", kid: ["wiggled", "sneezed", "sparkled", "jumped", "buzzed", "giggled", "spun", "yawned"], adult: ["vibrated indignantly", "filed a grievance", "glowed sarcastically", "rebooted", "sighed audibly", "unionized", "issued a memo", "levitated away"] },
      { id: "name2", type: "name", prompt: "Who is the wand’s new favorite?", hint: "Choose the character receiving all future magic." },
      { id: "modifier2", type: "modifier", prompt: "What kind of magic puff?", hint: "An adjective for the moment everything goes wrong.", kid: ["purple", "sparkly", "smelly", "enormous", "tiny", "rainbow", "thunderous", "tickly"], adult: ["lavender-scented", "legally binding", "room-shaking", "administrative", "cinematic", "deeply ominous", "tastefully glittered", "budget-conscious"] },
      { id: "misc2", type: "misc", prompt: "What filled the room?", hint: "A plural noun—or a pile of something very inconvenient.", kid: ["penguins", "marshmallows", "bubbles", "socks", "cupcakes", "rubber ducks", "butterflies", "tiny dragons"], adult: ["motivational posters", "unpaid interns", "espresso cups", "fresh baguettes", "tiny consultants", "parking tickets", "velvet ottomans", "strong opinions"] },
    ],
  },
  {
    id: "food",
    theme: "Food",
    icon: "🍕",
    color: "#ff8f82",
    title: "The Runaway Recipe",
    template:
      "Chef {name1} mixed a {modifier1} recipe using one {misc1}. The mixture suddenly {action1} across the kitchen. {name2} blocked the door with a {misc2}, but the dish looked too {modifier2} to stop. It escaped, opened a restaurant by lunchtime, and received five stars from a food critic who was definitely three squirrels in a coat. Chef {name1} now needs a reservation.",
    blanks: [
      { id: "name1", type: "name", prompt: "Who is today’s chef?", hint: "Choose a character brave enough to invent lunch." },
      { id: "modifier1", type: "modifier", prompt: "What kind of recipe?", hint: "An adjective for the questionable creation.", kid: ["gooey", "rainbow", "spicy", "gigantic", "frozen", "crunchy", "wobbly", "mystery"], adult: ["deconstructed", "alarmingly fermented", "farm-to-table", "structurally ambitious", "molecular", "emotionally spicy", "critically acclaimed", "caffeine-infused"] },
      { id: "misc1", type: "misc", prompt: "What was the secret ingredient?", hint: "A noun that definitely changes the flavor.", kid: ["jellybean", "pickle", "sock", "watermelon", "sprinkle", "rubber chicken", "banana", "snowball"], adult: ["truffle-flavored receipt", "single anchovy", "espresso shot", "tax form", "vintage crouton", "spoonful of pesto", "mystery powder", "tiny wheel of brie"] },
      { id: "action1", type: "action", prompt: "How did the mixture escape?", hint: "Choose a past-tense kitchen action.", kid: ["bounced", "splashed", "rolled", "zoomed", "hopped", "wiggled", "danced", "slid"], adult: ["achieved sentience", "sprinted", "oozed strategically", "catapulted itself", "power-walked", "fermented aggressively", "moonwalked", "staged a walkout"] },
      { id: "name2", type: "name", prompt: "Who guards the kitchen door?", hint: "Choose the character trying to contain lunch." },
      { id: "misc2", type: "misc", prompt: "What blocked the door?", hint: "A noun pressed into emergency kitchen service.", kid: ["cookie sheet", "chair", "giant pancake", "broom", "lunchbox", "fridge", "mixing bowl", "bag of flour"], adult: ["cast-iron skillet", "restaurant review", "wine fridge", "rolling butcher block", "espresso cart", "baguette barricade", "health-code manual", "ceremonial tureen"] },
      { id: "modifier2", type: "modifier", prompt: "How did the runaway dish look?", hint: "An adjective explaining its restaurant potential.", kid: ["delicious", "fancy", "silly", "colorful", "crunchy", "happy", "amazing", "cheesy"], adult: ["Michelin-ready", "photogenic", "financially viable", "suspiciously elegant", "perfectly plated", "market-disrupting", "irresistibly aromatic", "avant-garde"] },
    ],
  },
  {
    id: "superheroes",
    theme: "Superheroes",
    icon: "🦸",
    color: "#6ed5e6",
    title: "The Extremely Local Hero",
    template:
      "By day, {name1} was ordinary. By snack time, they became the {modifier1} protector of {misc1}. When a villain {action1} into town, sidekick {name2} activated the secret {misc2}. The villain became completely {modifier2}, dropped a smoke bomb that smelled like cinnamon, and promised never to bother the neighborhood again. Evil was defeated, justice prevailed, and somebody finally took the recycling out.",
    blanks: [
      { id: "name1", type: "name", prompt: "Who becomes the hero?", hint: "Choose your main character." },
      { id: "modifier1", type: "modifier", prompt: "Describe the local protector", hint: "An adjective worthy of a cape and theme song.", kid: ["mighty", "invisible", "super-stretchy", "sparkly", "fearless", "flying", "fuzzy", "lightning-fast"], adult: ["mildly inconvenienced", "municipally licensed", "caffeine-fueled", "emotionally perceptive", "hyperlocal", "fiscally responsible", "cape-optional", "weekend-only"] },
      { id: "misc1", type: "misc", prompt: "What do they protect?", hint: "A noun or place with suspiciously specific importance.", kid: ["playground", "cookie jar", "pet shop", "treehouse", "pizza shop", "library", "toy box", "pillow fort"], adult: ["neighborhood Wi-Fi", "last parking spot", "office coffee", "community compost", "brunch reservation", "group chat", "artisan bakery", "quiet cul-de-sac"] },
      { id: "action1", type: "action", prompt: "How did the villain arrive?", hint: "Choose a past-tense entrance with dramatic energy.", kid: ["crashed", "zoomed", "bounced", "tiptoed", "flew", "skated", "tumbled", "stomped"], adult: ["arrived via rideshare", "descended theatrically", "power-walked", "teleported", "entered unannounced", "parachuted badly", "rolled in on a chair", "materialized smugly"] },
      { id: "name2", type: "name", prompt: "Who is the trusty sidekick?", hint: "Choose the character guarding the secret equipment." },
      { id: "misc2", type: "misc", prompt: "What secret device was activated?", hint: "A noun that somehow defeats villains.", kid: ["bubble cannon", "banana phone", "giggle ray", "giant fan", "sock launcher", "cookie signal", "super magnet", "dance button"], adult: ["emergency spreadsheet", "noise-canceling force field", "zoning ordinance", "automated espresso turret", "passive-aggressive email", "coupon projector", "municipal leaf blower", "calendar invitation"] },
      { id: "modifier2", type: "modifier", prompt: "How did the villain feel?", hint: "An adjective for the moment the plan falls apart.", kid: ["confused", "sleepy", "ticklish", "dizzy", "silly", "sorry", "hungry", "friendly"], adult: ["administratively defeated", "professionally embarrassed", "deeply inconvenienced", "unexpectedly reflective", "mildly hypnotized", "contractually obligated", "overcaffeinated", "emotionally disarmed"] },
    ],
  },
];

const state = {
  mode: "kid",
  characters: ["Will", "Alex", "Mia", "Theo", "Zoey"],
  story: null,
  blankIndex: 0,
  answers: {},
};

const screens = {
  home: document.querySelector("#home-screen"),
  play: document.querySelector("#play-screen"),
  result: document.querySelector("#result-screen"),
};

const characterList = document.querySelector("#character-list");
const characterForm = document.querySelector("#character-form");
const characterInput = document.querySelector("#character-input");
const rosterCount = document.querySelector("#roster-count");
const themeGrid = document.querySelector("#theme-grid");
const promptCard = document.querySelector("#prompt-card");
const promptType = document.querySelector("#prompt-type");
const promptHeading = document.querySelector("#prompt-heading");
const promptHint = document.querySelector("#prompt-hint");
const choiceGrid = document.querySelector("#choice-grid");
const customWordForm = document.querySelector("#custom-word-form");
const customWordInput = document.querySelector("#custom-word-input");
const previousButton = document.querySelector("#previous-button");

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => {
    element.classList.toggle("hidden", key !== name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-button").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelector("#mode-description").textContent =
    mode === "kid"
      ? "Simple, playful words for younger storytellers."
      : "More elaborate, delightfully ridiculous vocabulary.";
}

function renderCharacters() {
  characterList.replaceChildren();
  if (!state.characters.length) {
    const empty = document.createElement("p");
    empty.className = "empty-roster";
    empty.textContent = "No names yet. Add one—or we’ll offer some wacky stand-ins.";
    characterList.append(empty);
  }

  state.characters.forEach((name, index) => {
    const chip = document.createElement("span");
    chip.className = "character-chip";
    const label = document.createElement("span");
    label.textContent = name;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Remove ${name}`);
    remove.addEventListener("click", () => {
      state.characters.splice(index, 1);
      renderCharacters();
    });
    chip.append(label, remove);
    characterList.append(chip);
  });

  rosterCount.textContent = `${state.characters.length} / 10`;
  const atLimit = state.characters.length >= 10;
  characterInput.disabled = atLimit;
  characterForm.querySelector("button").disabled = atLimit;
  characterInput.placeholder = atLimit ? "Character list is full" : "Add a name…";
}

function addCharacter(rawName) {
  const name = rawName.trim().replace(/\s+/g, " ");
  if (!name || state.characters.length >= 10) return;
  const duplicate = state.characters.some(
    (character) => character.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );
  if (!duplicate) {
    state.characters.push(name);
    renderCharacters();
  }
}

function renderThemes() {
  themeGrid.replaceChildren();
  stories.forEach((story) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-card";
    button.style.setProperty("--card-bg", story.color);
    button.setAttribute("aria-label", `Play ${story.theme}: ${story.title}`);
    button.innerHTML = `
      <span class="theme-card-icon" aria-hidden="true">${story.icon}</span>
      <span class="theme-card-text">
        <small>${story.theme}</small>
        <strong>${story.title}</strong>
      </span>
    `;
    button.addEventListener("click", () => startStory(story));
    themeGrid.append(button);
  });
}

function startStory(story) {
  state.story = story;
  state.blankIndex = 0;
  state.answers = {};
  document.querySelector("#play-theme-icon").textContent = story.icon;
  document.querySelector("#play-theme-icon").style.background = story.color;
  document.querySelector("#play-theme-label").textContent = `${story.theme} story`;
  document.querySelector("#play-story-title").textContent = story.title;
  document.querySelector("#play-mode-pill").textContent =
    state.mode === "kid" ? "Kid words" : "Adult words";
  showScreen("play");
  renderPrompt();
}

function choicesFor(blank) {
  if (blank.type !== "name") return blank[state.mode];
  const names = [...state.characters];
  for (const fallback of fallbackNames) {
    if (names.length >= 5) break;
    if (!names.some((name) => name.toLocaleLowerCase() === fallback.toLocaleLowerCase())) {
      names.push(fallback);
    }
  }
  return names.slice(0, 10);
}

function renderPrompt() {
  const blank = state.story.blanks[state.blankIndex];
  const type = TYPE_META[blank.type];
  const current = state.blankIndex + 1;
  const total = state.story.blanks.length;
  const percent = Math.round((current / total) * 100);

  promptCard.dataset.type = blank.type;
  promptType.className = `prompt-type ${type.className}`;
  promptType.textContent = `${type.symbol} ${type.label}`;
  promptHeading.textContent = blank.prompt;
  promptHint.textContent = blank.hint;
  customWordInput.value = "";
  customWordInput.placeholder =
    blank.type === "name" ? "Type another character name…" : "Your wonderfully weird word…";

  document.querySelector("#progress-text").textContent = `Word ${current} of ${total}`;
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  previousButton.disabled = state.blankIndex === 0;

  choiceGrid.replaceChildren();
  choicesFor(blank).forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = choice;
    if (state.answers[blank.id] === choice) {
      button.setAttribute("aria-pressed", "true");
    }
    button.addEventListener("click", () => chooseWord(choice));
    choiceGrid.append(button);
  });
}

function chooseWord(rawWord) {
  const word = rawWord.trim().replace(/\s+/g, " ");
  if (!word) return;
  const blank = state.story.blanks[state.blankIndex];
  state.answers[blank.id] = word;

  if (blank.type === "name") {
    addCharacter(word);
  }

  if (state.blankIndex < state.story.blanks.length - 1) {
    state.blankIndex += 1;
    renderPrompt();
    promptHeading.focus({ preventScroll: true });
  } else {
    renderResult();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderResult() {
  document.querySelector("#result-title").textContent = state.story.title;
  const blanksById = Object.fromEntries(state.story.blanks.map((blank) => [blank.id, blank]));
  const storyHtml = state.story.template.replace(/\{(\w+)\}/g, (_, id) => {
    const blank = blanksById[id];
    const answer = state.answers[id] || "???";
    return `<span class="story-word ${blank.type}">${escapeHtml(answer)}</span>`;
  });
  document.querySelector("#story-paper").innerHTML = `<p>${storyHtml}</p>`;
  showScreen("result");
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

characterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addCharacter(characterInput.value);
  characterInput.value = "";
  characterInput.focus();
});

customWordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  chooseWord(customWordInput.value);
});

previousButton.addEventListener("click", () => {
  if (state.blankIndex > 0) {
    state.blankIndex -= 1;
    renderPrompt();
  }
});

document.querySelector("#home-button").addEventListener("click", () => showScreen("home"));
document.querySelector("#themes-button").addEventListener("click", () => showScreen("home"));
document.querySelector("#replay-button").addEventListener("click", () => startStory(state.story));

setMode("kid");
renderCharacters();
renderThemes();
