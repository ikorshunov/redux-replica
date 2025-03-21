import { type Action, type Reducer, createStore } from "./store";

describe("createStore", () => {
  test("Sets initial state", () => {
    const store = createStore((state) => {
      return state;
    }, 0);

    expect(store.getState()).toEqual(0);
  });

  test("Reducer is called with a dispatched action", () => {
    const reducer: Reducer<number, Action> = jest.fn((state) => {
      return state;
    });
    const initialState = 0;
    const { dispatch } = createStore(reducer, initialState);
    const action = { type: "action" };
    dispatch(action);

    expect(reducer).toHaveBeenCalledTimes(1);
    expect(reducer).toHaveBeenCalledWith(0, action);
  });
});
