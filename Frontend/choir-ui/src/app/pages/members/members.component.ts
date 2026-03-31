import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinService } from '../../services/join.service';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {

  members: any[] = [];

  constructor(private joinService: JoinService) { }

  ngOnInit() {
    this.joinService.getMembers().subscribe({
      next: (data) => {
        console.log("API DATA:", data); 
        this.members = data;
      },
      error: (err) => {
        console.error("ERROR:", err);
      }
    });
  
  }
}
