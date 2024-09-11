import React, { useState } from "react";
import "./Members.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const members = [
  {
    name: "Alice Johnson",
    photo: "",
    linkedin: "https://www.linkedin.com/in/alicejohnson",
  },
  {
    name: "Bob Smith",
    photo: "",
    linkedin: "https://www.linkedin.com/in/bobsmith",
  },
  {
    name: "Catherine Lee",
    photo: "",
    linkedin: "https://www.linkedin.com/in/catherinelee",
  },
  {
    name: "David Brown",
    photo: "",
    linkedin: "https://www.linkedin.com/in/davidbrown",
  },
  {
    name: "Emily White",
    photo: "",
    linkedin: "https://www.linkedin.com/in/emilywhite",
  },
  {
    name: "Frank Black",
    photo: "",
    linkedin: "https://www.linkedin.com/in/frankblack",
  },
  {
    name: "Grace Green",
    photo: "",
    linkedin: "https://www.linkedin.com/in/gracegreen",
  },
];

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div className="members-container">
      <div className="members-circle">
        {members.map((member, index) => (
          <div
            key={index}
            className="member-photo"
            onClick={() => handleClick(member)}
          >
            {member.photo ? (
              <img src={member.photo} alt={member.name} />
            ) : (
              <AccountCircleIcon style={{ fontSize: 80 }} />
            )}
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="selected-member">
          {selectedMember.photo ? (
            <img src={selectedMember.photo} alt={selectedMember.name} />
          ) : (
            <AccountCircleIcon style={{ fontSize: 150 }} />
          )}
          <h2>{selectedMember.name}</h2>
          <a
            href={selectedMember.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 50 }} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Members;
