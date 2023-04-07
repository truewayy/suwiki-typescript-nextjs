// 로컬 스토리지를 사용하기 위한 유틸 함수
const storage = typeof window !== 'undefined' ? window.localStorage : null;

export const getLocalStorage = (key: string, defaultValue = '') => {
  try {
    const storedValue = JSON.parse(storage?.getItem(key) || '""');

    return storedValue || defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

export const setLocalStorage = <T>(key: string, value: T) => {
  try {
    storage?.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeLocalStorage = (key: string) => {
  try {
    storage?.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
