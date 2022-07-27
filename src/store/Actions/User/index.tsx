import * as actionTypes from '../../actionTypes';

export function onModalOpen(modal: string | boolean) {
  const action: ArticleAction = {
    type: actionTypes.OPEN_MODAL,
    modal,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
