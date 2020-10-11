import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityService } from '../activity.service';
import { Activity } from '../types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  activityList: Observable<Activity[]>;

  constructor(activityService: ActivityService) {
    this.activityList = activityService.getAllActivities();
  }

}
