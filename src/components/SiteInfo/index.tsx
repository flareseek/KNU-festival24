/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

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
  link,
  responsibilityItem,
} from "./.css.ts";
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
                    {person.email && (
                      <a className={link} href={`mailto:${person.email}`}>
                        {person.email}
                      </a>
                    )}
                    {person.github && (
                      <a className={link} href={person.github}>
                        GitHub
                      </a>
                    )}
                    {person.website && (
                      <a className={link} href={person.website}>
                        Website
                      </a>
                    )}
                  </div>
                  {person.responsibilities && (
                    <ul className={responsibilities}>
                      {person.responsibilities.map((resp, idx) => (
                        <li key={idx} className={responsibilityItem}>
                          {resp}
                        </li>
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
