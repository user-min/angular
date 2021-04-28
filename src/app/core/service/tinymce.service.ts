import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TinymceService {

  constructor(private http: HttpClient) {

  }

  /**
   * 返回配置对象 详细配置见 https://www.tiny.cloud/docs/general-configuration-guide/basic-setup/
   * @param option 用于替换默认配置
   */
  getTinymceOption(option?: object) {
    const defaultOption = {
      base_url: './assets/tinymce',
      // 注意大小写
      language: 'zh_CN',
      // tslint:disable-next-line:max-line-length
      font_formats: '宋体=simsun,serif;' +
        '仿宋=fangsong,serif;' +
        '新宋体=nsimsun,serif;' +
        '黑体=simhei,sans-serif;' +
        '隶书=lisu,sans-serif;' +
        '幼圆=youyuan,sans-serif;' +
        '楷体=kaiti,sans-serif;' +
        '标楷体=dfkai-sb,sans-serif;' +
        '微软雅黑=microsoft yahei,sans-serif;' +
        '微软正黑体=microsoft jhenghei,sans-serif;' +
        '细明体=mingliu,serif;' +
        '新细明体=pmingliu,serif;' +
        '华文细黑=stxihei,sans-serif;' +
        '华文黑体=stheiti,sans-serif;' +
        '华文楷体=stkaiti,sans-serif;' +
        '华文宋体=stsong,sans-serif;' +
        '华文中宋=stzhongsong,sans-serif;' +
        '华文仿宋=stfangsong,sans-serif;' +
        '华文彩云=stcaiyun,sans-serif;' +
        '华文琥珀=sthupo,sans-serif;' +
        '华文隶书=stliti,sans-serif;' +
        '华文行楷=stxingkai,sans-serif;' +
        '华文新魏=stxinwei,sans-serif;' +
        '方正舒体=fzshuti,sans-serif;' +
        '方正姚体=fzyaoti,sans-serif;' +
        'Andale Mono=andale mono,monospace;' +
        'Arial=arial,helvetica,sans-serif;' +
        'Arial Black=arial black,sans-serif;' +
        'Book Antiqua=book antiqua,palatino,serif;' +
        'Comic Sans MS=comic sans ms,sans-serif;' +
        'Courier New=courier new,courier,monospace;' +
        'Georgia=georgia,palatino,serif;' +
        'Helvetica=helvetica,arial,sans-serif;' +
        'Impact=impact,sans-serif;' +
        'Symbol=symbol;' +
        'Tahoma=tahoma,arial,helvetica,sans-serif;' +
        'Terminal=terminal,monaco,monospace;' +
        'Times New Roman=times new roman,times,serif;' +
        'Trebuchet MS=trebuchet ms,geneva,sans-serif;' +
        'Verdana=verdana,geneva,sans-serif;' +
        'Webdings=webdings;' +
        'Wingdings=wingdings,zapf dingbats',
      menubar: false,
      resize: false,
      branding: false,
      contextmenu: false,
      default_link_target: '_blank',
      height: 450,
      plugins: ['nonbreaking', 'fullscreen', 'powerpaste',
        'code', 'link', 'anchor', 'image', 'lists', 'advlist',
        'preview', 'searchreplace', 'visualblocks', 'visualchars', 'importpdf', 'formathtml',
        'axupimgs', 'indent2em', 'table'],

      toolbar: [
        // 第一行
        'undo redo | cut copy paste removeformat| formatselect fontselect fontsizeselect | ' +
        'table blockquote subscript superscript | anchor visualblocks visualchars code',
        // 第二行
        'forecolor backcolor bold italic underline strikethrough | ' +
        'alignleft aligncenter alignright alignjustify outdent indent lineheight indent2em | ' +
        'numlist bullist | link openlink unlink | image axupimgs | searchreplace fullscreen preview importpdf formathtml'
      ],
      setup: editor => {
      },
      // 上传图片方法
      images_upload_handler: (blobInfo, succFun, failFun) => {
        const file = blobInfo.blob();
        const formData = new FormData();
        formData.append('file', file);
        this.http.post(`${environment.gateway}/filecenter/file`, formData).subscribe((res: any) => {
          const gateway = environment.production ? `${window.location.origin}/backstage` : `${environment.gateway}`;
          succFun(`${gateway}/filecenter/file/${res.data.id}`);
        }, err => {
          failFun(`图片上传失败!`);
        });
      },
      file_picker_types: ['file'],
      file_picker_callback: (callback, value, meta) => {
        if (meta.filetype === 'file') {
          // 模拟出一个input用于添加本地文件
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          // 若果是PDF-File选择框
          if (meta.fieldname === 'PDFFile') {
            input.setAttribute('accept', 'application/pdf');
          }
          input.click();
          input.onchange = () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append('file', file);
            const req = new HttpRequest('POST', `${environment.gateway}/filecenter/file`, formData, {reportProgress: true});

            let precent = 0;
            const div = document.createElement('div');
            div.id = 'precentDiv';
            div.style.cssText = 'width: 100%;height: 100%; position: fixed; z-index: 99999; top: 0; background: rgb(255 255 255 / 0.4)';
            const html = '<div style="width: 280px;height: 20px; position: absolute;left: 50%; top: 50%;transform: translate(-50%,-50%);border:1px solid #49a9ee; border-radius: 50px;">' +
              '<div id ="precentColor" style="height: 100%;width: 0%; background: #49a9ee; border-radius: 50px;">' +
              '<span id="num" style="float: right;display: block; color: #666666; line-height: 20px;"></span></div></div>';
            document.body.appendChild(div);
            div.innerHTML = html;
            return this.http.request(req).subscribe((res: any) => {
              switch (res.type) {
                // 正在上传
                case HttpEventType.UploadProgress:
                  precent = Math.round(100 * res.loaded / res.total);
                  if (precent > 95 || precent === 100) {
                    precent = 95;
                  }
                  document.getElementById('precentColor').style.width = precent + '%';
                  document.getElementById('num').innerHTML = precent + '%';
                  break;
                // 上传完毕
                case HttpEventType.Response:
                  // 回调
                  document.body.removeChild(div);
                  console.log('resresresres', res);
                  const gateway = environment.production ? `${window.location.origin}/backstage` : `${environment.gateway}`;
                  callback(`${gateway}/filecenter/file/${res.body.data.id}`, {text: file.name});
                  break;
                // default:
                // document.body.removeChild(div);
              }
            });
          };
        }


        // Provide image and alt text for the image dialog
        if (meta.filetype === 'image') {
          callback('myimage.jpg', {alt: 'My alt text'});
        }
        // Provide alternative source and posted for the media dialog
        if (meta.filetype === 'media') {
          callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
        }
      }
    };
    return _.assign(defaultOption, option);
  }
}




