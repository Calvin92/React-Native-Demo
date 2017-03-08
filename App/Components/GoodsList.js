import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native'
import CellForGoodsList from './CellForGoodsList'

import { data } from '../mock'

export default class GoodsList extends React.Component {
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: this.ds.cloneWithRows(data[0])
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.activeItemIndex !== this.props.activeItemIndex) {
      this.setState({dataSource: this.ds.cloneWithRows(data[nextProps.activeItemIndex])})
    }
  }

  render() {
    return (
      <View style={styles.goodsListView}>
        <ListView
          dataSource={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          renderRow={rowData => <CellForGoodsList rowData={rowData} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  goodsListView: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
