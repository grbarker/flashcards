export const RECEIVE_DECKS  = 'DECKS'


export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}
