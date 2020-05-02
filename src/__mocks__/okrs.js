import { data } from "./data/sample-okrs.json";

export const hierarchy = { id: "root", children: []};


export const makeOkrsTree = ({ data }) => {
  const temp = {};
  data.forEach(okr => {
    if(okr.parent_objective_id) {
      if(temp.hasOwnProperty(okr.parent_objective_id)){
        temp[okr.parent_objective_id].children.push(okr);
      } else {
        temp[okr.parent_objective_id] = {
          children: []
        };
      }
    } else {
      if(temp.hasOwnProperty(okr.id)){
        temp[okr.id] = {
          ...okr,
          children: temp[okr.id].children
        };
      } else {
        temp[okr.id] = {
            ...okr,
            children: []
        };
      }
    }
  });
  return { id: "root", children: Object.values(temp)};
};