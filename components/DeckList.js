import React, { Component } from 'react'
import { View, TouchableOpacity, Text} from 'react-native'
import { connect } from 'react-redux'
import { updateList } from '../utils/api.js'
import {receiveDecks } from '../actions'

class DeckList extends Component {
  static navigationOptions = ({ navigation }) => {

    return {
      title: "Home"
    }
  }
  componentDidMount() {
    const { decks, dispatch } = this.props

    updateList().then((decks) => dispatch(receiveDecks(decks)))
  }

  render() {
    const { decks } =  this.props

    return (
      <View>
        {Object.keys(decks).map((key) => {
          const {title, questions } = decks[key]

          return (
            <View key={key}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(
                  'DeckHomePage',
                  { deckName: key }
                )}>
                <Text>{key}</Text>
                <Text>{title}</Text>
                <Text>{questions.length} cards</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DeckList)
