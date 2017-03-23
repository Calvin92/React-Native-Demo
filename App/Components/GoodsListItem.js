import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'

export default class extends React.Component {
  httpToHttps(url) { // 兼容ios
    return url.replace('http', 'https')
  }

  render() {
    const { rowData } = this.props
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <Image
            source={{uri: this.httpToHttps(rowData.imageurl)}}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text numberOfLines={2}>{rowData.wname}</Text>
          <Text style={styles.price}><Text style={{fontSize: 10}}>¥</Text> {rowData.miaoShaPrice}</Text>
          <View>
            <Text style={styles.originalPrice}>¥ {rowData.jdPrice}</Text>
          </View>
          <Text style={styles.remindMe}>提醒我</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  // 0.42+版本才支持百分比布局
  container: {
    width: '96%', // 需要强制指定宽度
    flexDirection: 'row',
    margin: '2%',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  image: {
    width: 102,
    height: 102,
  },
  content: {
    flex: 1
  },
  price: {
    marginTop: 20,
    color: '#f23030',
  },
  originalPrice: {
    fontSize: 12,
    color: '#999999',
    textDecorationLine: 'line-through'
  },
  remindMe: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#52b948',
    color: '#ffffff',
    padding: 5,
    borderRadius: 3,
    overflow: 'hidden',  // iOS下如果不设置这个会导致圆角出不来
  }
})
