export default function (state = null, action) {
  switch (action.type) {
    case "SNAP_DATA":
      return action.payload;
    default:
      return null;
  }
}
