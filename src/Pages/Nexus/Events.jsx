// Import event photos
import robo1 from "../../assets/NexusPage/compressed_events/robo1.jpg"
import robo2 from "../../assets/NexusPage/compressed_events/robo2.jpg";
import robo3 from "../../assets/NexusPage/compressed_events/robo3.jpg";

import coden1 from "../../assets/NexusPage/compressed_events/codexus1.jpg";
import coden2 from "../../assets/NexusPage/compressed_events/codexus2.jpg";
import coden3 from "../../assets/NexusPage/compressed_events/codexus3.jpg";

import pairup1 from "../../assets/NexusPage/compressed_events/pup1.jpg";
import pairup2 from "../../assets/NexusPage/compressed_events/pup2.jpg";
import pairup3 from "../../assets/NexusPage/compressed_events/pup3.jpg";

import latent1 from "../../assets/NexusPage/compressed_events/th1.jpg";
import latent2 from "../../assets/NexusPage/compressed_events/th2.jpg";
import latent3 from "../../assets/NexusPage/compressed_events/th3.jpg";

import perfectpixel1 from "../../assets/NexusPage/compressed_events/pp1.jpg";
import perfectpixel2 from "../../assets/NexusPage/compressed_events/pp2.jpg";
import perfectpixel3 from "../../assets/NexusPage/compressed_events/pp3.jpg";

import decodino1 from "../../assets/NexusPage/compressed_events/decodino1.jpg";
import decodino2 from "../../assets/NexusPage/compressed_events/cc2.jpg";
import decodino3 from "../../assets/NexusPage/compressed_events/cc3.jpg";

import jwg1 from "../../assets/NexusPage/compressed_events/jwg1.jpg";
import jwg2 from "../../assets/NexusPage/compressed_events/jwg2.jpg";
import jwg3 from "../../assets/NexusPage/compressed_events/jwg3.jpg";

// Sample data for the events
const events = [
  {
    name: "Nexus Got Latent",
    description:
      "Nexus Got Latent, the ultimate talent hunt of Nexus 2024, was a spectacular showcase of creativity and humor. From hilarious stand-up comedy to spot-on mimicry and other captivating acts, participants left the crowd in splits and awe. The event was a complete entertainment package, blending laughter, talent, and pure fun. With every performance, the stage came alive, making Nexus Got Latent an unforgettable highlight of the fest and a true celebration of diverse talents!",
    photos: [latent1, latent2, latent3],
  },
  {
    name: "Perfect Pixel",
    description: "In Nexus 2024, Perfect Pixel, the photography event showcased the creative flair of participants as they beautifully captured the essence of the fest. From candid moments to vibrant scenes, every frame told a unique story. This event celebrated the art of photography, bringing out the magic of Nexus through captivating visuals. With lenses focused and imaginations unleashed, Perfect Pixel was a canvas where creativity met celebration!",
    photos: [perfectpixel1, perfectpixel2, perfectpixel3],
  },
  {
    name: "Decoduino",
    description: "Nexus'24 in collaboration with Team Innoreva organized Decoduino which was an IoT-based challenge. The competition featured three exciting rounds: the ultimate IoT Quiz Challenge that tested the foundational knowledge of IoT, the Implementation Round, where teams developed practical IoT-based solutions and the grand finale 'Decoding Challenge', where finalists used Arduino Uno to decode signals, with speed and accuracy determining the winners. The event showcased participants problem-solving abilities and technical knowledge, inspiring them to explore and excel in the field of electronics.",
    photos: [decodino1, decodino2, decodino3],
  },
  {
    name: "CodeNexus",
    description:
      "On October 18th, Nexus 2024 hosted CodeNexus, an exhilarating coding event on the Unstop platform. Participants showcased their critical thinking and problem-solving prowess, tackling challenging problems with precision and creativity. The competition was a thrilling test of logical ability, pushing coders to think outside the box. CodeNexus celebrated the spirit of technology and intellect, making itself the ultimate coding showdown.",
    photos: [coden1, coden2, coden3],
  },
  {
    name: "Jab We Guess",
    description:
      "Jab We Guess was a lively and engaging competition of Nexus'24 that saw enthusiastic participation from students across all years and departments. Teams competed in two thrilling rounds: in the first round, participants showcased their creativity through quick doodles while in the second they unleashed their acting skills by expressing movie scenes as their teammates tried to guess the movie. The atmosphere was filled with excitement, laughter, and competitive spirit as participants raced against time to outperform each other.",
    photos: [ jwg2, jwg3, jwg1],
  },
  {
    name: "Robotics Renaissance",
    description:
      "In Nexus 2024, Robotics Renaissance, the ultimate line-tracing bot challenge, brought together innovation and engineering prowess. Teams designed and built autonomous robots to navigate a designated track with precision and speed. Every second counted as bots raced against time, facing strict penalties for deviations. This electrifying event, held in collaboration with OJASS’25, celebrated the fusion of creativity and technology, pushing participants to their limits. With circuits buzzing and strategies unfolding, Robotics Renaissance was a testament to the brilliance of automation and design!",
    photos: [robo1, robo2, robo1],
  },
  {
    name: "Dare 2 Pair",
    description:
      "DARE 2 PAIR at Nexus’24 was a great success as it brought participants together in a vibrant celebration of teamwork and chemistry. From testing connections with musical tuning in the first round to Paper Dance in the second while the final round stole the show as participants recreated iconic movie scenes. Altogether the event was packed with laughter, drama, and unforgettable moments, leaving everyone with cherished memories.",
    photos: [pairup1, pairup2, pairup3],
  },
];

// Exporting the events array for use in other components
export default events;
