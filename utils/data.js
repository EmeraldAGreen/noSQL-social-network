const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];

//   const emails = [
//     'DecisionTracker@email.com',
//     'FindMyPhone@email.com',
//     'Learn-Piano@email.com',
//     'Starbase_Defender@email.com',
//     'Tower1Defense@email.com',
//     'Monopoly0Money-Manager@email.com',
//     'Movie00trailers@email.com',
//     'Hello9world@email.com',
//     'Super-Social1MediaApp@email.com',
//     'Take-Notes@email.com',
//     'Messages@email.com',
//     'Email@email.com',
//     'Compass@email.com',
//     'Firefox@email.com',
//     'Runningapp@email.com',
//     'Cookingapp@email.com',
//     'Poker@email.com',
//     'Deliveries@email.com',];
  
//   const thoughtUsernames = [
//     'Decision Tracker',
//     'Find My Phone',
//     'Learn Piano',
//     'Starbase Defender',
//     'Tower Defense',
//     'Monopoly Money Manager',
//     'Movie trailers',
//     'Hello world',
//     'Super Social Media App',
//     'Take Notes',
//     'Messages',
//     'Email',
//     'Compass',
//     'Firefox',
//     'Running app',
//     'Cooking app',
//     'Poker',
//     'Deliveries',
//   ];

  const thoughtTexts = [
    'Change your thoughts and you change your world.',
    'We are a product of our thoughts.',
    'Thoughts have energy. Make sure your thoughts are positive and powerful',
    'Just think of happy thoughts and you’ll fly.',
    'Thoughts become things.',
    'Positive thoughts generate positive feelings and attract positive life experiences.',
    'Think happy thoughts.',
    'Let your performance do the thinking',
    'Overthinking is the biggest cause of unhappiness.',
    'The most courageous act is still to think for yourself. Aloud.',
    'But if thought corrupts language, language can also corrupt thought.',
    'We think too much and feel too little.',
    'How frail the human heart must be―a mirrored pool of thought.',
    'As long as she thinks of a man, nobody objects to a woman thinking',
    'Did you ever stop to think, and forget to start again?',
    'Doubt is not a pleasant state of mind, but certainty is absurd',
    'I am not what I think. I am thinking what I think.',
    'I’m against fashionable thinking',
  ];
  
  const possibleReactions = [
    'Cool thought!',
    'Lame!',
    'That is boring.',
    'What?',
    'Go back to the drawing board.',
    'Try again later.',
    'You bet!',
    'Me too!',
    'Why did not you tell me sooner?',
    'That is so exciting!',
    'Who said that?',
    'Interesting point!',
    'So that is what you really think.',
    'Great minds think alike.',
    'Wow!'
  ];
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

    // Get random email
// const getRandomEmail = () =>
//     `${getRandomArrItem(emails)} ${getRandomArrItem(emails)}`;

  // Function to generate random Thoughts that we can add to the database. Includes Reaction tags.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtTexts),
        username: getRandomName(),
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the tags that will be added to each Thought
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts};
  