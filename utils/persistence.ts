const CURRENT_VERSION = 1;
const KEY = "TYPEOFWEB_INFLACJA_APP";

export const saveToStorage = (data: unknown) => {
  try {
    window.localStorage.setItem(
      KEY,
      JSON.stringify({ data, VERSION: CURRENT_VERSION })
    );
  } catch (err) {
    console.error(err);
  }
};

export const getFromStorage = () => {
  try {
    const { data, VERSION } = JSON.parse(
      window.localStorage.getItem(KEY) ?? "{}"
    );
    if (VERSION !== CURRENT_VERSION) {
      return null;
    }
    return data;
  } catch (err) {
    console.error(err);
  }
};
