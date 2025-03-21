export interface Action {
  type: string;
}

export interface PayloadAction<TPayload> extends Action {
  payload: TPayload;
}

export type Reducer<TState, TAction extends Action> = (
  state: TState,
  action: TAction,
) => TState;

export interface Store<TState, TAction extends Action> {
  getState: () => TState;
  dispatch: (action: TAction) => TAction;
}

export function createStore<TState, TAction extends Action>(
  reducer: Reducer<TState, TAction>,
  initialState: TState,
): Store<TState, TAction> {
  let state = initialState;

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      return action;
    },
  };
}
