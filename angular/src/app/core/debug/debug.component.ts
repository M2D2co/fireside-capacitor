import { Component } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-firebase/crashlytics';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.scss'
})
export class DebugComponent {

  async crash() {
    await FirebaseCrashlytics.crash({ message: 'Test' });
  };
  
  async setCustomKey() {
    await FirebaseCrashlytics.setCustomKey({
      key: 'page',
      value: 'debug',
      type: 'string',
    });
  };
  
  async setUserId() {
    await FirebaseCrashlytics.setUserId({
      userId: '123',
    });
  };
  
  async log() {
    await FirebaseCrashlytics.log({
      message: 'Test',
    });
  };
  
  async setEnabled() {
    await FirebaseCrashlytics.setEnabled({
      enabled: true,
    });
  };
  
  async isEnabled() {
    const { enabled } = await FirebaseCrashlytics.isEnabled();
    return enabled;
  };
  
  async didCrashOnPreviousExecution() {
    const { crashed } = await FirebaseCrashlytics.didCrashOnPreviousExecution();
    return crashed;
  };
  
  async sendUnsentReports() {
    await FirebaseCrashlytics.sendUnsentReports();
  };
  
  async deleteUnsentReports() {
    await FirebaseCrashlytics.deleteUnsentReports();
  };
  
  async recordException() {
    await FirebaseCrashlytics.recordException({
      message: 'This is a non-fatal message.',
    });
  };

}
