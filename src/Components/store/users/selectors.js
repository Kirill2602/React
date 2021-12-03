import {REQUEST_STATUS} from "../../ChatAnswers/ChatAnswers";

export const selectUsersList = state => state.users.usersList
export const selectUsersLoading = (state) => state.users.request.status === REQUEST_STATUS.LOADING
export const selectUsersError = state => state.users.request.error