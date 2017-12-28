package me.connorhewitt.smsshift.receivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.provider.Telephony;
import android.telephony.SmsMessage;
import android.util.Log;

/**
 * Created by connor on 12/27/17.
 */

public class SMSMessageReceiver extends BroadcastReceiver {

	private final static String TAG = "SMSMessageReceiver";

	@Override
	public void onReceive(Context context, Intent intent) {
		final SmsMessage[] messages = Telephony.Sms.Intents.getMessagesFromIntent(intent);
		for (SmsMessage message : messages) {
			Log.d(TAG, String.format("Message from %s, body: \"%s\"", message.getDisplayOriginatingAddress(), message.getDisplayMessageBody()));
		}
	}
}
