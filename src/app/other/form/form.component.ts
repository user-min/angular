import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UploadFile} from 'ng-zorro-antd';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  // 是否必填
  isRequired = {
    title: false,
    content: false,
    picFileId: false,
    summary: false,
    linkUrl: false
  };

  // 上传首页效果图片
  uploadImgParam = {
    uploadImgLoading: false,
    picHomeFile: null
  };

  // 上传图片列表
  imgList: UploadFile[] = [];

  // 内容详情编辑表单
  navContEditForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  deleteCurretnImage() {
    this.imgList = null;
    this.uploadImgParam.picHomeFile = null;
    this.navContEditForm.patchValue({picFileId: null});

  }

  confirm($event: string) {
    console.log($event);
    const file = this.dataURLtoFile($event, 'img_name');
    console.log(333, file);
  }

  dataURLtoFile(dataurl, filename) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], filename, {type: mime});
    this.uploadLogoImg(file);
  }

  uploadLogoImg(file) {
    this.uploadImgParam.uploadImgLoading = true;
    this.imgList = [];
    // const $temp = this.service.uploadFile(file).subscribe((data: any) => {
    //   this.uploadImgParam.uploadImgLoading = false;
    //   if (data.data) {
    //     this.imgList = this.imgList.concat(file);
    //     this.uploadImgParam.picHomeFile = `${environment.gateway}/filecenter/file/${data.data.id}`;
    //     this.navContEditForm.get('picFileId')!.setValue(data.data.id);
    //   } else {
    //     this.service.createMessage('error', '上传失败，请重新操作');
    //   }
    //   this.subscribed.push($temp);
    // }, () => {
    //   this.uploadImgParam.uploadImgLoading = false;
    // });
  }

  // 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。注意：IE9 不支持该方法；注意：务必使用 => 定义处理方法。
  beforeUploadLogo = (file: UploadFile): boolean => {
    console.log(2222222222222, file);
    // image/gif,image/jpeg,image/png,image/jpg
    // if (file.type != 'image/png' && file.type != 'image/gif' && file.type != 'image/jpeg' && file.type != 'image/jpg') {
    //   this.service.createMessage('error', '请选择上传PNG/GIF/JPEG/JPG格式的图片类型文件！');
    // } else if (file.size / 1024 / 1024 > 5) {
    //   this.service.createMessage('error', '请选择上传5M以内图片！');
    // } else {
    //   this.uploadLogoImg(file);
    // }
    return false;
  }
}
