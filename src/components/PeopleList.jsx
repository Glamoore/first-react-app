import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { PeopleContext } from "./../contexts/person.context";
import { Email } from "@mui/icons-material";

function PeopleList() {
  const { people, removePerson } = useContext(PeopleContext);

  if (people.length === 0) return <p>No people listed</p>;

  return (
    <ul>
      {people.map(({ name, gender, email, _id }) => (
        <li key={_id}>
          Name: {name},
          Gender: {gender},
          Email: {email}
          <IconButton aria-label="delete" onClick={() => removePerson(_id)}>
            <DeleteIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}

export default PeopleList;
