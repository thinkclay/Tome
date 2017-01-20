// @flow
import C from '../config/constants';
import * as overlayActions from './overlayActions';

const menu = (type: string) => ({
  type
});

export function changeSection() {
  return (dispatch: () => void) => {
    dispatch(overlayActions.show());
    dispatch(menu(C.MENU.CHANGE_SECTION));
  };
}

export function changeTopic() {
  return (dispatch: () => void) => {
    dispatch(overlayActions.show());
    dispatch(menu(C.MENU.CHANGE_TOPIC));
  };
}
