import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JoinService } from '../../services/join.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {

  member = {
    name: '',
    email: '',
    phone: '',
    voiceType: ''
  };

  constructor(private joinService: JoinService) { }

  submit() {

    // ✅ VALIDATION (NEW)
    if (!this.member.name || !this.member.email || !this.member.phone || !this.member.voiceType) {
      alert("❌ Please fill all fields before submitting!");
      return;
    }

    // ✅ API CALL
    this.joinService.join(this.member).subscribe({
      next: (res: any) => {
        alert(
          `✅ ${this.member.name}\nVoice Type: ${this.member.voiceType}\n\nJoined Successfully!`
        );

        console.log(res);

        // ✅ RESET FORM (NEW)
        this.member = {
          name: '',
          email: '',
          phone: '',
          voiceType: ''
        };
      },
      error: (err) => {
        console.error(err);
        alert("❌ Error connecting to server");
      }
    });
  }
}
