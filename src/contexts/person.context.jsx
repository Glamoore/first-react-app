import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const PeopleContext = createContext({
  people: [],
  addPerson: () => {},
  updatePerson: () => {},
  removePerson: () => {},
});

export const PersonProvider = ({ children }) => {
  const [people, setPeople] = useState([
    // { _id: 1, name: 'James'},
    // { _id: 2, name: 'Robert'}
  ]);

  const addPerson = (data) => {
    data._id = nanoid();
    setPeople([...people, data]);
  };

  const updatePerson = (id, updates) => {
    // Get index
    const index = people.findIndex((person) => person._id === id);
    // Get actual person
    const oldPerson = people[index];

    let newPerson = {
      ...oldPerson,
      ...updates,
    };

    // recreate the people array
    const updatedPeople = [
      ...people.slice(0, index),
      newPerson,
      ...people.slice(index + 1),
    ];

    setPeople(updatedPeople);
  };
  const removePerson = (id) => {
    // Get index
    const index = people.findIndex((person) => person._id === id);

    // recreate the people array
    const updatedPeople = [
      ...people.slice(0, index),
      ...people.slice(index + 1),
    ];

    setPeople(updatedPeople);
  };

  return (
    <PeopleContext.Provider
      value={{
        people,
        addPerson,
        updatePerson,
        removePerson,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
