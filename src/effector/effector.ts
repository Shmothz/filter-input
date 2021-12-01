import {createEvent, createStore} from "effector";

type wordsType = {
    value: string,
    counter?: number
}
type numbersType = {
    value: string | number,
    counter?: number
}
type otherType = {
    value: string | number,
    counter?: number
}

const store = {
    words: [] as wordsType[],
    numbers: [] as numbersType[],
    other: [] as otherType[]
}
// @ts-ignore
window.__store__ = store
export type storeType = typeof store

export const addNumber = createEvent<numbersType>()
export const addWord = createEvent<wordsType>()
export const addOther = createEvent<otherType>()


const $store = createStore<storeType>(store)
    .on(addNumber, (state, {value, counter}) => {
        if (state.numbers.find(i => i.value === value)) {
            // @ts-ignore
            state.numbers.find(i => i.value === value).counter += 1
        } else {
            state.numbers.push({value, counter})
        }
        return {...state}
    })
    .on(addWord, (state, {value, counter}) => {
        if (state.words.find(i => i.value === value)) {
            // @ts-ignore
            state.words.find(i => i.value === value).counter += 1
        } else {
            state.words.push({value, counter})
        }
        return {...state}
    })
    .on(addOther, (state, {value, counter}) => {
        if (state.other.find(i => i.value === value)) {
            // @ts-ignore
            state.other.find(i => i.value === value).counter += 1
        } else {
            state.other.push({value, counter})
        }
        return {...state}
    })

export default $store