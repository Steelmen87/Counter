export async function saveState<T>(key: string, state: T) {
    const stateAsString = await JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

export async function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = await localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}
