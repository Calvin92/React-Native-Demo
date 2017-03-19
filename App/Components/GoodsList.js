import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView,
  ActivityIndicator,
} from 'react-native'
import CellForGoodsList from './CellForGoodsList'

import { data } from '../mock'

export default class GoodsList extends React.Component {
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.activeItemIndex !== this.props.activeItemIndex) {
  //     this.setState({dataSource: this.ds.cloneWithRows(data[nextProps.activeItemIndex])})
  //   }
  // }

  renderHeader() {
    return this.props.fetching
      ? <ActivityIndicator
          animating={true}
          style={{height: 50, justifyContent: 'center', alignItems: 'center'}} />
      : null
  }

  render() {
    return (
      <View style={styles.goodsListView}>
        <ListView
          renderHeader={this.renderHeader.bind(this)}
          dataSource={this.ds.cloneWithRows(this.props.itemList)}
          showsVerticalScrollIndicator={false}
          enableEmptySections={true}
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
