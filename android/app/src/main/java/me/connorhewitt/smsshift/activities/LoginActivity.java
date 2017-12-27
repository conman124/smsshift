package me.connorhewitt.smsshift.activities;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;

import me.connorhewitt.smsshift.R;

public class LoginActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_login);

		Log.d("LoginActivity", FirebaseInstanceId.getInstance().getToken());
	}
}
