import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import GoodsList from '../Components/GoodsList'

const gids = [42, 30, 44, 26, 50]
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItemIndex: 0,
      fetching: false,
      itemList: []
    }
  }

  _fetchItemList(index = 0) {
    this.setState({itemList: []})

    fetch(`https://ms.m.jd.com/seckill/seckillList.json?gid=${gids[index]}`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({fetching: false, itemList: data.seckillInfo.itemList})
    })
    .catch(e => {
      this.setState(fetching: false)
    })
  }

  componentDidMount() {
    this.setState({fetching: true})
    this._fetchItemList()
  }

  handleSwitchTabItem(index) {
    this.setState({activeItemIndex: index, fetching: true})
    this._fetchItemList(index)
  }

  renderTabs() {
    let h = new Date().getHours()
    h = h / 2 === 0 ? h : h - 1
    return [{}, {}, {}, {}, {}].map((item, i) =>
      <TouchableOpacity key={`tab-${i}`} style={styles.tabItem} onPress={this.handleSwitchTabItem.bind(this, i)}>
        <View  style={styles.tabItem}>
          <Text style={this.state.activeItemIndex === i ? styles.activeTabItem : null}>
          { (h + 2 * i) > 24 ? (h + 2 * i) - 24 : (h + 2 * i) } : 00
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
        <GoodsList
          fetching={this.state.fetching}
          itemList={this.state.itemList} />
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
