import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()
export class AllService {
  breadcrumbShow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient,
              private message: NzMessageService,
              private router: Router,
              private modalService: NzModalService,
              private notification: NzNotificationService) {
    this.getBreadcrumbState();
  }

  setBreadcrumbState(breadcrumb: boolean) {
    this.breadcrumbShow.next(breadcrumb);
  }

  getBreadcrumbState(): Observable<boolean> {
    return this.breadcrumbShow.asObservable();
  }
}

