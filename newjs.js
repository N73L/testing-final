const createElement = (tag, className, textContent = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.innerHTML = textContent; // Supports bold text
  return element;
};

// DOM elements
const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Message handling
const addMessage = (message, className) => {
  const messageContainer = createElement('div', `chat-message ${className}`);

  if (Array.isArray(message)) {
      message.forEach(line => {
          const lineElement = createElement('p', '', line);
          messageContainer.appendChild(lineElement);
      });
  } else {
      messageContainer.innerHTML = message; // Supports bold text for single-line messages
  }

  chatOutput.appendChild(messageContainer);
  chatOutput.scrollTop = chatOutput.scrollHeight;
};

const displayIntroMessage = () => {
  addMessage("Hello! I am AiderBot. How can I assist you today?", 'bot-message');
};

// Predefined responses with bold words
const responses = {
  "hello": "Hi, how may I help you today?",
  "hi": "Hello, how may I help you today?",

  "i need help": "I am here to help. Please tell me what you are feeling right now.",
  "help me please": "I am here to help. Please tell me what you are feeling right now.",
  "help me": "I am here to help. Please tell me what you are feeling right now.",
  "help": "I am here to help. Please tell me what you are feeling right now.",
  
  "i'm not feeling good": "Can you tell me what you are feeling right now?", 
  "i don't feel well": "Can you tell me what you are feeling right now?",
  
  "stuffy nose": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],
  "i have a stuffy nose": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],
  "i have a runny nose": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],
  "my nose is stuffy": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],
  "my nose is blocked": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],
  "i have a clogged nose": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],
  "my nose is clogged": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],
  "my nose is full": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],
  "runny nose": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve a runny or stuffy nose:",
      "• <b>Saline Nasal Spray:</b> Saline nasal spray helps to thin and loosen mucus, making it easier to drain.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help thin mucus and soothe irritated nasal passages.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen thick mucus and soothe irritated nasal passages.",
      "• <b>Steam Inhalation:</b> Inhaling steam from a hot shower or a bowl of hot water can help to loosen mucus and open up congested nasal passages.",
      "• <b>Rest:</b> Getting plenty of rest can help your body fight off infection and recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If symptoms persist, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment."
  ],

  "dizziness": [
    "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your dizziness:  ",
    "• <b>Drink water.</b> Try drinking water and stay hydrated. ",
    "• <b>Ginger tea.</b> To make ginger tea, peel and grate ginger root and add it to hot water. People can add lemon, honey, or cinnamon to adjust the taste.",
    "• <b>Eat Vitamin C.</b> Eat foods rich in vitamin C such as orange and strawberry.", 
    "• <b>Cold compress.</b> You can apply a cool rag to the affected area, or even take a cold shower or bath. You can also fill a bag with ice and apply it to the rash until the itching or discomfort subsides. Give your skin a break and only leave the ice pack on for 15-20 minutes at a time, and only over a cloth, not directly on your skin, to avoid causing a burn. ",
    "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
    "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",  
  ],
  "i feel dizzy": [
    "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your dizziness:  ",
    "• <b>Drink water.</b> Try drinking water and stay hydrated. ",
    "• <b>Ginger tea.</b> To make ginger tea, peel and grate ginger root and add it to hot water. People can add lemon, honey, or cinnamon to adjust the taste.",
    "• <b>Eat Vitamin C.</b> Eat foods rich in vitamin C such as orange and strawberry.", 
    "• <b>Cold compress.</b> You can apply a cool rag to the affected area, or even take a cold shower or bath. You can also fill a bag with ice and apply it to the rash until the itching or discomfort subsides. Give your skin a break and only leave the ice pack on for 15-20 minutes at a time, and only over a cloth, not directly on your skin, to avoid causing a burn. ",
    "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
    "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",  
  ],
  "i am dizzy": [
    "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your dizziness:  ",
    "• <b>Drink water.</b> Try drinking water and stay hydrated. ",
    "• <b>Ginger tea.</b> To make ginger tea, peel and grate ginger root and add it to hot water. People can add lemon, honey, or cinnamon to adjust the taste.",
    "• <b>Eat Vitamin C.</b> Eat foods rich in vitamin C such as orange and strawberry.", 
    "• <b>Cold compress.</b> You can apply a cool rag to the affected area, or even take a cold shower or bath. You can also fill a bag with ice and apply it to the rash until the itching or discomfort subsides. Give your skin a break and only leave the ice pack on for 15-20 minutes at a time, and only over a cloth, not directly on your skin, to avoid causing a burn. ",
    "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
    "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",  
  ],

"nausea": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your nausea: ",
      "• <b>Hydration.</b> Regularly drink clear water such as water, ginger ale and herbal tea. You can also consume drinks that has electrolytes which replenish the water and ion your body needs (ex: Pocari Sweat).",
      "• <b>Eat light foods.</b> Try eating foods that are bland and easy to swallow such as soup broth and crackers. In addition, try to eat smaller meals often, rather than taking heavy meals all at once.",
      "• <b>Avoid triggers.</b> Avoid strong and smelly odors that can trigger your nausea. Additionally, try to refrain from doing activities that also trigger your nausea.",
      "• <b>Take over-the-counter medicine.</b> Try taking medicine that are anti-emetic/anti-vertigo such as bonamine, ramec forte and motilium. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
