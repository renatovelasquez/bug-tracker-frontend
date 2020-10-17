import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 124565334,
      name: "Crash on load",
      details: "Crashes after 3 seconds",
      steps: "Open aplication and it will crash",
      version: "V2.0",
      assigned: "Renato Velasquez",
      creator: "Joe Bloggs",
      priority: 1,
      time: "23:38",
    })
  );
  data.push(
    new bugModel({
      _id: 125656353,
      name: "Wont load",
      details: "Crashes after 3 seconds",
      steps: "Open aplication and it will crash",
      version: "V2.0",
      assigned: "Renato Velasquez",
      creator: "Joe Bloggs",
      priority: 3,
      time: "23:38",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
