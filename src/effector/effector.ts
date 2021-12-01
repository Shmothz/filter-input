import {createEvent, createStore} from "effector";

const store = {
 words: [],
 numbers: [],
 other: []
}

export const addNumber = createEvent()
export const addWord = createEvent()
export const addOther = createEvent()

const $store = createStore(store)
 .on(addNumber, (state, newNumber) => {
  state.numbers.push(newNumber)
  return {...state}
 })
 .on(addWord, (state, newWord) => {
  state.words.push(newWord)
  return {...state}
 })
 .on(addOther, (state, {newValue}) => {
  state.other.push(newValue)
  return {...state}
 })

export default $store