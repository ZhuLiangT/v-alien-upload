# v-alien-upload

#### vue.js上传组件，支持自动压缩、可预、删除、多选、显示上传进度、图片展示等功能

#### 安装（npm）
```
npm install alienupload --save
```

#### 使用

```javascript
import ValienUpload from 'alienupload'
Vue.use(ValienUpload)
```

#### 属性

<table>
  <tr>
    <th>属性</th>
    <th>说明</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>width</td>
    <td>组件宽度</td>
    <td>String</td>
    <td>100%</td>
  </tr>
  <tr>
    <td>compressQuality</td>
    <td>文件压缩质量（0.1-1）1表示不压缩</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>limitSize</td>
    <td>文件压缩的限制，大于这个尺寸开始压缩(单位KB)</td>
    <td>Number</td>
    <td>1024</td>
  </tr>
  <tr>
    <td>uploadType</td>
    <td>click表示使用点选，drag表示拖拽，all表示两个都使用</td>
    <td>String</td>
    <td>all</td>
  </tr>
  <tr>
    <td>imageLimit</td>
    <td>图片上传数量最大限制，默认不限制</td>
    <td>Number</td>
    <td>0</td>
  </tr>
  <tr>
    <td>imageMinLimit</td>
    <td>图片最小上传数量(默认不限制)</td>
    <td>Number</td>
    <td>0</td>
  </tr>
  <tr>
    <td>showProgress</td>
    <td>是否显示进度条</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>ProgressPercent</td>
    <td>进度条进度</td>
    <td>Number</td>
    <td>0</td>
  </tr>
  <tr>
    <td>progressColor</td>
    <td>进度条颜色</td>
    <td>Number</td>
    <td>#2d8cf0</td>
  </tr>
  <tr>
    <td>multipleClass</td>
    <td>同一个页面该组件使用多个时传入该参数,给组件加上该类名，以防止图片添加混乱</td>
    <td>String</td>
    <td>null</td>
  </tr>
  <tr>
    <td>BtnColor</td>
    <td>按钮颜色</td>
    <td>String</td>
    <td>#2d8cf0</td>
  </tr>
  <tr>
    <td>showImageList</td>
    <td>需要展示的图片数组，如果有图片需要进行展示，直接传入该数组([{name:X,src:XX}])</td>
    <td>Array</td>
    <td>[ ]</td>
  </tr>
  <tr>
    <td>showImageListLimit</td>
    <td>传入的展示图片数组是否算入限制数量</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>multiple</td>
    <td>是否支持文件多选</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>


#### 方法
<table>
  <tr>
    <th>方法名称</th>
    <th>说明</th>
    <th>返回值</th>
  </tr>
  <tr>
    <td>count-exceed-limit</td>
    <td>图片超出限制函数，返回参数为more表示超过限制，为less表示小于限制</td>
    <td>exceedTyoe</td>
  </tr>
  
  <tr>
    <td>mage-upload-error</td>
    <td>图片加入待上传数组出错</td>
    <td>出错code</td>
  </tr>
  
  <tr>
    <td>upload-img</td>
    <td>上传图片，用户点击上传按钮触发，返回当前待上传图片数组</td>
    <td>files数组</td>
  </tr>
  
  
  <tr>
    <td>image-list-change</td>
    <td>每成功添加一张图片到待上传数组便会触发此回调</td>
    <td>添加到数组的file</td>
  </tr>
  
  <tr>
    <td>delete-show-img</td>
    <td>添加的展示数组中用户点击删除其中的图片时触发的回调</td>
    <td>item,index</td>
  </tr>
  
  ```
  this.$refs.alienupload.uploadImg()//触发上传文件
  this.$refs.alienupload.clearUp()//清空队列文件
  ```
  
    
  
 
</table>

