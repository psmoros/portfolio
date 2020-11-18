const bookData = [
  {
    Title: "A History of Western Philosophy",
    Author: "Bertrand Russell",
    Genre: "Philosophy – History – Classics",
    FavQuote:
      "Almost everything that distinguishes the modern world from earlier centuries is attributable to science.",
    Why:
      "To gallop through the canon of western thought in order to put our current times in perspective.",
    What:
      "• The Pre-Socratics. <br/>\n• Socrates, Plato and Aristotle.<br/>\n• Ancient philosophy after Aristotle. <br/> \n• The Fathers of the catholic. philosophy <br/> \n• The Schoolmen. <br/>\n• From the Renaissance to Hume.<br/>\n• Rousseau to present day.",
    Fav: "No"
  },
  {
    Title: "Alchemy",
    Author: "Rory Sutherland",
    Genre: "Marketing – Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Algorithms to Live By",
    Author: "Brian Christian, Tom Griffiths",
    Genre: "Computer Science – Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "All Marketers Are Liars",
    Author: "Seth Godin",
    Genre: "Marketing",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Animal Farm",
    Author: "George Orwell",
    Genre: "Classics – Fiction",
    FavQuote:
      "All animals are equal, but some animals are more equal than others.",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Apology",
    Author: "Plato",
    Genre: "Philosophy – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Approaches to Literature",
    Author: "Michael D.C. Drout",
    Genre: "Literature",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Artificial Intelligence",
    Author: "Stuart Russell, Peter Norvig",
    Genre: "Computer Science",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Atlas Shrugged",
    Author: "Ayn Rand",
    Genre: "Fiction – Classics – Philosophy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Atomic Habits",
    Author: "James Clear",
    Genre: "Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Basic Economics",
    Author: "Thomas Sowell",
    Genre: "Economics",
    FavQuote:
      'I have never understood why it is "greed" to want to keep the money you have earned but not greed to want to take somebody else\'s money.',
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Business Model Generation",
    Author: "Alexander Osterwalder, Yves Pigneur",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Candide",
    Author: "Voltaire",
    Genre: "Classics – fiction – Philosophy",
    FavQuote:
      "Fools have a habit of believing that everything written by a famous author is admirable. For my part I read only to please myself and like only what suits my taste.",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Cognitive Behavioral Therapy",
    Author: "Jason M. Satterfield",
    Genre: "Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Control or Economic Law",
    Author: "Eugen von Böhm-Bawerk",
    Genre: "Economics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Crucial Conversations",
    Author: "Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler",
    Genre: "Business – Management  – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "De Rerum Natura",
    Author: "Lucretius",
    Genre: "Philosophy – Classics – Poetry – Science",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Deep Work",
    Author: "Cal Newport",
    Genre: "Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Defending the Undefendable",
    Author: "Walter Block",
    Genre: "Economics – Politics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Design a Better Business",
    Author: "Patrick van der Pijl, Justin Lokitz, Lisa Kay Solomon",
    Genre: "Design – Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Designing Your Life",
    Author: "Bill Burnett, Dave Evans",
    Genre: "Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Drive",
    Author: "Daniel H. Pink",
    Genre: "Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Duct Tape Marketing",
    Author: "John Jantsch",
    Genre: "Marketing",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Enlightenment Now",
    Author: "Steven Pinker",
    Genre: "Science – Philosophy – History – Politics",
    FavQuote:
      "As we care about more of humanity, we’re apt to mistake the harms around us for signs of how low the world has sunk rather than how high our standards have risen.",
    Why: "To strengthen my case for science, progress, humanism and reason.",
    What:
      "• How science, progress, reason and humanist have alleviated us from our primal miseries.\n<br/>• How everything is going unbelievably well thanks to the enlightenment.\n<br/>• The countless enemies of life, liberty and the pursuit of happiness.\n<br/>• The 3 big forces: information, evolution and entropy.",
    Fav: "Yes"
  },
  {
    Title: "Escaping the Build Trap",
    Author: "Melissa Perri",
    Genre: "Business – Management",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Essays",
    Author: "George Orwell",
    Genre: "Essays – Politics – Classics",
    FavQuote:
      "From Politics and the English Language: The great enemy of clear language is insincerity. When there is a gap between one’s real and one’s declared aims, one turns as it were instinctively to long words and exhausted idioms, like a cuttlefish spurting out ink.",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Essays",
    Author: "Michel de Montaigne",
    Genre: "Philosophy – Essays – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Essentialism",
    Author: "Greg McKeown",
    Genre: "Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Existentialism Is a Humanism",
    Author: "Jean-Paul Sartre",
    Genre: "Philosophy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Exponential Organizations",
    Author: "Salim Ismail, Mike Malone, Yuri van Geest",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Fear and Trembling",
    Author: "Amélie Nothomb",
    Genre: "Fiction – Culture",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Finite and Infinite Games",
    Author: "James P. Carse",
    Genre: "Philosophy – Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "First You Write a Sentence",
    Author: "Joe Moran",
    Genre: "Writing",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Freakonomics",
    Author: "Steven D. Levitt, Stephen J. Dubner",
    Genre: "Economics – Culture",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Gamestorming",
    Author: "Dave Gray, Sunni Brown, James Macanufo",
    Genre: "Business – Design",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Giants of French Literature: Balzac, Flaubert, Proust and Camus",
    Author: "Katherine L. Elkins",
    Genre: "Literature",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Good Strategy/Bad Strategy",
    Author: "Richard P. Rumelt",
    Genre: "Business – Leadership",
    FavQuote:
      "Success leads to laxity and bloat and this leads to decline. Few avoid this tragic arch. Only where there is starvation will you find a tightly crafted and integrated set of actions and policies.",
    Why:
      "To understand how to craft good strategies from the world authority on the subject.",
    What:
      "• Signs of bad strategy. <br/>\n• Anatomy of a good strategy : a diagnosis, a guiding policy and actionable next steps.",
    Fav: "Yes"
  },
  {
    Title: "Gravitas",
    Author: "Caroline Goyder",
    Genre: "Leadership",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Great Thinkers",
    Author: "The School of Life",
    Genre: "Philosophy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Hitch-22",
    Author: "Christopher Hitchens",
    Genre: "Memoir",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Hooked",
    Author: "Nir Eyal",
    Genre: "Business – Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "How Innovation Works",
    Author: "Matt Ridley",
    Genre: "Business – Economics – Science – Technology – History",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "How Proust Can Change Your Life",
    Author: "Alain de Botton",
    Genre: "Philosophy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "How To Measure Anything",
    Author: "Douglas W. Hubbard",
    Genre: "Management – Mathematics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "How Will You Measure Your Life?",
    Author: "Clayton M. Christensen",
    Genre: "Business – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Human Action",
    Author: "Ludwig von Mises",
    Genre: "Economics",
    FavQuote:
      "Socialism is an alternative to capitalism as potassium cyanide is an alternative to water.",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "iGen",
    Author: "Jean M. Twenge",
    Genre: "Psychology – Sociology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Influence",
    Author: "Robert B. Cialdini",
    Genre: "Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Insight Out",
    Author: "Tina Seelig",
    Genre: "Business – Design",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Inspired",
    Author: "Marty Cagan",
    Genre: "Business – Management",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Introduction to Algorithms",
    Author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    Genre: "Computer Science",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "It Doesn’t have to be Crazy at Work",
    Author: "Jason Fried, David Heinemeier Hansson",
    Genre: "Business – Management",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Kim",
    Author: "Rudyard Kipling",
    Genre: "Classics – fiction",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Lafayette",
    Author: "Gonzague Saint Bris",
    Genre: "Biography – History",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Les Liaisons dangereuses",
    Author: "Pierre Choderlos de Laclos",
    Genre: "Classics – fiction",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Letters to a Young Contrarian",
    Author: "Christopher Hitchens",
    Genre: "Philosophy – Politics",
    FavQuote:
      "Every day, the New York Times carries a motto in a box on its front page. \"All the News That's Fit to Print,\" it says. I myself check every day to make sure that the bright, smug, pompous, idiotic claim is still there. Then I check to make sure that it still irritates me. If I can still exclaim, under my breath, why do they insult me and what do they take me for and what the hell is it supposed to mean unless it's as obviously complacent and conceited and censorious as it seems to be, then at least I know I still have a pulse.",
    Why: "To follow in the footsteps of my heroes.",
    What:
      "• The importance of truth. <br/> \n• The perpetual tyranny of consensus. <br/> \n• The importance of moral and physical courage.",
    Fav: "Yes"
  },
  {
    Title: "Love, Poverty and War",
    Author: "Christopher Hitchens",
    Genre: "Essays – Politics – History",
    FavQuote: "The essence of tyranny is not iron law. It is capricious law.",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Make Time",
    Author: "Jake Knapp, John Zeratsky",
    Genre: "Self Help – Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Man, Economy, and State with Power and Market",
    Author: "Murray N. Rothbard",
    Genre: "Economics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Managing Oneself",
    Author: "Peter F. Drucker",
    Genre: "Business – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Man’s Search for Meaning",
    Author: "Viktor E. Frankl",
    Genre: "Psychology – Philosophy – Memoir – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Measure What Matters",
    Author: "John Doerr",
    Genre: "Management",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Meditations",
    Author: "Marcus Aurelius",
    Genre: "Philosophy – Classic",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Mindfullness",
    Author: "Mark G. Williams, Danny Penman",
    Genre: "Psychology – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Mindset",
    Author: "Carol S. Dweck",
    Genre: "Psychology – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Mortality",
    Author: "Christopher Hitchens",
    Genre: "Philosophy – Memoir",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Narrative Economics",
    Author: "Robert J. Shiller",
    Genre: "Economics – Memetics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Neuro-Discipline",
    Author: "Peter Hollins",
    Genre: "Self Help – Neuroscience",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Never Split the Difference",
    Author: "Chris Voss",
    Genre: "Business – Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Nicomachean Ethics",
    Author: "Aristotle",
    Genre: "Philosophy – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "On Liberty",
    Author: "John Stuart Mill",
    Genre: "Philosophy – Politics – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Only The Paranoid Survive",
    Author: "Andrew S. Grove",
    Genre: "Business – Management – Leadership",
    FavQuote:
      "If you're wrong, you will die. But most companies don't die because they are wrong; most die because they don't commit themselves. They fritter away their valuable resources while attempting to make a decision. The greatest danger is in standing still.",
    Why:
      "To understand how not to grow lax and complacent in business and life from Intel's legendary Andy Grove.",
    What:
      "• How to identify strategic inflection points, sources of 10x change. <br/>  • What to do about them.",
    Fav: "No"
  },
  {
    Title: "Phaedo",
    Author: "Plato",
    Genre: "Philosophy – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Positioning",
    Author: "Al Ries, Jack Trout",
    Genre: "Marketing",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Positive Intelligence",
    Author: "Shirzad Chamine",
    Genre: "Psychology – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Predictably Irrational",
    Author: "Dan Ariely",
    Genre: "Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Principles of Economics",
    Author: "Carl Menger",
    Genre: "Economics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Punished by Rewards",
    Author: "Alfie Kohn",
    Genre: "Psychology – Pedagogy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Radical Focus",
    Author: "Christina Wodtke",
    Genre: "Business – Management",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Rational Optimist",
    Author: "Matt Ridley",
    Genre: "Economics – History – Science – Business – Philosophy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Rework",
    Author: "Jason Fried, David Heinemeier Hansson",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Running Lean",
    Author: "Ash Maurya",
    Genre: "Business",
    FavQuote: "Life's too short to build something nobody wants.",
    Why: "To iterate from my plan A to a plan that works.",
    What:
      "• A roadmap for building a business. <br/> • How to document my plan A effectively. <br/> • How to identify the riskiest parts of my plan. <br/> • How to systematically test my plan.",
    Fav: "Yes"
  },
  {
    Title: "Sapiens",
    Author: "Yuval Noah Harari",
    Genre: "History – Anthropology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Scaling Lean",
    Author: "Ash Maurya",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Scramble",
    Author: "Marty Neumeier",
    Genre: "Business – Fiction",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Sentimental Education",
    Author: "Gustave Flaubert",
    Genre: "Fiction – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Shape Up",
    Author: "Ryan Singer",
    Genre: "Business – Management – Design",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Soumission",
    Author: "Michel Houellebecq",
    Genre: "Fiction",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Sprint",
    Author: "Jake Knapp, John Zeratsky, Brad Kowitz",
    Genre: "Business – Design",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Start with Why",
    Author: "Simon Sineck",
    Genre: "Business – Leadership",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Steal like an artist",
    Author: "Austin Kleon",
    Genre: "Art",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Superforecasting",
    Author: "Philip E. Tetlock, Dan Gardner",
    Genre: "Business – Science",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Talent is Overrated",
    Author: "Geoff Colvin",
    Genre: "Business – Psychology – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Talking to Strangers",
    Author: "Malcolm Gladwell",
    Genre: "Psychology – Sociology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The 12 Rules for Life",
    Author: "Jordan B. Peterson",
    Genre: "Psychology – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The 22 Immutable Laws of Branding",
    Author: "Al Ries, Laura Ries",
    Genre: "Business – Branding",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "The 22 Imutable Laws of Marketing",
    Author: "Al Ries, Jack Trout",
    Genre: "Marketing",
    FavQuote: "Marketing is a battle of perceptions, not products.",
    Why:
      "From the legendary pair that pioneered the concept of positioning, I wanted to understand the rules of marketing.",
    What:
      "• Thinking in terms of category domination. <br/> • The importance of money. <br/> • The dynamics of perception.",
    Fav: "Yes"
  },
  {
    Title: "The 48 Laws of Power",
    Author: "Robert Greene",
    Genre: "History – Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Achievement Habit",
    Author: "Bernard Roth",
    Genre: "Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The adventures of Tom Sawyer",
    Author: "Mark Twain",
    Genre: "Classic – Fiction – Comedy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Algebra of Hapiness",
    Author: "Scott Galloway",
    Genre: "Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Art of Innovation",
    Author: "Tom Kelley, Jonathan Littman",
    Genre: "Business – Design",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Art of Literature and the Art of Controversy",
    Author: "Arthur Schopenhauer",
    Genre: "Philosophy – Essays",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "The Art of the Start",
    Author: "Guy Kawasaki",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Bitcoin Standard",
    Author: "Saifedean Ammous",
    Genre: "Economics – Finance",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Brain",
    Author: "David Eagleman",
    Genre: "Neuroscience",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Chimp Paradox",
    Author: "Steve Peters",
    Genre: "Psychology – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Coddling of the American Mind",
    Author: "Jonathan Haidt, Greg Lukianoff",
    Genre: "Psychology – Politics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Design of Everyday Things",
    Author: "Donald A. Norman",
    Genre: "Design",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Etymologicon",
    Author: "Mark Forsyth",
    Genre: "Linguistics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Evolution of Everything",
    Author: "Matt Ridley",
    Genre: "Science – History – Philosophy – Economics – Biology – Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "The Examined Life",
    Author: "Stephen Grosz",
    Genre: "Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Fatal Conceit",
    Author: "Friedrich A. Hayek",
    Genre: "Economics – Politics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "The Federalist Papers",
    Author: "Alexander Hamilton, James Madison, John Jay, Philo-Publius",
    Genre: "History – Politics – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Four",
    Author: "Scott Galloway",
    Genre: "Business – Technology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Gay Science",
    Author: "Friedrich Nietzsche",
    Genre: "Philosophy – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Goal",
    Author: "Eliyahu M. Goldratt",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Happiness Hypothesis",
    Author: "Jonathan Haidt",
    Genre: "Psychology – Philosophy",
    FavQuote:
      "Love and work are to people what water and sunshine are to plants.",
    Why:
      "From my favorite contemporary intellectual, I wanted to discover the meaning of life.",
    What:
      "• The algebra of happiness <br/> • The many fallacies in popular belief concerning happiness and  <br/> • The importance of cognitive behavioural therapy and mediation.",
    Fav: "Yes"
  },
  {
    Title: "The Hard Thing About Hard Things",
    Author: "Ben Horowitz",
    Genre: "Business – Leadership",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Infinite Game",
    Author: "Simon Sinek",
    Genre: "Business – Leadership",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Innovator's Solution",
    Author: "Clayton M. Christensen, Michael E. Raynor",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Law",
    Author: "Frédéric Bastiat",
    Genre: "Politics – Philosophy – Economics – Law",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Lean Startup",
    Author: "Eric Ries",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Long Tail",
    Author: "Chris Anderson",
    Genre: "Business – Economics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "The Mom Test",
    Author: "Rob Fitzpatrick",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Obstacle Is The Way",
    Author: "Ryan Holiday",
    Genre: "Philosophy – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Origins of Totalitarianism",
    Author: "Hannah Arendt",
    Genre: "History – Philosophy – Politics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Republic",
    Author: "Plato",
    Genre: "Philosophy – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Righteous Mind",
    Author: "Jonathan Haidt",
    Genre: "Psychology – Politics – Philosophy – Ethics",
    FavQuote:
      "If you think that moral reasoning is something we do to figure out the truth, you’ll be constantly frustrated by how foolish, biased, and illogical people become when they disagree with you.",
    Why: "To discover why good people have bad politics and religions.",
    What:
      "• That morality is like culinary taste, completely arbitrary. <br/> • Understood how some dedicated mental modules act as taste receptors for morality (moral foundations theory). <br/> • How we evolved this way.",
    Fav: "Yes"
  },
  {
    Title: "The School of Life",
    Author: "Alain de Botton",
    Genre: "Philosophy – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Selfish Gene",
    Author: "Richard Dawkins",
    Genre: "Biology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Sense of Style",
    Author: "Steven Pinker",
    Genre: "Writing – Linguistics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "The Start-Up of You",
    Author: "Reid Hoffman, Ben Casnocha",
    Genre: "Business – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Stranger",
    Author: "Albert Camus",
    Genre: "Classics – Fiction – Philosophy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Structure of Sciencific Revolutions",
    Author: "Thomas S. Kuhn",
    Genre: "Science – Philosophy",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Stuff of Thought",
    Author: "Steven Pinker",
    Genre: "Semiotics – Linguistics – Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Ten Faces of Innovation",
    Author: "Tom Kelley, Jonathan Littman",
    Genre: "Business – Design",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "The Unfair Advantage",
    Author: "Ash Ali, Hasan Kubba",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The War of Art",
    Author: "Steven Pressfield",
    Genre: "Self Help – Art",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "The Win Without Pitching Manifesto",
    Author: "Blair Enns",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Thinking in Systems",
    Author: "Donella H. Meadows",
    Genre: "Systems Theory",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Thinking, Fast and Slow",
    Author: "Daniel Kahneman",
    Genre: "Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "This is Marketing",
    Author: "Seth Godin",
    Genre: "Marketing",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Thomas Paine's Rights of Men",
    Author: "Christopher Hitchens",
    Genre: "PHILOSOPHY – POLITICS – HISTORY – biography",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Traction",
    Author: "Gino Wickman",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Turning Pro",
    Author: "Steven Pressfield",
    Genre: "Business – Self Help",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Ulysees",
    Author: "James Joyce",
    Genre: "Classics – Fiction",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Wealth of Nations",
    Author: "Adam Smith",
    Genre: "Economics – Philosophy – Classics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "What I Wish I Knew When I Was 20",
    Author: "Tina Seelig",
    Genre: "Self Help – Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "What You Do Is Who You Are",
    Author: "Ben Horowitz",
    Genre: "Business – Culture",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Why Orwell Matters",
    Author: "Christopher Hitchens",
    Genre: "Biography – Politics",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Why We Do What We Do",
    Author: "Edward L. Deci, Richard Flaste",
    Genre: "Psychology",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Working in Public",
    Author: "Nadia Eghbal",
    Genre: "Technology – Economics – Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Writing Tools",
    Author: "Roy Peter Clark",
    Genre: "Writing",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "Yes"
  },
  {
    Title: "Writing, Rhetoric, and the Art of Persuasion",
    Author: "Michael D.C. Drout",
    Genre: "Linguistics – Writing",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Zag",
    Author: "Marty Neumeier",
    Genre: "Business – Design",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Zero to One",
    Author: "Peter Thiel, Blake Masters",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  },
  {
    Title: "Weird Ideas That Work",
    Author: "Robert I. Sutton",
    Genre: "Business",
    FavQuote: "",
    Why: "",
    What: "",
    Fav: "No"
  }
];

export default bookData;
