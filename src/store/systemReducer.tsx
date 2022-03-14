import { DeviceType } from "../interfaces";

const initState = { devices: [] };

interface Action {
  type: string;
  device?: DeviceType;
  message?: any;
}

const systemReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "CREATE_DEVICE":
      return state;
    case "DELETE_DEVICE":
      return state;
    case "EDIT_DEVICE":
      return state;
    case "CREATE_SITE":
      return state;
    case "DELETE_SITE":
      return state;
    case "EDIT_SITE":
      return state;
    case "CREATE_POLICY":
      return state;
    case "DELETE_POLICY":
      return state;
    case "EDIT_POLICY":
      return state;
    case "CREATE_TEMPORARY_POLICY":
      console.log("created temporary policy");
      return state;
    case "ERROR":
      console.log(action.message);
    default:
      // console.log("INVALID ACTION", action.type);
      return state;
  }
};

export default systemReducer;
