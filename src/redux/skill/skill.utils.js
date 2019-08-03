export const getSkillsAfterCheckSkill= (skills, skillSelected) => {
    return skills.includes(skillSelected) ? skills.filter((skill) => skill !== skillSelected) : [...skills, skillSelected];
};

export const listHaveItem = (list) => {
    return (list.length > 0) ? true : false;
};