
export function setVisitPage(visitedPage) {
    return dispatch => {
        dispatch({
            type: 'SET_VISIT_PAGE',
            visitedPage
        })
    }

}