"i feel like vomiting": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your nausea: ",
      "• <b>Hydration.</b> Regularly drink clear water such as water, ginger ale and herbal tea. You can also consume drinks that has electrolytes which replenish the water and ion your body needs (ex: Pocari Sweat).",
      "• <b>Eat light foods.</b> Try eating foods that are bland and easy to swallow such as soup broth and crackers. In addition, try to eat smaller meals often, rather than taking heavy meals all at once.",
      "• <b>Avoid triggers.</b> Avoid strong and smelly odors that can trigger your nausea. Additionally, try to refrain from doing activities that also trigger your nausea.",
      "• <b>Take over-the-counter medicine.</b> Try taking medicine that are anti-emetic/anti-vertigo such as bonamine, ramec forte and motilium. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i feel nauseous": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your nausea: ",
      "• <b>Hydration.</b> Regularly drink clear water such as water, ginger ale and herbal tea. You can also consume drinks that has electrolytes which replenish the water and ion your body needs (ex: Pocari Sweat).",
      "• <b>Eat light foods.</b> Try eating foods that are bland and easy to swallow such as soup broth and crackers. In addition, try to eat smaller meals often, rather than taking heavy meals all at once.",
      "• <b>Avoid triggers.</b> Avoid strong and smelly odors that can trigger your nausea. Additionally, try to refrain from doing activities that also trigger your nausea.",
      "• <b>Take over-the-counter medicine.</b> Try taking medicine that are anti-emetic/anti-vertigo such as bonamine, ramec forte and motilium. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i feel like i could vomit": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your nausea: ",
      "• <b>Hydration.</b> Regularly drink clear water such as water, ginger ale and herbal tea. You can also consume drinks that has electrolytes which replenish the water and ion your body needs (ex: Pocari Sweat).",
      "• <b>Eat light foods.</b> Try eating foods that are bland and easy to swallow such as soup broth and crackers. In addition, try to eat smaller meals often, rather than taking heavy meals all at once.",
      "• <b>Avoid triggers.</b> Avoid strong and smelly odors that can trigger your nausea. Additionally, try to refrain from doing activities that also trigger your nausea.",
      "• <b>Take over-the-counter medicine.</b> Try taking medicine that are anti-emetic/anti-vertigo such as bonamine, ramec forte and motilium. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i feel like i could puking": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your nausea: ",
      "• <b>Hydration.</b> Regularly drink clear water such as water, ginger ale and herbal tea. You can also consume drinks that has electrolytes which replenish the water and ion your body needs (ex: Pocari Sweat).",
      "• <b>Eat light foods.</b> Try eating foods that are bland and easy to swallow such as soup broth and crackers. In addition, try to eat smaller meals often, rather than taking heavy meals all at once.",
      "• <b>Avoid triggers.</b> Avoid strong and smelly odors that can trigger your nausea. Additionally, try to refrain from doing activities that also trigger your nausea.",
      "• <b>Take over-the-counter medicine.</b> Try taking medicine that are anti-emetic/anti-vertigo such as bonamine, ramec forte and motilium. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

  "headache": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your headache:",
      "• <b>Hydration:</b> Dehydration is a trigger for headaches. Drink plenty of water throughout the day.",
      "• <b>Rest:</b> Lie down in a quiet, dark room to reduce sensory stimulation. ",
      "• <b>Cold Compress:</b> Apply a cold compress to your forehead or neck for 15-20 minutes at a time. ",
      "• <b>Warm Compress:</b> For tension headaches, a warm compress applied to the neck and shoulders may help relax muscles.",
      "• <b>Massage:</b> Gently massage your temples, neck, and shoulders. ",
      "• <b>Caffeine:</b> In small amounts, caffeine can help relieve headache pain, especially for migraine headaches. ",
      "• <b>Ginger:</b> Some studies suggest that ginger may help relieve migraine pain. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "my head hurts": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your headache:",
      "• <b>Hydration:</b> Dehydration is a trigger for headaches. Drink plenty of water throughout the day.",
      "• <b>Rest:</b> Lie down in a quiet, dark room to reduce sensory stimulation. ",
      "• <b>Cold Compress:</b> Apply a cold compress to your forehead or neck for 15-20 minutes at a time. ",
      "• <b>Warm Compress:</b> For tension headaches, a warm compress applied to the neck and shoulders may help relax muscles.",
      "• <b>Massage:</b> Gently massage your temples, neck, and shoulders. ",
      "• <b>Caffeine:</b> In small amounts, caffeine can help relieve headache pain, especially for migraine headaches. ",
      "• <b>Ginger:</b> Some studies suggest that ginger may help relieve migraine pain. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a headache": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your headache:",
      "• <b>Hydration:</b> Dehydration is a trigger for headaches. Drink plenty of water throughout the day.",
      "• <b>Rest:</b> Lie down in a quiet, dark room to reduce sensory stimulation. ",
      "• <b>Cold Compress:</b> Apply a cold compress to your forehead or neck for 15-20 minutes at a time. ",
      "• <b>Warm Compress:</b> For tension headaches, a warm compress applied to the neck and shoulders may help relax muscles.",
      "• <b>Massage:</b> Gently massage your temples, neck, and shoulders. ",
      "• <b>Caffeine:</b> In small amounts, caffeine can help relieve headache pain, especially for migraine headaches. ",
      "• <b>Ginger:</b> Some studies suggest that ginger may help relieve migraine pain. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "my head is aching": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your headache:",
      "• <b>Hydration:</b> Dehydration is a trigger for headaches. Drink plenty of water throughout the day.",
      "• <b>Rest:</b> Lie down in a quiet, dark room to reduce sensory stimulation. ",
      "• <b>Cold Compress:</b> Apply a cold compress to your forehead or neck for 15-20 minutes at a time. ",
      "• <b>Warm Compress:</b> For tension headaches, a warm compress applied to the neck and shoulders may help relax muscles.",
      "• <b>Massage:</b> Gently massage your temples, neck, and shoulders. ",
      "• <b>Caffeine:</b> In small amounts, caffeine can help relieve headache pain, especially for migraine headaches. ",
      "• <b>Ginger:</b> Some studies suggest that ginger may help relieve migraine pain. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a painful headache": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your headache:",
      "• <b>Hydration:</b> Dehydration is a trigger for headaches. Drink plenty of water throughout the day.",
      "• <b>Rest:</b> Lie down in a quiet, dark room to reduce sensory stimulation. ",
      "• <b>Cold Compress:</b> Apply a cold compress to your forehead or neck for 15-20 minutes at a time. ",
      "• <b>Warm Compress:</b> For tension headaches, a warm compress applied to the neck and shoulders may help relax muscles.",
      "• <b>Massage:</b> Gently massage your temples, neck, and shoulders. ",
      "• <b>Caffeine:</b> In small amounts, caffeine can help relieve headache pain, especially for migraine headaches. ",
      "• <b>Ginger:</b> Some studies suggest that ginger may help relieve migraine pain. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "i have a stomach ache": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your stomach ache:",
      "• <b>Hydration.</b> It’s crucial to replace the water we lose to prevent dehydration. It is recommended that you regularly drink clear fluids to avoid electrolyte imbalances that halt digestion and cause constipation.",
      "• <b>Avoid trigger foods.</b> Eating certain foods that can worsen your stomach ache is certainly prohibited. Avoid spicy, smelly, fatty, acidic and sweet foods that are gas-producing — they can increase nausea, bloating, vomiting and/or diarrhea as well.",
      "• <b>Apply heat.</b> Try putting a heating pad or hot towel on your abdomen. The heat can help relax the muscles and relieve cramping. Taking a hot shower or bath with Epsom salts may also help.",
      "• <b>Take over-the-counter medicine.</b> It is recommended to take simple pain-relief medicines, antispasmodic medicines to ease spasms in the wall of the bowel, anti-flatulence medicines and antacids for heartburn or indigestion. You should not use aspirin or anti-inflammatory medicines that irritates stomach and cause bowel problems.",
      "• <b>Try the “BRAT” diet.</b> If the stomach pain is persistent, try sticking to the basics with the “BRAT” diet – that is, bananas, rice, applesauce and toast. These foods are low in fiber and high in binding, and none of them have salt or spices, which can aggravate the stomach more.",
      "• <b>Involve ginger on your meals.</b> Ginger is a natural anti-inflammatory and can be consumed in various forms – candy, capsules, or as tea – but fresh ginger root is best when looking to rid stomach pain.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "my stomach hurts": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your stomach ache:",
      "• <b>Hydration.</b> It’s crucial to replace the water we lose to prevent dehydration. It is recommended that you regularly drink clear fluids to avoid electrolyte imbalances that halt digestion and cause constipation.",
      "• <b>Avoid trigger foods.</b> Eating certain foods that can worsen your stomach ache is certainly prohibited. Avoid spicy, smelly, fatty, acidic and sweet foods that are gas-producing — they can increase nausea, bloating, vomiting and/or diarrhea as well.",
      "• <b>Apply heat.</b> Try putting a heating pad or hot towel on your abdomen. The heat can help relax the muscles and relieve cramping. Taking a hot shower or bath with Epsom salts may also help.",
      "• <b>Take over-the-counter medicine.</b> It is recommended to take simple pain-relief medicines, antispasmodic medicines to ease spasms in the wall of the bowel, anti-flatulence medicines and antacids for heartburn or indigestion. You should not use aspirin or anti-inflammatory medicines that irritates stomach and cause bowel problems.",
      "• <b>Try the “BRAT” diet.</b> If the stomach pain is persistent, try sticking to the basics with the “BRAT” diet – that is, bananas, rice, applesauce and toast. These foods are low in fiber and high in binding, and none of them have salt or spices, which can aggravate the stomach more.",
      "• <b>Involve ginger on your meals.</b> Ginger is a natural anti-inflammatory and can be consumed in various forms – candy, capsules, or as tea – but fresh ginger root is best when looking to rid stomach pain.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "my stomach aches": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your stomach ache:",
      "• <b>Hydration.</b> It’s crucial to replace the water we lose to prevent dehydration. It is recommended that you regularly drink clear fluids to avoid electrolyte imbalances that halt digestion and cause constipation.",
      "• <b>Avoid trigger foods.</b> Eating certain foods that can worsen your stomach ache is certainly prohibited. Avoid spicy, smelly, fatty, acidic and sweet foods that are gas-producing — they can increase nausea, bloating, vomiting and/or diarrhea as well.",
      "• <b>Apply heat.</b> Try putting a heating pad or hot towel on your abdomen. The heat can help relax the muscles and relieve cramping. Taking a hot shower or bath with Epsom salts may also help.",
      "• <b>Take over-the-counter medicine.</b> It is recommended to take simple pain-relief medicines, antispasmodic medicines to ease spasms in the wall of the bowel, anti-flatulence medicines and antacids for heartburn or indigestion. You should not use aspirin or anti-inflammatory medicines that irritates stomach and cause bowel problems.",
      "• <b>Try the “BRAT” diet.</b> If the stomach pain is persistent, try sticking to the basics with the “BRAT” diet – that is, bananas, rice, applesauce and toast. These foods are low in fiber and high in binding, and none of them have salt or spices, which can aggravate the stomach more.",
      "• <b>Involve ginger on your meals.</b> Ginger is a natural anti-inflammatory and can be consumed in various forms – candy, capsules, or as tea – but fresh ginger root is best when looking to rid stomach pain.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "stomach ache": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your stomach ache:",
      "• <b>Hydration.</b> It’s crucial to replace the water we lose to prevent dehydration. It is recommended that you regularly drink clear fluids to avoid electrolyte imbalances that halt digestion and cause constipation.",
      "• <b>Avoid trigger foods.</b> Eating certain foods that can worsen your stomach ache is certainly prohibited. Avoid spicy, smelly, fatty, acidic and sweet foods that are gas-producing — they can increase nausea, bloating, vomiting and/or diarrhea as well.",
      "• <b>Apply heat.</b> Try putting a heating pad or hot towel on your abdomen. The heat can help relax the muscles and relieve cramping. Taking a hot shower or bath with Epsom salts may also help.",
      "• <b>Take over-the-counter medicine.</b> It is recommended to take simple pain-relief medicines, antispasmodic medicines to ease spasms in the wall of the bowel, anti-flatulence medicines and antacids for heartburn or indigestion. You should not use aspirin or anti-inflammatory medicines that irritates stomach and cause bowel problems.",
      "• <b>Try the “BRAT” diet.</b> If the stomach pain is persistent, try sticking to the basics with the “BRAT” diet – that is, bananas, rice, applesauce and toast. These foods are low in fiber and high in binding, and none of them have salt or spices, which can aggravate the stomach more.",
      "• <b>Involve ginger on your meals.</b> Ginger is a natural anti-inflammatory and can be consumed in various forms – candy, capsules, or as tea – but fresh ginger root is best when looking to rid stomach pain.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "constipation":[
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your constipation:",
      "• <b>Increase Fiber Intake:</b> Gradually increase your intake of high-fiber foods such as fruits (especially prunes, figs, and berries), vegetables (like broccoli, spinach, and carrots), and whole grains (like oats, brown rice, and whole-wheat bread).",
      "• <b>Drink Plenty of Fluids:</b> Drink plenty of water throughout the day. Other fluids like herbal tea and fruit juice can also be helpful.",
      "• <b>Exercise Regularly:</b> Physical activity can stimulate bowel movements.3 Aim for at least 30 minutes of moderate-intensity exercise most days of the week.",
      "• <b>Warm Liquids:</b> Drinking warm liquids like water, herbal tea, or broth in the morning can help stimulate bowel movements.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience chronic or severe constipation, consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
      ],
    "i am constipated":[
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your constipation:",
      "• <b>Increase Fiber Intake:</b> Gradually increase your intake of high-fiber foods such as fruits (especially prunes, figs, and berries), vegetables (like broccoli, spinach, and carrots), and whole grains (like oats, brown rice, and whole-wheat bread).",
      "• <b>Drink Plenty of Fluids:</b> Drink plenty of water throughout the day. Other fluids like herbal tea and fruit juice can also be helpful.",
      "• <b>Exercise Regularly:</b> Physical activity can stimulate bowel movements.3 Aim for at least 30 minutes of moderate-intensity exercise most days of the week.",
      "• <b>Warm Liquids:</b> Drinking warm liquids like water, herbal tea, or broth in the morning can help stimulate bowel movements.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience chronic or severe constipation, consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
      ],
      "i'm constipated":[
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your constipation:",
      "• <b>Increase Fiber Intake:</b> Gradually increase your intake of high-fiber foods such as fruits (especially prunes, figs, and berries), vegetables (like broccoli, spinach, and carrots), and whole grains (like oats, brown rice, and whole-wheat bread).",
      "• <b>Drink Plenty of Fluids:</b> Drink plenty of water throughout the day. Other fluids like herbal tea and fruit juice can also be helpful.",
      "• <b>Exercise Regularly:</b> Physical activity can stimulate bowel movements.3 Aim for at least 30 minutes of moderate-intensity exercise most days of the week.",
      "• <b>Warm Liquids:</b> Drinking warm liquids like water, herbal tea, or broth in the morning can help stimulate bowel movements.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience chronic or severe constipation, consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
      ],

      "rashes": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your rashes:",
      "• <b>Cold.</b> Fill an ice or plastic bag with ice or dampen a cloth with cold water. Then place a cloth over your skin (never place ice directly on your skin). Hold on to your skin for about 10 minutes at a time.",
      "• <b>Aloe vera (fresh).</b> Wash and dry the affected area before using aloe so that you get maximum absorption. If you have an aloe plant, you can cut open a leaf, scrape out the gel, and apply it directly to the affected skin. Or, you can get a commercial aloe preparation from the pharmacy.", 
      "• <b>Cold compress.</b> You can apply a cool rag to the affected area, or even take a cold shower or bath. You can also fill a bag with ice and apply it to the rash until the itching or discomfort subsides. Give your skin a break and only leave the ice pack on for 15-20 minutes at a time, and only over a cloth, not directly on your skin, to avoid causing a burn. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have rash": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your rashes:",
      "• <b>Cold.</b> Fill an ice or plastic bag with ice or dampen a cloth with cold water. Then place a cloth over your skin (never place ice directly on your skin). Hold on to your skin for about 10 minutes at a time.",
      "• <b>Aloe vera (fresh).</b> Wash and dry the affected area before using aloe so that you get maximum absorption. If you have an aloe plant, you can cut open a leaf, scrape out the gel, and apply it directly to the affected skin. Or, you can get a commercial aloe preparation from the pharmacy.", 
      "• <b>Cold compress.</b> You can apply a cool rag to the affected area, or even take a cold shower or bath. You can also fill a bag with ice and apply it to the rash until the itching or discomfort subsides. Give your skin a break and only leave the ice pack on for 15-20 minutes at a time, and only over a cloth, not directly on your skin, to avoid causing a burn. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

  "i have a rash": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your rashes:",
      "• <b>Cold.</b> Fill an ice or plastic bag with ice or dampen a cloth with cold water. Then place a cloth over your skin (never place ice directly on your skin). Hold on to your skin for about 10 minutes at a time.",
      "• <b>Aloe vera (fresh).</b> Wash and dry the affected area before using aloe so that you get maximum absorption. If you have an aloe plant, you can cut open a leaf, scrape out the gel, and apply it directly to the affected skin. Or, you can get a commercial aloe preparation from the pharmacy.", 
      "• <b>Cold compress.</b> You can apply a cool rag to the affected area, or even take a cold shower or bath. You can also fill a bag with ice and apply it to the rash until the itching or discomfort subsides. Give your skin a break and only leave the ice pack on for 15-20 minutes at a time, and only over a cloth, not directly on your skin, to avoid causing a burn. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have rashes": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your rashes:",
      "• <b>Cold.</b> Fill an ice or plastic bag with ice or dampen a cloth with cold water. Then place a cloth over your skin (never place ice directly on your skin). Hold on to your skin for about 10 minutes at a time.",
      "• <b>Aloe vera (fresh).</b> Wash and dry the affected area before using aloe so that you get maximum absorption. If you have an aloe plant, you can cut open a leaf, scrape out the gel, and apply it directly to the affected skin. Or, you can get a commercial aloe preparation from the pharmacy.", 
      "• <b>Cold compress.</b> You can apply a cool rag to the affected area, or even take a cold shower or bath. You can also fill a bag with ice and apply it to the rash until the itching or discomfort subsides. Give your skin a break and only leave the ice pack on for 15-20 minutes at a time, and only over a cloth, not directly on your skin, to avoid causing a burn. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have many a rashes": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your rashes:",
      "• <b>Cold.</b> Fill an ice or plastic bag with ice or dampen a cloth with cold water. Then place a cloth over your skin (never place ice directly on your skin). Hold on to your skin for about 10 minutes at a time.",
      "• <b>Aloe vera (fresh).</b> Wash and dry the affected area before using aloe so that you get maximum absorption. If you have an aloe plant, you can cut open a leaf, scrape out the gel, and apply it directly to the affected skin. Or, you can get a commercial aloe preparation from the pharmacy.", 
      "• <b>Cold compress.</b> You can apply a cool rag to the affected area, or even take a cold shower or bath. You can also fill a bag with ice and apply it to the rash until the itching or discomfort subsides. Give your skin a break and only leave the ice pack on for 15-20 minutes at a time, and only over a cloth, not directly on your skin, to avoid causing a burn. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "blisters":  [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your blisters:",
      "• <b>Avoid popping or bursting it</b>. You could cau se an infection or hinder your body’s healing process. Instead, cover the blister by using padding or bandages and keep the area clean.",
      "• <b>Treatment.</b> If popping and draining the blister is recommended by a health care professional, it is important to be sterile and hygienic when you do the procedure. How to drain a blister and help prevent infection:",
        "1.	Wash your hands and the blister with soap and water.",
        "2.	Apply an antiseptic to the blister.",
        "3.	Clean a sharp needle with an antiseptic wipe or rubbing alcohol.",
        "4.	Use the needle to prick the blister in several spots near the edge. Let the fluid drain but leave the skin above the blister in place.",
        "5.	Apply an antibiotic ointment or petroleum jelly to the blister and cover it with a nonstick bandage or gauze pad.",
        "6.	After several days, cut away the dead skin. Use tweezers and scissors that you sterilize with an antiseptic wipe or rubbing alcohol. Apply more ointment and a bandage.",
        "7.	Check the area every day for infection.",
      "• <b>Watch signs of infection.</b> Signs of infection include:",
        "> Increased pain, swelling, redness, or warmth around the blister.",
        "> Red streaks leading from the blister.",
        "> Pus draining from the blister.",
        "> A fever.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have blister":  [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your blisters:",
      "• <b>Avoid popping or bursting it</b>. You could cau se an infection or hinder your body’s healing process. Instead, cover the blister by using padding or bandages and keep the area clean.",
      "• <b>Treatment.</b> If popping and draining the blister is recommended by a health care professional, it is important to be sterile and hygienic when you do the procedure. How to drain a blister and help prevent infection:",
        "1.	Wash your hands and the blister with soap and water.",
        "2.	Apply an antiseptic to the blister.",
        "3.	Clean a sharp needle with an antiseptic wipe or rubbing alcohol.",
        "4.	Use the needle to prick the blister in several spots near the edge. Let the fluid drain but leave the skin above the blister in place.",
        "5.	Apply an antibiotic ointment or petroleum jelly to the blister and cover it with a nonstick bandage or gauze pad.",
        "6.	After several days, cut away the dead skin. Use tweezers and scissors that you sterilize with an antiseptic wipe or rubbing alcohol. Apply more ointment and a bandage.",
        "7.	Check the area every day for infection.",
      "• <b>Watch signs of infection.</b> Signs of infection include:",
        "> Increased pain, swelling, redness, or warmth around the blister.",
        "> Red streaks leading from the blister.",
        "> Pus draining from the blister.",
        "> A fever.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a blister":  [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your blisters:",
      "• <b>Avoid popping or bursting it</b>. You could cau se an infection or hinder your body’s healing process. Instead, cover the blister by using padding or bandages and keep the area clean.",
      "• <b>Treatment.</b> If popping and draining the blister is recommended by a health care professional, it is important to be sterile and hygienic when you do the procedure. How to drain a blister and help prevent infection:",
        "1.	Wash your hands and the blister with soap and water.",
        "2.	Apply an antiseptic to the blister.",
        "3.	Clean a sharp needle with an antiseptic wipe or rubbing alcohol.",
        "4.	Use the needle to prick the blister in several spots near the edge. Let the fluid drain but leave the skin above the blister in place.",
        "5.	Apply an antibiotic ointment or petroleum jelly to the blister and cover it with a nonstick bandage or gauze pad.",
        "6.	After several days, cut away the dead skin. Use tweezers and scissors that you sterilize with an antiseptic wipe or rubbing alcohol. Apply more ointment and a bandage.",
        "7.	Check the area every day for infection.",
      "• <b>Watch signs of infection.</b> Signs of infection include:",
        "> Increased pain, swelling, redness, or warmth around the blister.",
        "> Red streaks leading from the blister.",
        "> Pus draining from the blister.",
        "> A fever.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have blisters":  [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your blisters:",
      "• <b>Avoid popping or bursting it</b>. You could cau se an infection or hinder your body’s healing process. Instead, cover the blister by using padding or bandages and keep the area clean.",
      "• <b>Treatment.</b> If popping and draining the blister is recommended by a health care professional, it is important to be sterile and hygienic when you do the procedure. How to drain a blister and help prevent infection:",
        "1.	Wash your hands and the blister with soap and water.",
        "2.	Apply an antiseptic to the blister.",
        "3.	Clean a sharp needle with an antiseptic wipe or rubbing alcohol.",
        "4.	Use the needle to prick the blister in several spots near the edge. Let the fluid drain but leave the skin above the blister in place.",
        "5.	Apply an antibiotic ointment or petroleum jelly to the blister and cover it with a nonstick bandage or gauze pad.",
        "6.	After several days, cut away the dead skin. Use tweezers and scissors that you sterilize with an antiseptic wipe or rubbing alcohol. Apply more ointment and a bandage.",
        "7.	Check the area every day for infection.",
      "• <b>Watch signs of infection.</b> Signs of infection include:",
        "> Increased pain, swelling, redness, or warmth around the blister.",
        "> Red streaks leading from the blister.",
        "> Pus draining from the blister.",
        "> A fever.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have many blisters":  [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your blisters:",
      "• <b>Avoid popping or bursting it</b>. You could cau se an infection or hinder your body’s healing process. Instead, cover the blister by using padding or bandages and keep the area clean.",
      "• <b>Treatment.</b> If popping and draining the blister is recommended by a health care professional, it is important to be sterile and hygienic when you do the procedure. How to drain a blister and help prevent infection:",
        "1.	Wash your hands and the blister with soap and water.",
        "2.	Apply an antiseptic to the blister.",
        "3.	Clean a sharp needle with an antiseptic wipe or rubbing alcohol.",
        "4.	Use the needle to prick the blister in several spots near the edge. Let the fluid drain but leave the skin above the blister in place.",
        "5.	Apply an antibiotic ointment or petroleum jelly to the blister and cover it with a nonstick bandage or gauze pad.",
        "6.	After several days, cut away the dead skin. Use tweezers and scissors that you sterilize with an antiseptic wipe or rubbing alcohol. Apply more ointment and a bandage.",
        "7.	Check the area every day for infection.",
      "• <b>Watch signs of infection.</b> Signs of infection include:",
        "> Increased pain, swelling, redness, or warmth around the blister.",
        "> Red streaks leading from the blister.",
        "> Pus draining from the blister.",
        "> A fever.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "bruise": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your bruise:",
      "• <b>Ice Packs:</b> Apply an ice pack to the bruised area for 15-20 minutes at a time, several times a day, during the first 48 hours after the injury.1 This helps to reduce swelling and pain.",
      "• <b>Elevation:</b> Elevate the bruised area above the level of your heart whenever possible to reduce swelling.",
      "• <b>Heat Therapy:</b> After the initial 48 hours, apply a warm compress or take a warm bath to increase blood flow and promote healing.",
      "• <b>Arnica:</b> Arnica flower may help reduce bruising and pain. However, it's crucial to follow the product instructions and avoid applying it to open wounds.",
      "<b>Important Note:</b> These remedies may provide some relief, but they may not be effective for everyone. If you have concerns about a bruise, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a bruise": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your bruise:",
      "• <b>Ice Packs:</b> Apply an ice pack to the bruised area for 15-20 minutes at a time, several times a day, during the first 48 hours after the injury.1 This helps to reduce swelling and pain.",
      "• <b>Elevation:</b> Elevate the bruised area above the level of your heart whenever possible to reduce swelling.",
      "• <b>Heat Therapy:</b> After the initial 48 hours, apply a warm compress or take a warm bath to increase blood flow and promote healing.",
      "• <b>Arnica:</b> Arnica flower may help reduce bruising and pain. However, it's crucial to follow the product instructions and avoid applying it to open wounds.",
      "<b>Important Note:</b> These remedies may provide some relief, but they may not be effective for everyone. If you have concerns about a bruise, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have bruises": [
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your bruise:",
      "• <b>Ice Packs:</b> Apply an ice pack to the bruised area for 15-20 minutes at a time, several times a day, during the first 48 hours after the injury.1 This helps to reduce swelling and pain.",
      "• <b>Elevation:</b> Elevate the bruised area above the level of your heart whenever possible to reduce swelling.",
      "• <b>Heat Therapy:</b> After the initial 48 hours, apply a warm compress or take a warm bath to increase blood flow and promote healing.",
      "• <b>Arnica:</b> Arnica flower may help reduce bruising and pain. However, it's crucial to follow the product instructions and avoid applying it to open wounds.",
      "<b>Important Note:</b> These remedies may provide some relief, but they may not be effective for everyone. If you have concerns about a bruise, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    
    "fatigue":  [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your fatigue:",
      "• <b>Drink plenty of water.</b> Drink water to stay dehydrated, especially after exercise.",
      "• <b>Don't skip meals.</b> Try to eat regularly to maintain your energy levels throughout the day.",
      "• <b>Exercise regularly.</b> Try to exercise everyday to maintain a healthy body.",
      "• <b>Get enough sleep.</b> Some recommendations on getting a good night’s sleep include: go to bed and get up in the morning at the same time every day, avoid naps through the day, and have a warm bath or shower before bed.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have fatigue":  [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your fatigue:",
      "• <b>Drink plenty of water.</b> Drink water to stay dehydrated, especially after exercise.",
      "• <b>Don't skip meals.</b> Try to eat regularly to maintain your energy levels throughout the day.",
      "• <b>Exercise regularly.</b> Try to exercise everyday to maintain a healthy body.",
      "• <b>Get enough sleep.</b> Some recommendations on getting a good night’s sleep include: go to bed and get up in the morning at the same time every day, avoid naps through the day, and have a warm bath or shower before bed.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i am experiencing fatigue":  [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your fatigue:",
      "• <b>Drink plenty of water.</b> Drink water to stay dehydrated, especially after exercise.",
      "• <b>Don't skip meals.</b> Try to eat regularly to maintain your energy levels throughout the day.",
      "• <b>Exercise regularly.</b> Try to exercise everyday to maintain a healthy body.",
      "• <b>Get enough sleep.</b> Some recommendations on getting a good night’s sleep include: go to bed and get up in the morning at the same time every day, avoid naps through the day, and have a warm bath or shower before bed.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i'm experiencing fatigue":  [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your fatigue:",
      "• <b>Drink plenty of water.</b> Drink water to stay dehydrated, especially after exercise.",
      "• <b>Don't skip meals.</b> Try to eat regularly to maintain your energy levels throughout the day.",
      "• <b>Exercise regularly.</b> Try to exercise everyday to maintain a healthy body.",
      "• <b>Get enough sleep.</b> Some recommendations on getting a good night’s sleep include: go to bed and get up in the morning at the same time every day, avoid naps through the day, and have a warm bath or shower before bed.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "burns":[
      "The following are the potential treatments for burn:",
      "• <b>Cool water.</b> The first thing you should do when you get a minor burn is run cool (not cold) water over the burn area for about 20 minutes. Then wash the burned area with mild soap and water.",
      "• <b>Cool compress.</b> A cool compress or clean wet cloth placed over the burn area helps relieve pain and swelling. You can apply the compress in 5- to 15-minute intervals. Try not to use excessively cold compresses because they may irritate the burn more.",
      "• <b>Aloe vera.</b> Aloe vera is a common ingredient in many creams, sunscreens, and moisturizers. Its gel formTrusted Source is a topical remedy for treating burns and promoting wound healing.",
      "• <b>Plastic wrap.</b> Household plastic wrap is also a potential home remedy for treating burns. It is best to layer the film over the burn instead of wrapping the limb. For hand burns, a see-through plastic bag is a good alternative.",
      "• <b>Oatmeal.</b> To use oatmeal as a natural remedy for burns, mix oatmeal with water until it has a paste-like consistency. Then, apply it to the burned skin areas and let it sit for around 20 minutes. ",
      "• <b>Honey.</b> Honey is known to contain anti-inflammatory, antibacterial, antifungal, and antioxidant substances. With those substances, honey can help speed up wound recovery, including burns. To use honey as a natural remedy for burns, you can apply honey gently to the affected area regularly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got burned":[
      "The following are the potential treatments for burn:",
      "• <b>Cool water.</b> The first thing you should do when you get a minor burn is run cool (not cold) water over the burn area for about 20 minutes. Then wash the burned area with mild soap and water.",
      "• <b>Cool compress.</b> A cool compress or clean wet cloth placed over the burn area helps relieve pain and swelling. You can apply the compress in 5- to 15-minute intervals. Try not to use excessively cold compresses because they may irritate the burn more.",
      "• <b>Aloe vera.</b> Aloe vera is a common ingredient in many creams, sunscreens, and moisturizers. Its gel formTrusted Source is a topical remedy for treating burns and promoting wound healing.",
      "• <b>Plastic wrap.</b> Household plastic wrap is also a potential home remedy for treating burns. It is best to layer the film over the burn instead of wrapping the limb. For hand burns, a see-through plastic bag is a good alternative.",
      "• <b>Oatmeal.</b> To use oatmeal as a natural remedy for burns, mix oatmeal with water until it has a paste-like consistency. Then, apply it to the burned skin areas and let it sit for around 20 minutes. ",
      "• <b>Honey.</b> Honey is known to contain anti-inflammatory, antibacterial, antifungal, and antioxidant substances. With those substances, honey can help speed up wound recovery, including burns. To use honey as a natural remedy for burns, you can apply honey gently to the affected area regularly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a burn":[
      "The following are the potential treatments for burn:",
      "• <b>Cool water.</b> The first thing you should do when you get a minor burn is run cool (not cold) water over the burn area for about 20 minutes. Then wash the burned area with mild soap and water.",
      "• <b>Cool compress.</b> A cool compress or clean wet cloth placed over the burn area helps relieve pain and swelling. You can apply the compress in 5- to 15-minute intervals. Try not to use excessively cold compresses because they may irritate the burn more.",
      "• <b>Aloe vera.</b> Aloe vera is a common ingredient in many creams, sunscreens, and moisturizers. Its gel formTrusted Source is a topical remedy for treating burns and promoting wound healing.",
      "• <b>Plastic wrap.</b> Household plastic wrap is also a potential home remedy for treating burns. It is best to layer the film over the burn instead of wrapping the limb. For hand burns, a see-through plastic bag is a good alternative.",
      "• <b>Oatmeal.</b> To use oatmeal as a natural remedy for burns, mix oatmeal with water until it has a paste-like consistency. Then, apply it to the burned skin areas and let it sit for around 20 minutes. ",
      "• <b>Honey.</b> Honey is known to contain anti-inflammatory, antibacterial, antifungal, and antioxidant substances. With those substances, honey can help speed up wound recovery, including burns. To use honey as a natural remedy for burns, you can apply honey gently to the affected area regularly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "heat exhaustion": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your heat exhaustion:",
      "• <b>Rest in a cool place.</b> Getting into an air-conditioned building is best. If that’s not an option, find a shady spot or sit in front of a fan. Rest on your back with your legs raised higher than your heart level.",
      "• <b>Drink cool fluids.</b> Stick to water or sports drinks. Don’t drink any alcoholic beverages, which can add to dehydration.",
      "• <b>Loosen clothing.</b> Remove any unnecessary clothing and make sure your clothes are lightweight and nonbinding.",
      "• <b>Convenient follow-up care.</b> After recovering from heat exhaustion, you may be sensitive to heat for a few days. A follow-up visit with your primary care doctor can help you stay safe as you recover.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i am experiencing heat exhaustion": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your heat exhaustion:",
      "• <b>Rest in a cool place.</b> Getting into an air-conditioned building is best. If that’s not an option, find a shady spot or sit in front of a fan. Rest on your back with your legs raised higher than your heart level.",
      "• <b>Drink cool fluids.</b> Stick to water or sports drinks. Don’t drink any alcoholic beverages, which can add to dehydration.",
      "• <b>Loosen clothing.</b> Remove any unnecessary clothing and make sure your clothes are lightweight and nonbinding.",
      "• <b>Convenient follow-up care.</b> After recovering from heat exhaustion, you may be sensitive to heat for a few days. A follow-up visit with your primary care doctor can help you stay safe as you recover.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe headaches, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "eyestrain": [
      "I’m sorry to hear that you're feeling that way.Here are some home remedies that may help your relieve eye strain:",
      "• <b>Adjust the lighting.</b> When watching television, it may be easier on your eyes if you keep the room softly lit. When reading printed materials or doing close work, try to position the light source behind you and direct the light onto your page or task. ",
      "• <b>Take breaks.</b> When reading or doing close work, take occasional breaks and rest your eyes by looking away from the page, digital screen or task.",
      "• <b>Limit screen time.</b> This is especially important for children, who may not make the connection between extended viewing, eyestrain and the need to rest their eyes regularly.",
      "• <b>Use artificial tears.</b> Nonprescription artificial tears can help prevent and relieve dry eyes. Use them even when your eyes feel fine to keep them well lubricated and prevent a recurrence of symptoms. Your eye specialist can suggest which eye drops might be best for you. Avoid eye drops with a redness remover, as these may worsen dry eye symptoms.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience persistent or severe eyestrain, consult an eye doctor.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",   
    ],
    "i have eyestrain": [
      "I’m sorry to hear that you're feeling that way.Here are some home remedies that may help your relieve eye strain:",
      "• <b>Adjust the lighting.</b> When watching television, it may be easier on your eyes if you keep the room softly lit. When reading printed materials or doing close work, try to position the light source behind you and direct the light onto your page or task. ",
      "• <b>Take breaks.</b> When reading or doing close work, take occasional breaks and rest your eyes by looking away from the page, digital screen or task.",
      "• <b>Limit screen time.</b> This is especially important for children, who may not make the connection between extended viewing, eyestrain and the need to rest their eyes regularly.",
      "• <b>Use artificial tears.</b> Nonprescription artificial tears can help prevent and relieve dry eyes. Use them even when your eyes feel fine to keep them well lubricated and prevent a recurrence of symptoms. Your eye specialist can suggest which eye drops might be best for you. Avoid eye drops with a redness remover, as these may worsen dry eye symptoms.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience persistent or severe eyestrain, consult an eye doctor.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",   
    ],

    "bone fracture":  [
      "I’m sorry to hear that you’re feeling that way. Immediately seek medical attention if you are suspecting a bone fracture. Here are some home remedies that may help relieve the pain of your bone fracture:",
      "• <b>Do not move the injured area excessively.</b> Keep the affected limb as still as possible to prevent further damage.",
      "• <b>Control bleeding if present.</b> Apply pressure to any open wounds with a clean cloth or bandage. ",
      "• <b>Immobilize the area.</b> If possible, use a splint or improvised material like a piece of wood or folded clothing to support the bone above and below the fracture site. ",
      "• <b>Apply ice packs.</b> Wrap ice in a towel and apply to the injured area to reduce swelling and pain. ",
      "• <b>Elevate the limb.</b> If applicable, raise the affected limb above the heart level to minimize swelling. ",
      "• <b>Monitor for serious symptoms.</b> Watch for signs of severe pain, significant deformity, or inability to move the limb. ",
      "• <b>Call for medical help immediately.</b> Contact emergency services if the injury is severe, involves a critical area like the spine or neck, or if you suspect significant internal damage. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe bone fracture, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "bone fractures":  [
      "I’m sorry to hear that you’re feeling that way. Immediately seek medical attention if you are suspecting a bone fracture. Here are some home remedies that may help relieve the pain of your bone fracture:",
      "• <b>Do not move the injured area excessively.</b> Keep the affected limb as still as possible to prevent further damage.",
      "• <b>Control bleeding if present.</b> Apply pressure to any open wounds with a clean cloth or bandage. ",
      "• <b>Immobilize the area.</b> If possible, use a splint or improvised material like a piece of wood or folded clothing to support the bone above and below the fracture site. ",
      "• <b>Apply ice packs.</b> Wrap ice in a towel and apply to the injured area to reduce swelling and pain. ",
      "• <b>Elevate the limb.</b> If applicable, raise the affected limb above the heart level to minimize swelling. ",
      "• <b>Monitor for serious symptoms.</b> Watch for signs of severe pain, significant deformity, or inability to move the limb. ",
      "• <b>Call for medical help immediately.</b> Contact emergency services if the injury is severe, involves a critical area like the spine or neck, or if you suspect significant internal damage. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe bone fracture, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got a bone fracture":  [
      "I’m sorry to hear that you’re feeling that way. Immediately seek medical attention if you are suspecting a bone fracture. Here are some home remedies that may help relieve the pain of your bone fracture:",
      "• <b>Do not move the injured area excessively.</b> Keep the affected limb as still as possible to prevent further damage.",
      "• <b>Control bleeding if present.</b> Apply pressure to any open wounds with a clean cloth or bandage. ",
      "• <b>Immobilize the area.</b> If possible, use a splint or improvised material like a piece of wood or folded clothing to support the bone above and below the fracture site. ",
      "• <b>Apply ice packs.</b> Wrap ice in a towel and apply to the injured area to reduce swelling and pain. ",
      "• <b>Elevate the limb.</b> If applicable, raise the affected limb above the heart level to minimize swelling. ",
      "• <b>Monitor for serious symptoms.</b> Watch for signs of severe pain, significant deformity, or inability to move the limb. ",
      "• <b>Call for medical help immediately.</b> Contact emergency services if the injury is severe, involves a critical area like the spine or neck, or if you suspect significant internal damage. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe bone fracture, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a bone fracture":  [
      "I’m sorry to hear that you’re feeling that way. Immediately seek medical attention if you are suspecting a bone fracture. Here are some home remedies that may help relieve the pain of your bone fracture:",
      "• <b>Do not move the injured area excessively.</b> Keep the affected limb as still as possible to prevent further damage.",
      "• <b>Control bleeding if present.</b> Apply pressure to any open wounds with a clean cloth or bandage. ",
      "• <b>Immobilize the area.</b> If possible, use a splint or improvised material like a piece of wood or folded clothing to support the bone above and below the fracture site. ",
      "• <b>Apply ice packs.</b> Wrap ice in a towel and apply to the injured area to reduce swelling and pain. ",
      "• <b>Elevate the limb.</b> If applicable, raise the affected limb above the heart level to minimize swelling. ",
      "• <b>Monitor for serious symptoms.</b> Watch for signs of severe pain, significant deformity, or inability to move the limb. ",
      "• <b>Call for medical help immediately.</b> Contact emergency services if the injury is severe, involves a critical area like the spine or neck, or if you suspect significant internal damage. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe bone fracture, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
      "my bone is broken":  [
      "I’m sorry to hear that you’re feeling that way. Immediately seek medical attention if you are suspecting a bone fracture. Here are some home remedies that may help relieve the pain of your bone fracture:",
      "• <b>Do not move the injured area excessively.</b> Keep the affected limb as still as possible to prevent further damage.",
      "• <b>Control bleeding if present.</b> Apply pressure to any open wounds with a clean cloth or bandage. ",
      "• <b>Immobilize the area.</b> If possible, use a splint or improvised material like a piece of wood or folded clothing to support the bone above and below the fracture site. ",
      "• <b>Apply ice packs.</b> Wrap ice in a towel and apply to the injured area to reduce swelling and pain. ",
      "• <b>Elevate the limb.</b> If applicable, raise the affected limb above the heart level to minimize swelling. ",
      "• <b>Monitor for serious symptoms.</b> Watch for signs of severe pain, significant deformity, or inability to move the limb. ",
      "• <b>Call for medical help immediately.</b> Contact emergency services if the injury is severe, involves a critical area like the spine or neck, or if you suspect significant internal damage. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe bone fracture, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a broken bone":  [
      "I’m sorry to hear that you’re feeling that way. Immediately seek medical attention if you are suspecting a bone fracture. Here are some home remedies that may help relieve the pain of your bone fracture:",
      "• <b>Do not move the injured area excessively.</b> Keep the affected limb as still as possible to prevent further damage.",
      "• <b>Control bleeding if present.</b> Apply pressure to any open wounds with a clean cloth or bandage. ",
      "• <b>Immobilize the area.</b> If possible, use a splint or improvised material like a piece of wood or folded clothing to support the bone above and below the fracture site. ",
      "• <b>Apply ice packs.</b> Wrap ice in a towel and apply to the injured area to reduce swelling and pain. ",
      "• <b>Elevate the limb.</b> If applicable, raise the affected limb above the heart level to minimize swelling. ",
      "• <b>Monitor for serious symptoms.</b> Watch for signs of severe pain, significant deformity, or inability to move the limb. ",
      "• <b>Call for medical help immediately.</b> Contact emergency services if the injury is severe, involves a critical area like the spine or neck, or if you suspect significant internal damage. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe bone fracture, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "my bone is broken":  [
      "I’m sorry to hear that you’re feeling that way. Immediately seek medical attention if you are suspecting a bone fracture. Here are some home remedies that may help relieve the pain of your bone fracture:",
      "• <b>Do not move the injured area excessively.</b> Keep the affected limb as still as possible to prevent further damage.",
      "• <b>Control bleeding if present.</b> Apply pressure to any open wounds with a clean cloth or bandage. ",
      "• <b>Immobilize the area.</b> If possible, use a splint or improvised material like a piece of wood or folded clothing to support the bone above and below the fracture site. ",
      "• <b>Apply ice packs.</b> Wrap ice in a towel and apply to the injured area to reduce swelling and pain. ",
      "• <b>Elevate the limb.</b> If applicable, raise the affected limb above the heart level to minimize swelling. ",
      "• <b>Monitor for serious symptoms.</b> Watch for signs of severe pain, significant deformity, or inability to move the limb. ",
      "• <b>Call for medical help immediately.</b> Contact emergency services if the injury is severe, involves a critical area like the spine or neck, or if you suspect significant internal damage. ",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe bone fracture, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "muscle strain":[
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your  muscle strain:",
      "• <b>Rest:</b> Stop the physical activity that caused your strain to avoid further damaging your muscle.",
      "• <b>Ice:</b> Apply an ice pack or cold compress for 10 to 15 minutes every hour for the first day after your injury. After one day, you can apply ice every three to four hours. Don’t apply ice directly to your skin (wrap your ice pack in a towel or washcloth).",
      "• <b>Elevation:</b> If possible, keep your injured muscle elevated above your heart.",
      "• <b>Warm compresses:</b>",
        "Recommendation: After the initial 48 hours of icing, apply warm compresses to the strained area for 15-20 minutes at a time, several times a day. This can help increase blood flow and promote healing.",
      "• <b>Gentle stretching:</b>",
        "Recommendation: Once the initial pain and swelling have subsided, gently stretch the affected muscle to improve flexibility and prevent stiffness.",
      "<b>Important Note:</b> These remedies may provide some relief, but they may not be effective for everyone. If you have concerns about a muscle strain, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "muscle strains":[
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your  muscle strain:",
      "• <b>Rest:</b> Stop the physical activity that caused your strain to avoid further damaging your muscle.",
      "• <b>Ice:</b> Apply an ice pack or cold compress for 10 to 15 minutes every hour for the first day after your injury. After one day, you can apply ice every three to four hours. Don’t apply ice directly to your skin (wrap your ice pack in a towel or washcloth).",
      "• <b>Elevation:</b> If possible, keep your injured muscle elevated above your heart.",
      "• <b>Warm compresses:</b>",
        "Recommendation: After the initial 48 hours of icing, apply warm compresses to the strained area for 15-20 minutes at a time, several times a day. This can help increase blood flow and promote healing.",
      "• <b>Gentle stretching:</b>",
        "Recommendation: Once the initial pain and swelling have subsided, gently stretch the affected muscle to improve flexibility and prevent stiffness.",
      "<b>Important Note:</b> These remedies may provide some relief, but they may not be effective for everyone. If you have concerns about a muscle strain, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got muscle strains":[
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your  muscle strain:",
      "• <b>Rest:</b> Stop the physical activity that caused your strain to avoid further damaging your muscle.",
      "• <b>Ice:</b> Apply an ice pack or cold compress for 10 to 15 minutes every hour for the first day after your injury. After one day, you can apply ice every three to four hours. Don’t apply ice directly to your skin (wrap your ice pack in a towel or washcloth).",
      "• <b>Elevation:</b> If possible, keep your injured muscle elevated above your heart.",
      "• <b>Warm compresses:</b>",
        "Recommendation: After the initial 48 hours of icing, apply warm compresses to the strained area for 15-20 minutes at a time, several times a day. This can help increase blood flow and promote healing.",
      "• <b>Gentle stretching:</b>",
        "Recommendation: Once the initial pain and swelling have subsided, gently stretch the affected muscle to improve flexibility and prevent stiffness.",
      "<b>Important Note:</b> These remedies may provide some relief, but they may not be effective for everyone. If you have concerns about a muscle strain, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have muscle strains":[
      "I’m sorry to hear that you're feeling that way. Here are some home remedies that may help relieve your  muscle strain:",
      "• <b>Rest:</b> Stop the physical activity that caused your strain to avoid further damaging your muscle.",
      "• <b>Ice:</b> Apply an ice pack or cold compress for 10 to 15 minutes every hour for the first day after your injury. After one day, you can apply ice every three to four hours. Don’t apply ice directly to your skin (wrap your ice pack in a towel or washcloth).",
      "• <b>Elevation:</b> If possible, keep your injured muscle elevated above your heart.",
      "• <b>Warm compresses:</b>",
        "Recommendation: After the initial 48 hours of icing, apply warm compresses to the strained area for 15-20 minutes at a time, several times a day. This can help increase blood flow and promote healing.",
      "• <b>Gentle stretching:</b>",
        "Recommendation: Once the initial pain and swelling have subsided, gently stretch the affected muscle to improve flexibility and prevent stiffness.",
      "<b>Important Note:</b> These remedies may provide some relief, but they may not be effective for everyone. If you have concerns about a muscle strain, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "neck pain": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your neck pain:",
      "- <b>Hot and cold theraphy.</b> Using ice packs or heating pads can help relieve neck pain fast. Ice reduces inflammation, while heat relaxes the stiff neck muscles. For best results, you may alternate the two for about 20 minutes each several times a day.",
      "- <b>Neck exercise.</b> Several exercises can help stretch your neck muscles and relieve your stiff neck symptoms:",
        "• Head presses: Clasp your hands behind your head or sit on a seat with a headrest. Keeping the chin level, gently press the back of your head against your hands or the headrest. Hold for five to 10 seconds and repeat.",
        "• Head tilts: Instead of rolling your neck, try head tilts. First, move your neck forward and backward by bringing your chin to your chest, pausing for a moment, then lifting your chin to the sky. After you repeat a few times, move to side-to-side tilts. Bring your ear to your right shoulder, hold for a few seconds, and repeat on the other side.",
        "• Shoulder blade squeezes: Sit with your spine upright and your feet firmly planted on the floor. Gently squeeze your shoulder blades together and hold for 15-30 seconds. Repeat three to four times.",
        "• Shoulder rolls: Relieving tension in your shoulders and upper back may also help ease neck tension. Try to sync up your shoulder rolls with your breathing. When you inhale, bring your shoulders up to your ears, then roll them down your back as you exhale. Repeat five to 10 times.",
      "- <b>Stretch but avoid sudden movements.</b> Stretches often used to help with neck stiffness include:",
        "1. Rolling your shoulders backward and then forward in a circle.",
        "2. Pressing your shoulder blades together lightly, holding the position for a few seconds, and then repeating.",
        "3. Slowly turning your head from side to side, as far as is comfortable.",
        "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
        "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have neck pain": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your neck pain:",
      "- <b>Hot and cold theraphy.</b> Using ice packs or heating pads can help relieve neck pain fast. Ice reduces inflammation, while heat relaxes the stiff neck muscles. For best results, you may alternate the two for about 20 minutes each several times a day.",
      "- <b>Neck exercise.</b> Several exercises can help stretch your neck muscles and relieve your stiff neck symptoms:",
        "• Head presses: Clasp your hands behind your head or sit on a seat with a headrest. Keeping the chin level, gently press the back of your head against your hands or the headrest. Hold for five to 10 seconds and repeat.",
        "• Head tilts: Instead of rolling your neck, try head tilts. First, move your neck forward and backward by bringing your chin to your chest, pausing for a moment, then lifting your chin to the sky. After you repeat a few times, move to side-to-side tilts. Bring your ear to your right shoulder, hold for a few seconds, and repeat on the other side.",
        "• Shoulder blade squeezes: Sit with your spine upright and your feet firmly planted on the floor. Gently squeeze your shoulder blades together and hold for 15-30 seconds. Repeat three to four times.",
        "• Shoulder rolls: Relieving tension in your shoulders and upper back may also help ease neck tension. Try to sync up your shoulder rolls with your breathing. When you inhale, bring your shoulders up to your ears, then roll them down your back as you exhale. Repeat five to 10 times.",
      "- <b>Stretch but avoid sudden movements.</b> Stretches often used to help with neck stiffness include:",
        "1. Rolling your shoulders backward and then forward in a circle.",
        "2. Pressing your shoulder blades together lightly, holding the position for a few seconds, and then repeating.",
        "3. Slowly turning your head from side to side, as far as is comfortable.",
        "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
        "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got a neck pain": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your neck pain:",
      "- <b>Hot and cold theraphy.</b> Using ice packs or heating pads can help relieve neck pain fast. Ice reduces inflammation, while heat relaxes the stiff neck muscles. For best results, you may alternate the two for about 20 minutes each several times a day.",
      "- <b>Neck exercise.</b> Several exercises can help stretch your neck muscles and relieve your stiff neck symptoms:",
        "• Head presses: Clasp your hands behind your head or sit on a seat with a headrest. Keeping the chin level, gently press the back of your head against your hands or the headrest. Hold for five to 10 seconds and repeat.",
        "• Head tilts: Instead of rolling your neck, try head tilts. First, move your neck forward and backward by bringing your chin to your chest, pausing for a moment, then lifting your chin to the sky. After you repeat a few times, move to side-to-side tilts. Bring your ear to your right shoulder, hold for a few seconds, and repeat on the other side.",
        "• Shoulder blade squeezes: Sit with your spine upright and your feet firmly planted on the floor. Gently squeeze your shoulder blades together and hold for 15-30 seconds. Repeat three to four times.",
        "• Shoulder rolls: Relieving tension in your shoulders and upper back may also help ease neck tension. Try to sync up your shoulder rolls with your breathing. When you inhale, bring your shoulders up to your ears, then roll them down your back as you exhale. Repeat five to 10 times.",
      "- <b>Stretch but avoid sudden movements.</b> Stretches often used to help with neck stiffness include:",
        "1. Rolling your shoulders backward and then forward in a circle.",
        "2. Pressing your shoulder blades together lightly, holding the position for a few seconds, and then repeating.",
        "3. Slowly turning your head from side to side, as far as is comfortable.",
        "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
        "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "my neck hurts": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your neck pain:",
      "- <b>Hot and cold theraphy.</b> Using ice packs or heating pads can help relieve neck pain fast. Ice reduces inflammation, while heat relaxes the stiff neck muscles. For best results, you may alternate the two for about 20 minutes each several times a day.",
      "- <b>Neck exercise.</b> Several exercises can help stretch your neck muscles and relieve your stiff neck symptoms:",
        "• Head presses: Clasp your hands behind your head or sit on a seat with a headrest. Keeping the chin level, gently press the back of your head against your hands or the headrest. Hold for five to 10 seconds and repeat.",
        "• Head tilts: Instead of rolling your neck, try head tilts. First, move your neck forward and backward by bringing your chin to your chest, pausing for a moment, then lifting your chin to the sky. After you repeat a few times, move to side-to-side tilts. Bring your ear to your right shoulder, hold for a few seconds, and repeat on the other side.",
        "• Shoulder blade squeezes: Sit with your spine upright and your feet firmly planted on the floor. Gently squeeze your shoulder blades together and hold for 15-30 seconds. Repeat three to four times.",
        "• Shoulder rolls: Relieving tension in your shoulders and upper back may also help ease neck tension. Try to sync up your shoulder rolls with your breathing. When you inhale, bring your shoulders up to your ears, then roll them down your back as you exhale. Repeat five to 10 times.",
      "- <b>Stretch but avoid sudden movements.</b> Stretches often used to help with neck stiffness include:",
        "1. Rolling your shoulders backward and then forward in a circle.",
        "2. Pressing your shoulder blades together lightly, holding the position for a few seconds, and then repeating.",
        "3. Slowly turning your head from side to side, as far as is comfortable.",
        "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
        "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "back pain": [
        "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your back pain:",   
        "• <b>Initial Pain Relief.</b> Apply cold packs for brief periods to decrease swelling during the early stages of pain",
        "• <b>Post-Inflammation Relief.</b> Use warm compresses to loosen tense muscles and promote circulation after the initial swelling decreases.",
        "• <b>Pain Management.</b> Use over-the-counter pain relievers, such as ibuprofen or naproxen, to alleviate discomfort.",
        "• <b>Maintaining Mobility.</b> Perform light exercises, such as walking or stretching, to preserve flexibility and avoid rigidity.",
        "• <b>Preventing Strain.</b> Be mindful of proper body mechanics when sitting, standing, and lifting to reduce stress on your back.",
        "• <b>Spinal Support.</b> After the pain lessens, incorporate exercises that strengthen your core muscles to stabilize your spine.",
        "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe back pain, consult a healthcare professional for proper diagnosis and treatment. ",
        "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions."
      ],
    "i have a back pain":  [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your back pain:",   
      "• <b>Initial Pain Relief.</b> Apply cold packs for brief periods to decrease swelling during the early stages of pain",
      "• <b>Post-Inflammation Relief.</b> Use warm compresses to loosen tense muscles and promote circulation after the initial swelling decreases.",
      "• <b>Pain Management.</b> Use over-the-counter pain relievers, such as ibuprofen or naproxen, to alleviate discomfort.",
      "• <b>Maintaining Mobility.</b> Perform light exercises, such as walking or stretching, to preserve flexibility and avoid rigidity.",
      "• <b>Preventing Strain.</b> Be mindful of proper body mechanics when sitting, standing, and lifting to reduce stress on your back.",
      "• <b>Spinal Support.</b> After the pain lessens, incorporate exercises that strengthen your core muscles to stabilize your spine.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe back pain, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions."
    ],
    "my back hurts":  [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your back pain:",   
      "• <b>Initial Pain Relief.</b> Apply cold packs for brief periods to decrease swelling during the early stages of pain",
      "• <b>Post-Inflammation Relief.</b> Use warm compresses to loosen tense muscles and promote circulation after the initial swelling decreases.",
      "• <b>Pain Management.</b> Use over-the-counter pain relievers, such as ibuprofen or naproxen, to alleviate discomfort.",
      "• <b>Maintaining Mobility.</b> Perform light exercises, such as walking or stretching, to preserve flexibility and avoid rigidity.",
      "• <b>Preventing Strain.</b> Be mindful of proper body mechanics when sitting, standing, and lifting to reduce stress on your back.",
      "• <b>Spinal Support.</b> After the pain lessens, incorporate exercises that strengthen your core muscles to stabilize your spine.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe back pain, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions."
    ],

    "cough": [
      "I’m sorry to hear that you're feeling that way. Here  are some home remedies that may help soothe a cough:",
      "• <b>Honey:</b> Honey can soothe a sore throat and help loosen mucus. Mix a spoonful of honey with warm water or tea. Note: Do not give honey to children under 1 year old due to the risk of botulism.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help soothe irritated airways and loosen mucus.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen mucus and soothe irritated airways.",
      "• <b>Gargling with Salt Water:</b> Gargling with warm salt water can help soothe a sore throat and reduce inflammation.",
      "• <b>Rest:</b> Getting plenty of rest can help your body recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience a persistent or severe cough, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "coughing": [
      "I’m sorry to hear that you're feeling that way. Here  are some home remedies that may help soothe a cough:",
      "• <b>Honey:</b> Honey can soothe a sore throat and help loosen mucus. Mix a spoonful of honey with warm water or tea. Note: Do not give honey to children under 1 year old due to the risk of botulism.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help soothe irritated airways and loosen mucus.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen mucus and soothe irritated airways.",
      "• <b>Gargling with Salt Water:</b> Gargling with warm salt water can help soothe a sore throat and reduce inflammation.",
      "• <b>Rest:</b> Getting plenty of rest can help your body recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience a persistent or severe cough, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a cough": [
      "I’m sorry to hear that you're feeling that way. Here  are some home remedies that may help soothe a cough:",
      "• <b>Honey:</b> Honey can soothe a sore throat and help loosen mucus. Mix a spoonful of honey with warm water or tea. Note: Do not give honey to children under 1 year old due to the risk of botulism.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help soothe irritated airways and loosen mucus.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen mucus and soothe irritated airways.",
      "• <b>Gargling with Salt Water:</b> Gargling with warm salt water can help soothe a sore throat and reduce inflammation.",
      "• <b>Rest:</b> Getting plenty of rest can help your body recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience a persistent or severe cough, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got a cough": [
      "I’m sorry to hear that you're feeling that way. Here  are some home remedies that may help soothe a cough:",
      "• <b>Honey:</b> Honey can soothe a sore throat and help loosen mucus. Mix a spoonful of honey with warm water or tea. Note: Do not give honey to children under 1 year old due to the risk of botulism.",
      "• <b>Warm Liquids:</b> Drinking warm liquids such as broth, tea, or hot water with lemon can help soothe irritated airways and loosen mucus.",
      "• <b>Humidifier:</b> Using a cool-mist humidifier can add moisture to the air, which can help to loosen mucus and soothe irritated airways.",
      "• <b>Gargling with Salt Water:</b> Gargling with warm salt water can help soothe a sore throat and reduce inflammation.",
      "• <b>Rest:</b> Getting plenty of rest can help your body recover more quickly.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience a persistent or severe cough, consult a healthcare professional.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "fever": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your fever:",
      "• <b>Fluid Replenishment.</b> Consume ample liquids, such as water, light broths, or fruit juices, to prevent becoming dehydrated.",
      "• <b>Physical Recuperation.</b> Prioritize ample rest, which may include resting in bed. ",
      "• <b>Pharmaceutical Relief.</b> Use acetaminophen or ibuprofen according to the package instructions. ",
      "• <b>Temperature Regulation.</b> Wear lightweight garments, maintain a cool environment, and use a damp cloth with tepid water on your skin. ",
      "• <b>Alcohol Abstinence.</b> Refrain from consuming alcoholic beverages, as they can exacerbate dehydration. ",
      "• <b>Avoid Chilling.</b> Do not use very cold-water baths, as they can induce shivering, which can elevate your body’s temperature. ",
      "<b>Important Note:</b> : These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe fever, consult a healthcare professional for proper diagnosis and treatment.  ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a fever": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your fever:",
      "• <b>Fluid Replenishment.</b> Consume ample liquids, such as water, light broths, or fruit juices, to prevent becoming dehydrated.",
      "• <b>Physical Recuperation.</b> Prioritize ample rest, which may include resting in bed. ",
      "• <b>Pharmaceutical Relief.</b> Use acetaminophen or ibuprofen according to the package instructions. ",
      "• <b>Temperature Regulation.</b> Wear lightweight garments, maintain a cool environment, and use a damp cloth with tepid water on your skin. ",
      "• <b>Alcohol Abstinence.</b> Refrain from consuming alcoholic beverages, as they can exacerbate dehydration. ",
      "• <b>Avoid Chilling.</b> Do not use very cold-water baths, as they can induce shivering, which can elevate your body’s temperature. ",
      "<b>Important Note:</b> : These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe fever, consult a healthcare professional for proper diagnosis and treatment.  ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "open wound":   [
      "	I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your open wound:",
      "• <b>Stop the bleeding.</b> Using a clean cloth or bandage, gently apply pressure to the wound to promote blood clotting",
      "• <b>Clean the wound.</b> Use clean water and a saline solution to flush away any debris or bacteria. Once the wound looks clean, pat it dry with a clean cloth. A doctor may need to perform a surgical debridement to remove debris from severe wounds that contain dead tissue, glass, bullets, or other foreign objects.",
      "• <b>Treat the wound with antibiotics.</b> After cleaning the wound, apply a thin layer of antibiotic ointment to prevent infection.",
      "• <b>Close and dress the wound.</b> Closing clean wounds helps promote faster healing. Waterproof bandages and gauze work well for minor wounds. Deep open wounds may require stitches or staples. However, leave an already infected wound open until the infection clears.",
      "• <b>Regularly change the dressing.</b> The Centers for Disease Control and Prevention (CDC)Trusted Source recommend removing the old bandages and checking for signs of infection every 24 hours. Disinfect and dry the wound before reapplying a clean adhesive bandage or gauze. Remember to keep the wound dry while it heals.",
      "• <b>Over-the-counter medicine.</b> People can take over-the-counter (OTC) pain medications to reduce inflammation and painful symptoms during the healing process. Avoid aspirin, however, as it can cause bleeding and delay the wound healing process.",
      "• <b>See your doctor.</b> Check your wound regularly. See your doctor immediately if you have any symptoms including:",
        "> Bleeding",
        "> Increasing pain",
        "> Pus or discharge from the wound",
        "> Fever",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience  severe open wounds consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have an open wound":   [
      "	I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your open wound:",
      "• <b>Stop the bleeding.</b> Using a clean cloth or bandage, gently apply pressure to the wound to promote blood clotting",
      "• <b>Clean the wound.</b> Use clean water and a saline solution to flush away any debris or bacteria. Once the wound looks clean, pat it dry with a clean cloth. A doctor may need to perform a surgical debridement to remove debris from severe wounds that contain dead tissue, glass, bullets, or other foreign objects.",
      "• <b>Treat the wound with antibiotics.</b> After cleaning the wound, apply a thin layer of antibiotic ointment to prevent infection.",
      "• <b>Close and dress the wound.</b> Closing clean wounds helps promote faster healing. Waterproof bandages and gauze work well for minor wounds. Deep open wounds may require stitches or staples. However, leave an already infected wound open until the infection clears.",
      "• <b>Regularly change the dressing.</b> The Centers for Disease Control and Prevention (CDC)Trusted Source recommend removing the old bandages and checking for signs of infection every 24 hours. Disinfect and dry the wound before reapplying a clean adhesive bandage or gauze. Remember to keep the wound dry while it heals.",
      "• <b>Over-the-counter medicine.</b> People can take over-the-counter (OTC) pain medications to reduce inflammation and painful symptoms during the healing process. Avoid aspirin, however, as it can cause bleeding and delay the wound healing process.",
      "• <b>See your doctor.</b> Check your wound regularly. See your doctor immediately if you have any symptoms including:",
        "> Bleeding",
        "> Increasing pain",
        "> Pus or discharge from the wound",
        "> Fever",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience  severe open wounds consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got an open wound":   [
      "	I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your open wound:",
      "• <b>Stop the bleeding.</b> Using a clean cloth or bandage, gently apply pressure to the wound to promote blood clotting",
      "• <b>Clean the wound.</b> Use clean water and a saline solution to flush away any debris or bacteria. Once the wound looks clean, pat it dry with a clean cloth. A doctor may need to perform a surgical debridement to remove debris from severe wounds that contain dead tissue, glass, bullets, or other foreign objects.",
      "• <b>Treat the wound with antibiotics.</b> After cleaning the wound, apply a thin layer of antibiotic ointment to prevent infection.",
      "• <b>Close and dress the wound.</b> Closing clean wounds helps promote faster healing. Waterproof bandages and gauze work well for minor wounds. Deep open wounds may require stitches or staples. However, leave an already infected wound open until the infection clears.",
      "• <b>Regularly change the dressing.</b> The Centers for Disease Control and Prevention (CDC)Trusted Source recommend removing the old bandages and checking for signs of infection every 24 hours. Disinfect and dry the wound before reapplying a clean adhesive bandage or gauze. Remember to keep the wound dry while it heals.",
      "• <b>Over-the-counter medicine.</b> People can take over-the-counter (OTC) pain medications to reduce inflammation and painful symptoms during the healing process. Avoid aspirin, however, as it can cause bleeding and delay the wound healing process.",
      "• <b>See your doctor.</b> Check your wound regularly. See your doctor immediately if you have any symptoms including:",
        "> Bleeding",
        "> Increasing pain",
        "> Pus or discharge from the wound",
        "> Fever",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience  severe open wounds consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "wound":   [
      "	I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your open wound:",
      "• <b>Stop the bleeding.</b> Using a clean cloth or bandage, gently apply pressure to the wound to promote blood clotting",
      "• <b>Clean the wound.</b> Use clean water and a saline solution to flush away any debris or bacteria. Once the wound looks clean, pat it dry with a clean cloth. A doctor may need to perform a surgical debridement to remove debris from severe wounds that contain dead tissue, glass, bullets, or other foreign objects.",
      "• <b>Treat the wound with antibiotics.</b> After cleaning the wound, apply a thin layer of antibiotic ointment to prevent infection.",
      "• <b>Close and dress the wound.</b> Closing clean wounds helps promote faster healing. Waterproof bandages and gauze work well for minor wounds. Deep open wounds may require stitches or staples. However, leave an already infected wound open until the infection clears.",
      "• <b>Regularly change the dressing.</b> The Centers for Disease Control and Prevention (CDC)Trusted Source recommend removing the old bandages and checking for signs of infection every 24 hours. Disinfect and dry the wound before reapplying a clean adhesive bandage or gauze. Remember to keep the wound dry while it heals.",
      "• <b>Over-the-counter medicine.</b> People can take over-the-counter (OTC) pain medications to reduce inflammation and painful symptoms during the healing process. Avoid aspirin, however, as it can cause bleeding and delay the wound healing process.",
      "• <b>See your doctor.</b> Check your wound regularly. See your doctor immediately if you have any symptoms including:",
        "> Bleeding",
        "> Increasing pain",
        "> Pus or discharge from the wound",
        "> Fever",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience  severe open wounds consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have a wound":   [
      "	I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your open wound:",
      "• <b>Stop the bleeding.</b> Using a clean cloth or bandage, gently apply pressure to the wound to promote blood clotting",
      "• <b>Clean the wound.</b> Use clean water and a saline solution to flush away any debris or bacteria. Once the wound looks clean, pat it dry with a clean cloth. A doctor may need to perform a surgical debridement to remove debris from severe wounds that contain dead tissue, glass, bullets, or other foreign objects.",
      "• <b>Treat the wound with antibiotics.</b> After cleaning the wound, apply a thin layer of antibiotic ointment to prevent infection.",
      "• <b>Close and dress the wound.</b> Closing clean wounds helps promote faster healing. Waterproof bandages and gauze work well for minor wounds. Deep open wounds may require stitches or staples. However, leave an already infected wound open until the infection clears.",
      "• <b>Regularly change the dressing.</b> The Centers for Disease Control and Prevention (CDC)Trusted Source recommend removing the old bandages and checking for signs of infection every 24 hours. Disinfect and dry the wound before reapplying a clean adhesive bandage or gauze. Remember to keep the wound dry while it heals.",
      "• <b>Over-the-counter medicine.</b> People can take over-the-counter (OTC) pain medications to reduce inflammation and painful symptoms during the healing process. Avoid aspirin, however, as it can cause bleeding and delay the wound healing process.",
      "• <b>See your doctor.</b> Check your wound regularly. See your doctor immediately if you have any symptoms including:",
        "> Bleeding",
        "> Increasing pain",
        "> Pus or discharge from the wound",
        "> Fever",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience  severe open wounds consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got a wound":   [
      "	I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your open wound:",
      "• <b>Stop the bleeding.</b> Using a clean cloth or bandage, gently apply pressure to the wound to promote blood clotting",
      "• <b>Clean the wound.</b> Use clean water and a saline solution to flush away any debris or bacteria. Once the wound looks clean, pat it dry with a clean cloth. A doctor may need to perform a surgical debridement to remove debris from severe wounds that contain dead tissue, glass, bullets, or other foreign objects.",
      "• <b>Treat the wound with antibiotics.</b> After cleaning the wound, apply a thin layer of antibiotic ointment to prevent infection.",
      "• <b>Close and dress the wound.</b> Closing clean wounds helps promote faster healing. Waterproof bandages and gauze work well for minor wounds. Deep open wounds may require stitches or staples. However, leave an already infected wound open until the infection clears.",
      "• <b>Regularly change the dressing.</b> The Centers for Disease Control and Prevention (CDC)Trusted Source recommend removing the old bandages and checking for signs of infection every 24 hours. Disinfect and dry the wound before reapplying a clean adhesive bandage or gauze. Remember to keep the wound dry while it heals.",
      "• <b>Over-the-counter medicine.</b> People can take over-the-counter (OTC) pain medications to reduce inflammation and painful symptoms during the healing process. Avoid aspirin, however, as it can cause bleeding and delay the wound healing process.",
      "• <b>See your doctor.</b> Check your wound regularly. See your doctor immediately if you have any symptoms including:",
        "> Bleeding",
        "> Increasing pain",
        "> Pus or discharge from the wound",
        "> Fever",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience  severe open wounds consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "menstrual cramps": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your menstrual cramps:",
      "• <b>Massaging with essential oil.</b> Massage therapy for about 20 minutes can help. Massage therapy for menstruation involves pressing specific points while the therapist’s hands move around your abdomen, side, and back.",
      "• <b>Apply heat.</b> Placing a hot water bottle or heating pad against the abdomen can relax the muscles and relieve cramps. Heat helps the uterine muscle and those around it relax, which may ease cramping and discomfort.",
      "• <b>Consider dietary changes.</b> Eating a balanced diet rich in the following may help the body stay healthy: omega-3 fatty acids, fruits, vegetables, nuts, lean proteins, and whole grains",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got menstrual cramps": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your menstrual cramps:",
      "• <b>Massaging with essential oil.</b> Massage therapy for about 20 minutes can help. Massage therapy for menstruation involves pressing specific points while the therapist’s hands move around your abdomen, side, and back.",
      "• <b>Apply heat.</b> Placing a hot water bottle or heating pad against the abdomen can relax the muscles and relieve cramps. Heat helps the uterine muscle and those around it relax, which may ease cramping and discomfort.",
      "• <b>Consider dietary changes.</b> Eating a balanced diet rich in the following may help the body stay healthy: omega-3 fatty acids, fruits, vegetables, nuts, lean proteins, and whole grains",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have menstrual cramps": [
      "I’m sorry to hear that you’re feeling that way. Here are some steps you can do at home to aid your menstrual cramps:",
      "• <b>Massaging with essential oil.</b> Massage therapy for about 20 minutes can help. Massage therapy for menstruation involves pressing specific points while the therapist’s hands move around your abdomen, side, and back.",
      "• <b>Apply heat.</b> Placing a hot water bottle or heating pad against the abdomen can relax the muscles and relieve cramps. Heat helps the uterine muscle and those around it relax, which may ease cramping and discomfort.",
      "• <b>Consider dietary changes.</b> Eating a balanced diet rich in the following may help the body stay healthy: omega-3 fatty acids, fruits, vegetables, nuts, lean proteins, and whole grains",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "gastric pain": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your gastric pain:",
      "• <b>your eating habit.</b> Cut back on your high-fiber foods and dairy.",
      "• <b>Avoid carbonated drinks.</b> The fizz from soda or pop feels fantastic when it’s tickling your nose, but it also adds extra air into your gut that can cause gas pain. If you’re experiencing gas pain, avoiding carbonated beverages is a good idea. Instead, reach for water. ",
      "• <b>Over-the-counter medicine.</b> Prescription medications may help if you have an underlying condition affecting your digestive system, like IBS. Antibiotics can treat bacterial overgrowth in your intestines that cause excess gas and bloating.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe gastric pain, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i have gastric pain": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your gastric pain:",
      "• <b>your eating habit.</b> Cut back on your high-fiber foods and dairy.",
      "• <b>Avoid carbonated drinks.</b> The fizz from soda or pop feels fantastic when it’s tickling your nose, but it also adds extra air into your gut that can cause gas pain. If you’re experiencing gas pain, avoiding carbonated beverages is a good idea. Instead, reach for water. ",
      "• <b>Over-the-counter medicine.</b> Prescription medications may help if you have an underlying condition affecting your digestive system, like IBS. Antibiotics can treat bacterial overgrowth in your intestines that cause excess gas and bloating.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe gastric pain, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],
    "i got gastric pain": [
      "I’m sorry to hear that you’re feeling that way. Here are some home remedies that may help relieve your gastric pain:",
      "• <b>your eating habit.</b> Cut back on your high-fiber foods and dairy.",
      "• <b>Avoid carbonated drinks.</b> The fizz from soda or pop feels fantastic when it’s tickling your nose, but it also adds extra air into your gut that can cause gas pain. If you’re experiencing gas pain, avoiding carbonated beverages is a good idea. Instead, reach for water. ",
      "• <b>Over-the-counter medicine.</b> Prescription medications may help if you have an underlying condition affecting your digestive system, like IBS. Antibiotics can treat bacterial overgrowth in your intestines that cause excess gas and bloating.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience frequent or severe gastric pain, consult a healthcare professional for proper diagnosis and treatment. ",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],

    "diarrhea": [
      "The following are the potential treatments for diarrhea:",
      "• <b>Rehydrate.</b> Avoid drinking anything that will further irritate the digestive tract, such as drinks with caffeine, alcohol, fizzy drinks, and very hot drinks.",
      "• <b>Eat a recovery diet.</b> Another option for people with diarrhea is the BRAT diet. This consists of Bananas, Rice, Applesauce, and Toast. ",
      "• <b>Don't eat certain foods.</b> Avoid eating  dairy products, fatty foods, high-fiber foods or highly seasoned foods for a few days.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],	
    "i have diarrhea": [
      "The following are the potential treatments for diarrhea:",
      "• <b>Rehydrate.</b> Avoid drinking anything that will further irritate the digestive tract, such as drinks with caffeine, alcohol, fizzy drinks, and very hot drinks.",
      "• <b>Eat a recovery diet.</b> Another option for people with diarrhea is the BRAT diet. This consists of Bananas, Rice, Applesauce, and Toast. ",
      "• <b>Don't eat certain foods.</b> Avoid eating  dairy products, fatty foods, high-fiber foods or highly seasoned foods for a few days.",
      "<b>Important Note:</b> These remedies may provide temporary relief, but they may not be effective for everyone. If you experience severe open wounds consult a healthcare professional for proper diagnosis and treatment.",
      "<b>Disclaimer:</b> This information is for general knowledge and informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional for diagnosis and treatment of any medical conditions.",
    ],	

    "thank you": "You’re welcome! I hope this information helps you and if your condition worsens please refer to a doctor.",
};

const handleUserInput = () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
      addMessage(userMessage, 'user-message');
      userInput.value = '';

      // Display typing indicator
      const typingIndicator = document.getElementById('typing-indicator');
      chatOutput.appendChild(typingIndicator);
      typingIndicator.style.display = 'flex';

      setTimeout(() => {
          typingIndicator.style.display = 'none';
          generateBotResponse(userMessage);
      }, 2000); // Simulated typing delay
  }
};

const generateBotResponse = (userMessage) => {
  console.log("generateBotResponse called with:", userMessage);

  const lowercaseMessage = userMessage.toLowerCase();
  const botResponse = responses[lowercaseMessage] || "I didn't understand that. Could you repeat or clarify? I'm here to help!";

  console.log("Bot response determined:", botResponse);

  setTimeout(() => {
      console.log("Timeout triggered, displaying bot response...");
      addMessage(botResponse, 'bot-message');

      chatOutput.scrollTop = chatOutput.scrollHeight;

      if (botResponse === "I didn't understand that. Could you repeat or clarify? I'm here to help!") {
          displayFollowUpOptions();
      }
  }, 500);
};

const displayFollowUpOptions = () => {
  console.log("Displaying follow-up options...");

  addMessage("Are you referring to one of the following?", 'bot-message');

  const optionsContainer = createElement('div', 'chat-options-container');

  const options = [
      "I need help",
      "I'm not feeling well",
      "I have a stuffy nose",
      "I feel dizzy",
      "I feel nauseous",
      "I have a headache",
      "I have a stomach ache",
      "I am constipated",
      "I have rashes",
      "I have blisters",
      "I have bruises",
      "I have fatigue",
      "I have a burn",
      "I am experiencing heat exhaustion",
      "I have eyestrain",
      "I have a broken bone",
      "I have muscle strains",
      "I have neck pain",
      "I have a back pain",
      "I have a cough",
      "I have a fever",
      "I have an open wound",
      "I got menstrual cramps",
      "I have gastric pain",
      "I have diarrhea",
  ];

  options.forEach(option => {
      const button = createElement('button', 'chat-option', option);
      button.addEventListener('click', () => {
          console.log("User clicked option:", option);
          addMessage(option, 'user-message');
          generateBotResponse(option);
      });
      optionsContainer.appendChild(button);
  });

  chatOutput.appendChild(optionsContainer);
  chatOutput.scrollTop = chatOutput.scrollHeight;
};

// Event listeners
window.onload = displayIntroMessage;
sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserInput();
});

// Function to simulate typing effect
function simulateTypingEffect(botMessage, delay = 2000) {
  console.log("Simulating typing effect for:", botMessage, "with delay:", delay);

  const chatOutput = document.getElementById('chat-output');
  const typingEffect = document.createElement('div');
  typingEffect.classList.add('typing-effect');

  for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      typingEffect.appendChild(dot);
  }

  chatOutput.appendChild(typingEffect);

  setTimeout(() => {
      console.log("Typing effect completed. Displaying bot message:", botMessage);
      chatOutput.removeChild(typingEffect);

      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('bot-message');
      botMessageElement.innerHTML = botMessage; // Supports bold text
      chatOutput.appendChild(botMessageElement);
  }, delay);
}

// Example usage when the user sends a message
document.getElementById('send-btn').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value;
  if (userInput) {
      sendMessageToBot(userInput);
      document.getElementById('user-input').value = ''; // Clear input field
  }
});
