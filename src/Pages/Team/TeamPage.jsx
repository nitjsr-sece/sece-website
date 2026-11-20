import PirateLayout from "../../components/PirateTheme/PirateLayout";
import { useState } from "react";
import {
  Batch2K23,
  Batch2K24,
  Batch2K25,
} from "./index";

import "./TeamPage.css";

const batches = {
  "Batch 2K25-2K29": Batch2K25,
  "Batch 2K24-2K28": Batch2K24,
  "Batch 2K23-2K27": Batch2K23,
};

const TeamPage = () => {
  const [selectedBatchKey, setSelectedBatchKey] = useState(
    "Batch 2K24-2K28"
  );

  const selectedBatch = batches[selectedBatchKey] || [];

  return (
    <PirateLayout activeNav="Team">
    <div className="team-page">
      <div className="team-header">
        <h1>Our Team</h1>

        <select
          value={selectedBatchKey}
          onChange={(e) => setSelectedBatchKey(e.target.value)}
        >
          {Object.keys(batches).map((batch) => (
            <option key={batch} value={batch}>
              {batch}
            </option>
          ))}
        </select>
      </div>

      <div className="team-grid">
        {selectedBatch.length > 0 ? (
          selectedBatch.map((member, index) => (
            <div className="team-card" key={member.Email || member.email || index}>
              {(member.Img || member.img) && (
                <img
                  src={member.Img || member.img}
                  alt={member.Name || member.name || "Team member"}
                  loading="lazy"
                />
              )}

              <h3>{member.Name || member.name || "Team Member"}</h3>

              {(member.POR || member.post) && (
                <p className="team-por">
                  {member.POR || member.post}
                </p>
              )}

              {(member.Email || member.email) && (
                <p className="team-email">
                  {member.Email || member.email}
                </p>
              )}

              {(member.LinkedIn || member.linkedin) && (
                <a
                  href={member.LinkedIn || member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-linkedin"
                >
                  LinkedIn
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="team-empty">
            Team details will be updated soon.
          </p>
        )}
      </div>
    </div>
    </PirateLayout>
  );
};

export default TeamPage;
