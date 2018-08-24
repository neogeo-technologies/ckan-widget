import rootReducer from "../../reducers/index";
import { reducer as formReducer } from 'redux-form';

const initialState = {
  form: {},
  packageSearch: {
    datasets: [],
    error: "",
    facet_search: "",
    facets: [],
    page: 0,
    rows: 10,
    search: "",
    sort: "score desc, metadata_modified desc",
    total: 0
  }
};

describe("src/reducer/index", () => {
  it("should have initial state", () => {
    expect(rootReducer({}, {})).toEqual(initialState);
  });
});