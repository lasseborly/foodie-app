import React from "react"
import styled from "@emotion/styled"
import { Capacitor, Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

const isHapticsAvailable = Capacitor.isPluginAvailable('Haptics');
const isLocalNotificationsAvailable = Capacitor.isPluginAvailable('LocalNotifications');

import { setStatusbarColor } from "../utility/utility.js"
import { HapticsExample } from "../utility/Haptics"

import { Div } from "../layouts/layout"
import { colors, shadows } from "../../style/theme"
import {
  headerCardPrimary,
  headerFoodTitle,
  listSubHeader,
  orderTotal,
  orderPrice
} from "../components/typography"

const haptics = new HapticsExample();

const Profile = () => {
  setStatusbarColor("themeRed1")
  console.log("window.ReactNativeWebView", window.ReactNativeWebView)
  return (
    <Div p="4" css={{ display: "block" }}>
      <h1 style={{ ...headerFoodTitle, width: "100%", display: "block" }}>
        Profile
      </h1>
      <Div>
        <h4>ReactNativeWebView btn:</h4>
        <p>{JSON.stringify(window.ReactNativeWebView)}</p>
        {window.ReactNativeWebView && (
          <button
            onClick={() => {
              window.ReactNativeWebView.postMessage("Vibrate!")
            }}
          >
            Vibrate
          </button>
        )}
      </Div>
      { isHapticsAvailable && (
        <button css={{
          marginTop: 25
        }} onClick={() => {
          haptics.hapticsVibrate()
        }}>Vibrate with Capasitor</button>
      )}

      {isLocalNotificationsAvailable && (
        <button css={{
          marginTop: 25
        }} onClick={() => {
          LocalNotifications.schedule({
            notifications: [
              {
                title: "Delicious food coming your way",
                body: "500g of dead cow please",
                id: 1,
                schedule: { at: new Date(Date.now() + 1000 * 5) },
                sound: null,
                attachments: null,
                actionTypeId: "",
                extra: null
              }
            ]
          });
        }}>Notification with Capasitor</button>
      )}
    </Div>
  )
}

export default Profile
