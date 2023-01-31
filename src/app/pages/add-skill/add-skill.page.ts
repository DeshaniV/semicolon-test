import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.page.html',
  styleUrls: ['./add-skill.page.scss'],
})
export class AddSkillPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addSkillData() {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 500)
  }

}
