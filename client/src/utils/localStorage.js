export const getSavedCharityIds = () => {
    const savedCharityIds = localStorage.getItem('saved_charities')
      ? JSON.parse(localStorage.getItem('saved_charities'))
      : [];
  
    return savedCharityIds;
  };
  
  export const saveCharityIds = (charityIdArr) => {
    if (charityIdArr.length) {
      localStorage.setItem('saved_charities', JSON.stringify(charityIdArr));
    } else {
      localStorage.removeItem('saved_charities');
    }
  };
  
  export const unsaveCharityId = (charityId) => {
    const savedCharityIds = localStorage.getItem('saved_charities')
      ? JSON.parse(localStorage.getItem('saved_charities'))
      : null;
  
    if (!savedCharityIds) {
      return false;
    }
  
    const updatedSavedCharityIds = savedCharityIds?.filter((savedCharityId) => savedCharityId !== charityId);
    localStorage.setItem('saved_charities', JSON.stringify(updatedSavedCharityIds));
  
    return true;
  };
  