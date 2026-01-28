import cpContestImage from "../../assets/EventsPage/cpContest.jpg";
import cricketTournamentImage from "../../assets/EventsPage/cricketTournament.jpg";
import pmrfWorkshopImage from "../../assets/EventsPage/pmrfWorkshop.jpg";
import baiganMemeQuizImage from "../../assets/EventsPage/baiganMemeQuiz.jpg";
import mazeMarathonImage from "../../assets/EventsPage/mazeMarathon.jpg";
import breadboardBlitzImage from "../../assets/EventsPage/breadboardBlitz.jpg";
import iotInnovateImage from "../../assets/EventsPage/iotInnovate.jpg";
import codethonImage from "../../assets/EventsPage/codethon.jpg"; // Import image for Codethon

const events = [
  {
    name: "CP Contest",
    description:
    "SECE organized a thrilling competitive programming contest on August 31, 2024, featuring six challenging problems. Lasting two hours, participants included beginners and experts. Top performers received cash prizes, with recognition for the best female participant. Detailed explanations were provided afterward to enhance problem-solving skills.",
    image: cpContestImage,
  },
  {
    name: "Cricket Tournament",
    description:
      "From 11th to 14th April, SECE hosted an exciting cricket tournament that transformed the campus into a vibrant stadium. Players of all levels competed fiercely, culminating in a grand finale between second-year and third-year ECE students. The tournament concluded with thrilling moments and cash prizes for the winning team.",
    image: cricketTournamentImage,
  },
  {
    name: "PMRF Workshop",
    description:
      "The IEEE PMRF Workshop on Computational Electromagnetics took place from January 29th to February 2nd, 2024, hosted by SECE with the IEEE Student Chapter. Led by Anand Kumar from IISc Bengaluru, the workshop focused on the FDTD method using MATLAB, covering Telegrapher’s Equations, transmission line analysis, and practical sessions.",
    image: pmrfWorkshopImage,
  },
  {
    name: "Maze Marathon",
    description:
      "On April 7th, 2024, Maze Marathon brought together robotics enthusiasts in a challenging maze-based competition. Teams designed and programmed autonomous robots to navigate complex mazes with precision. The event tested technical skills and creativity, with teams demonstrating their ability to innovate and solve problems under pressure.",
    image: mazeMarathonImage,
  },
  {
    name: "Breadboard Blitz",
    description:
      "On April 6th, 2024, Breadboard Blitz tested participants' skills in circuit design. The competition featured an elimination round of logical expression evaluation followed by a final round where top teams built and tested circuits under time constraints. The event emphasized precision, efficiency, and problem-solving in circuit design.",
    image: breadboardBlitzImage,
  },
  {
    name: "IoT Innovate",
    description:
      "IoT Innovate, conducted on April 6th, 2024, challenged participants to showcase their creativity in the Internet of Things. The event began with an IoT quiz, followed by a project challenge where teams developed working models using Arduino kits. The competition highlighted innovative solutions and technical skills in IoT applications.",
    image: iotInnovateImage,
  },
  {
    name: "Codethon", 
    description:
      "Codethon, organized by SECE on February 18, was an exhilarating coding challenge that showcased top problem-solvers. Students tested their logical skills and coding agility in a competitive arena. The event fostered intense excitement, offering valuable learning experiences and cash prizes for winners, making it a memorable experience for all participants.",
    image: codethonImage, 
  },
];

export default events;
