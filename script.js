$(document).ready(function() {
  var noDevicesFound, BLEAddressList, AutoUpdateEnabled, SelectedCharacteristic, SelectedService, SelectedDeviceAddress, CharacteristicsList, DeviceServicesList, UncheckedImage, CheckedImage;
  /**
   * Describe this function...
   */
  function ResetViewsAndLists() {
    // Block#: 31
    BLEAddressList = [];
    // Block#: 33
    DeviceServicesList = [];
    // Block#: 35
    CharacteristicsList = [];
    // Block#: 37
    // Block#: 38
    // Block#: 39
    // Block#: 40
    SelectedDeviceAddress = null;
    // Block#: 42
    SelectedService = null;
    // Block#: 44
    SelectedCharacteristic = null;
    // Block#: 46
    AutoUpdateEnabled = false;
    // Block#: 48
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("CharacteristicValue", '');
  }
  /**
   * Describe this function...
   */
  function BluetoothCheck() {
    // Block#: 51
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("IsBTAvailableFlag", (com.fc.JavaScriptDistLib.TextLib.convertToText(''))); // Block#: 54
    if(false) {
      // Block#: 56
      com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("IsBTEnabledFlag", '#33cc00');
    } else {
      // Block#: 58
      com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("IsBTEnabledFlag", '#ff0000');
    }
    // Block#: 60
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("IsBTEnabledFlag", (com.fc.JavaScriptDistLib.TextLib.convertToText(''))); // Block#: 63
    if(false) {
      // Block#: 65
      com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("IsBTEnabledFlag", '#33cc00');
    } else {
      // Block#: 67
      com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("IsBTEnabledFlag", '#ff0000');
    }
  }
  /**
   * Describe this function...
   */
  function VarInit() {
    // Block#: 123
    BLEAddressList = [];
    // Block#: 125
    SelectedDeviceAddress = null;
    // Block#: 127
    DeviceServicesList = [];
    // Block#: 129
    SelectedService = null;
    // Block#: 131
    CharacteristicsList = [];
    // Block#: 133
    SelectedCharacteristic = null;
    // Block#: 135
    AutoUpdateEnabled = false;
    // Block#: 137
    UncheckedImage = (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://snapp.click/api/v2/raws/projects/resources/a13b811c-8bfb-4abc-9247-0d7943d88542"));
    // Block#: 139
    CheckedImage = (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://snapp.click/api/v2/raws/projects/resources/b1fed3fc-584f-422b-86db-d26383770565"));
  }
  // Block#: 1
  function on_start() {
    try {
      // Block#: 2
      VarInit();
      // Block#: 3
      BluetoothCheck();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Application.registerEvent('start', on_start);
  // Block#: 4
  function on_screen_showConfigScreen() {
    try {
      // Block#: 5
      BluetoothCheck();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="ConfigScreen"]').on('show', on_screen_showConfigScreen);
  com.fc.JavaScriptDistLib.Screen.screenDict['showConfigScreen'] = on_screen_showConfigScreen;
  // Block#: 6
  function on_GetPairedDevices_click(e) {
    try {
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="GetPairedDevices"]').on('click', on_GetPairedDevices_click);
  // Block#: 21
  function on_BTRequest_click(e) {
    try {
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="BTRequest"]').on('click', on_BTRequest_click);
  // Block#: 23
  function on_ScanForBLE_click(e) {
    try {
      // Block#: 24
      BLEAddressList = [];
      // Block#: 26
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="ScanForBLE"]').on('click', on_ScanForBLE_click);
  // Block#: 69
  function on_enabled() {
    try {
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Application.registerEvent('enabled', on_enabled);
  // Block#: 77
  // Block#: 80
  function on_screen_showBLE() {
    try {
      // Block#: 81
      // Block#: 82
      // Block#: 83
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="BLE"]').on('show', on_screen_showBLE);
  com.fc.JavaScriptDistLib.Screen.screenDict['showBLE'] = on_screen_showBLE;
  // Block#: 84
  function on_StopBLEScan_click(e) {
    try {
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="StopBLEScan"]').on('click', on_StopBLEScan_click);
  // Block#: 86
  // Block#: 107
  function on_disabled() {
    try {
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  com.fc.JavaScriptDistLib.Application.registerEvent('disabled', on_disabled);
  // Block#: 115
  function on_TestBLE_click(e) {
    try {
      // Block#: 116
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="BLE"]');
      showScreen.show();
      history.pushState({
        'view': 'BLE'
      }, 'BLE', 'BLE');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TestBLE"]').on('click', on_TestBLE_click);
  // Block#: 141
  // Block#: 147
  function on_Connect_click(e) {
    try {
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Connect"]').on('click', on_Connect_click);
  // Block#: 155
  // Block#: 158
  // Block#: 174
  function on_Disconnect_click(e) {
    try {
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Disconnect"]').on('click', on_Disconnect_click);
  // Block#: 185
  // Block#: 191
  function on_GetServices_click(e) {
    try {
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="GetServices"]').on('click', on_GetServices_click);
  // Block#: 199
  // Block#: 202
  // Block#: 218
  function on_GetCharacteristics_click(e) {
    try {
      // Block#: 219
      CharacteristicsList = 0;
      // Block#: 223
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="GetCharacteristics"]').on('click', on_GetCharacteristics_click);
  // Block#: 224
  // Block#: 230
  function on_GetCharacteristicValue_click(e) {
    try {
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="GetCharacteristicValue"]').on('click', on_GetCharacteristicValue_click);
  // Block#: 238
  function on_AutoUpdate_click(e) {
    try {
      // Block#: 239
      if(AutoUpdateEnabled) {
        // Block#: 241
        AutoUpdateEnabled = false;
      } else {
        // Block#: 245
        AutoUpdateEnabled = true;
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="AutoUpdate"]').on('click', on_AutoUpdate_click);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="ConfigScreen"]').show();
});
// Generated by snapp
// 611671-800357-704420-110572
