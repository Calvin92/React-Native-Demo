# 安装步骤
### - Android
* 配置 `Android SDK`
  1. 下载 Android Studio
  2. 用 Android Studio 的 SDK Manager 工具下载好所需的 Android SDK > 目前需要 Android SDK version 23.0.1
  3. 配置系统环境变量
    > 在 ~/.bash_profile 配置环境变量（记得修改路径中的用户名
    > export ANDROID_HOME=/Users/[xxxxxxx]/Library/Android/sdk  
    > PATH=$PATH:$ANDROID_HOME/tools  
    > PATH=$PATH:$ANDROID_HOME/platform-tools
    
* 配置 Android 虚拟机 
  1. 安装 Genymotion > 执行命令 brew cask install genymotion 
  2. 打开 Genymotion，新建一个虚拟安卓机 > 建议配置：4.4.4 - API 19 - 768 * 1280 - 2048MB

* 配置 JS   

  使用 yarn 安装 JS 的依赖

* 运行App 
  1. 打开 Genymotion，运行一个虚拟安卓机 
  2. 执行命令 react-native run-android > 如果出现 Timeout getting device list 错误，请参考 [Stackoverflow](http://stackoverflow.com/a/37932527/3828891)

### - iOS  
* 安装最新的Xcode  
  打开Mac下的 `Apple Store` 输入关键字 `Xcode` 即可下载安装 
  
* 运行App    

  执行命令 react-native run-ios


# 截图
![Android & iOS](https://github.com/Calvin92/React-Native-Demo/blob/master/screenshot/Android&iOS.png)
