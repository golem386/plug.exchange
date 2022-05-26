import * as actionTypes from '../../actionTypes';

export function onModelOpen(model: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.OPEN_MODEL,
    model,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}