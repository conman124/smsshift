package me.connorhewitt.smsshift.receivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.provider.Telephony;
import android.telephony.SmsMessage;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.RemoteMessage;
import com.google.gson.Gson;

import me.connorhewitt.smsshift.R;

/**
 * Created by connor on 12/27/17.
 */

public class SMSMessageReceiver extends BroadcastReceiver {
	private final static String TAG = "SMSMessageReceiver";

	@Override
	public void onReceive(Context context, Intent intent) {
		final SmsMessage[] messages = Telephony.Sms.Intents.getMessagesFromIntent(intent);
		for (SmsMessage message : messages) {
			onSMSReceived(context, message);
		}
	}

	private void onSMSReceived(Context context, SmsMessage smsMessage) {
		SmsReceivedEvent ev = new SmsReceivedEvent(smsMessage);
		String sender = context.getString(R.string.gcm_defaultSenderId);

		FirebaseMessaging.getInstance().send(
			new RemoteMessage.Builder(sender + "@gcm.googleapis.com")
				.setMessageId(ev.senderNumber + "_" + ev.timestamp)
				.addData("msg_type", "received")
				.addData("msg", new Gson().toJson(ev))
			.build()
		);
	}

	private static class SmsReceivedEvent {
		public final String senderNumber;
		public final String senderName;
		public final String message;
		public final long timestamp;
		public final int color;

		private SmsReceivedEvent(SmsMessage smsMessage) {
			senderNumber = smsMessage.getDisplayOriginatingAddress();
			senderName = null;
			message = smsMessage.getDisplayMessageBody();
			timestamp = smsMessage.getTimestampMillis();
			color = 0;
		}
	}
}
