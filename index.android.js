import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  ToolbarAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  Picker,
  Switch
} from 'react-native';

import Modal from 'react-native-modalbox';
import BluetoothSerial from 'react-native-bluetooth-serial';

import { TriangleColorPicker, toHsv, fromHsv } from 'react-native-color-picker'
import { Buffer } from 'buffer';
global.Buffer = Buffer;
const iconv = require('iconv-lite');

const Button = ({ label, onPress }) =>
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={{ color: '#fff' }}>{label}</Text>
  </TouchableOpacity>;

class RopeZ extends Component {
  constructor (props) {
    super(props);
    this.state = {
      discovering: false,
      available: true,
      devices: [],
      device: null,
      mode: true,
      text: '',
      music: '',
      connected: false,
      custom: [[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    };
  }

  componentDidMount() {
    this.disconnect();
  }
  apply() {
    ToastAndroid.show('Success!', ToastAndroid.SHORT)
  }
  openText() {
    this.textModal.open();
  }
  openColor() {
    this.colorModal.open();
  }
  writePackets(message, packetSize = 64) {
    const toWrite = iconv.encode(message, 'cp852');
    const writePromises = [];
    const packetCount = Math.ceil(toWrite.length / packetSize);

    for (var i = 0; i < packetCount; i++) {
      const packet = new Buffer(packetSize);
      packet.fill(' ');
      toWrite.copy(packet, 0, i * packetSize, (i + 1) * packetSize);
      writePromises.push(BluetoothSerial.write(packet));
    }
  }
  sendMessage(msg) {
    if(!this.state.connected) {
      ToastAndroid.show('您还没有连接到 RopeZ 设备。', ToastAndroid.LONG);
    } else {
      BluetoothSerial.write(msg)
      .catch((err) => ToastAndroid.show(err, ToastAndroid.LONG))
    }
  }
  /*
  sendMessage(msg) {
    if(!this.state.connected) {

    }
  }
  */
  connect() {
    this.setState({
      available: false
    }, () => {
      BluetoothSerial.isEnabled()
      .then((v) => v ? v : BluetoothSerial.enable())
      .then(() => {
        return new Promise((resolve, reject) => {
		      setInterval((res) => {
              BluetoothSerial.isEnabled()
              .then((v) => {
                return v ? resolve(clearInterval()) : null;
              })
		      }, 100);
	      });
      })
      .then(() => BluetoothSerial.list())
      .then((devices) => {
        return Promise.all(devices.map((device) => {
          if(device.name == 'RopeZ') {
            this.setState({
              device: device,
            });
            return BluetoothSerial.connect(device.id);
          }
          else
          {
            return 0;
          }
        }));
      })
      .then((device) => {
        if(device != 0)
        {
          return this.setState({
            connected: true,
            available: true,
          });
        }
        else
        {
          return false;
        }
      })
      .then()
      .catch((err) => console.log(err));
    });
  }

  toggle(column, row, value) {
    let arr = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
    let i = 0, j = 0;
    for(i = 0; i < 8; i++)
      for(j = 0; j < 8; j++)
        arr[j][i] = this.state.custom[j][i];
    arr[row][column] = value * 1;
    this.setState({
      custom: arr,
    });
    console.log(arr);
  }

  disconnect() {
    BluetoothSerial.disconnect()
    .then(() => this.setState({ connected: false }))
    .then(() => BluetoothSerial.disable())
    .catch((err) =>console.log(err));
  }

  calcSum(arr) {
    let i = 0, result = 0;
    for(i = 0; i < 8; i++) {
      result += arr[i] * Math.pow(2, 8 - 1 - i);
    }
    return result;
  }

  render() {
    const buttonText = (this.state.connected) ? `断开 RopeZ  <${this.state.device.id}>` : '连接到 RopeZ';
    const buttonColor = (this.state.connected) ? '#FF5722' : '#66BB6A';
    return(
      <View style={styles.container}>
        <View>
          <ToolbarAndroid
            style={styles.toolbar}
            title={'RopeZ Assistant'}
            titleColor={'#FFFFFF'}
          />
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={this.state.connected ? this.disconnect.bind(this) : this.connect.bind(this)}
            disabled={!this.state.available}
            >
            <Text style={{ color: '#fff' }}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.showString}>
          <Text style={{flex: 3, textAlign: 'center'}}>显示</Text>
          <Text style={{flex: 4, fontWeight: 'bold', textAlign: 'center'}}>
          {
            this.state.mode ? "用户自定义" : this.state.text
          }
          </Text>
          <TouchableOpacity style={{flex: 3}} onPress={this.openText.bind(this)}>
            <View><Text>修改</Text></View>
          </TouchableOpacity>
        </View>
        <View style={styles.showString}>
          <Text style={{flex: 3, textAlign: 'center'}}>颜色</Text>
          <View style={{flex: 4, height: 20, backgroundColor: this.state.color}}>
          </View>
          <TouchableOpacity style={{flex: 3}} onPress={this.openColor.bind(this)}>
            <View><Text>修改</Text></View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.applyButton, { backgroundColor: '#283593' }]}
            onPress={this.apply.bind(this)}
            disabled={!this.state.available && this.state.connected}
            >
            <Text style={{ color: '#fff', textAlign: 'center'}}>应用</Text>
          </TouchableOpacity>
        </View>
        <Modal ref={(ref) => {this.colorModal = ref;}}>
          <View style={{flex: 1, padding: 15}}>
            <TriangleColorPicker
              oldColor='white'
              color={this.state.color}
              onColorSelected={color => {this.setState({color});}}
              onOldColorSelected={color => {this.setState({color});}}
              style={{flex: 1}}
            />
          </View>
        </Modal>
        <Modal ref={(ref) => {this.textModal = ref;}}>
          <View style={styles.textContainer}>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>显示类型</Text>
              </View>
              <View style={styles.rowValue}>
                <Text>文字</Text>
                <Switch value={this.state.mode} />
                <Text>自定义字模</Text>
              </View>
            </View>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>文字设置</Text>
              </View>
              <View style={styles.rowValue}>
                <TextInput
                  style={{flex:7, height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
              </View>
            </View>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>自定义</Text>
              </View>
              <View style={styles.rowValue}>
              </View>
            </View>
            <View style={styles.customContainer}>
              <View style={styles.customBox}>
              {
                this.state.custom.map((v, i) => {
                  return(
                    <View key={i} style={styles.customRow}>
                    {
                      v.map((w, j) => {
                        let val = (w == 1);
                        let bg = (val ? '#000' : '#FFF');
                        return(
                          <TouchableWithoutFeedback
                              key={j}
                              style={styles.customItem}
                              onPress={this.toggle.bind(this, j, i , !val)}>
                            <View style={{width: 40, height: 40, backgroundColor: bg, borderColor: '#CCC', borderWidth: 1,}}>
                            </View>
                          </TouchableWithoutFeedback>
                        );
                      })
                    }
                    </View>
                  );
                })
              }
              </View>
              <View>
              {
                this.state.custom.map((v, i) => {
                  let sum = this.calcSum(v);
                  return(
                    <Text key={i} style={styles.customRow}>
                      {sum}
                    </Text>
                  );
                })
              }
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  showString: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    alignSelf: 'center',
  },
  applyButton: {
    margin: 10,
    padding: 5,
  },
  toolbar: {
    height: 50,
    backgroundColor: '#3F51B5',
  },
  enableInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  connectionInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  connectionInfo: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    color: '#238923',
  },
  listContainer: {
    marginTop: 15,
    borderColor: '#ccc',
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
  listItem: {
    flex: 1,
    padding: 25,
    borderColor: '#ccc',
    borderBottomWidth: 0.5,
  },
  button: {
    margin: 5,
    padding: 25,
  },
  textContainer: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
  },
  rowItem: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 0,
  },
  rowField: {
    flex: 3,
  },
  rowValue: {
    flex: 7,
    flexDirection: 'row',
  },
  fieldText: {
    textAlign: 'center',
  },
  customContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBox: {
    //flex: 1,
    flexDirection: 'column',
  },
  customRow: {
    //flex: 1,
    flexDirection: 'row',
  },
  customItem: {
    margin: 2,
    height: 40,
    width: 40,
  }
})

AppRegistry.registerComponent('RopeZ', () => RopeZ);
