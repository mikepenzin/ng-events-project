import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Session, restrictedWords } from '../../shared';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() createSession = new EventEmitter();
  @Output() cancel = new EventEmitter();

  newSessionForm!: FormGroup;
  name: FormControl = new FormControl;
  presenter: FormControl = new FormControl;
  duration: FormControl = new FormControl;
  level: FormControl = new FormControl;
  abstract: FormControl = new FormControl;
  
  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required,
        Validators.maxLength(400)])

    this.newSessionForm = new FormGroup({
        name: this.name,
        presenter: this.presenter,
        duration: this.duration,
        level: this.level,
        abstract: this.abstract
    })
  }
  
  saveSession(formValues: { name: any; duration: string | number; level: any; presenter: any; abstract: any; }) {
    let session: Session = {
          id: undefined,
          name: formValues.name,
          duration: +formValues.duration,
          level: formValues.level,
          presenter: formValues.presenter,
          abstract: formValues.abstract,
          voters: []
      }
      // this.toastr.success("Session Added!");
      this.createSession.emit(session)
  }

  back() {
      this.cancel.emit()
  }
}


