import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class DeckHomePage extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckName } = navigation.state.params

    return {
      title: deckName
    }
  }

  toHome = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    const { decks, deckName, score, activeQuestionIndex } = this.props
    const { title, questions } = decks[deckName]

    return (
      <View >
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>
        <Text>{score}</Text>
        <Text>{activeQuestionIndex}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'DeckQuiz',
            { deckName: deckName ,
              score: score,
              activeQuestionIndex: activeQuestionIndex
            },
          )}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TextButton style={{margin: 20}} onPress={this.toHome}>
          Home
        </TextButton>
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckName } = navigation.state.params

  return {
    deckName,
    decks: state,
    score: state[deckName].score,
    activeQuestionIndex: state[deckName].activeQuestionIndex,

  }
}

export default connect(
  mapStateToProps,
)(DeckHomePage)
