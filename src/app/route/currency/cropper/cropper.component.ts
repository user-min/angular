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

  constructor(private msg: NzMessageService) {
  }

  ngOnInit() {
  }

  fileChangeEvent(event: any): void {
    console.log('input的值', event.path[0].files);
    if (event.path[0].files.length === 0) {
      this.showButton = false;
    }
    if (event.path[0].files.length > 0) {
      this.showButton = true;
    }
    console.log(23333, event);
    this.imageChangedEvent = event;
    this.isUploaded = true;
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
  }

  imageLoaded() {
    console.log(245555);
  }
}
