import {
    getUsers,
    getUsersFailure,
    getUsersLoading,
    getUsersSuccess,
    REQUEST_USERS_FAILURE,
    REQUEST_USERS_LOADING,
    REQUEST_USERS_SUCCESS
} from "../actions";

describe('getUsersLoading', () => {
    it('return obj with type', () => {
        const expected = {
            type: REQUEST_USERS_LOADING
        }
        const received = getUsersLoading()

        expect(received).toEqual(expected)
    })
})

describe('getUsersSuccess', () => {
    it('return obj with type and payload', () => {
        const payload = []
        const expected = {
            type: REQUEST_USERS_SUCCESS,
            payload
        }
        const received = getUsersSuccess(payload)

        expect(expected).toEqual(received)
    })
})

describe('getUsersFailure', () => {
    it('return obj with type and payload', () => {
        const payload = []
        const expected = {
            type: REQUEST_USERS_FAILURE,
            payload
        }
        const received = getUsersFailure(payload)

        expect(expected).toEqual(received)
    })
})

describe('getUsers', () => {
    it('dispatch getUsersLoading', () => {
        const mockDispatch = jest.fn();

        getUsers()(mockDispatch)

        expect(mockDispatch).toHaveBeenCalledWith(getUsersLoading())
    })

    it('dispatch success action on successful fetch', async () => {
        const result = {users: []}
        fetch.mockResponseOnce(JSON.stringify(result))
        const mockDispatch = jest.fn();
        await getUsers()(mockDispatch)

        expect(mockDispatch).toHaveBeenLastCalledWith(getUsersSuccess(result))
    });

    it('dispatch failure action on error in fetch', async () => {
        fetch.mockRejectOnce(new Error('test error'))
        const mockDispatch = jest.fn();
        await getUsers()(mockDispatch)

        expect(mockDispatch).toHaveBeenLastCalledWith(getUsersFailure('test error'))
    });
})