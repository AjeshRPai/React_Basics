import dispatcher from "./MyDispatcher";

export function create(text){
  dispatcher.dispatch(
    {
      type:"Value from create",
    }
  );
}
export function deletethis(text){
  dispatcher.dispatch(
    {
      type:"Value from delete",
    }
  );
}
