import React from "react";
import {
  container,
  heading,
  subHeading,
  section,
  list,
  listItem,
  personName,
  contactInfo,
  responsibilities,
} from "./.css";
import { siteData } from "./Info";
import { personProps, categoryProps } from "../../shared/types/stieInfoTypes";

export default function SiteInfo() {
  return (
    <div className={container}>
      <h1 className={heading}>Site Information</h1>

      <h2 className={subHeading}>{siteData.creators.label}</h2>

      {(Object.entries(siteData.creators) as [string, categoryProps][]).map(([key, value]) => {
        if (key === "label") return null;
        return (
          <section key={key} className={section}>
            <h3 className={subHeading}>{value.label}</h3>
            <ul className={list}>
              {value.people.map((person: personProps, index) => (
                <li key={index} className={listItem}>
                  <span className={personName}>{person.name}</span>
                  <div className={contactInfo}>
                    {person.email && <a href={`mailto:${person.email}`}>{person.email}</a>}
                    {person.github && <a href={person.github}>GitHub</a>}
                    {person.website && <a href={person.website}>Website</a>}
                  </div>
                  {person.responsibilities && (
                    <ul className={responsibilities}>
                      {person.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
