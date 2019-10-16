import {
    Plugins,
    HapticsImpactStyle
  } from '@capacitor/core';
  
  const { Haptics } = Plugins;
  
  export class HapticsExample {
    hapticsImpact(style = HapticsImpactStyle.Heavy) {
      Haptics.impact({
        style: style
      });
    }
  
    hapticsImpactMedium(style) {
      this.hapticsImpact(HapticsImpactStyle.Medium);
    }
  
    hapticsImpactLight(style) {
      this.hapticsImpact(HapticsImpactStyle.Light);
    }
  
    hapticsVibrate() {
      Haptics.vibrate();
    }
  
    hapticsSelectionStart() {
      Haptics.selectionStart();
    }
  
    hapticsSelectionChanged() {
      Haptics.selectionChanged();
    }
  
    hapticsSelectionEnd() {
      Haptics.selectionEnd();
    }
  }