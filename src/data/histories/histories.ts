import json from "./histories.json";

export type histories_type = {
    [year: string]: string[]
};

const histories = (): histories_type => {

    return json as histories_type;
};
export default histories;