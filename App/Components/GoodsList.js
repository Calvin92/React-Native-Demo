import React, { Component } from 'react'
import {
  StyleSheet,
  ListView,
  ActivityIndicator,
} from 'react-native'

import CellForGoodsList from './GoodsListItem'

export default class extends Component {
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (prevRow, nextRow) => prevRow !== nextRow})
  }

  renderHeader() {
    return this.props.fetching
      ? <ActivityIndicator
          animating={true}
          style={{height: 50, justifyContent: 'center', alignItems: 'center'}} />
      : null
  }

  render() {
    return (
      <ListView
        style={styles.goodsListView}
        renderHeader={this.renderHeader.bind(this)}
        dataSource={this.ds.cloneWithRows(this.props.itemList)}
        showsVerticalScrollIndicator={false}
        enableEmptySections={true}
        renderRow={rowData => <CellForGoodsList rowData={rowData} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  goodsListView: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
