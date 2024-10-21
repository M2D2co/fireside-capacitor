import { Component, OnDestroy } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { first, mergeMap, switchMap, takeUntil, tap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';
import { Chat } from '../chat.model';
import { ChatService } from '../services/chat.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnDestroy {
  private destroyed$: Subject<boolean> = new Subject();
  currentUser: Profile | null = null;

  readonly chatForm: UntypedFormGroup;
  readonly chats: Observable<Chat[]>;
  inputImage = false;
  user = this.auth.authState;

  constructor(
    public snackBar: MatSnackBar,
    public auth: AngularFireAuth,
    private authSvc: AuthService,
    private fb: UntypedFormBuilder,
    private chatService: ChatService,
    private db: AngularFirestore,
  ) {
    this.chatForm = this.fb.group({
      content: [''],
      file: [''],
      image: [''],
    });

    this.chats = this.chatService.list();

    this.authSvc.profile.pipe(takeUntil(this.destroyed$)).subscribe(user => {
      this.currentUser = user;
    });
  }

  sendChat() {
    const content = this.chatForm.get('content')?.value;
    const image = this.chatForm.get('image')?.value;

    if (!content && !image) {
      return;
    }

    if (!this.currentUser) {
      this.snackBar.open('User not logged in - cannot send chat', 'Close', {
        duration: 5000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    this.chatService.post(image && image.name ? image : content, this.currentUser)
      .then(() => {
        this.chatForm.reset();
      });
  }

  selectImage(event: any) {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.chatForm.patchValue({ image: file });
    }
  }

  toggleInputImage() {
    this.inputImage = !this.inputImage;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
