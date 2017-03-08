import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import GoodsList from '../Components/GoodsList'

export default class SecondKillContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItemIndex: 0
    }
  }

  handleSwitchActiveTabItem(index) {
    this.setState({activeItemIndex: index})
  }

  renderTabs() {
    const whatTimeIsNow = new Date().getHours() / 2 === 0 ? new Date().getHours() : new Date().getHours() - 1
    return [{}, {}, {}, {}, {}].map((item, i) =>
      <TouchableOpacity key={`tab-${i}`} style={styles.tabItem} onPress={this.handleSwitchActiveTabItem.bind(this, i)}>
        <View  style={styles.tabItem}>
          <Text style={this.state.activeItemIndex === i ? styles.activeTabItem : null}>
          { (whatTimeIsNow + 2 * i) > 24 ? (whatTimeIsNow + 2 * i) - 24 : (whatTimeIsNow + 2 * i) } : 00
          </Text>
          <Text style={{color: this.state.activeItemIndex === i ? '#f23030' : '#666666'}}>
            {i === 0 ? '秒杀中' : '即将开场'}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabsView}>
          {this.renderTabs.call(this)}
        </View>
        <GoodsList activeItemIndex={this.state.activeItemIndex} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1 // 100%高
  },
  tabsView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTabItem: {
    color: '#f23030',
    fontSize: 18,
  }
})
