import jquery from "jquery";

export default (dispatch) => {
  jquery.get("data/data.php", (dataOb) => {
    const infoJson = JSON.parse(dataOb);
    dispatch({ type: "BASE_DONATIONS", item: infoJson.donations });
    dispatch({ type: "BASE_TEAMS", item: infoJson.teams });
    dispatch({ type: "DATA_SET", item: infoJson.data });
  });
};
