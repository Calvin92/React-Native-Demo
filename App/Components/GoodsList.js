import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native'
import CellForGoodsList from './CellForGoodsList'

export default class GoodsList extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([{}, {}, {}, {}, {}, {}, {}])
    }
  }

  render() {
    return (
      <View style={styles.goodsListView}>
        <ListView
          dataSource={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          renderRow={rowData => <CellForGoodsList />}
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
