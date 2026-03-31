import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinService } from '../../services/join.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {

  members: any[] = [];

  constructor(
    private joinService: JoinService,
    private cd: ChangeDetectorRef   // ✅ ADD THIS
  ) { }

  ngOnInit() {
    this.joinService.getMembers().subscribe({
      next: (data) => {
        console.log("API DATA:", data);
        this.members = data;

        this.cd.detectChanges();   // ✅ FORCE UPDATE
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
