import { all, call, fork, takeEvery } from 'redux-saga/effects';
import { LayoutActionTypes } from './constants';

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass: string, action = 'toggle') {
    switch (action) {
        case 'add':
            if (document.body) document.body.classList.add(cssClass);
            break;
        case 'remove':
            if (document.body) document.body.classList.remove(cssClass);
            break;
        default:
            if (document.body) document.body.classList.toggle(cssClass);
            break;
    }

    return true;
}

/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * Note: Following are the functions which allows you to save the user prefrences on backend side by making an api request.
 * For now, we are just applying the required logic on frontend side
 * ----------------------------------------------------------------------------------------------------------------------------
 */

/**
 * Show the rightsidebar
 */
function* showRightSidebar() {
    try {
        yield call(manageBodyClass, 'end-bar-enabled', 'add');
    } catch (error) { () => undefined }
}

/**
 * Hides the rightsidebar
 */
function* hideRightSidebar() {
    try {
        yield call(manageBodyClass, 'end-bar-enabled', 'remove');
    } catch (error) { () => undefined }
}

export function* watchShowRightSidebar() {
    yield takeEvery(LayoutActionTypes.SHOW_RIGHT_SIDEBAR, showRightSidebar);
}

export function* watchHideRightSidebar() {
    yield takeEvery(LayoutActionTypes.HIDE_RIGHT_SIDEBAR, hideRightSidebar);
}

function* LayoutSaga() {
    yield all([fork(watchShowRightSidebar), fork(watchHideRightSidebar)]);
}

export default LayoutSaga;
