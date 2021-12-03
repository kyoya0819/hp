import json from "./skills.json";

export type skills_type = {
    programming: string[],
    others: string[]
};

const skills = (): skills_type => {

    return json as skills_type;
};
export default skills;