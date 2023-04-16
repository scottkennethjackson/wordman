const categories = [
    [
        "Abseiling",
        "Aerobics",
        "Air Hockey",
        "American Football",
        "Archery",
        "Arm Wrestling",
        "Athletics",
        "Axe Throwing",
        "Backgammon",
        "Backstroke",
        "Badminton",
        "Ballet",
        "BASE Jumping",
        "Baseball",
        "Basketball",
        "Beach Volleyball",
        "Beatboxing",
        "Beer Pong",
        "Billiards",
        "Bobsledding",
        "Bouldering",
        "Boules",
        "Bowling",
        "Boxing",
        "Breakdancing",
        "Breaststroke",
        "British Bulldog",
        "Bullfighting",
        "Bungee Jumping",
        "Caber Toss",
        "Camping",
        "Canoeing",
        "Checkers",
        "Cheerleading",
        "Chess",
        "Clay Pigeon Shooting",
        "Cliff Diving",
        "Climbing",
        "Cornhole",
        "Cribbage",
        "Cricket",
        "Croquet",
        "Cross Country",
        "CrossFit",
        "Crossword",
        "Curling",
        "Cycling",
        "Dancing",
        "Darts",
        "Debating",
        "Decathlon",
        "Demolition Derby",
        "Disc Golf",
        "Discus",
        "Diving",
        "Dodgeball",
        "Dominoes",
        "Drag Racing",
        "Draughts",
        "Dressage",
        "Fencing",
        "Field Hockey",
        "Figure Skating",
        "Fishing",
        "Football",
        "Four Square",
        "Freediving",
        "Freerunning",
        "Frisbee",
        "Golf",
        "Gymnastics",
        "Hammer Throw",
        "Handball",
        "Hang Gliding",
        "Heptathlon",
        "Hide and Seek",
        "High Jump",
        "Highland Games",
        "Hiking",
        "Hockey",
        "Horse Racing",
        "Horseshoe",
        "Hunting",
        "Hurdles",
        "Hurling",
        "Ice Hockey",
        "Jai Alai",
        "Javelin",
        "Jousting",
        "Judo",
        "Juggling",
        "Jujutsu",
        "Jumping",
        "Karate",
        "Kayaking",
        "Kickball",
        "Kickboxing",
        "Kitesurfing",
        "Kung Fu",
        "Lacrosse",
        "Lawn Bowls",
        "Lawn Darts",
        "Long Jump",
        "Mahjong",
        "Marathon",
        "Marching Band",
        "Marco Polo",
        "Miniature Golf",
        "Mixed Martial Arts",
        "Monster Truck",
        "Mountain Biking",
        "Mountaineering",
        "Netball",
        "Orienteering",
        "Paintball",
        "Parachuting",
        "Paragliding",
        "Parasailing",
        "Parkour",
        "Pentathlon",
        "Ping Pong",
        "Pitch and Putt",
        "Poker",
        "Pole Dancing",
        "Pole Vault",
        "Polo",
        "Pool",
        "Quidditch",
        "Racquetball",
        "Rafting",
        "Rock Climbing",
        "Rodeo",
        "Roller Derby",
        "Roller Skating",
        "Rounders",
        "Rowing",
        "Rugby League",
        "Rugby Union",
        "Running",
        "Sailing",
        "Scootering",
        "Scuba Diving",
        "Shooting",
        "Shot Put",
        "Show Jumping",
        "Shuffleboard",
        "Singing",
        "Skateboarding",
        "Skeleton",
        "Skiing",
        "Skittles",
        "Slalom",
        "Snooker",
        "Snorkelling",
        "Snowboarding",
        "Soccer",
        "Softball",
        "Speed Skating",
        "Sprinting",
        "Squash",
        "Steeplechase",
        "Stickball",
        "Street Luge",
        "Sudoku",
        "Sumo Wrestling",
        "Surfing",
        "Sword Fighting",
        "Synchronized Swimming",
        "Table Tennis",
        "Taekwondo",
        "Tennis",
        "Thumb Wrestling",
        "Tobogganing",
        "Track and Field",
        "Trampolining",
        "Trapeze",
        "Triathlon",
        "Triple Jump",
        "Ultramarathon",
        "Unicycling",
        "Videogames",
        "Volleyball",
        "Wakeboarding",
        "Walking",
        "Water Polo",
        "Weightlifting",
        "White Water Rafting",
        "Windsurfing",
        "Wrestling"
    ],

    [
        "Aardvark",
        "Albatross",
        "Alligator",
        "Alpaca",
        "Ant",
        "Anteater",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chough",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant",
        "Coyote",
        "Crab",
        "Crane",
        "Crocodile",
        "Crow",
        "Curlew",
        "Deer",
        "Dinosaur",
        "Dog",
        "Dogfish",
        "Dolphin",
        "Dotterel",
        "Dove",
        "Dragonfly",
        "Duck",
        "Dugong",
        "Dunlin",
        "Eagle",
        "Echidna",
        "Eel",
        "Eland",
        "Elephant",
        "Elk",
        "Emu",
        "Falcon",
        "Ferret",
        "Finch",
        "Fish",
        "Flamingo",
        "Fly",
        "Fox",
        "Frog",
        "Gaur",
        "Gazelle",
        "Gerbil",
        "Giraffe",
        "Gnat",
        "Gnu",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Goshawk",
        "Grasshopper",
        "Grouse",
        "Guanaco",
        "Gull",
        "Hamster",
        "Hare",
        "Hawk",
        "Hedgehog",
        "Heron",
        "Herring",
        "Hippopotamus",
        "Hornet",
        "Horse",
        "Human",
        "Hummingbird",
        "Hyena",
        "Ibex",
        "Ibis",
        "Jackal",
        "Jaguar",
        "Jay",
        "Jellyfish",
        "Kangaroo",
        "Kingfisher",
        "Koala",
        "Kookabura",
        "Kouprey",
        "Kudu",
        "Lapwing",
        "Lark",
        "Lemur",
        "Leopard",
        "Lion",
        "Llama",
        "Lobster",
        "Locust",
        "Loris",
        "Louse",
        "Lyrebird",
        "Magpie",
        "Mallard",
        "Manatee",
        "Mandrill",
        "Mantis",
        "Marten",
        "Meerkat",
        "Mink",
        "Mole",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mosquito",
        "Mouse",
        "Mule",
        "Narwhal",
        "Newt",
        "Nightingale",
        "Octopus",
        "Okapi",
        "Opossum",
        "Oryx",
        "Ostrich",
        "Otter",
        "Owl",
        "Oyster",
        "Panther",
        "Parrot",
        "Partridge",
        "Peafowl",
        "Pelican",
        "Penguin",
        "Pheasant",
        "Pig",
        "Pigeon",
        "Pony",
        "Porcupine",
        "Porpoise",
        "Quail",
        "Quelea",
        "Quetzal",
        "Rabbit",
        "Raccoon",
        "Rail",
        "Ram",
        "Rat",
        "Raven",
        "Red Deer",
        "Red Panda",
        "Reindeer",
        "Rhinoceros",
        "Rook",
        "Salamander",
        "Salmon",
        "Sand Dollar",
        "Sandpiper",
        "Sardine",
        "Scorpion",
        "Seahorse",
        "Seal",
        "Shark",
        "Sheep",
        "Shrew",
        "Skunk",
        "Snail",
        "Snake",
        "Sparrow",
        "Spider",
        "Spoonbill",
        "Squid",
        "Squirrel",
        "Starling",
        "Stingray",
        "Stinkbug",
        "Stork",
        "Swallow",
        "Swan",
        "Tapir",
        "Tarsier",
        "Termite",
        "Tiger",
        "Toad",
        "Trout",
        "Turkey",
        "Turtle",
        "Viper",
        "Vulture",
        "Wallaby",
        "Walrus",
        "Wasp",
        "Weasel",
        "Whale",
        "Wildcat",
        "Wolf",
        "Wolverine",
        "Wombat",
        "Woodcock",
        "Woodpecker",
        "Worm",
        "Wren",
        "Yak",
        "Zebra"
    ],

    [
        "Alice Blue",
        "Antique White",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "Blanched Almond",
        "Blue",
        "Blue Violet",
        "Brown",
        "Burlywood",
        "Cadet Blue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "Cornflower Blue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "Dark Blue",
        "Dark Cyan",
        "Dark Goldenrod",
        "Dark Grey",
        "Dark Green",
        "Dark Khaki",
        "Dark Magenta",
        "Dark Olive Green",
        "Dark Orange",
        "Dark Orchid",
        "Dark Red",
        "Dark Salmon",
        "Dark Sea Green",
        "Dark Slate Blue",
        "Dark Slate Grey",
        "Dark Turquoise",
        "Dark Violet",
        "Deep Pink",
        "Deep Sky Blue",
        "Dim Grey",
        "Dodger Blue",
        "Fire Brick",
        "Floral White",
        "Forest Green",
        "Fuchsia",
        "Gainsboro",
        "Ghost White",
        "Gold",
        "Goldenrod",
        "Grey",
        "Green",
        "Green Yellow",
        "Honeydew",
        "Hot Pink",
        "Indian Red",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "Lavender Blush",
        "Lawn Green",
        "Lemon Chiffon",
        "Light Blue",
        "Light Coral",
        "Light Cyan",
        "Light Goldenrod Yellow",
        "LightGrey",
        "Light Green",
        "Light Pink",
        "Light Salmon",
        "Light Sea Green",
        "Light Sky Blue",
        "Light Slate Grey",
        "Light Steel Blue",
        "Light Yellow",
        "Lime",
        "Lime Green",
        "Linen",
        "Magenta",
        "Maroon",
        "Medium Aqua Marine",
        "Medium Blue",
        "Medium Orchid",
        "Medium Purple",
        "Medium Sea Green",
        "Medium Slate Blue",
        "Medium Spring Green",
        "Medium Turquoise",
        "Medium Violet Red",
        "Midnight Blue",
        "Mint Cream",
        "Misty Rose",
        "Moccasin",
        "Navajo White",
        "Navy",
        "Old Lace",
        "Olive",
        "Olive Drab",
        "Orange",
        "Orange Red",
        "Orchid",
        "Pale Goldenrod",
        "Pale Green",
        "Pale Turquoise",
        "Pale Violet Red",
        "Papaya Whip",
        "Peach Puff",
        "Peru",
        "Pink",
        "Plum",
        "Powder Blue",
        "Purple",
        "Rebecca Purple",
        "Red",
        "Rosy Brown",
        "Royal Blue",
        "Saddle Brown",
        "Salmon",
        "Sandy Brown",
        "Sea Green",
        "Seashell",
        "Sienna",
        "Silver",
        "Sky Blue",
        "Slate Blue",
        "Slate Grey",
        "Snow",
        "Spring Green",
        "Steel Blue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Transparent",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "Whitesmoke",
        "Yellow",
        "Yellow Green"
    ],

    [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Antarctica",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Botswana",
        "Brazil",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guyana",
        "Haiti",
        "Vatican City",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "North Korea",
        "South Korea",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Lucia",
        "Samoa",
        "San Marino",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ],

    [
        "A Beautiful Mind",
        "A Clockwork Orange",
        "A History of Violence",
        "A Prophet",
        "A Separation",
        "A Serious Man",
        "A Single Man",
        "A Streetcar Named Desire",
        "A Touch of Sin",
        "Ali",
        "All About Eve",
        "All About My Mother",
        "Amelie",
        "American Beauty",
        "American Gangster",
        "Amour",
        "Anchorman",
        "Andrei Rublev",
        "Annie Hall",
        "Another Round",
        "Apocalypse Now",
        "Argo",
        "Atonement",
        "Avatar",
        "Babel",
        "Bacurau",
        "Bad Education",
        "Battleship Potemkin",
        "Beauty and the Beast",
        "Ben Hur",
        "Bicycle Thieves",
        "Big Fish",
        "Birdman",
        "Biutiful",
        "Black Book",
        "Black Panther",
        "Black Swan",
        "Blackkklansman",
        "Blade Runner",
        "Blue Valentine",
        "Blue Velvet",
        "Bohemian Rhapsody",
        "Bonnie and Clyde",
        "Bowling for Columbine",
        "Boyhood",
        "Bridesmaids",
        "Brokeback Mountain",
        "Cabaret",
        "Capote",
        "Carlos",
        "Carol",
        "Casablanca",
        "Casino Royale",
        "Chinatown",
        "Chungking Express",
        "Citizen Kane",
        "City of God",
        "Coco",
        "Cold War",
        "Control",
        "Crash",
        "Crouching Tiger Hidden Dragon",
        "Dallas Buyers Club",
        "Dead Ringers",
        "Death in Venice",
        "Deliverance",
        "Django Unchained",
        "Doctor Zhivago",
        "Dogville",
        "Drive",
        "Duck Soup",
        "Due Date",
        "Dunkirk",
        "Eastern Promises",
        "Easy Rider",
        "Elephant",
        "Elevator to the Gallows",
        "Ex Machina",
        "Face Off",
        "Faces Places",
        "Fanfan the Tulip",
        "Fanny and Alexander",
        "Fantasia",
        "Far From Heaven",
        "Finding Nemo",
        "Fitzcarraldo",
        "Forrest Gump",
        "Frozen",
        "Get Out",
        "Giant",
        "Goldfinger",
        "Gomorrah",
        "Gone With the Wind",
        "Good Bye Lenin",
        "Gran Torino",
        "Grand Illusion",
        "Gravity",
        "Grizzly Man",
        "Happy Go Lucky",
        "Head On",
        "Her",
        "Hidden",
        "High Noon",
        "Holy Motors",
        "Honey",
        "Hotel Rwanda",
        "Hugo",
        "I Tonya",
        "Ice Age",
        "Ida",
        "In Bruges",
        "In Jackson Heights",
        "In This World",
        "Inglourious Basterds",
        "Inside Llewyn Davis",
        "Iron Man",
        "Jaws",
        "John Wick",
        "Jojo Rabbit",
        "Joker",
        "Juno",
        "Kill Bill",
        "King Kong",
        "LA Confidential",
        "La Dolce Vita",
        "La La Land",
        "La Strada",
        "Lady Bird",
        "Lawrence of Arabia",
        "Le Havre",
        "Les Miserables",
        "Life of Pi",
        "Little Miss Sunshine",
        "Little Women",
        "Lost in Translation",
        "Mad Max",
        "Magic Mike",
        "Magnolia",
        "Manchester by the Sea",
        "Mank",
        "Match Point",
        "Melancholia",
        "Metropolis",
        "Midnight Cowboy",
        "Midnight in Paris",
        "Midsommar",
        "Million Dollar Baby",
        "Miral",
        "Modern Times",
        "Mommy",
        "Moonlight",
        "Moulin Rouge",
        "Mulholland Drive",
        "Munich",
        "My Name Is Khan",
        "Never Rarely Sometimes Always",
        "Nomadland",
        "Nosferatu",
        "Notorious",
        "Nymphomaniac",
        "Okja",
        "Oldboy",
        "Only Lovers Left Alive",
        "Open Water",
        "Parasite",
        "Persepolis",
        "Phantom Thread",
        "Pierrot Le Fou",
        "Pirates of the Caribbean",
        "Precious",
        'Promising Young Woman',
        "Psycho",
        "Public Enemies",
        "Pulp Fiction",
        "Raging Bull",
        "Rashomon",
        "Rebel Without a Cause",
        "Revolutionary Road",
        "Roma",
        "Scarface",
        "Searching for Sugar Man",
        "Seven Samurai",
        "Sex and Lucia",
        "Shadow",
        "Shoplifters",
        "Sicario",
        "Sideways",
        "Silent Light",
        "Sin City",
        "Sin Nombre",
        "Slumdog Millionaire",
        "Some Like It Hot",
        "Soul",
        "Spider Man",
        "Spirited Away",
        "Spotlight",
        "Star Wars",
        "State of Play",
        "Sunset Boulevard",
        "Talk to Her",
        "Talladega Nights",
        "Taxi Driver",
        "Tenet",
        "The African Queen",
        "The Artist",
        "The Assassin",
        "The Avengers",
        "The Baader Meinhof Complex",
        "The Big Sleep",
        "The Blue Angel",
        "The Bourne Ultimatum",
        "The Celebration",
        "The Child",
        "The Constant Gardener",
        "The Darjeeling Limited",
        "The Dark Knight",
        "The Dark Knight Rises",
        "The Death of Stalin",
        "The Deer Hunter",
        "The Departed",
        "The Dreamers",
        "The Father",
        "The Fighter",
        "The Fourth Man",
        "The General",
        "The Godfather",
        "The Gold Rush",
        "The Graduate",
        "The Grand Budapest Hotel",
        "The Great Beauty",
        "The Hangover",
        "The Help",
        "The Hunger Games",
        "The Hurt Locker",
        "The Incredibles",
        "The Invisible Man",
        "The Lives of Others",
        "The Lobster",
        "The Master",
        "The Messenger",
        "The Others",
        "The Pianist",
        "The Queen",
        "The Reader",
        "The Revenant",
        'The Ring',
        "The Royal Tenenbaums",
        "The Searchers",
        "The Shape of Water",
        "The Social Network",
        "The Ten Commandments",
        "The Third Man",
        "The Tin Drum",
        "The Tree of Life",
        "The Wages of Fear",
        "The White Ribbon",
        "The Wild Bunch",
        "The Wild Goose Lake",
        "The Wind Rises",
        "The Wrestler",
        "There Will Be Blood",
        "Timbuktu",
        "To Kill a Mockingbird",
        "Toni Erdmann",
        "True Grit",
        "Turtles Can Fly",
        "Uncut Gems",
        "Up in the Air",
        "Vertigo",
        "Vicky Cristina Barcelona",
        "Walk the Line",
        "WALL E",
        "Waltz With Bashir",
        "Welcome to the Sticks",
        "Whiplash",
        "Wild Strawberries",
        "Wind River",
        "Y Tu Mama Tambien",
        "Yella",
        "Zero Dark Thirty",
        "Zodiac"
    ],

    [
        "Aaliyah",
        "Aerosmith",
        "Al Green",
        "Allman Brothers Band",
        "Animal Collective",
        "Aphex Twin",
        "Aretha Franklin",
        "Bat for Lashes",
        "Beastie Boys",
        "Beck",
        "Best Coast",
        "Beyonce",
        "Bikini Kill",
        "Billy Bragg",
        "Bjork",
        "Black Flag",
        "Black Lips",
        "Black Sabbath",
        "Blur",
        "Bo Diddley",
        "Bob Dylan",
        "Bob Marley",
        "Bon Iver",
        "Booker T",
        "Brian Jamestown Massacre",
        "Bruce Springsteen",
        "Buddy Holly",
        "Burial",
        "Carl Perkins",
        "Carlos Santana",
        "Chuck Berry",
        "Country Teasers",
        "Cream",
        "Curtis Mayfield",
        "David Bowie",
        "Deerhunter",
        "Depeche Mode",
        "Diana Ross",
        "Diplo",
        "Dirty Projectors",
        "DJ Rashad",
        "DJ Shadow",
        "Dr Dre",
        "Dusty Springfield",
        "Elton John",
        "Elvis Costello",
        "Elvis Presley",
        "Eminem",
        "Eric Clapton",
        "Etta James",
        "Fall Out Boy",
        "Fats Domino",
        "Fleetwood Mac",
        "Flying Lotus",
        "Foals",
        "Frank Zappa",
        "Gram Parsons",
        "Grateful Dead",
        "Grimes",
        "Guns n Roses",
        "Hank Williams",
        "Happy Mondays",
        "Hole",
        "Howlin Wolf",
        "Iceage",
        "Jackie Wilson",
        "James Blake",
        "James Brown",
        "James Taylor",
        "Jamie xx",
        "Janis Joplin",
        "Jay Z",
        "Jerry Lee Lewis",
        "Jimi Hendrix",
        "John Lennon",
        "Johnny Cash",
        "Joni Mitchell",
        "Joy Division",
        "Kanye West",
        "Kate Bush",
        "Kraftwerk",
        "LCD Soundsystem",
        "Led Zeppelin",
        "Lee Scratch Perry",
        "Little Richard",
        "Louis Jordan",
        "Lynyrd Skynyrd",
        "Madonna",
        "Martha and the Vandellas",
        "Marvin Gaye",
        "Massive Attack",
        "Michael Jackson",
        "Miles Davis",
        "Muddy Waters",
        "My Bloody Valentine",
        "My Chemical Romance",
        "Nas",
        "Neil Young",
        "Neutral Milk Hotel",
        "New Order",
        "Nick Cave",
        "Nick Lowe",
        "Nile Rodgers and Chic",
        "Nine Inch Nails",
        "Nirvana",
        "Oneohtrix Point Never",
        "Otis Redding",
        "Parliament Funkadelic",
        "Patti Smith",
        "Pavement",
        "Pharrell Williams",
        "Phil Spector",
        "PJ Harvey",
        "Prince",
        "Prince and the Revolution",
        "Public Enemy",
        "Radiohead",
        "Ray Charles",
        "Richard Hawley",
        "Ricky Nelson",
        "Rilo Kiley",
        "Rolling Stones",
        "Roxy Music",
        "Roy Orbison",
        "Run DMC",
        "Sam Cooke",
        "Sex Pistols",
        "Simon and Garfunkel",
        "Simple Minds",
        "Slint",
        "Smokey Robinson",
        "Sonic Youth",
        "St Vincent",
        "Stevie Wonder",
        "Sufjan Stevens",
        "T Rex",
        "Talk Talk",
        "Tame Impala",
        "TV on the Radio",
        "Taylor Swift",
        "Television",
        "The Band",
        "The Beach Boys",
        "The Beatles",
        "The Breeders",
        "The Byrds",
        "The Cars",
        "The Chills",
        "The Clash",
        "The Cure",
        "The Doors",
        "The Drifters",
        "The Eagles",
        "The Everly Brothers",
        "The Fall",
        "The Flaming Lips",
        "The Four Tops",
        "The Gun Gun Club",
        "The Kinks",
        "The Knife",
        "The National",
        "The Police",
        "The Ramones",
        "The Shirelles",
        "The Slits",
        "The Smiths",
        "The Stone Roses",
        "The Stooges",
        "The Strokes",
        "The Temptations",
        "The Triffids",
        "The Velvet Underground",
        "The Wedding Present",
        "The White Stripes",
        "The Who",
        "The xx",
        "The Yardbirds",
        "The Zombies",
        "Tina Turner",
        "Tupac Shakur",
        "Vampire Weekend",
        "Van Morrison",
        "Wiley",
        "Wu Tang Clan",
        "Yeah Yeah Yeahs",
        "ZZ Top"
    ]
];