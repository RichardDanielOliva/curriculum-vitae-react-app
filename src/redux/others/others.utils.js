export const displayOrHiddenSection = (currentOption, selectedOption) => {
    return currentOption !== selectedOption ? selectedOption : '';
};

export const optionEmpty = (currentOption) => {
    return (currentOption === "") ? true : false;
};
