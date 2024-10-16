import { Component, OnInit } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-firebase/crashlytics';
import { FirebasePerformance } from '@capacitor-firebase/performance';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.scss'
})
export class DebugComponent implements OnInit {

  crashlyticsEnabled = false
  crashedOnPreviousExecution: boolean | undefined = undefined

  async ngOnInit(): Promise<void> {
    this.crashlyticsEnabled = await this.isCrashLyticsEnabled()
    this.crashedOnPreviousExecution = await this.didCrashOnPreviousExecution()
  }

  //  test crashlytics

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
  
  async setCrashLyticsEnabled() {
    await FirebaseCrashlytics.setEnabled({ enabled: true, });
    this.crashlyticsEnabled = await this.isCrashLyticsEnabled()
  };
  
  async isCrashLyticsEnabled() {
    const { enabled } = await FirebaseCrashlytics.isEnabled().catch(() => ({ enabled: false }));
    return enabled;
  };
  
  async didCrashOnPreviousExecution() {
    const { crashed } = await FirebaseCrashlytics.didCrashOnPreviousExecution().catch(() => ({ crashed: undefined }));;
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

  //  test performance

  async startTrace() {
    await FirebasePerformance.startTrace({ traceName: 'test_trace' });
  };
  
  async stopTrace() {
    await FirebasePerformance.stopTrace({ traceName: 'test_trace' });
  };
  
  async incrementMetric() {
    await FirebasePerformance.incrementMetric({
      traceName: 'test_trace',
      metricName: 'item_cache_hit',
      incrementBy: 1,
    });
  };
  
  async setPerformanceEnabled() {
    await FirebasePerformance.setEnabled({ enabled: true });
  };
  
  async isPerformanceEnabled() {
    const result = await FirebasePerformance.isEnabled();
    return result.enabled;
  };

}
