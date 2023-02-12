export function useDblClick() {
    let isSingleClick = true

    const single = (callback: () => void) => {
        isSingleClick = true
        setTimeout(() => {
            if (isSingleClick) {
                callback()
            }
        }, 200)
    }

    const dbl = (callback: () => void) => {
        isSingleClick = false
        callback()
    }
    return [single, dbl]
}
