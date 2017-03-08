import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ListView,
  Image,
  Dimensions
} from 'react-native'

export default class extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          {/* iOS因为ATS的原因，默认不能加载http协议的资源 */}
          <Image
            source={{uri: 'https://img12.360buyimg.com/n4/jfs/t3619/91/2119213814/159429/dc868758/58425a85N4ec5dbde.jpg'}}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text numberOfLines={2}>Apple iPad mini 4 平板电脑 7.9英寸（128G WLAN版/A8芯片/Retina显示屏/Touch ID技术 MK9N2CH）深空灰色</Text>
          <Text style={styles.price}><Text style={{fontSize: 10}}>¥</Text> 2599</Text>
          <View>
            <Text style={styles.originalPrice}>¥ 2888</Text>
            <Text style={{height: 1, top: 8, position: 'absolute',backgroundColor: '#999999'}}>¥ 2888</Text>
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
    fontSize: 12
  },
  remindMe: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#52b948',
    color: '#ffffff',
    padding: 5,
    borderRadius: 3
  }
})
