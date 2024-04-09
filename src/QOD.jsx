// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
  const questions = [{
        type: "radiogroup",
        name: "question1",
        title: "What is the most common cause of accidents in a steel mill?",
        choices: [
            "Falling objects", "Electrical hazards", "Slip and fall accidents", "Chemical exposures"
        ],
        correctAnswer: "Falling objects",
        explanation: "Falling objects, such as heavy machinery parts or materials, pose a significant risk in a steel mill environment due to the nature of the operations and the heavy equipment involved."
    },
    {
        type: "radiogroup",
        name: "question2",
        title: "Which protective gear is crucial for steel mill workers?",
        choices: [
            "Hard hats", "Sunglasses", "Shorts", "Sandals"
        ],
        correctAnswer: "Hard hats",
        explanation: "Hard hats are essential protective gear in a steel mill as they protect workers from head injuries caused by falling objects or overhead hazards."
    },
    {
        type: "radiogroup",
        name: "question3",
        title: "What should be done in case of a fire emergency in a steel mill?",
        choices: [
            "Activate fire alarms and evacuate", "Ignore it and continue working", "Try to extinguish it alone", "Call a colleague"
        ],
        correctAnswer: "Activate fire alarms and evacuate",
        explanation: "In case of a fire emergency, it's crucial to activate fire alarms immediately and evacuate the area to ensure the safety of all personnel. Attempting to extinguish the fire alone can be dangerous and should be left to trained professionals."
    },
    {
        type: "radiogroup",
        name: "question4",
        title: "What is the primary safety concern when operating heavy machinery in a steel mill?",
        choices: [
            "Wearing seatbelts", "Speeding up the process", "Proper training and supervision", "Listening to music"
        ],
        correctAnswer: "Proper training and supervision",
        explanation: "The primary safety concern when operating heavy machinery in a steel mill is ensuring proper training and supervision. Without adequate training and oversight, there is an increased risk of accidents and injuries."
    },
    {
        type: "radiogroup",
        name: "question5",
        title: "Which type of hazard is associated with molten metal in a steel mill?",
        choices: [
            "Thermal", "Acoustic", "Visual", "Psychological"
        ],
        correctAnswer: "Thermal",
        explanation: "Molten metal presents a thermal hazard in a steel mill environment due to its high temperature. Contact with molten metal can cause severe burns and other thermal injuries."
    },
    {
        type: "radiogroup",
        name: "question6",
        title: "What is the proper procedure for handling chemical spills in a steel mill?",
        choices: [
            "Contain the spill and notify supervisor", "Ignore it and continue working", "Leave it for later", "Inform colleagues casually"
        ],
        correctAnswer: "Contain the spill and notify supervisor",
        explanation: "The proper procedure for handling chemical spills in a steel mill is to immediately contain the spill, if safe to do so, and notify a supervisor. Chemical spills can pose serious health and environmental risks if not addressed promptly and properly."
    },
    {
        type: "radiogroup",
        name: "question7",
        title: "What should workers avoid wearing on the shop floor of a steel mill?",
        choices: [
            "Loose clothing and jewelry", "Heavy boots", "Long sleeves", "Protective gloves"
        ],
        correctAnswer: "Loose clothing and jewelry",
        explanation: "Workers should avoid wearing loose clothing and jewelry on the shop floor of a steel mill as these items can get caught in machinery and pose a risk of injury. Tight-fitting clothing and appropriate safety gear should be worn instead."
    },
    {
        type: "radiogroup",
        name: "question8",
        title: "What is a common cause of respiratory issues for steel mill workers?",
        choices: [
            "Inhalation of dust and fumes", "Excessive water consumption", "Lack of sleep", "Standing for too long"
        ],
        correctAnswer: "Inhalation of dust and fumes",
        explanation: "Inhalation of dust and fumes is a common cause of respiratory issues for steel mill workers. Dust and fumes generated during various processes can contain harmful particles and chemicals, leading to respiratory problems if proper precautions are not taken."
    },
    {
        type: "radiogroup",
        name: "question9",
        title: "What is the importance of regular safety inspections in a steel mill?",
        choices: [
            "Identify and mitigate hazards", "Increase production speed", "Reduce break times", "Ignore safety concerns"
        ],
        correctAnswer: "Identify and mitigate hazards",
        explanation: "Regular safety inspections in a steel mill are crucial for identifying and mitigating hazards in the workplace. By conducting inspections, potential risks can be identified early, allowing for preventive measures to be implemented to ensure the safety of workers."
    },
    {
        type: "radiogroup",
        name: "question10",
        title: "What is the primary purpose of safety training for steel mill workers?",
        choices: [
            "Prevent accidents and injuries", "Learn new recipes", "Socialize with colleagues", "Boost morale"
        ],
        correctAnswer: "Prevent accidents and injuries",
        explanation: "The primary purpose of safety training for steel mill workers is to prevent accidents and injuries in the workplace. Through proper training, workers are equipped with the knowledge and skills necessary to identify hazards, follow safety procedures, and minimize risks, ultimately ensuring a safer work environment for everyone."
    }
];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Steel Mill Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Steel Mill Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your full name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}