import { init, incBonus, incrementByAmount } from "../actions";

export function bonusReducer(state = { points: 15 }, action) {
  const { type, payload } = action;
  switch (type) {
    case init:
      return { points: state.points };
    case incBonus:
      return { points: state.points + 5 };
    case incrementByAmount:
      if (payload >= 150) return { points: state.points + 5 };
    default:
      return state;
  }
}
