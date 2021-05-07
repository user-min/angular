import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.less']
})
export class CropperComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageInfo: any;
  isAspectRatio: boolean;
  aspectRatio: number;
  showConfirmCrop = false;
  isUploaded = false;
  showButton = false; // 是否显示裁剪按钮
  @Output() private confirm = new EventEmitter<string>();
  isSpinning = false;
  files = null;
  imageScale = null;

  constructor(private msg: NzMessageService) {
  }

  ngOnInit() {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log('input的值', event.path[0].files);
    if (event.path[0].files.length === 0) {
      this.showButton = false;
    }
    if (event.path[0].files.length > 0) {
      this.showButton = true;
    }
    console.log(23333, event);
    this.isUploaded = true;
    this.files = null;
    // this.isSpinning = true;
  }

  imageCropped(event: ImageCroppedEvent) {
    console.log(1111111, event);
    this.croppedImage = event.base64;
    this.croppedImageInfo = event;
  }

  cropperReady() {
    // this.isSpinning = false;
  }

  loadImageFailed() {
    this.msg.error('文件选择失败');
    // this.isSpinning = false;
    console.log(1333);
  }

  inputScale(scale: number) {
    if (scale) {
      this.isAspectRatio = true;
      this.aspectRatio = scale;
    } else {
      this.isAspectRatio = false;
    }
  }

  changeScale($event) {
    if (this.imageScale != 0) {
      const reg = /^[0-9]+(\.[0-9]*)?$/g; // 匹配0，整数，小数
      const flag1 = reg.test(this.imageScale);
      const reg2 = /^[1-9]\d*$/; // 匹配整数
      const ints = this.imageScale.indexOf(':') !== -1 ? this.imageScale.split(':') : this.imageScale.split('：');
      let flag2 = false;
      if (ints.length === 2) {
        flag2 = reg2.test(ints[0]) && reg2.test(ints[1]);
      }
      let scale = null;
      console.log(222,  ints, flag2)
      if (flag1 || flag2) {
        if (flag1 === true) {
          scale = this.imageScale;
        }
        if (flag2 === true) {
          scale = ints[0] / ints[1];
        }
        console.log('scale', scale)
        this.isAspectRatio = true;
        this.aspectRatio = scale;
      } else {
        this.isAspectRatio = false;
      }
    }
  }

  confirmCrop() {
    this.showConfirmCrop = true;
    this.isUploaded = false;
  }

  // download() {
  //   const img = document.getElementById('downloadImg'); // 获取要下载的图片
  //   const url = img.src;                            // 获取图片地址
  //   const a = document.createElement('a');          // 创建一个a节点插入的document
  //   const event = new MouseEvent('click');          // 模拟鼠标click点击事件
  //   a.download = 'mochu_img';                    // 设置a节点的download属性值
  //   a.href = url;                                 // 将图片的src赋值给a节点的href
  //   a.dispatchEvent(event);
  // }

  upload() {
    this.confirm.emit(this.croppedImage);
    this.imageChangedEvent = null;
    this.showConfirmCrop = false;
  }

  cancelUpload() {
    this.imageChangedEvent = '';
    this.croppedImage = '';
    this.showConfirmCrop = false;
    this.isAspectRatio = false;
  }

  imageLoaded() {
    console.log(245555);
  }
}
