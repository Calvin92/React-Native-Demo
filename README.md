# 安装步骤
### - Android
  * 配置 `Android SDK`
    1. 下载 Android Studio
    2. 用 Android Studio 的 SDK Manager 工具下载好所需的 Android SDK > 目前需要 Android SDK version 23.0.1
    3. 配置系统环境变量
        在 ~/.bash_profile 配置环境变量（记得修改路径中的用户名
        `export ANDROID_HOME=/Users/[xxxxxxx]/Library/Android/sdk`
        `PATH=$PATH:$ANDROID_HOME/tools`
        `PATH=$PATH:$ANDROID_HOME/platform-tools`
```
yarn
react-native run-android  // 运行安卓，前提是先启动模拟器
react-native run-ios  // 运行iOS，直接运行就行，前提是使用安装了Xcode的Mac
```
# 截图
![Android & iOS](https://github.com/Calvin92/React-Native-Demo/blob/master/screenshot/Android&iOS.png)
