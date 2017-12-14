

export function getMetaInfo (deck) {
  const decks = {
    Thermo: {
      title: 'Thermodynamics',

      questions: [
        {
          question: 'Is an isobaric process a thermodynamic process in which the pressure stays constant: ΔP = 0?',
          answer: 'Yes'
        },
        {
          question: 'Is an isothermal process a thermodynamic process in which the temperature stays constant: ΔT= 0?',
          answer: 'Yes'
        },
        {
          question: 'Does the valume change in an isochoric process?',
          answer: 'No'
        },
        {
          question: 'In an adiabatic process is there any heat transfer between the thermodynamic system and its surroundings?',
          answer: 'No'
        }
      ]
    },
    Space: {
      title: 'Space',
      questions: [
        {
          question: 'Something about planets, answer yes',
          answer: 'Yes'
        },
        {
          question: 'Something about planets, answer no',
          answer: 'No'
        },
        {
          question: 'Something about planets, answer yes',
          answer: 'Yes'
        },
        {
          question: 'Something about planets, answer no',
          answer: 'No'
        }
      ]
    },
    Deck3: {
      title: 'Deck3',
      questions: [
        {
          question: 'Something about something, answer yes',
          answer: 'Yes'
        },
        {
          question: 'Something about something, answer no',
          answer: 'No'
        },
        {
          question: 'Something about something, answer yes',
          answer: 'Yes'
        },
        {
          question: 'Something about something, answer no',
          answer: 'No'
        }
      ]
    },
    Deck4: {
      title: 'Deck4',
      questions: [
        {
          question: 'Something about something, answer yes',
          answer: 'Yes'
        },
        {
          question: 'Something about something, answer no',
          answer: 'No'
        },
        {
          question: 'Something about something, answer yes',
          answer: 'Yes'
        },
        {
          question: 'Something about something, answer no',
          answer: 'No'
        }
      ]
    },
  }

  return typeof deck === 'undefined' ? decks : decks[deck]
}
