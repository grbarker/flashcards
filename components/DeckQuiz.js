import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { green, black, red, white } from '../utils/colors'
import { NavigationActions } from 'react-navigation'


function SubmitBtnYes ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtnYes : styles.AndroidSubmitBtnYes}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>Yes</Text>
    </TouchableOpacity>
  )
}

function SubmitBtnNo ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtNo : styles.AndroidSubmitBtnNo}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>No</Text>
    </TouchableOpacity>
  )
}


class DeckQuiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckName } = navigation.state.params

    return {
      title: deckName + " Quiz"
    }
  }
  submitYes = () => {
    const { navigation, score, activeQuestionIndex, deck, deckName } =  this.props
    const { questions } = deck
    const { question, answer } = deck.questions[activeQuestionIndex]
    const navigateActionCorrect = NavigationActions.navigate({
      routeName: 'DeckQuiz',
      params: {deckName: deckName, score: score+1, activeQuestionIndex: activeQuestionIndex+1},
    })
    const navigateActionIncorrect = NavigationActions.navigate({
      routeName: 'DeckQuiz',
      params: {deckName: deckName, score: score, activeQuestionIndex: activeQuestionIndex+1},
    })

    if (answer === 'Yes' ) {
      this.props.navigation.dispatch(navigateActionCorrect)
      console.log(score)
      console.log(activeQuestionIndex)
      console.log('Correct!')
    } else {
      this.props.navigation.dispatch(navigateActionIncorrect)
      console.log(score)
      console.log(activeQuestionIndex)
      console.log('Incorrect!')
    }
  }
  submitNo = () => {
    const { navigation, score, activeQuestionIndex, deck, deckName } =  this.props
    const { questions } = deck
    const { question, answer } = deck.questions[activeQuestionIndex]
    const navigateActionCorrect = NavigationActions.navigate({
      routeName: 'DeckQuiz',
      params: {deckName: deckName, score: score+1, activeQuestionIndex: activeQuestionIndex+1},
    })
    const navigateActionIncorrect = NavigationActions.navigate({
      routeName: 'DeckQuiz',
      params: {deckName: deckName, score: score, activeQuestionIndex: activeQuestionIndex+1},
    })

    if (answer === 'No' ) {
      this.props.navigation.dispatch(navigateActionCorrect)
      console.log(score)
      console.log(activeQuestionIndex)
      console.log('Correct!')
    } else {
      this.props.navigation.dispatch(navigateActionIncorrect)
      console.log(score)
      console.log(activeQuestionIndex)
      console.log('Incorrect!')
    }
  }

  toHome = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    const { deck, deckName, score, activeQuestionIndex } = this.props
    const { title, questions } = deck
    const { question, answer } = questions[activeQuestionIndex]

    return (
      <View>
        <View>
          <Text>{questions.length}</Text>
          <Text>Score: {score}</Text>
          <Text>Questions-Array-Active-Index: {activeQuestionIndex}</Text>
          <Text>{question}</Text>
          <Text>{answer}</Text>
          <Text>{score}</Text>
        </View>
        <View>
          <SubmitBtnYes onPress={this.submitYes} />
          <SubmitBtnNo onPress={this.submitNo} />
          <TextButton style={{margin: 20}} onPress={this.toHome}>
            Home
          </TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtnYes: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtnYes: {
    backgroundColor: green,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosSubmitBtnNo: {
    backgroundColor: red,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtnNo: {
    backgroundColor: red,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: black,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})

function mapStateToProps (state, { navigation }) {
  const { deckName, score, activeQuestionIndex } = navigation.state.params

  return {
    deckName,
    score,
    activeQuestionIndex,
    deck: state[deckName]

  }
}

export default connect(
  mapStateToProps,
)(DeckQuiz)
