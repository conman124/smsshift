package me.connorhewitt.smsshift.activities;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.telephony.SmsManager;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.google.firebase.iid.FirebaseInstanceId;

import me.connorhewitt.smsshift.Manifest;
import me.connorhewitt.smsshift.R;

public class LoginActivity extends Activity implements View.OnClickListener {

	private final static int SMS_PERMISSION_REQUEST = 0;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_login);

		this.findViewById(R.id.button).setOnClickListener(this);

		Log.d("LoginActivity", FirebaseInstanceId.getInstance().getToken());

		this.requestPermissions(new String[] {android.Manifest.permission.RECEIVE_SMS, android.Manifest.permission.READ_SMS, android.Manifest.permission.SEND_SMS}, SMS_PERMISSION_REQUEST);
	}

	@Override
	public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
		if(requestCode == SMS_PERMISSION_REQUEST) {
			Toast.makeText(this, "SMS permission granted.", Toast.LENGTH_LONG).show();
		}
	}

	@Override
	public void onClick(View view) {
		final SmsManager smsManager = SmsManager.getDefault();
		smsManager.sendTextMessage(smsManager.getCarrierConfigValues().getString("emailGatewayNumber"), null, "connor.hewitt@gmail.com Testing!", null, null);
	}
}
