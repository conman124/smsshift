package me.connorhewitt.smsshift.services;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

/**
 * Created by connor on 12/26/17.
 */

public class FirebaseTokenService extends FirebaseInstanceIdService {
	private final String TAG = "FirebaseTokenService";

	@Override
	public void onTokenRefresh() {
		String token = FirebaseInstanceId.getInstance().getToken();
		Log.d(TAG, "Refreshed token: " + token);
	}
}
