package me.connorhewitt.smsshift.services;

import android.telephony.SmsManager;
import android.util.Patterns;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.google.gson.Gson;

/**
 * Created by connor on 12/27/17.
 */

public class FirebaseMessageService extends FirebaseMessagingService {
	private static final String TAG = "FirebaseMessageService";

	@Override
	public void onMessageReceived(RemoteMessage remoteMessage) {
		super.onMessageReceived(remoteMessage);

		if("send".equals(remoteMessage.getData().get("type"))) {
			sendSMS(new Gson().fromJson(remoteMessage.getData().get("event"), SmsSendEvent.class));
		}
	}

	private void sendSMS(SmsSendEvent event) {
		final SmsManager smsManager = SmsManager.getDefault();
		if(isEmail(event.to)) {
			event.message = event.to + " " + event.message;
			event.to = smsManager.getCarrierConfigValues().getString("emailGatewayNumber");
		}

		smsManager.sendTextMessage(event.to, null, event.message, null, null);
	}

	private static boolean isEmail(String string) {
		return Patterns.EMAIL_ADDRESS.matcher(string).matches();
	}

	private static class SmsSendEvent {
		String to;
		String message;
	}
}
