export async function saveState<T>(key: string, state: T) {
    await localStorage.setItem(key, JSON.stringify(state))
}

export async function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = await localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}
