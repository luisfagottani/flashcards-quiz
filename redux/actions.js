export const INDEX = "INDEX";
export const LOADING = "LOADING";

export function index(index) {
  return {
    type: INDEX,
    index
  };
}

export function loading(loading) {
  console.log(loading);
  return {
    type: LOADING,
    loading
  };
}
