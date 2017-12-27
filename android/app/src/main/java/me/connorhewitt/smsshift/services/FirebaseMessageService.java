package me.connorhewitt.smsshift.services;

import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

/**
 * Created by connor on 12/27/17.
 */

public class FirebaseMessageService extends FirebaseMessagingService {
	private static final String TAG = "FirebaseMessageService";

	@Override
	public void onMessageReceived(RemoteMessage remoteMessage) {
		super.onMessageReceived(remoteMessage);

		Log.d(TAG, "Message received, data: " + remoteMessage.getData());
	}
}
