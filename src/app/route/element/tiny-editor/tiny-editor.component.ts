import {Component, OnInit} from '@angular/core';
import {TinymceService} from '../../../core/service/tinymce.service';

@Component({
  selector: 'app-tiny-editor',
  templateUrl: './tiny-editor.component.html',
  styleUrls: ['./tiny-editor.component.less']
})
export class TinyEditorComponent implements OnInit {

  // 富文本编辑器配置
  tinymceOption = this.tinymceService.getTinymceOption({height: 250});

  constructor(private tinymceService: TinymceService) {
  }

  ngOnInit() {
  }

}
